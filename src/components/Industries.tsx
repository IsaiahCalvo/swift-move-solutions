const industries = [
  "Homeowners & Renters",
  "Landlords & Property Managers",
  "Real Estate Agents",
  "General Contractors",
  "Renovation Teams",
  "Small Businesses",
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 lg:py-28">
      <div className="container-site">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who We Help
          </h2>
          <p className="text-muted-foreground">
            Built for repeat work and fast turnarounds.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {industries.map((industry) => (
            <div key={industry} className="pill-tag">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
