import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and a responsive admin dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with drag-and-drop boards, real-time updates, and team workspaces.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description: "A data visualization dashboard featuring interactive charts, custom reports, and automated insights.",
    techStack: ["React", "D3.js", "Python", "FastAPI"],
    githubUrl: "https://github.com",
  },
  {
    title: "Developer Portfolio",
    description: "A modern, responsive portfolio website built with performance and accessibility in mind.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "API Gateway",
    description: "A microservices API gateway with rate limiting, authentication, and request routing.",
    techStack: ["Node.js", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com",
  },
  {
    title: "CLI Tool",
    description: "A command-line interface for automating development workflows and code generation.",
    techStack: ["Python", "Click", "Rich"],
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="animate-fade-up mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="animate-fade-up-delay-1 mx-auto max-w-xl text-lg text-muted-foreground">
              A selection of projects I've built, from full-stack applications to developer tools.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
