"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import AdminLayout from "@/layouts/AdminLayout";

export default function AdminGroupLayout({ children }) {
  const { isAuthenticated, loading, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace(`/signin?from=${encodeURIComponent(pathname)}`);
    }
  }, [isAuthenticated, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-[#14151a]">
        <div className="w-12 h-12 border-4 border-slate-200 dark:border-white/10 border-t-violet-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 dark:text-white/40 text-sm font-medium animate-pulse">
          Authenticating...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <AdminLayout>{children}</AdminLayout>;
}
