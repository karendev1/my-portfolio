import { TechBadge } from "@/components/shared";
import type { Experience } from "@/types";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const typeColors = {
    remote: "text-primary",
    hybrid: "text-accent",
    onsite: "text-muted-foreground",
  };

  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-primary glow" />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={experience.id} className="border-none">
          <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]]:pb-4">
            <div className="flex flex-col items-start gap-2 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <span className={`text-sm font-mono ${typeColors[experience.type]}`}>
                  [{experience.type}]
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4" />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {experience.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {experience.location}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="pt-0 pb-4">
            <div className="space-y-4">
              <p className="text-muted-foreground">{experience.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold mb-2 text-primary">Key Achievements</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <span className="text-primary font-mono">→</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {experience.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
