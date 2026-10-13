import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import AuthModal from './components/AuthModal';

// Pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import PostPropertyPage from './pages/PostPropertyPage';
import UserAccountPage from './pages/UserAccountPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function AppContent() {
  const {
    currentPage,
    authModalOpen,
    setAuthModalOpen,
    setUser,
  } = useApp();

  return (
    <div className="min-h-screen bg-[#FAF8F2] flex flex-col font-sans selection:bg-[#D6AD55] selection:text-[#0C3423] text-[#11291D] overflow-x-hidden w-full max-w-full">
      {/* Top Responsive Navigation */}
      <Navbar />

      {/* Main Page Content based on active state */}
      <main className="flex-grow w-full overflow-x-hidden">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'search' && <SearchPage />}
        {currentPage === 'details' && <PropertyDetailPage />}
        {currentPage === 'post' && <PostPropertyPage />}
        {currentPage === 'account' && <UserAccountPage />}
        {currentPage === 'admin' && <AdminDashboardPage />}
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Navigation */}
      <MobileBottomNav />

      {/* Global Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(loggedInUser) => setUser(loggedInUser)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
