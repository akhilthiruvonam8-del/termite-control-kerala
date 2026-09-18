import React, { useState } from 'react';
import BOCHero from './components/BOCHero';
import BOCWhatIsBOC from './components/BOCWhatIsBOC';
import BOCWhyJoinMembership from './components/BOCWhyJoinMembership';
import BOCMicroFooter from './components/BOCMicroFooter';
import BOCJoinModal from './components/BOCJoinModal';

/**
 * Business Owner's Circle (BOC) — Executive Web Platform
 * Master Application Root
 */
export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen flex flex-col font-sans selection:bg-[#C9A227] selection:text-[#041126] overflow-x-hidden bg-[#020712] text-slate-100">
      
      {/* 1:1 Unified Master Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center bg-[#020712]">
        <BOCHero 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 1: What is BOC? (About BOC / Ecosystem & 4 Pillars) */}
        <BOCWhatIsBOC 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 2: Why Join BOC? & Executive Membership Plans */}
        <BOCWhyJoinMembership 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />
      </main>

      {/* Luxury Micro Footer */}
      <BOCMicroFooter />

      {/* Interactive Membership Application Modal */}
      <BOCJoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </div>
  );
}
