import { useState } from "react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const jobRoles = [
  'Product Manager',
  'Software Engineer',
  'Founder',
  'Designer',
  'Operations',
  'Other'
];

const CTA = () => {
  const [jobProfile, setJobProfile] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Missing information",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: email.trim().toLowerCase(), job_role: jobProfile || null });

    setIsSubmitting(false);

    if (error) {
      if (error.code === '23505') {
        toast({
          title: "Already on the list!",
          description: "This email is already registered for early access.",
        });
        setIsSubmitted(true);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "You're on the list!",
      description: "We'll be in touch soon with early access.",
    });
  };

  return (
    <section className="bg-background py-20 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              See how your team actually works—and what your best people do differently.
            </h2>
            
            <p className="text-text-body leading-relaxed mb-6">
              Join Krama. Be among the first to experience:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-body">
                <span className="text-accent font-bold">✓</span>
                <span>Automatic workflow capture across every tool</span>
              </li>
              <li className="flex items-start gap-3 text-text-body">
                <span className="text-accent font-bold">✓</span>
                <span>AI insights grounded in what actually happened, not what someone remembers</span>
              </li>
              <li className="flex items-start gap-3 text-text-body">
                <span className="text-accent font-bold">✓</span>
                <span>On-device processing—your data stays yours</span>
              </li>
            </ul>
          </div>
          
          {/* Right Column - Form */}
          <div className="lg:border-l border-border lg:pl-16">
            {isSubmitted ? (
              <div className="border border-primary bg-primary/5 p-8 text-center">
                <p className="text-primary font-bold text-xl">YOU'RE ON THE LIST</p>
                <p className="text-text-body mt-2">We'll reach out soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label-feature block mb-3">YOUR JOB PROFILE</label>
                  <input
                    type="text"
                    placeholder="e.g. Product Manager, Founder, Engineer"
                    value={jobProfile}
                    onChange={(e) => setJobProfile(e.target.value)}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="label-feature block mb-3">YOUR EMAIL</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full mt-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Requesting...' : 'Request Early Access'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
