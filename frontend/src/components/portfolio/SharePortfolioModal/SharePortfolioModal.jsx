import React from "react";
import { createPortal } from "react-dom";

const SharePortfolioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0f1115]/80 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[800px] bg-[#16181d] border border-white/10 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-[1.1rem] font-sans font-bold text-white mb-0.5">Share Your Portfolio</h2>
            <p className="text-[0.85rem] text-gray-400">Let the world see what you can do.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6 border-b border-white/5 pb-6">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-5">
            
            {/* Profile Preview Card */}
            <div className="bg-[#111216] border border-white/5 rounded-xl p-3 flex items-center gap-3 relative group cursor-pointer hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                N
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-white font-bold text-[0.9rem] truncate">Nazik</h3>
                  <span className="px-1.5 py-[1px] rounded text-[0.55rem] font-black tracking-wider uppercase bg-emerald-500/10 text-emerald-400 flex items-center gap-1 shrink-0">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>
                <p className="text-[0.75rem] text-gray-400 truncate">Frontend Developer | CS Student</p>
                <p className="text-[0.65rem] text-gray-500 font-mono mt-0.5 truncate">invikt.com/p/nazik</p>
              </div>
              <div className="text-gray-500 group-hover:text-white transition-colors pr-1">
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </div>
            </div>

            {/* Link Copy */}
            <div>
              <h4 className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider mb-2">Your Portfolio Link</h4>
              <div className="flex items-center bg-[#111216] border border-white/5 rounded-full p-1 pl-3 relative">
                <span className="text-[0.75rem] text-gray-300 font-mono truncate flex-1 pr-2">invikt.com/p/nazik</span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-[0.75rem] font-bold transition-colors">
                  <span className="material-symbols-outlined text-[14px]">content_copy</span>
                  Copy
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-2 mt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[0.7rem] font-medium text-gray-300">
                <span className="material-symbols-outlined text-[14px]">visibility</span>
                47 total views
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[0.7rem] font-medium text-gray-300">
                <span className="material-symbols-outlined text-[14px]">ads_click</span>
                8 link clicks
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[0.7rem] font-bold text-cyan-400">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                12 this week
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex-1">
            <h4 className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider mb-3">Share on Platforms</h4>
            <div className="grid grid-cols-2 gap-3">
              
              {/* LinkedIn */}
              <button className="flex flex-col items-center justify-center gap-1.5 h-20 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 border border-[#0a66c2]/30 rounded-xl transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6 opacity-90" />
                <span className="text-[0.7rem] font-bold text-white">LinkedIn</span>
              </button>
              
              {/* WhatsApp */}
              <button className="flex flex-col items-center justify-center gap-1.5 h-20 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-6 h-6 opacity-90" />
                <span className="text-[0.7rem] font-bold text-white">WhatsApp</span>
              </button>

              {/* X / Twitter */}
              <button className="flex flex-col items-center justify-center gap-1.5 h-20 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
                <span className="material-symbols-outlined text-white text-[24px]">close</span>
                <span className="text-[0.7rem] font-bold text-white">Share on X</span>
              </button>

              {/* Email */}
              <button className="flex flex-col items-center justify-center gap-1.5 h-20 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
                <span className="material-symbols-outlined text-white text-[24px]">mail</span>
                <span className="text-[0.7rem] font-bold text-white">Send via Email</span>
              </button>

            </div>
          </div>
          
        </div>

        {/* Bottom Section: QR Code */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5">
            <div className="w-[88px] h-[88px] bg-white rounded-2xl p-2.5 shrink-0 shadow-sm flex items-center justify-center">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://invikt.com/p/nazik" alt="QR Code" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[0.9rem] font-bold text-white mb-0.5">QR Code</h4>
              <p className="text-[0.75rem] text-gray-400 mb-2 max-w-[200px] leading-snug">
                Print this on your resume or business card for quick access.
              </p>
              <button className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 hover:bg-white/5 text-white text-[0.7rem] font-bold transition-colors">
                <span className="material-symbols-outlined text-[14px]">download</span>
                Download QR
              </button>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full md:w-auto px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white text-[0.9rem] font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:scale-105"
          >
            Done
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default SharePortfolioModal;
