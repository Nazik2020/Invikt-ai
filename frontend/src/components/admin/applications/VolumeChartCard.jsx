import React from "react";

const VolumeChartCard = () => {
  // Mock data for the bar chart
  const data = [
    { height: "h-[30%]", active: false },
    { height: "h-[45%]", active: false },
    { height: "h-[35%]", active: false },
    { height: "h-[60%]", active: false },
    { height: "h-[75%]", active: false },
    { height: "h-[55%]", active: false },
    { height: "h-[70%]", active: false },
    { height: "h-[85%]", active: false },
    { height: "h-[100%]", active: true },
    { height: "h-[65%]", active: false },
    { height: "h-[50%]", active: false },
    { height: "h-[60%]", active: false },
  ];

  return (
    <div className="bg-[#1a1c23] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-sm font-bold text-white">Application Volume Over Time</h3>
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2 py-1 text-[9px] font-bold text-white/50 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c6a0ff]"></span>
          NEW APPS
        </div>
      </div>

      <div className="flex-grow flex items-end justify-between gap-2 min-h-[200px] relative">
        {data.map((bar, i) => (
          <div key={i} className="flex flex-col items-center flex-1 h-full justify-end group">
            <div
              className={`w-full max-w-[24px] rounded-t-lg transition-all duration-300 ${bar.height} ${
                bar.active
                  ? "bg-[#c6a0ff] shadow-[0_0_20px_rgba(198,160,255,0.4)]"
                  : "bg-white/10 group-hover:bg-white/20"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 text-[9px] font-black text-white/30 uppercase tracking-widest px-1">
        <span>WK 01</span>
        <span>WK 03</span>
        <span>WK 06</span>
        <span className="text-[#c6a0ff]">WK 09</span>
        <span>WK 12</span>
      </div>
    </div>
  );
};

export default VolumeChartCard;
