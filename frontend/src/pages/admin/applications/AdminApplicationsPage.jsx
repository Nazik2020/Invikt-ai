import React from "react";
import PrivacyBanner from "../../../components/admin/applications/PrivacyBanner";
import AppMetricsGrid from "../../../components/admin/applications/AppMetricsGrid";
import StatusBarsCard from "../../../components/admin/applications/StatusBarsCard";
import StatusDonutCard from "../../../components/admin/applications/StatusDonutCard";
import VolumeChartCard from "../../../components/admin/applications/VolumeChartCard";
import TopCompaniesCard from "../../../components/admin/applications/TopCompaniesCard";
import TopJobTitlesCard from "../../../components/admin/applications/TopJobTitlesCard";

const AdminApplicationsPage = () => {
  return (
    <div className="space-y-6 min-h-full bg-[#0f1117] dark:bg-[#0f1117] -m-6 md:-m-8 p-6 md:p-8">
      
      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tight">
            Application Data
          </h1>
          <p className="text-[13px] text-white/40 mt-1">
            Platform-wide job application insights and statistics.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 text-white/70 hover:text-white text-[12px] font-semibold transition-all">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>LAST 30 DAYS</span>
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c6a0ff] hover:bg-[#b084f7] text-[#3b1d70] text-[12px] font-bold shadow-[0_4px_15px_rgba(198,160,255,0.25)] transition-all">
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span className="hidden sm:block">Export Data</span>
          </button>
        </div>
      </div>

      {/* ── Privacy Banner ── */}
      <PrivacyBanner />

      {/* ── Key Metrics Grid ── */}
      <AppMetricsGrid />

      {/* ── Main Dashboard Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Row 1 */}
        <div className="lg:col-span-8">
          <StatusBarsCard />
        </div>
        <div className="lg:col-span-4">
          <StatusDonutCard />
        </div>

        {/* Row 2 (Full width) */}
        <div className="lg:col-span-12">
          <VolumeChartCard />
        </div>

        {/* Row 3 */}
        <div className="lg:col-span-6">
          <TopCompaniesCard />
        </div>
        <div className="lg:col-span-6">
          <TopJobTitlesCard />
        </div>

      </div>
      
    </div>
  );
};

export default AdminApplicationsPage;
