import { useState, useEffect } from "react";
import { Check, Loader2, Zap, Brain, Workflow, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  id: string;
  label: string;
  sublabel: string;
  icon: typeof Check;
}

const steps: ProcessStep[] = [
  { id: "capture", label: "Capturing", sublabel: "workflows", icon: Workflow },
  { id: "analyze", label: "Analyzing", sublabel: "patterns", icon: Brain },
  { id: "optimize", label: "Optimizing", sublabel: "processes", icon: Zap },
  { id: "deploy", label: "Deploying", sublabel: "automation", icon: Target },
];

type StepStatus = "idle" | "loading" | "success";

const ProcessVisualization = () => {
  const [stepStatuses, setStepStatuses] = useState<Record<string, StepStatus>>(
    steps.reduce((acc, step) => ({ ...acc, [step.id]: "idle" }), {})
  );
  const [currentCycle, setCurrentCycle] = useState(0);

  useEffect(() => {
    const runAnimation = async () => {
      // Reset all to idle
      setStepStatuses(steps.reduce((acc, step) => ({ ...acc, [step.id]: "idle" }), {}));
      
      // Animate each step sequentially
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        
        // Set to loading
        await new Promise(resolve => setTimeout(resolve, 400));
        setStepStatuses(prev => ({ ...prev, [step.id]: "loading" }));
        
        // Set to success after delay
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
        setStepStatuses(prev => ({ ...prev, [step.id]: "success" }));
      }
      
      // Wait before restarting
      await new Promise(resolve => setTimeout(resolve, 2500));
      setCurrentCycle(prev => prev + 1);
    };

    runAnimation();
  }, [currentCycle]);

  return (
    <section className="bg-background py-20 px-6 border-t border-border overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label-feature mb-4 block">HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Watch the magic happen
          </h2>
          <p className="text-text-body max-w-lg mx-auto">
            Lighthouse AI processes your workflows in real-time, identifying inefficiencies and deploying smart automation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-4">
              {steps.map((step, index) => {
                const status = stepStatuses[step.id];
                const Icon = step.icon;
                
                return (
                  <div
                    key={step.id}
                    className={cn(
                      "relative flex items-center gap-6 p-5 rounded-xl transition-all duration-500",
                      status === "idle" && "bg-muted/30",
                      status === "loading" && "bg-primary/5 border border-primary/20",
                      status === "success" && "bg-accent/20 border border-accent/30"
                    )}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Status Indicator */}
                    <div
                      className={cn(
                        "relative z-10 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500",
                        status === "idle" && "bg-muted",
                        status === "loading" && "bg-primary/10",
                        status === "success" && "bg-accent"
                      )}
                    >
                      {status === "loading" ? (
                        <Loader2 className="w-6 h-6 text-primary animate-spin" />
                      ) : status === "success" ? (
                        <Check className="w-6 h-6 text-primary-foreground animate-scale-in" />
                      ) : (
                        <Icon className="w-6 h-6 text-muted-foreground" />
                      )}
                      
                      {/* Loading stripe effect */}
                      {status === "loading" && (
                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                          <div 
                            className="absolute inset-0 opacity-20"
                            style={{
                              background: "repeating-linear-gradient(45deg, transparent, transparent 4px, hsl(var(--primary)) 4px, hsl(var(--primary)) 8px)",
                              animation: "stripe-move 0.5s linear infinite",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3
                          className={cn(
                            "text-xl font-semibold transition-colors duration-300",
                            status === "success" ? "text-primary" : "text-text-body"
                          )}
                        >
                          {step.label}
                        </h3>
                        <span className="text-muted-foreground">{step.sublabel}</span>
                      </div>
                      
                      {/* Progress bar for loading state */}
                      {status === "loading" && (
                        <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{
                              animation: "progress-fill 0.8s ease-out forwards",
                            }}
                          />
                        </div>
                      )}
                      
                      {/* Success message */}
                      {status === "success" && (
                        <p className="mt-2 text-sm text-accent-foreground animate-fade-in">
                          ✓ Complete
                        </p>
                      )}
                    </div>

                    {/* Step number */}
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                        status === "success" 
                          ? "bg-accent text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Completion message */}
          <div 
            className={cn(
              "mt-8 text-center transition-all duration-500",
              Object.values(stepStatuses).every(s => s === "success") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-full border border-accent/30">
              <Check className="w-5 h-5 text-accent" />
              <span className="font-semibold text-primary">System Optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes stripe-move {
          0% { transform: translateX(-8px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ProcessVisualization;
