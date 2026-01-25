import { SectionContainer, SectionHeader } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Download, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "karen.nascimento.developer@gmail.com", href: "mailto:karen.nascimento.developer@gmail.com" },
  { icon: Phone, label: "Phone", value: "+55 (11) 97863-6038", href: "tel:+5511978636038" },
  { icon: MapPin, label: "Location", value: "São Paulo, Brazil", href: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/karendev1" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/karennascimento3/" },
];

export default function ContactPage() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Get in Touch"
        subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology"
      />

      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="bg-card/50 backdrop-blur-sm border-border opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
          <CardContent className="p-8 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-primary transition-colors break-words">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium break-words">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animate-delay-200" style={{ animationFillMode: "forwards" }}>
          <Button asChild size="lg" className="glow">
            <a href="/Karen_Santana_CV.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          {socialLinks.map((link) => (
            <Button key={link.label} asChild variant="outline" size="lg" className="border-glow">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
