import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Certificates from "@/components/Certificates"; // Temporarily commented out
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatClick = () => {
    setShowChat(true);
  };

  const handleChatClose = () => {
    setShowChat(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Certificates /> */} {/* Temporarily commented out */}
      <Contact onChatClick={handleChatClick} />
      <Footer />
      <Chatbot isOpen={showChat} onClose={handleChatClose} />
    </div>
  );
};

export default Index;
