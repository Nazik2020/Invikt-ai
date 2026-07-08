import React from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "TechNova Solutions",
    period: "Jan 2025 - Present",
    description: "Developing responsive UI components using React and Tailwind CSS. Collaborating with the design team to implement modern, accessible web interfaces."
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jun 2024 - Dec 2024",
    description: "Built custom landing pages and e-commerce frontends for local businesses. Optimized web performance and SEO, resulting in a 40% increase in client traffic."
  }
];

const PortfolioExperience = () => {
  return (
    <section id="experience" className="w-full animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-0.5 w-8 bg-violet-600 dark:bg-violet-500" />
        <h2 className="text-2xl font-sans font-bold text-gray-900 dark:text-white transition-colors">Experience</h2>
      </div>

      <div className="relative border-l-2 border-violet-200 dark:border-white/10 ml-3 md:ml-4 flex flex-col gap-10">
        
        <div className="relative pl-8 md:pl-10 group">
          {/* Timeline dot */}
          <div className="absolute w-4 h-4 rounded-full bg-cyan-500 -left-[9px] top-1.5 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0f1115] group-hover:scale-125 transition-transform duration-300" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2 sm:gap-4">
            <div className="flex items-center gap-3">
              <h3 className="text-[1.1rem] font-sans font-bold text-gray-900 dark:text-white transition-colors">
                Research Assistant
              </h3>
              <span className="px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider uppercase bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400">
                CURRENT
              </span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-3 text-[0.8rem] text-gray-500 dark:text-gray-400 font-mono">
            <span>UCSC Research Lab</span>
            <span>Nov 2023 - Present</span>
          </div>
          
          <p className="text-[0.9rem] leading-relaxed text-gray-600 dark:text-gray-400 transition-colors">
            Leading frontend development for an AI-driven data visualization project. Implementing complex WebGL shaders for real-time data rendering.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PortfolioExperience;
