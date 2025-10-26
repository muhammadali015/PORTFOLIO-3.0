import { Card } from "@/components/ui/card";
import { Code, Database, Cpu, Cloud } from "lucide-react";

const Skills = () => {
  const skills = [
    { category: "Frontend", icon: Code, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", icon: Database, items: ["Node.js", "FastAPI", "Django", "PostgreSQL"] },
    { category: "AI/Automation", icon: Cpu, items: ["Python", "LangChain", "LLMs", "APIs"] },
    { category: "DevOps", icon: Cloud, items: ["Docker", "GitHub Actions", "CI/CD"] },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <Card 
              key={skill.category} 
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <div className="space-y-2">
                {skill.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
