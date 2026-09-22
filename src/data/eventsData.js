import financialProsperityFlyer from '../assets/boc-event-financial-prosperity.jpg';
import bocInvitationFlyer from '../assets/boc-event-invitation.png';
import networkingImg from '../assets/boc-event-networking.jpg';
import seminarImg from '../assets/boc-event-seminar.jpg';
import retreatImg from '../assets/boc-event-retreat.jpg';
import brandingImg from '../assets/boc-event-branding.jpg';
import nidhiPhoto from '../assets/boc-member-nidhi-tomer.jpg';

export const eventsData = [
  // ===========================================================================
  // UPCOMING EVENT 1 (Featured: Financial Prosperity - Feb 28, 2025)
  // ===========================================================================
  {
    id: 'financial-prosperity',
    isUpcoming: false,
    title: 'Financial Prosperity — Elevate Your Business, Elevate Your Life',
    subtitle: 'Aigerpeak LLP Company Presents || Special Business Growth Conclave',
    image: financialProsperityFlyer,
    banner: financialProsperityFlyer,
    date: 'Friday, Feb 28, 2025',
    time: '4:00 PM – 6:00 PM IST',
    location: 'Aigerpeak Executive Lounge, Bolgatty Island, Kochi',
    venue: 'Aigerpeak Executive Conclave Suite',
    city: 'Kochi',
    type: 'Wealth & Business Masterclass',
    registrationStatus: 'Completed / Concluded',
    spotsLeft: 14,
    shortDescription: 'Discover actionable strategies for stock investment, capital growth, debt elimination, personal & business credit scoring, and building real estate assets.',
    fullDescription: 'Presented by Aigerpeak LLP Company in association with Business Owners Circle (BOC), this high-impact executive seminar is curated specifically for entrepreneurs, SMEs, and business leaders who want to master wealth accumulation, corporate debt restructuring, and strategic capital allocation. Learn how high-net-worth founders optimize balance sheets, scale business reserves, and build long-term generational assets.',
    agenda: [
      {
        time: '3:45 PM – 4:00 PM',
        title: 'Executive Registration & Networking',
        desc: 'Delegate check-in, distribution of seminar briefing folders, and informal 1-on-1 introductions over gourmet coffee.'
      },
      {
        time: '4:00 PM – 4:35 PM',
        title: 'Investment in Stocks & Growing Corporate Savings',
        desc: 'Practical frameworks for managing surplus cash flow, direct equity strategies, and hedging against inflation.'
      },
      {
        time: '4:35 PM – 5:10 PM',
        title: 'Debt Elimination & Building Elite Credit Scores',
        desc: 'Actionable techniques to restructure commercial debt, lower interest liabilities, and achieve top-tier creditworthiness.'
      },
      {
        time: '5:10 PM – 5:40 PM',
        title: 'Strategic Real Estate & Asset Acquisition',
        desc: 'Unlocking tax advantages through property investments, buying commercial facilities, and prime residential acquisitions.'
      },
      {
        time: '5:40 PM – 6:00 PM',
        title: 'Open Mastermind Q&A & Executive Mixer',
        desc: 'Direct Q&A session with special guest speaker Roopesh Pathalil followed by collaborative partner discussions.'
      }
    ],
    speakers: [
      {
        name: 'Roopesh Pathalil',
        role: 'Special Guest & Keynote Wealth Strategist',
        company: 'Financial Growth Consultant',
        photo: financialProsperityFlyer,
        bio: 'Renowned personal and corporate wealth mentor helping hundreds of business owners eliminate bad debt, optimize credit instruments, and deploy surplus capital into high-yield equity and real estate vehicles.'
      }
    ],
    sponsors: [
      {
        name: 'Aigerpeak LLP Company',
        tier: 'Title Presenter & Corporate Sponsor',
        role: 'Leading business transformation and financial advisory enterprise.'
      },
      {
        name: 'Business Owners Circle (BOC)',
        tier: 'Official Networking Platform',
        role: 'Empower Together — Category-exclusive business referral ecosystem.'
      }
    ],
    mapLocation: {
      address: 'Aigerpeak Executive Lounge, Bolgatty Palace Road, Mulavukad, Kochi, Kerala 682504',
      landmark: 'Near Grand Hyatt Kochi Bolgatty',
      googleMapsUrl: 'https://maps.google.com/?q=Grand+Hyatt+Kochi+Bolgatty'
    },
    contactInfo: {
      helpline: '9847040009',
      phone: '+91 98470 40009',
      email: 'events@boc.li',
      website: 'www.boc.li',
      coordinator: 'Roopesh Pathalil / Executive Desk'
    },
    highlights: [
      'Investment In Stocks & Market Tactics',
      'Accelerated Growth of Business Savings',
      'Tactical Framework to Get Out Of Debt',
      'Building Exceptional Corporate Credit Scores',
      'Strategic Real Estate & Buying A House',
      'Exclusive 1-on-1 Advisory Interaction'
    ]
  },

  // ===========================================================================
  // UPCOMING EVENT 2 (Featured: BOC Official Invitation Conclave)
  // ===========================================================================
  {
    id: 'boc-invitation-conclave',
    isUpcoming: false,
    title: 'BOC Official Invitation & Growth Masterclass',
    subtitle: 'Unlock The Full Potential Of Your Business With Zero Competition',
    image: bocInvitationFlyer,
    banner: bocInvitationFlyer,
    date: 'Saturday, March 15, 2025',
    time: '9:00 AM – 1:00 PM IST',
    location: 'Lulu Bolgatty International Convention Centre, Kochi',
    venue: 'Grand Conclave Ballroom',
    city: 'Kochi',
    type: 'Executive Conclave',
    registrationStatus: 'Completed / Concluded',
    spotsLeft: 8,
    shortDescription: 'Gain access to expert-led workshops, category-exclusive referral exchange, and strategic resources to accelerate your enterprise.',
    fullDescription: 'Are you looking to unlock the full potential of your business? Join the Business Owners Circle (BOC) and gain access to expert-led workshops, networking opportunities, and exclusive resources. Our community is dedicated to helping business owners like you achieve their goals and succeed in their industries. We believe that by working together, we can achieve more. Connect now and start achieving your goals.',
    agenda: [
      {
        time: '9:00 AM – 9:45 AM',
        title: 'Executive Breakfast & Welcome Introductions',
        desc: 'Breakfast buffet with peer business founders and designated seating based on strategic synergy clusters.'
      },
      {
        time: '9:45 AM – 10:30 AM',
        title: 'Keynote: Scaling Through High-Trust Networks',
        desc: 'Keynote masterclass by Nidhi Tomer on building unbeatable category moats and zero-competition pipelines.'
      },
      {
        time: '10:30 AM – 11:45 AM',
        title: 'Structured 1-on-1 Synergy Roundtables',
        desc: 'Pre-matched, dedicated 8-minute mastermind introductions with verified founders in complementary verticals.'
      },
      {
        time: '11:45 AM – 12:45 PM',
        title: 'Warm Referral Exchanges & Joint Ventures',
        desc: 'Live passing of pre-qualified business leads, supplier introductions, and institutional project collaborations.'
      },
      {
        time: '12:45 PM – 1:00 PM',
        title: 'Admissions Desk & Membership Enrollment',
        desc: 'Private interviews for eligible guest business owners seeking category reservation in their local chapters.'
      }
    ],
    speakers: [
      {
        name: 'Nidhi Tomer',
        role: 'VP - Business Strategist || BOC',
        company: 'Business Owners Circle',
        photo: nidhiPhoto,
        phone: '9037710600 || 95734 32196',
        email: 'connect@boc.li',
        bio: 'Senior strategist spearheading regional business chapter expansion, entrepreneur admissions, and inter-chapter commercial trade agreements across South India and the GCC.'
      }
    ],
    sponsors: [
      {
        name: 'Business Owners Circle (BOC)',
        tier: 'Community Host',
        role: 'Circle of Success — Empower Together.'
      },
      {
        name: 'BOC Kerala Executive Council',
        tier: 'Chapter Governance',
        role: 'Zero Competition category protection across 14 Kerala districts.'
      }
    ],
    mapLocation: {
      address: 'Lulu Bolgatty International Convention Centre, Bolgatty, Kochi, Kerala 682504',
      landmark: 'Mulavukad / Marine Drive Waterfront Area',
      googleMapsUrl: 'https://maps.google.com/?q=Lulu+Bolgatty+International+Convention+Centre'
    },
    contactInfo: {
      helpline: '9037710600',
      phone: '+91 90377 10600 / +91 95734 32196',
      email: 'connect@boc.li',
      website: 'www.boc.li',
      coordinator: 'Nidhi Tomer (VP - Business Strategist)'
    },
    highlights: [
      'Strict Category Exclusivity for Invited Guests',
      'Direct Introductions to Verified Decision-Makers',
      'Collaborative Business Growth Masterclass',
      'VIP Networking Luncheon Included',
      'Official BOC Welcome Package'
    ]
  },

  // ===========================================================================
  // UPCOMING EVENT 3: Kerala Business Leaders Conclave & Summit
  // ===========================================================================
  {
    id: 'kerala-business-leaders-summit',
    isUpcoming: false,
    title: 'Kerala Business Leaders Conclave & Summit',
    subtitle: 'The Statewide Convergence of 250+ Ambitious Enterprise Founders',
    image: seminarImg,
    banner: seminarImg,
    date: 'Saturday, April 19, 2025',
    time: '9:30 AM – 4:30 PM IST',
    location: 'Grand Hyatt Kochi Bolgatty, Kochi',
    venue: 'Bolgatty Grand Ballroom',
    city: 'Kochi',
    type: 'Summit & Expo',
    registrationStatus: 'Completed / Concluded',
    spotsLeft: 22,
    shortDescription: 'The premier statewide convergence of top entrepreneurs, corporate investors, and family-business founders across South India.',
    fullDescription: 'Join 250+ high-caliber founders, manufacturers, IT innovators, and strategic service leaders from all 14 districts of Kerala. The BOC Annual Summit features plenary addresses from prominent business pioneers, sector-wise syndicate roundtables, and structured trade exchange forums designed to spark multi-crore business deals.',
    agenda: [
      {
        time: '9:30 AM – 10:15 AM',
        title: 'Registration & Welcome Keynote',
        desc: 'Opening address by BOC Governing Board on economic opportunities in Kerala for 2025-2026.'
      },
      {
        time: '10:15 AM – 11:45 AM',
        title: 'Panel: Next-Gen Manufacturing & Technology Export',
        desc: 'Leading industrialists share insights on tapping Middle East, US, and European corridors.'
      },
      {
        time: '12:00 PM – 1:30 PM',
        title: 'Executive Networking Luncheon',
        desc: 'Curated 8-seater tables grouped by business synergy for deep commercial discussions.'
      },
      {
        time: '1:30 PM – 3:30 PM',
        title: 'B2B Referral Matchmaking Showcase',
        desc: 'Interactive presentation where each delegate requests high-value procurement connections.'
      },
      {
        time: '3:30 PM – 4:30 PM',
        title: 'Awards & Evening Cocktail Reception',
        desc: 'Recognizing top referral generators and fastest growing chapter members.'
      }
    ],
    speakers: [
      {
        name: 'BOC State Advisory Board',
        role: 'Keynote Panelists',
        company: 'Business Owners Circle',
        photo: seminarImg,
        bio: 'Distinguished leaders comprising enterprise owners across real estate, manufacturing, IT, healthcare, and finance.'
      }
    ],
    sponsors: [
      {
        name: 'Business Owners Circle',
        tier: 'Grand Host',
        role: 'Empower Together Statewide Network'
      }
    ],
    mapLocation: {
      address: 'Grand Hyatt Kochi Bolgatty, Mulavukad, Kochi, Kerala 682504',
      landmark: 'Bolgatty Island Waterfront',
      googleMapsUrl: 'https://maps.google.com/?q=Grand+Hyatt+Kochi+Bolgatty'
    },
    contactInfo: {
      helpline: '9020040009',
      phone: '+91 90200 40009',
      email: 'events@boc.li',
      website: 'www.boc.li',
      coordinator: 'BOC Central Secretariat'
    },
    highlights: [
      '250+ Verified Business Owners Under One Roof',
      'All-Day Executive Pass with Gourmet Lunch',
      'Pre-Arranged 1-on-1 Dealmaking Rounds',
      'Statewide Business Compendium Feature'
    ]
  },

  // ===========================================================================
  // UPCOMING EVENT 4: Annual Executive Backwater Leadership Retreat
  // ===========================================================================
  {
    id: 'executive-backwater-retreat',
    isUpcoming: false,
    title: 'Annual Executive Backwater Leadership Retreat',
    subtitle: '3-Day Immersive Offsite for 40 Selected Enterprise Leaders',
    image: retreatImg,
    banner: retreatImg,
    date: 'Fri–Sun, May 16–18, 2025',
    time: '3-Day Immersive Offsite',
    location: 'Kumarakom Lake Resort, Kumarakom, Kottayam',
    venue: 'Heritage Waterfront Villas',
    city: 'Kumarakom',
    type: 'Executive Retreat',
    registrationStatus: 'Completed / Concluded',
    spotsLeft: 5,
    shortDescription: 'An intimate, high-impact leadership retreat designed for visionary CEOs to recharge, forge lifelong alliances, and strategize expansion.',
    fullDescription: 'Set amidst the tranquil backwaters of Vembanad Lake, the Annual BOC Executive Retreat provides an exclusive sanctuary for top entrepreneurs to step away from daily operational firefighting. Engage in profound strategic planning, masterclasses with international executive coaches, sunrise wellness sessions, and private lakeside banquet masterminds.',
    agenda: [
      {
        time: 'Day 1 (Friday)',
        title: 'Arrival, Houseboat Synergy Cruise & Welcome Dinner',
        desc: 'Check-in, sunset networking cruise on traditional luxury houseboats, and lakeside barbecue mixer.'
      },
      {
        time: 'Day 2 (Saturday)',
        title: 'Mastermind Sessions & Scaling Blueprints',
        desc: 'Full-day strategic immersion on corporate governance, funding readiness, and executive wellness.'
      },
      {
        time: 'Day 3 (Sunday)',
        title: 'Strategic Alliances & Wrap-up Brunch',
        desc: 'Commitment ceremonies for joint venture consortia followed by a grand farewell champagne brunch.'
      }
    ],
    speakers: [
      {
        name: 'International Executive Coaches',
        role: 'Facilitators & Strategic Mentors',
        company: 'Global Leadership Institute',
        photo: retreatImg,
        bio: 'Seasoned mentors coaching high-growth venture founders across India, Southeast Asia, and Europe.'
      }
    ],
    sponsors: [
      {
        name: 'Kumarakom Lake Resort',
        tier: 'Hospitality Partner',
        role: 'Luxury heritage resort partner.'
      }
    ],
    mapLocation: {
      address: 'Kumarakom Lake Resort, North Post, Kumarakom, Kottayam, Kerala 686563',
      landmark: 'Vembanad Lake Shore',
      googleMapsUrl: 'https://maps.google.com/?q=Kumarakom+Lake+Resort'
    },
    contactInfo: {
      helpline: '9020040009',
      phone: '+91 90200 40009',
      email: 'retreat@boc.li',
      website: 'www.boc.li',
      coordinator: 'BOC Presidential Council'
    },
    highlights: [
      'Luxury Lake Villa Stay & All Meals Included',
      'Private Houseboat Networking Sessions',
      'Strategic 2025–2028 Scale-up Blueprint',
      'Strictly Limited to 40 Enterprise Decision-Makers'
    ]
  },

  // ===========================================================================
  // PREVIOUS EVENT 1 (Concluded)
  // ===========================================================================
  {
    id: 'cochin-founder-roundtable-jan25',
    isUpcoming: false,
    title: 'BOC Cochin Founder Roundtable & Synergy Mixer',
    subtitle: 'Breakfast Networking That Yielded ₹1.4 Cr in Verified Deal Closures',
    image: networkingImg,
    banner: networkingImg,
    date: 'Thursday, Jan 16, 2025',
    time: '7:00 AM – 9:00 AM IST',
    location: 'Crowne Plaza Kochi, Maradu',
    venue: 'Oasis Ballroom',
    city: 'Kochi',
    type: 'Weekly Conclave',
    registrationStatus: 'Completed / Concluded',
    spotsLeft: 0,
    shortDescription: 'Over 85 founders gathered for a breakfast synergy exchange resulting in 22 closed business tie-ups and ₹1.4 Cr in immediate verified transactions.',
    fullDescription: 'The January Cochin Conclave brought together leaders from facility management, pest control, construction EPC, digital technology, legal advisory, and high-end interiors. During this 2-hour power breakfast, members passed 38 pre-qualified referrals and established 4 multi-company consortia.',
    agenda: [
      {
        time: '7:00 AM – 7:30 AM',
        title: 'Open Networking & Executive Breakfast',
        desc: 'Over 85 leaders engaged in warm introductions.'
      },
      {
        time: '7:30 AM – 8:15 AM',
        title: 'Member Spotlights & Category Presentations',
        desc: '10-minute deep-dive by Jijeesh Minerva and Mahesh Prabudhan on corporate facility tenders.'
      },
      {
        time: '8:15 AM – 8:45 AM',
        title: 'Referral Exchange & Deal Announcements',
        desc: 'Passing verified slips for upcoming institutional construction projects.'
      },
      {
        time: '8:45 AM – 9:00 AM',
        title: 'Post-Conclave Strategic Alignments',
        desc: 'Booking 1-on-1 follow-up meetings for the week ahead.'
      }
    ],
    speakers: [
      {
        name: 'Jijeesh Minerva',
        role: 'Founder & CEO, Eco Pest India',
        company: 'BOC Kochi Chapter Member',
        photo: networkingImg,
        bio: 'Key presenter on integrating corporate pest and facility management for hospital and resort chains.'
      }
    ],
    sponsors: [
      {
        name: 'BOC Kochi Chapter',
        tier: 'Host Chapter',
        role: 'Official weekly business breakfast.'
      }
    ],
    mapLocation: {
      address: 'Crowne Plaza Kochi, Kundannoor Junction, Maradu, Ernakulam, Kerala 682304',
      landmark: 'NH 66 Bypass',
      googleMapsUrl: 'https://maps.google.com/?q=Crowne+Plaza+Kochi'
    },
    contactInfo: {
      helpline: '9020040009',
      phone: '+91 90200 40009',
      email: 'kochi@boc.li',
      website: 'www.boc.li',
      coordinator: 'Kochi Chapter Secretary'
    },
    highlights: [
      '85+ Founders Attended',
      '22 Closed Business Synergies',
      '₹1.4 Cr In Immediate Verified B2B Turnover',
      '100% Zero-Competition Protected Room'
    ]
  },

  // ===========================================================================
  // PREVIOUS EVENT 2 (Concluded)
  // ===========================================================================
  {
    id: 'brand-scaling-gcc-summit-dec24',
    isUpcoming: false,
    title: 'Brand Scaling & Cross-Border GCC Expansion Summit',
    subtitle: 'Bridging South Indian Manufacturers with Gulf Distributors',
    image: brandingImg,
    banner: brandingImg,
    date: 'Saturday, Dec 14, 2024',
    time: '10:00 AM – 3:30 PM IST',
    location: 'Hyatt Regency Thrissur, Puzhakkal',
    venue: 'Regency Grand Ballroom',
    city: 'Thrissur',
    type: 'Masterclass',
    registrationStatus: 'Completed / Concluded',
    spotsLeft: 0,
    shortDescription: 'Specialized masterclass on cross-border logistics, UAE trade licensing, and international distribution corridors for South Indian manufacturers.',
    fullDescription: 'Facilitated by BOC Global Trade experts and Binu TB (Global Marketing Leader), this comprehensive workshop illuminated the pathway for Kerala enterprises to establish retail and distribution footprint in Dubai, Abu Dhabi, and Saudi Arabia without exorbitant broker margins.',
    agenda: [
      {
        time: '10:00 AM – 11:30 AM',
        title: 'UAE & GCC Market Entry Protocols',
        desc: 'Navigating trade compliance, customs, and direct-to-retail distribution channels.'
      },
      {
        time: '11:45 AM – 1:15 PM',
        title: 'Case Study: ₹3.2 Cr Agri-Export Corridor',
        desc: 'Practical breakdown of how BOC members established active distribution channels in Middle East supermarkets.'
      },
      {
        time: '1:15 PM – 2:15 PM',
        title: 'Executive Luncheon & Cross-Border Q&A',
        desc: 'Private roundtables with international trade compliance advisors.'
      },
      {
        time: '2:15 PM – 3:30 PM',
        title: 'Consortium Agreements & Logistics Tie-ups',
        desc: 'Formal signing of joint cargo logistics pooling agreements among 14 manufacturing members.'
      }
    ],
    speakers: [
      {
        name: 'Binu TB',
        role: 'Global Marketing & Trade Leader',
        company: 'Global Marketing & Trade',
        photo: brandingImg,
        bio: 'Veteran export strategist opening Middle East and Southeast Asian corridors for Indian manufacturers.'
      }
    ],
    sponsors: [
      {
        name: 'BOC Global Expansion Wing',
        tier: 'Initiative Host',
        role: 'Connecting Kerala founders to worldwide diaspora networks.'
      }
    ],
    mapLocation: {
      address: 'Hyatt Regency Thrissur, Civil Lines Rd, Puzhakkal, Thrissur, Kerala 680553',
      landmark: 'Thrissur Town Approach',
      googleMapsUrl: 'https://maps.google.com/?q=Hyatt+Regency+Thrissur'
    },
    contactInfo: {
      helpline: '9020040009',
      phone: '+91 90200 40009',
      email: 'global@boc.li',
      website: 'www.boc.li',
      coordinator: 'Thrissur Chapter Director'
    },
    highlights: [
      '120+ Scaling Enterprises Participated',
      '3 Major Overseas Trade Tie-ups Finalized',
      'Direct Connections to Gulf Importers',
      'Documented Cross-Border Trade Playbook'
    ]
  }
];
