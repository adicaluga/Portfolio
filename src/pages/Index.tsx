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
          <p className="animate-fade-up mb-4 font-mono text-sm text-primary">
            Hello, I'm
          </p>
          
          <h1 className="animate-fade-up-delay-1 mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            A Software{" "}
            <span className="text-gradient">Engineer</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            I craft clean, performant web applications with modern technologies. 
            Passionate about great user experiences and elegant code.
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View My Work
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
