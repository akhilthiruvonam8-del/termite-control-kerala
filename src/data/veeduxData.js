/**
 * VeeduX Official Real Estate Marketplace Data
 * Supports 9 property types across Kerala with authentic specifications.
 */

export const PROPERTY_TYPES = [
  { id: 'land-plots', name: 'Land & Plots', categoryGroup: 'land', icon: 'MapPin' },
  { id: 'houses', name: 'Houses', categoryGroup: 'residential', icon: 'Home' },
  { id: 'villas', name: 'Villas', categoryGroup: 'residential', icon: 'Home' },
  { id: 'apartments', name: 'Apartments', categoryGroup: 'residential', icon: 'Building2' },
  { id: 'flats', name: 'Flats', categoryGroup: 'residential', icon: 'Building2' },
  { id: 'commercial', name: 'Commercial Buildings', categoryGroup: 'commercial', icon: 'Building' },
  { id: 'shops', name: 'Shops', categoryGroup: 'commercial', icon: 'Store' },
  { id: 'offices', name: 'Offices', categoryGroup: 'commercial', icon: 'Briefcase' },
  { id: 'rentals', name: 'Rental Properties', categoryGroup: 'rental', icon: 'KeyRound' },
];

export const CATEGORIES = [
  {
    id: 'land-plots',
    name: 'Land & Plots',
    types: ['land-plots'],
    malayalam: 'സ്ഥലം & പ്ലോട്ടുകൾ',
    count: '3,150+ Properties',
    description: 'Residential plots in Cents, estate plantations & prime road-frontage land',
  },
  {
    id: 'houses-villas',
    name: 'Houses & Villas',
    types: ['houses', 'villas'],
    malayalam: 'വീടുകൾ & വില്ലകൾ',
    count: '2,240+ Properties',
    description: 'Contemporary villas, traditional Nalukettu & gated community homes',
  },
  {
    id: 'apartments-flats',
    name: 'Apartments & Flats',
    types: ['apartments', 'flats'],
    malayalam: 'അപ്പാർട്ട്‌മെന്റുകൾ & ഫ്ലാറ്റുകൾ',
    count: '2,680+ Properties',
    description: 'Luxury high-rises, waterfront sky apartments & budget friendly flats',
  },
  {
    id: 'commercial',
    name: 'Commercial Buildings',
    types: ['commercial'],
    malayalam: 'വാണിജ്യ കെട്ടിടങ്ങൾ',
    count: '720+ Properties',
    description: 'Commercial towers, multi-storey complexes & logistics warehouses',
  },
  {
    id: 'shops-offices',
    name: 'Shops & Offices',
    types: ['shops', 'offices'],
    malayalam: 'കടകൾ & ഓഫീസുകൾ',
    count: '980+ Properties',
    description: 'Prime highway retail showrooms, corporate offices & tech spaces',
  },
  {
    id: 'rentals',
    name: 'Rental Properties',
    types: ['rentals'],
    malayalam: 'വാടക വീടുകൾ & ഫ്ലാറ്റുകൾ',
    count: '1,890+ Properties',
    description: 'Fully furnished apartments, family homes & commercial lease spaces',
  },
];

/**
 * INITIAL_PROPERTIES is empty so that the platform starts completely clean.
 * Real properties posted by users will be fetched directly from Supabase / state.
 */
export const INITIAL_PROPERTIES = [];

export const POPULAR_LOCATIONS = [
  {
    name: 'Kochi (Ernakulam)',
    district: 'Ernakulam',
    tag: 'Metro & Financial Capital',
    propertiesCount: '2,840+ Properties',
    startingPrice: '₹ 45 Lakhs onwards',
  },
  {
    name: 'Kakkanad (SmartCity)',
    district: 'Ernakulam',
    tag: 'IT Corridors & Villas',
    propertiesCount: '1,420+ Properties',
    startingPrice: '₹ 65 Lakhs onwards',
  },
  {
    name: 'Thiruvananthapuram',
    district: 'Thiruvananthapuram',
    tag: 'Technopark & Capital City',
    propertiesCount: '1,960+ Properties',
    startingPrice: '₹ 42 Lakhs onwards',
  },
  {
    name: 'Thrissur',
    district: 'Thrissur',
    tag: 'Cultural Hub & Gold City',
    propertiesCount: '1,420+ Properties',
    startingPrice: '₹ 38 Lakhs onwards',
  },
  {
    name: 'Kozhikode',
    district: 'Kozhikode',
    tag: 'Cyberpark & Coastal Living',
    propertiesCount: '1,210+ Properties',
    startingPrice: '₹ 35 Lakhs onwards',
  },
  {
    name: 'Alappuzha',
    district: 'Alappuzha',
    tag: 'Venice of the East & Lakefront',
    propertiesCount: '740+ Properties',
    startingPrice: '₹ 6.5 Lakhs / Cent',
  },
  {
    name: 'Kottayam',
    district: 'Kottayam',
    tag: 'Rubber Estates & Heritage',
    propertiesCount: '890+ Properties',
    startingPrice: '₹ 40 Lakhs onwards',
  },
  {
    name: 'Kannur',
    district: 'Kannur',
    tag: 'Coastal & Commercial Hub',
    propertiesCount: '490+ Properties',
    startingPrice: '₹ 32 Lakhs onwards',
  },
];

export const TRUST_FEATURES = [
  {
    title: '100% Physically Verified Listings',
    description: 'Every property title, survey map, and physical location is inspected by our local ground teams.',
  },
  {
    title: 'Kerala Land Standards (Cents & Acres)',
    description: 'Designed specifically for Kerala measurements: Cents, Acres, Square Feet, and Purayidam classification.',
  },
  {
    title: 'Direct Owner WhatsApp & Calling',
    description: 'Connect directly with genuine property owners and certified builders without hidden broker fee surprises.',
  },
  {
    title: 'Clear Legal & RERA Guidance',
    description: 'Guidance on Encumbrance Certificate (EC), Land Tax, Thandapper, and Village Office procedures.',
  },
];
