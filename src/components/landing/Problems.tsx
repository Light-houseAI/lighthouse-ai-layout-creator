import { AlertCircle, Eye, Brain } from "lucide-react";
import problemsIllustration from "@/assets/problems-illustration.png";

const problemCards = [
  {
    icon: AlertCircle,
    title: "Everybody has knowledge gaps",
    description: "Outdated ways of working quietly lead to operational friction, slowdowns, and inconsistent execution across teams."
  },
  {
    icon: Eye,
    title: "Without visibility into how work is actually being done",
    description: "And what better patterns exist — companies can't optimize or modernize their operations."
  },
  {
    icon: Brain,
    title: "Your best work is trapped in your head",
    description: "You've developed unique shortcuts and workflows that make you elite, but that knowledge is invisible, unshared, and not monetized."
  }
];

const Problems = () => {
  return (
    <section id="problems" className="py-24 bg-problem">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            Key problems
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-problem-foreground mb-4">
            What we're trying to solve
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {problemCards.map((card, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-problem-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-problem-foreground/80 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <img 
              src={problemsIllustration} 
              alt="Knowledge gaps illustration" 
              className="max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
