import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-[#14151a]">
        <div className="w-12 h-12 border-4 border-slate-200 dark:border-white/10 border-t-violet-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 dark:text-white/40 text-sm font-medium animate-pulse">Authenticating...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
