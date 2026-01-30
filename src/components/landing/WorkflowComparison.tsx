import { useState, useEffect, useRef } from 'react';

interface Pill {
  id: number;
  label: string;
  active: boolean;
  processing: boolean;
}

interface PersonaConfig {
  title: string;
  subtitle: string;
  orchestrationLabel: string;
  pills: string[];
}

const personas: PersonaConfig[] = [
  {
    title: 'Product Manager',
    subtitle: 'Manual Prioritization Required',
    orchestrationLabel: 'Roadmap Optimized',
    pills: ['Backlog Review', 'Stakeholder Input', 'Priority Scoring', 'Sprint Planning', 'Resource Allocation', 'Timeline Sync'],
  },
  {
    title: 'Software Engineer',
    subtitle: 'Manual Debugging Required',
    orchestrationLabel: 'Code Deployed',
    pills: ['Bug Triage', 'Code Review', 'Unit Testing', 'CI/CD Pipeline', 'Deployment', 'Monitoring Setup'],
  },
  {
    title: 'Founder',
    subtitle: 'Manual Oversight Required',
    orchestrationLabel: 'Business Scaled',
    pills: ['Investor Updates', 'Metric Tracking', 'Team Sync', 'Budget Review', 'Strategy Pivot', 'Growth Analysis'],
  },
];

const WorkflowComparison = () => {
  const [currentPersona, setCurrentPersona] = useState(0);
  const [leftPills, setLeftPills] = useState<Pill[]>([]);
  const [leftTimer, setLeftTimer] = useState(0);
  const [rightTimer, setRightTimer] = useState(0);
  const [systemOptimized, setSystemOptimized] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const initializePills = (personaIndex: number) => {
    return personas[personaIndex].pills.map((label, index) => ({
      id: index + 1,
      label,
      active: false,
      processing: false,
    }));
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const runAnimation = (personaIndex: number) => {
    if (isRunning) return;
    
    const pills = initializePills(personaIndex);
    setLeftPills(pills);
    setIsRunning(true);
    setLeftTimer(0);
    setRightTimer(0);
    setSystemOptimized(false);

    // Start left timer
    timerRef.current = setInterval(() => {
      setLeftTimer(prev => prev + 1);
    }, 100);

    // Animate left pills one by one (slow)
    pills.forEach((_, index) => {
      setTimeout(() => {
        setLeftPills(currentPills => 
          currentPills.map((p, i) => 
            i === index ? { ...p, processing: true } : p
          )
        );
      }, index * 800);

      setTimeout(() => {
        setLeftPills(currentPills => 
          currentPills.map((p, i) => 
            i === index ? { ...p, processing: false, active: true } : p
          )
        );
      }, index * 800 + 600);
    });

    // After left side completes, start right side
    const leftDuration = pills.length * 800 + 600;
    
    setTimeout(() => {
      // Stop left timer, start right timer
      if (timerRef.current) clearInterval(timerRef.current);
      
      timerRef.current = setInterval(() => {
        setRightTimer(prev => prev + 1);
      }, 50);

      // Quick right side completion
      setTimeout(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        setSystemOptimized(true);
        setIsRunning(false);
        
        // Move to next persona and restart
        setTimeout(() => {
          const nextPersona = (personaIndex + 1) % personas.length;
          setCurrentPersona(nextPersona);
          setLeftPills(initializePills(nextPersona).map(p => ({ ...p, active: false, processing: false })));
          setLeftTimer(0);
          setRightTimer(0);
          setSystemOptimized(false);
          runAnimation(nextPersona);
        }, 3000);
      }, 800);
    }, leftDuration);
  };

  useEffect(() => {
    setLeftPills(initializePills(0));
    const timeout = setTimeout(() => runAnimation(0), 1000);
    return () => {
      clearTimeout(timeout);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const persona = personas[currentPersona];

  return (
    <div className="w-full h-full min-h-[400px] border border-border rounded-lg overflow-hidden bg-foreground text-background flex flex-col">
      {/* Grid Container */}
      <div className="flex-1 grid grid-cols-[1fr_80px_1fr] border-t border-background/20">
        {/* Left Panel - Legacy Workflow */}
        <div className="p-4 flex flex-col border-r border-background/20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sm font-medium">{persona.title}</h3>
              <p className="text-xs opacity-60">{persona.subtitle}</p>
            </div>
            <span className="text-xs border border-background/40 rounded-full px-2 py-0.5 font-mono">
              {formatTime(leftTimer)}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {leftPills.map((pill) => (
              <div
                key={pill.id}
                className={`
                  text-xs border rounded-full px-3 py-1.5 transition-all duration-200
                  flex items-center gap-1.5
                  ${pill.active 
                    ? 'bg-background text-foreground border-background' 
                    : 'border-background/40'
                  }
                  ${pill.processing ? 'border-background/80' : ''}
                `}
                style={pill.processing ? {
                  background: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.15) 3px, rgba(255,255,255,0.15) 6px)'
                } : undefined}
              >
                {pill.processing && (
                  <span className="w-2.5 h-2.5 border border-current border-t-transparent rounded-full animate-spin" />
                )}
                {pill.label}
              </div>
            ))}
          </div>
        </div>

        {/* Center Column - Lighthouse */}
        <div className="flex items-center justify-center border-r border-background/20 relative overflow-hidden">
          <div className="relative w-12 h-24">
            <svg viewBox="0 0 50 100" className="w-full h-full stroke-current fill-none stroke-[1.5]">
              {/* Lighthouse base */}
              <path d="M15 95 L20 50 L30 50 L35 95 Z" />
              {/* Lighthouse top */}
              <rect x="18" y="40" width="14" height="12" />
              {/* Lighthouse beacon */}
              <rect x="20" y="32" width="10" height="10" />
              {/* Beacon dome */}
              <path d="M20 32 Q25 26 30 32" />
              {/* Window lines */}
              <line x1="22" y1="60" x2="28" y2="60" />
              <line x1="21" y1="70" x2="29" y2="70" />
              <line x1="20" y1="80" x2="30" y2="80" />
            </svg>
            
            {/* Beacon light */}
            <div 
              className="absolute top-[28%] left-1/2 -translate-x-1/2 w-1 h-1 bg-background rounded-full"
              style={{
                boxShadow: '0 0 15px 8px rgba(255,255,255,0.8)',
                animation: 'pulse-beacon 2s infinite'
              }}
            />
          </div>
        </div>

        {/* Right Panel - Orchestration */}
        <div className="p-4 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sm font-medium">Orchestration</h3>
              <p className="text-xs opacity-60">Autonomous Execution</p>
            </div>
            <span className="text-xs border border-background/40 rounded-full px-2 py-0.5 font-mono">
              {formatTime(rightTimer)}
            </span>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full border border-background/40 rounded-2xl p-4 flex items-center justify-center">
              <div
                className={`
                  text-sm border rounded-full px-6 py-2 transition-all duration-300
                  ${systemOptimized 
                    ? 'bg-background text-foreground border-background shadow-[0_0_30px_rgba(255,255,255,0.3)] scale-100 opacity-100' 
                    : 'border-background/40 scale-95 opacity-40'
                  }
                `}
              >
                {persona.orchestrationLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 py-3 border-t border-background/20">
        {personas.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isRunning) {
                setCurrentPersona(index);
                runAnimation(index);
              }
            }}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentPersona 
                ? 'bg-background w-6' 
                : 'bg-background/40 hover:bg-background/60'
              }
            `}
            aria-label={`View ${personas[index].title} workflow`}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse-beacon {
          0% { opacity: 0.3; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.5); }
          100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default WorkflowComparison;
