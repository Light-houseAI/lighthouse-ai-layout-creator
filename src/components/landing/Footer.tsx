import lighthouseLogo from "@/assets/lighthouse-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-navy border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-3">
            <img 
              src={lighthouseLogo} 
              alt="Krama" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-lg font-semibold text-navy-foreground">
              Krama
            </span>
          </div>
          <p className="text-sm text-navy-foreground/60">
            © 2025 Krama Inc. - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
