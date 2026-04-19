import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../components/common/TopNavBar';
import Footer from '../components/common/Footer';

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
            {/* Background Orbs base layer */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
                <div className="glow-orb w-[600px] h-[600px] bg-primary top-[-300px] left-[-200px] rounded-full"></div>
                <div className="glow-orb w-[500px] h-[500px] bg-secondary-container bottom-[-200px] right-[-100px] rounded-full"></div>
            </div>
            
            <TopNavBar />
            
            <main className="flex-1 w-full pt-20 relative z-10">
                <Outlet />
            </main>
            
            <Footer className="relative z-10" />
        </div>
    );
};

export default PublicLayout;
