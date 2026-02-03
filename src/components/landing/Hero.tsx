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
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-[0.9] mb-8">
              UNLOCK<br />
              YOUR<br />
              BEST.
            </h1>
            
            <p className="text-lg text-text-body max-w-md mb-10 leading-relaxed">
              Insights that help you spot inefficiencies, automate busywork, and do your best work—every time.
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
