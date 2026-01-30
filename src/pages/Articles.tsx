import { SectionContainer, SectionHeader } from "@/components/shared";
import { ArticleCard } from "@/components/articles";
import { articles } from "@/data/articles";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    if (!searchTerm) return articles;
    
    const term = searchTerm.toLowerCase();
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term) ||
        article.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  }, [searchTerm]);
  return (
    <SectionContainer>
      <SectionHeader
        title="Articles"
        subtitle="Thoughts on front-end development, performance, and software engineering"
      />

      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-muted-foreground mt-2">
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
