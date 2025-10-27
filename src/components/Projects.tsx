"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import bazaarImage from "@/assets/icons/bazaar.jpg";

const projectData = [
  {
    title: "Bazaar Shopping Store",
    description:
      "A full-stack e-commerce solution with product management, secure payments, and a modern UI. Built for scalability and performance, offering products of daily life.",
    techStack: ["React", "Django", "PostgreSQL"],
    previewImage: bazaarImage,
    gradient: "from-purple-500 to-blue-500",
    link: "https://bazaar-application-final-deployment.vercel.app/",
    github: "https://github.com/MuhammadAli015/Bazaar-Application",
    id: "bazaar-ecommerce",
  },
  {
    title: "Rent-A-Car System",
    description:
      "A comprehensive website for a car rental business, allowing users to view available cars, check rental status, and manage their bookings.",
    techStack: ["React", "Django", "PostgreSQL"],
    previewImage: bazaarImage,
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-blue-500 to-cyan-500",
    link: "#",
    github: "#",
    id: "ai-chatbot",
  },
  {
    title: "Hostel Hub",
    description:
      "A hostel booking application designed for new students, helping them easily find and book accommodation near their university or in a new city.",
    techStack: ["React", "Node.js", "MongoDB"],
    previewImage: bazaarImage,
    gradient: "from-green-500 to-teal-500",
    link: "#",
    github: "#",
    id: "hostel-hub",
  },
  {
    title: "Flight Management System",
    description:
      "A robust flight booking system designed to streamline the ticket purchase process, helping users avoid long queues and manage reservations efficiently.",
    techStack: ["React", "Django", "PostgreSQL"],
    previewImage: bazaarImage,
    gradient: "from-indigo-500 to-purple-500",
    link: "#",
    github: "#",
    id: "flight-management",
  },
  {
    title: "Pokedex Game",
    description:
      "A digital Pokedex or game demonstrating mastery in API integration and UI/UX design.",
    techStack: ["React", "API", "JavaScript"],
    previewImage: bazaarImage,
    gradient: "from-yellow-400 to-red-400",
    link: "#",
    github: "#",
    id: "pokedex-game",
  },
  {
    title: "Ludo & Checker Game",
    description:
      "A digital implementation of the classic board games Ludo and Checkers, focusing on game logic and user interaction.",
    techStack: ["React", "JavaScript", "HTML/CSS"],
    previewImage: bazaarImage,
    gradient: "from-pink-500 to-purple-500",
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
    gradient: "from-cyan-400 to-blue-500",
    link: "#",
    github: "#",
    id: "weather-app",
  },
  {
    title: "Task Automation Suite (RPA)",
    description:
      "An efficient Robotic Process Automation solution automating repetitive tasks like web scraping, data processing, and scheduled report generation.",
    techStack: ["Python", "Automation", "APIs"],
    previewImage: bazaarImage,
    gradient: "from-pink-500 to-purple-500",
    link: "#",
    github: "#",
    id: "task-automation",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectData[0]);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">
            Check out some of my recent work, meticulously crafted with love and dedication.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE: Project List (Small Cards) */}
          <div className="w-full lg:w-1/3 space-y-4">
            {projectData.map((project, idx) => (
              <motion.div
                key={project.title}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeProject.title === project.title
                    ? "bg-primary/10 border-l-4 border-primary shadow-lg"
                    : "hover:bg-card/50 border-l-4 border-transparent"
                }`}
                onClick={() => setActiveProject(project)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex-shrink-0`}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{project.title.split('(')[0].trim()}</h3>
                    <p className="text-xs text-muted-foreground">
                      {project.techStack[0]} / {project.techStack[1]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: Large Detail View */}
          <div className="w-full lg:w-2/3 relative">
            <motion.div
              key={activeProject.title + "-detail"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-0 border-primary/50 shadow-2xl shadow-primary/10">
                <div className="relative h-96 w-full overflow-hidden rounded-t-xl">
                  {(!activeProject.previewImage || activeProject.previewImage.includes('/path/to/')) && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.gradient}`} />
                  )}

                  {activeProject.previewImage && !activeProject.previewImage.includes('/path/to/') ? (
                    <img
                      src={activeProject.previewImage}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-white/50">{activeProject.title} Preview</span>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3">{activeProject.title}</h3>
                  <p className="text-base text-muted-foreground mb-6">{activeProject.description}</p>

                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/30 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
