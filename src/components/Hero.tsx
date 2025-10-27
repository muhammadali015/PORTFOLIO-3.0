import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Rocket } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.png";
import heroBg from "@/assets/hero-bg.jpg";
import MouseTrail from "./MouseTrail";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const titles = ["Software Engineer", "AI Automation Engineer", "Full Stack Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    // Create a link element to download the CV
    const link = document.createElement("a");
    link.href = "/MuhammadAli_Resume.pdf"; // Path to your CV in the public folder
    link.download = "Muhammad_Ali_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStartProject = () => {
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* MouseTrail Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <MouseTrail containerId="hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="animate-slide-up">
            <h2 className="text-2xl mb-2 text-muted-foreground">Hi, I am</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">Muhammad Ali</h1>

            {/* Smooth Animated Titles */}
            <div className="relative h-10 overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitle}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute text-2xl md:text-3xl font-semibold text-primary"
                >
                  {titles[currentTitle]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Architect of Intelligent Automation — Crafting Code that Thinks, Learns, and Evolves.
            </p>

            <div className="flex gap-4">
              <Button className="gap-2" onClick={handleDownloadCV}>
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button variant="outline" className="gap-2" onClick={handleStartProject}>
                <Rocket className="w-4 h-4" />
                Start Project
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
              <img
                src={profilePlaceholder}
                alt="Muhammad Ali"
                className="relative w-80 h-80 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
