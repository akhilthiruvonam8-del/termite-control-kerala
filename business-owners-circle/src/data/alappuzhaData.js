/**
 * Alappuzha District Termite Control Master Dataset
 * Complete SEO + Local SEO + AEO + Geo + Administrative Hierarchy Database
 * Covers 6 Municipalities, 12 Block Panchayats, 72 Grama Panchayats & 36 AEO FAQs
 */

export const ALAPPUZHA_DATA = {
  meta: {
    title: "Termite Control in Alappuzha, Kerala | TermiteControl.me",
    description: "Professional termite control, termite inspection and termite treatment services across Alappuzha, Kerala. Residential, commercial, pre-construction and post-construction solutions.",
    keywords: "termite control alappuzha, anti termite treatment alappuzha, termite treatment cherthala, termite control chengannur, termite control kayamkulam, termite treatment mavelikara, termite control harippad, kuttanad termite treatment, pre construction termite treatment alappuzha, wood borer treatment alappuzha, white ant control alappuzha"
  },

  brand: {
    name: "TermiteControl.me",
    parentCompany: "Eco Pest India",
    tagline: "Protecting What You've Built.",
    secondaryTagline: "Termite Control. Local Expertise. Alappuzha Coverage.",
    phone: "9020040009",
    phoneDisplay: "90200 40009",
    whatsappNumber: "919020040009",
    email: "support@termitecontrol.me",
    justdialUrl: "https://jsdl.in/RSL-HFQ1788244801",
    justdialRating: "4.8 / 5.0",
    justdialReviewsCount: "1,153+ Ratings",
    centralHub: "Alappuzha District Central Dispatch, Kerala - 688001"
  },

  // 6 Municipalities in Alappuzha District
  municipalities: [
    {
      id: "alappuzha",
      name: "Alappuzha",
      slug: "alappuzha",
      type: "Municipality / District Headquarters",
      tagline: "Venice of the East & Coastal Waterfront Hub",
      description: "Complete termite inspection and drill-inject barrier protection for coastal villas, commercial establishments, heritage homes, and backwater resorts in Alappuzha town.",
      prominentAreas: ["Alappuzha Town", "Mullakkal", "Sanathanapuram", "Thathampally", "Vazhicherry", "Nehru Trophy Finishing Point", "Palace Ward", "Komalapuram", "Alappuzha Beach Road"]
    },
    {
      id: "chengannur",
      name: "Chengannur",
      slug: "chengannur",
      type: "Municipality / Gateway to Central Travancore",
      tagline: "Pampa River Basin & NRI Residential Belt",
      description: "Specialized anti-termite foundation barriers and teak woodwork protection for multi-story residential villas, commercial complexes, and pilgrim accommodation properties.",
      prominentAreas: ["Chengannur Town", "Kallissery", "Pennukkara", "Edanadu", "Mundancavu", "Keezhcherimel", "Kizhavanpuzha", "Angadical"]
    },
    {
      id: "cherthala",
      name: "Cherthala",
      slug: "cherthala",
      type: "Municipality / Industrial & Coir Center",
      tagline: "Coastal Commercial & Residential Corridor",
      description: "Advanced non-repellent chemical barriers for industrial units, commercial showrooms, apartments, and independent homes along the NH-66 corridor.",
      prominentAreas: ["Cherthala Town", "X-Ray Junction", "Court Junction", "Vayalar Road", "Kanjikkuzhy Road", "Kanichukulangara", "Arthunkal Road"]
    },
    {
      id: "kayamkulam",
      name: "Kayamkulam",
      slug: "kayamkulam",
      type: "Municipality / Historic Coastal Trading Hub",
      tagline: "Southern Commercial Center & Dense Residential Hub",
      description: "Comprehensive subterranean termite elimination and wood borer treatment for traditional residences, commercial buildings, and educational institutions.",
      prominentAreas: ["Kayamkulam Town", "KPAC Junction", "KSRTC Stand Area", "Eruva", "Perungala", "Keerikkad", "Pullikkanakku", "Onattukara"]
    },
    {
      id: "mavelikara",
      name: "Mavelikara",
      slug: "mavelikara",
      type: "Municipality / Cultural & Heritage Capital",
      tagline: "Heritage Wooden Tharavads & Modern Luxury Villas",
      description: "Preservation protocols for heritage wooden architecture, carved timber ceilings, modular kitchens, and contemporary independent residences.",
      prominentAreas: ["Mavelikara Town", "Buddha Junction", "Mitchel Junction", "Kandiyoor", "Prayikkara", "Ponakam", "Thazhakara Gate"]
    },
    {
      id: "harippad",
      name: "Harippad",
      slug: "harippad",
      type: "Municipality / Sub-Coastal Growth Center",
      tagline: "Town of Temples & Fast-Growing Residential Town",
      description: "Stage-wise pre-construction soil treatment and post-construction drill-and-seal chemical barriers for homes and commercial establishments.",
      prominentAreas: ["Haripad Town", "Subrahmanya Swamy Temple Area", "Kacheri Junction", "Pilapuzha", "Danappady", "Madhavam Junction", "Muttom"]
    }
  ],

  // 12 Block Panchayats with All 72 Grama Panchayats
  blocks: [
    {
      id: "thykkattussery-block",
      name: "Thykkattussery Block",
      slug: "thykkattussery-block",
      panchayatsCount: 5,
      description: "Northern backwater and island corridor characterized by high ambient humidity and clayey soil.",
      panchayats: [
        { name: "Arookutty", slug: "arookutty", desc: "Backwater island community needing moisture-resistant subterranean termite barriers." },
        { name: "Chennam Pallippuram", slug: "chennam-pallippuram", desc: "Vembanad Lake waterfront residential and homestay termite protection." },
        { name: "Panavally", slug: "panavally", desc: "Perimeter soil trenching for independent residences and coconut garden plots." },
        { name: "Perumbalam", slug: "perumbalam", desc: "Island terrain termite control with customized non-repellent chemical injection." },
        { name: "Thykkattussery", slug: "thycattussery", desc: "Block headquarters residential and commercial timber protection." }
      ]
    },
    {
      id: "pattanakkad-block",
      name: "Pattanakkad Block",
      slug: "pattanakkad-block",
      panchayatsCount: 7,
      description: "Coastal NH-66 industrial, seafood processing, and residential belt.",
      panchayats: [
        { name: "Aroor", slug: "aroor", desc: "Industrial godowns, seafood processing units, and high-density residential buildings." },
        { name: "Ezhupunna", slug: "ezhupunna", desc: "Waterfront villas, shrimp farming belts, and residential timber defense." },
        { name: "Kuthiathode", slug: "kuthiathode", desc: "Commercial market establishments and residential woodwork treatment." },
        { name: "Kodamthuruth", slug: "kodamthuruth", desc: "Subterranean termite soil treatment for modern single and double-story homes." },
        { name: "Thuravoor", slug: "thuravoor", desc: "NH corridor commercial complexes, residences, and temple precinct properties." },
        { name: "Pattanakkad", slug: "pattanakkad", desc: "Sandy coastal soil termite barriers and pre-construction foundation spraying." },
        { name: "Vayalar", slug: "vayalar", desc: "Historic residential zone with extensive wooden door and wardrobe protection." }
      ]
    },
    {
      id: "kanjikkuzhy-block",
      name: "Kanjikkuzhy Block",
      slug: "kanjikkuzhy-block",
      panchayatsCount: 5,
      description: "Coastal beach resort corridor, organic farming hubs, and Cherthala suburban areas.",
      panchayats: [
        { name: "Kadakkarapally", slug: "kadakkarapally", desc: "Coastal belt residential structures and beachside homestay wood preservation." },
        { name: "Kanjikkuzhy", slug: "kanjikkuzhy", desc: "Agricultural and residential building foundation chemical barriers." },
        { name: "Cherthala South", slug: "cherthala-south", desc: "Suburban homes, coir manufacturing units, and commercial showrooms." },
        { name: "Thanneermukkam", slug: "thanneermukkam", desc: "Bund road tourism properties, eco-resorts, and lakefront independent villas." },
        { name: "Mararikkulam North", slug: "mararikkulam-north", desc: "Luxury Marari beach resorts, boutique villas, and coastal residences." }
      ]
    },
    {
      id: "aryad-block",
      name: "Aryad Block",
      slug: "aryad-block",
      panchayatsCount: 4,
      description: "Suburban Alappuzha town fringe and Vembanad lakeshore tourism belt.",
      panchayats: [
        { name: "Aryad", slug: "aryad", desc: "Dense residential expansion zone with high demand for post-construction drill-and-seal." },
        { name: "Mannanchery", slug: "mannanchery", desc: "Major residential hub requiring modular kitchen and door frame termite eradication." },
        { name: "Mararikkulam South", slug: "mararikkulam-south", desc: "Marari coastal resorts, homestays, and modern luxury beach houses." },
        { name: "Muhamma", slug: "muhamma", desc: "Lakeshore resort properties, houseboat docking yards, and residential homes." }
      ]
    },
    {
      id: "ambalappuzha-block",
      name: "Ambalappuzha Block",
      slug: "ambalappuzha-block",
      panchayatsCount: 5,
      description: "Central coastal stretch featuring medical institutions, temple precincts, and beachside residences.",
      panchayats: [
        { name: "Ambalappuzha South", slug: "ambalappuzha-south", desc: "Temple town residences, commercial shops, and traditional wooden homes." },
        { name: "Ambalappuzha North", slug: "ambalappuzha-north", desc: "Medical college neighborhood properties, flats, and independent houses." },
        { name: "Punnapra South", slug: "punnapra-south", desc: "Coastal sandy terrain residences requiring specialized non-leaching termiticides." },
        { name: "Punnapra North", slug: "punnapra-north", desc: "Educational institutes, engineering campuses, and residential villas." },
        { name: "Purakkad", slug: "purakkad", desc: "Historic sea-coast community with timber protection against coastal humidity." }
      ]
    },
    {
      id: "chambakkulam-block",
      name: "Chambakkulam Block",
      slug: "chambakkulam-block",
      panchayatsCount: 6,
      description: "Heart of Kuttanad below-sea-level paddy fields and backwater canal network.",
      panchayats: [
        { name: "Edathua", slug: "edathua", desc: "Church festival town residences, school buildings, and backwater houses." },
        { name: "Kainakary", slug: "kainakary", desc: "Prime houseboat hub and backwater village homes needing foundation defense." },
        { name: "Champakkulam", slug: "champakkulam", desc: "Snake boat heritage center with traditional timber tharavad preservation." },
        { name: "Thakazhy", slug: "thakazhy", desc: "Literary heritage region with agricultural homes and wooden ceiling protection." },
        { name: "Thalavady", slug: "thalavady", desc: "Paddy fringe residences with high ground moisture requiring chemical barriers." },
        { name: "Nedumudi", slug: "nedumudi", desc: "Pampa riverbank homestays, vacation cottages, and waterfront properties." }
      ]
    },
    {
      id: "veliyanad-block",
      name: "Veliyanad Block",
      slug: "veliyanad-block",
      panchayatsCount: 6,
      description: "Upper Kuttanad island and canal waterways zone with heavy alluvial soil.",
      panchayats: [
        { name: "Kavalam", slug: "kavalam", desc: "Lakeside and canal-front residential timber and false ceiling protection." },
        { name: "Pulincunnu", slug: "pulincunnu", desc: "Pampa river island tharavads, college campus structures, and villas." },
        { name: "Neelamperoor", slug: "neelamperoor", desc: "Heritage village residences with specialized wood borer and white ant treatment." },
        { name: "Muttar", slug: "muttar", desc: "River basin homes requiring pre and post-construction subterranean barriers." },
        { name: "Ramankary", slug: "ramankary", desc: "AC Canal corridor residences, commercial shops, and warehouse buildings." },
        { name: "Veliyanad", slug: "veliyanad", desc: "Block center residential properties with odorless micro-injection services." }
      ]
    },
    {
      id: "chengannur-block",
      name: "Chengannur Block",
      slug: "chengannur-block",
      panchayatsCount: 8,
      description: "Midland undulating terrain and Pampa river basin NRI villa corridor.",
      panchayats: [
        { name: "Ala", slug: "ala", desc: "Independent hillside and river valley residences with subterranean barriers." },
        { name: "Cheriyanad", slug: "cheriyanad", desc: "Luxury NRI villas and independent homes with 5-year warranty protection." },
        { name: "Thiruvanvandoor", slug: "thiruvanvandoor", desc: "Pampa riverbank heritage residences and modern residential developments." },
        { name: "Pandanad", slug: "pandanad", desc: "River-facing luxury villas and vacation homes requiring annual monitoring." },
        { name: "Puliyoor", slug: "puliyoor", desc: "Temple precinct residential properties and commercial establishments." },
        { name: "Budhannur", slug: "budhannur", desc: "Pre-construction foundation treatments for new independent house builds." },
        { name: "Mulakkuzha", slug: "mulakkuzha", desc: "Residential bungalows, rubber plantation adjacent properties, and shops." },
        { name: "Venmony", slug: "venmony", desc: "Achankovil river basin homes with deep soil trenching against termites." }
      ]
    },
    {
      id: "haripad-block",
      name: "Haripad Block",
      slug: "haripad-block",
      panchayatsCount: 7,
      description: "Central lowland agricultural and coastal transition zone.",
      panchayats: [
        { name: "Karthikapally", slug: "karthikapally", desc: "Historic taluk headquarters residences, government offices, and shops." },
        { name: "Karuvatta", slug: "karuvatta", desc: "Leading residential hub along NH-66 with high termite inspection demand." },
        { name: "Kumarapuram", slug: "kumarapuram", desc: "Padanilam temple area homes and modern concrete-and-timber residences." },
        { name: "Cheruthana", slug: "cheruthana", desc: "Riverbank agricultural villas and wooden granary preservation." },
        { name: "Thrikkunnappuzha", slug: "thrikkunnappuzha", desc: "Coastal coir belt homes and TS Canal waterfront residential protection." },
        { name: "Pallippad", slug: "pallippad", desc: "Payippad boat race heritage zone with extensive teak woodwork treatment." },
        { name: "Veeyapuram", slug: "veeyapuram", desc: "Confluence of Pampa and Achankovil rivers with high water-table soil defenses." }
      ]
    },
    {
      id: "mavelikkara-block",
      name: "Mavelikkara Block",
      slug: "mavelikkara-block",
      panchayatsCount: 5,
      description: "Achankovil river basin cultural heartland with prominent NRI investments.",
      panchayats: [
        { name: "Chennithala Thripperuthura", slug: "chennithala-thripperuthura", desc: "Traditional riverbank residences and modern two-story family homes." },
        { name: "Chettikulangara", slug: "chettikulangara", desc: "Temple festival epicenter with traditional wooden structures and modern villas." },
        { name: "Thazhakkara", slug: "thazhakkara", desc: "Suburban Mavelikara residential plots and commercial establishments." },
        { name: "Mavelikkara Thekkekkara", slug: "mavelikkara-thekkekkara", desc: "Independent villas, rubber garden adjacent homes, and farmhouses." },
        { name: "Mannar", slug: "mannar", desc: "Bell metal craft center, commercial workshops, and residential buildings." }
      ]
    },
    {
      id: "bharanikkavu-block",
      name: "Bharanikkavu Block",
      slug: "bharanikkavu-block",
      panchayatsCount: 6,
      description: "Onattukara laterite-sand transitional soil belt with high subterranean termite colonies.",
      panchayats: [
        { name: "Chunakkara", slug: "chunakkara", desc: "Agricultural family homes and new construction slab treatments." },
        { name: "Nooranad", slug: "nooranad", desc: "Sanatorium area residences, healthcare establishments, and private villas." },
        { name: "Palamel", slug: "palamel", desc: "Laterite soil hillocks and residential bungalows with perimeter barriers." },
        { name: "Bharanikkavu", slug: "bharanikkavu", desc: "Block center commercial shops, schools, and independent homes." },
        { name: "Mavelikkara-Thamarakkulam", slug: "mavelikkara-thamarakkulam", desc: "Semi-urban residential communities with comprehensive timber defense." },
        { name: "Vallikunnam", slug: "vallikunnam", desc: "Clay-laterite mixed soil residences requiring non-repellent chemical injection." }
      ]
    },
    {
      id: "muthukulam-block",
      name: "Muthukulam Block",
      slug: "muthukulam-block",
      panchayatsCount: 8,
      description: "Southern coastal and Kayamkulam Kayal surrounding belt.",
      panchayats: [
        { name: "Aarattupuzha", slug: "aarattupuzha", desc: "Coastal barrier spit residences needing moisture-proof chemical treatments." },
        { name: "Kandalloor", slug: "kandalloor", desc: "Kayamkulam outskirts homes, coconut gardens, and independent villas." },
        { name: "Krishnapuram", slug: "krishnapuram", desc: "Palace precinct heritage properties, museums, and residential homes." },
        { name: "Chingoli", slug: "chingoli", desc: "NTPC belt residential developments and commercial establishments." },
        { name: "Cheppad", slug: "cheppad", desc: "Railway station area homes, ancient church precinct, and modern villas." },
        { name: "Devikulangara", slug: "devikulangara", desc: "Kayamkulam Kayal waterfront residences and boat landing properties." },
        { name: "Pathiyoor", slug: "pathiyoor", desc: "Dense residential panchayat requiring door frame and false ceiling protection." },
        { name: "Muthukulam", slug: "muthukulam", desc: "Block headquarters homes, traditional buildings, and commercial shops." }
      ]
    }
  ],

  // 14 Core Services in Alappuzha
  services: [
    {
      id: "termite-control",
      title: "Termite Control",
      slug: "termite-control",
      tagline: "Comprehensive Subterranean Termite Colony Eradication",
      shortDesc: "Targeted elimination of active white ant colonies and creation of a continuous non-repellent chemical barrier around foundations and interior woodwork.",
      benefits: ["Odorless non-repellent chemistry", "Eliminates subterranean queen", "Zero evacuation required"],
      warranty: "Up to 5 Years Warranty",
      propertyFit: "Homes, Luxury Villas, Commercial Buildings & Resorts"
    },
    {
      id: "termite-treatment",
      title: "Termite Treatment",
      slug: "termite-treatment",
      tagline: "Precision Drill-Inject-Seal Masonry & Timber Treatment",
      shortDesc: "Micro-injection of certified termiticides into infested wooden door frames, skirting lines, floor expansion joints, and masonry walls as per IS:6313.",
      benefits: ["Sub-surface chemical barrier", "Matches tile and marble grouting", "Stops structural damage"],
      warranty: "Up to 5 Years Warranty",
      propertyFit: "Existing Houses, Apartments, Shops & Offices"
    },
    {
      id: "termite-inspection",
      title: "Termite Inspection",
      slug: "termite-inspection",
      tagline: "Acoustic, Moisture & Visual Assessment",
      shortDesc: "Detailed inspection of timber elements, wall mud tubes, roof trusses, sub-floor moisture zones, and hidden nesting pathways with an official digital report.",
      benefits: ["Identifies hidden active nests", "Pinpoints entry pathways", "No obligation quotation"],
      warranty: "Detailed Assessment Report",
      propertyFit: "Pre-Purchase, Pre-Renovation, Annual Audits"
    },
    {
      id: "anti-termite-treatment",
      title: "Anti-Termite Treatment",
      slug: "anti-termite-treatment",
      tagline: "Long-Term Preventative Chemical Defense",
      shortDesc: "Proactive chemical barrier installation conforming to Indian Standard specifications to prevent subterranean termites from ever breaching the building envelope.",
      benefits: ["CIB&RC approved chemicals", "Family and pet safe", "Multi-year residual protection"],
      warranty: "Up to 10 Years Warranty",
      propertyFit: "New Builds, Renovations, Premium Residential Estates"
    },
    {
      id: "pre-construction-termite-treatment",
      title: "Pre-Construction Termite Treatment",
      slug: "pre-construction-termite-treatment",
      tagline: "Stage-Wise IS:6313 Soil Barrier for New Construction",
      shortDesc: "Stage-wise chemical barrier applied in foundation trenches, backfill earth, plinth masonry, and under-floor soil prior to laying the concrete slab.",
      benefits: ["Stage-wise certification", "Architect & builder tie-ups", "Prevents termites for decades"],
      warranty: "10 Years Official Certificate",
      propertyFit: "Under-Construction Houses, Commercial Plazas, Villa Projects"
    },
    {
      id: "post-construction-termite-treatment",
      title: "Post-Construction Termite Treatment",
      slug: "post-construction-termite-treatment",
      tagline: "Retrofit Protection for Completed & Occupied Buildings",
      shortDesc: "Precision drilling along internal wall perimeters and external foundation walls to inject liquid termiticide without disturbing residents or damaging tiles.",
      benefits: ["Zero structural damage", "Done in 4 to 6 hours", "Odorless and non-staining"],
      warranty: "Up to 5 Years Warranty",
      propertyFit: "Occupied Homes, Running Offices, Historic Tharavads"
    },
    {
      id: "residential-termite-control",
      title: "Residential Termite Control",
      slug: "residential-termite-control",
      tagline: "Safeguarding Teak Woodwork, Kitchens & Wardrobes",
      shortDesc: "Complete protection for family residences against subterranean white ants attacking door frames, modular kitchens, cupboards, beds, and roof beams.",
      benefits: ["Safe for kids and elderly", "Protects expensive woodwork", "Minimal household disruption"],
      warranty: "5 Years Protection Plan",
      propertyFit: "Individual Houses, Gated Communities, Duplexes"
    },
    {
      id: "commercial-termite-control",
      title: "Commercial Termite Control",
      slug: "commercial-termite-control",
      tagline: "Offices, Retail Showrooms, Warehouses & Institutions",
      shortDesc: "Customized pest management protocols scheduled outside business hours to protect archival records, false ceilings, partition walls, and inventory.",
      benefits: ["After-hours scheduling", "Audit compliance documentation", "Annual maintenance contracts (AMC)"],
      warranty: "Comprehensive AMC Warranty",
      propertyFit: "Banks, Corporate Offices, Godowns, Shopping Malls"
    },
    {
      id: "villa-termite-treatment",
      title: "Villa Termite Treatment",
      slug: "villa-termite-treatment",
      tagline: "Tailored for NRI Vacation Homes & Luxury Estates",
      shortDesc: "Deep perimeter defense and remote digital monitoring reports for large independent villas in Cherthala, Chengannur, Kuttanad, and Kayamkulam.",
      benefits: ["Caretaker coordination", "Photo/video inspection reports", "Complete compound coverage"],
      warranty: "5 to 10 Years Warranty",
      propertyFit: "Luxury Waterfront Villas, NRI Vacation Homes"
    },
    {
      id: "apartment-termite-treatment",
      title: "Apartment Termite Treatment",
      slug: "apartment-termite-treatment",
      tagline: "Flats, Multi-Story Condos & High-Rise Apartments",
      shortDesc: "Targeted localized treatment for duct shafts, plumbing chases, common service risers, and wooden fittings in multi-unit apartment complexes.",
      benefits: ["Stops inter-flat migration", "Zero smell in corridors", "Association discounted packages"],
      warranty: "Multi-Year Warranty",
      propertyFit: "High-Rise Flats, Gated Apartment Complexes"
    },
    {
      id: "wood-borer-treatment",
      title: "Wood Borer Treatment",
      slug: "wood-borer-treatment",
      tagline: "Powderpost Beetle & Timber Insect Eradication",
      shortDesc: "Specialized petroleum-based or eco-solvent chemical syringes injected into exit holes to kill wood-boring larvae and stop yellow wood powder fallout.",
      benefits: ["Kills deep-seated larvae", "Prevents re-infestation", "Preserves antique timber"],
      warranty: "Up to 3 Years Warranty",
      propertyFit: "Antique Furniture, Roof Rafters, Plywood Cabinets"
    },
    {
      id: "drywood-termite-control",
      title: "Drywood Termite Control",
      slug: "drywood-termite-control",
      tagline: "Treatment for Wood Living Without Soil Contact",
      shortDesc: "Localized foaming and aerosol termiticide injection directly into infested wooden doors, window shutters, and furniture harboring drywood colonies.",
      benefits: ["No soil barrier needed", "Preserves wooden artistry", "Pinpoint accuracy"],
      warranty: "Complete Timber Clearance",
      propertyFit: "Doors, Windows, Carved Artifacts, Ceiling Panels"
    },
    {
      id: "subterranean-termite-control",
      title: "Subterranean Termite Control",
      slug: "subterranean-termite-control",
      tagline: "Eradicating Soil-Dwelling White Ant Supercolonies",
      shortDesc: "Addressing the #1 destructive termite species in Alappuzha (Coptotermes gestroi) that travels through ground mud tubes into building foundations.",
      benefits: ["Transfer chemistry to queen", "Stops subterranean mud tubes", "Proven IS:6313 methodology"],
      warranty: "5 to 10 Years Guarantee",
      propertyFit: "All Ground-Contact Properties in High-Moisture Belts"
    },
    {
      id: "termite-prevention",
      title: "Termite Prevention",
      slug: "termite-prevention",
      tagline: "Moisture Mitigation & Proactive Barrier Audits",
      shortDesc: "Ongoing maintenance, sub-floor ventilation guidance, plumbing leak checks, and perimeter barrier refreshers to keep properties permanently protected.",
      benefits: ["Prevents expensive structural damage", "Regular technician check-ins", "Peace of mind"],
      warranty: "Continuous Protection Guarantee",
      propertyFit: "All Residential & Commercial Property Owners"
    }
  ],

  // 36 Comprehensive AEO FAQs with Direct 1-3 Sentence Answers
  faqs: [
    {
      q: "What are the signs of termites in a house?",
      a: "The most common signs of termites in a house are brown mud tubes on walls, hollow-sounding wooden door frames, fine wood dust (frass) beneath furniture, blistering paint, and discarded silvery wings on window sills after monsoon rains. If tapping wood produces a papery, empty sound, subterranean termites are actively hollowing out the interior timber."
    },
    {
      q: "How do I know if my house has termites?",
      a: "You can confirm a termite infestation by checking wooden door frames, modular kitchen skirting, and electrical conduits for dried mud pathways or hollow cavities. When you gently press infested woodwork with a screwdriver, the outer veneer may easily crumble, revealing creamy-white worker termites inside."
    },
    {
      q: "How does termite treatment work?",
      a: "Termite treatment works by injecting odorless, non-repellent liquid termiticide into the soil around the foundation and through tiny 6mm holes drilled into floor and wall joints. Termites unknowingly brush against the chemical and carry it back to their underground nest, transferring the active ingredient to the queen and eradicating the entire subterranean colony."
    },
    {
      q: "How long does termite treatment take?",
      a: "A standard residential post-construction termite treatment for a 2,000 sq.ft. house typically takes between 4 to 6 hours to complete. Technicians drill perimeter holes, inject termiticides under controlled pressure, and seal every hole with color-matched cement on the same day."
    },
    {
      q: "How much does termite treatment cost in Alappuzha?",
      a: "In Alappuzha, standard residential termite treatment generally costs between ₹6,500 and ₹18,000 depending on the built-up area, severity of infestation, and warranty period chosen. Pre-construction stage-wise soil treatment is priced transparently per square foot as per IS:6313 guidelines."
    },
    {
      q: "Does termite treatment damage furniture?",
      a: "No, professional termite treatment does not damage furniture. Technicians use precision micro-injection and spot applications with odorless, non-staining formulations that eliminate pests while keeping timber finish, paint, and upholstery completely safe."
    },
    {
      q: "Is termite treatment safe for homes with children and pets?",
      a: "Yes. Eco Pest India uses modern, government CIB&RC-approved, odorless, low-toxicity termiticides specifically formulated for indoor domestic use. There are no hazardous fumes, allowing family members, children, and pets to remain safely in the home without requiring evacuation."
    },
    {
      q: "Do termites damage concrete buildings?",
      a: "Termites cannot eat concrete, but subterranean termites can easily squeeze through microscopic hairline cracks, expansion joints, and electrical conduits in concrete slabs to reach wooden roofs, cupboards, and door jambs. Once inside, they cause severe damage to internal woodwork."
    },
    {
      q: "Can termites come back after treatment?",
      a: "Termites cannot return as long as the chemical barrier remains unbroken. Our treatments carry an official written warranty of up to 5 to 10 years, which includes free re-service inspections if any termite activity is detected during the warranty period."
    },
    {
      q: "How can termites be prevented in Kerala properties?",
      a: "Termites can be prevented by installing a certified pre-construction soil barrier, keeping firewood and raw timber away from external walls, fixing plumbing leaks promptly, ensuring adequate sub-floor ventilation, and scheduling annual professional termite audits."
    },
    {
      q: "What is pre-construction termite treatment?",
      a: "Pre-construction termite treatment is a planned preventive procedure performed during building construction conforming to IS:6313 (Part 2). Chemicals are sprayed in foundation trenches, plinth masonry, backfill soil, and sub-slab gravel before the ground floor is cast, creating an impenetrable underground shield."
    },
    {
      q: "What is post-construction termite treatment?",
      a: "Post-construction termite treatment is a curative process performed on existing, occupied buildings conforming to IS:6313 (Part 3). Technicians drill discreet holes along the base of internal walls, inject specialized termiticides into the sub-floor, and reseal the holes neatly."
    },
    {
      q: "Do you provide termite inspection in Alappuzha?",
      a: "Yes, TermiteControl.me provides professional on-site termite inspections across all towns, panchayats, and villages in Alappuzha district. Our certified technicians check timber integrity, detect subterranean entry points, and provide an instant treatment assessment."
    },
    {
      q: "Do you treat termites in luxury villas?",
      a: "Yes. We specialize in luxury and NRI villa termite protection across Cherthala, Chengannur, Kuttanad, and Kayamkulam. We coordinate with caretakers, provide photo/video inspection reports, and establish complete perimeter defenses for locked or occupied residences."
    },
    {
      q: "Do you treat apartment buildings and flats?",
      a: "Yes, we provide targeted apartment termite management for individual flats as well as whole building associations. Our odorless treatments prevent termites from migrating between apartments through plumbing ducts and service shafts."
    },
    {
      q: "Do you provide commercial termite control in Alappuzha?",
      a: "Yes. We service commercial buildings, bank branches, coir factories, retail showrooms, hospitals, hotels, and warehouses across Alappuzha district with flexible after-hours scheduling and official audit documentation."
    },
    {
      q: "Do you treat wood borers (powderpost beetles)?",
      a: "Yes, we provide specialized wood borer eradication. Technicians use high-pressure syringes to inject specialized wood preservatives directly into borer flight holes, killing deep-seated larvae and stopping fine yellow wood powder from falling out."
    },
    {
      q: "What is the difference between termites and wood borers?",
      a: "Termites are social insects that build mud tubes and hollow out timber from the inside while remaining hidden. Wood borers are beetle larvae that bore tiny exit pinholes in wood, continuously ejecting fine yellowish sawdust (frass) onto floors and furniture."
    },
    {
      q: "How often should a property be inspected for termites?",
      a: "In Alappuzha's humid coastal and backwater climate, residential and commercial properties should be professionally inspected at least once every 12 to 24 months, particularly before or immediately after the monsoon season."
    },
    {
      q: "Can an old or heritage house be treated for termites?",
      a: "Yes, traditional Kerala tharavads and heritage properties with extensive teak, anjili, or rosewood ceilings can be treated effectively using non-destructive micro-injection, timber saturation, and perimeter sub-soil trenching."
    },
    {
      q: "Can newly constructed houses get termites?",
      a: "Yes, newly constructed houses can get termites within months if pre-construction soil treatment was skipped. Subterranean termites in the surrounding soil easily enter through plumbing cutouts, foundation masonry cracks, and electrical conduits."
    },
    {
      q: "Why are termites common around moisture-prone areas in Alappuzha?",
      a: "Subterranean termites require continuous moisture to survive. Alappuzha's high water table, heavy monsoon rainfall, Kuttanad backwaters, and coastal humidity create the ideal humid underground environment for massive termite colonies to flourish."
    },
    {
      q: "Do termites damage wooden doors and frames?",
      a: "Yes, teak, mahagony, and jackfruit wood door frames are primary termite targets because their bottom ends are embedded in masonry floors where subterranean termites gain direct ground access."
    },
    {
      q: "Do termites damage modular kitchen cupboards?",
      a: "Yes, modular kitchen cabinets made of plywood or MDF are highly susceptible because sinks and dishwashing areas provide constant moisture and warmth, accelerating termite feeding."
    },
    {
      q: "Do termites damage wooden flooring and false ceilings?",
      a: "Yes, termites will hollow out the underside of wooden floor planks and travel behind gypsum false ceiling boards, causing sudden structural collapse if left untreated."
    },
    {
      q: "Can termites enter through masonry walls?",
      a: "Yes, termites exploit microscopic gaps within hollow brickwork, mortar joints, and electrical conduits to travel upward from the foundation into upper floors and roof trusses."
    },
    {
      q: "Can termite treatment be done without major demolition?",
      a: "Yes. Modern drill-and-inject technology requires only tiny 6mm holes drilled into grout lines, avoiding any structural demolition, tile breaking, or damage to expensive flooring."
    },
    {
      q: "Do you provide termite treatment in Alappuzha town?",
      a: "Yes, TermiteControl.me covers all wards and localities of Alappuzha municipality including Mullakkal, Sanathanapuram, Thathampally, Vazhicherry, and Beach Road with same-day inspection dispatch."
    },
    {
      q: "Do you provide termite treatment in Chengannur?",
      a: "Yes, we provide full termite inspection and treatment coverage across Chengannur municipality, Kallissery, Pennukkara, Edanadu, and all surrounding panchayats."
    },
    {
      q: "Do you provide termite treatment in Cherthala?",
      a: "Yes, we regularly service residential and commercial properties across Cherthala municipality, Arthunkal, Vayalar, Kanjikkuzhy, and the industrial NH-66 corridor."
    },
    {
      q: "Do you provide termite treatment in Kayamkulam?",
      a: "Yes, we offer prompt residential, commercial, and pre-construction termite control across Kayamkulam municipality, KPAC Junction, Eruva, and Onattukara regions."
    },
    {
      q: "Do you provide termite treatment in Mavelikara?",
      a: "Yes, our technicians cover Mavelikara municipality, Kandiyoor, Prayikkara, Thazhakkara, Chettikulangara, and the entire Achankovil river valley."
    },
    {
      q: "Do you provide termite treatment in Harippad?",
      a: "Yes, we provide certified anti-termite treatment across Haripad municipality, Karthikapally, Karuvatta, Kumarapuram, and adjacent coastal-midland belts."
    },
    {
      q: "Do you provide termite treatment across all Alappuzha District panchayats?",
      a: "Yes, TermiteControl.me covers all 6 municipalities, 12 block panchayats, and 72 grama panchayats from Aroor in the north to Aarattupuzha and Krishnapuram in the south."
    },
    {
      q: "How can I book a termite inspection in Alappuzha?",
      a: "You can book a termite inspection by calling our central hotline on 9020040009, messaging us on WhatsApp, or submitting the quick inspection booking form on our website for same-day scheduling."
    },
    {
      q: "How can I contact TermiteControl.me for emergency termite assistance?",
      a: "You can reach TermiteControl.me immediately by calling 9020040009 or sending a WhatsApp message. Our Alappuzha district coordinator will confirm your property location and dispatch a technician promptly."
    }
  ],

  // Real Customer Testimonials for Alappuzha & Central Kerala
  testimonials: [
    {
      author: "Mathew Varghese",
      location: "Kuttanad (Kainakary)",
      property: "Waterfront Backwater Villa",
      rating: 5,
      date: "Post-Construction Termite Treatment",
      review: "Our waterfront villa in Kainakary had severe subterranean white ant attacks on the teak door frames and kitchen cabinets due to the high water table. The TermiteControl.me team inspected the house within hours and applied an odorless drill-inject barrier. It has been over 2 years now, and not a single termite has returned."
    },
    {
      author: "Dr. Suresh Kumar",
      location: "Cherthala Town",
      property: "Residential Bungalow",
      rating: 5,
      date: "Odorless Termite Treatment",
      review: "Very professional team. They used completely odorless chemicals so our family did not have to evacuate the house. Every tiny drill hole in the tile joints was neatly sealed. Excellent service with warranty certificate provided on the spot."
    },
    {
      author: "Anil K. Pillai",
      location: "Mavelikara (Kandiyoor)",
      property: "Heritage Tharavad & Modular Kitchen",
      rating: 5,
      date: "Wood Borer & Termite Control",
      review: "We noticed yellow powder falling from our traditional wooden ceiling and mud tubes behind the kitchen cabinets. Eco Pest India technicians diagnosed both wood borers and subterranean termites, treating each with precision syringes. Outstanding technical knowledge."
    },
    {
      author: "Rajan George",
      location: "Chengannur (Kallissery)",
      property: "NRI Vacation Home",
      rating: 5,
      date: "NRI Locked Villa Defense",
      review: "I live in the UAE and was worried about termite damage in our locked home in Chengannur. The team coordinated with our caretaker, sent clear photos of the affected door jambs, and completed the foundation injection seamlessly. Highly recommended for NRIs."
    },
    {
      author: "Saji Thomas",
      location: "Alappuzha (Thathampally)",
      property: "Commercial Office & Homestay",
      rating: 5,
      date: "Commercial Pest Management",
      review: "One of the most dependable pest management companies in Alappuzha. Timely arrival, transparent pricing per square foot, and courteous technicians. They solved our white ant issue completely."
    },
    {
      author: "Deepa Nambiar",
      location: "Haripad (Karuvatta)",
      property: "Pre-Construction Soil Barrier",
      rating: 5,
      date: "IS:6313 Soil Treatment",
      review: "We engaged them for pre-construction anti-termite treatment for our new home construction. They carried out stage-wise spraying in foundation trenches and under the floor slab with an official 10-year warranty document."
    }
  ]
};
