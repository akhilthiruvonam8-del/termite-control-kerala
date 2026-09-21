import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Executive Floating Navbar & Grand Footer
import BOCNavbar from './components/BOCNavbar';
import BOCFooter from './components/BOCFooter';
import BOCJoinModal from './components/BOCJoinModal';
import FloatingActionButtons from './components/FloatingActionButtons';

// Dedicated Platform Pages
import HomePage from './pages/HomePage';
import MemberDirectoryPage from './pages/MemberDirectoryPage';
import ChaptersPage from './pages/ChaptersPage';
import MembershipPage from './pages/MembershipPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import AboutPage from './pages/AboutPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

/**
 * Scroll to top automatically whenever the route path changes
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

/**
 * Master Application Content Wrapped in Router Context
 */
function AppContent() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#C9A227] selection:text-[#041126] overflow-x-hidden bg-[#020712] text-slate-100">
      <ScrollToTop />

      {/* Floating Executive Luxury Navbar */}
      <BOCNavbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Multi-Page Routes */}
      <div className="flex-grow flex flex-col">
        <Routes>
          {/* Main Master Landing Portal (All 14 Modules) */}
          <Route 
            path="/" 
            element={<HomePage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Searchable Member Directory (Brief Point 11 & 12) */}
          <Route 
            path="/members" 
            element={<MemberDirectoryPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Regional Chapter Explorer (Brief Point 13 & 14) */}
          <Route 
            path="/chapters" 
            element={<ChaptersPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Membership Tiers & Privileges (Brief Point 6) */}
          <Route 
            path="/membership" 
            element={<MembershipPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Events Hub & Conclaves (Brief Point 9) */}
          <Route 
            path="/events" 
            element={<EventsPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Dedicated Event Detail Page (Brief Point 10) */}
          <Route 
            path="/events/:id" 
            element={<EventDetailPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* About BOC, Vision & Leadership (Brief Point 5) */}
          <Route 
            path="/about" 
            element={<AboutPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Member Success Stories & ROI Case Studies (Brief Point 20) */}
          <Route 
            path="/success-stories" 
            element={<SuccessStoriesPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Frequently Asked Questions (FAQ) */}
          <Route 
            path="/faq" 
            element={<FAQPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />

          {/* Member Login Portal (Brief Point 8) */}
          <Route 
            path="/login" 
            element={<LoginPage />} 
          />

          {/* Comprehensive Multi-Step Registration (Brief Point 7) */}
          <Route 
            path="/register" 
            element={<RegisterPage />} 
          />

          {/* Member Dashboard & Referral Protocol (Brief Point 9, 10, 18, 19) */}
          <Route 
            path="/dashboard" 
            element={<DashboardPage />} 
          />

          {/* Fallback route */}
          <Route 
            path="*" 
            element={<HomePage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} 
          />
        </Routes>
      </div>

      {/* Executive Master Grand Footer */}
      <BOCFooter onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Global Floating Action Buttons (Scroll to Top, WhatsApp, Call) — Visible across all modules */}
      <FloatingActionButtons />

      {/* Interactive Membership Application Modal */}
      <BOCJoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </div>
  );
}

/**
 * Root Application Component
 */
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
