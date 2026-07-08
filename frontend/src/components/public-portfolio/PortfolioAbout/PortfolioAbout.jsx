import React from "react";

const PortfolioAbout = () => {
  return (
    <section id="about" className="w-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-0.5 w-8 bg-violet-600 dark:bg-violet-500" />
        <h2 className="text-xl font-sans font-bold text-gray-900 dark:text-white transition-colors">About Me</h2>
      </div>

      <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-transparent dark:border-l-4 dark:border-l-violet-600 rounded-lg p-6 md:p-8 shadow-sm transition-colors mb-8">
        <p className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-300">
          I'm a final-year Computer Science student at the University of Colombo with a deep-seated passion for crafting intuitive, high-performance user interfaces. My journey in tech started with a curiosity for how code transforms into visual experiences, which quickly evolved into a focused path toward becoming a Frontend Architect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[20px] text-violet-600 dark:text-violet-500">psychology</span>
            <h3 className="text-[1.05rem] font-bold text-violet-600 dark:text-violet-400">Philosophical Approach</h3>
          </div>
          <p className="text-[0.9rem] leading-relaxed text-gray-600 dark:text-gray-400">
            I believe that code should be as expressive as it is functional. My approach centers on the "Performance First" philosophy—ensuring that every micro-interaction and asset serves the user experience without compromise.
          </p>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[20px] text-cyan-600 dark:text-cyan-400">verified</span>
            <h3 className="text-[1.05rem] font-bold text-cyan-600 dark:text-cyan-400">Core Principles</h3>
          </div>
          <ul className="space-y-2 text-[0.9rem] text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-cyan-400" /> Accessibility-driven design
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-cyan-400" /> Component-driven architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-cyan-400" /> Type-safety for robust shipping
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAbout;
