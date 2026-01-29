import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Algo Lens",
    description:
      "Interactive visual platform to explore algorithms step by step and understand their internal behavior.",
    longDescription:
      "Algo Lens is an interactive learning platform designed to help developers deeply understand algorithms by visualizing their execution in real time. Instead of focusing only on final code or theory, the platform shows how algorithms evolve step by step, making state changes, execution flow, and decision points explicit and easy to follow.",
    technologies: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Algorithms",
      "Data Structures",
    ],
    githubUrl: "https://github.com/karendev1/AlgoLens",
    liveUrl: "https://algolens.karensantana.com/",
    image: "/algolens-demo.gif",
    context:
      "While studying algorithms, I noticed that most learning resources either present abstract theory or final implementations, but rarely explain how an algorithm progresses internally. This gap makes it harder for many developers to build strong intuition.",
    solution:
      "I built a React-based platform that visually demonstrates algorithms such as DFS, BFS, backtracking, and sorting. Each execution step highlights active elements, recursion depth, and key decision points, allowing users to follow the algorithm’s logic as it runs.",
    tradeoffs:
      "I chose to prioritize clarity, visual feedback, and learning experience over supporting a large number of algorithms. The platform is fully client-side, which simplifies the architecture and enables faster iteration on educational and visualization features.",
    learnings:
      "This project deepened my understanding of algorithms by translating abstract logic into visual models. I also improved my skills in state management, animation sequencing, and communicating complex algorithmic concepts in a clear and intuitive way.",
  },
];
