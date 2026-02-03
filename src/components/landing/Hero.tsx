import WorkflowComparison from './WorkflowComparison';
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  return (
    <section className="bg-background min-h-[80vh] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="py-16">
            <div className="inline-block border border-primary px-3 py-1 mb-8">
              <span className="label-feature">AI-POWERED WORKSPACE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1] mb-8">
              Your workflow,<br />
              understood.
            </h1>
            
            <p className="text-lg text-text-body max-w-md mb-6 leading-relaxed">
              Insights that help you spot inefficiencies, automate busywork, and do your best work—every time.
            </p>
            
            <p className="text-sm text-accent font-medium mb-6">
              We're onboarding early users now. Request access to be in the first cohort.
            </p>
            
            <WaitlistForm />
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
