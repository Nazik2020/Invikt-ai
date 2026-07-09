import React from "react";
import { usePortfolio } from "../../../context/PortfolioContext";

const PersonalInfoForm = () => {
  const { portfolioData, updateSection } = usePortfolio();
  const { personalInfo } = portfolioData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateSection("personalInfo", {
      ...personalInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        updateSection("personalInfo", { ...personalInfo, avatarUrl: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#17181c] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <span className="material-symbols-outlined text-white/60">person</span>
        <h3 className="text-[1.1rem] font-bold text-white">Personal Info</h3>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar Upload */}
        <label className="w-32 h-32 rounded-full border border-dashed border-white/20 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/5 transition-colors shrink-0 relative overflow-hidden group">
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          
          {personalInfo.avatarUrl ? (
            <img src={personalInfo.avatarUrl} alt="Avatar Preview" className="w-full h-full object-cover rounded-full" />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-white/40 text-3xl group-hover:scale-110 transition-transform">add_a_photo</span>
              <span className="text-[0.6rem] font-bold text-white/40 uppercase tracking-widest">Upload</span>
            </>
          )}
        </label>

        <div className="flex-1 flex flex-col gap-4">
          <div className="space-y-1.5">
            <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={personalInfo.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe" 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-md px-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Professional Tagline</label>
            <input 
              type="text" 
              name="tagline"
              value={personalInfo.tagline}
              onChange={handleChange}
              placeholder="e.g. AI Architecture & UX Engineer" 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-md px-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-end gap-6">
        <div className="flex-1 w-full space-y-1.5">
          <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Location</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-white/40">location_on</span>
            <input 
              type="text" 
              name="location"
              value={personalInfo.location}
              onChange={handleChange}
              placeholder="City, Country" 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-md pl-11 pr-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 py-3">
          <button 
            onClick={() => handleChange({ target: { name: 'showEmail', value: !personalInfo.showEmail, type: 'checkbox', checked: !personalInfo.showEmail } })}
            className={`w-10 h-5 rounded-full relative transition-colors ${personalInfo.showEmail ? 'bg-violet-500' : 'bg-white/10'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${personalInfo.showEmail ? 'translate-x-5' : ''}`} />
          </button>
          <span className="text-xs font-semibold text-white/70">Show Email on Portfolio</span>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Short Bio</label>
          <span className="text-[0.6rem] font-bold text-white/30">0 / 300</span>
        </div>
        <textarea 
          name="bio"
          value={personalInfo.bio}
          onChange={handleChange}
          placeholder="Write a short summary about your professional journey..." 
          rows={4}
          className="w-full bg-[#1e1f23] border border-white/10 rounded-md px-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
