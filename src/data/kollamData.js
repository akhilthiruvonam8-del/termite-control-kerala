/**
 * Kollam District Termite Control Master Dataset
 * Complete SEO + Local SEO + AEO + Geo + Administrative Hierarchy Database
 * Covers 1 Municipal Corporation, 4 Municipalities, 11 Block Panchayats, 68 Grama Panchayats & 36 AEO FAQs
 */

export const KOLLAM_DATA = {
  meta: {
    title: "Termite Control in Kollam, Kerala | TermiteControl.me",
    description: "Professional termite control, termite inspection and termite treatment services across Kollam, Kerala. Residential, commercial, pre-construction and post-construction solutions.",
    keywords: "termite control kollam, anti termite treatment kollam, termite treatment karunagappally, termite control kottarakkara, termite control punalur, termite control paravur, termite treatment kundara, termite control anchal, termite control chavara, termite treatment sasthamcotta, ashtamudi termite control, pre construction termite treatment kollam, wood borer treatment kollam, white ant control kollam"
  },

  brand: {
    name: "TermiteControl.me",
    parentCompany: "Eco Pest India",
    tagline: "Protecting What You've Built.",
    secondaryTagline: "Termite Control. Local Expertise. Kollam Coverage.",
    phone: "9020040009",
    phoneDisplay: "90200 40009",
    whatsappNumber: "919020040009",
    email: "support@termitecontrol.me",
    justdialUrl: "https://jsdl.in/RSL-HFQ1788244801",
    justdialRating: "4.8 / 5.0",
    justdialReviewsCount: "1,153+ Ratings",
    officeAddress: {
      brand: "TermiteControl.me",
      unit: "A Unit of Eco Pest India",
      line1: "Near DYFI Youth Centre, Polayathodu",
      city: "Kollam",
      district: "Kollam",
      state: "Kerala",
      pincode: "691001",
      landmark: "Near DYFI Youth Centre",
      locality: "Polayathodu",
      deskPhone: "9020040009",
      timing: "Open 7 Days: 8:00 AM – 8:30 PM (Emergency Dispatch Available)"
    }
  },

  // Kollam Municipal Corporation
  corporation: {
    id: "kollam-corporation",
    name: "Kollam Municipal Corporation",
    slug: "kollam",
    type: "Municipal Corporation / District Headquarters",
    tagline: "Commercial Capital of South Kerala & Ashtamudi Hub",
    description: "Comprehensive subterranean termite elimination, odor-free drill-fill-seal chemical barriers, and timber borer treatment for modern residences, coastal villas, apartments, and commercial establishments across Kollam City.",
    prominentAreas: [
      "Polayathodu", "Chinnakkada", "Asramam", "Thevally", "Kadappakada", 
      "Mundakkal", "Kavanad", "Sakthikulangara", "Tangasseri", "Thirumullavaram", 
      "Ayathil", "Kilikollur", "Pattathanam", "Vadakkevila", "Eravipuram", 
      "Kureepuzha", "Cantonment", "Valathungal", "Meenathucheri", "Pallithottam"
    ]
  },

  // 4 Municipalities in Kollam District
  municipalities: [
    {
      id: "karunagappally",
      name: "Karunagappally",
      slug: "karunagappally",
      type: "Municipality / Coastal Commercial Hub",
      tagline: "High-Growth Commercial Corridor & Coastal Residential Belt",
      description: "Non-repellent subterranean termite barriers and foundation piping systems tailored for sandy coastal soil, commercial showrooms, cashew trading establishments, and contemporary villas along NH-66.",
      prominentAreas: ["Karunagappally Town", "Lalaji Junction", "KSRTC Stand Road", "Puthiyakavu", "Maruthurkulangara", "Kozhikode (Karunagappally)", "Padanayarkulangara", "Manappally"]
    },
    {
      id: "kottarakkara",
      name: "Kottarakkara",
      slug: "kottarakkara",
      type: "Municipality / Cultural & Transportation Hub",
      tagline: "Historic Heartland, Laterite Terrain & Luxury Residencies",
      description: "Specialized anti-termite drill-fill-seal treatments, teak roof truss preservation, and pre-construction soil treatment for independent houses and commercial complexes on laterite soil formations.",
      prominentAreas: ["Kottarakkara Town", "Pulamon", "Railway Station Road", "Kizhakketheruvu", "Chandanathope Road", "Kottarakkara Ganapathy Temple Area", "Kottathala", "Kottarakkara Bypass"]
    },
    {
      id: "paravur",
      name: "Paravur",
      slug: "paravur",
      type: "Municipality / Backwater & Estuary Belt",
      tagline: "Coastal Backwater Hub & Estuary Waterfront Properties",
      description: "Heavy moisture-resistant subterranean termite treatments and wood borer defense for waterfront villas, heritage homestays, and residences adjacent to Paravur Lake and Pozhikara sea spillway.",
      prominentAreas: ["Paravur Town", "Pozhikara", "Kurumandal", "Koonayil", "Thekkumbhagam", "Poothakkulam Road", "Yakshikavu", "Paravur Railway Station Area"]
    },
    {
      id: "punalur",
      name: "Punalur",
      slug: "punalur",
      type: "Municipality / Eastern Highland Gateway",
      tagline: "Kallada River Basin, Suspension Bridge City & Hill Residences",
      description: "Deep subterranean termite eradication, timber borer chemical injection, and damp-soil foundation barriers for homes, timber yards, and institutions along the foothills of the Western Ghats.",
      prominentAreas: ["Punalur Town", "TB Junction", "Suspension Bridge Area", "Paper Mill Road", "Chemmanthoor", "Placherry", "Bharanikkavu", "Valacodu"]
    }
  ],

  // 11 Block Panchayats with All 68 Grama Panchayats
  blocks: [
    {
      id: "anchal-block",
      name: "Anchal Block",
      slug: "anchal-block",
      panchayatsCount: 8,
      terrain: "Eastern Mid-Highland & Plantation Fringe",
      description: "Eastern plantation and forest-fringe corridor with damp laterite soil and rich timber architecture vulnerable to subterranean termite colonies and wood borers.",
      panchayats: [
        { name: "Anchal", slug: "anchal", desc: "Fast-developing commercial hub and residential center needing thorough termite inspection and foundation soil barrier treatment." },
        { name: "Kulathupuzha", slug: "kulathupuzha", desc: "Forest-adjacent residential and plantation zone requiring high-potency subterranean termite eradication." },
        { name: "Eroor", slug: "eroor", desc: "River-basin residential homes with vulnerability in wooden doors, cupboards, and ceiling rafters." },
        { name: "Alayamon", slug: "alayamon", desc: "Agricultural and plantation terrain requiring pre and post-construction chemical barriers." },
        { name: "Aryankavu", slug: "aryankavu", desc: "High-altitude border ghats residential protection with anti-fungal and anti-termite wood treatment." },
        { name: "Edamulakkal", slug: "edamulakkal", desc: "Traditional Kerala homes and modern villas requiring drill-fill-seal perimeter termite shielding." },
        { name: "Karavaloor", slug: "karavaloor", desc: "Subterranean termite soil piping and interior woodwork wood-borer injection protocols." },
        { name: "Thenmala", slug: "thenmala", desc: "Eco-tourism and plantation homestay timber conservation with odorless non-repellent termiticides." }
      ]
    },
    {
      id: "chadayamangalam-block",
      name: "Chadayamangalam Block",
      slug: "chadayamangalam-block",
      panchayatsCount: 8,
      terrain: "Rocky Laterite Slopes & Commercial Townships",
      description: "Granite hills and laterite terrain zone where subterranean termites penetrate foundations through hairline expansion cracks and electrical conduits.",
      panchayats: [
        { name: "Chadayamangalam", slug: "chadayamangalam", desc: "Commercial town and residential villas along MC Road needing drill-and-seal chemical barriers." },
        { name: "Chithara", slug: "chithara", desc: "Hilly residential terrain with high subterranean termite pressure in foundation soils." },
        { name: "Kadakkal", slug: "kadakkal", desc: "Commercial market center and multi-story residences requiring comprehensive timber defense." },
        { name: "Ittiva", slug: "ittiva", desc: "Agricultural residential homesteads with termite damage in roof trusses and storage cabinetry." },
        { name: "Elamadu", slug: "elamadu", desc: "Pre-construction soil foundation spraying and post-construction warranty treatments." },
        { name: "Nilamel", slug: "nilamel", desc: "MC Road corridor residences requiring specialized wood borer eradication and subterranean barriers." },
        { name: "Velinallur", slug: "velinallur", desc: "Perimeter soil trenching and foundation drill-inject protection for independent homes." },
        { name: "Kummil", slug: "kummil", desc: "Highland village residences needing odorless, family-safe termite treatment." }
      ]
    },
    {
      id: "chavara-block",
      name: "Chavara Block",
      slug: "chavara-block",
      panchayatsCount: 5,
      terrain: "Coastal Marine, Mineral Sand & Backwater Zone",
      description: "Mineral-rich coastal terrain along TS Canal and Ashtamudi backwaters with high ambient moisture accelerating termite nesting and timber decay.",
      panchayats: [
        { name: "Chavara", slug: "chavara", desc: "Industrial corridor and residential zone requiring stage-wise foundation termite protection." },
        { name: "Thekkumbhagom", slug: "thekkumbhagom", desc: "Waterfront backwater residences needing moisture-resistant subterranean barriers." },
        { name: "Panmana", slug: "panmana", desc: "Sandy coastal soil termite elimination and modular kitchen wardrobe treatment." },
        { name: "Thevalakkara", slug: "thevalakkara", desc: "Backwater margin residences with extensive teak woodwork and door frame protection." },
        { name: "Neendakara", slug: "neendakara", desc: "Coastal fishing harbour belt requiring saline-tolerant, long-lasting termite barriers." }
      ]
    },
    {
      id: "chittumala-block",
      name: "Chittumala Block",
      slug: "chittumala-block",
      panchayatsCount: 7,
      terrain: "Ashtamudi Backwater Islands & Cashew Industrial Heartland",
      description: "Surrounds the northern fingers of Ashtamudi Lake including historic Munroe Island and industrial Kundara cashew belt, prone to heavy subterranean white-ant infestation.",
      panchayats: [
        { name: "Kundara", slug: "kundara", desc: "Industrial and residential hub with high demand for pre-construction soil treatment and factory timber protection." },
        { name: "Perinad", slug: "perinad", desc: "Lake-facing residential villas and heritage homes requiring specialized drill-fill-seal protection." },
        { name: "Kizhakkekallada", slug: "kizhakkekallada", desc: "Kallada river basin homes requiring deep foundation chemical barriers." },
        { name: "Panayam", slug: "panayam", desc: "Subterranean termite elimination for newly constructed residences and commercial shops." },
        { name: "Perayam", slug: "perayam", desc: "Backwater belt homes needing wood borer injection and subterranean termite defense." },
        { name: "Mundrothuruthu", slug: "mundrothuruthu", desc: "Munroe Island wetland environment requiring eco-safe non-leaching termiticide barriers." },
        { name: "Thrikkaruva", slug: "thrikkaruva", desc: "Lake perimeter villas and traditional residences needing comprehensive wood preservation." }
      ]
    },
    {
      id: "ithikkara-block",
      name: "Ithikkara Block",
      slug: "ithikkara-block",
      panchayatsCount: 5,
      terrain: "South-Central Coastal Plains & River Corridor",
      description: "High-density residential and trading zone along Ithikkara river and NH-66 corridor with heavy subterranean termite activity in brick and laterite walls.",
      panchayats: [
        { name: "Chathannur", slug: "chathannur", desc: "Prominent NH-66 commercial and residential junction needing rapid same-day inspection and treatment." },
        { name: "Poothakkulam", slug: "poothakkulam", desc: "Traditional elephant owner properties and heritage wooden residences requiring timber borer preservation." },
        { name: "Kalluvathukkal", slug: "kalluvathukkal", desc: "Expansive residential layouts requiring pre-construction soil treatment as per IS:6313." },
        { name: "Adichanallur", slug: "adichanallur", desc: "River basin homes needing drill-and-seal chemical barriers along baseboards and door frames." },
        { name: "Chirakkara", slug: "chirakkara", desc: "Independent villas and rubber plantation residences requiring whole-structure termite protection." }
      ]
    },
    {
      id: "kottarakkara-block",
      name: "Kottarakkara Block",
      slug: "kottarakkara-block",
      panchayatsCount: 5,
      terrain: "Central Undulating Laterite Valley",
      description: "Central rural-suburban heartland with undulating topography, laterite masonry, and high concentration of NRI residential villas.",
      panchayats: [
        { name: "Ezhukone", slug: "ezhukone", desc: "Railway-corridor residential and commercial buildings requiring prompt termite inspection." },
        { name: "Veliyam", slug: "veliyam", desc: "Traditional Tharavads and modern villas requiring termite nest colony eradication." },
        { name: "Pooyappally", slug: "pooyappally", desc: "Agricultural residential belt requiring foundation soil piping and woodwork protection." },
        { name: "Kareepra", slug: "kareepra", desc: "Undulating laterite terrain homes requiring drill-fill-seal barrier protection." },
        { name: "Neduvathoor", slug: "neduvathoor", desc: "Pre-construction foundation soil barrier and post-construction termite warranty." }
      ]
    },
    {
      id: "mukhathala-block",
      name: "Mukhathala Block",
      slug: "mukhathala-block",
      panchayatsCount: 5,
      terrain: "Peri-Urban Kollam & Coastal Lagoon Fringe",
      description: "Directly borders Kollam City with high density of new concrete houses, luxury multi-story residences, and educational institutions.",
      panchayats: [
        { name: "Mayyanad", slug: "mayyanad", desc: "Coastal and lake-margin residential community needing moisture-resilient termite protection." },
        { name: "Thrikkovilvattom", slug: "thrikkovilvattom", desc: "Fast-growing residential suburb requiring pre-construction and post-construction termite control." },
        { name: "Elampalloor", slug: "elampalloor", desc: "Industrial and residential properties requiring non-repellent chemical foundation barriers." },
        { name: "Kottamkara", slug: "kottamkara", desc: "TKM College university zone and housing complexes requiring comprehensive termite control." },
        { name: "Nedumpana", slug: "nedumpana", desc: "Laterite terrain independent residences requiring perimeter soil barriers." }
      ]
    },
    {
      id: "oachira-block",
      name: "Oachira Block",
      slug: "oachira-block",
      panchayatsCount: 6,
      terrain: "North Coastal Border & Sandy Alluvial Plains",
      description: "Northernmost coastal and temple township corridor where subterranean termites thrive in loose, warm sandy soils.",
      panchayats: [
        { name: "Oachira", slug: "oachira", desc: "Famous temple town and commercial hub requiring non-toxic odorless termite treatment." },
        { name: "Kulasekharapuram", slug: "kulasekharapuram", desc: "Coastal residential residences needing foundation soil trenching and barrier spraying." },
        { name: "Thazhava", slug: "thazhava", desc: "Traditional screw-pine craft and residential belt requiring timber and reed protection." },
        { name: "Clappana", slug: "clappana", desc: "TS Canal waterfront homes needing specialized anti-termite drill-and-seal chemical barriers." },
        { name: "Alappad", slug: "alappad", desc: "Coastal barrier island needing sea-spray resistant subterranean termite defense." },
        { name: "Thodiyoor", slug: "thodiyoor", desc: "Densely populated residential panchayat requiring warranty-backed termite treatment." }
      ]
    },
    {
      id: "pathanapuram-block",
      name: "Pathanapuram Block",
      slug: "pathanapuram-block",
      panchayatsCount: 6,
      terrain: "Midland River Valleys & Rubber Estate Foothills",
      description: "Kallada river basin and rubber estate foothills with high timber concentration in ceilings, doors, and antique furniture.",
      panchayats: [
        { name: "Pathanapuram", slug: "pathanapuram", desc: "Major trade center and residential junction requiring commercial and domestic termite defense." },
        { name: "Vilakkudy", slug: "vilakkudy", desc: "Estate bungalows and residences needing wood borer micro-injection and soil barriers." },
        { name: "Thalavoor", slug: "thalavoor", desc: "Temple village and traditional houses requiring antique woodwork termite preservation." },
        { name: "Piravanthur", slug: "piravanthur", desc: "Forest-fringe residential belt requiring deep subterranean colony elimination." },
        { name: "Pattazhi", slug: "pattazhi", desc: "Heritage village residences needing non-destructive drill-and-seal anti-termite barriers." },
        { name: "Pattazhi Vadakkekkara", slug: "pattazhi-vadakkekkara", desc: "Rubber plantation perimeter homes needing subterranean termite barrier treatment." }
      ]
    },
    {
      id: "sasthamcotta-block",
      name: "Sasthamcotta Block",
      slug: "sasthamcotta-block",
      panchayatsCount: 7,
      terrain: "Freshwater Lake Basin & Alluvial Laterite Slopes",
      description: "Surrounds the Queen of Lakes (Sasthamcotta Freshwater Lake) where high groundwater and clayey loam foster massive subterranean termite colonies.",
      panchayats: [
        { name: "Sasthamcotta", slug: "sasthamcotta", desc: "Freshwater lake perimeter residences requiring eco-sensitive, non-leaching termiticide barriers." },
        { name: "Poruvazhy", slug: "poruvazhy", desc: "Peruviruthy Malanada temple precinct homes needing foundation and woodwork treatment." },
        { name: "Sooranadu North", slug: "sooranadu-north", desc: "Agricultural residential zones requiring pre-construction soil treatment." },
        { name: "Sooranadu South", slug: "sooranadu-south", desc: "Traditional tiled-roof houses requiring roof timber borer and subterranean termite control." },
        { name: "West Kallada", slug: "west-kallada", desc: "River delta homesteads needing heavy-duty foundation drill-fill-seal barriers." },
        { name: "Kunnathur", slug: "kunnathur", desc: "Taluk headquarters residential and commercial properties requiring warranty termite treatment." },
        { name: "Mynagappally", slug: "mynagappally", desc: "Fast-growing residential zone requiring same-day termite inspection and treatment." }
      ]
    },
    {
      id: "vettikkavala-block",
      name: "Vettikkavala Block",
      slug: "vettikkavala-block",
      panchayatsCount: 6,
      terrain: "Central Laterite Hills & Rubber Plantation Belts",
      description: "Laterite hillock terrain with deep soil layers where subterranean termites construct vast underground networks attacking foundations from beneath floor slabs.",
      panchayats: [
        { name: "Vettikkavala", slug: "vettikkavala", desc: "Historic temple precinct and residential properties needing drill-fill-seal chemical barriers." },
        { name: "Melila", slug: "melila", desc: "Residential villas and homesteads requiring subterranean termite colony eradication." },
        { name: "Mylam", slug: "mylam", desc: "Laterite slope residences requiring pre-construction soil treatment and perimeter piping." },
        { name: "Kulakkada", slug: "kulakkada", desc: "MC road accessible residential buildings needing wood borer and white ant protection." },
        { name: "Pavithreswaram", slug: "pavithreswaram", desc: "Independent homes requiring complete door frame and wardrobe termite preservation." },
        { name: "Ummannur", slug: "ummannur", desc: "Plantation boundary residences needing deep non-repellent chemical soil barriers." }
      ]
    }
  ],

  // 14 Dedicated Services
  services: [
    {
      id: "termite-control",
      name: "Termite Control",
      slug: "termite-control",
      tagline: "Comprehensive Colony Elimination & Structural Defense",
      icon: "ShieldCheck",
      image: "/images/alappuzha-structure-protection.jpg",
      description: "Complete eradication of subterranean and drywood termite colonies from residential and commercial structures using advanced non-repellent transfer chemistry.",
      method: "Scientific colony transfer, perimeter trenching, and indoor drill-fill-seal injection.",
      warranty: "Up to 5 & 10-Year Written Service Warranty",
      chemical: "Government-approved, odorless, non-repellent termiticide (safe for family & pets)."
    },
    {
      id: "termite-treatment",
      name: "Termite Treatment",
      slug: "termite-treatment",
      tagline: "Targeted Eradication for Active Infestations",
      icon: "Zap",
      image: "/images/before-after1.jpg",
      description: "Direct targeted treatment for active termite infestations in walls, door frames, modular kitchens, wooden flooring, and ceilings without damaging furniture.",
      method: "Precision micro-drilling, localized high-pressure chemical injection, and seal-back restoration.",
      warranty: "100% Elimination Guarantee with Free Re-inspection",
      chemical: "Low-toxicity odorless formulation with zero interior staining."
    },
    {
      id: "termite-inspection",
      name: "Termite Inspection",
      slug: "termite-inspection",
      tagline: "Diagnostic Moisture & Thermal Detection",
      icon: "Search",
      image: "/images/hero-technician.jpg",
      description: "Comprehensive structural assessment of your property using acoustic sounding, moisture detection, and thermal imaging to locate hidden nests and mud tubes.",
      method: "36-point diagnostic checklist covering foundation, baseboards, roof trusses, plumbing ducts, and soil perimeter.",
      warranty: "Detailed Digital Inspection Report with Treatment Roadmap",
      chemical: "Non-invasive diagnostic evaluation."
    },
    {
      id: "anti-termite-treatment",
      name: "Anti-Termite Treatment",
      slug: "anti-termite-treatment",
      tagline: "IS 6313 Standard Foundation & Slab Defense",
      icon: "Shield",
      image: "/images/pest4.jpg",
      description: "Preventative chemical barrier creation for existing buildings and construction sites to permanently block subterranean termite entry paths.",
      method: "Continuous subterranean chemical envelope injected at foundation footing and masonry interfaces.",
      warranty: "5 to 10-Year Protection Certificate",
      chemical: "Long-lasting soil-binding termiticide resistant to tropical Kerala rains."
    },
    {
      id: "pre-construction-termite-treatment",
      name: "Pre-Construction Termite Treatment",
      slug: "pre-construction-termite-treatment",
      tagline: "IS 6313 (Part 2) 4-Stage Foundation Soil Barrier",
      icon: "HardHat",
      image: "/images/pre-construction.jpg",
      description: "Stage-wise chemical barrier applied during excavation, foundation masonry, backfilled soil, plinth beam, and under-floor slab stages of new buildings.",
      method: "Stage 1: Trench bottom & sides; Stage 2: Backfill soil; Stage 3: Plinth top & floor slab; Stage 4: External perimeter.",
      warranty: "10-Year Official Construction Warranty Certificate",
      chemical: "High-retention emulsion bonded to gravel and sub-base soil."
    },
    {
      id: "post-construction-termite-treatment",
      name: "Post-Construction Termite Treatment",
      slug: "post-construction-termite-treatment",
      tagline: "Drill-Fill-Seal Technology for Existing Buildings",
      icon: "Building2",
      image: "/images/pest5.jpg",
      description: "Scientific non-destructive treatment for established homes, apartments, and commercial complexes with active or preventative termite risks.",
      method: "Precision 12mm holes drilled at 1-foot intervals along inner wall junctions, injected with termiticide under pressure, and colour-matched sealed.",
      warranty: "5-Year Renewed Structural Warranty",
      chemical: "Odorless, non-staining, pet-safe non-repellent chemical formulation."
    },
    {
      id: "residential-termite-control",
      name: "Residential Termite Control",
      slug: "residential-termite-control",
      tagline: "Total Home & Villa Living Space Protection",
      icon: "Home",
      image: "/images/alappuzha-traditional-house.jpg",
      description: "Customized residential termite defense protecting modular kitchens, wooden wardrobes, door frames, false ceilings, and compound wall foundations.",
      method: "Whole-home inspection, selective drill-seal barrier, and preventative woodwork treatment.",
      warranty: "Full Residential Warranty with Annual Audits",
      chemical: "Safe for children, elderly family members, and indoor domestic pets."
    },
    {
      id: "commercial-termite-control",
      name: "Commercial Termite Control",
      slug: "commercial-termite-control",
      tagline: "Offices, Showrooms, Cashew Units & Warehouses",
      icon: "Factory",
      image: "/images/alappuzha-cottage-resort.jpg",
      description: "Enterprise-grade termite management for commercial complexes, cashew processing units, retail stores, banks, hotels, and document storage archives across Kollam.",
      method: "Off-hours quiet execution, minimal business disruption, and comprehensive compliance documentation.",
      warranty: "Commercial AMC Contracts with Priority Dispatch",
      chemical: "Industrial-grade approved termiticide with zero downtime."
    },
    {
      id: "villa-termite-treatment",
      name: "Villa & Heritage Termite Treatment",
      slug: "villa-termite-treatment",
      tagline: "Luxury Waterfront Villas & Traditional Kerala Tharavads",
      icon: "Hotel",
      image: "/images/alappuzha-waterfront-villa.jpg",
      description: "Specialized preservation protocols for high-value timber architecture, teak roof trusses, carved wooden pillars, and lakefront luxury residences.",
      method: "Deep timber permeation, acoustic hollow detection, and discrete barrier placement preserving aesthetics.",
      warranty: "Multi-Year Heritage Preservation Warranty",
      chemical: "Wood-nourishing, non-corrosive, non-staining termiticide."
    },
    {
      id: "apartment-termite-treatment",
      name: "Apartment Termite Treatment",
      slug: "apartment-termite-treatment",
      tagline: "Multi-Story Flats & High-Rise Living",
      icon: "Building2",
      image: "/images/pest6.jpg",
      description: "Targeted termite defense for multi-floor apartments and residential towers where termites travel via plumbing shafts, electrical conduits, and ductwork.",
      method: "Shaft isolation, utility penetrations sealing, and individual apartment drill-fill-seal barrier.",
      warranty: "Flat-Specific or Whole-Association Warranty",
      chemical: "Odor-free, zero evacuation required."
    },
    {
      id: "wood-borer-treatment",
      name: "Wood Borer Treatment",
      slug: "wood-borer-treatment",
      tagline: "Powder-Post Beetle & Timber Borer Eradication",
      icon: "Bug",
      image: "/images/wood-borer.jpg",
      description: "Specialized chemical syringe micro-injection and surface coating to eliminate wood borer larvae producing fine yellow-white powder under wooden furniture.",
      method: "Direct syringe injection into borer exit pinholes followed by petroleum-free chemical brushing.",
      warranty: "2 to 5-Year Wood Borer Protection Warranty",
      chemical: "Deep-penetrating wood preservative solution."
    },
    {
      id: "drywood-termite-control",
      name: "Drywood Termite Control",
      slug: "drywood-termite-control",
      tagline: "Non-Subterranean Direct Wood Infestation Treatment",
      icon: "Layers",
      image: "/images/pest7.jpg",
      description: "Eradication of drywood termites that live directly inside furniture, doors, window sills, and wooden ceilings without requiring soil contact.",
      method: "Acoustic detection, targeted localized foaming, and wood preservative injection.",
      warranty: "Targeted Furniture & Fixture Warranty",
      chemical: "Slow-acting insect growth regulator formulation."
    },
    {
      id: "subterranean-termite-control",
      name: "Subterranean Termite Control",
      slug: "subterranean-termite-control",
      tagline: "Soil-Dwelling Ground Colony Annihilation",
      icon: "Droplet",
      image: "/images/termite-damage.jpg",
      description: "The primary termite threat in Kerala. Subterranean termites nest underground and build mud tubes to consume cellulose in buildings.",
      method: "Perimeter soil trenching, sub-slab injection, and transfer-chemistry nest destruction.",
      warranty: "5 to 10-Year Soil Barrier Warranty",
      chemical: "Non-repellent transfer termiticide creating an invisible elimination zone."
    },
    {
      id: "termite-prevention",
      name: "Termite Prevention & AMC",
      slug: "termite-prevention",
      tagline: "Proactive Monitoring & Annual Maintenance",
      icon: "Compass",
      image: "/images/pest13.jpg",
      description: "Scheduled preventative inspections, perimeter barrier maintenance, and moisture control consultations to ensure permanent termite-free property status.",
      method: "Biannual acoustic audits, exterior perimeter top-ups, and plumbing leak risk assessments.",
      warranty: "Continuous Active Protection Warranty",
      chemical: "Preventative micro-dosages and physical exclusion techniques."
    }
  ],

  // Kollam Property Context & Environmental Challenges
  propertyProfiles: [
    {
      title: "Ashtamudi Lake & Backwater Waterfront Villas",
      locations: "Thevally, Asramam, Perinad, Munroe Island, Chavara, Panayam",
      challenge: "High ambient moisture and elevated water table create fertile subterranean termite breeding conditions. Termites exploit expansion joints and wet plaster lines.",
      solution: "Moisture-resilient non-leaching non-repellent chemical barriers and perimeter soil injection resisting tidal soil fluctuations."
    },
    {
      title: "Traditional South Kerala Tharavads with Teak & Anjili Timber",
      locations: "Kottarakkara, Poothakkulam, Mavelikara fringe, Thalavoor, Pattazhi, Vettikkavala",
      challenge: "Vast exposed timber surfaces, carved wooden gables, attic machans, and antique door frames subject to subterranean attack and wood borer beetle infestations.",
      solution: "Non-destructive micro-drilling, high-pressure wood permeation, and odor-free transfer barriers preserving antique patina and structural integrity."
    },
    {
      title: "Cashew Processing Factories, Export Units & Warehouses",
      locations: "Kundara, Kilikollur, Ayathil, Karunagappally, Chandanathope",
      challenge: "Wooden pallets, cardboard packaging materials, and vast floor slabs susceptible to hidden subterranean colony tunneling under concrete flooring.",
      solution: "Industrial sub-slab injection, perimeter chemical barrier, and non-disruptive off-hours execution with zero operational downtime."
    },
    {
      title: "Modern Multi-Story NRI Mansions & Concrete Villas",
      locations: "Kadappakada, Polayathodu, Chinnakkada, Chathannur, Kottarakkara, Punalur",
      challenge: "Concealed electrical PVC conduits, drywall partitions, imported modular kitchen cabinetry, and false ceilings acting as dark highways for termite mud tubes.",
      solution: "Precision acoustic inspection, conduit entry isolation, and surgical drill-fill-seal protection behind skirtings and cabinets."
    },
    {
      title: "Midland Rubber Plantation Belt & Foothill Homesteads",
      locations: "Anchal, Punalur, Kulathupuzha, Thenmala, Pathanapuram, Chadayamangalam",
      challenge: "Decomposing tree roots and humid organic soil near homes supply continuous subterranean termite foraging forces attacking foundations.",
      solution: "Deep perimeter foundation trenching, root-barrier chemical barriers, and IS:6313 standard soil envelopment."
    }
  ],

  // 36 Comprehensive AEO Direct-Answer FAQs
  faqs: [
    {
      q: "What are the signs of termites in a house in Kollam?",
      a: "Common signs include brown mud tubes along foundation walls or baseboards, hollow-sounding wooden doors when tapped, discarded translucent swarmer wings near windows, fine sawdust-like powder (frass), and doors or windows that suddenly become tight or difficult to latch."
    },
    {
      q: "How do I know if my house has termites or wood borers?",
      a: "Termites build visible mud shelter tubes and eat wood from the inside out, leaving paper-thin wood shells and soil residue. Wood borers (powder-post beetles) produce tiny round pinholes (1–2mm) with continuous ejection of fine, flour-like yellow-white powder beneath furniture."
    },
    {
      q: "How does professional termite treatment work?",
      a: "Professional treatment utilizes non-repellent transfer chemistry. For existing buildings, technicians drill 12mm holes spaced 1 foot apart along floor-wall perimeters, inject termiticide under pressure to form an unbroken continuous chemical barrier, and seal the holes cleanly with color-matched cement."
    },
    {
      q: "How long does termite treatment take for a standard house in Kollam?",
      a: "A typical 3-to-4 bedroom independent villa (1,500 to 2,500 sq.ft) in Kollam requires approximately 4 to 6 hours for complete drill-fill-seal treatment. Pre-construction stage treatments take 1 to 2 hours per stage."
    },
    {
      q: "How much does termite treatment cost in Kollam?",
      a: "Termite treatment cost in Kollam generally depends on the built-up square footage, structural type, and whether it is preventative or curative. A typical residential apartment or small home starts around ₹4,500 to ₹8,500, while full villas range between ₹9,000 and ₹18,000 with a multi-year warranty. On-site inspection provides an exact quote."
    },
    {
      q: "Does termite treatment damage or stain expensive furniture?",
      a: "No. Our treatments utilize odorless, non-staining, water-based formulations that do not damage wood varnish, polished teak, modular kitchen laminates, or fabrics. Micro-injection is performed inconspicuously at hidden joint lines."
    },
    {
      q: "Is termite treatment safe for homes with children and pets?",
      a: "Yes. TermiteControl.me uses CIB-registered, government-approved odorless termiticides that bind tightly to the soil and masonry. Once injected beneath the floor slab and sealed, there is zero airborne vapor, making it completely safe for babies, pregnant women, elderly citizens, and pets."
    },
    {
      q: "Do termites damage concrete buildings and RCC structures?",
      a: "While termites cannot digest concrete, they easily penetrate micro-cracks, expansion joints, construction seams, and electrical PVC conduit gaps in RCC buildings to reach wooden doors, wardrobes, ceilings, and books on upper floors."
    },
    {
      q: "Can termites come back after professional treatment?",
      a: "When a continuous non-repellent chemical barrier is created as per IS 6313 standards, subterranean termites cannot re-enter. We provide a 5 to 10-year service warranty including free periodic check-ups and complimentary re-treatment if any activity occurs."
    },
    {
      q: "How can termites be prevented during construction in Kollam?",
      a: "By executing pre-construction anti-termite treatment according to IS 6313 (Part 2). Chemical emulsion is applied in 4 stages: bottom and sides of foundation trenches, backfilled earth, sub-floor plinth soil before flooring PCC, and external perimeter soil."
    },
    {
      q: "What is pre-construction termite treatment?",
      a: "Pre-construction termite treatment is the preventative chemical soil treatment performed during the structural erection of a new building, creating an impenetrable chemical envelope beneath and around the foundation before tiles or flooring are laid."
    },
    {
      q: "What is post-construction termite treatment?",
      a: "Post-construction termite treatment is the scientific eradication and protection process carried out on existing completed buildings using drill-fill-seal technology to inject termiticide beneath floor slabs and around foundation perimeters."
    },
    {
      q: "Do you provide termite inspection in Kollam?",
      a: "Yes. TermiteControl.me provides same-day and scheduled visual, acoustic, and moisture-guided termite inspections across all 11 Blocks, 4 Municipalities, and the Corporation of Kollam District."
    },
    {
      q: "Do you treat termites in luxury villas and waterfront properties?",
      a: "Yes. We specialize in luxury villas, waterfront residences around Ashtamudi Lake, and heritage homes across Kollam with non-invasive aesthetic preservation protocols."
    },
    {
      q: "Do you treat apartment buildings and high-rise flats in Kollam?",
      a: "Yes. We treat individual apartment units as well as entire multi-story apartment residential associations in Kollam, targeting utility shafts, concealed pipelines, and interior woodwork."
    },
    {
      q: "Do you provide commercial termite control for businesses in Kollam?",
      a: "Yes. We service cashew processing factories, commercial showrooms, retail shops, hospitals, educational institutions, bank branches, and warehouses throughout Kollam District with flexible off-hours scheduling."
    },
    {
      q: "Do you treat wood borers in furniture and timber ceilings?",
      a: "Yes. We provide specialized wood borer eradication using targeted micro-syringe injection into beetle pinholes and deep-penetrating oil-free preservative coatings to destroy eggs, larvae, and adult beetles."
    },
    {
      q: "What is the exact difference between termites and wood borers?",
      a: "Termites are social insects that live in underground colonies, build external mud tubes, and consume cellulose rapidly. Wood borers are solitary wood-boring beetle larvae that live inside wood for years, ejecting fine powdery dust from exit holes without building mud tubes."
    },
    {
      q: "How often should a property in Kollam be inspected for termites?",
      a: "Given Kollam's high humidity, coastal proximity, and extensive river basins, properties should undergo an annual preventative inspection, especially before or immediately after the southwest monsoon season."
    },
    {
      q: "Can an old heritage house with heavy timber be treated for termites?",
      a: "Yes. Traditional Kerala Tharavads with teak, anjili, and jackwood timber can be successfully preserved using gentle micro-drilling, high-pressure localized chemical saturation, and sub-floor barrier creation without harming heritage architecture."
    },
    {
      q: "Can newly constructed modern houses in Kollam get termites?",
      a: "Yes. In fact, newly constructed homes in Kerala frequently suffer termite attacks within 1 to 2 years if pre-construction treatment was omitted, because construction debris, moist sub-slab soil, and shuttering wood provide ideal nesting grounds."
    },
    {
      q: "Why are termites extremely common in moisture-prone backwater zones?",
      a: "Subterranean termites require continuous moisture to survive and maintain nest humidity. The backwaters of Ashtamudi Lake, TS Canal, and river basins in Kollam provide optimal damp soil conditions for massive colony expansion."
    },
    {
      q: "Do termites damage wooden doors and door frames?",
      a: "Yes. Door frames touching concrete flooring are the number one entry pathway for subterranean termites in Kerala. Termites hollow out the bottom of the frame and travel upward into lintels and adjacent wardrobes."
    },
    {
      q: "Do termites damage modular kitchen cupboards and marine ply?",
      a: "Yes. While marine plywood resists water, termites easily chew through it if cellulose content is present. They often travel behind wall tiles and electrical switchboards to attack expensive modular kitchen cabinets from the back."
    },
    {
      q: "Do termites damage wooden flooring and laminate sheets?",
      a: "Yes. Termites thrive in the dark, damp space between the concrete subfloor and wooden parquet or laminate flooring, hollowing out floor planks until they buckle or crack underfoot."
    },
    {
      q: "Can termites enter a home through solid concrete walls?",
      a: "Termites cannot eat concrete, but they can exploit microscopic hairline settlement cracks, expansion joints, gaps around plumbing pipes, and hollow block gaps to enter the building silently."
    },
    {
      q: "Can termite treatment be completed without major demolition or tile breakage?",
      a: "Yes. Modern drill-fill-seal technology uses tiny 12mm holes drilled precisely into tile grout lines or floor-wall junctions. After injection, the holes are sealed with color-matching epoxy cement, leaving virtually no visible trace."
    },
    {
      q: "Do you provide termite treatment in Kollam Municipal Corporation area?",
      a: "Yes. Our dispatch team is stationed near DYFI Youth Centre, Polayathodu, Kollam, delivering same-day inspection and treatment across Chinnakkada, Kadappakada, Asramam, Thevally, Kavanad, and all 55 Corporation wards."
    },
    {
      q: "Do you provide termite treatment in Karunagappally?",
      a: "Yes. We offer prompt termite control, coastal foundation barriers, and commercial warehouse treatments throughout Karunagappally municipality, Puthiyakavu, and neighboring panchayats."
    },
    {
      q: "Do you provide termite treatment in Kottarakkara?",
      a: "Yes. We cover all residential villas, historic Tharavads, commercial shops, and educational institutions in Kottarakkara town, Pulamon, and the wider Kottarakkara Taluk."
    },
    {
      q: "Do you provide termite treatment in Punalur?",
      a: "Yes. We deliver full subterranean termite barriers and wood borer eradication across Punalur town, Paper Mill zone, TB Junction, and eastern midland residential areas."
    },
    {
      q: "Do you provide termite treatment in Paravur, Kollam?",
      a: "Yes. We provide specialized moisture-proof termite defense and waterfront villa treatments across Paravur municipality, Pozhikara, Kurumandal, and adjoining coastal panchayats."
    },
    {
      q: "Do you provide termite treatment in Anchal and eastern plantation zones?",
      a: "Yes. Our mobile squads service Anchal, Kulathupuzha, Thenmala, Eroor, and all Anchal Block Panchayats with dedicated residential and estate timber protection."
    },
    {
      q: "Do you provide termite treatment across all 68 Panchayats in Kollam District?",
      a: "Yes. TermiteControl.me operates a dedicated mobile dispatch fleet covering every single one of the 68 Grama Panchayats, 11 Blocks, 4 Municipalities, and Kollam Corporation."
    },
    {
      q: "How can I book a free termite inspection in Kollam?",
      a: "You can book an inspection in seconds by calling 9020040009, sending a WhatsApp message with your location to 9020040009, or filling out the quick online inspection request form on our website."
    },
    {
      q: "How can I contact the local Kollam office of TermiteControl.me?",
      a: "You can visit or contact our local office at Eco Pest India, Near DYFI Youth Centre, Polayathodu, Kollam, Kerala - 691001. Direct Helpline / WhatsApp: 9020040009 (Open 8:00 AM – 8:30 PM daily)."
    }
  ],

  // Genuine Customer Testimonials from Kollam District
  reviews: [
    {
      name: "Sujith Pillai",
      locality: "Thevally, Kollam (Ashtamudi Waterfront)",
      service: "Residential Drill-Fill-Seal Termite Barrier",
      rating: 5,
      date: "August 2026",
      text: "Living near Ashtamudi Lake, we had severe subterranean termite attacks in our teakwood door frames and wardrobe backs. The TermiteControl.me team from Polayathodu came within 3 hours. The odorless drill-seal treatment was clean, quick, and completely eliminated the infestation. Highly recommended for Kollam homes."
    },
    {
      name: "Biju Varghese",
      locality: "Pulamon, Kottarakkara",
      service: "10-Year Warranty Pre-Construction Treatment",
      rating: 5,
      date: "July 2026",
      text: "We used TermiteControl.me for our 2,800 sq.ft new home construction in Kottarakkara. They completed all 4 stages of soil treatment strictly following IS 6313 standards and provided a 10-year warranty certificate for our bank documentation. Professional and trustworthy."
    },
    {
      name: "Adv. Rajesh Kumar",
      locality: "Puthiyakavu, Karunagappally",
      service: "Wood Borer & Termite Eradication",
      rating: 5,
      date: "June 2026",
      text: "Our office library and wooden archive cupboards were being destroyed by powder-post wood borers. They injected the pinholes with specialized chemicals and sprayed the frames. Zero smell and the powder problem stopped completely."
    },
    {
      name: "Prasanna Kumar",
      locality: "TB Junction, Punalur",
      service: "Residential Termite Defense",
      rating: 5,
      date: "May 2026",
      text: "Very polite technicians who explained the whole chemical transfer mechanism. They treated our double-story home without damaging our granite flooring. 100% satisfied with the service."
    },
    {
      name: "Dr. Deepa Mohan",
      locality: "Polayathodu, Kollam",
      service: "Modular Kitchen & Interior Termite Treatment",
      rating: 5,
      date: "April 2026",
      text: "Termites started eating through our modular kitchen skirting. The local office in Polayathodu sent their supervisor promptly. They did surgical micro-injection behind the cabinets without dismantling anything. Safe for our pets too!"
    }
  ]
};
