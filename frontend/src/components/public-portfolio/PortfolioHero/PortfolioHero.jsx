import React from "react";

const PortfolioHero = () => {
  return (
    <section className="w-full flex flex-col items-center text-center mt-12 mb-8 animate-fade-in-up">
      {/* Avatar (Square) */}
      <div className="relative mb-6 group">
        <div className="w-32 h-32 bg-gray-200 dark:bg-[#1a1b23] border border-gray-300 dark:border-white/10 shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-violet-500/20 mix-blend-overlay group-hover:bg-cyan-500/20 transition-colors z-20" />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
            alt="Nazik" 
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      <h1 className="text-[2.5rem] font-sans font-black tracking-tight text-gray-900 dark:text-white mb-1 transition-colors">Nazik</h1>
      <p className="text-[0.95rem] font-sans font-bold text-violet-600 dark:text-cyan-400 mb-4 tracking-wide transition-colors">Frontend Architect | CS Student</p>
      
      <div className="flex items-center justify-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-sans mb-8 transition-colors">
        <span className="material-symbols-outlined text-[14px]">location_on</span>
        <span>Colombo, Sri Lanka</span>
      </div>

      <div className="flex items-center gap-3">
        <a href="#" className="flex items-center gap-2 px-5 py-2 rounded border border-gray-200 dark:border-white/5 bg-white dark:bg-[#15171e] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 text-[0.8rem] font-bold shadow-sm transition-all hover:-translate-y-0.5">
          <span className="material-symbols-outlined text-[16px] text-violet-600 dark:text-violet-500">link</span>
          LinkedIn
        </a>
        <a href="#" className="flex items-center gap-2 px-5 py-2 rounded border border-gray-200 dark:border-white/5 bg-white dark:bg-[#15171e] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 text-[0.8rem] font-bold shadow-sm transition-all hover:-translate-y-0.5">
          <span className="material-symbols-outlined text-[16px] text-gray-800 dark:text-gray-400">code</span>
          GitHub
        </a>
        <a href="#" className="flex items-center gap-2 px-5 py-2 rounded border border-gray-200 dark:border-white/5 bg-white dark:bg-[#15171e] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 text-[0.8rem] font-bold shadow-sm transition-all hover:-translate-y-0.5">
          <span className="material-symbols-outlined text-[16px] text-gray-600 dark:text-gray-400">mail</span>
          Email
        </a>
      </div>
    </section>
  );
};

export default PortfolioHero;
