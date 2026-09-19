import React, { useState } from 'react';
import BOCHero from './components/BOCHero';
import BOCWhyBOC from './components/BOCWhyBOC';
import BOCHowItWorks from './components/BOCHowItWorks';
import BOCMembershipBenefits from './components/BOCMembershipBenefits';
import BOCFeaturedMembers from './components/BOCFeaturedMembers';
import BOCBusinessCategories from './components/BOCBusinessCategories';
import BOCChapters from './components/BOCChapters';
import BOCEvents from './components/BOCEvents';
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
      
      {/* Main Experience: Hero + Why BOC + How It Works + Membership Benefits + Featured Members + Business Categories + BOC Chapters */}
      <main className="flex-grow flex flex-col items-center justify-center bg-[#020712]">
        <BOCHero 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 1: Why Business Owner's Circle? */}
        <BOCWhyBOC 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 2: How It Works — The BOC Journey */}
        <BOCHowItWorks 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 3: Membership Benefits (More Connections, More Opportunities, More Growth) */}
        <BOCMembershipBenefits 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 4: Featured Members (Meet Our Valued Members) */}
        <BOCFeaturedMembers 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 5: Business Categories (Connect Across Industries. Create New Opportunities.) */}
        <BOCBusinessCategories 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 6: BOC Chapters (Growing Together, Chapter by Chapter.) */}
        <BOCChapters 
          onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        />

        {/* Module 7: BOC Events (Upcoming Events: Learn. Network. Collaborate. Grow.) */}
        <BOCEvents 
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
