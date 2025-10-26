import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Muhammad Ali</h1>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About me
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("certificates")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Certificates
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
