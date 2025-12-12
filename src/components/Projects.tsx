"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Github, Code2, Globe, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bazaarImage from "@/assets/icons/bazaar.jpg";
import aliPortfolioImage from "@/assets/ALIPORTFOLIO.png";
import algosolImage from "@/assets/ALGOSOL.png";    
import devouraImage from "@/assets/DEVOURA.png";
import aitestcaseImage from "@/assets/TESTCASEGENERTOR.png";
import stockmarketImage from "@/assets/STOCKMARKET.jpg";
import ludoImage from "@/assets/ludo.png";

const projectData = [
  {
    title: "AI Test Case Generator Agent",
    description:
      "AI Test Case Generator Agent is an intelligent tool that automatically creates high-quality software test cases from any codebase. It accepts a ZIP file, single source file, or Git repository link, analyzes the project structure, and generates detailed test cases in JSON format",
    techStack: ["React", "Node", "Express","Gemini 2.5 Flash"],
    previewImage: aitestcaseImage,
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    link: "https://test-case-generator-agent.onrender.com",
    github: "https://github.com/muhammadali015/Test-Case",
    id: "bazaar-ecommerce",
    featured: true
  },
  {
    title: "Devoura – AI-Powered Portfolio & Website Builder",
    description:
      "Devoura is an AI-powered website and portfolio builder designed to create fast, responsive, and modern personal or business sites. It provides ready-made components, clean UI/UX, and smooth animations to help users build professional websites without complexi",
    techStack: ["Next.js", "TailwindCSS ", "TypeScript"],
    previewImage: devouraImage,
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    link: "https://devoura.vercel.app/",
    github: "https://github.com/muhammadali015/Devoura",
    id: "devoura",
  },
  {
    title: "AlgoSol – AI-Powered Algorithm & Coding Solutions Platform",
    description:
      "AlgoSol is an AI-driven platform designed to help developers and students solve algorithmic problems efficiently. It offers automated solutions, code suggestions, and learning resources for competitive programming, making algorithm practice faster and smarter.",
    techStack: ["React", "Node", "Express","TypeScript  "],
    previewImage: algosolImage,
    gradient: "from-emerald-600 via-green-500 to-teal-500",
    link: "https://algosol.vercel.app/",

    id: "algosol",
  },
  {
    title: "Ali's Portfolio ",
    description:
      "This is Muhammad Ali’s personal portfolio, showcasing his projects, skills, and AI-powered chatbots. The website demonstrates expertise in web development, automation tools, and interactive AI applications, with a clean, modern, and responsive design.",
    techStack: ["React", "Node", "Express","TypeScript","grok API"],
    previewImage: aliPortfolioImage,
    gradient: "from-orange-600 via-red-500 to-pink-500",
      link: "https://muhammadali15.vercel.app/",
    github: "https://github.com/muhammadali015/PORTFOLIO-3.0",
    id: "ali-portfolio",
  },
 
  {
    title: "Stock Market Prediction",
    description:
      "Stock Market Prediction is a machine learning project that predicts the stock market prices using historical data and machine learning algorithms.",
    techStack: ["React", "API", "JavaScript","Python","Machine Learning"],
    previewImage: stockmarketImage,
    gradient: "from-yellow-500 via-orange-500 to-red-500", 
    github: "https://github.com/muhammadali015/stock-forecasting",
    id: "stock-market-prediction",
  },
  {
    title: "Ecommerce Website Bazzar",
    description:
      "An e-commerce website that allows users to buy and sell products online. It provides a platform for sellers to list their products and for buyers to purchase them.",
    techStack: ["React", "API", "postgres "],
    previewImage: bazaarImage,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    link: "https://bazaar-application-final-deployment.vercel.app/",
    github: "https://github.com/Zaid-Codsoft/bazaar_l",
    id: "bazaar-application",
  },
  {
    title: "Ludo & Checker Game",
    description:
      "A digital implementation of the classic board games Ludo and Checkers, focusing on game logic and user interaction.",
    techStack: ["React", "JavaScript", "CSS","Python"],  
    previewImage: ludoImage,
    gradient: "from-pink-600 via-rose-500 to-red-500",
  
    id: "ludo-checker",
  },

 
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const selectedProjectData = projectData.find(p => p.id === selectedProject);

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
              className="group perspective-1000 cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
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
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-lg" />
                        <div className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all text-sm font-semibold shadow-lg shadow-primary/20 group-hover/btn:shadow-xl group-hover/btn:shadow-primary/30">
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </div>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.link ? 'flex-1' : 'w-full'} group/btn`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all text-sm font-semibold border border-border hover:border-primary/30">
                          <Github className="w-4 h-4" />
                          Code
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="relative w-full h-full max-w-4xl max-h-[90vh] overflow-hidden border-0 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl shadow-2xl flex flex-col">
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background border border-border transition-all shadow-lg hover:shadow-xl"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProjectData.gradient} opacity-90`} />
                  {selectedProjectData.previewImage && !selectedProjectData.previewImage.includes('/path/to/') ? (
                    <img
                      src={selectedProjectData.previewImage}
                      alt={selectedProjectData.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="w-20 h-20 text-white/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {selectedProjectData.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/90 backdrop-blur-sm text-yellow-950 text-xs font-bold shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-yellow-950" />
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {selectedProjectData.title}
                  </h2>

                  {/* Full Description */}
                  <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed whitespace-pre-line">
                    {selectedProjectData.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-foreground border border-primary/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/50">
                    {selectedProjectData.link && (
                      <a
                        href={selectedProjectData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-lg" />
                        <div className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all text-sm font-semibold shadow-lg shadow-primary/20 group-hover/btn:shadow-xl group-hover/btn:shadow-primary/30">
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </div>
                      </a>
                    )}

                    {selectedProjectData.github && (
                      <a
                        href={selectedProjectData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${selectedProjectData.link ? 'flex-1' : 'w-full'} group/btn`}
                      >
                        <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all text-sm font-semibold border border-border hover:border-primary/30">
                          <Github className="w-4 h-4" />
                          View Code
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
