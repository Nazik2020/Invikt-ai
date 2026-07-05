import React from "react";

const metrics = [
  { label: "TOTAL APPLICATIONS", value: "6,492", badge: "+12%", badgeColor: "text-[#00daf3] bg-[#00daf3]/10", valueColor: "text-[#00daf3]" },
  { label: "ACTIVE APPLICATIONS", value: "2,847", badge: "+5.2%", badgeColor: "text-white/60 bg-white/5", valueColor: "text-white" },
  { label: "OFFERS RECEIVED", value: "134", badge: "+18%", badgeColor: "text-violet-400 bg-violet-400/10", valueColor: "text-violet-400" },
  { label: "OFFER RATE", value: "2.1%", badge: "+0.4%", badgeColor: "text-white/60 bg-white/5", valueColor: "text-white" },
  { label: "AVG APPS / USER", value: "5.1", badge: "Stable", badgeColor: "text-white/60 bg-white/5", valueColor: "text-white" },
];

const AppMetricsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="bg-[#1a1c23] border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-white/10 transition-all duration-200"
        >
          <div className="text-[9px] font-black text-white/40 uppercase tracking-widest leading-tight">
            {metric.label}
          </div>
          <div className="flex items-end justify-between mt-4">
            <div className={`text-2xl font-headline font-black ${metric.valueColor}`}>
              {metric.value}
            </div>
            <div className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${metric.badgeColor}`}>
              {metric.badge}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppMetricsGrid;
