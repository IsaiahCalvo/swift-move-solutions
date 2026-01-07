
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-start w-full">
      {/* Truck Motif Illustration */}
      <div className="flex items-end space-x-0.5 mb-4">
        {/* Left Truck */}
        <svg width="48" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F7FAFC]/40 transform scale-x-[-1]">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10h1" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
        {/* Center Main Truck */}
        <svg width="64" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F98805]">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10h1" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
        {/* Right Truck */}
        <svg width="48" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F7FAFC]/40">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10h1" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      </div>

      {/* Brand Name */}
      <div className="text-4xl font-extrabold tracking-tighter uppercase text-[#F7FAFC]">
        CB Operations
      </div>

      {/* Sub-brand Tagline */}
      <div className="flex items-center space-x-4 mt-1">
        <div className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold text-[#F98805]">
          Moving <span className="text-[#F7FAFC]/30 mx-1">•</span> Hauling <span className="text-[#F7FAFC]/30 mx-1">•</span> Labor
        </div>
      </div>
    </header>
  );
};

export default Header;
