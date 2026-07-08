import React from "react";

const PortfolioSkills = () => {
  return (
    <section className="w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-white mb-6 transition-colors">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        
        <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-lg p-5 shadow-sm transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[18px] text-violet-600 dark:text-violet-500">code</span>
            <h3 className="text-[0.95rem] font-bold text-gray-900 dark:text-white">Core Engineering</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400">React.js</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400">TypeScript</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400">Node.js</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400">Python</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400">Rust (Basics)</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-lg p-5 shadow-sm transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[18px] text-cyan-600 dark:text-cyan-400">palette</span>
            <h3 className="text-[0.95rem] font-bold text-gray-900 dark:text-white">Design & UX</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-cyan-200 dark:border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">Figma</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-cyan-200 dark:border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-cyan-200 dark:border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">Framer Motion</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-cyan-200 dark:border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">Storybook</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-lg p-5 shadow-sm transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[18px] text-gray-600 dark:text-gray-400">terminal</span>
            <h3 className="text-[0.95rem] font-bold text-gray-900 dark:text-white">Tools & Deployment</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-400">Docker</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-400">AWS (EC2/S3)</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-400">CI/CD (Actions)</span>
            <span className="px-3 py-1 rounded-full text-[0.7rem] font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-400">Git</span>
          </div>
        </div>

      </div>

      <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-white mb-6 transition-colors">Proficiency Matrix</h2>
      <div className="bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-lg p-6 md:p-8 shadow-sm transition-colors">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1.5 text-xs font-mono font-medium text-gray-600 dark:text-gray-400">
              <span>Frontend Architecture</span>
              <span>95%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: '95%' }} />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1.5 text-xs font-mono font-medium text-gray-600 dark:text-gray-400">
              <span>Backend Development</span>
              <span>80%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1.5 text-xs font-mono font-medium text-gray-600 dark:text-gray-400">
              <span>DevOps & Infrastructure</span>
              <span>65%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: '65%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkills;
