import React from 'react';

const SkillEvolutionChart = () => {
    return (
        <section className="col-span-12 lg:col-span-8 bg-surface-container-low p-8 rounded-xl relative overflow-hidden border border-outline-variant/10">
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface">Skill Evolution</h3>
                    <p className="text-on-surface-variant text-sm">Monthly progression across core domains</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-[0.7rem] rounded-full bg-surface-container-highest text-on-surface hover:bg-primary/20 transition-all">Daily</button>
                    <button className="px-3 py-1 text-[0.7rem] rounded-full bg-primary-container text-white">Monthly</button>
                </div>
            </div>

            {/* Mock Chart */}
            <div className="h-[300px] flex items-end gap-4 w-full relative">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none">
                    <div className="w-full h-px bg-on-surface"></div>
                    <div className="w-full h-px bg-on-surface"></div>
                    <div className="w-full h-px bg-on-surface"></div>
                    <div className="w-full h-px bg-on-surface"></div>
                </div>

                <div className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-lg h-[40%] group relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-[0.6rem] text-primary opacity-0 group-hover:opacity-100 transition-opacity">Nov</div>
                </div>
                <div className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-lg h-[55%] group relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-[0.6rem] text-primary opacity-0 group-hover:opacity-100 transition-opacity">Dec</div>
                </div>
                <div className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-lg h-[45%] group relative"></div>
                <div className="flex-1 bg-gradient-to-t from-secondary/10 to-secondary/40 rounded-t-lg h-[70%] group relative"></div>
                <div className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-lg h-[65%] group relative"></div>
                <div className="flex-1 bg-gradient-to-t from-primary/20 to-primary-container/80 rounded-t-lg h-[85%] group relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-[0.6rem] text-primary-fixed-dim opacity-100 font-bold">Mar (Peak)</div>
                </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 md:gap-12 border-t border-outline-variant/10 pt-8">
                <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-1">Top Skill</p>
                    <p className="text-lg font-headline font-bold text-on-surface">Data Architecture</p>
                </div>
                <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-1">Growth</p>
                    <p className="text-lg font-headline font-bold text-secondary-fixed-dim">+14.2%</p>
                </div>
                <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-1">Active Time</p>
                    <p className="text-lg font-headline font-bold text-on-surface">124 hrs</p>
                </div>
            </div>
        </section>
    );
};

export default SkillEvolutionChart;
