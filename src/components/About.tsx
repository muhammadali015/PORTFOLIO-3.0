import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">About me</h2>
          </div>

          <Card className="p-8 bg-card border-border relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    Muhammad Ali is a passionate <span className="text-primary">software engineer</span> with expertise in web development. I am currently studying at the National Institute of Computer Science (ICS) and have been actively involved in web development. I focus on building SaaS applications and responsive web applications. I started web development in 2024. My passion for web development led me to learn React and Django Community. I'm focused on creating beautiful and user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Django", "TypeScript", "Tailwind CSS", "Python"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
