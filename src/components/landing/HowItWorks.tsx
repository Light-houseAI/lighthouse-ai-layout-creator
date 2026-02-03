const steps = [
  {
    number: 1,
    title: "Capture",
    description: "Lighthouse runs quietly in the background, recording your workflow across the apps you choose.",
  },
  {
    number: 2,
    title: "Analyze",
    description: "We classify what you were trying to do, how you did it, and where time went.",
  },
  {
    number: 3,
    title: "Optimize",
    description: "Get specific recommendations: shortcuts, automations, better approaches—tailored to your actual workflow.",
  },
  {
    number: 4,
    title: "Execute",
    description: "Step-by-step guidance to implement changes. Share workflows with your team. Keep improving.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
            How it works
          </h2>
        </div>

        {/* Steps Table */}
        <div className="border-t border-border">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 py-4 border-b border-border">
            <div className="col-span-1">
              <span className="text-sm font-medium text-text-body">Step</span>
            </div>
            <div className="col-span-2">
              <span className="text-sm font-medium text-text-body">Title</span>
            </div>
            <div className="col-span-9">
              <span className="text-sm font-medium text-text-body">Description</span>
            </div>
          </div>

          {/* Steps */}
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-12 gap-4 py-6 border-b border-border"
            >
              <div className="col-span-1">
                <span className="text-primary font-medium">{step.number}</span>
              </div>
              <div className="col-span-2">
                <span className="text-primary font-bold">{step.title}</span>
              </div>
              <div className="col-span-9">
                <p className="text-text-body leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <div className="mt-8">
          <p className="text-sm text-text-body">
            <span className="font-medium text-primary">Privacy note:</span> All processing happens locally first. You control what's captured.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
