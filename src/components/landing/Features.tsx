const personas = [
  {
    title: "The Productive Skeptic",
    painPoint: "\"I use AI constantly but I'm not getting better—just faster at producing work that needs heavy editing.\"",
    solution: "Stop guessing where AI helps. Lighthouse shows you exactly which parts of your workflow to automate and which need your real attention.",
  },
  {
    title: "The Solo Optimizer",
    painPoint: "\"I've streamlined what I can, but I have no idea if my workflows are actually good or just familiar.\"",
    solution: "See your work patterns clearly. Discover inefficiencies you've gone blind to—like the 7-minute task that could take 2.",
  },
  {
    title: "The Distributed Team Lead",
    painPoint: "\"My team says AI made them faster, but I can't see what's actually working across time zones.\"",
    solution: "Get visibility into real workflows. See what your team actually does, share what works, and scale improvements without micromanaging.",
  },
  {
    title: "The Privacy-Conscious Professional",
    painPoint: "\"Every tool wants access to everything. I need real value before I let something watch how I work.\"",
    solution: "Start with one workflow. Get a concrete win in your first session—then decide. All processing happens locally. Your data stays yours.",
  },
];

const Features = () => {

  return (
    <section className="bg-background py-20 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Built for people who want to get better at their work.
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
