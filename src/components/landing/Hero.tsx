const Hero = () => {
  return (
    <section className="bg-background min-h-[80vh] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="py-16">
            <div className="inline-block border border-primary px-3 py-1 mb-8">
              <span className="label-feature">AI-POWERED AUDIT SHIELD</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-[0.9] mb-8">
              DIGEST<br />
              YOUR<br />
              DATA.
            </h1>
            
            <p className="text-lg text-text-body max-w-md mb-10 leading-relaxed">
              The Juicy A5 metabolic engine for your corporate taxes. Theradyme 
              chews through receipts, reconciles the irreconcilable, and spits out 
              pure compliance.
            </p>
            
            <button className="btn-primary w-full max-w-md">
              START DIGESTION
            </button>
          </div>
          
          {/* Right Content - Grid with Circle */}
          <div className="hidden lg:block relative h-full min-h-[600px]">
            <div className="absolute inset-0 grid-pattern" />
            
            {/* Sage to Purple Gradient Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div 
                className="w-72 h-72 rounded-full flex items-center justify-center shadow-2xl"
                style={{ background: 'linear-gradient(135deg, hsl(160 35% 65%) 0%, hsl(200 30% 70%) 40%, hsl(260 35% 70%) 100%)' }}
              >
                <div className="text-center text-white">
                  <span className="text-4xl font-bold block">100%</span>
                  <span className="text-2xl font-bold block">IRS</span>
                  <span className="text-2xl font-bold block">PROOF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
