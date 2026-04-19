import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Resume Analyzer', path: '/resume', icon: 'description' },
    { name: 'Skill Gap', path: '/skill-gap', icon: 'query_stats' },
    { name: 'Career Path', path: '/career-path', icon: 'auto_awesome' },
    { name: 'Learning Hub', path: '/learning-hub', icon: 'school' }
];

const SideNavBar = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 rounded-r-xl bg-slate-900/80 backdrop-blur-2xl shadow-[10px_0_30px_rgba(98,0,238,0.05)] flex flex-col py-8 z-50 overflow-hidden">
            <div className="px-6 mb-12 flex items-center">
                <Link to="/" className="hover:opacity-90 transition-opacity flex items-center">
                    <img src={logo} alt="Skilio AI" className="h-14 w-auto object-contain" />
                </Link>
            </div>
            
            <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-violet-600/20 to-transparent text-violet-300 border-l-4 border-violet-500 flex items-center gap-3 px-6 py-3 transition-all"
                                : "text-slate-500 flex items-center gap-3 px-6 py-3 hover:bg-slate-800/50 hover:text-slate-200 transition-all font-inter text-sm font-medium tracking-wide"
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span className="material-symbols-outlined" data-icon={item.icon}>{item.icon}</span>
                                <span className="font-inter text-sm font-medium tracking-wide">{item.name}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className="px-6 py-4 mx-4 mb-8 glass-card rounded-lg bg-surface-container-high border border-outline-variant/15">
                <p className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-2 font-label">Power Tier</p>
                <button className="w-full py-2 px-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(205,189,255,0.3)] transition-all">
                    Upgrade to Pro
                </button>
            </div>

            <div className="px-8 flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-surface-container-highest">
                    <img alt="Alex Chen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9MYiBu4XLuH5GR0fPKhdC5a-fVeapYxKB8FzEm9-LCR3m-cwNFRgCy0bPNtz77dBYm635197ROA2Ke2LQJKp1Vap66_Fx7B-mFi-dM3NeO-VHBhDVC21gsQKiCRQV_JzBMAK3S3J5MQk4lIULH0K47QlbY4OYtuUEbFLxes6kwowjXU_p7Seeja2wgdixcXWXJInucdREKm937odsIk50BHQR4l6laLJbuzLQZ1wfyVFGBFZPh-aYSu4JE1qqLRVhNxgC3MwojdNO"/>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-100">Alex Chen</p>
                    <p className="text-[0.65rem] text-violet-400 font-semibold tracking-tighter uppercase font-label">Elite Member</p>
                </div>
            </div>

            <div className="mt-auto border-t border-slate-800/30 pt-4">
                <NavLink to="/settings" className="text-slate-500 flex items-center gap-3 px-6 py-3 hover:text-slate-200">
                    <span className="material-symbols-outlined" data-icon="settings">settings</span>
                    <span className="font-inter text-sm font-medium tracking-wide">Settings</span>
                </NavLink>
                <NavLink to="/support" className="text-slate-500 flex items-center gap-3 px-6 py-3 hover:text-slate-200">
                    <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
                    <span className="font-inter text-sm font-medium tracking-wide">Support</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default SideNavBar;
