import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div 
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        
        <div className="container relative mx-auto px-6 text-center">
          <div className="animate-fade-up mb-6 flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-primary/40 bg-card shadow-lg shadow-primary/10 sm:h-40 sm:w-40">
              <img
                src="/githubProfileCropped.jpg"
                alt="Adrian Calugarescu"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="animate-fade-up mb-4 font-mono text-sm text-primary">
            Hello, I'm
          </p>
          
          <h1 className="animate-fade-up-delay-1 mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Adrian{" "}
            <span className="text-gradient">Calugarescu</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Software Engineering student at the University of Guelph focused on
            building clean, responsive web applications and solving real-world problems.
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
