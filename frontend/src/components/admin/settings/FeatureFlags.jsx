import React from "react";

const FLAGS = [
  { id: "roadmaps", label: "Career Roadmaps", icon: "route", active: true },
  { id: "tracker", label: "Job Application Tracker", icon: "work_history", active: true },
  { id: "registration", label: "User Registration", icon: "person_add", active: true },
  { id: "google", label: "Google OAuth", icon: "login", active: true },
  { id: "github", label: "GitHub OAuth", icon: "code", active: true },
  { id: "pro", label: "Pro Subscriptions", icon: "workspace_premium", active: false, soon: true },
  { id: "resume", label: "Resume Analyzer", icon: "document_scanner", active: false, soon: true },
  { id: "mentor", label: "Mentor Marketplace", icon: "groups", active: false, soon: true },
];

const FeatureFlags = () => {
  return (
    <section id="features" className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-2xl font-headline font-bold text-white tracking-tight">
          Feature Flags
        </h2>
        <p className="text-[12px] text-white/40 mt-1">Toggle platform features on and off globally.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FLAGS.map((flag) => (
          <div
            key={flag.id}
            className="bg-[#1a1c23] border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className={`material-symbols-outlined text-[20px] ${flag.soon ? 'text-white/20' : 'text-[#00daf3]'}`}>
                {flag.icon}
              </span>
              <div>
                <div className="text-[13px] font-bold text-white truncate">
                  {flag.label}
                </div>
                {flag.soon && (
                  <div className="text-[8px] font-black text-violet-400 uppercase tracking-widest mt-0.5">
                    SOON
                  </div>
                )}
              </div>
            </div>

            <button
              disabled={flag.soon}
              className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${
                flag.active ? "bg-[#00daf3]" : "bg-white/10"
              } ${flag.soon ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${
                  flag.active ? "left-[calc(100%-20px)]" : "left-1"
                }`}
              ></span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureFlags;
