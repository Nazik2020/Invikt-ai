import React from "react";

const PortfolioSkills = ({ data }) => {
  if (!data || data.length === 0 || !data[0].name) return null;

  // Flatten the nested categories -> tools -> logoUrl
  const technologies = [];
  data.forEach(category => {
    if (category.tools) {
      category.tools.forEach(tool => {
        if (tool.logoUrl) {
          technologies.push(tool.logoUrl);
        }
      });
    }
  });

  if (technologies.length === 0) return null;

  return (
    <section id="skills" className="w-full animate-fade-in-up pb-24">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[1.5rem] font-sans font-bold tracking-[0.2em] text-gray-900 dark:text-white uppercase transition-colors">Technologies</h2>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        {/* Row 1 */}
        <div className="flex items-center gap-4 animate-[scroll_15s_linear_infinite] whitespace-nowrap">
          {[...technologies, ...technologies, ...technologies].map((icon, idx) => (
            <div key={`row1-${idx}`} className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-[1.5rem] border border-gray-200 dark:border-white/5 bg-white dark:bg-[#121318] shadow-sm dark:shadow-lg flex items-center justify-center p-4 md:p-5 group hover:border-violet-500/30 hover:bg-gray-50 dark:hover:bg-[#16171d] transition-colors">
              <img src={icon} alt="Tech" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
          ))}
        </div>
        {/* Row 2 (reverse) */}
        <div className="flex items-center gap-4 animate-[scroll_20s_linear_infinite_reverse] whitespace-nowrap ml-[-100px]">
          {[...[...technologies].reverse(), ...[...technologies].reverse(), ...[...technologies].reverse()].map((icon, idx) => (
            <div key={`row2-${idx}`} className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-[1.5rem] border border-gray-200 dark:border-white/5 bg-white dark:bg-[#121318] shadow-sm dark:shadow-lg flex items-center justify-center p-4 md:p-5 group hover:border-violet-500/30 hover:bg-gray-50 dark:hover:bg-[#16171d] transition-colors relative">
              {idx === 4 && <div className="absolute inset-0 bg-violet-500/10 rounded-3xl blur-md" />}
              <img src={icon} alt="Tech" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 relative z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkills;
