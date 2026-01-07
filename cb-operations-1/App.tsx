
import React from 'react';
import Flyer from './components/Flyer';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center py-12 px-4">
      <div className="no-print mb-8 flex flex-col items-center space-y-4 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Business Flyer Preview</h1>
        <p className="text-slate-600 max-w-md">
          Professional flyer design for CB Operations. High-end, modern, and optimized for NJ/NYC realtors and homeowners.
        </p>
        <button
          onClick={handlePrint}
          className="bg-[#F98805] hover:bg-[#e07b04] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg active:scale-95"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="flyer-container flyer-shadow w-full max-w-[850px] aspect-[8.5/11] bg-[#182340] overflow-hidden">
        <Flyer />
      </div>

      <div className="no-print mt-8 text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} CB Operations. All rights reserved.
      </div>
    </div>
  );
};

export default App;
