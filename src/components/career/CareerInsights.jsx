import React from 'react';

const CareerInsights = () => {
    return (
        <section className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <div className="glass-card rounded-[2rem] p-10 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <h4 className="font-headline text-2xl font-bold mb-6">Trending Skills Spectrum</h4>
                        
                        <div className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                    <span>Cloud Architecture</span>
                                    <span className="text-primary">+24% This Month</span>
                                </div>
                                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-gradient-to-r from-primary to-primary-container"></div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                    <span>Neural Networks</span>
                                    <span className="text-secondary">+18% This Month</span>
                                </div>
                                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full w-[72%] bg-gradient-to-r from-secondary to-secondary-container"></div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                    <span>Distributed Systems</span>
                                    <span className="text-on-surface-variant">+12% This Month</span>
                                </div>
                                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full w-[60%] bg-on-surface-variant/30"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 relative z-10">
                            <span className="material-symbols-outlined text-primary text-3xl" data-icon="info">info</span>
                            <p className="text-sm text-on-surface-variant">Your current skill set has 65% overlap with the <strong>Machine Learning Engineer</strong> requirements. We recommend focusing on linear algebra and advanced calculus next.</p>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative z-10">
                    <h2 className="font-headline text-3xl font-extrabold mb-6">
                        Unlock Your Full <br/><span className="text-primary">Earning Potential</span>
                    </h2>
                    <p className="text-on-surface-variant mb-8 text-lg">
                        Our AI model continuously monitors global salary databases and job boards to ensure you have the most accurate picture of where the market is headed.
                    </p>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                            </div>
                            <span className="text-on-surface font-medium">Real-time localized salary insights</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                            </div>
                            <span className="text-on-surface font-medium">Gap analysis for target roles</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
                            </div>
                            <span className="text-on-surface font-medium">Direct mentorship connection paths</span>
                        </li>
                    </ul>
                    
                    <button className="mt-10 group flex items-center gap-3 px-8 py-4 bg-surface-container-high rounded-full font-bold hover:bg-surface-bright transition-all">
                        Compare All Roles
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="trending_up">trending_up</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CareerInsights;
