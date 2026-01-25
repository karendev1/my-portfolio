import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "BTG Pactual Bank",
    role: "Senior Front-End Software Engineer",
    period: "May 2024 - Present",
    location: "São Paulo, Brazil",
    type: "hybrid",
    description:
      "Senior front-end engineer working on a large-scale fintech investment platform in a highly regulated environment, with ownership over architecture, performance, and reliability.",
    achievements: [
      "Developed a new web investment platform, driving a 30%+ increase in investment transactions through web channels",
      "Implemented frontend observability using Datadog RUM & APM, reducing time-to-detect production issues by approximately 40%",
      "Designed and maintained a domain-based microfrontend architecture enabling independent deployments across investment domains",
      "Led the migration of a large Angular codebase from v15 to v18, improving scalability, maintainability, and long-term framework support",
      "Built mission-critical investment flows, including 24/7 redemptions and special operations, ensuring reliability in time-sensitive financial transactions",
    ],
    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "Microfrontend Architecture",
      "Single-SPA",
      "Datadog",
      "RxJS",
    ],
  },
  {
    id: "2",
    company: "Zup Innovation (Client: Itaú Unibanco)",
    role: "Front-End Software Engineer",
    period: "June 2022 - May 2024",
    location: "São Paulo, Brazil",
    type: "remote",
    description:
      "Front-end engineer contributing to a large-scale insurance platform for one of the biggest fintech banks in Latin America, focusing on user experience, scalability, and accessibility.",
    achievements: [
      "Developed frontend features for Itaú’s insurance platform, contributing to a 15% improvement in customer retention",
      "Redesigned high-friction cancellation journeys, reducing abandonment rates and improving user decision clarity",
      "Built and maintained scalable UI components used by millions of users across Itaú’s digital channels",
      "Collaborated closely with product, design, and backend teams to deliver accessible and maintainable frontend solutions",
    ],
    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "Design Systems",
      "Jest",
      "Cypress",
    ],
  },
  {
    id: "3",
    company: "F1RST Tecnologia (Santander Group)",
    role: "Front-End Software Engineer",
    period: "July 2021 - June 2022",
    location: "São Paulo, Brazil",
    type: "hybrid",
    description:
      "Front-end engineer internalized by Santander to work on a foreign exchange billing platform supporting corporate international trade operations.",
    achievements: [
      "Internalized after a consulting engagement to continue working on the same foreign exchange billing platform",
      "Took ownership of frontend flows for high-value foreign exchange billing operations",
      "Integrated frontend applications with backend services handling pricing, currency conversion, and complex billing rules",
      "Improved system reliability by standardizing components and validations, reducing operational errors and release rework",
    ],
    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Financial Systems",
    ],
  },
  {
    id: "4",
    company: "BRQ Digital Solutions",
    role: "Front-End Software Engineer (Consultant)",
    period: "March 2021 - July 2021",
    location: "São Paulo, Brazil",
    type: "hybrid",
    description:
      "External consultant supporting Santander’s foreign exchange billing platform in a regulated fintech environment.",
    achievements: [
      "Contributed to frontend development for high-value financial transaction flows",
      "Worked closely with internal teams to understand complex financial and regulatory requirements",
      "Delivered UI components and validations under strict quality and compliance constraints",
    ],
    technologies: [
      "React",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
];
