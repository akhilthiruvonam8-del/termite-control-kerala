import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
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
    authNotice,
    setAuthNotice,
  } = useApp();

  return (
    <div className="min-h-screen bg-[#FAF8F2] flex flex-col font-sans selection:bg-[#D6AD55] selection:text-[#0C3423] text-[#11291D] overflow-x-hidden w-full max-w-full">
      {/* Global Auth Status Toast */}
      {authNotice && (
        <aside
          aria-live="polite"
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border text-xs sm:text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-200 max-w-md w-[92%] sm:w-auto bg-slate-900 text-white border-slate-700"
        >
          {authNotice.type === 'success' ? (
            <CheckCircle2 size={18} className="text-[#D6AD55] shrink-0" />
          ) : (
            <AlertCircle size={18} className="text-rose-400 shrink-0" />
          )}
          <span className="flex-1">{authNotice.message}</span>
          <button
            onClick={() => setAuthNotice(null)}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={14} />
          </button>
        </aside>
      )}

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
