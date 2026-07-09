import React from "react";

const PortfolioHero = ({ data }) => {
  if (!data || !data.personalInfo) return null;
  const { fullName, tagline, bio, avatarUrl } = data.personalInfo;
  
  // Split name for stylistic rendering if possible
  const nameParts = fullName ? fullName.split(' ') : [''];
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  return (
    <section id="home" className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 mt-12 mb-16 animate-fade-in-up min-h-[75vh]">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start text-left z-10 w-full lg:max-w-xl">
        <p className="text-[0.75rem] font-bold tracking-[0.25em] text-gray-400 uppercase mb-6">
          {data.personalInfo.primaryDomain || "PORTFOLIO"}
        </p>
        <h1 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.05] font-sans font-black tracking-tight text-gray-900 dark:text-white mb-0 transition-colors uppercase">
          {firstName}<br/>{lastName}{lastName && ','}
        </h1>
        <h1 className="text-[3rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.1] font-sans font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-500 mb-8 drop-shadow-[0_0_15px_rgba(167,139,250,0.4)] whitespace-nowrap uppercase">
          {tagline}
        </h1>
        <p className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400 mb-10 font-normal transition-colors whitespace-pre-wrap">
          {bio}
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded bg-[#C7A2FF] hover:bg-[#b08df2] text-[#0d0e12] text-[0.8rem] font-bold shadow-lg transition-colors flex items-center gap-2 tracking-wider">
            VIEW PROJECTS &rarr;
          </a>
          <a href="#contact" className="px-6 py-3 rounded border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30 bg-transparent dark:bg-[#16171b] text-gray-800 dark:text-white text-[0.8rem] font-bold shadow-sm transition-colors tracking-wider">
            CONTACT ME
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative flex justify-center items-center w-full max-w-[550px]">
        {/* Animated glowing background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-violet-600/30 blur-[120px] rounded-full animate-[pulse_4s_ease-in-out_infinite] z-0 pointer-events-none"></div>

        {/* Geometric background lines & glowing orbiting dots */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-100">
          {/* Box 1 (Inner Rotating) with Orbiting Dot */}
          <div className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] border-[2px] border-violet-500/80 rounded-[2.5rem] absolute transition-colors animate-[spin_30s_linear_infinite]">
            <div className="absolute top-[10%] left-[10%] w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,1)]"></div>
          </div>
          
          {/* Box 2 (Middle Rotating) with Orbiting Dot */}
          <div className="w-[310px] h-[310px] lg:w-[420px] lg:h-[420px] border-[2px] border-violet-500/50 rounded-[3rem] absolute transition-colors animate-[spin_40s_linear_infinite_reverse]">
            <div className="absolute bottom-[15%] right-[15%] w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(167,139,250,1)]"></div>
          </div>

          {/* Box 3 (Outer Static - Upright, NO dot) */}
          <div className="w-[340px] h-[340px] lg:w-[460px] lg:h-[460px] border-[2px] border-violet-500/20 rounded-[3.5rem] absolute transition-colors rotate-0">
          </div>
        </div>

        <div className="relative z-10 w-[300px] h-[340px] lg:w-[400px] lg:h-[460px] bg-gradient-to-br from-gray-200 to-gray-400 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 dark:border-white/5">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={fullName} 
              className="w-full h-full object-cover object-top opacity-100 dark:opacity-90 transition-opacity"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-800 text-gray-500 text-6xl font-black uppercase">
              {fullName ? fullName.slice(0, 1) : "?"}
            </div>
          )}
        </div>
        
        {/* Glassmorphic overlay card (Bar chart) and Resume Badge */}
        <div className="absolute -bottom-4 -right-2 lg:-bottom-6 lg:-right-8 z-20 flex flex-col items-end animate-[float_6s_ease-in-out_infinite]">
          {/* Bar Chart Card */}
          <div className="w-44 h-44 lg:w-56 lg:h-56 bg-white/5 dark:bg-[#1a1b23]/50 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[1.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-end justify-center gap-3 lg:gap-4 p-5 lg:p-6 transition-colors relative z-10">
            <div className="w-7 lg:w-9 h-14 lg:h-20 bg-[#687399] rounded-sm"></div>
            <div className="w-7 lg:w-9 h-28 lg:h-40 bg-[#8a5cf6] rounded-sm shadow-[0_0_25px_rgba(138,92,246,0.3)]"></div>
            <div className="w-7 lg:w-9 h-20 lg:h-28 bg-[#8c5a66] rounded-sm"></div>
          </div>
          
          {/* Resume Badge (Aligned exactly as the mockup) */}
          <a href="#" className="flex items-center gap-2 mt-3 mr-2 lg:mt-4 lg:mr-2 hover:text-violet-400 transition-colors cursor-pointer group z-20">
            <span className="material-symbols-outlined text-[32px] lg:text-[40px] text-gray-300 dark:text-gray-400 group-hover:text-violet-400 transition-colors font-light">description</span>
            <span className="text-[0.85rem] lg:text-[1rem] font-bold tracking-[0.2em] text-white uppercase mt-1">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
