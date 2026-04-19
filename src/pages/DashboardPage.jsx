import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardMetricCards from '../components/dashboard/DashboardMetricCards';
import SkillEvolutionChart from '../components/dashboard/SkillEvolutionChart';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import CareerOpportunity from '../components/dashboard/CareerOpportunity';

const DashboardPage = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardMetricCards />
            
            <div className="grid grid-cols-12 gap-8">
                <SkillEvolutionChart />
                <ActivityFeed />
            </div>

            <CareerOpportunity />
        </>
    );
};

export default DashboardPage;
