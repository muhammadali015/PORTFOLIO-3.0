import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Follow me at:</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">© {currentYear} Muhammad Ali</p>
            <p className="text-sm text-muted-foreground">ali@example.com</p>
            <p className="text-xs text-muted-foreground mt-2">Copyright {currentYear} Made by Muhammad Ali</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
