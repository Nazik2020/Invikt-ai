import React, { useState } from "react";

const DocumentUploader = () => {
  const [isJDToggleOn, setIsJDToggleOn] = useState(false);
  const [jdText, setJdText] = useState("");

  return (
    <section className="col-span-12 lg:col-span-8 group flex flex-col gap-4">
      <div className="flex-none relative overflow-hidden rounded-xl bg-white dark:bg-surface-container-low border border-outline-variant/15 p-1 transition-all duration-500 hover:border-primary/30">
        <div className="glass-panel dark:border-white/10 border-slate-200 bg-white/60 dark:bg-transparent rounded-lg border-2 border-dashed border-slate-200 dark:border-outline-variant/20 flex flex-col items-center justify-center p-6 transition-all group-hover:bg-surface-container">
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150"></div>
            <span className="material-symbols-outlined text-4xl text-primary relative">
              upload_file
            </span>
          </div>
          <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-on-surface mb-1">
            Sync Your Journey
          </h3>
          <p className="text-slate-600 dark:text-on-surface-variant text-center mb-6 max-w-xs text-[13px]">
            Drag and drop your resume here, or click to browse files. Supported:
            PDF, DOCX.
          </p>
          <button className="px-6 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-outline-variant/20 rounded-full font-label text-xs uppercase tracking-widest text-slate-900 dark:text-on-surface transition-all">
            Select Document
          </button>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-surface-container-high rounded-xl p-6 border border-slate-200 dark:border-outline-variant/15">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsJDToggleOn(!isJDToggleOn)}>
          <div>
            <h4 className="font-headline font-bold text-slate-900 dark:text-white">Compare with Job Description</h4>
            <p className="text-xs text-slate-600 dark:text-on-surface-variant mt-1">
              Enable this to get an ATS match score against a specific role's requirements.
            </p>
          </div>
          <button 
            className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${
              isJDToggleOn ? "bg-secondary-fixed-dim" : "bg-slate-300 dark:bg-white/10"
            }`}
          >
            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${
              isJDToggleOn ? "left-[calc(100%-20px)]" : "left-1"
            }`}></span>
          </button>
        </div>

        {isJDToggleOn && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-outline-variant/20 animate-fade-in">
            <label className="block font-label text-[10px] uppercase tracking-widest text-slate-600 dark:text-on-surface-variant mb-2">
              Paste Job Description
            </label>
            <textarea
              rows={3}
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              placeholder="Paste the job requirements, responsibilities, and key skills here..."
              className="w-full bg-white dark:bg-surface-container border border-slate-200 dark:border-outline-variant/20 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all resize-none"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DocumentUploader;
