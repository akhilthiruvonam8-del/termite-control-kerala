import React from 'react';
import BOCMemberSuccessStories from '../components/BOCMemberSuccessStories';
import BOCJoinToday from '../components/BOCJoinToday';

/**
 * SuccessStoriesPage — Dedicated Member ROI & Success Showcase
 * Displays peer-verified case studies with real photos and documented business turnover.
 */
export default function SuccessStoriesPage({ onOpenJoinModal }) {
  return (
    <main className="flex-grow flex flex-col bg-[#020712] w-full max-w-full overflow-x-hidden relative pt-16 sm:pt-20">
      {/* Complete Module 20: Member Success Stories */}
      <BOCMemberSuccessStories onOpenJoinModal={onOpenJoinModal} />

      {/* Direct Application CTA */}
      <BOCJoinToday onOpenJoinModal={onOpenJoinModal} />
    </main>
  );
}
