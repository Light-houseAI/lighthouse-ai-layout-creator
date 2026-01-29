import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import lighthouseLogo from "@/assets/lighthouse-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-navy border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={lighthouseLogo} 
                alt="Lighthouse AI" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-lg font-semibold text-navy-foreground">
                Lighthouse AI
              </span>
            </div>
            <p className="text-sm text-navy-foreground/60">
              © 2025 Krama Inc. - All Rights Reserved
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-navy-foreground/80 mr-2">Connect with us</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-navy-foreground/80 hover:bg-white/20 hover:text-navy-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Legal links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">
              Terms of use
            </a>
            <a href="#" className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
