import { useParams, Link } from "react-router-dom";
import { SectionContainer, TechBadge } from "@/components/shared";
import { MarkdownRenderer } from "@/components/articles";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <SectionContainer>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/articles">Back to Articles</Link>
          </Button>
        </div>
      </SectionContainer>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SectionContainer>
      <article className="max-w-3xl mx-auto">
        {/* Back button */}
        <Button asChild variant="ghost" className="mb-8 group">
          <Link to="/articles">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-12 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">{article.description}</p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-4">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <MarkdownRenderer content={article.content} />
        </div>
      </article>
    </SectionContainer>
  );
}
