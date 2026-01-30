import type { Article } from "@/types";

const rawArticles: Article[] = [
  {
    id: "1",
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance: A Practical Guide",
    description:
      "Learn how to identify and fix performance bottlenecks in React applications with real-world examples and proven techniques.",
    date: "2025-12-15",
    readTime: "8 min read",
    tags: ["React", "Performance", "Optimization"],
    contentFile: "optimizing-react-performance.md",
  },
  {
    id: "2",
    slug: "typescript-best-practices-2025",
    title: "TypeScript Best Practices in 2025",
    description:
      "Modern TypeScript patterns and practices for building maintainable applications, from strict typing to advanced generics.",
    date: "2025-11-20",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    contentFile: "typescript-best-practices-2025.md",
  },
  {
    id: "3",
    slug: "front-end-network-performance-optimization",
    title: "Front-End Network & Performance Optimization: A Practical Guide",
    description:
      "A practical, in-depth guide to front-end performance optimization, covering network strategies, browser rendering, JavaScript loading, caching, and real-world SPA techniques.",
    date: "2026-01-30",
    readTime: "18 min read",
    tags: [
      "Performance",
      "Web Performance",
      "Frontend",
      "Network",
      "JavaScript",
      "Browser Internals",
      "React",
      "Angular"
    ],
    contentFile: "front-end-network-performance-optimization.md",
  }
];

export const articles = rawArticles.sort((a, b) => new Date(b.date + 'T00:00:00').getTime() - new Date(a.date + 'T00:00:00').getTime());
