import React, { useState } from "react";

const PortfolioCertifications = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All');
  
  if (!data || data.length === 0 || !data[0].title) return null;

  // Extract unique providers for filtering
  const providers = ['All', ...new Set(data.map(cert => cert.provider).filter(Boolean))];

  const filteredData = data.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cert.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvider = selectedProvider === 'All' || cert.provider === selectedProvider;
    return matchesSearch && matchesProvider;
  });

  return (
    <section id="certifications" className="w-full animate-fade-in-up">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-[2rem] md:text-[2.5rem] font-sans font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-8 transition-colors">
          Certifications
        </h2>
        
        {/* Search Bar */}
        <div className="w-full max-w-2xl relative mb-6">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-[20px] transition-colors">search</span>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search certifications..." 
            className="w-full bg-white dark:bg-[#16171b] border border-gray-300 dark:border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-800 dark:text-white focus:outline-none focus:border-violet-500/50 shadow-sm dark:shadow-none transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-3xl mb-4">
          {providers.map((provider, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProvider(provider)}
              className={`px-4 py-1.5 rounded-full text-[0.75rem] font-medium transition-all ${
                selectedProvider === provider
                  ? "bg-[#6b21a8] text-[#d8b4fe] border border-transparent shadow-lg shadow-[#6b21a8]/20"
                  : "bg-transparent text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {provider}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
        {filteredData.map((cert, idx) => (
          cert.title && (
            <div key={idx} className="bg-white dark:bg-[#121318]/50 border border-violet-500/20 rounded-2xl p-6 flex flex-col group hover:border-violet-500/40 transition-colors shadow-sm dark:shadow-none hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-[1rem] font-bold text-gray-900 dark:text-white leading-snug uppercase transition-colors">{cert.title}</h3>
                {cert.certificateUrl && (
                  <a href={cert.certificateUrl} target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[18px] group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors cursor-pointer">arrow_outward</span>
                  </a>
                )}
              </div>
              <p className="text-[0.75rem] text-gray-500 dark:text-gray-400 mb-6 transition-colors">{cert.provider} &bull; {cert.date}</p>
              {cert.skills && (
                <p className="text-[0.8rem] text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  <span className="font-bold text-gray-800 dark:text-gray-300 transition-colors">Skills gained:</span> {cert.skills}
                </p>
              )}
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default PortfolioCertifications;
