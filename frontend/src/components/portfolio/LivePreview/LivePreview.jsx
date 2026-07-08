import React from "react";

const LivePreview = () => {
  return (
    <div className="bg-[#17181c] border border-white/5 rounded-[24px] p-6 sm:p-8 w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-between border-b border-white/5 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-emerald-400">smartphone</span>
          <h3 className="text-[1.1rem] font-bold text-white">Live Preview</h3>
        </div>
        <button className="text-[0.7rem] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">
          Full Preview
        </button>
      </div>

      {/* Phone Mockup Frame */}
      <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border-[8px] border-[#1e1f23] bg-black shadow-2xl flex flex-col items-center pt-8 px-6 overflow-hidden">
        {/* Dynamic Notch */}
        <div className="absolute top-0 w-32 h-6 bg-[#1e1f23] rounded-b-3xl" />

        {/* Mockup Content */}
        <div className="w-full flex flex-col items-center gap-6 animate-fade-in-up mt-6">
          {/* Avatar Skeleton */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
            <span className="text-white/40 text-xs font-black tracking-widest">NAZIK</span>
          </div>

          {/* Text Skeletons */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="h-4 w-3/4 bg-white/10 rounded-full" />
            <div className="h-3 w-1/2 bg-white/5 rounded-full" />
          </div>

          {/* Card Skeletons */}
          <div className="w-full flex flex-col gap-3 mt-4">
            <div className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl flex items-center px-4 gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10" />
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
              </div>
            </div>
            
            <div className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl flex items-center px-4 gap-3 opacity-70">
              <div className="w-8 h-8 rounded-full bg-white/10" />
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
