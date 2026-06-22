import React from "react";

const ProfileSettings = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          Profile
        </h1>
        <p className="text-[15px] text-slate-600 dark:text-white/60">
          Manage your personal information and career identity.
        </p>
      </div>

      {/* Avatar Section */}
      <div className="bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ab8ff4] to-[#5d21df] flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(171,143,244,0.3)]">
          <span className="text-4xl font-black text-slate-900 dark:text-white">
            N
          </span>
        </div>
        <div className="flex flex-col items-center sm:items-start justify-center flex-1 h-full pt-2">
          <div className="flex items-center gap-3 mb-3">
            <button className="px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:bg-white/5 transition-all text-xs font-bold text-slate-900 dark:text-white tracking-widest uppercase">
              Change Photo
            </button>
            <button className="px-4 py-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors uppercase tracking-widest">
              Remove
            </button>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-white/40">
            JPG or PNG. Max 2MB. Recommended 400x400px.
          </p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-12">
        <div className="text-[11px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest mb-6">
          Personal Information
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-white/80 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Nazik P."
              className="w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-white/80 mb-2">
              Username
            </label>
            <div className="relative flex items-center w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg overflow-hidden focus-within:border-[#ab8ff4]/50 transition-colors">
              <input
                type="text"
                defaultValue="nazik"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none min-w-0"
              />
              <div className="hidden sm:flex px-4 text-[11px] text-slate-400 dark:text-white/30 border-l border-slate-200 dark:border-white/5 h-full items-center bg-white/[0.02] pointer-events-none shrink-0">
                invikt.com/u/nazik
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-white/80 mb-2">
              Email Address
            </label>
            <div className="relative w-full">
              <input
                type="email"
                defaultValue="nazik.pro@invikt.ai"
                className="w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-50 dark:bg-[#00daf3]/10 text-slate-900 dark:text-[#00daf3] rounded-full px-2.5 py-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">
                  verified
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  Verified
                </span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-white/80 mb-2">
              Phone Number{" "}
              <span className="text-slate-400 dark:text-white/30 font-normal">
                (Optional)
              </span>
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors placeholder:text-slate-400 dark:text-white/20"
            />
          </div>
        </div>
      </div>

      {/* Career Identity */}
      <div className="mb-10">
        <div className="text-[11px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest mb-6">
          Career Identity
        </div>

        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-700 dark:text-white/80 mb-2">
            Current Career Goal
          </label>
          <input
            type="text"
            defaultValue="Senior AI Systems Architect"
            className="w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-white/80 mb-2">
              University or Organization
            </label>
            <input
              type="text"
              defaultValue="Nexus Tech Institute"
              className="w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-white/80 mb-2">
              Country/Region
            </label>
            <div className="relative">
              <select className="w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors appearance-none cursor-pointer">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>India</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-white/80">
              Professional Bio
            </label>
            <span className="text-[10px] text-slate-500 dark:text-white/40 font-medium tracking-widest">
              0 / 200
            </span>
          </div>
          <textarea
            rows="4"
            placeholder="Describe your professional journey and aspirations..."
            className="w-full bg-white dark:bg-[#17181c] border border-slate-200 dark:border-white/5 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors resize-none placeholder:text-slate-400 dark:text-white/20"
          ></textarea>
        </div>
      </div>

      {/* Save Button */}
      <div className="mb-12">
        <button className="w-full bg-gradient-to-r from-[#ab8ff4] to-[#814df3] hover:from-[#bda5f7] hover:to-[#9165f5] text-slate-900 dark:text-white font-bold py-3.5 rounded-xl shadow-[0_10px_20px_rgba(129,77,243,0.2)] transition-all uppercase tracking-widest text-xs">
          Save Changes
        </button>
        <div className="text-[9px] text-slate-400 dark:text-white/30 uppercase tracking-[0.2em] text-center mt-3 font-bold">
          Last Saved 2 Hours Ago
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border border-red-500/20 bg-red-500/[0.02] rounded-2xl p-6 relative">
        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-red-500/50 text-[18px]">
            close
          </span>
        </div>

        <h3 className="text-red-400 font-bold text-lg mb-1">Danger Zone</h3>
        <p className="text-sm text-slate-500 dark:text-white/50 mb-6">
          Be careful, these actions are permanent and cannot be undone.
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-slate-200 dark:border-white/5">
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white/90 mb-1">
              Deactivate Account
            </div>
            <div className="text-[12px] text-slate-500 dark:text-white/40">
              Temporarily hide your profile and data. You can reactivate at any
              time.
            </div>
          </div>
          <button className="px-6 py-2 rounded-lg border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:border-white/20 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest transition-colors shrink-0">
            Deactivate
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white/90 mb-1">
              Delete Account
            </div>
            <div className="text-[12px] text-slate-500 dark:text-white/40">
              Permanently remove all your career data, roadmaps, and history
              from Invikt.
            </div>
          </div>
          <button className="px-6 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest transition-colors shrink-0">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
