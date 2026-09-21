import React from 'react';
import BOCFAQ from '../components/BOCFAQ';
import BOCJoinToday from '../components/BOCJoinToday';

/**
 * FAQPage — Dedicated Frequently Asked Questions & Membership Clarity Portal
 */
export default function FAQPage({ onOpenJoinModal }) {
  return (
    <main className="flex-grow flex flex-col bg-[#020712] w-full pt-16 sm:pt-20">
      {/* Complete Module: Frequently Asked Questions */}
      <BOCFAQ onOpenJoinModal={onOpenJoinModal} />

      {/* Final Application CTA */}
      <BOCJoinToday onOpenJoinModal={onOpenJoinModal} />
    </main>
  );
}
