import React from "react";
import { usePortfolio } from "../../../context/PortfolioContext";

const SocialLinksForm = () => {
  const { portfolioData, updateSection } = usePortfolio();
  const { socialLinks } = portfolioData;

  const handleChange = (e) => {
    updateSection("socialLinks", {
      ...socialLinks,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#17181c] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <span className="material-symbols-outlined text-white/60">share</span>
        <h3 className="text-[1.1rem] font-bold text-white">Social Links</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* GitHub */}
        <div className="space-y-1.5">
          <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">GitHub</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-white/40">code</span>
            <input 
              type="url" 
              name="github"
              value={socialLinks.github}
              onChange={handleChange}
              placeholder="https://github.com/..." 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-md pl-11 pr-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>

        {/* LinkedIn */}
        <div className="space-y-1.5">
          <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">LinkedIn</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-white/40">work</span>
            <input 
              type="url" 
              name="linkedin"
              value={socialLinks.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/..." 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-md pl-11 pr-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Twitter / X */}
        <div className="space-y-1.5">
          <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">X (Twitter)</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-white/40">tag</span>
            <input 
              type="url" 
              name="twitter"
              value={socialLinks.twitter}
              onChange={handleChange}
              placeholder="https://x.com/..." 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-md pl-11 pr-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Personal Website */}
        <div className="space-y-1.5">
          <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Personal Website</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-white/40">language</span>
            <input 
              type="url" 
              name="website"
              value={socialLinks.website}
              onChange={handleChange}
              placeholder="https://..." 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-md pl-11 pr-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinksForm;
