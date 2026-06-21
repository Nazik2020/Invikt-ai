import React from 'react';

const BillingSettings = () => {
    return (
        <div className="pb-8">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Billing & Plan</h1>
                <p className="text-[15px] text-white/60">Manage your subscription and payment details.</p>
            </div>

            {/* Plans Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                
                {/* Free Plan */}
                <div className="bg-[#17181c] border border-white/5 rounded-2xl p-8 flex flex-col">
                    <div className="mb-6">
                        <span className="bg-white/5 text-white/50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg">
                            Free Plan
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Free</h2>
                    <p className="text-[13px] text-white/50 mb-8 leading-relaxed">
                        Perfect for getting started with your career architecture.
                    </p>

                    <div className="flex flex-col gap-4 mb-10 flex-1">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#00daf3] text-[18px]">check_circle</span>
                            <span className="text-[13px] text-white/90">5 Job applications / month</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#00daf3] text-[18px]">check_circle</span>
                            <span className="text-[13px] text-white/90">Basic career roadmap</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-40">
                            <span className="material-symbols-outlined text-white text-[18px]">block</span>
                            <span className="text-[13px] text-white">Resume analysis</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-40">
                            <span className="material-symbols-outlined text-white text-[18px]">block</span>
                            <span className="text-[13px] text-white">Advanced intelligence insights</span>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4">
                        <div className="flex items-baseline gap-1 flex-1">
                            <span className="text-2xl font-bold text-white">$0</span>
                            <span className="text-[12px] text-white/40">/ month</span>
                        </div>
                        <button className="whitespace-nowrap shrink-0 bg-white/5 text-white/50 text-[12px] font-bold px-5 py-2.5 rounded-xl cursor-default w-full sm:w-auto">
                            Current Plan
                        </button>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="bg-[#17181c] border border-[#ab8ff4]/30 rounded-2xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(171,143,244,0.05)]">
                    <div className="absolute -top-3 right-6 bg-[#ab8ff4] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg shadow-[#ab8ff4]/20">
                        Most Popular
                    </div>
                    <div className="mb-6">
                        <span className="bg-white/5 text-white/50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg">
                            Pro Plan
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Pro</h2>
                    <p className="text-[13px] text-white/50 mb-8 leading-relaxed">
                        Everything you need to conquer your career with AI intelligence.
                    </p>

                    <div className="flex flex-col gap-4 mb-10 flex-1">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#ab8ff4] text-[18px]">check_circle</span>
                            <span className="text-[13px] text-white/90">Unlimited job applications</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#ab8ff4] text-[18px]">check_circle</span>
                            <span className="text-[13px] text-white/90">All 10+ career roadmaps</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#ab8ff4] text-[18px]">check_circle</span>
                            <span className="text-[13px] text-white/90">Resume analysis (coming soon)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#ab8ff4] text-[18px]">check_circle</span>
                            <span className="text-[13px] text-white/90">Priority support & early features</span>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4">
                        <div className="flex-1">
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-2xl font-bold text-white">$8</span>
                                <span className="text-[12px] text-white/40">/ month</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] font-bold text-[#00daf3]">$5/mo billed annually</span>
                                <span className="bg-[#00daf3]/10 text-[#00daf3] text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded shrink-0">Save 30%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0 shrink-0">
                            <button className="whitespace-nowrap w-full sm:w-auto bg-gradient-to-r from-[#ab8ff4] to-[#814df3] hover:from-[#bda5f7] hover:to-[#9165f5] text-white text-[12px] font-bold px-6 py-3 rounded-xl transition-all shadow-[0_10px_20px_rgba(129,77,243,0.2)] tracking-wide">
                                Upgrade Now
                            </button>
                            <span className="text-[9px] text-white/30 whitespace-nowrap">No credit card required</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Payment Method & Billing Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                
                {/* Payment Method */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Payment Method</h2>
                    <div className="border border-dashed border-white/20 rounded-2xl h-full min-h-[280px] flex flex-col items-center justify-center p-8 text-center bg-white/[0.02]">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-white/40 text-[24px]">credit_card</span>
                        </div>
                        <div className="text-[14px] font-bold text-white mb-2">No payment method added</div>
                        <div className="text-[12px] text-white/40 mb-6 max-w-[200px] leading-relaxed">
                            Add a card to enable seamless plan upgrades and Pro features.
                        </div>
                        <button className="border border-white/10 hover:border-white/20 hover:bg-white/5 text-white text-[12px] font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">add</span>
                            Add Payment Method
                        </button>
                    </div>
                </div>

                {/* Billing Information */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Billing Information</h2>
                    <div className="bg-[#17181c] border border-white/5 rounded-2xl p-6 h-full min-h-[280px] flex flex-col">
                        <div className="flex flex-col gap-4 flex-1">
                            <div>
                                <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    defaultValue="Alex Chen" 
                                    className="w-full bg-[#0c0d11] border border-white/5 rounded-lg px-4 py-2.5 text-[13px] text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Billing Email</label>
                                <input 
                                    type="email" 
                                    defaultValue="alex.chen@example.com" 
                                    className="w-full bg-[#0c0d11] border border-white/5 rounded-lg px-4 py-2.5 text-[13px] text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Country</label>
                                <div className="relative">
                                    <select className="w-full bg-[#0c0d11] border border-white/5 rounded-lg px-4 py-2.5 text-[13px] text-white focus:outline-none focus:border-[#ab8ff4]/50 transition-colors appearance-none cursor-pointer">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>United Kingdom</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-[18px] pointer-events-none">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5">
                            <div className="flex items-start gap-2 mb-4">
                                <span className="material-symbols-outlined text-[#00daf3] text-[16px] shrink-0 mt-0.5">info</span>
                                <div className="text-[10px] text-white/40 leading-relaxed">
                                    Invoices will be sent to your billing email every month or year depending on your cycle.
                                </div>
                            </div>
                            <button className="w-full bg-white/5 hover:bg-white/10 text-white text-[12px] font-bold py-3 rounded-lg transition-colors">
                                Update Information
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Payment History */}
            <div>
                <h2 className="text-lg font-bold text-white mb-4">Payment History</h2>
                <div className="bg-[#17181c] border border-white/5 rounded-2xl overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/5 bg-white/[0.02]">
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Invoice</div>
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Date</div>
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Status</div>
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest text-right">Amount</div>
                    </div>
                    
                    {/* Empty State */}
                    <div className="p-16 flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-white/20 text-[24px]">receipt_long</span>
                        </div>
                        <div className="text-[14px] font-bold text-white mb-1">No payments yet</div>
                        <div className="text-[12px] text-white/40">Your transaction history will appear here once you subscribe to a plan.</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BillingSettings;
