import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/api";
import PortfolioNavbar from "../../components/public-portfolio/PortfolioNavbar/PortfolioNavbar";
import PortfolioHero from "../../components/public-portfolio/PortfolioHero/PortfolioHero";
import PortfolioExperience from "../../components/public-portfolio/PortfolioExperience/PortfolioExperience";
import PortfolioProjects from "../../components/public-portfolio/PortfolioProjects/PortfolioProjects";
import PortfolioSkills from "../../components/public-portfolio/PortfolioSkills/PortfolioSkills";
import PortfolioCertifications from "../../components/public-portfolio/PortfolioCertifications/PortfolioCertifications";
import PortfolioVolunteering from "../../components/public-portfolio/PortfolioVolunteering/PortfolioVolunteering";
import PortfolioFooter from "../../components/public-portfolio/PortfolioFooter/PortfolioFooter";

const PublicPortfolioPage = () => {
  const { username } = useParams();
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(`${API_URL}/portfolio/public/${username}`);
        const data = await res.json();
        
        if (res.ok && !data.message) {
          setPortfolioData(data);
        } else {
          setError(data.message || "Portfolio not found");
        }
      } catch (err) {
        setError("Failed to load portfolio");
      } finally {
        setLoading(false);
      }
    };
    
    if (username) {
      fetchPortfolio();
    }
  }, [username]);

  if (loading) {
    return <div className="min-h-screen bg-[#0d0e12] flex items-center justify-center text-white font-bold">Loading Portfolio...</div>;
  }

  if (error || !portfolioData) {
    return (
      <div className="min-h-screen bg-[#0d0e12] flex flex-col items-center justify-center text-white">
        <span className="material-symbols-outlined text-[48px] text-white/20 mb-4">sentiment_dissatisfied</span>
        <h1 className="text-2xl font-bold">Portfolio Not Found</h1>
        <p className="text-white/40 mt-2">The requested portfolio does not exist or has not been published.</p>
      </div>
    );
  }

  const { socialLinks, personalInfo } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d0e12] text-gray-900 dark:text-white font-sans selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-200 relative overflow-x-hidden transition-colors duration-300 pt-20">
      
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] transition-colors" />
      </div>

      <PortfolioNavbar data={personalInfo} />

      {/* Left Social Sidebar */}
      {(socialLinks?.github || socialLinks?.linkedin || socialLinks?.twitter || socialLinks?.website) && (
        <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-50">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              <span className="material-symbols-outlined">code</span>
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors">
              <span className="material-symbols-outlined">work</span>
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors">
              <span className="material-symbols-outlined">tag</span>
            </a>
          )}
          {socialLinks.website && (
            <a href={socialLinks.website} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors">
              <span className="material-symbols-outlined">language</span>
            </a>
          )}
          <div className="w-[1px] h-16 bg-gray-300 dark:bg-gray-700/50 mt-2 transition-colors"></div>
        </div>
      )}

      {/* Right Floating Resume */}
      <a href="#" className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group">
        <div className="bg-white/80 dark:bg-transparent border border-gray-200 dark:border-0 shadow-lg dark:shadow-none px-4 py-2 dark:p-0 rounded-lg dark:rounded-none flex items-center gap-2 text-gray-700 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors backdrop-blur-md">
          <span className="material-symbols-outlined text-[24px] dark:text-[28px] font-light">description</span>
          <span className="text-[0.7rem] font-bold tracking-widest uppercase mt-1">Resume</span>
        </div>
      </a>
      
      <main className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col gap-24 relative z-10 xl:pl-32">
        <PortfolioHero data={portfolioData} />
        <PortfolioExperience data={portfolioData.experience} />
        <PortfolioProjects data={portfolioData.projects} />
        <PortfolioCertifications data={portfolioData.certifications} />
        <PortfolioSkills data={portfolioData.technologies} />
        <PortfolioVolunteering data={portfolioData.volunteering} />
        <PortfolioFooter data={personalInfo} social={socialLinks} />
      </main>
    </div>
  );
};

export default PublicPortfolioPage;
