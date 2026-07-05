import React from "react";

const PrivacyBanner = () => {
  return (
    <div className="w-full bg-violet-600/5 border border-violet-500/20 rounded-2xl px-5 py-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-violet-400 text-[20px]">
          verified_user
        </span>
      </div>
      <div>
        <h3 className="text-white font-bold text-[13px] leading-snug">
          Privacy Notice
        </h3>
        <p className="text-[10px] font-black text-white/40 tracking-widest uppercase mt-0.5">
          INDIVIDUAL USER APPLICATION DATA IS PRIVATE. THIS PAGE SHOWS ANONYMIZED, AGGREGATED STATISTICS ONLY.
        </p>
      </div>
    </div>
  );
};

export default PrivacyBanner;
