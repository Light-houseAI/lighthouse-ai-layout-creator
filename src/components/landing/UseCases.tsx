import { useState } from "react";
import { Layers } from "lucide-react";

const useCases = [
  {
    id: "capture",
    title: "Capture",
    headline: "Capture",
    description: "Lighthouse runs quietly in the background, recording your workflow across the apps you choose.",
  },
  {
    id: "analyze",
    title: "Analyze",
    headline: "Analyze",
    description: "We classify what you were trying to do, how you did it, and where time went.",
  },
  {
    id: "optimize",
    title: "Optimize",
    headline: "Optimize",
    description: "Get specific recommendations: shortcuts, automations, better approaches—tailored to your actual workflow.",
  },
  {
    id: "execute",
    title: "Execute",
    headline: "Execute",
    description: "Step-by-step guidance to implement changes. Share workflows with your team. Keep improving.",
  },
];

// Floating tool icons for the right side
const toolIcons = [
  { name: "Slack", color: "#E01E5A", icon: "S" },
  { name: "Notion", color: "#000000", icon: "N" },
  { name: "Gmail", color: "#EA4335", icon: "M" },
  { name: "Drive", color: "#4285F4", icon: "D" },
  { name: "Figma", color: "#F24E1E", icon: "F" },
  { name: "Sheets", color: "#34A853", icon: "S" },
  { name: "Docs", color: "#4285F4", icon: "D" },
  { name: "Zoom", color: "#2D8CFF", icon: "Z" },
  { name: "Asana", color: "#F06A6A", icon: "A" },
  { name: "Jira", color: "#0052CC", icon: "J" },
  { name: "Linear", color: "#5E6AD2", icon: "L" },
  { name: "Airtable", color: "#18BFFF", icon: "A" },
];

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(useCases[0].id);
  const activeData = useCases.find((uc) => uc.id === activeCase)!;

  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="label-feature">HOW IT WORKS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              {activeData.headline}
            </h2>

            <p className="text-text-body leading-relaxed mb-10 max-w-md">
              {activeData.description}
            </p>

            {/* Progress dots */}
            <div className="flex gap-2 mb-8">
              {useCases.map((uc) => (
                <div
                  key={uc.id}
                  className={`h-1 w-8 rounded-full transition-colors ${
                    uc.id === activeCase ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>

            {/* Tab list */}
            <div className="space-y-0">
              {useCases.map((uc) => (
                <button
                  key={uc.id}
                  onClick={() => setActiveCase(uc.id)}
                  className={`w-full text-left py-4 border-t border-border transition-colors ${
                    uc.id === activeCase
                      ? "text-accent font-medium"
                      : "text-text-body hover:text-primary"
                  }`}
                >
                  {uc.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Floating Icons Cloud */}
          <div className="relative min-h-[400px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {toolIcons.map((tool, index) => {
                  // Create a scattered layout
                  const positions = [
                    { top: "5%", left: "20%" },
                    { top: "10%", left: "55%" },
                    { top: "15%", left: "80%" },
                    { top: "25%", left: "10%" },
                    { top: "30%", left: "40%" },
                    { top: "35%", left: "70%" },
                    { top: "45%", left: "25%" },
                    { top: "50%", left: "60%" },
                    { top: "55%", left: "85%" },
                    { top: "65%", left: "15%" },
                    { top: "70%", left: "45%" },
                    { top: "75%", left: "75%" },
                  ];
                  const pos = positions[index];

                  return (
                    <div
                      key={tool.name}
                      className="absolute w-12 h-12 bg-card rounded-xl shadow-sm border border-border flex items-center justify-center transition-transform hover:scale-110 hover:shadow-md"
                      style={{
                        top: pos.top,
                        left: pos.left,
                      }}
                    >
                      <span
                        className="text-lg font-bold"
                        style={{ color: tool.color }}
                      >
                        {tool.icon}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
