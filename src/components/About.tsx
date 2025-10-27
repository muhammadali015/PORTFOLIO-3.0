import { Card } from "@/components/ui/card";
import { Code2, Brain, Target } from "lucide-react";
import MouseTrail from "./MouseTrail";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-muted/30 overflow-hidden">
      {/* MouseTrail Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <MouseTrail containerId="about" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-center text-muted-foreground mb-12">
            Get to know more about my journey and expertise
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-card hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-sm text-muted-foreground">
                Building scalable and efficient software solutions that solve real-world problems
              </p>
            </Card>

            <Card className="p-6 text-center bg-card hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI & Automation</h3>
              <p className="text-sm text-muted-foreground">
                Creating intelligent systems that learn, adapt, and automate complex processes
              </p>
            </Card>

            <Card className="p-6 text-center bg-card hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Always exploring new technologies and pushing the boundaries of what's possible
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
            AI Automation Engineer and Full-Stack Developer specializing in Python/FastAPI, React/Node, and LLM-powered workflows. Shipped 
microservices and dashboards that increased job-queue throughput by 25% and reduced booking errors by 35%. Agile collaborator with CI/CD 
experience (GitHub Actions) delivering reliable, scalable features fast. <br /><br />Early-career software engineer focused on AI-driven automation and web platforms. Built chatbots and internal support flows using OpenAI 
APIs/LangChain; implemented secure auth (JWT) and microservices with Docker. Known for measurable impact on reliability, speed, and user 
experience. <br /><br /> My goal is to bridge the gap between cutting-edge AI technology and practical, real-world applications 
              that deliver tangible value.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
