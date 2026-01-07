const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container-site flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg">CB Operations</div>
          <div className="text-primary-foreground/60 text-sm">
            Moving • Install • Cleanup • Site Prep • Premium 24/7
          </div>
        </div>
        <div className="text-primary-foreground/60 text-sm">
          © {currentYear} CB Operations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
