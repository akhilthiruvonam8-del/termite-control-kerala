import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import HomePage from './pages/HomePage';
import KozhikodeLandingPage from './pages/KozhikodeLandingPage';
import PalakkadLandingPage from './pages/PalakkadLandingPage';
import ThrissurLandingPage from './pages/ThrissurLandingPage';
import PathanamthittaLandingPage from './pages/PathanamthittaLandingPage';
import AlappuzhaLandingPage from './pages/AlappuzhaLandingPage';
import DistrictLandingPage from './pages/DistrictLandingPage';
import CostCalculatorModal from './components/CostCalculatorModal';
import LeadManagerModal from './components/LeadManagerModal';
import LeadForm from './components/LeadForm';
import { DISTRICTS } from './data/districts';
import { X, Shield } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [leadModalState, setLeadModalState] = useState({ open: false, initialData: {} });
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);

  // Sync route on popstate (browser back / forward)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path) => {
    if (path.startsWith('/#')) {
      const hash = path.substring(1);
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLeadModal = (initialData = {}) => {
    setLeadModalState({ open: true, initialData });
  };

  const closeLeadModal = () => {
    setLeadModalState({ open: false, initialData: {} });
  };

  // Determine which page to render based on URL slug
  const renderCurrentPage = () => {
    const cleanPath = currentPath.replace(/^\/|\/$/g, '');

    // Alappuzha Dedicated Master Landing Page (6 Municipalities, 12 Blocks, 72 Panchayats)
    const alappuzhaTowns = [
      'alappuzha', 'alleppey', 'cherthala', 'chengannur', 'kayamkulam', 
      'mavelikara', 'harippad', 'haripad', 'kuttanad', 'kainakary', 
      'champakkulam', 'edathua', 'nedumudi', 'thakazhy', 'thalavady', 
      'kavalam', 'pulincunnu', 'veliyanad', 'aroor', 'mararikkulam', 
      'thanneermukkam', 'ambalappuzha', 'punnapra', 'purakkad', 'mannanchery',
      'muhamma', 'muthukulam', 'chettikulangara', 'mannar', 'nooranad', 'vallikunnam'
    ];
    const isAlappuzhaRoute = 
      alappuzhaTowns.some(town => cleanPath === `termite-control-${town}` || cleanPath === `termite-control/${town}` || cleanPath === town || cleanPath === `locations/${town}` || cleanPath === `locations/${town}/`) ||
      cleanPath === 'termite-control-alappuzha' ||
      cleanPath.startsWith('termite-control/alappuzha') ||
      cleanPath.startsWith('locations/alappuzha') ||
      cleanPath.startsWith('termite-control-alappuzha/');

    if (isAlappuzhaRoute) {
      return (
        <AlappuzhaLandingPage
          onOpenLeadModal={openLeadModal}
          onOpenInspectionModal={() => openLeadModal({ location: 'Alappuzha District' })}
        />
      );
    }

    // Kozhikode Priority Landing Page
    if (cleanPath === 'termite-control-kozhikode' || cleanPath === 'kozhikode' || cleanPath === 'termite-control/kozhikode') {
      return (
        <KozhikodeLandingPage
          onOpenLeadModal={openLeadModal}
          onOpenInspectionModal={() => openLeadModal({ location: 'Kozhikode (Pavamani Rd / Palayam)' })}
        />
      );
    }

    // Palakkad Dedicated Landing Page
    if (cleanPath === 'termite-control-palakkad' || cleanPath === 'palakkad' || cleanPath === 'termite-control/palakkad') {
      return (
        <PalakkadLandingPage
          onOpenLeadModal={openLeadModal}
          onOpenInspectionModal={() => openLeadModal({ location: 'Palakkad District' })}
        />
      );
    }

    // Thrissur Dedicated Landing Page
    if (cleanPath === 'termite-control-thrissur' || cleanPath === 'termite-control-trissur' || cleanPath === 'thrissur' || cleanPath === 'trissur' || cleanPath === 'termite-control/thrissur' || cleanPath === 'termite-control/trissur') {
      return (
        <ThrissurLandingPage
          onOpenLeadModal={openLeadModal}
          onOpenInspectionModal={() => openLeadModal({ location: 'Thrissur District (Kuttoor/Pamboor)' })}
        />
      );
    }

    // Pathanamthitta Dedicated Landing Page (District + Sub-Towns & NRI Villa Belts)
    const pathanamthittaTowns = [
      'pathanamthitta', 'pathanam-thitta', 'adoor', 'thiruvalla', 'ranni', 
      'pandalam', 'konni', 'kozhencherry', 'kozhancherry', 'mallappally', 
      'aranmula', 'kumbanad', 'pullad', 'kulanada', 'mezhuveli'
    ];
    const isPathanamthittaRoute = 
      pathanamthittaTowns.some(town => cleanPath === `termite-control-${town}` || cleanPath === `termite-control/${town}` || cleanPath === town) ||
      cleanPath.startsWith('termite-control/pathanamthitta/') ||
      cleanPath.startsWith('termite-control-pathanamthitta/');

    if (isPathanamthittaRoute) {
      return (
        <PathanamthittaLandingPage
          onOpenLeadModal={openLeadModal}
          onOpenInspectionModal={() => openLeadModal({ location: 'Pathanamthitta District (Mezhuveli / Thiruvalla)' })}
        />
      );
    }

    // Check if path matches any other Kerala district
    const matchingDistrict = DISTRICTS.find(
      d => d.slug === cleanPath || d.id === cleanPath
    );

    if (matchingDistrict) {
      return (
        <DistrictLandingPage
          district={matchingDistrict}
          onOpenInspectionModal={() => openLeadModal({ location: `${matchingDistrict.name} District` })}
        />
      );
    }

    // Default Home Page
    return (
      <HomePage
        onNavigate={navigate}
        onOpenLeadModal={openLeadModal}
        onOpenInspectionModal={() => openLeadModal({})}
      />
    );
  };

  // Determine current location context for WhatsApp / sticky bar
  let currentLocationContext = 'Kerala';
  if (currentPath.includes('alappuzha') || currentPath.includes('alleppey') || currentPath.includes('cherthala') || currentPath.includes('chengannur') || currentPath.includes('kayamkulam') || currentPath.includes('mavelikara') || currentPath.includes('harippad')) {
    currentLocationContext = 'Alappuzha';
  } else if (currentPath.includes('kozhikode')) {
    currentLocationContext = 'Kozhikode';
  } else if (currentPath.includes('palakkad')) {
    currentLocationContext = 'Palakkad';
  } else if (currentPath.includes('thrissur') || currentPath.includes('trissur')) {
    currentLocationContext = 'Thrissur';
  } else if (currentPath.includes('pathanamthitta') || currentPath.includes('pathanam-thitta')) {
    currentLocationContext = 'Pathanamthitta';
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Global Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenLeadModal={() => openLeadModal({})}
        onOpenCrmModal={() => setCrmModalOpen(true)}
      />

      {/* 2. Main Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* 3. Global Footer */}
      <Footer
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenCrmModal={() => setCrmModalOpen(true)}
      />

      {/* 4. Sticky Bottom Action Bar for Mobile Visitors */}
      <StickyMobileBar
        onOpenLeadModal={() => openLeadModal({})}
        locationContext={currentLocationContext}
      />

      {/* MODAL 1: Free Inspection / Quick Lead Modal */}
      {leadModalState.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-2 relative shadow-2xl max-h-[95vh] overflow-y-auto">
            <button
              onClick={closeLeadModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <LeadForm
              title={leadModalState.initialData.title || "REQUEST TERMITE INSPECTION"}
              subtitle="Free on-site assessment across all Kerala districts"
              defaultLocation={leadModalState.initialData.location || (currentPath.includes('alappuzha') ? 'Alappuzha District' : (currentPath.includes('kozhikode') ? 'Kozhikode (Pavamani Rd)' : ''))}
              defaultProblem={leadModalState.initialData.problem || ''}
              defaultProperty={leadModalState.initialData.propertyType || ''}
              source="popup_inspection_modal"
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
        initialData={{ location: currentLocationContext }}
      />

      {/* MODAL 3: Embedded CRM Database Lead Viewer for Admin */}
      <LeadManagerModal
        isOpen={crmModalOpen}
        onClose={() => setCrmModalOpen(false)}
      />

    </div>
  );
}
