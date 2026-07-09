import React from "react";

const PortfolioExperience = ({ data }) => {
  if (!data || data.length === 0 || !data[0].role) return null;

  return (
    <section id="experience" className="w-full animate-fade-in-up mt-12 md:mt-0">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-[2.5rem] md:text-[3rem] font-sans font-normal text-gray-900 dark:text-white transition-colors tracking-tight">My Career &</h2>
        <h2 className="text-[3rem] md:text-[4rem] font-sans font-normal text-violet-600 dark:text-[#d8b4fe] dark:drop-shadow-[0_0_15px_rgba(216,180,254,0.3)] transition-colors tracking-tight">Experience</h2>
      </div>

      <div className="relative border-l border-gray-300 dark:border-white/10 ml-4 md:ml-32 flex flex-col gap-16 transition-colors">
        
        {data.map((exp, idx) => (
          exp.role && (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Glowing Timeline dot - First is purple, others are pink/rose */}
              <div className={`absolute w-4 h-4 rounded-full -left-[8px] top-1 transition-colors ${
                idx === 0 
                  ? "bg-violet-500 dark:bg-[#d8b4fe] shadow-[0_0_10px_rgba(139,92,246,0.5)] dark:shadow-[0_0_15px_rgba(216,180,254,0.8)]" 
                  : "bg-rose-400 dark:bg-[#fb7185] shadow-[0_0_10px_rgba(251,113,133,0.5)] dark:shadow-[0_0_15px_rgba(251,113,133,0.8)]"
              }`} />
              
              <p className={`text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-2 transition-colors ${
                idx === 0 ? "text-violet-600 dark:text-[#d8b4fe]" : "text-rose-500 dark:text-[#fb7185]"
              }`}>
                {exp.period}
              </p>
              <h3 className="text-[1.2rem] md:text-[1.3rem] font-bold text-gray-900 dark:text-white mb-1 tracking-wide transition-colors">
                {exp.role}
              </h3>
              <p className="text-[0.85rem] text-gray-600 dark:text-gray-400 mb-4 font-medium transition-colors">
                {exp.company}
              </p>
              <p className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl font-light transition-colors whitespace-pre-wrap">
                {exp.description}
              </p>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default PortfolioExperience;
