import React from "react";

const companies = [
  { name: "Aetheric Tech", apps: 412, rate: "4.2%", icon: "business" },
  { name: "Nebula Systems", apps: 385, rate: "3.8%", icon: "hub" },
  { name: "Cloud Architect Co.", apps: 312, rate: "1.2%", icon: "cloud" },
  { name: "Synthetix Labs", apps: 298, rate: "5.1%", icon: "biotech" },
];

const TopCompaniesCard = () => {
  return (
    <div className="bg-[#1a1c23] border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
        <h3 className="text-sm font-bold text-white">Top Companies Applied To</h3>
        <button className="text-[10px] font-black text-white/40 hover:text-white uppercase tracking-widest transition-colors">
          VIEW ALL
        </button>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 px-6 py-3 border-b border-white/5 text-[9px] font-black uppercase tracking-widest text-white/30">
          <div>COMPANY</div>
          <div>TOTAL APPS</div>
          <div className="text-right">OFFER RATE</div>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {companies.map((comp, i) => (
            <div key={i} className="grid grid-cols-[2fr,1fr,1fr] gap-4 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-white/40">{comp.icon}</span>
                </div>
                <div className="text-[12px] font-bold text-white truncate">{comp.name}</div>
              </div>
              <div className="text-[12px] text-white/60">{comp.apps}</div>
              <div className="text-right text-[12px] font-bold text-[#00daf3]">{comp.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompaniesCard;
