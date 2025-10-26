import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Web Development Professional",
      issuer: "freeCodeCamp",
      year: "2024",
    },
    {
      title: "React Front-End Developer",
      issuer: "Meta via Coursera",
      year: "2024",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2023",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Stanford Online",
      year: "2023",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Certificates</h2>
          <p className="text-muted-foreground">Check out some of my certificates, ranging from Web Development Professional to Machine Learning.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <Card 
              key={cert.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-primary">{cert.year}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
