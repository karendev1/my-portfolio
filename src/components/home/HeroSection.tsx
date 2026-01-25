import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/shared";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

const roles = [
  "Front-End Engineer",
  "React Developer",
  "TypeScript Enthusiast",
  "Performance Optimizer",
];

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">
              Available for new opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up animate-delay-100">
            Hi, I'm{" "}
            <span className="text-gradient glow-text">Karen S.</span>
          </h1>

          {/* Dynamic role */}
          <div className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground mb-8 h-10 opacity-0 animate-fade-up animate-delay-200">
            <TypewriterText texts={roles} />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animate-delay-300">
            I build exceptional web experiences with a focus on{" "}
            <span className="text-foreground font-medium">performance</span>,{" "}
            <span className="text-foreground font-medium">accessibility</span>, and{" "}
            <span className="text-foreground font-medium">clean code</span>.
            Currently crafting scalable front-end solutions for global users.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animate-delay-400">
            <Button asChild size="lg" className="glow group">
              <Link to="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-glow">
              <a href="/Karen_Santana_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animate-delay-500 hidden md:flex">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono mb-2">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
