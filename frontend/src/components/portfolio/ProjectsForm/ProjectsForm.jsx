import React from "react";
import { usePortfolio } from "../../../context/PortfolioContext";

const ProjectsForm = () => {
  const { portfolioData, updateSection } = usePortfolio();
  const items = portfolioData.projects;

  const addItem = () => {
    updateSection("projects", [...items, { id: Date.now(), title: '', badge: '', imageUrl: '', projectUrl: '', tags: '', description: '' }]);
  };

  const removeItem = (id) => {
    updateSection("projects", items.filter(item => item.id !== id));
  };

  const handleChange = (id, field, value) => {
    updateSection("projects", items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  return (
    <div className="bg-[#17181c] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-white/60">code_blocks</span>
          <h3 className="text-[1.1rem] font-bold text-white">Featured Projects</h3>
        </div>
        <button 
          onClick={addItem}
          className="flex items-center gap-2 text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-lg"
        >
          <span className="material-symbols-outlined text-[16px]">add</span> Add Project
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div key={item.id} className="relative p-6 rounded-lg border border-white/10 bg-[#1e1f23] flex flex-col gap-4">
            {items.length > 1 && (
              <button 
                onClick={() => removeItem(item.id)}
                className="absolute top-4 right-4 text-white/20 hover:text-red-400 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Project Title</label>
                <input 
                  type="text" 
                  value={item.title}
                  onChange={(e) => handleChange(item.id, 'title', e.target.value)}
                  placeholder="E.g., Bank Churn Predictor" 
                  className="w-full bg-[#17181c] border border-white/10 rounded-md px-4 py-2 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Project URL</label>
                <input 
                  type="text" 
                  value={item.projectUrl}
                  onChange={(e) => handleChange(item.id, 'projectUrl', e.target.value)}
                  placeholder="https://github.com/..." 
                  className="w-full bg-[#17181c] border border-white/10 rounded-md px-4 py-2 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Image URL</label>
                <input 
                  type="text" 
                  value={item.imageUrl}
                  onChange={(e) => handleChange(item.id, 'imageUrl', e.target.value)}
                  placeholder="https://..." 
                  className="w-full bg-[#17181c] border border-white/10 rounded-md px-4 py-2 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Tags (comma separated)</label>
                <input 
                  type="text" 
                  value={item.tags}
                  onChange={(e) => handleChange(item.id, 'tags', e.target.value)}
                  placeholder="Python, React, etc." 
                  className="w-full bg-[#17181c] border border-white/10 rounded-md px-4 py-2 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Description</label>
              <textarea 
                value={item.description}
                onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                placeholder="Describe the project..." 
                rows={3}
                className="w-full bg-[#17181c] border border-white/10 rounded-md px-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsForm;
