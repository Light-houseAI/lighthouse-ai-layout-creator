import { Search, Bot, FileText } from "lucide-react";
import solutionIllustration from "@/assets/solution-illustration.png";

const solutionFeatures = [
  {
    icon: Search,
    title: "Analyze and optimize",
    description: "See your work like never before. Lighthouse observes your workflow and highlights bottlenecks, letting you understand and debug your process like code before you automate it."
  },
  {
    icon: Bot,
    title: "Create micro-AI agents trained on your patterns",
    description: "Agents are trained based on the nuances of your personal style, optimizations, shortcuts, and judgement calls unique to you. Then watch them execute those tasks when you need them to."
  },
  {
    icon: FileText,
    title: "Generate reports, guides, insights, and more",
    description: "Turn your expertise into shareable documentation, training materials, and actionable insights that help your entire team level up."
  }
];

const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            Our solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your work becomes your automations
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img 
              src={solutionIllustration} 
              alt="Solution illustration" 
              className="max-w-md w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            {solutionFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
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

export default Solution;
