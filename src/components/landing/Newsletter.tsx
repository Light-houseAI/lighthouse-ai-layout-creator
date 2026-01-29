import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground mb-4">
            Subscribe to get information, latest news and other interesting offers from Lighthouse AI
          </h2>
          
          {isSubmitted ? (
            <div className="bg-primary/20 text-primary p-4 rounded-lg mt-8">
              Thank you for subscribing! We'll keep you updated.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-8 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/50 rounded-lg px-4 py-3"
                required
              />
              <Button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
