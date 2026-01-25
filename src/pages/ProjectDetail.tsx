import { useParams, Link } from "react-router-dom";
import { SectionContainer, TechBadge } from "@/components/shared";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <SectionContainer>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Button asChild variant="ghost" className="mb-8 group">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{project.longDescription}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-6">
            {project.githubUrl && (
              <Button asChild variant="outline" className="border-glow">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild className="glow">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-12">
          <Section
            title="Context"
            content={project.context}
            delay={100}
          />
          <Section
            title="Solution"
            content={project.solution}
            delay={200}
          />
          <Section
            title="Trade-offs & Decisions"
            content={project.tradeoffs}
            delay={300}
          />
          <Section
            title="Learnings"
            content={project.learnings}
            delay={400}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

function Section({
  title,
  content,
  delay,
}: {
  title: string;
  content: string;
  delay: number;
}) {
  return (
    <div
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary font-mono">#</span>
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed pl-6 border-l-2 border-border">
        {content}
      </p>
    </div>
  );
}
