import React from "react";

const DocumentUploader = () => {
  return (
    <section className="col-span-12 lg:col-span-8 group">
      <div className="h-full relative overflow-hidden rounded-xl bg-white dark:bg-surface-container-low border border-outline-variant/15 p-1 transition-all duration-500 hover:border-primary/30">
        <div className="glass-panel dark:border-white/10 border-slate-200 bg-white/60 dark:bg-transparent h-full rounded-lg border-2 border-dashed border-slate-200 dark:border-outline-variant/20 flex flex-col items-center justify-center p-12 transition-all group-hover:bg-surface-container">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150"></div>
            <span className="material-symbols-outlined text-6xl text-primary relative">
              upload_file
            </span>
          </div>
          <h3 className="font-headline text-2xl font-bold text-slate-900 dark:text-on-surface mb-2">
            Sync Your Journey
          </h3>
          <p className="text-slate-600 dark:text-on-surface-variant text-center mb-8 max-w-xs text-sm">
            Drag and drop your resume here, or click to browse files. Supported:
            PDF, DOCX.
          </p>
          <button className="px-8 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-outline-variant/20 rounded-full font-label text-sm uppercase tracking-widest text-slate-900 dark:text-on-surface transition-all">
            Select Document
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentUploader;
