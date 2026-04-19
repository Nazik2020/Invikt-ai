import React from 'react';

const CareerHeader = () => {
    return (
        <header className="mb-16 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 text-primary mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-lg" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">AI Intelligence Applied</span>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-on-surface">
                Your Future, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Architected.</span>
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                We've analyzed your skills, experience, and the current market trajectory. Here are the most high-impact career recommendations tailored specifically for your profile.
            </p>
        </header>
    );
};

export default CareerHeader;
