import React from "react";

const StatusDonutCard = () => {
  return (
    <div className="bg-[#1a1c23] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
      <h3 className="text-sm font-bold text-white mb-8">Status Distribution</h3>

      <div className="flex-grow flex flex-col items-center justify-center relative min-h-[200px]">
        {/* CSS Donut Chart Mockup matching screenshot */}
        <div className="relative w-40 h-40 rounded-full flex items-center justify-center bg-[conic-gradient(var(--tw-gradient-stops))] from-[#00daf3] from-0% via-[#00daf3] via-50% via-[#c6a0ff] via-50.1% via-[#c6a0ff] via-70% via-violet-600 via-70.1% via-violet-600 via-85% via-white/10 via-85.1% to-white/10 to-100%] shadow-[0_0_30px_rgba(0,218,243,0.15)]">
          {/* Inner cutout */}
          <div className="absolute inset-0 m-3 rounded-full bg-[#1a1c23] flex flex-col items-center justify-center">
            <span className="text-2xl font-headline font-black text-white leading-none">100%</span>
            <span className="text-[9px] font-black tracking-widest uppercase text-white/40 mt-1">TOTAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3 mt-8">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-[#00daf3]"></span>
          <span className="text-[11px] font-bold text-white/70">Applied</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-[#c6a0ff]"></span>
          <span className="text-[11px] font-bold text-white/70">Assessment</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-violet-600"></span>
          <span className="text-[11px] font-bold text-white/70">Interview</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-white/10"></span>
          <span className="text-[11px] font-bold text-white/70">Others</span>
        </div>
      </div>
    </div>
  );
};

export default StatusDonutCard;
