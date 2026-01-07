import { Button } from "@/components/ui/button";
import QuickQuoteForm from "./QuickQuoteForm";

const Hero = () => {
  return (
    <section
      className="text-primary-foreground py-16 lg:py-24 bg-primary"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Hero Copy */}
          <div className="space-y-8">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-primary-foreground">
              Reliable solutions — plus{" "}
              <span className="text-accent">premium 24/7 emergency support</span>{" "}
              when you need it.
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              CB Operations is built for NJ/NYC moves, deliveries, cleanouts, and contractor support.
              We protect your space, work efficiently, and communicate clearly from start to finish.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero-primary" asChild>
                <a href="#quote">Request a Quote</a>
              </Button>
              <Button variant="hero-ghost" asChild>
                <a href="#services">See Services</a>
              </Button>
              {window.location.port === "5002" && (
                <Button
                  variant="hero-ghost"
                  onClick={() => {
                    window.open("/marketing-flyer/index.html", "_blank", "noopener,noreferrer");
                  }}
                >
                  View Marketing Flyer
                </Button>
              )}
            </div>

            {/* Trust Items */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="space-y-1">
                <div className="font-display font-bold text-lg text-primary-foreground">Core</div>
                <div className="text-sm text-primary-foreground/60">Moving & Delivery</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-bold text-lg text-primary-foreground">Add-ons</div>
                <div className="text-sm text-primary-foreground/60">Install • Cleanup • Site Prep</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-bold text-lg text-primary-foreground">Emergency</div>
                <div className="text-sm text-primary-foreground/60">Premium 24/7 Service</div>
              </div>
            </div>
          </div>

          {/* Quick Quote Card */}
          <div className="card-elevated animate-slide-in-right">
            <QuickQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
