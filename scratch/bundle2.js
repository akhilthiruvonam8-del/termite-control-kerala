var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pages/WayanadLandingPage.jsx
var WayanadLandingPage_exports = {};
__export(WayanadLandingPage_exports, {
  default: () => WayanadLandingPage
});
module.exports = __toCommonJS(WayanadLandingPage_exports);
var import_react3 = __toESM(require("react"), 1);
var import_lucide_react3 = require("lucide-react");

// src/data/wayanadData.js
var WAYANAD_DATA = {
  meta: {
    title: "Termite Control in Wayanad | Anti-Termite & Pest Control Sultan Bathery, Kalpetta, Resorts",
    description: "Best termite control, anti-termite treatment & general pest control in Wayanad. Central service desk near St. Mary's College, Kuppadi, Sultan Bathery. IS:6313 certified, odorless & eco-safe for homes, luxury resorts & homestays. Call 9020040009.",
    keywords: "termite control wayanad, termite treatment wayanad, termite control sultan bathery, termite treatment sultan bathery, termite control kalpetta, termite treatment kalpetta, termite control mananthavady, pest control wayanad, resort pest control wayanad, homestay termite treatment wayanad, wood borer treatment wayanad, anti termite treatment vythiri, termite inspection sultan bathery, pest control for hotels wayanad"
  },
  brand: {
    name: "TermiteControl.me",
    parentCompany: "Eco Pest India",
    tagline: "Protecting What You've Built.",
    secondaryTagline: "Termite & Pest Control. Local Wayanad Expertise. Hill Station & Resort Coverage.",
    phone: "9020040009",
    phoneDisplay: "90200 40009",
    whatsappNumber: "919020040009",
    email: "support@termitecontrol.me",
    justdialRating: "4.9 / 5.0",
    justdialReviewsCount: "940+ Verified Ratings",
    officeAddress: {
      brand: "TermiteControl.me",
      unit: "A Unit of Eco Pest India",
      line1: "Near St. Mary's College, Kuppadi",
      city: "Sultan Bathery",
      district: "Wayanad",
      state: "Kerala",
      pincode: "673592",
      landmark: "Near St. Mary's College, Kuppadi Road",
      locality: "Kuppadi / Sultan Bathery",
      deskPhone: "9020040009",
      timing: "Open 7 Days: 8:00 AM \u2013 8:30 PM (Emergency Pest Dispatch Available)",
      geo: {
        latitude: 11.6625,
        longitude: 76.257
      }
    }
  },
  // 4 Major Commercial, Administrative & Tourism Epicenters of Wayanad
  majorHubs: [
    {
      id: "sultan-bathery",
      name: "Sultan Bathery & Kuppadi Hub",
      slug: "sultan-bathery",
      type: "Central Service Base & Commercial Gateway",
      tagline: "Primary Dispatch Desk Near St. Mary's College, Kuppadi",
      description: "Our main Wayanad service center operates from Kuppadi, Sultan Bathery. Providing rapid 45-minute on-site response for residential villas, plantation estates, commercial establishments, and resorts along NH-766.",
      prominentAreas: [
        "Kuppadi",
        "Sultan Bathery Town",
        "Chungam",
        "Assumption Junction",
        "Beenachi",
        "Chedalath",
        "Kidanganad",
        "Cheeral",
        "Naikatty",
        "Kolagappara",
        "Vadakkanad",
        "Pazhupathoor",
        "Fairland",
        "Thazhathangadi",
        "Dottappankulam",
        "Kaivattumoola"
      ]
    },
    {
      id: "kalpetta",
      name: "Kalpetta (District Headquarters)",
      slug: "kalpetta",
      type: "District Administrative HQ & Central Crossroads",
      tagline: "Commercial Core, Modern Residences & Central Tourism Hub",
      description: "Dedicated anti-termite drill-fill-seal barriers, wood borer treatments, and commercial pest control for administrative offices, banks, retail complexes, and luxury hillside residences across Kalpetta.",
      prominentAreas: [
        "Kalpetta Town",
        "Pinangode Road",
        "Kainatty",
        "Emily",
        "Devershola",
        "Mandad",
        "Kalpetta North",
        "Kalpetta South",
        "Kakkavayal",
        "Rani Mala",
        "Munderi",
        "Vellaramkunnu",
        "Adivaram Road",
        "Chuzhali",
        "Gudalai"
      ]
    },
    {
      id: "mananthavady",
      name: "Mananthavady (Northern Highlands)",
      slug: "mananthavady",
      type: "Northern Cultural & Heritage Hub",
      tagline: "Highland Residences, Heritage Tharavads & River Valley Properties",
      description: "Specialized foundation soil barriers and timber preservation for traditional wooden tharavads, sprawling coffee plantations, institutions, and tourist homestays in northern Wayanad.",
      prominentAreas: [
        "Mananthavady Town",
        "Payyampally",
        "Valliyoorkavu",
        "Thonichal",
        "Dwaraka",
        "Koyileru",
        "Arattuthara",
        "Kallody",
        "Cherukattoor",
        "Mananthavady Hospital Road",
        "Cheeyambam",
        "Paleri",
        "Kurukkanmoola",
        "Kaniyaram"
      ]
    },
    {
      id: "vythiri-meppadi",
      name: "Vythiri, Lakkidi & Meppadi",
      slug: "vythiri-meppadi",
      type: "Rainforest Resort Capital & Eco-Tourism Belt",
      tagline: "Luxury Resorts, Treehouses, Eco-Lodges & Tea Plantation Chalets",
      description: "Specialized eco-safe, zero-odor termite protection and timber borer preservation designed specifically for high-rainfall luxury resorts, wooden cottages, treehouses, and boutique homestays.",
      prominentAreas: [
        "Vythiri Town",
        "Lakkidi",
        "Pookode Lake Area",
        "Chundale",
        "Meppadi Town",
        "Chembra Peak Base",
        "Soochipara",
        "Kanthapara",
        "Chooralmala Road",
        "Attamala",
        "Vellarimala Fringe",
        "Thalappuzha Road",
        "Kunnathidavaka",
        "Old Vythiri"
      ]
    }
  ],
  // 3 Administrative Taluks in Wayanad District
  taluks: [
    {
      id: "sulthan-bathery-taluk",
      name: "Sulthan Bathery Taluk",
      headquarters: "Sulthan Bathery",
      coverage: "Sulthan Bathery Municipality, Ambalavayal, Nenmeni, Noolpuzha, Poothadi, Meenangadi, Pulpally, Mullankolly, Kuppadi, Cheeral, Naikatty, Vadakkanad, Irulam, Krishnagiri, Beenachi, Koleri."
    },
    {
      id: "vythiri-taluk",
      name: "Vythiri Taluk",
      headquarters: "Kalpetta",
      coverage: "Kalpetta Municipality, Vythiri, Meppadi, Muppainad, Muttil, Pozhuthana, Padinjarathara, Kottathara, Kaniyambetta, Chundale, Vengappally, Thariyode, Lakkidi, Pookode, Arappatta, Kakkavayal."
    },
    {
      id: "mananthavady-taluk",
      name: "Mananthavady Taluk",
      headquarters: "Mananthavady",
      coverage: "Mananthavady Municipality, Panamaram, Thirunelly, Vellamunda, Thondernad, Thavinhal, Edavaka, Begur, Kuruva Island, Payyampally, Dwaraka, Valliyoorkavu."
    }
  ],
  // 4 Block Panchayats & All 23 Grama Panchayats in Wayanad
  blocks: [
    {
      id: "sultan-bathery-block",
      name: "Sultan Bathery Block",
      headquarters: "Sultan Bathery",
      tagline: "Eastern Plantation Gateway, Wildlife Fringe & Commercial Corridor",
      description: "Subterranean termite soil barriers, pre-construction treatments, and plantation bungalow protection across eastern Wayanad.",
      panchayats: [
        { name: "Ambalavayal", areas: "Ambalavayal Town, Edakkal Caves, Regional Agricultural Research Station, Karapuzha Dam Fringe, Malika, Vaduvanchal Road" },
        { name: "Meenangadi", areas: "Meenangadi Town, Krishnagiri, Purakkadi, Kolagappara, 54th Mile, Kaniyambetta Link" },
        { name: "Nenmeni", areas: "Nenmeni, Koliyadi, Mangalam, Chulliyode, Nambiar Kunnu, Cheeral Border" },
        { name: "Noolpuzha", areas: "Noolpuzha, Naikatty, Kalloor, Muthanga Sanctuary Gate, Vadakkanad Road, Ponkuzhi" },
        { name: "Poothadi", areas: "Poothadi, Kenichira, Nadavayal, Valavayal, Manikavu, Koleri" }
      ]
    },
    {
      id: "panamaram-pulpally-block",
      name: "Panamaram & Pulpally Block",
      headquarters: "Panamaram",
      tagline: "Central Agricultural Heart, River Valleys & Border Homesteads",
      description: "Targeted wood borer treatments, residential drill-fill-seal, and subterranean termite nest destruction for agrarian estates and modern villas.",
      panchayats: [
        { name: "Pulpally", areas: "Pulpally Town, Seetha Mount, Mullankolly Road, Marakkadavu, Palvelicham, Anandamala" },
        { name: "Mullankolly", areas: "Mullankolly, Padichira, Vattachira, Sasimala, Kabini River Basin, Perikalloor" },
        { name: "Panamaram", areas: "Panamaram Town, Cherukattoor, Neervaram, Kayakkunnu, Mathamangalam, Koolivayal" },
        { name: "Kaniyambetta", areas: "Kaniyambetta, Kambalakkad, Varadoor, Pachilakkad, Millumukku" }
      ]
    },
    {
      id: "kalpetta-vythiri-block",
      name: "Kalpetta & Vythiri Block",
      headquarters: "Kalpetta",
      tagline: "Rainforest Resort Corridor, Lake Retreats & Highland Residences",
      description: "Eco-safe, non-leaching termiticides and odorless timber treatments tailored for luxury forest resorts, treehouses, and lakeside cottages.",
      panchayats: [
        { name: "Vythiri", areas: "Vythiri Town, Old Vythiri, Lakkidi, Chain Tree Area, Kunnathidavaka, Pookode Road" },
        { name: "Meppadi", areas: "Meppadi Town, Chembra Peak Road, Soochipara, Kanthapara, Nedumbala, Chooralmala" },
        { name: "Muppainad", areas: "Muppainad, Vaduvanchal, Chundale Border, Rippon Tea Estate, Meppadi Link" },
        { name: "Muttil", areas: "Muttil North, Muttil South, Mandad, Kainatty Link, WMO College Area" },
        { name: "Pozhuthana", areas: "Pozhuthana, Sugandhagiri, Peringoda, Kurumbalakotta Foothills, Achooranam" },
        { name: "Padinjarathara", areas: "Padinjarathara Town, Banasura Sagar Dam, Kuppadithara, Venniyode, Karlad Lake Border" },
        { name: "Kottathara", areas: "Kottathara, Venniyode, Kumbilery, Kurumbalakotta Base, Vettathur" },
        { name: "Vengappally", areas: "Vengappally, Puzhamudi, Pinangode Border, Chuzhali" },
        { name: "Thariyode", areas: "Thariyode, Karlad Lake Area, Kavumannam, 10th Mile, Banasura Foothills" }
      ]
    },
    {
      id: "mananthavady-block",
      name: "Mananthavady Block",
      headquarters: "Mananthavady",
      tagline: "Heritage Teak Tharavads, River Island Resorts & Forest Fringe Belts",
      description: "Non-destructive micro-drilling, deep timber permeation, and pre-construction foundation piping for northern Wayanad properties.",
      panchayats: [
        { name: "Thirunelly", areas: "Thirunelly Temple Area, Appapara, Thrissilery, Brahmagiri Base, Kattikulam, Bavali" },
        { name: "Vellamunda", areas: "Vellamunda, Ozhakkodi, Taruvana, Pulikkal, Kattayad, Kanjirangad" },
        { name: "Thondernad", areas: "Thondernad, Korome, Makkiyad, Kunjome, Mattilayam, Vellamunda Border" },
        { name: "Thavinhal", areas: "Thavinhal, Thalappuzha, Valad, Boys Town, Mananthavady Pass, Kambamala" },
        { name: "Edavaka", areas: "Edavaka, Dwaraka, Kallody, Thonichal, Pallikkal, Payyampally Border" }
      ]
    }
  ],
  // Special Tourism & Hospitality Destination Targeting in Wayanad
  tourismDestinations: [
    {
      title: "Vythiri & Lakkidi Rainforest Luxury Resorts",
      locations: "Vythiri, Lakkidi, Chain Tree, Pookode, Old Vythiri",
      challenge: "Dense rainforest humidity, heavy rainfall, and elevated soil moisture create hyper-active subterranean termite activity attacking wooden stilt chalets, bamboo decks, and luxury forest cottages.",
      solution: "Odorless, non-leaching termiticide barrier injection, timber preservative saturation, and eco-safe formulations harmless to forest wildlife and guests."
    },
    {
      title: "Meppadi & Chembra Peak Plantation Retreats",
      locations: "Meppadi, Chembra Peak Base, Soochipara Falls, Kanthapara, Chooralmala",
      challenge: "High altitude tea/coffee plantation estates with extensive teak roof trusses, wooden floorings, and damp sub-soil termite colonies tunneling under foundation slabs.",
      solution: "Sub-slab chemical barrier creation, acoustic hollow detection, and periodic preventative wood borer micro-syringe treatments."
    },
    {
      title: "Banasura Sagar Dam & Padinjarathara Waterfront Cottages",
      locations: "Padinjarathara, Banasura Dam Area, Thariyode, Karlad Lake, Kuppadithara",
      challenge: "Water reservoir proximity creates continuous soil dampness, encouraging subterranean termites (Coptotermes gestroi) to penetrate concrete expansion joints and wooden wall paneling.",
      solution: "Moisture-resistant non-repellent transfer chemistry creating an impenetrable underground perimeter shield."
    },
    {
      title: "Edakkal Caves & Ambalavayal Heritage Homestays",
      locations: "Ambalavayal, Edakkal, Karapuzha Lakeside, Vaduvanchal, Malika",
      challenge: "Traditional stone and timber architecture with antique wooden pillars and exposed ceiling rafters vulnerable to powder-post beetle larvae (wood borers) and drywood termites.",
      solution: "Specialized syringe injection into borer exit pinholes, non-staining timber coatings, and localized drywood foaming."
    },
    {
      title: "Kuruva Dweep, Begur & Thirunelly Forest Lodges",
      locations: "Kuruva Island, Begur, Thirunelly, Kattikulam, Bavali, Tholpetty",
      challenge: "Forest-edge riverine environment with decomposing root systems supplying massive subterranean termite colonies that migrate toward wooden homestays and eco-lodges.",
      solution: "Perimeter soil trenching, transfer-chemistry nest annihilation, and zero-odor scheduled Annual Maintenance Contracts (AMC)."
    }
  ],
  // 14 Comprehensive Termite & Timber Protection Services in Wayanad
  services: [
    {
      id: "termite-control",
      name: "Termite Control",
      slug: "termite-control",
      tagline: "Comprehensive Colony Elimination & Structural Defense",
      icon: "ShieldAlert",
      image: "/images/service-termite-control.jpg",
      description: "Total subterranean termite extermination for residential, commercial, and resort properties in Wayanad. Uses advanced non-repellent transfer termiticides that worker termites unknowingly carry back to the queen, annihilating the entire underground colony.",
      method: "Perimeter soil barrier, sub-slab injection, and transfer-chemistry nest destruction.",
      warranty: "5-Year Written Guarantee with Periodic Audits",
      chemical: "Government-approved, odorless, non-repellent termiticide (safe for guests & pets)."
    },
    {
      id: "termite-treatment",
      name: "Termite Treatment",
      slug: "termite-treatment",
      tagline: "Targeted Eradication for Active Infestations",
      icon: "Flame",
      image: "/images/service-termite-treatment.jpg",
      description: "Fast-acting curative termite eradication when live mud tubes or active white ants are discovered in door frames, false ceilings, modular kitchens, or wooden rafters across Wayanad.",
      method: "Precision injection directly into active mud galleries, infested timber junctions, and foundation voids.",
      warranty: "Immediate Clearance Certificate + Multi-Year Structural Warranty",
      chemical: "Fast-acting colony-eliminating formulation with zero downtime."
    },
    {
      id: "termite-inspection",
      name: "Termite Inspection",
      slug: "termite-inspection",
      tagline: "Diagnostic Moisture & Acoustic Thermal Detection",
      icon: "Search",
      image: "/images/service-termite-inspection.jpg",
      description: "Thorough non-destructive structural diagnostic assessment. Our Wayanad technicians check wall junctions, electrical conduits, ceiling beams, sub-floor crawlspaces, and wooden furniture for concealed termite colonies.",
      method: "Digital moisture meters, acoustic listening tools, and sub-surface thermal analysis.",
      warranty: "Comprehensive Written Diagnostic Report & Custom Treatment Blueprint",
      chemical: "Non-invasive, non-destructive diagnostic process."
    },
    {
      id: "anti-termite-treatment",
      name: "Anti-Termite Treatment",
      slug: "anti-termite-treatment",
      tagline: "Chemical Barrier Protection Under IS:6313 (Part 2 & 3)",
      icon: "ShieldCheck",
      image: "/images/pest4.jpg",
      description: "Standardized chemical barrier creation following Bureau of Indian Standards (IS:6313) norms for pre-construction and post-construction buildings throughout Wayanad.",
      method: "Continuous soil saturation, plinth masonry treatment, and foundation conduit sealing.",
      warranty: "5 to 10-Year Certified Warranty with Renewal Options",
      chemical: "IS-compliant termiticide forming an impenetrable chemical zone around the structure."
    },
    {
      id: "pre-construction-termite-treatment",
      name: "Pre-Construction Termite Treatment",
      slug: "pre-construction-termite-treatment",
      tagline: "IS 6313 (Part 2) 4-Stage Foundation Soil Barrier",
      icon: "Hammer",
      image: "/images/service-pre-construction.jpg",
      description: "Essential termite defense implemented during building construction in Wayanad. Treats bottom/sides of foundation trenches, backfill soil, plinth filling, and perimeter external soil before floor flooring is laid.",
      method: "4-Stage soil chemical saturation under foundation footings, plinth beam walls, and perforated reticulation piping installation.",
      warranty: "10-Year Full Structural Pre-Construction Warranty",
      chemical: "High-stability termiticide bonded with soil particles resisting high rainfall leaching."
    },
    {
      id: "post-construction-termite-treatment",
      name: "Post-Construction Termite Treatment",
      slug: "post-construction-termite-treatment",
      tagline: "Drill-Fill-Seal Technology for Existing Buildings",
      icon: "Building2",
      image: "/images/service-post-construction.jpg",
      description: "Scientific non-destructive treatment for established villas, apartments, commercial buildings, and resorts with active or preventative termite risks in Wayanad.",
      method: "Precision 12mm holes drilled at 1-foot intervals along inner wall junctions, injected with termiticide under pressure, and colour-matched sealed.",
      warranty: "5-Year Renewed Structural Warranty",
      chemical: "Odorless, non-staining, pet-safe non-repellent chemical formulation."
    },
    {
      id: "residential-termite-control",
      name: "Residential Termite Control",
      slug: "residential-termite-control",
      tagline: "Total Home, Villa & Plantation Bungalow Protection",
      icon: "Home",
      image: "/images/service-residential.jpg",
      description: "Customized residential termite defense protecting modular kitchens, wooden wardrobes, teak door frames, false ceilings, and compound wall foundations for homeowners across Sultan Bathery, Kalpetta, and Mananthavady.",
      method: "Whole-home inspection, selective drill-seal barrier, and preventative woodwork treatment.",
      warranty: "Full Residential Warranty with Annual Audits",
      chemical: "Safe for children, elderly family members, and indoor domestic pets."
    },
    {
      id: "commercial-termite-control",
      name: "Commercial & Institutional Pest Control",
      slug: "commercial-termite-control",
      tagline: "Offices, Spice Processing Plants & Commercial Buildings",
      icon: "Factory",
      image: "/images/service-commercial.jpg",
      description: "Enterprise-grade termite management for commercial complexes, spice export units, coffee curing plants, retail stores, banks, schools, and hospitals across Wayanad.",
      method: "Off-hours quiet execution, minimal business disruption, and comprehensive compliance documentation.",
      warranty: "Commercial AMC Contracts with Priority Dispatch",
      chemical: "Industrial-grade approved termiticide with zero downtime."
    },
    {
      id: "resort-homestay-termite-treatment",
      name: "Resort, Treehouse & Eco-Lodge Timber Treatment",
      slug: "resort-homestay-termite-treatment",
      tagline: "Specialized Care for High-Altitude Timber Hospitality Properties",
      icon: "Hotel",
      image: "/images/wayanad-resort-cottage.jpg",
      description: "Tailored preservation protocols for high-value timber architecture, bamboo stilt cottages, treehouses, and resort chalets in Vythiri, Meppadi, and Lakkidi. 100% odor-free with zero evacuation required for guests.",
      method: "Deep timber permeation, acoustic hollow detection, and discrete non-disruptive barrier placement.",
      warranty: "Multi-Year Hospitality Preservation Warranty",
      chemical: "Eco-safe, wood-nourishing, non-corrosive, wildlife-friendly termiticide."
    },
    {
      id: "holiday-home-termite-protection",
      name: "Homestay & Holiday Home Protection",
      slug: "holiday-home-termite-protection",
      tagline: "Heritage Homestays, Airbnb Cottages & Heritage Tharavads",
      icon: "Hotel",
      image: "/images/wayanad-heritage-tharavad.jpg",
      description: "Targeted termite defense for homestays and heritage properties where continuous tourist occupancy and antique wooden structures require delicate, odorless, and fast treatment.",
      method: "Concealed micro-injection, utility penetration sealing, and exterior perimeter trench barriers.",
      warranty: "Homestay Specific Warranty with Biannual Inspections",
      chemical: "Zero-odor, eco-certified termiticide."
    },
    {
      id: "wood-borer-treatment",
      name: "Wood Borer Treatment",
      slug: "wood-borer-treatment",
      tagline: "Powder-Post Beetle & Timber Borer Eradication",
      icon: "Bug",
      image: "/images/wood-borer.jpg",
      description: "Specialized chemical syringe micro-injection and surface coating to eliminate wood borer larvae (powder-post beetles) producing fine yellow-white powder beneath wooden furniture and roof beams in Wayanad.",
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
      description: "Eradication of drywood termites that live directly inside furniture, doors, window sills, and wooden ceilings without requiring soil contact in Wayanad's highland environment.",
      method: "Acoustic detection, targeted localized foaming, and wood preservative injection.",
      warranty: "Targeted Furniture & Fixture Warranty",
      chemical: "Slow-acting insect growth regulator formulation."
    },
    {
      id: "subterranean-termite-control",
      name: "Subterranean Termite Control",
      slug: "subterranean-termite-control",
      tagline: "Soil-Dwelling Ground Colony Annihilation for High-Rainfall Belts",
      icon: "Droplet",
      image: "/images/termite-damage.jpg",
      description: "The primary termite threat in Wayanad. Subterranean termites nest underground in damp plantation soil and build mud tubes to consume cellulose in buildings and resorts.",
      method: "Perimeter soil trenching, sub-slab injection, and transfer-chemistry nest destruction.",
      warranty: "5 to 10-Year Soil Barrier Warranty",
      chemical: "Non-repellent transfer termiticide creating an invisible elimination zone."
    },
    {
      id: "termite-prevention-amc",
      name: "Termite Prevention & AMC",
      slug: "termite-prevention-amc",
      tagline: "Proactive Monitoring & Annual Maintenance for Wayanad Properties",
      icon: "Compass",
      image: "/images/service-prevention-amc.jpg",
      description: "Scheduled preventative inspections, perimeter barrier top-ups, and moisture control consultations to ensure permanent termite-free property status for luxury resorts, homestays, and residences.",
      method: "Biannual acoustic audits, exterior perimeter refreshers, and plumbing dampness assessments.",
      warranty: "Continuous Active Protection Warranty",
      chemical: "Preventative micro-dosages and physical exclusion techniques."
    }
  ],
  // 6 General Pest Control Services for Wayanad
  generalPestServices: [
    {
      id: "cockroach-control",
      name: "Cockroach Control",
      tagline: "Advanced Gel Baiting & Odorless Kitchen Spray",
      description: "Targeted German & American cockroach eradication for resort kitchens, restaurants, food storage pantries, and homes. 100% odorless gel that causes secondary colony eradication.",
      icon: "Bug",
      features: ["Odorless Food-Grade Gel", "No Kitchen Evacuation", "Hassle-Free AMC"]
    },
    {
      id: "rodent-control",
      name: "Rodent & Rat Control",
      tagline: "Tamper-Resistant Bait Stations & Structural Exclusion",
      description: "Effective rodent management for spice warehouses, coffee estates, resort grounds, and commercial properties. Prevents electrical wiring damage and health hazards.",
      icon: "ShieldAlert",
      features: ["Tamper-Proof Bait Boxes", "Entry Hole Exclusion", "Zero Odor Trapping"]
    },
    {
      id: "bedbug-control",
      name: "Bed Bug Eradication",
      tagline: "2-Stage Comprehensive Thermal & Chemical Treatment",
      description: "Crucial for Wayanad hotels, homestays, and tourist lodges. Eliminates all bedbug life stages (eggs, nymphs, adults) in mattresses, headboards, and luggage racks.",
      icon: "Flame",
      features: ["High-Pressure Steaming", "Micro-Encapsulated Spray", "Guest Room Clearance"]
    },
    {
      id: "mosquito-control",
      name: "Mosquito Management",
      tagline: "Eco-Friendly Larvicide & Outdoor Thermal Misting",
      description: "Reduces mosquito populations across resort garden lawns, water features, swimming pool fringes, and residential compounds without harming beneficial pollinators.",
      icon: "Droplet",
      features: ["Larval Source Reduction", "Organic Garden Misting", "Dengue/Malaria Defense"]
    },
    {
      id: "ant-spider-control",
      name: "Ant & Spider Control",
      tagline: "Perimeter Barrier & Roof Truss Spray",
      description: "Clears carpenter ants, crazy ants, and webs from wooden eaves, thatched roofs, garden patios, and balcony seating areas across Wayanad properties.",
      icon: "Layers",
      features: ["Residual Perimeter Spray", "Long-Lasting Repellency", "Attic Web Clearance"]
    },
    {
      id: "hospitality-pest-amc",
      name: "Resort & Hotel Pest AMC",
      tagline: "All-in-One Integrated Pest Management (IPM)",
      description: "Comprehensive 360-degree pest control contract combining termite monitoring, cockroach gel baiting, rodent management, and fly control with audit-ready documentation.",
      icon: "Building2",
      features: ["FSSAI Audit Compliant", "Monthly/Quarterly Service", "Priority 24/7 Desk"]
    }
  ],
  // Wayanad Property Types & Environmental Context
  propertyProfiles: [
    {
      title: "Luxury Rainforest Resorts & Wooden Treehouses",
      locations: "Vythiri, Lakkidi, Meppadi, Chembra, Pookode",
      challenge: "Damp rainforest climate, massive exposed teak and bamboo structures, and organic garden soils harbor relentless subterranean termite colonies attacking wooden stilt foundations.",
      solution: "Eco-safe non-leaching chemical barriers, non-destructive timber saturation, and discrete quarterly preventative maintenance audits."
    },
    {
      title: "Heritage Coffee & Tea Plantation Tharavads",
      locations: "Sultan Bathery, Ambalavayal, Mananthavady, Meenangadi",
      challenge: "Century-old wooden machans, carved teak pillars, and antique wooden roof trusses prone to both subterranean termite tunneling and powder-post wood borer attacks.",
      solution: "Micro-drilling borer syringe injection, non-staining surface preservation, and foundation perimeter trenching preserving antique heritage."
    },
    {
      title: "Waterfront Lake & Dam Cottages",
      locations: "Banasura Sagar Dam, Padinjarathara, Karapuzha, Karlad Lake",
      challenge: "High ambient water table and saturated soil facilitate rapid subterranean termite mud tube expansion through floor tile joints and electrical conduits.",
      solution: "Moisture-resistant non-repellent transfer chemistry creating an impenetrable sub-soil elimination zone around the building perimeter."
    },
    {
      title: "Modern NRI Mansions & Multi-Story Concrete Villas",
      locations: "Kalpetta, Sultan Bathery, Mananthavady, Meppadi, Pulpally",
      challenge: "Concealed PVC electrical conduits, drywall partitions, imported modular kitchen cabinetry, and false ceilings acting as dark highways for termite mud tubes.",
      solution: "Precision acoustic inspection, conduit entry isolation, and surgical drill-fill-seal protection behind skirtings and cabinets."
    },
    {
      title: "Spice Warehouses, Coffee Curing Plants & Commercial Units",
      locations: "Kuppadi, Beenachi, Kalpetta, Naikatty, Panamaram",
      challenge: "Wooden shipping pallets, cardboard packaging materials, and vast floor slabs susceptible to hidden subterranean colony tunneling under concrete flooring.",
      solution: "Industrial sub-slab injection, perimeter chemical barrier, and non-disruptive off-hours execution with zero operational downtime."
    }
  ],
  // 5-Step Scientific Treatment Process
  treatmentProcess: [
    {
      step: "01",
      title: "On-Site Diagnostic Inspection",
      description: "Our certified Wayanad technicians assess your property using acoustic sensors, moisture meters, and optical scopes to map subterranean termite mud tubes and wood borer hotspots."
    },
    {
      step: "02",
      title: "Infestation & Structure Mapping",
      description: "We determine the exact species (Subterranean, Drywood, or Wood Borer) and engineer a customized treatment blueprint adhering to IS:6313 standards."
    },
    {
      step: "03",
      title: "Precision Chemical Application",
      description: "Using odorless, non-repellent transfer chemistry, we execute perimeter soil saturation, sub-slab drill-fill-seal injection, or borer micro-syringe permeation."
    },
    {
      step: "04",
      title: "Colour-Matched Seamless Sealing",
      description: "All drilled injection points along wall joints or floor tiles are filled with matching waterproof epoxy compound, leaving your property immaculate."
    },
    {
      step: "05",
      title: "Warranty & Scheduled Audits",
      description: "You receive an official multi-year written warranty certificate backed by free periodic audit inspections from our Sultan Bathery central dispatch desk."
    }
  ],
  // Trust Building & Why Choose Us (8 Core Pillars)
  whyChooseUs: [
    {
      title: "Local Sultan Bathery Service Base",
      description: "Stationed near St. Mary's College, Kuppadi, our technicians reach any location in Sultan Bathery, Kalpetta, Mananthavady, or Vythiri within 45 to 60 minutes."
    },
    {
      title: "IS:6313 Certified & Non-Repellent",
      description: "We adhere strictly to Bureau of Indian Standards (IS:6313) using cutting-edge transfer termiticides that eliminate entire underground colonies including the queen."
    },
    {
      title: "Eco-Safe for Western Ghats Biosphere",
      description: "Our odorless chemical formulations are non-toxic to humans, pets, and native wildlife, perfectly suited for Wayanad's eco-sensitive resort and plantation zones."
    },
    {
      title: "Zero Downtime for Resorts & Homestays",
      description: "100% odorless applications that require zero guest room evacuation, zero food contamination risk, and no business interruption."
    },
    {
      title: "5 to 10-Year Written Guarantee",
      description: "Every full structural treatment is backed by a stamped multi-year warranty certificate with complimentary re-treatments if activity is ever detected."
    },
    {
      title: "Free On-Site Property Inspection",
      description: "No-obligation, comprehensive diagnostic inspection across Wayanad with immediate transparent cost estimation."
    },
    {
      title: "Wood Borer & General Pest Synergy",
      description: "Complete one-stop solution for termites, powder-post beetles, cockroaches, rodents, bed bugs, and mosquitoes under a single trusted partner."
    },
    {
      title: "4.9\u2605 Rated on Justdial & Google",
      description: "Over 940+ verified 5-star customer reviews from resort owners, plantation managers, and homeowners across Wayanad District."
    }
  ],
  // Customer Reviews & Real Testimonials from Wayanad Clients
  testimonials: [
    {
      name: "Mathew Varghese",
      role: "Managing Director, Luxury Eco Resort",
      location: "Vythiri, Wayanad",
      review: "Our resort in Vythiri has 18 wooden cottages surrounded by dense rainforest. Termites and wood borers were a constant threat to our roof rafters. TermiteControl.me deployed an odorless IS:6313 barrier without causing any disruption to our guests. Their periodic audits and 5-year warranty give us complete peace of mind.",
      rating: 5,
      date: "August 2026",
      service: "Resort Timber Termite & Wood Borer Treatment"
    },
    {
      name: "Dr. Ananya Nair",
      role: "Homeowner",
      location: "Kuppadi, Sultan Bathery",
      review: "Discovered termite mud tubes behind our modular kitchen cabinets in our newly built villa. Their team from the Kuppadi desk arrived within 40 minutes, did a thorough moisture scan, and performed drill-fill-seal treatment. The work was extremely clean, odorless, and completely solved the problem.",
      rating: 5,
      date: "July 2026",
      service: "Residential Drill-Fill-Seal Termite Treatment"
    },
    {
      name: "Sujith Menon",
      role: "Plantation Homestay Owner",
      location: "Meppadi / Chembra Base, Wayanad",
      review: "Our century-old heritage plantation bungalow had powder-post borer dust falling from the wooden ceiling machan. The TermiteControl.me specialists used micro-syringe injection that preserved our antique teak wood perfectly without staining. Highly recommended for any timber property in Wayanad!",
      rating: 5,
      date: "June 2026",
      service: "Heritage Timber & Wood Borer Treatment"
    },
    {
      name: "K. P. Ramachandran",
      role: "Commercial Complex Owner",
      location: "Pinangode Road, Kalpetta",
      review: "Contracted TermiteControl.me for pre-construction anti-termite soil treatment for our 3-story commercial complex in Kalpetta. Their chemical dosing was strictly as per IS:6313 norms and the documentation provided was top notch for building certifications.",
      rating: 5,
      date: "May 2026",
      service: "Pre-Construction Anti-Termite Treatment"
    },
    {
      name: "Jaffer Ali",
      role: "Coffee & Spices Warehouse Manager",
      location: "Mananthavady, Wayanad",
      review: "We had severe subterranean termite infestation affecting wooden storage pallets and cardboard packaging in our warehouse. The team performed sub-slab injection and perimeter chemical trenches. Total colony eradication in just one visit.",
      rating: 5,
      date: "April 2026",
      service: "Commercial Sub-Slab Termite Control"
    }
  ],
  // 15 Comprehensive AEO & Voice Search Optimized FAQs
  faqs: [
    {
      q: "What is the best termite treatment for a house or resort in Wayanad?",
      a: "The best termite treatment for Wayanad properties is an IS:6313 certified post-construction drill-fill-seal chemical barrier using non-repellent transfer chemistry (such as Imidacloprid or Fipronil). Because Wayanad has high rainfall and damp plantation soils, non-repellent termiticides are vital because worker termites unknowingly carry the active chemical back to the underground nest, eradicating the entire subterranean colony including the queen."
    },
    {
      q: "How much does termite treatment cost in Wayanad?",
      a: "Termite treatment costs in Wayanad typically start from \u20B94,500 to \u20B98,500 for targeted room or kitchen treatments, \u20B912,000 to \u20B925,000 for full 2-3 BHK residential drill-fill-seal structural barriers, and \u20B925,000+ for large plantation bungalows and luxury resorts depending on total square footage, perimeter linear meters, and timber surface area. We provide a 100% free on-site inspection and transparent written quote."
    },
    {
      q: "How can I identify termite infestation in my Wayanad property?",
      a: "Common signs of termites in Wayanad include brown mud tubes running up foundation walls, hollow-sounding wooden door frames, papery crumbling timber veneer, blistering wall paint, and discarded silvery wings on window sills after monsoon swarms. If you notice fine yellow wood powder beneath furniture, that indicates wood borer beetle larvae rather than termites."
    },
    {
      q: "Is termite treatment safe for eco-resorts, homestays, and pets in Wayanad?",
      a: "Yes. We exclusively use government-approved (CIBRC registered), odorless, low-toxicity non-repellent termiticides that bind tightly to sub-soil and wood fibers without leaching into water bodies or emitting toxic fumes. It is 100% safe for resort guests, children, elderly residents, pets, and native wildlife in Wayanad's eco-sensitive Western Ghats biosphere."
    },
    {
      q: "How long does termite treatment take for a home or resort?",
      a: "A standard residential drill-fill-seal treatment for a 2,000 sq.ft home takes approximately 3 to 5 hours. Large resorts or commercial complexes are completed in 1 to 2 days or executed during off-hours with zero operational downtime for guests and staff."
    },
    {
      q: "Do you provide free termite inspection in Sultan Bathery, Kalpetta, and Mananthavady?",
      a: "Yes! We provide 100% free on-site termite and pest inspections across all towns in Wayanad District, including Sultan Bathery, Kalpetta, Mananthavady, Vythiri, Meppadi, Panamaram, Ambalavayal, and Pulpally. Our technician will visit your site, perform moisture and acoustic checks, and provide an instant quote."
    },
    {
      q: "Where is your Wayanad service office located?",
      a: "Our central Wayanad dispatch desk is located Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad, Kerala - 673592. You can contact our central helpline at 9020040009 for same-day service dispatch."
    },
    {
      q: "Do you provide pest control for resorts, homestays, and hotels in Wayanad?",
      a: "Yes. We specialize in comprehensive hospitality pest management (IPM) for resorts, treehouses, homestays, hotels, and restaurants in Vythiri, Lakkidi, Meppadi, Banasura, and throughout Wayanad. We handle termites, wood borers, cockroaches, rodents, bed bugs, and mosquitoes with FSSAI audit-compliant service logs."
    },
    {
      q: "Why are termites and wood borers more aggressive in Wayanad's climate?",
      a: "Wayanad's high-altitude damp rainforest climate, heavy monsoon precipitation (exceeding 3,000mm annually), and organic soil rich in decomposing tree roots create ideal breeding conditions for subterranean termites. Additionally, the extensive use of teak, anjili, jackfruit wood, and bamboo in local architecture provides continuous cellulose food sources."
    },
    {
      q: "What is the difference between subterranean termites and wood borers?",
      a: "Subterranean termites nest underground in the soil and build mud pathways to consume wood from the inside out. Wood borers (powder-post beetles) live directly inside seasoned timber as larvae and push fine powdery frass out of tiny pinholes without soil contact. Our team provides specialized syringe injection for borers and sub-slab barriers for termites."
    },
    {
      q: "Do you provide pre-construction anti-termite treatment in Wayanad?",
      a: "Yes. We execute IS:6313 (Part 2) certified 4-stage pre-construction soil treatment for new houses, resorts, and commercial buildings in Wayanad, treating foundation trenches, backfill earth, plinth filling, and external perimeter soil before flooring is poured, backed by a 10-year warranty."
    },
    {
      q: "What warranty do you offer on termite treatments?",
      a: "We offer a 5-Year Written Guarantee for post-construction drill-fill-seal treatments and a 10-Year Guarantee for pre-construction soil treatments. If any termite activity reoccurs during the warranty period, we provide complete re-treatment at zero additional cost."
    },
    {
      q: "How quickly can your team reach my property in Wayanad?",
      a: "Our rapid response team dispatched from our Sultan Bathery Kuppadi hub reaches Sultan Bathery and Meenangadi within 30\u201345 minutes, Kalpetta and Vythiri within 45\u201360 minutes, and Mananthavady or Pulpally within 60 minutes."
    },
    {
      q: "Do you offer general pest control for cockroaches, rats, and bed bugs?",
      a: "Yes. We provide complete pest control services including odorless cockroach gel baiting, rodent bait stations and exclusion, 2-stage bed bug thermal eradication, and eco-friendly mosquito misting for residences and commercial properties across Wayanad."
    },
    {
      q: "How often should resorts in Wayanad schedule termite and pest AMC?",
      a: "Due to Wayanad's high humidity and forest surroundings, resorts and homestays should schedule quarterly or biannual preventative audits and maintenance treatments to ensure zero guest complaints and prevent expensive structural wood damage."
    }
  ]
};

// src/utils/analytics.js
var PRIMARY_PHONE = "9020040009";
var PRIMARY_PHONE_DISPLAY = "9020040009";
var WHATSAPP_NUMBER = "919020040009";
var trackConversion = (eventName, params = {}) => {
  try {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const eventPayload = {
      event: eventName,
      timestamp,
      url: window.location.href,
      pathname: window.location.pathname,
      ...params
    };
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        send_to: window.GA_CONVERSION_ID || void 0,
        ...params
      });
    }
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(eventPayload);
    }
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", eventName, params);
    }
    console.info(`[Conversion Tracked]: ${eventName}`, eventPayload);
  } catch (err) {
    console.error("Error logging conversion event:", err);
  }
};
var getWhatsAppLink = (context = {}) => {
  const { location, service, propertyType, message } = context;
  let text = "Hi, I need termite control / wood borer treatment. Please provide details.";
  if (location && service) {
    text = `Hi TermiteControl.me, I am looking for ${service} in ${location}. Please provide inspection and quotation details.`;
  } else if (location) {
    text = `Hi TermiteControl.me, I need termite / wood borer treatment for my property in ${location}. Please share consultation and inspection details.`;
  } else if (service) {
    text = `Hi, I need information regarding ${service}. Please contact me.`;
  } else if (message) {
    text = message;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
var handlePhoneClick = (source = "direct") => {
  trackConversion("phone_call_click", {
    source,
    phone: PRIMARY_PHONE,
    page: window.location.pathname
  });
  window.location.href = `tel:${PRIMARY_PHONE}`;
};
var handleWhatsAppClick = (source = "direct", context = {}) => {
  trackConversion("whatsapp_click", {
    source,
    context,
    page: window.location.pathname
  });
  const link = getWhatsAppLink(context);
  window.open(link, "_blank", "noopener,noreferrer");
};

// src/utils/seo.js
var updateMetaTags = (options = {}) => {
  if (typeof document === "undefined") return;
  try {
    const {
      title,
      description,
      keywords,
      canonicalUrl,
      image,
      imageAlt,
      imageWidth = "1200",
      imageHeight = "630",
      type = "website",
      siteName = "TermiteControl.me - A Unit of Eco Pest India",
      locale = "en_IN",
      schema
    } = options;
    const currentUrl = canonicalUrl || (typeof window !== "undefined" ? window.location.href : "https://termitecontrol.me/");
    const defaultImage = typeof window !== "undefined" ? `${window.location.origin}/images/wayanad-luxury-hero.jpg` : "https://termitecontrol.me/images/wayanad-luxury-hero.jpg";
    const ogImage = image || defaultImage;
    const setMeta = (attrName, attrVal, content) => {
      if (!content) return;
      try {
        const metas = document.getElementsByTagName("meta");
        let found = false;
        for (let i = 0; i < metas.length; i++) {
          if (metas[i].getAttribute(attrName) === attrVal) {
            metas[i].setAttribute("content", content);
            found = true;
            break;
          }
        }
        if (!found) {
          const meta = document.createElement("meta");
          meta.setAttribute(attrName, attrVal);
          meta.setAttribute("content", content);
          document.head.appendChild(meta);
        }
      } catch (err) {
      }
    };
    if (title) {
      document.title = title;
      setMeta("name", "title", title);
      setMeta("property", "og:title", title);
      setMeta("name", "twitter:title", title);
      setMeta("property", "twitter:title", title);
    }
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
      setMeta("property", "twitter:description", description);
    }
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }
    setMeta("property", "og:url", currentUrl);
    setMeta("name", "twitter:url", currentUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:locale", locale);
    if (ogImage) {
      setMeta("property", "og:image", ogImage);
      setMeta("property", "og:image:secure_url", ogImage);
      setMeta("property", "og:image:width", String(imageWidth));
      setMeta("property", "og:image:height", String(imageHeight));
      setMeta("property", "og:image:type", typeof ogImage === "string" && ogImage.endsWith(".png") ? "image/png" : "image/jpeg");
      if (imageAlt) {
        setMeta("property", "og:image:alt", imageAlt);
      }
      setMeta("name", "twitter:card", "summary_large_image");
      setMeta("property", "twitter:card", "summary_large_image");
      setMeta("name", "twitter:image", ogImage);
      setMeta("property", "twitter:image", ogImage);
    }
    try {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", currentUrl);
    } catch (err) {
    }
    if (schema) {
      try {
        let schemaScript = document.getElementById("dynamic-page-schema");
        if (!schemaScript) {
          schemaScript = document.createElement("script");
          schemaScript.id = "dynamic-page-schema";
          schemaScript.type = "application/ld+json";
          document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema);
      } catch (err) {
      }
    }
  } catch (err) {
    console.error("Error updating meta tags:", err);
  }
};

// src/components/LeadForm.jsx
var import_react = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");

// src/utils/storage.js
var STORAGE_KEY = "tc_leads_database_v1";
var saveLead = (leadData) => {
  try {
    const existing = getStoredLeads();
    const newLead = {
      id: "TC-" + Date.now().toString(36).toUpperCase() + "-" + Math.floor(Math.random() * 1e3),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      formattedDate: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      ...leadData,
      status: "New",
      sourceUrl: window.location.href,
      pagePath: window.location.pathname
    };
    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    if (window.TC_WEBHOOK_URL) {
      fetch(window.TC_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLead)
      }).catch((err) => console.warn("Webhook dispatch failed (optional):", err));
    }
    return { success: true, lead: newLead };
  } catch (error) {
    console.error("Failed to store lead:", error);
    return { success: false, error: error.message };
  }
};
var getStoredLeads = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read leads:", e);
    return [];
  }
};

// src/data/districts.js
var DISTRICTS = [
  {
    id: "kozhikode",
    name: "Kozhikode",
    altName: "Calicut",
    slug: "termite-control-kozhikode",
    hub: true,
    office: "Pavamani Road, Near Malabar Gold & Diamonds, Kozhikode",
    phone: "9020040009",
    metaTitle: "Termite Control in Kozhikode | Anti-Termite & Wood Borer Treatment Calicut",
    metaDescription: "Best termite control and wood borer treatment in Kozhikode (Calicut). Office at Pavamani Road. 100% odorless, warranty backed. Call/WhatsApp 9020040009.",
    majorAreas: ["Pavamani Road", "Mavoor Road", "Palayam", "Nadakkavu", "Westhill", "Calicut Beach", "Medical College", "Feroke", "Ramanattukara", "Pantheeramkavu", "Elathur", "Koyilandy", "Vadakara", "Beypore", "Kunnamangalam", "Balussery"],
    intro: "Premier termite control, anti-termite soil piping, and wood borer treatment across Kozhikode district with same-day inspection from our Pavamani Road central service hub."
  },
  {
    id: "ernakulam",
    name: "Ernakulam",
    altName: "Kochi",
    slug: "termite-control-ernakulam",
    hub: true,
    office: "Kochi Central Hub, Ernakulam",
    phone: "9020040009",
    metaTitle: "Termite Control in Kochi & Ernakulam | Anti-Termite Treatment",
    metaDescription: "Professional termite control and wood borer treatment in Kochi, Kakkanad, Edappally, Aluva, Vyttila & all Ernakulam. Same-day inspection. Call 9020040009.",
    majorAreas: ["Kochi", "Kakkanad", "Edappally", "Vyttila", "Aluva", "Kalamassery", "Thrippunithura", "Angamaly", "Perumbavoor", "Muvattupuzha", "Kothamangalam", "Fort Kochi", "Palarivattom", "Marine Drive"],
    intro: "Comprehensive termite protection and wood borer treatment across Kochi, Kakkanad Infopark, Edappally, Aluva, and all Ernakulam metropolitan areas."
  },
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    altName: "Trivandrum",
    slug: "termite-control-thiruvananthapuram",
    phone: "9020040009",
    metaTitle: "Termite Control in Thiruvananthapuram | Trivandrum Anti-Termite Treatment",
    metaDescription: "Expert termite control, anti-termite treatment, and wood borer eradication in Thiruvananthapuram, Technopark, Kazhakkoottam, Kowdiar. Call 9020040009.",
    majorAreas: ["Kazhakkoottam", "Technopark", "Kowdiar", "Pattom", "Vellayambalam", "Statue", "Medical College", "Nemom", "Sreekaryam", "Nedumangad", "Attingal", "Neyyattinkara", "Varkala"],
    intro: "Trusted termite control and pre/post construction anti-termite solutions across Trivandrum city, Technopark corridor, and rural Thiruvananthapuram."
  },
  {
    id: "thrissur",
    name: "Thrissur",
    altName: "Trichur",
    slug: "termite-control-thrissur",
    hub: true,
    office: "Veluthath Building, Pamboor, Kuttoor P.O., Thrissur - 680013",
    phone: "9020040009",
    metaTitle: "Termite Control in Thrissur | Anti Termite Treatment & White Ant Removal",
    metaDescription: "Best termite control and anti-termite treatment in Thrissur. Specialists in white ant removal, wood borer eradication & IS:6313 pre/post construction soil barrier. Call 9020040009.",
    majorAreas: ["Thrissur City", "Ayyanthole", "Punkunnam", "Ollur", "Guruvayur", "Chalakudy", "Kodungallur", "Kunnamkulam", "Irinjalakuda", "Wadakkanchery", "Chavakkad", "Mannuthy", "Kuriachira", "Viyyur", "Cherpu", "Triprayar", "Mala", "Koratty", "Puthukkad", "Pamboor / Kuttoor"],
    intro: "Professional termite control, anti-termite barrier protection, white ant removal, and wood borer treatment across Thrissur district with same-day inspection."
  },
  {
    id: "malappuram",
    name: "Malappuram",
    slug: "termite-control-malappuram",
    phone: "9020040009",
    metaTitle: "Termite Control in Malappuram | Anti-Termite Treatment Specialists",
    metaDescription: "Professional termite control and anti-termite treatments in Malappuram, Manjeri, Perinthalmanna, Tirur, Kottakkal, Edappal. Call 9020040009.",
    majorAreas: ["Manjeri", "Perinthalmanna", "Tirur", "Kottakkal", "Ponnani", "Nilambur", "Edappal", "Valanchery", "Kondotty", "Tanur", "Parappanangadi"],
    intro: "Fast, dependable termite eradication and pre-construction soil treatment across Malappuram district."
  },
  {
    id: "kannur",
    name: "Kannur",
    slug: "termite-control-kannur",
    phone: "9020040009",
    metaTitle: "Termite Control in Kannur | Anti-Termite Treatment & Wood Borer Control",
    metaDescription: "Reliable termite control and wood borer treatment in Kannur, Thalassery, Payyanur, Taliparamba, Mattannur. Certified technicians. Call 9020040009.",
    majorAreas: ["Kannur City", "Thalassery", "Payyanur", "Taliparamba", "Mattannur", "Iritty", "Koothuparamba", "Chakkarakkal", "Panoor", "Dharmasala"],
    intro: "Complete termite and timber borer management for homes, commercial complexes, and coastal villas across Kannur."
  },
  {
    id: "kollam",
    name: "Kollam",
    altName: "Quilon",
    slug: "termite-control-kollam",
    office: "Near DYFI Youth Centre, Polayathodu, Kollam, Kerala 691001",
    phone: "9020040009",
    metaTitle: "Termite Control in Kollam | Professional Anti-Termite Treatment",
    metaDescription: "Residential & commercial termite control in Kollam, Karunagappally, Kottarakkara, Punalur, Paravur. Call 9020040009.",
    majorAreas: ["Polayathodu", "Chinnakada", "Asramam", "Thevally", "Karunagappally", "Kottarakkara", "Punalur", "Paravur", "Anchal", "Kundara", "Chathannoor", "Sasthamkotta"],
    intro: "Guaranteed termite control, drill-fill-seal barriers, and wood borer protection for residential and commercial establishments in Kollam."
  },
  {
    id: "kottayam",
    name: "Kottayam",
    slug: "termite-control-kottayam",
    phone: "9020040009",
    metaTitle: "Termite Control in Kottayam | Anti-Termite & Wood Borer Treatment",
    metaDescription: "Top-rated termite inspection and treatment in Kottayam, Changanassery, Pala, Ettumanoor, Kanjirappally, Vaikom. Call 9020040009.",
    majorAreas: ["Kottayam Town", "Changanassery", "Pala", "Ettumanoor", "Kanjirappally", "Vaikom", "Erattupetta", "Pambady", "Kaduthuruthy"],
    intro: "Specialized termite barriers and timber protection for rubber-belt humid zones and modern residences in Kottayam."
  },
  {
    id: "palakkad",
    name: "Palakkad",
    altName: "Palghat",
    slug: "termite-control-palakkad",
    hub: true,
    office: "TB Road / Fort Maidan Area, Palakkad",
    phone: "9020040009",
    metaTitle: "Termite Control in Palakkad | Anti Termite Treatment & White Ant Removal",
    metaDescription: "Best termite control and anti-termite treatment in Palakkad. Specialists in white ant removal, wood borer eradication & IS:6313 pre/post construction soil barrier. Call 9020040009.",
    majorAreas: ["Palakkad Town", "Ottapalam", "Shornur", "Chittur", "Mannarkkad", "Alathur", "Cherpulassery", "Pattambi", "Kanjikode", "Nemmara", "Kollengode", "Vadakkencherry", "Kuzhalmannam", "Walayar", "Kongad", "Parli"],
    intro: "Professional termite control, anti-termite barrier protection, white ant removal, and wood borer treatment across Palakkad district with same-day inspection."
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    altName: "Alleppey",
    slug: "termite-control-alappuzha",
    hub: true,
    office: "Alappuzha District Central Dispatch, Kerala - 688001",
    phone: "9020040009",
    metaTitle: "Termite Control in Alappuzha, Kerala | TermiteControl.me",
    metaDescription: "Professional termite control, termite inspection and termite treatment services across Alappuzha, Kerala. Residential, commercial, pre-construction and post-construction solutions.",
    majorAreas: ["Alappuzha Town", "Cherthala", "Chengannur", "Kayamkulam", "Mavelikara", "Harippad", "Kuttanad", "Kainakary", "Champakkulam", "Edathua", "Nedumudi", "Aroor", "Mararikkulam", "Thanneermukkam", "Ambalappuzha", "Punnapra", "Muhamma", "Mannanchery"],
    intro: "Premier termite control, anti-termite soil barriers, and wood borer treatment across Alappuzha district with rapid on-site inspection for homes, luxury waterfront villas, resorts, and commercial spaces."
  },
  {
    id: "pathanamthitta",
    name: "Pathanamthitta",
    slug: "termite-control-pathanamthitta",
    hub: true,
    office: "Eco Pest India, Mezhuveli P.O., Pathanamthitta - 689507",
    phone: "9020040009",
    metaTitle: "Termite Control in Pathanamthitta | Anti Termite Treatment & White Ant Removal",
    metaDescription: "Best termite control and anti-termite treatment in Pathanamthitta, Thiruvalla, Adoor, Kumbanad, Mezhuveli. Specialists in white ant removal & IS:6313 soil barrier. Call 9020040009.",
    majorAreas: ["Thiruvalla", "Adoor", "Pathanamthitta Town", "Mezhuveli", "Kumbanad", "Kozhencherry", "Ranni", "Mallappally", "Konni", "Pandalam", "Aranmula", "Kulanada", "Pullad"],
    intro: "Professional termite control, anti-termite barrier protection, white ant removal, and wood borer treatment across Pathanamthitta district with same-day inspection."
  },
  {
    id: "kasaragod",
    name: "Kasaragod",
    slug: "termite-control-kasaragod",
    phone: "9020040009",
    metaTitle: "Termite Control in Kasaragod | Anti-Termite & Wood Borer Treatment",
    metaDescription: "Professional termite pest control in Kasaragod, Kanhangad, Nileshwar, Uppala, Cheruvathur. Safe & guaranteed. Call 9020040009.",
    majorAreas: ["Kasaragod Town", "Kanhangad", "Nileshwar", "Uppala", "Cheruvathur", "Manjeshwar", "Bekal", "Kumbla"],
    intro: "Certified termite extermination and anti-termite soil barriers across northern Kerala's Kasaragod district."
  },
  {
    id: "wayanad",
    name: "Wayanad",
    slug: "termite-control-wayanad",
    hub: true,
    office: "Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad, Kerala - 673592",
    phone: "9020040009",
    metaTitle: "Termite Control in Wayanad | Anti-Termite & Pest Control Sultan Bathery, Kalpetta, Resorts",
    metaDescription: "Best termite control, anti-termite treatment & general pest control in Wayanad. Central service desk near St. Mary's College, Kuppadi, Sultan Bathery. IS:6313 certified, odorless & eco-safe for homes, luxury resorts & homestays. Call 9020040009.",
    majorAreas: [
      "Sultan Bathery",
      "Kalpetta",
      "Mananthavady",
      "Vythiri",
      "Meppadi",
      "Panamaram",
      "Ambalavayal",
      "Pulpally",
      "Kuppadi",
      "Lakkidi",
      "Pookode",
      "Thirunelly",
      "Meenangadi",
      "Padinjarathara",
      "Noolpuzha",
      "Nenmeni",
      "Poothadi",
      "Mullankolly"
    ],
    intro: "Premier termite control, anti-termite soil barriers, wood borer eradication & general pest control across Wayanad district with 45-minute dispatch from our Sultan Bathery Kuppadi central desk."
  },
  {
    id: "idukki",
    name: "Idukki",
    slug: "termite-control-idukki",
    phone: "9020040009",
    metaTitle: "Termite Control in Idukki | Anti-Termite & Timber Protection",
    metaDescription: "Termite and wood-boring insect treatment for resorts, plantations, and homes in Idukki, Thodupuzha, Munnar, Kattappana, Nedumkandam. Call 9020040009.",
    majorAreas: ["Thodupuzha", "Kattappana", "Munnar", "Adimali", "Nedumkandam", "Kumily", "Painavu", "Vandiperiyar"],
    intro: "Long-lasting termite defense and timber preservation for residences, plantation bungalows, and tourist retreats in Idukki."
  }
];

// src/components/LeadForm.jsx
function LeadForm({
  defaultLocation = "",
  defaultProblem = "",
  defaultProperty = "",
  title = "GET A TERMITE INSPECTION",
  subtitle = "Free site inspection & transparent treatment quotation across Kerala",
  source = "hero_form",
  onSuccess
}) {
  const [formData, setFormData] = (0, import_react.useState)({
    name: "",
    phone: "",
    location: defaultLocation || "",
    propertyType: defaultProperty || "House",
    problem: defaultProblem || "Termite",
    message: ""
  });
  const [status, setStatus] = (0, import_react.useState)({
    submitting: false,
    submitted: false,
    error: null,
    leadId: null
  });
  const propertyTypes = ["House", "Villa", "Apartment", "Office", "Shop", "Commercial", "Other"];
  const problemTypes = ["Termite", "Wood Borer", "Both", "Not Sure"];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null, leadId: null });
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setStatus({ submitting: false, submitted: false, error: "Please enter a valid 10-digit mobile number.", leadId: null });
      return;
    }
    if (!formData.name.trim()) {
      setStatus({ submitting: false, submitted: false, error: "Please enter your name.", leadId: null });
      return;
    }
    const result = saveLead({
      ...formData,
      phone: cleanPhone,
      sourceForm: source
    });
    trackConversion("lead_form_submit", {
      source,
      propertyType: formData.propertyType,
      problem: formData.problem,
      location: formData.location,
      phone: cleanPhone
    });
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        leadId: result.lead ? result.lead.id : null
      });
      if (onSuccess) {
        onSuccess(formData);
      }
    }, 400);
  };
  const handleWhatsAppForward = () => {
    const text = `Hi TermiteControl.me, I submitted an inspection request.
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location || defaultLocation}
Property: ${formData.propertyType}
Problem: ${formData.problem}
Notes: ${formData.message || "None"}`;
    const url = getWhatsAppLink({ message: text });
    window.open(url, "_blank");
  };
  if (status.submitted) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-200 text-center animate-in fade-in zoom-in-95 duration-200" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.CheckCircle, { className: "w-10 h-10" })), /* @__PURE__ */ import_react.default.createElement("h3", { className: "text-2xl font-bold text-slate-900 font-display mb-2" }, "Thank you!"), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-base font-semibold text-emerald-800 mb-2" }, "Our team will contact you shortly."), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm text-slate-600 mb-4" }, "Your inspection request has been registered under reference ", /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded" }, status.leadId), "."), /* @__PURE__ */ import_react.default.createElement("div", { className: "p-4 bg-emerald-50 rounded-xl border border-emerald-100 mb-5 text-left text-xs text-slate-700 space-y-1.5" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center text-emerald-900 font-bold mb-1" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Clock, { className: "w-4 h-4 mr-1 text-emerald-700" }), /* @__PURE__ */ import_react.default.createElement("span", null, "Response Guarantee:")), /* @__PURE__ */ import_react.default.createElement("p", null, "\u2022 Our senior pest technician will call you within 15\u201330 minutes."), /* @__PURE__ */ import_react.default.createElement("p", null, "\u2022 Inspection schedule and preliminary cost assessment will be shared.")), /* @__PURE__ */ import_react.default.createElement("div", { className: "space-y-2.5" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: handleWhatsAppForward,
        className: "w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow transition flex items-center justify-center space-x-2"
      },
      /* @__PURE__ */ import_react.default.createElement(import_lucide_react.MessageCircle, { className: "w-4 h-4 fill-white" }),
      /* @__PURE__ */ import_react.default.createElement("span", null, "Connect on WhatsApp Instantly")
    ), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => setStatus({ submitting: false, submitted: false, error: null, leadId: null }),
        className: "text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-2"
      },
      "Submit Another Request"
    )));
  }
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-7 shadow-2xl border border-slate-200/80 text-left" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-2" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Shield, { className: "w-3.5 h-3.5 text-emerald-700" }), /* @__PURE__ */ import_react.default.createElement("span", null, "Same-Day Inspection Booking")), /* @__PURE__ */ import_react.default.createElement("h3", { className: "text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight leading-snug" }, title), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs sm:text-sm text-slate-600 mt-1" }, subtitle)), status.error && /* @__PURE__ */ import_react.default.createElement("div", { className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.AlertCircle, { className: "w-4 h-4 flex-shrink-0" }), /* @__PURE__ */ import_react.default.createElement("span", null, status.error)), /* @__PURE__ */ import_react.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-3.5" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Your Name ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      type: "text",
      name: "name",
      required: true,
      placeholder: "e.g. Rahul Menon",
      value: formData.name,
      onChange: handleChange,
      className: "w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition"
    }
  )), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Phone Number ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-semibold text-slate-500" }, "+91"), /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      type: "tel",
      name: "phone",
      required: true,
      maxLength: "12",
      placeholder: "9876543210",
      value: formData.phone,
      onChange: handleChange,
      className: "w-full pl-12 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium"
    }
  )))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Location / City in Kerala ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-[11px] text-emerald-700 font-medium" }, "All 14 Districts")), /* @__PURE__ */ import_react.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      type: "text",
      name: "location",
      required: true,
      placeholder: "e.g. Kozhikode (Pavamani Rd / Nadakkavu), Kochi, etc.",
      value: formData.location,
      onChange: handleChange,
      list: "kerala-districts-list",
      className: "w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition"
    }
  ), /* @__PURE__ */ import_react.default.createElement("datalist", { id: "kerala-districts-list" }, DISTRICTS.map((d) => /* @__PURE__ */ import_react.default.createElement("option", { key: d.id, value: d.name })), /* @__PURE__ */ import_react.default.createElement("option", { value: "Kozhikode - Pavamani Road" }), /* @__PURE__ */ import_react.default.createElement("option", { value: "Kozhikode - Nadakkavu" }), /* @__PURE__ */ import_react.default.createElement("option", { value: "Kozhikode - Palayam" }), /* @__PURE__ */ import_react.default.createElement("option", { value: "Kozhikode - Mavoor Road" }), /* @__PURE__ */ import_react.default.createElement("option", { value: "Kozhikode - Westhill" }), /* @__PURE__ */ import_react.default.createElement("option", { value: "Kochi - Kakkanad" }), /* @__PURE__ */ import_react.default.createElement("option", { value: "Kochi - Edappally" }), /* @__PURE__ */ import_react.default.createElement("option", { value: "Thiruvananthapuram - Kazhakkoottam" })))), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Property Type"), /* @__PURE__ */ import_react.default.createElement(
    "select",
    {
      name: "propertyType",
      value: formData.propertyType,
      onChange: handleChange,
      className: "w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium"
    },
    propertyTypes.map((p) => /* @__PURE__ */ import_react.default.createElement("option", { key: p, value: p }, p))
  )), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Pest Problem"), /* @__PURE__ */ import_react.default.createElement(
    "select",
    {
      name: "problem",
      value: formData.problem,
      onChange: handleChange,
      className: "w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium text-emerald-950 font-semibold"
    },
    problemTypes.map((pr) => /* @__PURE__ */ import_react.default.createElement("option", { key: pr, value: pr }, pr))
  ))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Message / Area Details (Optional)"), /* @__PURE__ */ import_react.default.createElement(
    "textarea",
    {
      name: "message",
      rows: "2",
      placeholder: "e.g. Mud tubes on door frame, wood powder from cupboard, etc.",
      value: formData.message,
      onChange: handleChange,
      className: "w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition resize-none"
    }
  )), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "submit",
      disabled: status.submitting,
      className: "w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition transform active:scale-[0.99] flex items-center justify-center space-x-2"
    },
    status.submitting ? /* @__PURE__ */ import_react.default.createElement("span", { className: "inline-flex items-center space-x-2" }, /* @__PURE__ */ import_react.default.createElement("svg", { className: "animate-spin h-5 w-5 text-white", fill: "none", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v8H4z" })), /* @__PURE__ */ import_react.default.createElement("span", null, "Scheduling...")) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("span", null, "GET FREE CONSULTATION"), /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Send, { className: "w-4 h-4 ml-1" }))
  ), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between text-[11px] text-slate-500 pt-1" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flex items-center text-slate-600" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Shield, { className: "w-3.5 h-3.5 mr-1 text-emerald-700" }), "100% Privacy Protected"), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-amber-800 font-semibold" }, "Zero Call Spam"))));
}

// src/components/PrimaryBottomCTA.jsx
var import_react2 = __toESM(require("react"), 1);
var import_lucide_react2 = require("lucide-react");
function PrimaryBottomCTA({ onOpenInspectionModal }) {
  return /* @__PURE__ */ import_react2.default.createElement("section", { className: "bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white py-16 sm:py-20 relative overflow-hidden border-t border-emerald-800/60" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4" }, /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.Sparkles, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ import_react2.default.createElement("span", null, "Same-Day Inspection Available Across All 14 Districts")), /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4" }, "Termites? Wood Borers? ", /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-amber-400" }, "Don't Wait.")), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-lg sm:text-xl font-medium text-emerald-100/90 max-w-2xl mx-auto mb-8" }, "Get Professional Treatment Across Kerala."), /* @__PURE__ */ import_react2.default.createElement("div", { className: "inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 mb-8" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-xs text-emerald-300 font-bold uppercase tracking-widest" }, "Call / WhatsApp Direct"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-wider font-display mt-0.5" }, PRIMARY_PHONE_DISPLAY)), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto" }, /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      onClick: () => handlePhoneClick("bottom_primary_cta"),
      className: "flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
    },
    /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.Phone, { className: "w-5 h-5 animate-pulse" }),
    /* @__PURE__ */ import_react2.default.createElement("span", null, "Call Now")
  ), /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      onClick: () => handleWhatsAppClick("bottom_primary_cta"),
      className: "flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
    },
    /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.MessageCircle, { className: "w-5 h-5 fill-white" }),
    /* @__PURE__ */ import_react2.default.createElement("span", null, "WhatsApp Now")
  ), /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      onClick: onOpenInspectionModal,
      className: "flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
    },
    /* @__PURE__ */ import_react2.default.createElement(import_lucide_react2.FileCheck, { className: "w-5 h-5" }),
    /* @__PURE__ */ import_react2.default.createElement("span", null, "Request Inspection")
  )), /* @__PURE__ */ import_react2.default.createElement("div", { className: "mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "font-bold text-slate-200" }, "TermiteControl.me"), /* @__PURE__ */ import_react2.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react2.default.createElement("span", null, "A Unit of Eco Pest India"), /* @__PURE__ */ import_react2.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react2.default.createElement("span", null, "IS:6313 Standard Certified"))));
}

// src/pages/WayanadLandingPage.jsx
function WayanadLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  const [selectedBlock, setSelectedBlock] = (0, import_react3.useState)("all");
  const [panchayatSearch, setPanchayatSearch] = (0, import_react3.useState)("");
  const [faqSearchQuery, setFaqSearchQuery] = (0, import_react3.useState)("");
  const [openFaqIndex, setOpenFaqIndex] = (0, import_react3.useState)(0);
  const [copiedLink, setCopiedLink] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    updateMetaTags({
      title: "Termite Control Wayanad | Kerala's Premier Resort & Villa Pest Protection",
      description: "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & NRI homes in Sultan Bathery, Kalpetta, Vythiri & Wayanad. IS:6313 certified with written warranty.",
      keywords: "termite control wayanad, sultan bathery pest control, kalpetta termite treatment, vythiri resort pest control, meppadi wood borer control, nri villa termite protection wayanad, luxury resort termite control kerala",
      canonicalUrl: `${window.location.origin}/termite-control-wayanad`,
      image: `${window.location.origin}/images/wayanad-luxury-hero.jpg`,
      imageAlt: "TermiteControl.me Wayanad - Luxury Resort & Villa Pest Protection",
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": "TermiteControl.me Wayanad - Unit of Eco Pest India",
        "url": `${window.location.origin}/termite-control-wayanad`,
        "image": `${window.location.origin}/images/wayanad-luxury-hero.jpg`,
        "telephone": "+91-9020040009",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near St. Mary's College, Kuppadi",
          "addressLocality": "Sultan Bathery",
          "addressRegion": "Wayanad, Kerala",
          "postalCode": "673592",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.6625",
          "longitude": "76.2570"
        },
        "priceRange": "\u20B9\u20B9",
        "areaServed": WAYANAD_DATA.urbanHubs.map((h) => ({
          "@type": "AdministrativeArea",
          "name": h.name
        }))
      }
    });
    try {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    } catch (e) {
    }
  }, []);
  const handleCopyLink = () => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "https://termitecontrol.me/termite-control-wayanad";
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        }).catch(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        });
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch (e) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };
  const handleShareWhatsApp = () => {
    const shareText = `\u{1F332} *TermiteControl.me Wayanad - Luxury Resort & Villa Pest Protection*

Preserving Wayanad's finest estates, treehouses, homestays and timber villas with IS:6313 certified treatments and 10-year warranty.

\u{1F4CD} Central Hub: Near St. Mary's College, Kuppadi, Sultan Bathery
\u{1F4DE} Call/WhatsApp: +91 9020040009

\u{1F449} View Plan & Book Inspection: https://termitecontrol.me/termite-control-wayanad`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleNativeShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "Termite Control Wayanad | Kerala's Premier Resort & Villa Protection",
        text: "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & homes in Wayanad.",
        url: typeof window !== "undefined" ? window.location.href : "https://termitecontrol.me/termite-control-wayanad"
      }).catch(() => {
      });
    } else {
      handleShareWhatsApp();
    }
  };
  const filteredFaqs = (0, import_react3.useMemo)(() => {
    if (!faqSearchQuery.trim()) return WAYANAD_DATA.faqs;
    const query = faqSearchQuery.toLowerCase();
    return WAYANAD_DATA.faqs.filter(
      (f) => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)
    );
  }, [faqSearchQuery]);
  const allPanchayats = (0, import_react3.useMemo)(
    () => WAYANAD_DATA.blocks.flatMap((block) => block.panchayats.map((p) => ({
      ...p,
      blockName: block.name,
      blockId: block.id,
      blockTagline: block.tagline
    }))),
    []
  );
  const filteredPanchayats = (0, import_react3.useMemo)(() => {
    return allPanchayats.filter((p) => {
      const matchesBlock = selectedBlock === "all" || p.blockId === selectedBlock;
      const matchesSearch = p.name.toLowerCase().includes(panchayatSearch.toLowerCase()) || p.areas.toLowerCase().includes(panchayatSearch.toLowerCase()) || p.blockName.toLowerCase().includes(panchayatSearch.toLowerCase());
      return matchesBlock && matchesSearch;
    });
  }, [allPanchayats, selectedBlock, panchayatSearch]);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad, Kerala 673592")}`;
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative min-h-screen text-slate-900 selection:bg-emerald-600 selection:text-white font-sans antialiased bg-[#FBFBF9]" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white border-b border-slate-200 text-xs py-2.5 px-4 sm:px-6 shadow-xs" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2" }, /* @__PURE__ */ import_react3.default.createElement("nav", { className: "flex items-center space-x-2 text-slate-600 text-xs" }, /* @__PURE__ */ import_react3.default.createElement("a", { href: "/", className: "hover:text-emerald-700 transition" }, "Home"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-slate-400" }, "/"), /* @__PURE__ */ import_react3.default.createElement("a", { href: "/#locations", className: "hover:text-emerald-700 transition" }, "Kerala Service Hub"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-slate-400" }, "/"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-emerald-800 font-bold" }, "Wayanad District Coverage")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center space-x-3 text-slate-600 text-[11px]" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "flex items-center text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-600 animate-ping mr-1.5 inline-block" }), "Central Hub: Near St. Mary's College, Kuppadi, Sultan Bathery"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "hidden sm:inline text-slate-300" }, "|"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "hidden sm:inline text-slate-600 font-medium" }, "IS:6313 Certified \u2022 Odorless & Eco-Safe")))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-10 pb-20 lg:py-24 border-b border-emerald-950 bg-[#020b08] text-white overflow-hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute inset-0 z-0" }, /* @__PURE__ */ import_react3.default.createElement(
    "img",
    {
      src: "/images/wayanad-luxury-hero.jpg",
      alt: "Ultra luxury modern villa nestled in misty green Wayanad tea plantations and mountains",
      className: "w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out",
      loading: "eager",
      fetchPriority: "high"
    }
  ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-[#020b08]/95 via-[#020b08]/75 to-[#020b08]/30 lg:to-transparent" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-[#020b08]/95 via-transparent to-[#020b08]/60" })), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "lg:col-span-7 space-y-6 text-center lg:text-left" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-col sm:flex-row items-center lg:items-start gap-2.5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-black/60 border border-emerald-500/40 rounded-full px-3.5 py-1.5 text-xs text-emerald-300 backdrop-blur-xl shadow-xl shadow-emerald-950/60" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-bold tracking-widest uppercase text-[10px] sm:text-[11px] font-mono" }, "PREMIUM TERMITE & TIMBER DEFENSE \u2022 WAYANAD")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-1.5 bg-amber-950/70 border border-amber-500/40 rounded-full px-3.5 py-1.5 text-xs text-amber-200 backdrop-blur-xl shadow-lg" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Sparkles, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] font-medium" }, "\u0D35\u0D3F\u0D26\u0D47\u0D36\u0D24\u0D4D\u0D24\u0D41\u0D33\u0D4D\u0D33 \u0D2A\u0D4D\u0D30\u0D35\u0D3E\u0D38\u0D3F\u0D15\u0D7E\u0D15\u0D4D\u0D15\u0D41\u0D02 \u0D28\u0D3E\u0D1F\u0D4D\u0D1F\u0D3F\u0D32\u0D46 \u0D31\u0D3F\u0D38\u0D4B\u0D7C\u0D1F\u0D4D\u0D1F\u0D41\u0D15\u0D7E\u0D15\u0D4D\u0D15\u0D41\u0D02 \u0D35\u0D3F\u0D36\u0D4D\u0D35\u0D38\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D35\u0D41\u0D28\u0D4D\u0D28 \u0D38\u0D47\u0D35\u0D28\u0D02"))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ import_react3.default.createElement("h1", { className: "text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]" }, "Preserving Wayanad's ", /* @__PURE__ */ import_react3.default.createElement("br", null), /* @__PURE__ */ import_react3.default.createElement("span", { className: "italic font-light bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent font-serif" }, "Finest Estates & Timber")), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-400/90 font-mono" }, "Sultan Bathery \u2022 Kalpetta \u2022 Mananthavady \u2022 Vythiri \u2022 Resorts & Homestays")), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl text-shadow-sm mx-auto lg:mx-0" }, "Odorless, IS:6313 certified subterranean termite elimination, deep wood borer eradication & annual protection for", /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-white font-semibold" }, " luxury rainforest resorts, plantation bungalows, modern villas, and commercial properties"), " across Wayanad."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ShieldCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "Kuppadi Central Hub")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Clock, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "45-Min Fast Dispatch")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Award, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "IS:6313 Certified")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Trees, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "Eco-Safe & Odorless"))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3" }, /* @__PURE__ */ import_react3.default.createElement(
    "a",
    {
      href: "#dispatch-desk",
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all transform hover:-translate-y-0.5 text-sm"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Search, { className: "w-4 h-4" }),
    /* @__PURE__ */ import_react3.default.createElement("span", null, "Book Free Wayanad Inspection")
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => handlePhoneClick("wayanad_hero_call"),
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-xl transition text-sm"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.PhoneCall, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ import_react3.default.createElement("span", null, "Call: ", WAYANAD_DATA.brand.phoneDisplay)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => handleWhatsAppClick("wayanad_hero_wa", { message: "Hi TermiteControl.me, I need termite/pest inspection for my property in Wayanad (Sultan Bathery/Kalpetta/Vythiri). Please share details." }),
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 font-semibold px-5 py-3.5 rounded-xl border border-emerald-500/40 backdrop-blur-xl transition text-sm shadow-lg"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.MessageCircle, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ import_react3.default.createElement("span", null, "WhatsApp Desk")
  )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 text-xs text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-3" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "flex items-center text-amber-300 font-bold" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Star, { className: "w-3.5 h-3.5 fill-amber-300 mr-1" }), WAYANAD_DATA.brand.justdialRating), /* @__PURE__ */ import_react3.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react3.default.createElement("span", null, WAYANAD_DATA.brand.justdialReviewsCount, " across Wayanad"), /* @__PURE__ */ import_react3.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-emerald-300 font-medium" }, "Live Video Report for NRI Owners"))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "hidden lg:block lg:col-span-5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-black/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 shadow-2xl space-y-5 text-left relative overflow-hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between border-b border-white/10 pb-4" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold" }, "EXCELLENCE IN TIMBER DEFENSE"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-lg font-serif font-bold text-white mt-0.5" }, "Wayanad Hospitality & Villa Protocol")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Hotel, { className: "w-5 h-5" }))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3.5 text-xs" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-bold text-white" }, "Rainforest Resort & Homestay Specialist"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-slate-300 text-[11px] mt-0.5" }, "Zero guest room evacuation, 100% odorless, eco-safe for forest biospheres."))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-bold text-white" }, "Heritage Teak & Anjili Timber Preservation"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-slate-300 text-[11px] mt-0.5" }, "Surgical micro-syringe injection into wood borer exit holes without surface staining."))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-bold text-white" }, "IS:6313 Certified 10-Year Soil Barrier"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-slate-300 text-[11px] mt-0.5" }, "Transfer chemistry eliminating subterranean termite colonies & the queen.")))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 border-t border-white/10 flex items-center justify-between text-xs" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-slate-300" }, "Sultan Bathery Base: ", /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-white" }, "Kuppadi")), /* @__PURE__ */ import_react3.default.createElement("a", { href: "#dispatch-desk", className: "text-emerald-400 font-bold hover:underline inline-flex items-center space-x-1" }, /* @__PURE__ */ import_react3.default.createElement("span", null, "View Desk"), /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ArrowRight, { className: "w-3.5 h-3.5" })))))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "bg-white border-b border-slate-200 py-4 shadow-xs" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "45 Mins"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "Sultan Bathery & Kalpetta Response")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "IS:6313"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "Bureau of Indian Standards Certified")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "5 - 10 Yrs"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "Written Guarantee Certificates")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "Zero Odor"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "100% Guest & Pet Safe Formulations"))))), /* @__PURE__ */ import_react3.default.createElement("section", { id: "dispatch-desk", className: "py-14 sm:py-18 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "lg:col-span-6 space-y-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-3.5 py-1 text-xs text-emerald-800 font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.MapPin, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Primary Wayanad Service Base")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight" }, "Instant Dispatch Desk ", /* @__PURE__ */ import_react3.default.createElement("br", null), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-emerald-700 font-sans font-medium text-xl sm:text-2xl" }, "Near St. Mary's College, Kuppadi, Sultan Bathery")), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, "Our central Wayanad technical fleet is stationed at Kuppadi, Sultan Bathery. We provide same-day on-site acoustic inspections, moisture scans, and emergency termite/pest treatments across Sultan Bathery, Kalpetta, Mananthavady, Vythiri, Meppadi, and all surrounding panchayats.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Building2, { className: "w-5 h-5" })), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-500" }, "Official Service Hub"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-sm font-bold text-slate-900 mt-0.5" }, WAYANAD_DATA.brand.officeAddress.brand, " (", WAYANAD_DATA.brand.officeAddress.unit, ")"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-600 mt-1" }, WAYANAD_DATA.brand.officeAddress.line1, ", ", WAYANAD_DATA.brand.officeAddress.city, ", Wayanad, Kerala - ", WAYANAD_DATA.brand.officeAddress.pincode), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-emerald-700 font-medium mt-1 flex items-center" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Clock, { className: "w-3 h-3 mr-1" }), WAYANAD_DATA.brand.officeAddress.timing))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement(
    "a",
    {
      href: googleMapsUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center space-x-1.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 transition"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Navigation, { className: "w-3.5 h-3.5 text-blue-600" }),
    /* @__PURE__ */ import_react3.default.createElement("span", null, "Open in Google Maps"),
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ExternalLink, { className: "w-3 h-3 text-slate-400" })
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => handlePhoneClick(WAYANAD_DATA.brand.phone, "wayanad_desk_call"),
      className: "inline-flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Phone, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ import_react3.default.createElement("span", null, "Direct Desk: ", WAYANAD_DATA.brand.phoneDisplay)
  ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-2 gap-3 pt-1" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-bold text-emerald-900" }, "Sultan Bathery & Surroundings"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-emerald-700 mt-0.5" }, "30 \u2013 45 Min Technician Arrival")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-bold text-emerald-900" }, "Kalpetta, Vythiri & Meppadi"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-emerald-700 mt-0.5" }, "45 \u2013 60 Min Dedicated Dispatch")))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "lg:col-span-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30" }, "Quick Booking"), /* @__PURE__ */ import_react3.default.createElement(
    LeadForm,
    {
      title: "BOOK FREE WAYANAD INSPECTION",
      subtitle: "Same-day visit from our Sultan Bathery Kuppadi Technical Desk",
      defaultLocation: "Wayanad (Sultan Bathery Hub)",
      source: "wayanad_dispatch_desk",
      onSuccess: () => {
      }
    }
  )))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-20 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Engineered For Wayanad's Terrain")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Why Wayanad Trusts TermiteControl.me"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "From dense high-altitude rainforests to heritage plantation bungalows, our specialized non-repellent transfer chemistry protects valuable timber without toxic fumes or guest disruption.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, WAYANAD_DATA.whyChooseUs.map((item, idx) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition group"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition" }, idx + 1),
    /* @__PURE__ */ import_react3.default.createElement("h3", { className: "font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition" }, item.title),
    /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-xs sm:text-sm leading-relaxed" }, item.description)
  ))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-20 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "lg:col-span-5 space-y-5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.AlertTriangle, { className: "w-3.5 h-3.5 text-amber-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "High-Risk Hill Station Ecology")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight" }, "Why Termites & Wood Borers Attack Wayanad Buildings"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, "Wayanad experiences annual rainfall exceeding 3,000mm and dense rainforest dampness. Combined with rich organic soil and extensive teak, anjili, jackfruit wood, and bamboo in local architecture, subterranean termite colonies rapidly invade foundation slabs and wooden ceiling rafters."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3 pt-2" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700" }, /* @__PURE__ */ import_react3.default.createElement("strong", null, "High Soil Moisture:"), " Water tables along Banasura, Karapuzha, and Vythiri sustain immense underground white ant supercolonies.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700" }, /* @__PURE__ */ import_react3.default.createElement("strong", null, "Exposed Timber Architecture:"), " Resorts, treehouses, and tharavads provide thousands of square feet of unprotected cellulose.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700" }, /* @__PURE__ */ import_react3.default.createElement("strong", null, "Wood Borer Beetle Larvae:"), " Fine yellow powdery frass beneath wooden furniture indicates powder-post beetles hollowing timber from within."))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-4" }, /* @__PURE__ */ import_react3.default.createElement(
    "a",
    {
      href: "#dispatch-desk",
      className: "inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition text-xs sm:text-sm"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Search, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ import_react3.default.createElement("span", null, "Request Immediate Moisture & Termite Scan")
  ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" }, "Diagnostic Self-Check"), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-xl font-serif font-bold text-slate-900 mb-6" }, "8 Warning Signs You Need Professional Termite Treatment in Wayanad"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
    { title: "Mud Tubes on Wall Junctions", desc: "Brown pencil-thin dirt tunnels climbing up foundation plinths and exterior brickwork." },
    { title: "Hollow-Sounding Wooden Door Frames", desc: "Tapping wood produces a papery, empty resonance where interior timber is eaten." },
    { title: "Fine Wood Powder (Frass)", desc: "Yellowish dust piles beneath wooden tables, beds, and roof beams from wood borers." },
    { title: "Blistering & Peeling Paint", desc: "Moisture build-up and hollow channels directly behind painted drywall or plaster." },
    { title: "Discarded Silvery Wings", desc: "Piles of termite alate wings on window sills and door frames after monsoon rains." },
    { title: "Jammed Doors & Windows", desc: "Swelling caused by moisture introduced by termites tunneling through wooden frames." },
    { title: "Damaged Modular Kitchens", desc: "Termites exploiting damp plumbing conduits behind plywood cabinets." },
    { title: "Resort Cottage Stilt Weakening", desc: "Subterranean white ants hollowing out wooden posts and deck footings." }
  ].map((item, idx) => /* @__PURE__ */ import_react3.default.createElement("div", { key: idx, className: "bg-white p-3.5 rounded-xl border border-slate-200 flex items-start space-x-3" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5" }, idx + 1), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-bold text-slate-900" }, item.title), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] text-slate-600 mt-0.5 leading-snug" }, item.desc))))))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Hotel, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Specialized Hospitality & Tourism Focus")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white" }, "Pest & Timber Management for Wayanad Resorts, Homestays & Treehouses"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-300 text-sm sm:text-base" }, "Targeted odorless, eco-safe pest solutions for over 1,500+ luxury hospitality properties across Vythiri, Lakkidi, Meppadi, Chembra, Banasura, and Thirunelly.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, WAYANAD_DATA.tourismDestinations.map((dest, idx) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition flex flex-col justify-between"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-bold uppercase text-emerald-400 font-mono tracking-wider" }, dest.locations), /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Trees, { className: "w-4 h-4 text-emerald-400" })), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-serif font-bold text-white leading-snug" }, dest.title), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-2 pt-1" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-amber-300/90 leading-relaxed bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/40" }, /* @__PURE__ */ import_react3.default.createElement("strong", null, "Ecology Challenge:"), " ", dest.challenge), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-emerald-300 leading-relaxed bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40" }, /* @__PURE__ */ import_react3.default.createElement("strong", null, "Scientific Solution:"), " ", dest.solution))),
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ location: dest.locations, propertyType: "Resort / Homestay" }),
        className: "w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold py-2.5 rounded-xl transition"
      },
      /* @__PURE__ */ import_react3.default.createElement("span", null, "Book Resort Inspection"),
      /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ArrowRight, { className: "w-3.5 h-3.5" })
    ))
  ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "mt-12 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-emerald-400 font-bold text-sm" }, "100% Odor-Free & Non-Toxic"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-400" }, "Zero guest room evacuation required. Treatments can be executed during regular check-in/check-out hours.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-1 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-emerald-400 font-bold text-sm" }, "FSSAI & Eco-Audit Compliant"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-400" }, "Audit-ready documentation, bait station mapping, and certified chemical data sheets for resort kitchens and dining areas.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-1 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-emerald-400 font-bold text-sm" }, "Priority 24/7 Service Desk"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-400" }, "Dedicated emergency dispatch for hospitality clients with guaranteed technician arrival within 45 minutes."))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-24 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-14" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Complete Wayanad Timber Defense")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Termite & Timber Protection Services in Wayanad"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Every service is delivered under strict chemical dosing norms, adhering to Indian Standards (IS:6313) with written guarantee certificates.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" }, WAYANAD_DATA.services.map((service) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: service.id,
      className: "bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100" }, /* @__PURE__ */ import_react3.default.createElement(
      "img",
      {
        src: service.image,
        alt: `${service.name} in Wayanad`,
        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
        loading: "lazy"
      }
    ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 border border-emerald-400/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md" }, service.warranty.split(" ")[0], " ", service.warranty.split(" ")[1] || "Warranty"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute bottom-3 left-3 right-3 text-white" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] font-mono text-emerald-300 uppercase tracking-wider" }, service.tagline), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-bold font-serif leading-tight drop-shadow-sm" }, service.name))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-5 space-y-3.5" }, /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-xs sm:text-sm leading-relaxed" }, service.description), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-2 pt-1 border-t border-slate-100 text-xs text-slate-700" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-slate-900" }, "Application Method:"), " ", service.method), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-slate-900" }, "Chemistry:"), " ", service.chemical)))),
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-5 pt-0" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ problem: service.name, location: "Wayanad District" }),
        className: "w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl transition"
      },
      /* @__PURE__ */ import_react3.default.createElement("span", null, "Book ", service.name),
      /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ArrowRight, { className: "w-3.5 h-3.5" })
    ))
  ))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-20 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Bug, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Full Pest Management")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "General Pest Control Services in Wayanad"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Comprehensive pest defense for residences, hotels, restaurants, and commercial establishments across Wayanad District.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, WAYANAD_DATA.generalPestServices.map((pest) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: pest.id,
      className: "bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-emerald-500 shadow-xs hover:shadow-md transition flex flex-col justify-between"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Bug, { className: "w-5 h-5" })), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100" }, "Wayanad Safe")), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-serif font-bold text-slate-900" }, pest.name), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs font-semibold text-emerald-700" }, pest.tagline), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, pest.description), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-1.5 pt-2 border-t border-slate-100" }, pest.features.map((feat, i) => /* @__PURE__ */ import_react3.default.createElement("div", { key: i, className: "flex items-center space-x-2 text-xs text-slate-700" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle2, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", null, feat))))),
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-4" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ problem: pest.name, location: "Wayanad District" }),
        className: "w-full inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-900 text-xs font-bold py-2 rounded-xl transition"
      },
      /* @__PURE__ */ import_react3.default.createElement("span", null, "Get ", pest.name, " Quote"),
      /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ArrowRight, { className: "w-3.5 h-3.5" })
    ))
  ))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-20 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Standardized Protocol")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "5-Step Scientific Eradication Process"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "How our certified technicians diagnose, eliminate, and permanently protect your Wayanad property under Indian Standards (IS:6313).")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4 relative" }, WAYANAD_DATA.treatmentProcess.map((step, idx) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-emerald-500 transition space-y-3"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-2xl font-serif font-bold text-emerald-700 font-mono" }, step.step),
    /* @__PURE__ */ import_react3.default.createElement("h3", { className: "font-bold text-slate-900 text-sm" }, step.title),
    /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, step.description)
  ))))), /* @__PURE__ */ import_react3.default.createElement("section", { id: "coverage", className: "py-16 sm:py-20 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.MapPin, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "100% District Wide Coverage")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Complete Wayanad Service Reach"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Our mobile technical fleet covers all 3 Taluks, 4 Urban Centers, 4 Block Panchayats & 23 Grama Panchayats in Wayanad District.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10" }, WAYANAD_DATA.majorHubs.map((hub) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: hub.id,
      className: "bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md" }, hub.type.split("/")[0]), /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.MapPin, { className: "w-4 h-4 text-emerald-600" })),
    /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-lg font-serif font-bold text-slate-900" }, hub.name),
    /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, hub.description),
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 border-t border-slate-100" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "Key Areas:"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-xs text-slate-700 leading-normal" }, hub.prominentAreas.slice(0, 7).join(", "), "..."))
  ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-8 space-y-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-wrap items-center gap-2 w-full sm:w-auto" }, /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => setSelectedBlock("all"),
      className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${selectedBlock === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`
    },
    "All Wayanad (",
    allPanchayats.length,
    ")"
  ), WAYANAD_DATA.blocks.map((b) => /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      key: b.id,
      onClick: () => setSelectedBlock(b.id),
      className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${selectedBlock === b.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`
    },
    b.name.split(" ")[0],
    " (",
    b.panchayats.length,
    ")"
  ))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative w-full sm:w-72" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Search, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }), /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Search town, village or panchayat...",
      value: panchayatSearch,
      onChange: (e) => setPanchayatSearch(e.target.value),
      className: "w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:border-emerald-500"
    }
  )))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" }, filteredPanchayats.map((p, idx) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 transition space-y-2 shadow-2xs"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("h4", { className: "font-bold text-slate-900 text-sm" }, p.name, " Grama Panchayat"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100" }, p.blockName.split(" ")[0], " Block")),
    /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, /* @__PURE__ */ import_react3.default.createElement("strong", { className: "text-slate-700" }, "Locations Covered:"), " ", p.areas),
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] text-emerald-700 font-medium" }, "\u2713 Same-day inspection"), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ location: `${p.name} Panchayat, Wayanad` }),
        className: "text-xs font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center space-x-1"
      },
      /* @__PURE__ */ import_react3.default.createElement("span", null, "Book"),
      /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ArrowRight, { className: "w-3 h-3" })
    ))
  ))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-20 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Star, { className: "w-3.5 h-3.5 text-amber-500 fill-amber-500" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Real Wayanad Client Feedback")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Trusted by Wayanad Homeowners & Resorts"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Verified testimonials from resort directors, plantation owners, and residential clients across Wayanad District.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, WAYANAD_DATA.testimonials.slice(0, 3).map((test, idx) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center space-x-1 text-amber-400" }, [...Array(test.rating)].map((_, i) => /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Star, { key: i, className: "w-4 h-4 fill-amber-400" }))), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700 leading-relaxed italic" }, '"', test.review, '"')),
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-3 border-t border-slate-200 flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-bold text-slate-900 text-xs sm:text-sm" }, test.name), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[11px] text-slate-500" }, test.role, " \u2022 ", test.location)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded-md" }, test.service.split(" ")[0], " ", test.service.split(" ")[1]))
  ))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-[#031510] to-slate-950 text-white border-b border-emerald-950/60 relative overflow-hidden" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "lg:col-span-6 space-y-6 text-center lg:text-left" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Share2, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "WhatsApp & Social Share \u2022 Rich Preview Card")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-snug" }, "Share This Wayanad Defense Plan With Family or Resort Team"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-300 text-sm sm:text-base leading-relaxed" }, "Easily send this comprehensive timber & termite protection page to NRI property owners in the Gulf/UK, resort general managers, or on-site caretakers in Wayanad.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex flex-col sm:flex-row items-center gap-3 pt-2" }, /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: handleShareWhatsApp,
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg shadow-emerald-950/50 cursor-pointer active:scale-98"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.MessageCircle, { className: "w-4 h-4 fill-slate-950 text-slate-950" }),
    /* @__PURE__ */ import_react3.default.createElement("span", null, "Share on WhatsApp (With Preview)")
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: handleCopyLink,
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3.5 rounded-xl text-sm font-semibold transition cursor-pointer"
    },
    copiedLink ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Check, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-emerald-300 font-bold" }, "Link Copied to Clipboard!")) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Copy, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Copy Direct Link"))
  )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "flex items-center space-x-1.5 text-emerald-400" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "High-Res Villa Photo Attached")), /* @__PURE__ */ import_react3.default.createElement("span", { className: "flex items-center space-x-1.5 text-emerald-400" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.CheckCircle, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "IS:6313 Guarantee Summary Included")))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "lg:col-span-6 flex justify-center" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-full max-w-md bg-[#0b141a] rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-2xl relative" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center space-x-3 pb-3 border-b border-slate-800 text-xs text-slate-300" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold text-xs" }, "TC"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "font-bold text-white truncate flex items-center space-x-1" }, /* @__PURE__ */ import_react3.default.createElement("span", null, "TermiteControl.me (Wayanad Desk)"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-emerald-400 text-[10px]" }, "\u2713")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[10px] text-emerald-400 truncate" }, "Online \u2022 Sultan Bathery Central Office")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-[10px] text-slate-500 font-mono" }, "16:40")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "mt-3 bg-[#1f2c34] rounded-2xl overflow-hidden border border-slate-700/60 text-left shadow-lg" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900" }, /* @__PURE__ */ import_react3.default.createElement(
    "img",
    {
      src: "/images/wayanad-luxury-hero.jpg",
      alt: "TermiteControl.me Wayanad Luxury Villa Preview",
      className: "w-full h-full object-cover"
    }
  ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-[10px] font-bold text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-500/40" }, "IS:6313 Certified"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[10px] text-slate-300 font-mono tracking-wider" }, "termitecontrol.me/termite-control-wayanad"))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-3.5 space-y-1.5 bg-[#1f2c34]" }, /* @__PURE__ */ import_react3.default.createElement("h4", { className: "text-xs sm:text-sm font-bold text-white leading-tight" }, "TermiteControl.me Wayanad | Kerala's Premier Resort & Villa Protection"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-[11px] text-slate-300 leading-snug" }, "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & NRI estates. 10-Yr Warranty & live video audit."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-700/50" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-emerald-400 font-semibold" }, "Central Hub: Kuppadi, Sultan Bathery"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-emerald-400 flex items-center space-x-0.5" }, /* @__PURE__ */ import_react3.default.createElement("span", null, "Read"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-sky-400 font-bold text-xs" }, "\u2713\u2713"))))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "mt-3 text-center" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] text-slate-400 font-medium" }, "\u2728 Automatically renders when shared on WhatsApp, iMessage & Facebook"))))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "py-16 sm:py-24 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center space-y-3 mb-12" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.HelpCircle, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "AEO & Voice Search Answers")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Frequently Asked Questions (Wayanad)"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-slate-600 text-sm" }, "Direct, transparent answers regarding termite costs, inspection protocols, odorless chemistry, and resort pest control in Wayanad."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "pt-4 max-w-md mx-auto" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.Search, { className: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" }), /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Search questions (e.g. cost, safety, resort AMC)...",
      value: faqSearchQuery,
      onChange: (e) => setFaqSearchQuery(e.target.value),
      className: "w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:border-emerald-500 shadow-2xs"
    }
  )))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-3" }, filteredFaqs.map((faq, idx) => {
    const isOpen = openFaqIndex === idx;
    return /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        key: idx,
        className: "bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition"
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onClick: () => setOpenFaqIndex(isOpen ? -1 : idx),
          className: "w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-50/50 transition"
        },
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-bold text-slate-900 text-sm sm:text-base font-serif" }, faq.q),
        /* @__PURE__ */ import_react3.default.createElement("span", { className: "w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0" }, isOpen ? /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ import_react3.default.createElement(import_lucide_react3.ChevronDown, { className: "w-4 h-4" }))
      ),
      isOpen && /* @__PURE__ */ import_react3.default.createElement("div", { className: "px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/30" }, faq.a)
    );
  })))), /* @__PURE__ */ import_react3.default.createElement(
    PrimaryBottomCTA,
    {
      onOpenInspectionModal,
      districtName: "Wayanad",
      customOfficeAddress: "Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad"
    }
  ), /* @__PURE__ */ import_react3.default.createElement(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://termitecontrol.me/#localbusiness-wayanad",
              "name": "TermiteControl.me Wayanad - Unit of Eco Pest India",
              "url": "https://termitecontrol.me/termite-control-wayanad",
              "logo": "https://termitecontrol.me/images/logo.png",
              "image": "https://termitecontrol.me/images/wayanad-hero-nature.jpg",
              "description": "Professional IS:6313 certified termite control, anti-termite treatment, wood borer eradication and general pest control for homes, luxury resorts and homestays across Wayanad District.",
              "telephone": "+919020040009",
              "email": "support@termitecontrol.me",
              "priceRange": "\u20B9\u20B9",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near St. Mary's College, Kuppadi",
                "addressLocality": "Sultan Bathery",
                "addressRegion": "Kerala",
                "postalCode": "673592",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.6625,
                "longitude": 76.257
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "20:30"
              },
              "areaServed": [
                "Sultan Bathery",
                "Kalpetta",
                "Mananthavady",
                "Vythiri",
                "Meppadi",
                "Panamaram",
                "Ambalavayal",
                "Pulpally",
                "Kuppadi",
                "Lakkidi",
                "Pookode",
                "Thirunelly",
                "Padinjarathara",
                "Wayanad District"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "940"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://termitecontrol.me/termite-control-wayanad#faq",
              "mainEntity": WAYANAD_DATA.faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://termitecontrol.me/termite-control-wayanad#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://termitecontrol.me/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Kerala Service Locations",
                  "item": "https://termitecontrol.me/#locations"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Wayanad District",
                  "item": "https://termitecontrol.me/termite-control-wayanad"
                }
              ]
            }
          ]
        })
      }
    }
  ));
}
