
import React from 'react';
import Header from './Header';
import Services from './Services';
import CTA from './CTA';

const Flyer: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col text-[#F7FAFC] p-12 md:p-16 lg:p-20">
      {/* Top Branding */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col lg:flex-row mt-16 gap-12 lg:gap-20">
        
        {/* Left Column: Headline & Bio */}
        <div className="lg:w-3/5 space-y-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-[#F7FAFC]">
            Reliable <span className="text-[#F98805]">solutions</span> — premium <span className="text-[#F98805]">24/7 emergency support</span> when you need it.
          </h1>
          
          <div className="w-20 h-1 bg-[#F98805]"></div>
          
          <p className="text-lg md:text-xl font-light text-[#F7FAFC]/80 leading-relaxed max-w-lg">
            CB Operations provides fast, reliable moving, cleanouts, and contractor support across NJ and NYC. 
            We work efficiently, protect your space, and communicate clearly from start to finish.
          </p>

          <div className="pt-2">
             <span className="inline-block border border-[#F98805] text-[#F98805] px-5 py-2 rounded-sm font-bold tracking-[0.15em] uppercase text-[11px]">
                Same-day & Next-day availability
             </span>
          </div>
        </div>

        {/* Right Column: Services List */}
        <div className="lg:w-2/5 flex flex-col justify-start">
          <div className="bg-[#F7FAFC]/5 border-l-4 border-[#F98805] p-8 space-y-8">
            <h3 className="text-[#F98805] uppercase tracking-[0.2em] font-bold text-xs">Our Expertise</h3>
            <Services />
          </div>
        </div>
      </div>

      {/* Footer / Call to Action */}
      <div className="mt-auto pt-12 border-t border-[#F7FAFC]/10 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
        <CTA />
        <div className="text-right">
          <div className="text-[#F7FAFC]/40 text-[10px] uppercase tracking-[0.3em] mb-1 font-bold">Primary Service Area</div>
          <div className="text-xl font-black text-[#F7FAFC] tracking-tighter italic">NJ / NYC METRO</div>
        </div>
      </div>

      {/* Subtle Structural Element (Negative Space Decor) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F98805]/5 pointer-events-none transform translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Flyer;
