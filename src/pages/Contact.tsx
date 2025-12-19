import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adriancalugarescu@outlook.com",
    href: "mailto:adriancalugarescu@outlook.com",
  },
  { icon: MapPin, label: "Location", value: "Guelph, ON, Canada", href: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/adicaluga" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/adrian-calugarescu-787b843a0/" },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="animate-fade-up mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="animate-fade-up-delay-1 mb-12 text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            
            <div className="animate-fade-up-delay-2 mb-12 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-center gap-4"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="animate-fade-up-delay-3 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:adriancalugarescu@outlook.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Me an Email
                </a>
              </Button>
            </div>
            
            <div className="animate-fade-up-delay-3">
              <p className="mb-4 text-sm text-muted-foreground">Or find me on</p>
              <div className="flex items-center justify-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="rounded-xl border border-border bg-card p-4 transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <link.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
