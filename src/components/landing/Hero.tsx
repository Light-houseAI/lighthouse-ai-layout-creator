import WaitlistForm from './WaitlistForm';
import WorkflowComparison from './WorkflowComparison';

const Hero = () => {
  return (
    <section className="bg-background min-h-[80vh] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="py-16">
            <div className="inline-block border border-primary px-3 py-1 mb-8">
              <span className="label-feature">WORKFLOW INTELLIGENCE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1] mb-8">
              Your workflow,<br />
              understood.
            </h1>
            
            <p className="text-lg text-text-body max-w-md mb-6 leading-relaxed">
              Krama captures how work actually happens—across every app in your workflow—then turns that invisible knowledge into actionable insights, shareable skill files, and AI agents that work because they've seen what you do.
            </p>
            
            <p className="text-sm text-accent font-medium mb-6">
              We're onboarding early users now. Request access to be in the first cohort.
            </p>
            
            <WaitlistForm />
            
            <a 
              href="#how-it-works" 
              className="inline-block mt-4 text-sm text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
            >
              See how it works →
            </a>
          </div>
          
          {/* Right Content - Workflow Comparison Animation */}
          <div className="hidden lg:block relative h-full min-h-[500px]">
            <div className="absolute inset-0 grid-pattern" />
            
            <div className="absolute inset-4 z-10">
              <WorkflowComparison />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
