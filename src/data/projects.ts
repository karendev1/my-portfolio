import type { Project } from "@/types";

export const projects: Project[] = [
  {
  id: "1",
  title: "Algo Lens",
  description: "Visual platform for understanding algorithms step by step",
  longDescription:
    "Algo Lens is a visual learning platform focused on helping developers understand how algorithms work internally through step-by-step, interactive visualizations of state changes and execution flow.",
  technologies: [
    "React",
    "TypeScript",
    "CSS Modules",
    "Algorithms",
    "Data Structures",
  ],
  githubUrl: "https://github.com/karendev1/AlgoLens",
  context:
    "When studying algorithms, I realized that most resources focus either on final code or theoretical explanations, but rarely show how an algorithm evolves step by step. Algo Lens was created to bridge this gap through visual exploration.",
  solution:
    "Built a React-based platform that visually represents algorithms such as DFS, BFS, backtracking, and sorting. Each step highlights active elements, recursion depth, and decision points, making the algorithm’s behavior easier to understand.",
  tradeoffs:
    "Prioritized clarity and learning experience over exhaustive algorithm coverage. Kept the platform fully client-side to simplify architecture and allow fast iteration on visual and educational features.",
  learnings:
    "Strengthened my understanding of algorithms by modeling their execution visually. Improved skills in state management, animation sequencing, and explaining complex algorithmic concepts in a clear and intuitive way.",
}
];
