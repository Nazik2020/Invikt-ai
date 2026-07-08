import React from "react";

const PortfolioProjects = () => {
  return (
    <section id="projects" className="w-full animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-white mb-6 transition-colors">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-lg p-6 shadow-sm hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-violet-300 dark:hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer relative z-10 overflow-hidden">
          <div className="w-10 h-10 rounded bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-5">
            <span className="material-symbols-outlined text-[20px] text-violet-700 dark:text-violet-400">copy_all</span>
          </div>
          <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white mb-2 transition-colors">Pulse UI Kit</h3>
          <p className="text-[0.85rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors flex-1">
            A comprehensive React design system built for enterprise dashboard applications.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[0.65rem] font-bold tracking-wider uppercase text-violet-700 dark:text-violet-400">REACT</span>
            <span className="text-[0.65rem] font-bold tracking-wider uppercase text-violet-700 dark:text-violet-400">TAILWIND</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
            <a href="#" className="text-[0.7rem] font-bold text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">GitHub &rarr;</a>
            <a href="#" className="text-[0.7rem] font-bold text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Live Demo &rarr;</a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-lg p-6 shadow-sm hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer relative z-10 overflow-hidden">
          <div className="w-10 h-10 rounded bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-5">
            <span className="material-symbols-outlined text-[20px] text-cyan-700 dark:text-cyan-400">api</span>
          </div>
          <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white mb-2 transition-colors">FastAPI Social</h3>
          <p className="text-[0.85rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors flex-1">
            A lightweight social media backend implementation with JWT auth and real-time sockets.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[0.65rem] font-bold tracking-wider uppercase text-cyan-700 dark:text-cyan-400">PYTHON</span>
            <span className="text-[0.65rem] font-bold tracking-wider uppercase text-cyan-700 dark:text-cyan-400">FASTAPI</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
            <a href="#" className="text-[0.7rem] font-bold text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">GitHub &rarr;</a>
            <a href="#" className="text-[0.7rem] font-bold text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Live Demo &rarr;</a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-lg p-6 shadow-sm hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:border-fuchsia-300 dark:hover:border-fuchsia-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer relative z-10 overflow-hidden">
          <div className="w-10 h-10 rounded bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center mb-5">
            <span className="material-symbols-outlined text-[20px] text-fuchsia-700 dark:text-fuchsia-400">lightbulb</span>
          </div>
          <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white mb-2 transition-colors">Aetheric Intelligence</h3>
          <p className="text-[0.85rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors flex-1">
            Deep-learning visualization engine for neural network weight shifts during training.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[0.65rem] font-bold tracking-wider uppercase text-fuchsia-700 dark:text-fuchsia-400">TENSORFLOW</span>
            <span className="text-[0.65rem] font-bold tracking-wider uppercase text-fuchsia-700 dark:text-fuchsia-400">WEBGL</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
            <a href="#" className="text-[0.7rem] font-bold text-gray-500 dark:text-gray-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">GitHub &rarr;</a>
            <a href="#" className="text-[0.7rem] font-bold text-gray-500 dark:text-gray-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">Live Demo &rarr;</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioProjects;
