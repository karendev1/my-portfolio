import { SectionContainer, SectionHeader } from "@/components/shared";
import {
  Code2,
  Zap,
  Globe,
  Palette,
  Layers,
  Activity,
} from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Frontend Architecture",
    description:
      "Designing scalable frontend architectures with clear separation of concerns, predictable state management and maintainable project structures.",
  },
  {
    icon: Code2,
    title: "Engineering Quality",
    description:
      "Writing readable, testable and well-structured code, focusing on long-term maintainability and team scalability.",
  },
  {
    icon: Zap,
    title: "Web Performance",
    description:
      "Optimizing Core Web Vitals through efficient rendering, bundle optimization and performance-aware architectural decisions.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Monitoring frontend applications using logs, metrics and error tracking with tools like Datadog to improve reliability and user experience.",
  },
  {
    icon: Globe,
    title: "Accessibility by Design",
    description:
      "Building inclusive interfaces using semantic HTML, WCAG guidelines and accessible interaction patterns from the start.",
  },
  {
    icon: Palette,
    title: "Design to Code",
    description:
      "Translating complex designs into pixel-perfect, responsive interfaces without compromising performance or usability.",
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionHeader
        title="About Me"
        subtitle="Frontend engineer focused on architecture, performance and building reliable, accessible web applications"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm card-hover opacity-0 animate-fade-up"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="h-6 w-6 text-primary" />
            </div>

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
