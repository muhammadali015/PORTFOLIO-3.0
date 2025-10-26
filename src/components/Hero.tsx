import { Button } from "@/components/ui/button";
import { Download, Rocket } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-2xl mb-2 text-muted-foreground">Hi, I am</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Muhammad Ali
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I'm a software engineer specializing in building innovative web applications with React and Django. Currently focused on AI automation and full-stack development.
            </p>
            <div className="flex gap-4">
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button variant="outline" className="gap-2">
                <Rocket className="w-4 h-4" />
                Start Project
              </Button>
            </div>
          </div>

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
