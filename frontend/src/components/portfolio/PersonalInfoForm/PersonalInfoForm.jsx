import React, { useState } from "react";

const PersonalInfoForm = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="bg-[#17181c] border border-white/5 rounded-[24px] p-6 sm:p-8 flex flex-col gap-8">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <span className="material-symbols-outlined text-white/60">person</span>
        <h3 className="text-[1.1rem] font-bold text-white">Personal Info</h3>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar Upload */}
        <div className="w-32 h-32 rounded-full border border-dashed border-white/20 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/5 transition-colors shrink-0 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="material-symbols-outlined text-white/40 text-3xl group-hover:scale-110 transition-transform">add_a_photo</span>
          <span className="text-[0.6rem] font-bold text-white/40 uppercase tracking-widest">Upload</span>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="space-y-1.5">
            <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. John Doe" 
              defaultValue="Nazik"
              className="w-full bg-[#1e1f23] border border-white/10 rounded-lg px-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[0.65rem] font-black text-white/40 uppercase tracking-widest">Professional Tagline</label>
            <input 
              type="text" 
              placeholder="e.g. AI Architecture & UX Engineer" 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-lg px-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
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
              placeholder="City, Country" 
              className="w-full bg-[#1e1f23] border border-white/10 rounded-lg pl-11 pr-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 py-3">
          <button 
            onClick={() => setShowEmail(!showEmail)}
            className={`w-10 h-5 rounded-full relative transition-colors ${showEmail ? 'bg-violet-500' : 'bg-white/10'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${showEmail ? 'translate-x-5' : ''}`} />
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
          placeholder="Write a short summary about your professional journey..." 
          rows={4}
          className="w-full bg-[#1e1f23] border border-white/10 rounded-lg px-4 py-3 text-[0.85rem] text-white focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
