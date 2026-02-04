import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TechBadge } from "@/components/shared";
import type { Article } from "@/types";
import { calculateReadingTime, loadMarkdownContent } from "@/lib/markdown";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date + 'T00:00:00').toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [readTime, setReadTime] = useState<number | null>(null);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength).trim() + "...";
  };

  const limitTags = (tags: string[], maxCount: number) => {
    return tags.slice(0, maxCount);
  };

  useEffect(() => {
    if (!article?.contentFile) return;

    loadMarkdownContent(article.contentFile)
      .then((markdown) => {
        setReadTime(calculateReadingTime(markdown));
      })
      .catch(() => {
        setReadTime(null);
      });
  }, [article?.contentFile]);

  return (
    <Link to={`/articles/${article.slug}`}>
      <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 card-hover h-full">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap gap-2 mb-3">
            {limitTags(article.tags, 3).map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
            {article.tags.length > 3 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full bg-muted text-muted-foreground border border-border">
                +{article.tags.length - 3}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {article.title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{truncateDescription(article.description, 120)}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {readTime ? `${readTime} min read` : ""}
              </span>
            </div>

            <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
