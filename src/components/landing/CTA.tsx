import { useState } from "react";

const CTA = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { companyName, email });
    // Handle form submission
  };

  return (
    <section className="bg-background py-20 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight heading-italic mb-6">
              Ready to<br />
              Feast?
            </h2>
            
            <p className="text-text-body leading-relaxed">
              Join 40,000+ companies digesting their fiscal responsibilities with 
              Theradyme.
            </p>
          </div>
          
          {/* Right Column - Form */}
          <div className="lg:border-l border-border lg:pl-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label-feature block mb-3">COMPANY NAME</label>
                <input
                  type="text"
                  placeholder="e.g. Juicy Ventures Inc."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="label-feature block mb-3">WORK EMAIL</label>
                <input
                  type="email"
                  placeholder="finance@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full mt-8"
              >
                GET EARLY ACCESS
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
