import React from "react";
import Link from "next/link";
import logo from "../assets/aspirev.png";

const AuthLayout = ({ children, leftContent }) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-slate-50 dark:bg-[#0c0d11] overflow-hidden">
      {/* Left Panel - Hidden on Mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 xl:p-16 border-r border-slate-200 dark:border-white/5">
        {/* Background glow */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,218,243,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none translate-x-1/4 translate-y-1/4 z-0"></div>

        <div className="relative z-10 flex flex-col w-full h-full">
          {leftContent}
        </div>
      </div>

      {/* Right Panel - Form Area */}
      <div className="flex-1 flex flex-col lg:justify-center items-center p-6 sm:p-12 bg-white dark:bg-[#111216] relative min-h-screen lg:min-h-0">
        <div className="w-full max-w-[420px] pt-8 lg:pt-0 relative z-10 flex flex-col h-full lg:h-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12">
            <Link href="/" className="inline-block -ml-2">
              <img
                src={logo.src}
                alt="Aspirev"
                className="h-16 md:h-20 w-auto object-contain invert dark:invert-0"
              />
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-center lg:block">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
