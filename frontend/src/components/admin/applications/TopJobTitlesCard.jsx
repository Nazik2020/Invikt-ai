import React from "react";

const jobTitles = [
  { title: "Senior Product Architect", apps: "1,104", stage: "APPLIED", badgeClass: "text-[#00daf3] bg-[#00daf3]/10" },
  { title: "Infrastructure Lead", apps: "942", stage: "ASSESSMENT", badgeClass: "text-[#c6a0ff] bg-[#c6a0ff]/10" },
  { title: "AI Research Engineer", apps: "856", stage: "INTERVIEW", badgeClass: "text-violet-400 bg-violet-500/20" },
  { title: "Frontend Lead", apps: "720", stage: "APPLIED", badgeClass: "text-[#00daf3] bg-[#00daf3]/10" },
];

const TopJobTitlesCard = () => {
  return (
    <div className="bg-[#1a1c23] border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
        <h3 className="text-sm font-bold text-white">Most Common Job Titles</h3>
        <button className="text-[10px] font-black text-white/40 hover:text-white uppercase tracking-widest transition-colors">
          VIEW ALL
        </button>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 px-6 py-3 border-b border-white/5 text-[9px] font-black uppercase tracking-widest text-white/30">
          <div>JOB TITLE</div>
          <div>TOTAL APPS</div>
          <div className="text-right">COMMON STAGE</div>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {jobTitles.map((job, i) => (
            <div key={i} className="grid grid-cols-[2fr,1fr,1fr] gap-4 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors">
              <div className="text-[12px] font-bold text-white truncate pr-2">{job.title}</div>
              <div className="text-[12px] text-white/60">{job.apps}</div>
              <div className="text-right flex justify-end">
                <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest whitespace-nowrap ${job.badgeClass}`}>
                  {job.stage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopJobTitlesCard;
