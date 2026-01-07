import React from 'react';

const CTA: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Phone Number Area */}
            <div className="flex flex-col">
                <span className="text-[#F98805] text-xs uppercase tracking-[0.2em] font-bold mb-1">Direct Line</span>
                <a href="tel:5551234567" className="text-3xl md:text-4xl font-black text-[#F7FAFC] hover:text-[#F98805] transition-colors tracking-tight">
                    (555) 123-4567
                </a>
            </div>

            {/* Quote Button */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-[#F98805] rounded opacity-25 group-hover:opacity-50 transition duration-200 blur"></div>
                <button className="relative bg-[#F98805] text-[#182340] px-8 py-4 font-black uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-all">
                    Request a Quote
                </button>
            </div>
        </div>
    );
};

export default CTA;
