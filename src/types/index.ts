export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "remote" | "hybrid" | "onsite";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  context: string;
  solution: string;
  tradeoffs: string;
  learnings: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  contentFile: string;
  date: string;
  readTime?: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
