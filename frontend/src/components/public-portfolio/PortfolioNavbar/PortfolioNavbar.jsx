import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PortfolioNavbar = ({ data }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark") || true
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Use the full name or fallback to "user"
  const firstName = data?.fullName ? data.fullName.split(' ')[0].toLowerCase() : 'user';

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-[#0d0e12]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 z-[100] transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2 font-sans text-[1.1rem]">
          <Link to="/" className="font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors">Invikt</Link>
          <span className="text-gray-400 font-light">/</span>
          <span className="text-gray-800 dark:text-white font-semibold tracking-wide">{firstName}</span>
        </div>

        {/* Right: Navigation & Actions */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="#home" className="text-[0.85rem] font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
            <a href="#projects" className="text-[0.85rem] font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#certifications" className="text-[0.85rem] font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="text-[0.85rem] font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="w-[1px] h-6 bg-gray-300 dark:bg-white/10"></div>
          
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 dark:hover:text-white"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
          
          <Link to="/" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-white text-[0.85rem] font-bold rounded shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all">
            Create Your Portfolio Free
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioNavbar;
