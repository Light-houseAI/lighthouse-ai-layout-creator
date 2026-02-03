import lighthouseLogo from "@/assets/lighthouse-logo.png";

const Header = () => {
  return (
    <header className="bg-background py-4 px-6 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={lighthouseLogo} 
            alt="Krama" 
            className="w-8 h-8 rounded-full"
          />
          <span 
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, hsl(160 35% 50%) 0%, hsl(200 30% 60%) 40%, hsl(260 35% 60%) 100%)' }}
          >
            Krama
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center">
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
