import React from "react";
import PortfolioNavbar from "../../components/public-portfolio/PortfolioNavbar/PortfolioNavbar";
import PortfolioHero from "../../components/public-portfolio/PortfolioHero/PortfolioHero";
import PortfolioAbout from "../../components/public-portfolio/PortfolioAbout/PortfolioAbout";
import PortfolioSkills from "../../components/public-portfolio/PortfolioSkills/PortfolioSkills";
import PortfolioProjects from "../../components/public-portfolio/PortfolioProjects/PortfolioProjects";
import PortfolioExperience from "../../components/public-portfolio/PortfolioExperience/PortfolioExperience";

const PublicPortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0f1115] text-gray-900 dark:text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors relative overflow-hidden">
      
      {/* Background Decorative Elements (Dark Mode Only) */}
      <div className="absolute top-0 w-full h-full pointer-events-none hidden dark:block">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <PortfolioNavbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-16 relative z-10">
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioSkills />
        <PortfolioExperience />
        <PortfolioProjects />
      </main>
    </div>
  );
};

export default PublicPortfolioPage;
