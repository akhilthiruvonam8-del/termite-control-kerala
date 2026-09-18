import React, { useState } from 'react';
import BOCHero from './components/BOCHero';
import BOCWhyBOC from './components/BOCWhyBOC';
import BOCMembershipBenefits from './components/BOCMembershipBenefits';
import BOCHowItWorks from './components/BOCHowItWorks';
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
      
      {/* Main Experience: Hero + Why BOC + Membership Benefits + How It Works Journey */}
      <main className="flex-grow flex flex-col items-center justify-center bg-[#020712]">
        <BOCHero 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 1: Why Business Owner's Circle? */}
        <BOCWhyBOC 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 2: Membership Benefits (More Connections, More Opportunities, More Growth) */}
        <BOCMembershipBenefits 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 3: How It Works — The BOC Journey */}
        <BOCHowItWorks 
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
