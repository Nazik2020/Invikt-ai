import React from "react";

const SettingsSidebar = ({ activeSection, onSectionClick }) => {
  const sections = [
    { id: "general", label: "General", icon: "settings" },
    { id: "features", label: "Feature Flags", icon: "flag" },
    { id: "email", label: "Email Configuration", icon: "mail" },
    { id: "limits", label: "Limits & Quotas", icon: "speed" },
    { id: "admins", label: "Admin Accounts", icon: "shield_person" },
    { id: "danger", label: "Danger Zone", icon: "warning", isDanger: true },
  ];

  return (
    <div className="w-full lg:w-56 shrink-0 sticky top-24">
      <nav className="flex flex-col gap-1">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => onSectionClick(sec.id)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all text-left ${
              activeSection === sec.id
                ? "bg-violet-600/10 text-violet-400"
                : sec.isDanger
                ? "text-red-400 hover:bg-red-500/10"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {sec.icon}
            </span>
            {sec.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SettingsSidebar;
