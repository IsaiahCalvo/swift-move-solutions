const steps = [
  {
    num: 1,
    title: "Request a quote",
    description: "Send pickup/dropoff, photos, stairs/elevator, and timing.",
  },
  {
    num: 2,
    title: "Confirm scope + schedule",
    description: "We confirm what fits a van/truck, crew size, and logistics.",
  },
  {
    num: 3,
    title: "We execute clean",
    description: "Protect surfaces, move efficiently, and leave the space tidy.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 lg:py-28 section-alt">
      <div className="container-site">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Simple process, clear expectations, fewer surprises.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="flex gap-6 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="step-number">{step.num}</div>
                <div className="pt-2">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
