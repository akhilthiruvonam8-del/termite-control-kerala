import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { X, Shield } from 'lucide-react';

// Dedicated Kochi Redesign Landing Page
import KochiLandingPage from './pages/KochiLandingPage';

// Other District Landing Pages
import KozhikodeLandingPage from './pages/KozhikodeLandingPage';
import PalakkadLandingPage from './pages/PalakkadLandingPage';
import ThrissurLandingPage from './pages/ThrissurLandingPage';
import PathanamthittaLandingPage from './pages/PathanamthittaLandingPage';
import AlappuzhaLandingPage from './pages/AlappuzhaLandingPage';
import WayanadLandingPage from './pages/WayanadLandingPage';
import KasaragodLandingPage from './pages/KasaragodLandingPage';
import KollamLandingPage from './pages/KollamLandingPage';
import DistrictLandingPage from './pages/DistrictLandingPage';

// Shared Components & Modals
import CostCalculatorModal from './components/CostCalculatorModal';
import LeadManagerModal from './components/LeadManagerModal';
import LeadForm from './components/LeadForm';
import { DISTRICTS } from './data/districts';

/**
 * Scroll to top automatically whenever the route changes
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

/**
 * Main Application Shell with Modal Handlers
 */
function AppContent() {
  const [leadModalState, setLeadModalState] = useState({ open: false, initialData: {} });
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);

  const openLeadModal = (initialData = {}) => {
    setLeadModalState({ open: true, initialData });
  };

  const closeLeadModal = () => {
    setLeadModalState({ open: false, initialData: {} });
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-[#020d08] text-slate-100 overflow-x-hidden">
      <ScrollToTop />

      {/* Main Routes */}
      <div className="flex-grow w-full flex flex-col">
        <Routes>
          {/* Default Root / Home — Premium Termite Control Kochi Redesign */}
          <Route 
            path="/" 
            element={
              <KochiLandingPage 
                onOpenInspectionModal={openLeadModal}
                onOpenCrmModal={() => setCrmModalOpen(true)}
                onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
              />
            } 
          />

          {/* Kochi Alias Slugs */}
          <Route 
            path="/termite-control-kochi" 
            element={
              <KochiLandingPage 
                onOpenInspectionModal={openLeadModal}
                onOpenCrmModal={() => setCrmModalOpen(true)}
                onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/kochi" 
            element={
              <KochiLandingPage 
                onOpenInspectionModal={openLeadModal}
                onOpenCrmModal={() => setCrmModalOpen(true)}
                onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/termite-control-ernakulam" 
            element={
              <KochiLandingPage 
                onOpenInspectionModal={openLeadModal}
                onOpenCrmModal={() => setCrmModalOpen(true)}
                onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/ernakulam" 
            element={
              <KochiLandingPage 
                onOpenInspectionModal={openLeadModal}
                onOpenCrmModal={() => setCrmModalOpen(true)}
                onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
              />
            } 
          />

          {/* Kozhikode Landing Page */}
          <Route 
            path="/termite-control-kozhikode" 
            element={
              <KozhikodeLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Kozhikode' })} 
              />
            } 
          />

          {/* Palakkad Landing Page */}
          <Route 
            path="/termite-control-palakkad" 
            element={
              <PalakkadLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Palakkad' })} 
              />
            } 
          />

          {/* Thrissur Landing Page */}
          <Route 
            path="/termite-control-thrissur" 
            element={
              <ThrissurLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Thrissur' })} 
              />
            } 
          />

          {/* Pathanamthitta Landing Page */}
          <Route 
            path="/termite-control-pathanamthitta" 
            element={
              <PathanamthittaLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Pathanamthitta' })} 
              />
            } 
          />

          {/* Alappuzha Landing Page */}
          <Route 
            path="/termite-control-alappuzha" 
            element={
              <AlappuzhaLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Alappuzha' })} 
              />
            } 
          />

          {/* Wayanad Landing Page */}
          <Route 
            path="/termite-control-wayanad" 
            element={
              <WayanadLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Wayanad' })} 
              />
            } 
          />

          {/* Kasaragod Landing Page */}
          <Route 
            path="/termite-control-kasaragod" 
            element={
              <KasaragodLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Kasaragod' })} 
              />
            } 
          />

          {/* Kollam Landing Page */}
          <Route 
            path="/termite-control-kollam" 
            element={
              <KollamLandingPage 
                onOpenLeadModal={openLeadModal} 
                onOpenInspectionModal={() => openLeadModal({ location: 'Kollam' })} 
              />
            } 
          />

          {/* Fallback to Kochi Landing Page */}
          <Route 
            path="*" 
            element={
              <KochiLandingPage 
                onOpenInspectionModal={openLeadModal}
                onOpenCrmModal={() => setCrmModalOpen(true)}
                onOpenCalculatorModal={() => setCalculatorModalOpen(true)}
              />
            } 
          />
        </Routes>
      </div>

      {/* MODAL 1: Free On-Site Inspection Lead Modal */}
      {leadModalState.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#03150e] border border-emerald-500/40 rounded-3xl max-w-lg w-full p-2 relative shadow-2xl max-h-[95vh] overflow-y-auto">
            <button
              onClick={closeLeadModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-emerald-950/80 text-slate-300 hover:text-white border border-emerald-700/50 flex items-center justify-center transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <LeadForm
              title={leadModalState.initialData.title || "FREE ON-SITE INSPECTION"}
              subtitle={leadModalState.initialData.subtitle || "Zero-obligation survey across Kochi & Greater Ernakulam"}
              defaultLocation={leadModalState.initialData.location || "Kochi (Kakkanad / Marine Drive)"}
              defaultProblem={leadModalState.initialData.problem || "Termite"}
              defaultProperty={leadModalState.initialData.propertyType || "Villa"}
              source="kochi_modal"
              onSuccess={() => {
                setTimeout(() => {
                  // Keep open briefly so user sees the reference ID
                }, 2000);
              }}
            />
          </div>
        </div>
      )}

      {/* MODAL 2: Interactive Treatment Cost Estimator */}
      <CostCalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        initialData={{ location: 'Kochi' }}
      />

      {/* MODAL 3: Embedded CRM Database Lead Viewer for Admin */}
      <LeadManagerModal
        isOpen={crmModalOpen}
        onClose={() => setCrmModalOpen(false)}
      />

    </div>
  );
}

/**
 * Root Router Wrapper
 */
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
