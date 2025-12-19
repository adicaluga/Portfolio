import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "RainCheckr",
    description: "Weather web application (Jan 2025 - Feb 2025) delivering real-time forecasts with location awareness.",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Geolocation API"],
    highlights: [
      "Integrated OpenWeatherMap for real-time weather data across 50+ locations.",
      "Implemented location-based detection and responsive UI updates.",
      "Reduced network load by minimizing redundant API calls.",
    ],
    githubUrl: "https://github.com/adicaluga/RainCheckr/tree/main",
  },
  {
    title: "LandMarkr",
    description: "Full-stack location-based app (Jul 2025 - Present) to discover nearby tourist attractions worldwide.",
    techStack: ["React (Vite)", "Express.js", "Prisma", "PostgreSQL", "Google Places API"],
    highlights: [
      "Built a RESTful backend to proxy Google Place Photos and protect API keys.",
      "Implemented city search and live geolocation using the browser Geolocation API.",
      "Created a modular React UI with search, cards, and localStorage persistence.",
    ],
    githubUrl: "https://github.com/adicaluga/LandMarkr",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="animate-fade-up mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Personal <span className="text-gradient">Projects</span>
            </h1>
            <p className="animate-fade-up-delay-1 mx-auto max-w-xl text-lg text-muted-foreground">
              A selection of projects from coursework and personal builds.
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
