import React from 'react';

const DashboardMetricCards = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Resume Score */}
            <div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all duration-300 relative group overflow-hidden border border-outline-variant/10">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[8rem]" data-icon="verified">verified</span>
                </div>
                <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-4">Resume Score</p>
                <div className="flex items-end gap-2">
                    <span className="text-5xl font-headline font-black text-primary">85</span>
                    <span className="text-on-surface-variant text-sm mb-2">/ 100</span>
                </div>
                <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: '85%' }}></div>
                </div>
            </div>

            {/* Skills Extracted */}
            <div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all duration-300 relative group overflow-hidden border border-outline-variant/10">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[8rem]" data-icon="psychology">psychology</span>
                </div>
                <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-4">Skills Extracted</p>
                <div className="flex items-end gap-2">
                    <span className="text-5xl font-headline font-black text-secondary-fixed-dim">12</span>
                    <span className="text-on-surface-variant text-sm mb-2">verified</span>
                </div>
                <div className="mt-4 flex gap-1">
                    <div className="h-1 flex-1 bg-secondary-fixed-dim rounded-full"></div>
                    <div className="h-1 flex-1 bg-secondary-fixed-dim rounded-full"></div>
                    <div className="h-1 flex-1 bg-secondary-fixed-dim/20 rounded-full"></div>
                </div>
            </div>

            {/* Career Matches */}
            <div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all duration-300 relative group overflow-hidden border border-outline-variant/10">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[8rem]" data-icon="rocket_launch">rocket_launch</span>
                </div>
                <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-4">Career Matches</p>
                <div className="flex items-end gap-2">
                    <span className="text-5xl font-headline font-black text-tertiary">05</span>
                    <span className="text-on-surface-variant text-sm mb-2">high fit</span>
                </div>
                <p className="text-[0.7rem] text-tertiary-fixed-dim mt-4 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[1rem]" data-icon="trending_up">trending_up</span>
                    +2 from last week
                </p>
            </div>

            {/* Readiness Score */}
            <div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all duration-300 relative group overflow-hidden border border-outline-variant/10">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[8rem]" data-icon="bolt">bolt</span>
                </div>
                <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-4">Readiness Score</p>
                <div className="flex items-end gap-2">
                    <span className="text-5xl font-headline font-black text-on-surface">78</span>
                    <span className="text-on-surface-variant text-sm mb-2">%</span>
                </div>
                <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-on-surface" style={{ width: '78%' }}></div>
                </div>
            </div>
        </section>
    );
};

export default DashboardMetricCards;
