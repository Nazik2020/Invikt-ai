import React, { useState } from 'react';
import AppearanceSettings from '../components/settings/AppearanceSettings';
import ProfileSettings from '../components/settings/ProfileSettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import PrivacySecuritySettings from '../components/settings/PrivacySecuritySettings';
import CareerPreferencesSettings from '../components/settings/CareerPreferencesSettings';
import BillingSettings from '../components/settings/BillingSettings';
import ConnectedAccountsSettings from '../components/settings/ConnectedAccountsSettings';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: 'person' },
        { id: 'notifications', label: 'Notifications', icon: 'notifications' },
        { id: 'appearance', label: 'Appearance', icon: 'palette' },
        { id: 'privacy', label: 'Privacy & Security', icon: 'shield' },
        { id: 'career', label: 'Career Preferences', icon: 'timeline' },
        { id: 'resume', label: 'Resume Settings', icon: 'description' },
        { id: 'accounts', label: 'Connected Accounts', icon: 'link' },
        { id: 'billing', label: 'Billing & Plan', icon: 'payments' },
        { id: 'support', label: 'Help & Support', icon: 'help' },
    ];

    const accentColors = [
        { id: 'violet', hex: '#ab8ff4' },
        { id: 'cyan', hex: '#00daf3' },
        { id: 'blue', hex: '#3b82f6' },
        { id: 'green', hex: '#22c55e' },
        { id: 'orange', hex: '#f59e0b' },
        { id: 'pink', hex: '#ec4899' },
    ];

    return (
        <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-80px)] md:min-h-0 text-white w-full">
            {/* Secondary Sidebar */}
            <div className="w-full md:w-64 lg:w-72 border-b md:border-b-0 md:border-r border-white/5 shrink-0 flex flex-col md:h-full md:overflow-y-auto">
                <div className="p-4 md:p-8 md:pr-4 flex-1">
                    <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4 md:mb-6 hidden md:block">
                        System Settings
                    </div>
                    
                    <nav className="flex flex-row md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 no-scrollbar">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3 rounded-xl transition-all text-sm font-medium whitespace-nowrap shrink-0 md:shrink ${
                                        isActive 
                                        ? 'bg-white/5 border border-white/10 text-white shadow-sm' 
                                        : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                                >
                                    <span className="material-symbols-outlined text-[16px] md:text-[18px]">
                                        {tab.icon}
                                    </span>
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8 lg:p-12 max-w-4xl">
                    {activeTab === 'profile' && <ProfileSettings />}
                    {activeTab === 'notifications' && <NotificationSettings />}
                    {activeTab === 'appearance' && <AppearanceSettings />}
                    {activeTab === 'privacy' && <PrivacySecuritySettings />}
                    {activeTab === 'career' && <CareerPreferencesSettings />}
                    {activeTab === 'billing' && <BillingSettings />}
                    {activeTab === 'accounts' && <ConnectedAccountsSettings />}
                    
                    {/* Placeholder for other tabs */}
                    {activeTab !== 'profile' && activeTab !== 'appearance' && activeTab !== 'notifications' && activeTab !== 'privacy' && activeTab !== 'career' && activeTab !== 'billing' && activeTab !== 'accounts' && (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <span className="material-symbols-outlined text-4xl text-white/20 mb-4">construction</span>
                            <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
                            <p className="text-white/50 text-sm max-w-md">The {tabs.find(t => t.id === activeTab)?.label} settings page is currently under construction.</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
