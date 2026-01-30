const steps = [
  {
    number: "1",
    label: "CAPTURE",
    title: "Dump the chaos.",
    description: "Docs, emails, spreadsheets, Slack threads, half-finished thoughts—capture them all in. Lighthouse AI thrives in disorder. Honestly, it's suspiciously good at it.",
  },
  {
    number: "2",
    label: "SYNTHESIZE",
    title: "Make sense of the mess. Then make it faster.",
    description: "Lighthouse AI finds what's slowing you down recommends cutting excess steps using industry-wide best practices, and applies AI where it actually adds value. The boring parts get automated. The important work moves faster.",
  },
];

const HowToPrepare = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Title */}
          <div className="lg:border-r border-border lg:pr-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight heading-italic">
              How to<br />
              Prepare?
            </h2>
          </div>
          
          {/* Right Column - Steps */}
          <div className="space-y-4">
            <p className="text-text-body leading-relaxed mb-12">
              While there are many ways to prepare tax returns, we'll focus on the most 
              basic standard "upload & relax" routine. Stress is optional. So is jail, but 
              who are we kidding here?
            </p>
            
            {steps.map((step, index) => (
              <div key={index} className="py-6 border-t border-border first:border-t-0">
                <span className="label-step mb-2 block">
                  STEP #{step.number}: {step.label}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-serif">
                  {step.title}
                </h3>
                
                <p className="text-text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPrepare;
