import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import logo from "../assets/bg_removed_logo.png";

const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 mr-3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 mr-3 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const FeatureItem = ({ text }) => (
  <div className="flex items-center text-slate-700 dark:text-white/80 font-medium">
    <div className="w-7 h-7 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-slate-100 dark:bg-white/5 mr-4 shrink-0">
      <span className="material-symbols-outlined text-[14px] text-slate-900 dark:text-[#cdbdff]">
        check
      </span>
    </div>
    <span>{text}</span>
  </div>
);

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const leftContent = (
    <div className="flex flex-col h-full">
      <div>
        <Link to="/" className="inline-block mb-8 -ml-2">
          <img
            src={logo}
            alt="Invikt"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </Link>
        <div className="max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
            Start your
            <br />
            journey to the
            <br />
            career you
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cdbdff] to-[#00daf3]">
              deserve.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed mb-12">
            Join thousands of students already conquering their career path with
            Invikt.
          </p>

          <div className="space-y-5">
            <FeatureItem text="Personalized Career Roadmaps" />
            <FeatureItem text="Job Application Tracker" />
            <FeatureItem text="AI-Powered Career Intelligence" />
          </div>
        </div>
      </div>
      <div className="text-[0.65rem] tracking-[0.2em] font-black text-slate-400 dark:text-white/30 uppercase mt-auto pt-12">
        © 2026 INVIKT. CONQUER YOUR CAREER.
      </div>
    </div>
  );

  return (
    <AuthLayout leftContent={leftContent}>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          Create your account
        </h2>
        <p className="text-sm text-slate-500 dark:text-white/50 mb-8">
          Free forever. No credit card required.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center justify-center py-3 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 transition-colors text-sm font-semibold text-slate-900 dark:text-white">
            <GoogleIcon />
            Google
          </button>
          <button className="flex items-center justify-center py-3 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 transition-colors text-sm font-semibold text-slate-900 dark:text-white">
            <GitHubIcon />
            GitHub
          </button>
        </div>

        <div className="relative flex items-center mb-8">
          <div className="flex-grow border-t border-slate-200 dark:border-white/5"></div>
          <span className="flex-shrink-0 mx-4 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-white/30">
            Or continue with email
          </span>
          <div className="flex-grow border-t border-slate-200 dark:border-white/5"></div>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-white/60">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Carter"
              className="w-full bg-slate-50 dark:bg-[#1c1d22]/50 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-[14px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/20 focus:outline-none focus:border-primary/45 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-white/60">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-slate-50 dark:bg-[#1c1d22]/50 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-[14px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/20 focus:outline-none focus:border-primary/45 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-white/60">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-slate-50 dark:bg-[#1c1d22]/50 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-[14px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/20 focus:outline-none focus:border-primary/45 transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/30 hover:text-slate-600 dark:text-white/70"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-white/60">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-slate-50 dark:bg-[#1c1d22]/50 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-[14px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/20 focus:outline-none focus:border-primary/45 transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/30 hover:text-slate-600 dark:text-white/70"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {showConfirmPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#814df3] to-[#5d21df] text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(93,33,223,0.4)] transition-all mt-4"
          >
            Create Free Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-white/50">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-slate-900 dark:text-white font-bold hover:text-primary-container transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] text-slate-400 dark:text-white/30 leading-relaxed max-w-xs mx-auto">
            By joining, you agree to our{" "}
            <a
              href="#"
              className="underline hover:text-slate-500 dark:text-white/50"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline hover:text-slate-500 dark:text-white/50"
            >
              Privacy Policy
            </a>
            . We prioritize your data ethics and AI transparency.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
