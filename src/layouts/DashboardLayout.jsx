import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavBar from '../components/common/SideNavBar';
import Footer from '../components/common/Footer';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-background">
            {/* Ambient background glows */}
            <div className="glow-orb top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(93,33,223,0.15)_0%,transparent_70%)] opacity-30 z-[-1]"></div>
            <div className="glow-orb bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(93,33,223,0.15)_0%,transparent_70%)] opacity-30 z-[-1]"></div>

            <SideNavBar />
            
            <main className="ml-64 min-h-screen px-10 pt-10 pb-20 max-w-7xl mx-auto z-10 relative">
                <Outlet />
            </main>

            <Footer className="ml-64 w-[calc(100%-16rem)]" />
        </div>
    );
};

export default DashboardLayout;
