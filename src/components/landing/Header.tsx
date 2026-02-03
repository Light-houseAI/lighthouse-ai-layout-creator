import { ChevronDown } from "lucide-react";
import lighthouseLogo from "@/assets/lighthouse-logo.png";

const Header = () => {
  return (
    <header className="bg-background py-4 px-6 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={lighthouseLogo} 
            alt="Lighthouse AI" 
            className="w-6 h-6 rounded-full"
          />
          <span 
            className="text-lg font-semibold bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, hsl(160 35% 50%) 0%, hsl(200 30% 60%) 40%, hsl(260 35% 60%) 100%)' }}
          >
            Lighthouse
          </span>
        </div>
        
        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
            Audiences
            <ChevronDown className="w-4 h-4" />
          </button>
          <a 
            href="#shortcuts" 
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Shortcuts
          </a>
          <a 
            href="#templates" 
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Templates
          </a>
          <a 
            href="#whats-new" 
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            What's New
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="#login" 
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Log in
          </a>
          <a 
            href="#request-access" 
            className="text-sm text-primary border border-primary rounded-md px-4 py-2 hover:bg-primary/10 transition-colors"
          >
            Request access
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
