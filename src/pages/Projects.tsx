import { SectionContainer, SectionHeader } from "@/components/shared";
import { ProjectCard } from "@/components/projects";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Projects"
        subtitle="Personal projects where I explore new technologies and solve real problems"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
