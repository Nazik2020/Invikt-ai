import React from "react";

const PortfolioProjects = ({ data }) => {
  if (!data || data.length === 0 || !data[0].title) return null;

  return (
    <section id="projects" className="w-full animate-fade-in-up">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-[2rem] md:text-[2.5rem] font-sans font-light text-gray-700 dark:text-gray-300 flex items-center gap-3 transition-colors">
          My <span className="text-[2.5rem] md:text-[3rem] font-normal text-violet-600 dark:text-[#d8b4fe] dark:drop-shadow-[0_0_10px_rgba(216,180,254,0.3)] transition-colors">Projects</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((proj, idx) => (
          proj.title && (
            <div key={idx} className="bg-white dark:bg-[#101217] border border-violet-500/20 dark:border-violet-500/30 rounded-lg overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:border-violet-500/50 dark:hover:border-violet-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-2xl">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-900 p-2">
                {proj.imageUrl ? (
                  <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover rounded-md opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-md text-gray-400">No Image</div>
                )}
                {proj.badge && (
                  <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 transition-colors">
                    <span className="text-[0.6rem] font-bold text-gray-800 dark:text-gray-300 tracking-wider transition-colors">{proj.badge}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white leading-tight transition-colors">{proj.title}</h3>
                  {proj.projectUrl && (
                    <a href={proj.projectUrl} target="_blank" rel="noreferrer">
                      <span className="material-symbols-outlined text-[18px] text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-white cursor-pointer transition-colors mt-0.5">open_in_new</span>
                    </a>
                  )}
                </div>
                <p className="text-[0.8rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 transition-colors whitespace-pre-wrap">
                  {proj.description}
                </p>
                
                {proj.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tags.split(',').map((tag, tIdx) => tag.trim() && (
                      <span key={tIdx} className="px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-[0.65rem] font-medium whitespace-nowrap transition-colors">
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
