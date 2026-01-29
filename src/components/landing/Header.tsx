import { Button } from "@/components/ui/button";
import lighthouseLogo from "@/assets/lighthouse-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={lighthouseLogo} 
            alt="Lighthouse AI" 
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-semibold text-navy-foreground">
            Lighthouse AI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problems" className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-colors">
            Key Problems
          </a>
          <a href="#solution" className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-colors">
            Our Solution
          </a>
          <a href="#how-it-works" className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-colors">
            How It Works
          </a>
        </nav>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
