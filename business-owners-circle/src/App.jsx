import React, { useState } from 'react';
import BOCHero from './components/BOCHero';
import BOCJoinModal from './components/BOCJoinModal';

/**
 * Business Owner's Circle (BOC) — Kochi, Kerala
 * Executive Web Experience
 * Hero Viewport Active (Matches media_1789641252571.jpg 1:1)
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
      </main>

      {/* Interactive Membership Application Modal */}
      <BOCJoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </div>
  );
}
