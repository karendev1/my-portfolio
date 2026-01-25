import { SectionContainer, SectionHeader } from "@/components/shared";
import { ArticleCard } from "@/components/articles";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Articles"
        subtitle="Thoughts on front-end development, performance, and software engineering"
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
