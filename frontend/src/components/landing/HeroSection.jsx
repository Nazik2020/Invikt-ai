import React from 'react';

const HeroSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center relative mt-16 overflow-hidden md:overflow-visible">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[#00daf3] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-xs uppercase tracking-widest font-bold text-white/70">Conquer Your Career</span>
            </div>
            
            <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight px-2 md:px-0">
                Your AI Career Intelligence Platform
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed px-4">
                Everything you need to land your dream job. Build roadmaps, analyze resumes, bridge skill gaps, and track applications in one unified workspace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4">
                <button className="w-full sm:w-auto group relative px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-br from-[#814df3] to-[#5d21df] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(93,33,223,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-2 overflow-hidden">
                    <span className="relative z-10">Start Tracking Free</span>
                    <span className="material-symbols-outlined relative z-10 text-[18px]">arrow_forward</span>
                </button>
                <button className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    Explore Roadmaps
                    <span className="material-symbols-outlined text-[18px]">route</span>
                </button>
            </div>

            {/* Hero Actual Interactive UI Mockup */}
            <div className="mt-16 md:mt-20 relative max-w-5xl mx-auto group w-full px-2 sm:px-4">
                
                {/* Realistic Dashboard HTML Frame */}
                <div className="rounded-xl overflow-hidden shadow-[0_0_80px_rgba(129,77,243,0.2)] border border-white/10 bg-[#0c0d11] h-auto md:h-[500px] flex flex-col relative w-full items-stretch scale-105 group-hover:scale-100 transition-all duration-700">
                    {/* Mock Header */}
                    <div className="h-12 border-b border-white/5 flex items-center px-4 relative bg-[#17181c]">
                        {/* macOS Window Controls */}
                        <div className="flex gap-2 relative z-10 pl-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                        </div>
                        
                        {/* Centered URL Bar */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-5 w-48 bg-white/5 rounded-md hidden md:block border border-white/5"></div>
                        
                        {/* Right side icons */}
                        <div className="ml-auto hidden md:flex gap-3 relative z-10 pr-2">
                            <div className="h-4 w-4 bg-white/5 rounded-sm"></div>
                            <div className="h-4 w-4 bg-white/5 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Mock Content Base */}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 w-full relative">
                        {/* Top Metrics Row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                            <div className="bg-[#1c1d22] p-5 rounded-xl border border-white/5 text-left relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-violet-500/10 rounded-bl-full"></div>
                                <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Active Applications</div>
                                <div className="text-3xl font-headline font-black text-white">24</div>
                                <div className="text-xs text-emerald-400 font-bold mt-2">↑ +3 This Week</div>
                            </div>
                            
                            <div className="bg-[#1c1d22] p-5 rounded-xl border border-[#00daf3]/30 bg-[#00daf3]/5 text-left border-t-[#00daf3] border-t-2 relative">
                                <div className="text-[10px] text-[#00daf3]/60 uppercase font-bold tracking-widest mb-1">Interviews Scheduled</div>
                                <div className="text-3xl font-headline font-black text-white">4</div>
                                <div className="text-xs text-white/60 font-medium mt-2">Next: Google @ 10 AM</div>
                            </div>
                            
                            <div className="hidden md:block bg-[#1c1d22] p-5 rounded-xl border border-white/5 text-left relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-fuchsia-500/10 rounded-bl-full"></div>
                                <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Offers Received</div>
                                <div className="text-3xl font-headline font-black text-white">1</div>
                                <div className="text-xs text-fuchsia-400 font-medium mt-2">Nvidia - Senior Dev</div>
                            </div>
                        </div>

                        {/* Middle Split Row */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                            {/* Pipeline block */}
                            <div className="bg-[#1c1d22] rounded-xl border border-white/5 p-6 flex flex-col text-left">
                                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Application Pipeline</div>
                                <div className="space-y-3 mt-2">
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                        <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[14px] text-violet-400">work</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-white">Stripe</div>
                                            <div className="text-[10px] text-white/40">Senior AI Engineer</div>
                                        </div>
                                        <div className="px-2 py-1 bg-violet-500/10 text-violet-400 text-[9px] font-bold rounded uppercase tracking-wider hidden sm:block">In Progress</div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[14px] text-cyan-400">code</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-white">OpenAI</div>
                                            <div className="text-[10px] text-white/40">Take Home Assignment</div>
                                        </div>
                                        <div className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[9px] font-bold rounded uppercase tracking-wider hidden sm:block">Pending</div>
                                    </div>
                                </div>
                            </div>

                            {/* Roadmap / Skill Tracker */}
                            <div className="hidden md:flex bg-[#1c1d22] rounded-xl border border-white/5 p-6 flex-col justify-center gap-5 text-left">
                                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">route</span> 
                                    Career Roadmap
                                </div>
                                
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs"><span className="text-white font-medium">Frontend Master</span><span className="text-violet-400 font-bold">100%</span></div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#ab8ff4] to-[#814df3] w-full"></div>
                                    </div>
                                </div>
                                
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs"><span className="text-white font-medium">System Architecture</span><span className="text-[#00daf3] font-bold">75%</span></div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#814df3] to-[#00daf3] w-[75%]"></div>
                                    </div>
                                </div>
                                
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs"><span className="text-white font-medium">Cloud Infrastructure</span><span className="text-fuchsia-400 font-bold">40%</span></div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#814df3] to-fuchsia-400 w-[40%]"></div>
                                    </div>
                                </div>
                                
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs"><span className="text-white font-medium">Database Design</span><span className="text-white/40 font-bold">20%</span></div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-white/20 w-[20%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Glass Card */}
                <div className="absolute -bottom-10 -right-4 md:-right-10 hidden md:block bg-[#1c1d22]/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 w-72 scale-[0.8] md:scale-100 origin-bottom-right">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Milestone Unlocked</div>
                            <div className="text-base font-bold text-emerald-400">Frontend Master</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-full"></div>
                        </div>
                        <div className="text-[10px] text-white/50 text-right font-medium">100% Roadmap Completion</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
