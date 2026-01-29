import lighthouseLogo from "@/assets/lighthouse-logo.png";

const Header = () => {
  return (
    <header className="bg-background py-6 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={lighthouseLogo} 
            alt="Lighthouse AI" 
            className="w-8 h-8 rounded-full"
          />
          <span 
            className="text-xl font-semibold bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, hsl(160 35% 50%) 0%, hsl(200 30% 60%) 40%, hsl(260 35% 60%) 100%)' }}
          >
            Lighthouse AI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a 
            href="#platform" 
            className="text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
          >
            Platform
          </a>
          <a 
            href="#pricing" 
            className="text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className="text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a 
            href="#login" 
            className="text-sm uppercase tracking-[0.15em] text-primary hover:text-primary/80 transition-colors"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
