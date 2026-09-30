import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Leaf, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Home, 
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Compass,
  Check,
  Search
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, SUPPORT_EMAIL, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiLocationsSection({ onOpenInspectionModal }) {
  const [activeLocality, setActiveLocality] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Kochi Corporation Core Localities
  const kochiCorporationLocalities = [
    { name: 'Kakkanad', sub: 'Infopark & SmartCity' },
    { name: 'Edappally', sub: 'Lulu & Metro Corridor' },
    { name: 'Vyttila', sub: 'Mobility Hub & NH' },
    { name: 'Palarivattom', sub: 'Bypass & Pipeline Road' },
    { name: 'Kaloor', sub: 'Stadium & Metro Station' },
    { name: 'Kadavanthra', sub: 'KP Vallon Rd & S.A. Road' },
    { name: 'Panampilly Nagar', sub: 'Main Avenue & Prime Core' },
    { name: 'Marine Drive', sub: 'Waterfront Towers & Walkway' },
    { name: 'Fort Kochi', sub: 'Heritage & Coastal Belt' },
    { name: 'Mattancherry', sub: 'Jew Town & Bazaar Rd' },
    { name: 'Thevara', sub: 'Ferry & Waterfront Villas' },
    { name: 'Thoppumpady', sub: 'Aroor-Kochi Highway' },
    { name: 'Willingdon Island', sub: 'Port Trust & Naval Base' },
    { name: 'Pachalam', sub: 'Vaduthala Link Rd' },
    { name: 'Ravipuram', sub: 'MG Road South' },
    { name: 'Elamakkara', sub: 'Bhavans & Residential' },
    { name: 'Thammanam', sub: 'Subhash Chandra Bose Rd' },
    { name: 'Vennala', sub: 'NH Bypass Corridor' },
    { name: 'Palluruthy', sub: 'South West Kochi' },
    { name: 'Edakochi', sub: 'Kumbalam Waterfront' }
  ];

  // 2. Greater Kochi Municipalities & Metro Suburbs
  const greaterKochiLocalities = [
    { name: 'Kalamassery', sub: 'CUSAT & Premier Junction' },
    { name: 'Aluva', sub: 'Periyar Bank & Metro Terminal' },
    { name: 'Thrikkakara', sub: 'Civil Station & Model Tech' },
    { name: 'Thrippunithura', sub: 'Hill Palace & Statue Junction' },
    { name: 'Maradu', sub: 'Kundannoor & Lake Avenues' },
    { name: 'Eloor', sub: 'Industrial Township' },
    { name: 'Angamaly', sub: 'Cochin Airport Belt' },
    { name: 'North Paravur', sub: 'Historic Coastal Hub' },
    { name: 'Cheranallur', sub: 'Container Terminal Rd' },
    { name: 'Kumbalangi', sub: 'Backwater Tourism Village' },
    { name: 'Nettoor', sub: 'INTUC Junction & Lake Belt' },
    { name: 'Mulavukad (Bolgatty)', sub: 'Grand Hyatt & Marina' },
    { name: 'Kundannoor', sub: 'Crowne Plaza & Le Meridien' },
    { name: 'Chittoor', sub: 'South & North Chittoor' },
    { name: 'Vypeen', sub: 'Gosree Islands & Cherai Rd' },
    { name: 'Kadamakkudy', sub: 'Scenic Island Cluster' },
    { name: 'Udayamperoor', sub: 'Synod & High-Growth Belt' },
    { name: 'Vazhakkala', sub: 'Padamugal & Kakkanad Rd' },
    { name: 'Eroor', sub: 'Kochi Suburban Green Belt' },
    { name: 'Kaloor-Kadavanthra Rd', sub: 'Commercial Boulevard' }
  ];

  // 3. Illustrated Map Coordinates for Kochi Focus
  const kochiMapPins = [
    { name: 'Aluva', left: '45.5%', top: '21%', sub: 'Kochi Metro Terminal' },
    { name: 'Angamaly', left: '48%', top: '28%', sub: 'Airport Belt' },
    { name: 'Kalamassery', left: '47.5%', top: '35%', sub: 'Metro Corridor' },
    { name: 'North Paravur', left: '39.5%', top: '36%', sub: 'Coastal Zone' },
    { name: 'Edappally', left: '48.5%', top: '44%', sub: 'Metro Junction' },
    { name: 'Thrikkakara', left: '56.5%', top: '49.5%', sub: 'Kochi Collectorate' },
    { name: 'Kakkanad', left: '55.5%', top: '55%', sub: 'Infopark Hub' },
    { name: 'Kochi Core', left: '44%', top: '52.5%', sub: 'Urban Heart', isCore: true },
    { name: 'Palarivattom', left: '49.5%', top: '56%', sub: 'Central Bypass' },
    { name: 'Vyttila', left: '49.5%', top: '52.5%', sub: 'Mobility Hub' },
    { name: 'Marine Drive', left: '43.5%', top: '48%', sub: 'Waterfront' },
    { name: 'Fort Kochi', left: '40.5%', top: '56.5%', sub: 'Heritage' },
    { name: 'Mattancherry', left: '42%', top: '60.5%', sub: 'Historic Quarter' },
    { name: 'Thevara', left: '48.5%', top: '61.5%', sub: 'Waterfront' },
    { name: 'Maradu', left: '49%', top: '66%', sub: 'Lakeside' },
    { name: 'Thrippunithura', left: '57.5%', top: '44%', sub: 'Royal Town' }
  ];

  // 4. Coverage Structure Workflow Nodes
  const structureNodes = [
    { label: 'City Hub', sub: '(Kochi)', icon: '📍' },
    { label: 'Corporation / Municipality', sub: 'Local Administration', icon: '🏛️' },
    { label: 'Ward / Resident Zone', sub: 'Neighborhood Squad', icon: '🏡' },
    { label: 'Locality / Landmark', sub: 'Direct Doorstep', icon: '🗺️' },
    { label: 'Treatment Type', sub: 'Anti-Termite / Wood Borer', icon: '⚙️' },
    { label: 'Customer Type', sub: 'Residential / Commercial', icon: '👤' },
    { label: 'Property Type', sub: 'Villa, Apartment, High-Rise', icon: '🏢' }
  ];

  const handleLocalitySelect = (locName) => {
    setActiveLocality(locName);
    if (onOpenInspectionModal) {
      onOpenInspectionModal({ location: locName });
    }
  };

  const filteredCorporation = kochiCorporationLocalities.filter(l => 
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    l.sub.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGreater = greaterKochiLocalities.filter(l => 
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    l.sub.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section 
      id="locations" 
      className="relative w-full bg-[#f4f8f6] text-slate-800 overflow-hidden py-10 sm:py-14 md:py-16 lg:py-20 scroll-mt-20 sm:scroll-mt-24"
      aria-label="Kochi Locations Pest Control Coverage"
    >
      {/* ========================================================================= */}
      {/* 1. DESKTOP HD PANORAMIC BACKDROP                                          */}
      {/* ========================================================================= */}
      <div 
        className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none select-none opacity-90 transition-opacity"
        style={{ backgroundImage: `url('/images/ernakulam-locations-bg.jpg')` }}
      />

      {/* Decorative gradient overlay on left for readable contrast */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none" />

      {/* ========================================================================= */}
      {/* 2. MAIN GRID CONTENT                                                      */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Left Narrative & Badges + Center Interactive Map + Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN: Authority Intro & 4 Pillar Badges (lg:col-span-5)        */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-4">
            
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase mb-3">
              <span>KOCHI SERVICE HUBS</span>
              <span className="text-emerald-400">|</span>
              <span>SAME-DAY DISPATCH</span>
              <span className="text-emerald-400">|</span>
              <span>100% COVERAGE</span>
            </div>

            {/* Headline with KOCHI Highlighted */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0e271f] tracking-tight leading-[1.18] mb-4">
              Protection Across Every Corner of{' '}
              <span className="text-[#087f5b] block sm:inline">Kochi</span>
            </h2>

            {/* Natural descriptive paragraph */}
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-6 max-w-xl">
              From the bustling streets and high-rise apartments of Central Kochi to coastal residences and serene suburban villas, Eco Pest India brings certified, odorless pest defense right to your doorstep.
            </p>

            {/* Quick Search Input for Instant Locality Lookup */}
            <div className="relative mb-6 max-w-md">
              <Search className="w-4 h-4 text-emerald-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your Kochi locality (e.g. Kakkanad, Aluva, Marine Drive)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/95 border border-emerald-700/30 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* 4 Circular Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-7">
              
              {/* Badge 1 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcfce7]/80 border-2 border-[#16a34a]/40 flex items-center justify-center text-[#15803d] shadow-sm group-hover:scale-105 group-hover:border-[#15803d] transition-all">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="mt-2 text-xs font-bold text-[#14362b] leading-tight">
                  Local Kochi<br />Experts
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcfce7]/80 border-2 border-[#16a34a]/40 flex items-center justify-center text-[#15803d] shadow-sm group-hover:scale-105 group-hover:border-[#15803d] transition-all">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="mt-2 text-xs font-bold text-[#14362b] leading-tight">
                  Fast<br />Response
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcfce7]/80 border-2 border-[#16a34a]/40 flex items-center justify-center text-[#15803d] shadow-sm group-hover:scale-105 group-hover:border-[#15803d] transition-all">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="mt-2 text-xs font-bold text-[#14362b] leading-tight">
                  Safe &<br />Eco-Friendly
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcfce7]/80 border-2 border-[#16a34a]/40 flex items-center justify-center text-[#15803d] shadow-sm group-hover:scale-105 group-hover:border-[#15803d] transition-all">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="mt-2 text-xs font-bold text-[#14362b] leading-tight">
                  100% Kochi<br />Coverage
                </div>
              </div>

            </div>

            {/* Mobile / Tablet Illustrated Map Preview (Shown on screens < lg) */}
            <div className="lg:hidden mb-6 rounded-2xl overflow-hidden border border-emerald-900/15 shadow-md relative bg-emerald-950">
              <img 
                src="/images/ernakulam-locations-bg.jpg" 
                alt="Kochi Pest Control Service Map" 
                className="w-full h-auto object-cover max-h-72"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-950 flex items-center justify-between border border-emerald-500/20">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 mr-1" />
                  Kochi Corporation & Greater Suburbs
                </span>
                <span className="text-[10px] font-mono text-emerald-800 font-bold">IS:6313 Certified</span>
              </div>
            </div>

            {/* Direct Official Contact Box (Strict User Phone & Email Rule) */}
            <div className="bg-white/95 backdrop-blur-md border border-emerald-700/20 rounded-2xl p-4 sm:p-5 shadow-sm mb-4">
              <p className="text-[11px] font-mono font-bold tracking-wider text-emerald-800 uppercase mb-2">
                Official Eco Pest India Assistance
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* 24/7 Phone Call Button */}
                <a 
                  href="tel:9020040009"
                  onClick={(e) => { e.preventDefault(); handlePhoneClick('kochi_locations_banner'); }}
                  className="flex items-center space-x-2 text-emerald-900 hover:text-emerald-700 font-bold transition group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">24/7 Hotline</span>
                    <span className="text-xs sm:text-sm font-extrabold">{PRIMARY_PHONE_DISPLAY}</span>
                  </div>
                </a>

                {/* Support Email Link */}
                <a 
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-center space-x-2 text-emerald-900 hover:text-emerald-700 font-bold transition group"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Email Support</span>
                    <span className="text-xs sm:text-sm font-extrabold">{SUPPORT_EMAIL}</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------------------- */}
          {/* CENTER INTERACTIVE MAP PINS (Overlaid on desktop HD backdrop, lg:col-span-3) */}
          {/* --------------------------------------------------------------------- */}
          <div className="hidden lg:block lg:col-span-3 relative h-[580px] pointer-events-auto">
            {/* Interactive Pins Floating directly above the Kochi map */}
            {kochiMapPins.map((pin, idx) => {
              const isSelected = activeLocality === pin.name;
              return (
                <div
                  key={idx}
                  style={{ left: pin.left, top: pin.top }}
                  onClick={() => handleLocalitySelect(pin.name)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20 transition-all duration-200 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                  title={`${pin.name} - ${pin.sub} (Click to inspect in Kochi)`}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Pin Circle Indicator */}
                    <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shadow-md transition-colors ${
                      pin.isCore 
                        ? 'bg-emerald-900 border-white text-white ring-4 ring-emerald-500/40 animate-pulse'
                        : isSelected
                          ? 'bg-amber-500 border-white text-black'
                          : 'bg-[#0f4f38] border-white text-white group-hover:bg-emerald-600'
                    }`}>
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>

                    {/* Small crisp locality name tag */}
                    <span className={`text-[10px] font-sans font-bold whitespace-nowrap mt-0.5 px-1.5 py-0.5 rounded shadow-sm transition-all ${
                      pin.isCore
                        ? 'bg-[#042f21] text-emerald-200 border border-emerald-400/40 text-[11px]'
                        : isSelected
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : 'bg-white/95 text-slate-800 border border-slate-200/80 group-hover:bg-emerald-950 group-hover:text-emerald-200'
                    }`}>
                      {pin.name}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Natural Cursive Badge for Greater Kochi */}
            <div className="absolute right-0 bottom-10 transform rotate-[-6deg] pointer-events-none select-none">
              <span className="font-serif italic font-bold text-lg text-emerald-900/85 tracking-wide drop-shadow-sm bg-white/60 px-3 py-1 rounded-lg backdrop-blur-[2px]">
                Greater Kochi Region
              </span>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: 2 White Locality Cards (lg:col-span-4)                  */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* CARD 1: Kochi Corporation Localities */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/80 transition-shadow hover:shadow-[0_14px_45px_rgba(0,0,0,0.09)]">
              
              {/* Card Header */}
              <div className="flex items-start space-x-3 pb-3.5 mb-3.5 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#084f39] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 fill-white stroke-none" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0e271f] tracking-tight leading-snug">
                    Kochi City Localities
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    Central, Coastal & Urban Kochi Corporation Wards
                  </p>
                </div>
              </div>

              {/* 2-Column Locality Pills Grid */}
              <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                {filteredCorporation.map((loc, idx) => {
                  const isSelected = activeLocality === loc.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleLocalitySelect(loc.name)}
                      className={`text-left px-2.5 py-1.5 rounded-lg border text-xs flex items-center space-x-1.5 transition-all duration-150 cursor-pointer ${
                        isSelected 
                          ? 'bg-emerald-900 text-amber-300 border-emerald-700 shadow-sm font-bold'
                          : 'bg-slate-50/80 hover:bg-emerald-50 text-slate-700 hover:text-emerald-950 border-slate-200/60 hover:border-emerald-300'
                      }`}
                      title={`Book inspection for ${loc.name} (${loc.sub})`}
                    >
                      <MapPin className={`w-3 h-3 shrink-0 ${isSelected ? 'text-amber-300' : 'text-emerald-600'}`} />
                      <span className="truncate">{loc.name}</span>
                    </button>
                  );
                })}

                {/* + More Local Areas Button */}
                <button
                  onClick={() => onOpenInspectionModal && onOpenInspectionModal({ location: 'Kochi City' })}
                  className="col-span-2 sm:col-span-1 px-2.5 py-1.5 rounded-lg border border-dashed border-emerald-400 bg-emerald-50/60 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-950 text-xs font-bold transition flex items-center justify-center cursor-pointer"
                >
                  <span>+ More Kochi Wards</span>
                </button>
              </div>

            </div>

            {/* CARD 2: Greater Kochi & Metro Suburbs */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/80 transition-shadow hover:shadow-[0_14px_45px_rgba(0,0,0,0.09)]">
              
              {/* Card Header */}
              <div className="flex items-start space-x-3 pb-3.5 mb-3.5 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#084f39] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 fill-white stroke-none" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0e271f] tracking-tight leading-snug">
                    Greater Kochi & Suburbs
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    Metro corridors, satellite towns & coastal avenues
                  </p>
                </div>
              </div>

              {/* 2-Column Towns Pills Grid */}
              <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                {filteredGreater.map((loc, idx) => {
                  const isSelected = activeLocality === loc.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleLocalitySelect(loc.name)}
                      className={`text-left px-2.5 py-1.5 rounded-lg border text-xs flex items-center space-x-1.5 transition-all duration-150 cursor-pointer ${
                        isSelected 
                          ? 'bg-emerald-900 text-amber-300 border-emerald-700 shadow-sm font-bold'
                          : 'bg-slate-50/80 hover:bg-emerald-50 text-slate-700 hover:text-emerald-950 border-slate-200/60 hover:border-emerald-300'
                      }`}
                      title={`Book inspection for ${loc.name} (${loc.sub})`}
                    >
                      <MapPin className={`w-3 h-3 shrink-0 ${isSelected ? 'text-amber-300' : 'text-emerald-600'}`} />
                      <span className="truncate">{loc.name}</span>
                    </button>
                  );
                })}

                {/* + More Locations Button */}
                <button
                  onClick={() => onOpenInspectionModal && onOpenInspectionModal({ location: 'Greater Kochi Suburbs' })}
                  className="col-span-2 sm:col-span-1 px-2.5 py-1.5 rounded-lg border border-dashed border-emerald-400 bg-emerald-50/60 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-950 text-xs font-bold transition flex items-center justify-center cursor-pointer"
                >
                  <span>+ More Suburbs</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* ===================================================================== */}
        {/* 3. BOTTOM COVERAGE STRUCTURE PIPELINE (Opaque crisp card covering bg)  */}
        {/* ===================================================================== */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-emerald-900/10 relative z-20">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Header */}
            <div className="text-left shrink-0">
              <h4 className="text-base sm:text-lg font-extrabold text-[#0e271f] leading-snug">
                Our Kochi Dispatch Structure
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Rapid response pipeline across all Kochi postal codes
              </p>
            </div>

            {/* 7 Workflow Steps Horizontal Scrollable Ribbon */}
            <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-max">
                {structureNodes.map((node, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/70 min-w-[105px] sm:min-w-[120px]">
                      <span className="text-base sm:text-lg mb-0.5">{node.icon}</span>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        {node.label}
                      </span>
                      {node.sub && (
                        <span className="text-[9px] text-emerald-700 font-semibold mt-0.5">{node.sub}</span>
                      )}
                    </div>
                    {index < structureNodes.length - 1 && (
                      <span className="text-slate-300 font-bold select-none">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Cursive Signoff */}
            <div className="shrink-0 text-right hidden xl:block">
              <p className="font-serif italic font-bold text-base text-emerald-800 tracking-wide">
                Local Support. Lasting Protection.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
