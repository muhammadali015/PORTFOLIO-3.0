import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Django, and PostgreSQL. Features include product management, cart functionality, and secure payments.",
      tags: ["React", "Django", "PostgreSQL"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by LangChain and OpenAI. Supports natural conversations and context-aware responses.",
      tags: ["Python", "LangChain", "FastAPI"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Automation Suite",
      description: "RPA solution that automates repetitive tasks using Python. Includes web scraping, data processing, and report generation.",
      tags: ["Python", "Automation", "APIs"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Check out some of my recent projects, meticulously crafted with love and dedication.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
