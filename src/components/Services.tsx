import { Truck, Clock, Package, Trash2, HardHat, Shield, Sparkles } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Moving (Core)",
    items: [
      "Studio / 1BR / small moves",
      "In-building & local moves",
      "Careful handling + protection",
      "Flexible scheduling",
    ],
  },
  {
    icon: Clock,
    title: "Emergency 24/7 Service",
    items: [
      "Urgent move-outs & last-minute moves",
      "Emergency deliveries & pickups",
      "Rapid cleanouts & debris runs",
      "Priority scheduling (premium rates apply)",
    ],
    highlight: true,
  },
  {
    icon: Package,
    title: "Delivery + Installation",
    items: [
      "Furniture pickup & delivery",
      "Assembly / mounting (as applicable)",
      "Room placement & basic setup",
      "Packaging removal (optional)",
    ],
  },
  {
    icon: Trash2,
    title: "Cleanouts + Junk Removal",
    items: [
      "Move-out cleanouts",
      "Furniture & bulk removal",
      "Light debris (non-hazardous)",
      "Dump runs (fees quoted clearly)",
    ],
  },
  {
    icon: HardHat,
    title: "Jobsite Logistics (GC Support)",
    items: [
      "Material pickup & delivery",
      "Carry-in, staging, organization",
      "Site runner / helper blocks",
      "Coordination with GCs/landlords",
    ],
  },
  {
    icon: Shield,
    title: "Site Preparation",
    items: [
      "Floor protection & coverings",
      "Space clearing & staging",
      "Basic prep so crews start faster",
      "Coordination with GCs/landlords",
    ],
  },
  {
    icon: Sparkles,
    title: "Cleanup Support",
    items: [
      "End-of-day cleanup assistance",
      "Debris bagging & removal",
      "Haul-away coordination",
      "Turnover-ready support",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container-site">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moving is the base. Add-ons are designed for renovations, turnovers, and contractor workflows — with premium 24/7 support available for urgent requests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className={`card-elevated group ${
                service.highlight ? "ring-2 ring-accent" : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                service.highlight ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
              }`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
