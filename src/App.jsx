import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ResumeAnalyzerPage from './pages/ResumeAnalyzerPage';
import SkillGapPage from './pages/SkillGapPage';
import CareerPathPage from './pages/CareerPathPage';
import LearningHubPage from './pages/LearningHubPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
        
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="resume" element={<ResumeAnalyzerPage />} />
          <Route path="skill-gap" element={<SkillGapPage />} />
          <Route path="career-path" element={<CareerPathPage />} />
          <Route path="learning-hub" element={<LearningHubPage />} />
          
          {/* Catch-all redirect to Dashboard if the path is unknown but within authenticated layout bounds (mock implementation) */}
          <Route path="settings" element={<Navigate to="/dashboard" replace />} />
          <Route path="support" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
