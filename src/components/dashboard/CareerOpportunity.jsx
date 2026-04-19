import React from 'react';

const CareerOpportunity = () => {
    return (
        <section className="mt-12 flex flex-col md:flex-row gap-12 items-center bg-gradient-to-r from-surface-container-low to-transparent p-12 rounded-[3rem] border-l-8 border-primary relative overflow-hidden">
            <div className="flex-1 z-10">
                <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-4 leading-tight">
                    Your Next Evolutionary Jump: <span className="text-primary-fixed-dim italic font-medium">Senior Solutions Architect</span>
                </h3>
                <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-8">
                    Based on your recent <span className="text-secondary font-bold">Data Architecture</span> mastery, we've identified a 94% match at NVIDIA. Your readiness score would jump +12% with one more verified AWS certification.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm shadow-xl hover:scale-105 transition-transform duration-300">
                        Apply Intelligence
                    </button>
                    <button className="px-8 py-4 rounded-full bg-surface-bright/30 backdrop-blur-md border border-outline-variant/30 text-on-surface font-bold text-sm hover:bg-surface-bright/50 transition-colors">
                        View Analysis
                    </button>
                </div>
            </div>

            <div className="hidden lg:block w-72 h-72 rounded-xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 z-10">
                <img 
                    alt="Futuristic AI Visualization" 
                    className="w-full h-full object-cover scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4XRRPZVH2MlMJpbpPYT5w-chlcaNjaTe5lzHLbFwC6CwlwoTdAJQ1Usv69Fg6fLU-VQuOjhLMGhaVLk2Dv5eOXEISIgHA5TLKQswoVfnyfZdmccMWCDb-BfwpE1C12n-P0wIsVTStsGpehIdsz7v-6Le9jFCnSar7QaLf1zTHOqhAhuB6V0pmP5VFIcvZ3kOsVLR29xIkC9HV_VfxxIqfDdKLy6boKo_zrRe96L6mjgZCk8VTMQ5KGCliFCrI63Iup57hfXl3fznR"
                />
            </div>
            
            {/* Decorative background blurs inside the section */}
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
        </section>
    );
};

export default CareerOpportunity;
