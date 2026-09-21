import React from 'react';
import BOCHero from '../components/BOCHero';
import BOCWhyBOC from '../components/BOCWhyBOC';
import BOCHowItWorks from '../components/BOCHowItWorks';
import BOCMembershipBenefits from '../components/BOCMembershipBenefits';
import BOCFeaturedMembers from '../components/BOCFeaturedMembers';
import BOCBusinessCategories from '../components/BOCBusinessCategories';
import BOCChapters from '../components/BOCChapters';
import BOCEvents from '../components/BOCEvents';
import BOCNetworkingReferrals from '../components/BOCNetworkingReferrals';
import BOCMemberSuccessStories from '../components/BOCMemberSuccessStories';
import BOCGlobalExpansion from '../components/BOCGlobalExpansion';
import BOCFAQ from '../components/BOCFAQ';
import BOCJoinToday from '../components/BOCJoinToday';

/**
 * HomePage — Complete 14-Module Luxury Business Networking Portal
 */
export default function HomePage({ onOpenJoinModal }) {
  return (
    <main className="flex-grow flex flex-col items-center justify-center bg-[#020712] w-full">
      {/* Hero Showcase */}
      <BOCHero onOpenJoinModal={onOpenJoinModal} />

      {/* Module 1: Why Business Owner's Circle? */}
      <BOCWhyBOC onOpenJoinModal={onOpenJoinModal} />

      {/* Module 2: How It Works — The BOC Journey */}
      <BOCHowItWorks onOpenJoinModal={onOpenJoinModal} />

      {/* Module 3: Membership Benefits */}
      <BOCMembershipBenefits onOpenJoinModal={onOpenJoinModal} />

      {/* Module 4: Featured Members */}
      <BOCFeaturedMembers onOpenJoinModal={onOpenJoinModal} />

      {/* Module 5: Business Categories */}
      <BOCBusinessCategories onOpenJoinModal={onOpenJoinModal} />

      {/* Module 6: BOC Chapters */}
      <BOCChapters onOpenJoinModal={onOpenJoinModal} />

      {/* Module 7: Upcoming Events */}
      <BOCEvents onOpenJoinModal={onOpenJoinModal} />

      {/* Module 8: Networking & Referrals */}
      <BOCNetworkingReferrals onOpenJoinModal={onOpenJoinModal} />

      {/* Module 9: Member Success Stories */}
      <BOCMemberSuccessStories onOpenJoinModal={onOpenJoinModal} />

      {/* Module 10: Global Expansion */}
      <BOCGlobalExpansion onOpenJoinModal={onOpenJoinModal} />

      {/* Module 11: Frequently Asked Questions */}
      <BOCFAQ onOpenJoinModal={onOpenJoinModal} />

      {/* Module 12: Join BOC Today CTA */}
      <BOCJoinToday onOpenJoinModal={onOpenJoinModal} />
    </main>
  );
}
