const comparisons = [
  {
    title: "Your CRM sees work orders. Not workflows.",
    description:
      "CRMs track what got assigned and what got closed. Krama sees the 47 steps in between—across every app your team touches. That's where the real inefficiencies hide.",
  },
  {
    title: "Consultants give you a snapshot. We give you continuous discovery.",
    description:
      "A process consultant interviews your team for two weeks and hands you a PDF. Krama watches workflows continuously and surfaces new insights as your team's work evolves—without the six-figure engagement.",
  },
  {
    title: "AI without evidence is just guessing.",
    description:
      "Most AI tools generate suggestions from generic training data. Krama's recommendations are grounded in what your team actually does—observed, classified, and compared against your best performers.",
  },
];

const WhyKrama = () => {
  return (
    <section className="bg-background py-20 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The gap no other tool closes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-8 flex flex-col hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-text-body text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKrama;
