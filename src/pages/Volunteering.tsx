import Layout from "@/components/Layout";

const volunteering = [
  {
    title: "CyberSci Regionals",
    role: "Representative of University of Guelph",
    timeframe: "Nov 2024",
    location: null,
    highlights: [
      "Collaborated with a small team to solve advanced cybersecurity challenges such as cryptography and digital forensics.",
      "Demonstrated strong problem-solving skills under timed conditions and deepened knowledge of network security fundamentals.",
    ],
  },
  {
    title: "Cameron Heights Engineering Club",
    role: "Head Executive of Cameron Engineering and Lead Researcher",
    timeframe: "Oct 2022 - Jun 2024",
    location: "Kitchener, ON, Canada",
    highlights: [
      "Organized and led workshops on coding, robotics, and hands-on engineering principles, engaging a diverse group of club members.",
      "Directed a multidisciplinary research team of 4 members to design and build a remote-control fighter jet in both hardware and embedded software.",
      "Managed a $2000 budget for the development of a remote-controlled fighter jet, ensuring efficient resource allocation.",
      "Mentored 80+ members in microcontroller basics and prototype testing to ensure safety and reliability.",
    ],
  },
];

const Volunteering = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="animate-fade-up mb-6 text-center text-4xl font-bold text-foreground sm:text-5xl">
              Volunteering <span className="text-gradient">&</span> Extracurriculars
            </h1>
            <p className="animate-fade-up-delay-1 mb-12 text-center text-lg text-muted-foreground">
              Teamwork, leadership, and hands-on problem solving outside the classroom.
            </p>

            <div className="space-y-6">
              {volunteering.map((item, index) => (
                <div
                  key={item.title}
                  className="animate-fade-up rounded-2xl border border-border/50 bg-card p-6 shadow-lg shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.timeframe}
                    </div>
                  </div>

                  {item.location && (
                    <div className="mt-2 text-sm text-muted-foreground">{item.location}</div>
                  )}

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteering;
