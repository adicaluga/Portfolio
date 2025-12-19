import Layout from "@/components/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
];

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <div className="animate-fade-up mb-12 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              <Avatar className="h-32 w-32 border-2 border-primary/30 shadow-lg">
                <AvatarImage src="" alt="Profile photo" />
                <AvatarFallback className="bg-muted">
                  <User className="h-12 w-12 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                About <span className="text-gradient">Me</span>
              </h1>
            </div>
            
            <div className="animate-fade-up-delay-1 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a software engineer with a passion for building digital experiences 
                that are both beautiful and functional. With several years of experience 
                in full-stack development, I specialize in creating modern web applications 
                that solve real problems.
              </p>
              
              <p>
                My approach combines clean code practices with thoughtful design. 
                I believe that great software comes from understanding user needs 
                and translating them into intuitive, performant solutions.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="animate-fade-up-delay-2 mt-16">
              <h2 className="mb-8 text-2xl font-semibold text-foreground">Technical Skills</h2>
              
              <div className="grid gap-8 sm:grid-cols-3">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="mb-4 font-mono text-sm font-medium text-primary">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li 
                          key={skill}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
