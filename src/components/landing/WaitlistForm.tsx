import { useState } from 'react';
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

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [jobRole, setJobRole] = useState('');
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
      .insert({ email: email.trim().toLowerCase(), job_role: jobRole || null });

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

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md border border-primary bg-primary/5 p-6 text-center">
        <p className="text-primary font-bold text-lg">YOU'RE ON THE LIST</p>
        <p className="text-text-body text-sm mt-2">We'll reach out soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="YOUR EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border border-primary bg-background px-4 py-3 text-primary placeholder:text-text-body/50 focus:outline-none focus:ring-1 focus:ring-primary"
          disabled={isSubmitting}
        />
        <select
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="border border-primary bg-background px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
          disabled={isSubmitting}
        >
          <option value="" disabled>YOUR ROLE</option>
          {jobRoles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'JOINING...' : 'GET EARLY ACCESS'}
      </button>
    </form>
  );
};

export default WaitlistForm;
