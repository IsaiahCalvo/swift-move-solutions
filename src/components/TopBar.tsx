const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container-site flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="badge-location">NJ/NYC</span>
          <span className="text-primary-foreground/70 hidden sm:inline">
            Flexible Scheduling • Fast Response
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#quote" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Request a Quote
          </a>
          <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
