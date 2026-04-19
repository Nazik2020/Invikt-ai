import React from 'react';
import CareerHeader from '../components/career/CareerHeader';
import CareerRoleCards from '../components/career/CareerRoleCards';
import CareerInsights from '../components/career/CareerInsights';

const CareerPathPage = () => {
    return (
        <div className="w-full">
            <CareerHeader />
            <CareerRoleCards />
            <CareerInsights />
        </div>
    );
};

export default CareerPathPage;
