import React from 'react';

const CareerRoleCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Analyst Card */}
            <div className="group glass-card rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(98,0,238,0.15)] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-8xl" data-icon="analytics">analytics</span>
                </div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="p-3 bg-secondary/10 rounded-2xl">
                        <span className="material-symbols-outlined text-secondary text-3xl" data-icon="monitoring">monitoring</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-secondary-fixed/10 text-secondary-fixed-dim text-[10px] font-bold uppercase tracking-widest">
                        Medium Demand
                    </div>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2 relative z-10">Data Analyst</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 relative z-10">Interpret complex datasets to help organizations make informed business decisions through visualization.</p>
                <div className="space-y-4 mb-8 relative z-10">
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Expected Salary</div>
                        <div className="text-xl font-bold text-on-surface">$72k — $118k</div>
                    </div>
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Core Skills</div>
                        <div className="flex flex-wrap gap-2">
                            {['SQL', 'Tableau', 'Python'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-surface-container-highest rounded-lg text-xs font-medium border border-outline-variant/20">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex gap-4 relative z-10">
                    <button className="flex-1 py-3 px-4 rounded-xl border border-primary/30 text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                        <span className="material-symbols-outlined text-lg" data-icon="map">map</span>
                        Roadmap
                    </button>
                    <button className="p-3 rounded-xl bg-primary-container text-on-primary-container hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Machine Learning Engineer Card */}
            <div className="group glass-card rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(98,0,238,0.15)] flex flex-col relative overflow-hidden ring-1 ring-primary/20 bg-primary-container/5">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-8xl" data-icon="psychology">psychology</span>
                </div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="auto_awesome">auto_awesome</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                        High Demand
                    </div>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2 relative z-10">Machine Learning Engineer</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 relative z-10">Design and implement self-running AI programs to predictive models and solve complex challenges.</p>
                <div className="space-y-4 mb-8 relative z-10">
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Expected Salary</div>
                        <div className="text-xl font-bold text-on-surface">$145k — $210k</div>
                    </div>
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Core Skills</div>
                        <div className="flex flex-wrap gap-2">
                            {['PyTorch', 'NLP', 'Tensorflow'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-primary/10 rounded-lg text-xs font-medium border border-primary/20 text-primary">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex gap-4 relative z-10">
                    <button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined text-lg" data-icon="track_changes">track_changes</span>
                        Target Role
                    </button>
                    <button className="p-3 rounded-xl bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors">
                        <span className="material-symbols-outlined" data-icon="bookmark">bookmark</span>
                    </button>
                </div>
            </div>

            {/* Software Engineer Card */}
            <div className="group glass-card rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(98,0,238,0.15)] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-8xl" data-icon="terminal">terminal</span>
                </div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="p-3 bg-tertiary/10 rounded-2xl">
                        <span className="material-symbols-outlined text-tertiary text-3xl" data-icon="code">code</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                        High Demand
                    </div>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2 relative z-10">Software Engineer</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 relative z-10">Build robust, scalable systems and applications using modern web technologies and architecture.</p>
                <div className="space-y-4 mb-8 relative z-10">
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Expected Salary</div>
                        <div className="text-xl font-bold text-on-surface">$95k — $165k</div>
                    </div>
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Core Skills</div>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Node.js', 'Rust'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-surface-container-highest rounded-lg text-xs font-medium border border-outline-variant/20">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex gap-4 relative z-10">
                    <button className="flex-1 py-3 px-4 rounded-xl border border-primary/30 text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                        <span className="material-symbols-outlined text-lg" data-icon="map">map</span>
                        Roadmap
                    </button>
                    <button className="p-3 rounded-xl bg-primary-container text-on-primary-container hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareerRoleCards;
