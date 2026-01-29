import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${heroIllustration})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight mb-6 animate-fade-in">
            Master your workflow and scale it
          </h1>
          
          <p className="text-lg md:text-xl text-navy-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Lighthouse AI learns how you work by observing your on-screen work in real time. 
            We optimize your craft and automate the repetitive, manual tasks, while you take 
            credit for your hard-earned experience.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-lg font-medium"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
