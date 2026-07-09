import React from "react";

const PortfolioVolunteering = ({ data }) => {
  if (!data || data.length === 0 || !data[0].role) return null;

  return (
    <section id="volunteering" className="w-full animate-fade-in-up mt-8">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-[2rem] md:text-[2.5rem] font-sans font-bold text-gray-900 dark:text-white uppercase tracking-wider transition-colors">
          Volunteering
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, idx) => (
          item.role && (
            <div key={idx} className="bg-white dark:bg-[#121318]/50 border border-violet-500/20 dark:border-violet-500/30 hover:border-violet-500/50 dark:hover:border-violet-400/60 rounded-lg p-8 flex flex-col transition-colors shadow-sm dark:shadow-none group">
              <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 transition-colors">
                <span className="material-symbols-outlined text-violet-600 dark:text-violet-300 text-[20px] transition-colors">{item.iconName || 'star'}</span>
              </div>
              <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white uppercase mb-4 transition-colors">
                {item.orgLink ? (
                  <a href={item.orgLink} target="_blank" rel="noreferrer" className="hover:text-violet-500 transition-colors">{item.role}</a>
                ) : (
                  item.role
                )}
              </h3>
              <p className="text-[0.9rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-1 transition-colors whitespace-pre-wrap">
                {item.description}
              </p>
              <p className="text-[0.75rem] font-bold text-violet-600 dark:text-violet-300 uppercase tracking-widest mt-auto transition-colors">
                {item.organization}
              </p>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default PortfolioVolunteering;
