import { SectionContainer, SectionHeader } from "@/components/shared";
import { ExperienceCard } from "@/components/experience";
import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey building web applications and leading front-end teams"
      />

      <div className="max-w-3xl mx-auto space-y-12">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
          >
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
