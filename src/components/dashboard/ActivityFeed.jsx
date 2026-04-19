import React from 'react';

const ActivityFeed = () => {
    return (
        <section className="col-span-12 lg:col-span-4 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-xl font-headline font-bold text-on-surface mb-8">Activity Flow</h3>
            
            <div className="space-y-8 relative">
                {/* Timeline vertical line */}
                <div className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-outline-variant/20"></div>

                {/* Activity Item 1 */}
                <div className="flex gap-4 relative z-10">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-primary-container flex items-center justify-center border-4 border-surface shadow-[0_0_15px_rgba(93,33,223,0.2)]">
                        <span className="material-symbols-outlined text-white text-sm" data-icon="auto_awesome">auto_awesome</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-on-surface">Career Path Updated</p>
                        <p className="text-xs text-on-surface-variant">AI detected new skill fit for "Lead AI Engineer"</p>
                        <p className="text-[0.65rem] text-primary mt-1">2 hours ago</p>
                    </div>
                </div>

                {/* Activity Item 2 */}
                <div className="flex gap-4 relative z-10">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-secondary-container flex items-center justify-center border-4 border-surface">
                        <span className="material-symbols-outlined text-on-secondary-container text-sm" data-icon="file_upload">file_upload</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-on-surface">Resume Rescanned</p>
                        <p className="text-xs text-on-surface-variant">Version 4.2 successfully indexed and analyzed.</p>
                        <p className="text-[0.65rem] text-secondary-fixed-dim mt-1">6 hours ago</p>
                    </div>
                </div>

                {/* Activity Item 3 */}
                <div className="flex gap-4 relative z-10">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-tertiary-container flex items-center justify-center border-4 border-surface">
                        <span className="material-symbols-outlined text-on-tertiary-container text-sm" data-icon="workspace_premium">workspace_premium</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-on-surface">Badge Earned</p>
                        <p className="text-xs text-on-surface-variant">"Semantic Architect" badge added to your profile.</p>
                        <p className="text-[0.65rem] text-tertiary mt-1">Yesterday</p>
                    </div>
                </div>

                {/* Activity Item 4 */}
                <div className="flex gap-4 relative z-10">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-surface-container-highest flex items-center justify-center border-4 border-surface">
                        <span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="login">login</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-on-surface">Login Detected</p>
                        <p className="text-xs text-on-surface-variant">Access from San Francisco, CA (MacBook Pro)</p>
                        <p className="text-[0.65rem] text-on-surface-variant mt-1">2 days ago</p>
                    </div>
                </div>
            </div>

            <button className="w-full mt-10 py-3 rounded-lg border border-outline-variant/20 text-xs font-label uppercase tracking-widest text-on-surface-variant hover:bg-surface-bright hover:text-on-surface transition-all">
                View All Activity
            </button>
        </section>
    );
};

export default ActivityFeed;
