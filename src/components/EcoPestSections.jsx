import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Bug, 
  Home, 
  Building2, 
  HelpCircle, 
  ChevronDown, 
  Layers, 
  FileText, 
  Image as ImageIcon, 
  Check,
  Star,
  Zap,
  ShieldAlert
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function EcoPestSections({ onOpenInspectionModal }) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: 'Kochi / Ernakulam',
    service: 'Termite Defense (10-Yr Warranty)'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setFormSubmitted(true);
    if (onOpenInspectionModal) {
      onOpenInspectionModal({
        name: formData.name,
        phone: formData.phone,
        location: formData.district,
        problem: formData.service
      });
    }
  };

  const services = [
    {
      title: 'Pre-Construction Anti-Termite Treatment',
      code: 'IS:6313 PART 2',
      tag: 'FOUNDATION BARRIER',
      desc: 'Chemical soil barrier created during plinth filling and masonry stage. Provides lifetime protection for new buildings.',
      icon: Building2,
      warranty: 'Up to 10-Year Bond',
      features: ['Soil trench injection', 'Plinth masonry barrier', 'Conduit treatment']
    },
    {
      title: 'Post-Construction Drill-Inject-Seal',
      code: 'IS:6313 PART 3',
      tag: 'EXISTING HOMES & VILLAS',
      desc: 'Precision micro-drilling at 1-foot intervals along interior skirting. 100% odorless chemical barrier without altering tiles.',
      icon: Home,
      warranty: '5 to 10-Year Warranty',
      features: ['Odorless Bayer chemistry', 'Skirting micro-holes', 'Zero floor damage']
    },
    {
      title: 'Wood Borer & Timber Syringe Treatment',
      code: 'TIMBER RESTORATION',
      tag: 'DOORS & WARDROBES',
      desc: 'Targeted syringe injection into pinholes to kill wood-boring beetle larvae and prevent timber powder fall.',
      icon: Bug,
      warranty: 'Complete Larvae Kill',
      features: ['Deep timber absorption', 'Anti-fungal formula', 'Furniture safe']
    },
    {
      title: '100% Odorless Kitchen Cockroach Gel',
      code: 'ADVANCED GEL BAIT',
      tag: 'CHILD & PET SAFE',
      desc: 'Bayer micro-dot gel applied inside kitchen cabinets, hinges, and electronics. No need to remove utensils or vacate room.',
      icon: ShieldCheck,
      warranty: 'Instant Domino Effect',
      features: ['Zero toxic fumes', 'No utensil clearing', 'Long-lasting protection']
    },
    {
      title: 'Bed Bug Thermal & Micro-Mist Eradication',
      code: '2-STAGE DEFENSE',
      tag: 'BEDROOM COMFORT',
      desc: 'Comprehensive mattress, headboard, and baseboard eradication targeting both adult bugs and microscopic eggs.',
      icon: ShieldAlert,
      warranty: 'Guaranteed Relief',
      features: ['Egg-penetrating mist', 'Mattress steaming', 'Non-staining chemicals']
    },
    {
      title: 'Commercial AMC & Corporate Fleet Defense',
      code: 'ENTERPRISE CONTRACT',
      tag: 'IT PARKS & RESORTS',
      desc: 'Tailored pest management programs for IT campuses, hotels, hospitals, and food manufacturing facilities across Kerala.',
      icon: Layers,
      warranty: 'Full Audit Compliance',
      features: ['Audit documentation', 'Dedicated supervisor', 'Emergency 2-hour response']
    }
  ];

  const locations = [
    { name: 'Kochi / Ernakulam', hub: 'S.A. Road & Kakkanad Infopark', phone: '90200 40009', status: 'Active 24/7' },
    { name: 'Kozhikode', hub: 'Pavamani Road, Near Malabar Gold', phone: '90200 40009', status: 'Rapid Squad' },
    { name: 'Thrissur', hub: 'Veluthath Building, Kuttoor', phone: '90200 40009', status: 'Rapid Squad' },
    { name: 'Kollam', hub: 'Near DYFI Youth Centre, Polayathodu', phone: '90200 40009', status: 'Rapid Squad' },
    { name: 'Alappuzha', hub: 'Central Dispatch, Boat Jetty Road', phone: '90200 40009', status: 'Waterfront Squad' },
    { name: 'Palakkad', hub: 'Safa Building, Chandra Nagar', phone: '90200 40009', status: 'Rapid Squad' },
    { name: 'Wayanad', hub: 'Kuppadi, Sultan Bathery', phone: '90200 40009', status: 'Plantation Hub' },
    { name: 'Pathanamthitta', hub: 'Mezhuveli P.O., Central Kerala', phone: '90200 40009', status: 'Rapid Squad' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/images/hero-slide-1-waterfront.jpg',
      title: 'Waterfront Luxury Villa Timber Shield',
      category: 'Residential Protection'
    },
    {
      id: 2,
      image: '/images/hero-slide-2-torch-inspect.jpg',
      title: 'Precision Acoustic & Torch Inspection',
      category: 'Early Colony Detection'
    },
    {
      id: 3,
      image: '/images/hero-slide-3-indoor-inject.jpg',
      title: '100% Odorless Skirting Micro-Injection',
      category: 'Modular Interior Safe'
    },
    {
      id: 4,
      image: '/images/hero-slide-4-termite-macro.jpg',
      title: 'Subterranean Colony & Pest Eradication',
      category: 'Biological Eradication'
    },
    {
      id: 5,
      image: '/images/hero-slide-5-commercial-van.jpg',
      title: 'Commercial Rapid Squad Fleet Dispatch',
      category: 'Enterprise Response'
    },
    {
      id: 6,
      image: '/images/before-after.jpg',
      title: 'Before & After Timber Restoration',
      category: 'IS:6313 Certified Results'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      tag: 'MONSOON DEFENSE',
      title: 'Why Kerala’s High Humidity Accelerates Subterranean Termites',
      excerpt: 'Subterranean termites require continuous soil moisture. Post-monsoon soil in Kerala creates the ideal breeding ground for rapid timber invasion.',
      date: 'September 2026',
      readTime: '4 min read'
    },
    {
      id: 2,
      tag: 'HOMEOWNER GUIDE',
      title: 'Pre-Construction vs Post-Construction: What Saves You Lakhs?',
      excerpt: 'Treating the soil during the foundation stage costs a fraction of repairing damage after hardwood doors and modular kitchens are destroyed.',
      date: 'September 2026',
      readTime: '5 min read'
    },
    {
      id: 3,
      tag: 'TIMBER CARE',
      title: 'How to Distinguish Wood Borer Powder from Termite Mud Tubes',
      excerpt: 'Fine powder falling under door frames indicates powder-post beetles, while mud tunnels indicate subterranean termites. Learn the right treatment for each.',
      date: 'September 2026',
      readTime: '3 min read'
    }
  ];

  const faqs = [
    {
      q: 'Is Eco Pest India’s treatment completely odorless and safe for kids & pets?',
      a: 'Yes, 100%. We utilize advanced, Government CIB&RC registered odorless water-based micro-emulsions (Bayer Premise / Agenda chemistry). There are zero irritating fumes, so families with babies, elderly members, and indoor pets do not need to vacate the house.'
    },
    {
      q: 'How does the Eco Pest India 10-Year Warranty Bond work?',
      a: 'For post-construction and pre-construction treatments, we issue an official legal warranty certificate. If any live termite activity appears during the warranty period, our squad will conduct re-treatment free of charge with zero hassle.'
    },
    {
      q: 'Do we need to empty our kitchen cabinets or move heavy furniture?',
      a: 'No. Our precision micro-drilling and targeted odorless gel techniques require minimal disturbance. You do not need to pack away kitchen utensils or vacate rooms during the process.'
    },
    {
      q: 'How quickly can an inspection squad visit my property?',
      a: 'We operate active dispatch squads across Kochi, Kozhikode, Thrissur, Kollam, Alappuzha, Palakkad, Wayanad, and Pathanamthitta. In most urban centers, we provide same-day or 45-minute response.'
    },
    {
      q: 'What is Indian Standard IS:6313 and why is it important?',
      a: 'IS:6313 is the Bureau of Indian Standards code governing anti-termite measures in buildings. Eco Pest India strictly adheres to Part 2 (pre-construction soil barrier) and Part 3 (post-construction treatment), ensuring structural compliance.'
    },
    {
      q: 'How do I book a free site inspection?',
      a: 'You can tap the "Free Inspection" button anywhere on this page, call our central helpline at 90200 40009, or message us directly on WhatsApp. We provide zero-obligation on-site surveys.'
    }
  ];

  return (
    <div className="w-full bg-[#020e09] text-slate-100 font-sans select-none">
      
      {/* ===================================================================== */}
      {/* SECTION 1: ABOUT ECO PEST INDIA (#about)                             */}
      {/* ===================================================================== */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 relative overflow-hidden">
        {/* Ambient Backlight */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ABOUT ECO PEST INDIA</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white mb-4">
              Safe Home, Healthy Life — <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">25+ Years of Trust</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Eco Pest India is Kerala's premier pest and termite eradication institution. Backed by government CIB&RC certified chemistry, rigorous IS:6313 engineering protocols, and 100% odorless formulation, we protect your precious living spaces without disrupting your daily routine.
            </p>
          </div>

          {/* 4 Feature Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#031c12] to-[#010e08] border border-emerald-800/40 hover:border-amber-400/60 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-amber-400/50 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-white mb-2">Govt. CIB&RC Certified</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                100% legitimate chemical formulations registered under the Central Insecticides Board & Registration Committee of India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#031c12] to-[#010e08] border border-emerald-800/40 hover:border-amber-400/60 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-amber-400/50 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-white mb-2">10-Year Warranty Bond</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Legal warranty certificate backed by stamp paper, including free periodic re-inspections and immediate re-treatment if required.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#031c12] to-[#010e08] border border-emerald-800/40 hover:border-amber-400/60 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-amber-400/50 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-white mb-2">100% Odorless Chemistry</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Safe for infants, asthmatic elders, and domestic pets. No offensive pesticide smells and zero need to vacate your residence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#031c12] to-[#010e08] border border-emerald-800/40 hover:border-amber-400/60 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-amber-400/50 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-white mb-2">45-Min Squad Dispatch</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated mobile response units stationed across Kochi, Kozhikode, Thrissur, Kollam, Alappuzha, Palakkad, Wayanad, and Pathanamthitta.
              </p>
            </div>

          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-[#032014]/80 to-emerald-950/60 border border-emerald-500/30 text-center shadow-2xl">
            <div>
              <div className="text-2xl sm:text-4xl font-cinzel font-black text-amber-400">15,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Kerala Homes Protected</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-cinzel font-black text-amber-400">10 Years</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Unconditional Warranty Bond</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-cinzel font-black text-amber-400">14 Districts</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Active Flying Squads</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-cinzel font-black text-amber-400">IS:6313</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Indian Standards Certified</div>
            </div>
          </div>

        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 2: SPECIALIZED SERVICES (#services)                          */}
      {/* ===================================================================== */}
      <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>SPECIALIZED SERVICES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white mb-4">
              Engineered <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">Pest & Termite Defense</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              From new residential constructions to retrofitting existing heritage tharavads, modular luxury villas, and IT campuses.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#031d13] to-[#011009] border border-emerald-800/40 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-black/60 border border-amber-400/50 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-950 border border-emerald-600/40 text-emerald-300">
                        {svc.code}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
                      {svc.tag}
                    </div>

                    <h3 className="font-cinzel font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-amber-200 transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {svc.desc}
                    </p>

                    <div className="space-y-2 mb-6 pt-2 border-t border-emerald-900/50">
                      {svc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 mr-2 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-900/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-amber-300">
                      {svc.warranty}
                    </span>
                    <button
                      onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: svc.title })}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 3: LOCATIONS (#locations)                                    */}
      {/* ===================================================================== */}
      <section id="locations" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>KERALA-WIDE DISPATCH</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white mb-4">
              Rapid Service Hubs in <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">Every District</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Equipped squads on duty with specialized acoustic wall-scanning tools and high-pressure chemical injection systems.
            </p>
          </div>

          {/* 8 District Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {locations.map((loc, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#031d13] to-[#011109] border border-emerald-800/40 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      {loc.status}
                    </span>
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>

                  <h3 className="font-cinzel font-bold text-base sm:text-lg text-white mb-1">
                    {loc.name}
                  </h3>

                  <p className="text-xs text-slate-400 mb-4">
                    {loc.hub}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-900/60 flex items-center justify-between">
                  <a
                    href="tel:9020040009"
                    className="flex items-center text-xs font-bold text-amber-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 mr-1 text-emerald-400" />
                    <span>{loc.phone}</span>
                  </a>
                  <button
                    onClick={() => onOpenInspectionModal && onOpenInspectionModal({ location: loc.name })}
                    className="text-[11px] font-bold text-emerald-400 hover:text-white underline cursor-pointer"
                  >
                    Inspect
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 4: GALLERY (#gallery)                                        */}
      {/* ===================================================================== */}
      <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow">
              <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>REAL FIELD SHOWCASE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white mb-4">
              Witness Our <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">Certified Operations</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Authentic on-site photographs of acoustic timber scanning, skirting injection, subterranean colony barriers, and fleet operations.
            </p>
          </div>

          {/* 6 Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedGalleryImg(item)}
                className="group relative rounded-2xl overflow-hidden border-2 border-emerald-900/60 hover:border-amber-400/80 transition-all duration-300 aspect-[16/11] cursor-pointer shadow-2xl bg-black"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel font-bold text-white text-base sm:text-lg leading-tight mt-0.5 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedGalleryImg && (
            <div 
              onClick={() => setSelectedGalleryImg(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer animate-in fade-in"
            >
              <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-black">
                <img 
                  src={selectedGalleryImg.image} 
                  alt={selectedGalleryImg.title} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-4 bg-[#020e09] border-t border-emerald-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">{selectedGalleryImg.category}</span>
                    <h4 className="text-white font-cinzel font-bold text-lg">{selectedGalleryImg.title}</h4>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Tap anywhere to close</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 5: BLOG (#blog)                                              */}
      {/* ===================================================================== */}
      <section id="blog" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>TIMBER & HEALTH CARE BLOG</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white mb-4">
              Pest Prevention & <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">Home Defense Insights</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Expert guides written by our certified entomologists and senior site managers for Kerala homeowners.
            </p>
          </div>

          {/* 3 Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#031d13] to-[#011109] border border-emerald-800/40 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-600/40 text-amber-300 font-bold">
                      {post.tag}
                    </span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="font-cinzel font-bold text-lg sm:text-xl text-white mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 font-mono">{post.date}</span>
                  <button
                    onClick={() => onOpenInspectionModal && onOpenInspectionModal({ topic: post.title })}
                    className="text-amber-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Advisory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 6: FAQ (#faq)                                                */}
      {/* ===================================================================== */}
      <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-4 shadow">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white mb-4">
              Clear Answers for <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">Kerala Homeowners</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Have a question about our odorless chemistry, warranty certificate, or pricing? Find answers below.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#032014] border-amber-400/60 shadow-[0_0_20px_rgba(245,199,93,0.15)] ring-1 ring-amber-400/30' 
                      : 'bg-[#02140d] border-emerald-800/40 hover:border-emerald-600/50'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-cinzel font-bold text-white pr-2">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-amber-400 text-slate-950 rotate-180 shadow-md' : 'bg-emerald-950 text-slate-300 border border-emerald-700/50'
                    }`}>
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-emerald-800/40 pt-3.5 font-sans">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 7: CONTACT US & FREE INSPECTION FORM (#contact)              */}
      {/* ===================================================================== */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Direct Helpline & Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest shadow">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>CENTRAL HELPLINE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white leading-tight">
                Connect with <br />
                <span className="bg-gradient-to-r from-[#FFF5B8] via-[#F5C042] to-[#D49319] bg-clip-text text-transparent">Eco Pest India</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Book a zero-obligation on-site inspection for your home, commercial property, or ongoing construction. Our certified engineers will assess soil moisture, timber acoustic resonance, and colony entry points.
              </p>

              {/* Direct Touch Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href="tel:9020040009"
                  className="flex items-center space-x-3.5 p-4 rounded-2xl bg-gradient-to-r from-[#F5C042] via-[#E5A920] to-[#C98B10] text-slate-950 font-black shadow-[0_0_20px_rgba(245,199,93,0.4)] hover:brightness-110 transition group"
                >
                  <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-900">24/7 Rapid Toll-Free Helpline</div>
                    <div className="text-lg sm:text-xl font-cinzel font-black tracking-wide">{PRIMARY_PHONE_DISPLAY}</div>
                  </div>
                </a>

                <button
                  onClick={() => handleWhatsAppClick('contact_section', { location: 'Kerala', message: 'Hi Eco Pest India, I would like to schedule a free inspection.' })}
                  className="w-full flex items-center space-x-3.5 p-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold shadow-lg transition cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-white/80">WhatsApp Instant Response</div>
                    <div className="text-base sm:text-lg font-cinzel font-bold">Chat With Site Engineer</div>
                  </div>
                </button>
              </div>

              {/* Central Office Address */}
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 space-y-2 text-xs">
                <div className="flex items-center text-amber-400 font-bold font-mono uppercase tracking-wider">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  Central Kerala Head Office:
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">
                  Eco Pest India, Near Metro Pillar 482, S.A. Road / Kakkanad Corridor, Kochi, Kerala - 682020.
                  <br />
                  <span className="text-emerald-400 font-mono text-[11px]">Branches: Kozhikode • Thrissur • Kollam • Alappuzha • Palakkad • Wayanad • Pathanamthitta</span>
                </p>
              </div>
            </div>

            {/* Right Column: Direct Booking Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#031d13] to-[#010e08] border-2 border-amber-400/60 shadow-2xl">
                
                <div className="mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300">
                    INSTANT REGISTRATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-cinzel font-black text-white mt-1">
                    Book Free On-Site Inspection
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Our technical surveyor will inspect your property with zero obligation.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-cinzel font-bold text-white">Inspection Request Received!</h4>
                    <p className="text-xs text-slate-300">
                      Our dispatch engineer will call you shortly on <span className="text-amber-400 font-bold">{formData.phone}</span> to confirm your inspection slot.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Your Full Name
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Menon / Thomas Varghese"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-emerald-800/60 focus:border-amber-400 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Mobile Number (For Squad Callback)
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98470 12345"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-emerald-800/60 focus:border-amber-400 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          District / Location
                        </label>
                        <select
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-emerald-800/60 focus:border-amber-400 text-white text-xs sm:text-sm focus:outline-none transition"
                        >
                          <option value="Kochi / Ernakulam">Kochi / Ernakulam</option>
                          <option value="Kozhikode">Kozhikode</option>
                          <option value="Thrissur">Thrissur</option>
                          <option value="Kollam">Kollam</option>
                          <option value="Alappuzha">Alappuzha</option>
                          <option value="Palakkad">Palakkad</option>
                          <option value="Wayanad">Wayanad</option>
                          <option value="Pathanamthitta">Pathanamthitta</option>
                          <option value="Kasaragod">Kasaragod</option>
                          <option value="Other Kerala District">Other Kerala District</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          Problem / Requirement
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-emerald-800/60 focus:border-amber-400 text-white text-xs sm:text-sm focus:outline-none transition"
                        >
                          <option value="Termite Defense (10-Yr Warranty)">Termite Defense (10-Yr Warranty)</option>
                          <option value="Pre-Construction Foundation">Pre-Construction Foundation</option>
                          <option value="Wood Borer Pin-Hole Eradication">Wood Borer Pin-Hole Eradication</option>
                          <option value="Cockroach & Kitchen Pest Gel">Cockroach & Kitchen Pest Gel</option>
                          <option value="Bed Bug Treatment">Bed Bug Treatment</option>
                          <option value="Commercial / Villa Inspection">Commercial / Villa Inspection</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(245,199,93,0.4)] hover:brightness-110 active:scale-98 transition flex items-center justify-center space-x-2 cursor-pointer mt-2"
                    >
                      <span>CONFIRM FREE INSPECTION APPOINTMENT</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero Obligation • 100% Confidential • Government IS:6313 Certified</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ===================================================================== */}
      {/* SECTION 8: EXECUTIVE FOOTER                                           */}
      {/* ===================================================================== */}
      <footer className="bg-[#010906] text-slate-400 text-xs pt-16 pb-12 border-t border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/50">
            
            {/* Col 1 & 2: Brand, Tagline, About */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-amber-400/90 bg-black p-1 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
                  <img 
                    src="/images/eco-pest-india-logo.png" 
                    alt="Eco Pest India Logo" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-cinzel font-black text-white">
                    ECO PEST <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">INDIA</span>
                  </h3>
                  <p className="text-[11px] font-sans font-semibold text-emerald-300">Safe Home, Healthy Life</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-sans">
                Kerala’s trusted pest eradication and structural termite protection service conforming to IS:6313 specifications. Odorless, baby-safe, and backed by a 10-year legal defense bond.
              </p>

              <div className="pt-2 flex flex-col space-y-2 text-slate-200">
                <a href="tel:9020040009" className="flex items-center space-x-2 text-amber-300 hover:text-white font-bold">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
                </a>
                <div className="flex items-center space-x-2 text-slate-400 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Monday - Sunday: 7:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Col 3: Quick Navigation */}
            <div>
              <h4 className="text-sm font-cinzel font-bold text-white uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-amber-300 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-amber-300 transition-colors">Services</a></li>
                <li><a href="#locations" className="hover:text-amber-300 transition-colors">Locations</a></li>
                <li><a href="#blog" className="hover:text-amber-300 transition-colors">Blog</a></li>
                <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Gallery</a></li>
                <li><a href="#faq" className="hover:text-amber-300 transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 4: Key Services */}
            <div>
              <h4 className="text-sm font-cinzel font-bold text-white uppercase tracking-wider mb-4">
                Specializations
              </h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-amber-300 transition-colors">Pre-Construction Soil Defense</a></li>
                <li><a href="#services" className="hover:text-amber-300 transition-colors">Post-Construction Drill & Fill</a></li>
                <li><a href="#services" className="hover:text-amber-300 transition-colors">Wood Borer Timber Injection</a></li>
                <li><a href="#services" className="hover:text-amber-300 transition-colors">100% Odorless Cockroach Gel</a></li>
                <li><a href="#services" className="hover:text-amber-300 transition-colors">Bed Bug Thermal Eradication</a></li>
                <li><a href="#services" className="hover:text-amber-300 transition-colors">Corporate & Resort AMC</a></li>
              </ul>
            </div>

            {/* Col 5: Certifications & Trust */}
            <div>
              <h4 className="text-sm font-cinzel font-bold text-white uppercase tracking-wider mb-4">
                Certifications
              </h4>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-800/40">
                  <div className="text-[11px] font-bold text-emerald-400 font-mono">IS:6313 COMPLIANT</div>
                  <div className="text-[10px] text-slate-400">Bureau of Indian Standards</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-800/40">
                  <div className="text-[11px] font-bold text-amber-400 font-mono">GOVT. CIB&RC APPROVED</div>
                  <div className="text-[10px] text-slate-400">Non-Hazardous Formulations</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-800/40">
                  <div className="text-[11px] font-bold text-white font-mono">10-YEAR WARRANTY BOND</div>
                  <div className="text-[10px] text-slate-400">Stamp Paper Documented</div>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
            <div>
              © 2026 Eco Pest India. Safe Home, Healthy Life. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span className="text-amber-400/90 font-mono">IS:6313 Standard</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
