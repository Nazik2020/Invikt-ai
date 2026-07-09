import React from "react";
import { usePortfolio } from "../../../context/PortfolioContext";

const TechnologiesForm = () => {
  const { portfolioData, updateSection } = usePortfolio();
  const categories = portfolioData.technologies;

  const addCategory = () => {
    updateSection("technologies", [...categories, { id: Date.now(), name: "", tools: [{ id: Date.now() + 1, name: "", logoUrl: "" }] }]);
  };

  const removeCategory = (id) => {
    updateSection("technologies", categories.filter(cat => cat.id !== id));
  };

  const handleCategoryNameChange = (id, value) => {
    updateSection("technologies", categories.map(cat => cat.id === id ? { ...cat, name: value } : cat));
  };

  const addTool = (categoryId) => {
    updateSection("technologies", categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, tools: [...cat.tools, { id: Date.now(), name: "", logoUrl: "" }] };
      }
      return cat;
    }));
  };

  const removeTool = (categoryId, toolId) => {
    updateSection("technologies", categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, tools: cat.tools.filter(t => t.id !== toolId) };
      }
      return cat;
    }));
  };

  const handleToolChange = (categoryId, toolId, field, value) => {
    updateSection("technologies", categories.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          tools: cat.tools.map(t => t.id === toolId ? { ...t, [field]: value } : t)
        };
      }
      return cat;
    }));
  };

  return (
    <div className="bg-[#17181c] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-white/60">terminal</span>
          <h3 className="text-[1.1rem] font-bold text-white">Technologies & Tools</h3>
        </div>
        <button 
          onClick={addCategory}
          className="flex items-center gap-2 text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-widest bg-violet-500/10 px-3 py-1.5 rounded-lg"
        >
          <span className="material-symbols-outlined text-[16px]">add</span> Add Category
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div key={category.id} className="relative p-6 rounded-lg border border-white/10 bg-[#1e1f23] flex flex-col gap-6">
            {categories.length > 1 && (
              <button 
                onClick={() => removeCategory(category.id)}
                className="absolute top-4 right-4 text-white/20 hover:text-red-400 transition-colors"
                title="Remove Category"
              >
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            )}
            
            <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
              <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Category Name</label>
              <input 
                type="text" 
                value={category.name}
                onChange={(e) => handleCategoryNameChange(category.id, e.target.value)}
                placeholder="e.g. Languages or Frameworks" 
                className="w-full bg-[#17181c] border border-white/10 rounded-md px-4 py-2.5 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors mt-1.5"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[0.7rem] font-bold text-white/40 uppercase tracking-widest">Tools in this category</span>
                <button 
                  onClick={() => addTool(category.id)}
                  className="flex items-center gap-1 text-[0.65rem] font-bold text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-[14px]">add</span> Add Tool
                </button>
              </div>

              {category.tools.map((tool) => (
                <div key={tool.id} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center relative bg-[#17181c] p-3 rounded-md border border-white/5">
                  <div className="flex-1 w-full space-y-1.5">
                    <label className="text-[0.55rem] font-black text-white/30 uppercase tracking-widest">Tool Name</label>
                    <input 
                      type="text" 
                      value={tool.name}
                      onChange={(e) => handleToolChange(category.id, tool.id, 'name', e.target.value)}
                      placeholder="e.g. Python" 
                      className="w-full bg-[#1e1f23] border border-white/5 rounded-md px-3 py-2 text-[0.8rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                  <div className="flex-1 w-full space-y-1.5">
                    <label className="text-[0.55rem] font-black text-white/30 uppercase tracking-widest">Logo URL</label>
                    <input 
                      type="url" 
                      value={tool.logoUrl}
                      onChange={(e) => handleToolChange(category.id, tool.id, 'logoUrl', e.target.value)}
                      placeholder="e.g. https://.../python-logo.png" 
                      className="w-full bg-[#1e1f23] border border-white/5 rounded-md px-3 py-2 text-[0.8rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                  {category.tools.length > 1 && (
                    <button 
                      onClick={() => removeTool(category.id, tool.id)}
                      className="mt-4 sm:mt-5 text-white/20 hover:text-red-400 transition-colors shrink-0 p-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesForm;
