const personas = [
  {
    title: "The Ops Leader Who Can't See Below the Queue",
    painPoint: "\"I know tasks are getting done, but I have no idea how. When someone leaves, the knowledge walks out with them.\"",
    solution: "Krama gives you task-level visibility into how work actually happens—not just what got completed, but how your best people do it differently.",
  },
  {
    title: "The New Hire Drowning in Shadowing",
    painPoint: "\"I've been here three weeks and I'm still waiting for someone to show me how they actually do this job.\"",
    solution: "Turn your team's tribal knowledge into shareable skill files. New hires learn from real workflows, not outdated docs nobody maintains.",
  },
  {
    title: "The Team Already Using AI—Badly",
    painPoint: "\"Everyone's using ChatGPT for everything, but half the output needs to be redone. I can't tell what's helping and what's waste.\"",
    solution: "See exactly where AI helps and where it hurts. Krama shows which AI-assisted steps actually save time—and which ones create rework.",
  },
  {
    title: "The Privacy-First Enterprise",
    painPoint: "\"We can't send workflow data to another cloud. Compliance won't even let us have the conversation.\"",
    solution: "All processing happens on-device. Your workflow data never leaves your machine unless you choose to share it. No screenshots, no recordings, no audio.",
  },
];

const Features = () => {

  return (
    <section className="bg-background py-20 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Built for the people doing the work—and the leaders scaling it.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((persona, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl border border-border p-8 flex flex-col hover:border-primary/50 transition-colors"
              >
                {/* Persona Title */}
                <h3 className="text-xl font-bold text-primary mb-4">
                  {persona.title}
                </h3>
                
                {/* Pain Point */}
                <div className="mb-6">
                  <p className="text-muted-foreground italic text-sm leading-relaxed">
                    {persona.painPoint}
                  </p>
                </div>
                
                {/* Solution */}
                <div className="mt-auto">
                  <p className="text-text-body text-sm leading-relaxed">
                    {persona.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
