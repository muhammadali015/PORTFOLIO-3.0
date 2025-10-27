import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

interface ContactProps {
  onChatClick?: () => void;
}

const Contact = ({ onChatClick }: ContactProps) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:alich11416181@gmail.com";
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's start something great together</h2>
          <p className="text-muted-foreground mb-12">Have a project in mind? Let's discuss how we can work together.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-sm text-muted-foreground mb-4">alich11416181@gmail.com</p>
              <Button variant="outline" className="w-full" onClick={handleEmailClick}>
                Send Email
              </Button>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ask My Bot</h3>
              <p className="text-sm text-muted-foreground mb-4">Quick questions? Chat with my AI assistant</p>
              <Button className="w-full" onClick={onChatClick}>
                Start Chat
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
