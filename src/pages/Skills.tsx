import Layout from "@/components/Layout";

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Java", "Python", "C", "C++"],
  },
  {
    title: "Technologies and Tools",
    items: ["React", "Vite", "HTML/CSS", "Git", "GitHub", "Node.js", "Linux"],
  },
  {
    title: "Additional Skills",
    items: ["Basic API Integration"],
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-fade-up mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Technical <span className="text-gradient">Skills</span>
            </h1>
            <p className="animate-fade-up-delay-1 mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              A focused toolkit built around modern web development and solid programming fundamentals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className="animate-fade-up rounded-2xl border border-border/50 bg-card p-6 shadow-lg shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="mb-4 text-lg font-semibold text-foreground">{group.title}</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-lg bg-secondary/60 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
