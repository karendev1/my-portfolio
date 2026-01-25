import { SectionContainer, SectionHeader } from "@/components/shared";
import { Code2, Zap, Globe, Palette } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, well-tested code that scales with your team and product.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing for Core Web Vitals and delivering fast, smooth user experiences.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Building inclusive products that work for everyone, following WCAG guidelines.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description:
      "Translating designs into pixel-perfect, responsive implementations.",
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionHeader
        title="About Me"
        subtitle="A passionate developer focused on creating impactful web experiences"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm card-hover opacity-0 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
