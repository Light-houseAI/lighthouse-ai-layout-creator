import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const personas = [
  {
    title: "The Productive Skeptic",
    painPoint: "\"I use AI constantly but I'm not getting better—just faster at producing work that needs heavy editing.\"",
    solution: "Stop guessing where AI helps. Lighthouse shows you exactly which parts of your workflow to automate and which need your real attention.",
  },
  {
    title: "The Solo Optimizer",
    painPoint: "\"I've streamlined what I can, but I have no idea if my workflows are actually good or just familiar.\"",
    solution: "See your work patterns clearly. Discover inefficiencies you've gone blind to—like the 7-minute task that could take 2.",
  },
  {
    title: "The Distributed Team Lead",
    painPoint: "\"My team says AI made them faster, but I can't see what's actually working across time zones.\"",
    solution: "Get visibility into real workflows. See what your team actually does, share what works, and scale improvements without micromanaging.",
  },
  {
    title: "The Privacy-Conscious Professional",
    painPoint: "\"Every tool wants access to everything. I need real value before I let something watch how I work.\"",
    solution: "Start with one workflow. Get a concrete win in your first session—then decide. All processing happens locally. Your data stays yours.",
  },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % personas.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + personas.length) % personas.length);
  };

  return (
    <section className="bg-background py-20 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Built for people who want to get better at their work.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {personas.map((persona, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-card rounded-xl border border-border p-8 h-full flex flex-col">
                    {/* Persona Title */}
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      {persona.title}
                    </h3>
                    
                    {/* Pain Point */}
                    <div className="mb-6">
                      <p className="text-muted-foreground italic text-sm leading-relaxed">
                        {persona.painPoint}
                      </p>
                    </div>
                    
                    {/* Solution */}
                    <div className="mt-auto">
                      <p className="text-text-body leading-relaxed">
                        {persona.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Show all cards in grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 mt-0">
            {personas.map((persona, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl border border-border p-8 flex flex-col hover:border-primary/50 transition-colors"
              >
                {/* Persona Title */}
                <h3 className="text-xl font-bold text-primary mb-4">
                  {persona.title}
                </h3>
                
                {/* Pain Point */}
                <div className="mb-6">
                  <p className="text-muted-foreground italic text-sm leading-relaxed">
                    {persona.painPoint}
                  </p>
                </div>
                
                {/* Solution */}
                <div className="mt-auto">
                  <p className="text-text-body text-sm leading-relaxed">
                    {persona.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous persona"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {personas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to persona ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next persona"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
