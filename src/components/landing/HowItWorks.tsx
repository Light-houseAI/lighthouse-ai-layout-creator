import { Monitor, Cpu, Share2 } from "lucide-react";

const steps = [
  {
    icon: Monitor,
    number: "01",
    title: "Capture work sessions",
    description: "The Lighthouse AI desktop app passively captures on-screen work, gathers context, and identifies repeatable patterns."
  },
  {
    icon: Cpu,
    number: "02",
    title: "Generate agents",
    description: "After repeated work sessions, Lighthouse AI creates micro-AI agents that can perform the same tasks across your tools."
  },
  {
    icon: Share2,
    number: "03",
    title: "Share and scale",
    description: "An ecosystem of human-trained agents can be used by others or for yourself to automate new or repeated tasks."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Training your AI agents
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
