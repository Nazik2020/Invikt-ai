import React from 'react';

const DashboardHeader = () => {
    return (
        <header className="flex justify-between items-end mb-12">
            <div>
                <span className="text-primary font-label text-xs uppercase tracking-[0.1em] mb-2 block">System Online</span>
                <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Intelligence Canvas</h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-3 border border-outline-variant/10">
                    <span className="material-symbols-outlined text-secondary-fixed-dim" data-icon="calendar_today">calendar_today</span>
                    <span className="text-sm font-medium text-on-surface-variant">March 24, 2024</span>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
