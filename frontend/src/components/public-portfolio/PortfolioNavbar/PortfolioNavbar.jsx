import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PortfolioNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
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

  return (
    <header className="w-full bg-white/70 dark:bg-[#0f1115]/70 backdrop-blur-md border-b border-gray-200 dark:border-white/5 sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-sans text-[1.1rem]">
          <Link to="/" className="font-bold text-violet-700 dark:text-violet-500 hover:text-violet-800 transition-colors">Invikt</Link>
          <span className="text-gray-400 font-light">/</span>
          <span className="text-gray-800 dark:text-white font-semibold tracking-wide">nazik</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-[0.85rem] font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-[0.85rem] font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="text-[0.85rem] font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
          
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400 dark:hover:text-white ml-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <Link to="/" className="px-5 py-2 bg-violet-600 hover:bg-violet-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-[#0f1115] text-[0.8rem] font-bold rounded shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
            Create Your Portfolio Free
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioNavbar;
