"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";


import htmlIcon from "@/assets/icons/html5.svg";
import cssIcon from "@/assets/icons/css3.svg";
import reactIcon from "@/assets/icons/react.svg";
import nextIcon from "@/assets/icons/nextjs.svg";
import nodeIcon from "@/assets/icons/nodejs.svg";
import fastapiIcon from "@/assets/icons/fastapi.svg";
import djangoIcon from "@/assets/icons/django.svg";
import postgresIcon from "@/assets/icons/postgresql.svg";
import pythonIcon from "@/assets/icons/python.svg";
import llmIcon from "@/assets/icons/ai.svg";
import apiIcon from "@/assets/icons/api.svg";
import dockerIcon from "@/assets/icons/docker.svg";
import githubIcon from "@/assets/icons/githubactions.svg";
import cicdIcon from "@/assets/icons/cicd.svg";
import n8nIcon from "@/assets/icons/n8n.png";
import gitIcon from "@/assets/icons/git.png";



// Data structure now represents a graph radiating from a core
const skillsByCategory = [
  {
    category: "Frontend",
    color: "cyan",
    items: [
      { icon: htmlIcon, name: "HTML5", level: "Expert" },
      { icon: cssIcon, name: "CSS3", level: "Expert" },
      { icon: reactIcon, name: "React", level: "Advanced" },
      { icon: nextIcon, name: "Next.js", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    color: "green",
    items: [
      { icon: nodeIcon, name: "Node.js", level: "Advanced" },
      { icon: fastapiIcon, name: "FastAPI", level: "Advanced" },
      { icon: djangoIcon, name: "Django", level: "Intermediate" },
      { icon: postgresIcon, name: "PostgreSQL", level: "Advanced" },
    ],
  },
  {
    category: "AI / Automation",
    color: "yellow",
    items: [
      { icon: pythonIcon, name: "Python", level: "Expert" },
      { icon: llmIcon, name: "LLMs", level: "Advanced" },
      { icon: n8nIcon, name: "n8n", level: "Advanced" },
      { icon: apiIcon, name: "APIs", level: "Advanced" },
    ],
  },
  {
    category: "DevOps",
    color: "blue",
    items: [
      { icon: dockerIcon, name: "Docker", level: "Advanced" },
      { icon: githubIcon, name: "Git", level: "Advanced" },
      { icon: cicdIcon, name: "CI/CD", level: "Advanced" },
      { icon: gitIcon, name: "GitHub Actions", level: "Advanced" },
    ],
  },
];

// Reusable item animation variants
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      delay: i * 0.05,
    },
  }),
};

// Skill Badge Component
const SkillBadge = ({ item, index, colorClass }) => (
  <motion.div
    key={item.name}
    className={`relative group/icon flex flex-col items-center justify-center p-4 w-32 h-32 
      bg-gray-800/80 rounded-xl shadow-inner shadow-gray-900/50 
      border border-gray-700/50 transition-all duration-300 cursor-pointer 
      hover:bg-gray-700/80`}
    custom={index}
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    whileHover={{ scale: 1.05 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Dynamic Glowing Border Effect on Hover */}
    <style jsx global>{`
      .group\\/icon:hover {
        box-shadow: 0 0 25px var(--tw-color-${colorClass}-500, #3b82f6);
      }
    `}</style>

    <img
      src={item.icon}
      alt={item.name}
      className="w-16 h-16 mb-2 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover/icon:scale-110"
    />

    <span className="text-sm font-semibold text-white/80 text-center truncate w-full px-1">
      {item.name}
    </span>

    {/* Impressive Hover Tooltip */}
    <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 
      bg-${colorClass}-500 text-white px-3 py-1 text-xs rounded-full shadow-lg 
      opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap z-20 font-bold pointer-events-none transform -translate-y-2 group-hover/icon:translate-y-0`}>
      {item.level}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-color-secondary/10)_0%,_transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* The large background heading (Half-Hidden Effect) */}
        <div className="relative overflow-hidden mb-20">
          <h1
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           text-9xl md:text-[15rem] lg:text-[20rem] font-extrabold 
                           text-white/5 opacity-5 pointer-events-none whitespace-nowrap"
          >
            GRAPH
          </h1>

          {/* Main Foreground Heading */}
          <h2 className="text-5xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-white relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              Visualized Tech Stack
            </motion.span>
          </h2>
        </div>

        {/* The Main Container (Max Web Width) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          {/* Main Card */}
          <Card className="p-8 md:p-16 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl">

            {/* CORE TECHNOLOGY NODE */}
            <div className="flex justify-center mb-16">
              <motion.div
                className="relative z-10 px-8 py-4 rounded-full font-extrabold text-lg tracking-widest 
                                bg-primary/90 text-white shadow-xl shadow-primary/40 
                                border-4 border-primary/50 ring-4 ring-primary/20 animate-pulse-slow"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
              >
                <span className="text-xl">CORE COMPETENCIES</span>
              </motion.div>
            </div>

            {/* RADIAL GRAPH LAYOUT */}
            <div className="relative flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-20">

              {skillsByCategory.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  className="relative flex flex-col items-center group/category p-4"
                  initial={{ opacity: 0, rotateZ: (groupIndex % 2 === 0 ? -10 : 10) }}
                  whileInView={{ opacity: 1, rotateZ: 0 }}
                  transition={{ delay: 0.2 + groupIndex * 0.1 }}
                >
                  {/* CATEGORY NODE (THE NAME IN CENTER) */}
                  <div
                    className={`relative z-10 mb-6 px-4 py-2 rounded-full font-bold uppercase text-sm tracking-widest 
                                      bg-${group.color}-600/90 text-white shadow-lg shadow-${group.color}-500/30 
                                      border-2 border-${group.color}-300/80 transition-all duration-300 group-hover/category:shadow-xl group-hover/category:scale-105`}
                  >
                    {group.category}
                  </div>

                  {/* VISUAL CONNECTOR (LINE FROM CATEGORY NODE TO SKILLS) */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-${group.color}-500/50 -mt-10`}></div>

                  {/* SKILL ITEMS - Laid out in a tighter flex row */}
                  <div className="flex flex-wrap justify-center gap-4 mt-2">
                    {group.items.map((item, i) => (
                      <SkillBadge key={item.name} item={item} index={i} colorClass={group.color} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}