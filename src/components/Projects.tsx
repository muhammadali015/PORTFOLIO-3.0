"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Github, Code2, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";
import bazaarImage from "@/assets/icons/bazaar.jpg";

const projectData = [
  {
    title: "AI Test Case Generator Agent",
    description:
      "AI Test Case Generator Agent is an intelligent tool that automatically creates high-quality software test cases from any codebase. It accepts a ZIP file, single source file, or Git repository link, analyzes the project structure, and generates detailed test cases in JSON format",
    techStack: ["React", "Django", "PostgreSQL"],
    previewImage: bazaarImage,
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    link: "https://test-case-generator-agent.onrender.com",
    github: "https://github.com/muhammadali015/Test-Case",
    id: "bazaar-ecommerce",
    featured: true
  },
  {
    title: "Rent-A-Car System",
    description:
      "A comprehensive website for a car rental business, allowing users to view available cars, check rental status, and manage their bookings.",
    techStack: ["React", "Django", "PostgreSQL"],
    previewImage: bazaarImage,
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    link: "#",
    github: "#",
    id: "rent-a-car",
  },
  {
    title: "AI Chatbot (NeuroTalk)",
    description:
      "An intelligent, context-aware chatbot powered by LangChain and OpenAI. Features real-time conversation and knowledge retrieval capabilities.",
    techStack: ["Python", "LangChain", "FastAPI"],
    previewImage: bazaarImage,
    gradient: "from-emerald-600 via-green-500 to-teal-500",
    link: "#",
    github: "#",
    id: "ai-chatbot",
  },
  {
    title: "Hostel Hub",
    description:
      "A hostel booking application designed for new students, helping them easily find and book accommodation near their university.",
    techStack: ["React", "Node.js", "MongoDB"],
    previewImage: bazaarImage,
    gradient: "from-orange-600 via-red-500 to-pink-500",
    link: "#",
    github: "#",
    id: "hostel-hub",
  },
  {
    title: "Flight Management",
    description:
      "A robust flight booking system to streamline the ticket purchase process, helping users avoid long queues and manage reservations.",
    techStack: ["React", "Django", "PostgreSQL"],
    previewImage: bazaarImage,
    gradient: "from-indigo-600 via-purple-500 to-pink-500",
    link: "#",
    github: "#",
    id: "flight-management",
  },
  {
    title: "Pokedex Game",
    description:
      "A digital Pokedex or game demonstrating mastery in API integration and UI/UX design. Catch 'em all!",
    techStack: ["React", "API", "JavaScript"],
    previewImage: bazaarImage,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    link: "#",
    github: "#",
    id: "pokedex-game",
  },
  {
    title: "Ludo & Checker Game",
    description:
      "A digital implementation of the classic board games Ludo and Checkers, focusing on game logic and user interaction.",
    techStack: ["React", "JavaScript", "CSS"],
    previewImage: bazaarImage,
    gradient: "from-pink-600 via-rose-500 to-red-500",
    link: "#",
    github: "#",
    id: "ludo-checker",
  },
  {
    title: "Weather App",
    description:
      "A mobile or web application that provides real-time weather updates and forecasts by consuming a public weather API.",
    techStack: ["React", "API", "TailwindCSS"],
    previewImage: bazaarImage,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    link: "#",
    github: "#",
    id: "weather-app",
  },
  {
    title: "Task Automation (RPA)",
    description:
      "An efficient Robotic Process Automation solution automating repetitive tasks like web scraping and data processing.",
    techStack: ["Python", "Automation", "APIs"],
    previewImage: bazaarImage,
    gradient: "from-slate-600 via-gray-600 to-zinc-600",
    link: "#",
    github: "#",
    id: "task-automation",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-600"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Explore my latest work featuring cutting-edge technologies, innovative solutions, and exceptional user experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="relative h-full flex flex-col overflow-hidden border-0 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl shadow-xl">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                <div className="absolute inset-[2px] rounded-lg bg-card z-0" />

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-lg z-10">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Image with Parallax */}
                  {project.previewImage && !project.previewImage.includes('/path/to/') ? (
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="w-20 h-20 text-white/20" />
                    </div>
                  )}

                  {/* Overlay with blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/90 backdrop-blur-sm text-yellow-950 text-xs font-bold shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-yellow-950" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col flex-grow z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-foreground border border-primary/20 font-medium hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto pt-6 border-t border-border/50">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-lg" />
                      <div className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all text-sm font-semibold shadow-lg shadow-primary/20 group-hover/btn:shadow-xl group-hover/btn:shadow-primary/30">
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </div>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn"
                    >
                      <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all text-sm font-semibold border border-border hover:border-primary/30">
                        <Github className="w-4 h-4" />
                        Code
                      </div>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
