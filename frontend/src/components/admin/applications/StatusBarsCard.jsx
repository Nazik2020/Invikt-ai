import React from "react";

const statuses = [
  { label: "WISHLIST", count: "1,240", width: "w-[40%]", color: "bg-white/10" },
  { label: "APPLIED", count: "2,847", width: "w-[90%]", color: "bg-[#00daf3]" },
  { label: "ASSESSMENT", count: "842", width: "w-[30%]", color: "bg-[#c6a0ff]" },
  { label: "INTERVIEW", count: "432", width: "w-[15%]", color: "bg-violet-600" },
  { label: "OFFER", count: "134", width: "w-[8%]", color: "bg-emerald-400" },
];

const StatusBarsCard = () => {
  return (
    <div className="bg-[#1a1c23] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-white">Applications by Status</h3>
        <span className="material-symbols-outlined text-[16px] text-white/30">info</span>
      </div>

      <div className="space-y-5 flex-grow justify-center flex flex-col">
        {statuses.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">
              <span>{item.label}</span>
              <span className="text-white">{item.count}</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full ${item.color} ${item.width} rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusBarsCard;
