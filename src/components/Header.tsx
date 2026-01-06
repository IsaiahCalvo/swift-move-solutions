import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#how", label: "How It Works" },
    { href: "#industries", label: "Who We Help" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-site flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
            CM
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-foreground">Calvo Move LLC</div>
            <div className="text-xs text-muted-foreground">Moving • Install • Cleanup • Site Prep • 24/7</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" asChild>
            <a href="#quote">Get Quote</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-card border-b border-border px-4 pb-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="accent" className="mt-2" asChild>
              <a href="#quote" onClick={() => setMobileOpen(false)}>Get Quote</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
