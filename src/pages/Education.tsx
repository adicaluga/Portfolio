import Layout from "@/components/Layout";

const Education = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="animate-fade-up mb-6 text-center text-4xl font-bold text-foreground sm:text-5xl">
              Education <span className="text-gradient">&</span> Academics
            </h1>

            <div className="animate-fade-up-delay-1 rounded-2xl border border-border/50 bg-card p-8 shadow-lg shadow-primary/5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">University of Guelph</h2>
                  <p className="text-sm text-muted-foreground">
                    Honours Bachelor of Computing in Software Engineering
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Sep 2024 - May 2029
                </div>
              </div>

              <div className="mt-4 text-sm text-muted-foreground">
                Guelph, ON, Canada · Average: 84.500%
              </div>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>
                  Recognized on the <span className="text-foreground">Dean&apos;s Honours List</span> for Fall 2024
                  in the College of Engineering and Physical Sciences.
                </li>
                <li>
                  Relevant coursework: Intermediate Programming, Introduction to Programming, Discrete Mathematics I.
                </li>
                <li>
                  Active member in Guelph CSS, GCC, and GDSC.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
