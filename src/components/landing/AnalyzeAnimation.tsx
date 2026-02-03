import { useState, useEffect } from "react";
import { Mail, ListTodo, FileText, MessageSquare, StickyNote, Check, Activity } from "lucide-react";

const inputSources = [
  { icon: Mail, label: "Inbox (42)", delay: 0 },
  { icon: ListTodo, label: "Tasks", delay: 150 },
  { icon: StickyNote, label: "Notes", delay: 300 },
  { icon: FileText, label: "Q3 Report", delay: 450 },
  { icon: MessageSquare, label: "Slack #dev", delay: 600 },
];

const outputItems = [
  { title: "3 Tasks Identified", description: "Extracted from Slack & Email threads automatically.", delay: 0 },
  { title: "2 Hours Captured", description: "Logged to Timesheet based on active document time.", delay: 200 },
  { title: "5 Insights Generated", description: "Summary created for Q3 planning meeting.", delay: 400 },
];

interface AnalyzeAnimationProps {
  isActive: boolean;
}

const AnalyzeAnimation = ({ isActive }: AnalyzeAnimationProps) => {
  const [phase, setPhase] = useState<'idle' | 'input' | 'processing' | 'output'>('idle');
  const [visibleInputs, setVisibleInputs] = useState<number[]>([]);
  const [visibleOutputs, setVisibleOutputs] = useState<number[]>([]);
  const [processingProgress, setProcessingProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setPhase('idle');
      setVisibleInputs([]);
      setVisibleOutputs([]);
      setProcessingProgress(0);
      return;
    }

    // Reset and start animation
    setPhase('input');
    setVisibleInputs([]);
    setVisibleOutputs([]);
    setProcessingProgress(0);

    // Show input cards with stagger
    inputSources.forEach((_, index) => {
      setTimeout(() => {
        setVisibleInputs(prev => [...prev, index]);
      }, 200 + index * 150);
    });

    // Start processing phase
    const processingStart = setTimeout(() => {
      setPhase('processing');
      
      // Animate progress
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += 5;
        setProcessingProgress(progress);
        if (progress >= 100) {
          clearInterval(progressInterval);
        }
      }, 50);
    }, 1200);

    // Show output phase
    const outputStart = setTimeout(() => {
      setPhase('output');
      
      outputItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleOutputs(prev => [...prev, index]);
        }, index * 200);
      });
    }, 2500);

    return () => {
      clearTimeout(processingStart);
      clearTimeout(outputStart);
    };
  }, [isActive]);

  return (
    <div className="absolute inset-0 flex items-stretch gap-4 px-4">
      {/* 01 // INPUT */}
      <div className="flex-1 flex flex-col">
        <span className="text-xs text-muted-foreground tracking-wider mb-4">01 // INPUT</span>
        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          
          {/* Input cards floating */}
          <div className="relative h-full pl-8">
            {inputSources.map((source, index) => {
              const positions = [
                { top: "5%", left: "20%" },
                { top: "18%", left: "45%" },
                { top: "38%", left: "10%" },
                { top: "55%", left: "35%" },
                { top: "72%", left: "5%" },
              ];
              const pos = positions[index];
              const isVisible = visibleInputs.includes(index);
              const Icon = source.icon;

              return (
                <div
                  key={source.label}
                  className={`absolute bg-card rounded-lg shadow-sm border border-border px-3 py-2 flex items-center gap-2 transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 rotate-0' 
                      : 'opacity-0 translate-y-4 -rotate-3'
                  }`}
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: isVisible ? `rotate(${(index % 2 === 0 ? -1 : 1) * (index * 2)}deg)` : undefined,
                  }}
                >
                  <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs text-primary font-medium whitespace-nowrap">{source.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 02 // PROCESSING */}
      <div className="flex-1 flex flex-col">
        <span className="text-xs text-muted-foreground tracking-wider mb-4">02 // PROCESSING</span>
        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          
          {/* Central processing indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* Spinning ring */}
              <div className="relative">
                <div 
                  className={`w-24 h-24 rounded-full border-2 border-dashed transition-all duration-500 ${
                    phase === 'processing' ? 'border-accent animate-spin' : 'border-border'
                  }`}
                  style={{ animationDuration: '3s' }}
                />
                {/* Inner solid circle */}
                <div 
                  className={`absolute inset-3 rounded-full flex items-center justify-center transition-all duration-500 ${
                    phase === 'processing' || phase === 'output' ? 'bg-accent' : 'bg-muted'
                  }`}
                >
                  <Activity 
                    className={`w-8 h-8 transition-colors duration-500 ${
                      phase === 'processing' || phase === 'output' ? 'text-accent-foreground' : 'text-muted-foreground'
                    }`} 
                    strokeWidth={1.5} 
                  />
                </div>
                {/* Orbiting dots */}
                <div 
                  className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground/40 transition-opacity ${
                    phase === 'processing' ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
                <div 
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground/40 transition-opacity ${
                    phase === 'processing' ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
              </div>
              
              {/* Status text */}
              <div className="mt-6 text-center">
                <p className="text-sm font-medium text-primary tracking-wide">
                  {phase === 'output' ? 'ANALYSIS COMPLETE' : 'ANALYZING CONTEXT'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {phase === 'output' ? 'Results ready' : `Parsing ${inputSources.length} sources`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03 // OUTPUT */}
      <div className="flex-1 flex flex-col">
        <span className="text-xs text-muted-foreground tracking-wider mb-4">03 // OUTPUT</span>
        <div className="flex-1 relative">
          {/* Output card */}
          <div 
            className={`absolute top-8 left-4 right-4 bg-accent rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
              phase === 'output' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-accent-foreground">Session Organized</span>
              <span className="text-[10px] font-medium bg-accent-foreground/20 text-accent-foreground px-2 py-0.5 rounded">
                99% ACCURACY
              </span>
            </div>
            
            {/* Results list */}
            <div className="bg-card px-4 py-3 space-y-3">
              {outputItems.map((item, index) => {
                const isVisible = visibleOutputs.includes(index);
                
                return (
                  <div 
                    key={item.title}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeAnimation;
