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
          {data.technologies && data.technologies.length > 0 ? data.technologies.slice(0, 2).map(t => t.name).join(' • ') : "PORTFOLIO"}
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

        {/* Geometric background lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-40">
          <div className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] border-[0.5px] border-gray-400 dark:border-white/20 rotate-45 rounded-[3rem] absolute transition-colors"></div>
          <div className="w-[450px] h-[450px] lg:w-[650px] lg:h-[650px] border-[0.5px] border-gray-400 dark:border-white/10 -rotate-12 rounded-[5rem] absolute transition-colors"></div>
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
        
        {/* Glassmorphic overlay card (Bar chart) */}
        <div className="absolute -bottom-6 -right-2 lg:-bottom-8 lg:-right-6 w-32 h-32 lg:w-40 lg:h-40 bg-white/60 dark:bg-[#16171b]/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl flex items-end justify-center gap-2 lg:gap-3 p-4 z-20 transition-colors">
          <div className="w-5 lg:w-7 h-10 lg:h-12 bg-violet-400/90 rounded-md shadow-[0_0_10px_rgba(167,139,250,0.4)]"></div>
          <div className="w-5 lg:w-7 h-20 lg:h-24 bg-[#C7A2FF] rounded-md shadow-[0_0_15px_rgba(199,162,255,0.6)]"></div>
          <div className="w-5 lg:w-7 h-12 lg:h-14 bg-pink-900/80 rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
