import React from "react";

const PortfolioProjects = ({ data }) => {
  if (!data || data.length === 0 || !data[0].title) return null;

  return (
    <section id="projects" className="w-full animate-fade-in-up">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-[2.5rem] md:text-[3rem] font-sans font-normal text-gray-900 dark:text-white flex items-center gap-3 transition-colors tracking-tight">
          My <span className="text-violet-600 dark:text-[#d8b4fe] dark:drop-shadow-[0_0_15px_rgba(216,180,254,0.3)]">Projects</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((proj, idx) => (
          proj.title && (
            <div key={idx} className="bg-white dark:bg-[#101217] border border-violet-500/20 rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:border-violet-500/40 shadow-sm dark:shadow-xl hover:shadow-md dark:hover:shadow-2xl">
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-violet-500/20">
                {proj.imageUrl ? (
                  <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-[#16171b] text-gray-400">No Image</div>
                )}
                {proj.badge && (
                  <div className="absolute top-4 right-4 bg-[#16171b]/90 backdrop-blur-md px-3 py-1 rounded-full border border-violet-500/30 transition-colors shadow-lg">
                    <span className="text-[0.6rem] font-bold text-gray-800 dark:text-gray-300 tracking-wider transition-colors">{proj.badge}</span>
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-[1.2rem] font-bold text-gray-900 dark:text-white leading-tight transition-colors">{proj.title}</h3>
                  {proj.projectUrl && (
                    <a href={proj.projectUrl} target="_blank" rel="noreferrer">
                      <span className="material-symbols-outlined text-[20px] text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-white cursor-pointer transition-colors mt-0.5">arrow_outward</span>
                    </a>
                  )}
                </div>
                <p className="text-[0.8rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 transition-colors whitespace-pre-wrap">
                  {proj.description}
                </p>
                
                {proj.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tags.split(',').map((tag, tIdx) => tag.trim() && (
                      <span key={tIdx} className="px-3 py-1 rounded-full border border-violet-500/20 bg-[#1a1b23] text-gray-400 text-[0.65rem] font-medium whitespace-nowrap transition-colors">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default PortfolioProjects;
