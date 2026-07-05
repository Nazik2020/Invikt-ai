import React from "react";

const LimitsQuotas = () => {
  return (
    <section id="limits" className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-2xl font-headline font-bold text-white tracking-tight">
          Limits & Quotas
        </h2>
        <p className="text-[12px] text-white/40 mt-1">System-wide resource constraints.</p>
      </div>

      <div className="bg-[#1a1c23] border border-white/5 rounded-2xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              FREE TIER MAX APPS
            </label>
            <input
              type="number"
              defaultValue="25"
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              API RATE LIMIT (REQ/S)
            </label>
            <input
              type="number"
              defaultValue="100"
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              AUTH RATE LIMIT (REQ/M)
            </label>
            <input
              type="number"
              defaultValue="20"
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              MAX FILE SIZE (MB)
            </label>
            <input
              type="number"
              defaultValue="5"
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              MAX ACTIVE SESSIONS
            </label>
            <input
              type="number"
              defaultValue="5"
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              LOCKOUT ATTEMPTS
            </label>
            <input
              type="number"
              defaultValue="5"
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              LOCKOUT DURATION (MIN)
            </label>
            <input
              type="number"
              defaultValue="15"
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:border-violet-500/50 transition-all"
            />
          </div>
        </div>

        <div>
          <button className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[12px] font-bold transition-all">
            Save Limits
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitsQuotas;
