import React from "react";
import PortfolioHeader from "../../components/portfolio/PortfolioHeader/PortfolioHeader";
import PersonalInfoForm from "../../components/portfolio/PersonalInfoForm/PersonalInfoForm";
import SocialLinksForm from "../../components/portfolio/SocialLinksForm/SocialLinksForm";
import LivePreview from "../../components/portfolio/LivePreview/LivePreview";

const PortfolioPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6 animate-fade-in-up">
      <PortfolioHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-6 pb-20 items-start">
        <div className="flex flex-col gap-6">
          <PersonalInfoForm />
          <SocialLinksForm />
        </div>
        
        <div className="sticky top-6 h-fit w-full flex justify-center lg:justify-end">
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
