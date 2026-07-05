import React from "react";

const DangerZone = () => {
  return (
    <section id="danger" className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-2xl font-headline font-bold text-red-400 tracking-tight">
          Danger Zone
        </h2>
        <p className="text-[12px] text-white/40 mt-1">Irreversible actions that affect global platform state.</p>
      </div>

      <div className="bg-[#1a1c23] border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/[0.04]">
        
        {/* Clear All Cache */}
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-[13px] font-bold text-white">Clear All Cache</h4>
            <p className="text-[11px] text-white/40 mt-1">
              Invalidates all server-side and CDN caches globally. This will slow down initial requests.
            </p>
          </div>
          <button className="px-5 py-2 rounded-xl border border-red-500/30 hover:border-red-400 hover:bg-red-500/10 text-red-400 text-[12px] font-bold transition-all shrink-0">
            Purge Cache
          </button>
        </div>

        {/* Reset Platform Analytics */}
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-[13px] font-bold text-white">Reset Platform Analytics</h4>
            <p className="text-[11px] text-white/40 mt-1">
              Wipe all non-user activity logs and dashboard analytics from the database. Cannot be undone.
            </p>
          </div>
          <button className="px-5 py-2 rounded-xl border border-red-500/30 hover:border-red-400 hover:bg-red-500/10 text-red-400 text-[12px] font-bold transition-all shrink-0">
            Reset Metrics
          </button>
        </div>

        {/* Delete All Test Users */}
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-[13px] font-bold text-white">Delete All Test Users</h4>
            <p className="text-[11px] text-white/40 mt-1">
              Permanently remove users tagged with '@test.com' or '@example.com' emails.
            </p>
          </div>
          <button className="px-5 py-2 rounded-xl border border-red-500/30 hover:border-red-400 hover:bg-red-500/10 text-red-400 text-[12px] font-bold transition-all shrink-0">
            Wipe Test Users
          </button>
        </div>

      </div>
    </section>
  );
};

export default DangerZone;
