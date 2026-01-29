import { Flower2, Sparkles, Asterisk } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Flower2,
    title: ["Tender", "Audit"],
    description: "Our algorithms are lush and evenly distributed, ensuring a bold, rich defense against inquiries.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: ["Fiscal", "Flavor"],
    description: "Deeply perturbing aromas of efficiency. We find deductions buried in the gristle of your ledger.",
  },
  {
    number: "03",
    icon: Asterisk,
    title: ["Raw", "Speed"],
    description: "Don't let the center stay velvety. We cook your books (legally) in seconds, not weeks.",
  },
];

const Features = () => {
  return (
    <section className="bg-background py-16 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="py-4">
              <span className="label-feature mb-6 block">FEATURE {feature.number}</span>
              
              <feature.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              
              <h3 className="text-3xl font-bold text-primary leading-tight mb-4">
                {feature.title[0]}<br />
                {feature.title[1]}
              </h3>
              
              <p className="text-text-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
          
          {/* Grid pattern column with text */}
          <div className="hidden lg:block relative min-h-[300px]">
            <div className="absolute inset-0 grid-pattern border-l border-border" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-3xl font-bold text-primary text-center leading-tight font-serif italic">
                TRY A<br />
                LITTLE<br />
                CHAOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
