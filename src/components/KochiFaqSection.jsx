import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Leaf, 
  Building2, 
  MapPin, 
  Headphones, 
  Zap,
  CheckCircle2,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, SUPPORT_EMAIL, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiFaqSection({ onOpenInspectionModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0); // 01 is open by default

  const categories = [
    'All',
    'Termite Control',
    'Cockroaches',
    'Bed Bugs',
    'Rodents',
    'Mosquitoes',
    'General'
  ];

  const faqList = [
    {
      id: '01',
      num: '01',
      category: 'Termite Control',
      question: 'Do you provide termite treatment in Kochi and Ernakulam?',
      answer: 'Yes, Eco Pest India provides comprehensive pre-construction and post-construction termite treatments across all areas of Kochi Corporation and greater Ernakulam, including Kakkanad (Infopark), Marine Drive, Panampilly Nagar, Edappally, Aluva, Palarivattom, Kadavanthra, Fort Kochi, Vyttila, and Maradu. Our rapid response squad reaches within hours for same-day on-site inspection.'
    },
    {
      id: '02',
      num: '02',
      category: 'Termite Control',
      question: 'How long does termite treatment last?',
      answer: 'Our advanced subterranean chemical barrier treatments come with an official government-backed warranty of up to 10 years for pre-construction and 5 to 10 years for post-construction drill-and-inject treatments. All treatments adhere strictly to Bureau of Indian Standards (IS:6313 Part 2 & 3) using certified non-repellent termiticides.'
    },
    {
      id: '03',
      num: '03',
      category: 'General',
      question: 'Is termite treatment safe for my family and pets?',
      answer: 'Absolutely. We use 100% odorless, eco-friendly green chemistry certified by the Central Insecticides Board (CIB&RC). Our formulations are water-based, non-repellent, and safe for infants, senior citizens, and household pets. You do not need to evacuate your residence during or after treatment.'
    },
    {
      id: '04',
      num: '04',
      category: 'Termite Control',
      question: 'What is the cost of termite control in Kochi?',
      answer: 'Pricing depends on the total square footage of the property, structural layout, and whether it is a preventative or active colony infestation. Residential treatments in Kochi are highly competitive and cost-effective. We offer a 100% free on-site assessment with an upfront, transparent quote with zero hidden charges.'
    },
    {
      id: '05',
      num: '05',
      category: 'Termite Control',
      question: 'How do I know if I have a termite problem?',
      answer: 'Common signs of active termites in Kerala include: pencil-thin mud shelter tubes on walls or skirting boards, hollow or papery sounding woodwork when tapped, shed swarmer alate wings on windowsills, sticking door frames caused by moisture swelling, and fine wood dust pellets under furniture.'
    },
    {
      id: '06',
      num: '06',
      category: 'General',
      question: 'Do you offer free inspection in Kochi?',
      answer: 'Yes! Eco Pest India offers 100% free, zero-obligation on-site inspections across all Kochi and Ernakulam pin codes. Our licensed technicians visit with acoustic audio detectors and digital moisture meters to pinpoint hidden nesting pockets.'
    },
    {
      id: '07',
      num: '07',
      category: 'General',
      question: 'What types of pests do you handle?',
      answer: 'We specialize in: 1) Odorless German Cockroach herbal gel eradication (our #1 main service), 2) Subterranean and drywood termites, 3) Wood borer pressure injection, 4) Bed bugs heat and chemical barrier, 5) Rodent baiting & proofing, 6) Mosquito thermal fogging, and 7) Comprehensive commercial facility pest defense.'
    },
    {
      id: '08',
      num: '08',
      category: 'General',
      question: 'Do you provide both residential and commercial pest control services in Kochi?',
      answer: 'Yes. We cater to independent luxury villas, high-rise residential apartment communities, tech campuses across Infopark Kakkanad, 5-star hotels, restaurants, commercial shopping complexes, retail showrooms, hospitals, and heritage estates in Fort Kochi.'
    },
    {
      id: '09',
      num: '09',
      category: 'General',
      question: 'Are the chemicals you use safe and eco-friendly?',
      answer: 'Yes. All active solutions are non-repellent, low-toxicity, and fully licensed under Govt. CIB&RC standards. They do not release pungent fumes, cause eye irritation, or harm garden greenery. They bind tightly with soil and masonry to eliminate pests without environmental leaching.'
    },
    {
      id: '10',
      num: '10',
      category: 'General',
      question: 'How often should pest control be done for long-term protection?',
      answer: 'For kitchen cockroaches and crawling pests, a quarterly or bi-annual treatment maintains an impenetrable barrier. For subterranean termites, our certified chemical perimeter provides continuous 5 to 10-year protection, backed by complimentary annual routine audits by our service squad.'
    },
    {
      id: '11',
      num: '11',
      category: 'Cockroaches',
      question: 'How does your odorless cockroach treatment work in modular kitchens?',
      answer: 'Our technicians apply microscopic dots of advanced attractive herbal gel at hinges, under sinks, and behind electrical appliances. Cockroaches consume the gel, carry it back to hidden harbor nests, and trigger a domino cascade that completely wipes out the colony within 48 to 72 hours—without emptying utensils or spraying pungent fumes.'
    },
    {
      id: '12',
      num: '12',
      category: 'Bed Bugs',
      question: 'Can you completely eliminate bed bugs in a single visit?',
      answer: 'We execute a 2-stage intensive protocol: a targeted residual barrier treatment to eradicate all live bed bugs and nymphs, followed by a scheduled follow-up cycle to eliminate newly hatched eggs, restoring clean restful sleep with a complete eradication warranty.'
    },
    {
      id: '13',
      num: '13',
      category: 'Rodents',
      question: 'How do you prevent rats and rodents from entering false ceilings?',
      answer: 'We implement tamper-proof bait stations and non-toxic glue boards, combined with comprehensive exclusion proofing. We seal pipeline gaps, AC entry points, and drain vents to permanently block rodent travel into ceiling voids and kitchen lofts.'
    },
    {
      id: '14',
      num: '14',
      category: 'Mosquitoes',
      question: 'Do you offer anti-larval and fogging services for outdoor compounds?',
      answer: 'Yes. For villas, residential societies, and commercial estates in Kochi, we provide eco-safe biological anti-larval treatments in drains and stagnant water pits, paired with cold ULV misting and thermal fogging around compound greenery.'
    }
  ];

  // Filter questions based on search query and category
  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Termite Control' && item.category === 'Termite Control') ||
      (selectedCategory === 'Cockroaches' && item.category === 'Cockroaches') ||
      (selectedCategory === 'Bed Bugs' && item.category === 'Bed Bugs') ||
      (selectedCategory === 'Rodents' && item.category === 'Rodents') ||
      (selectedCategory === 'Mosquitoes' && item.category === 'Mosquitoes');

    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const popularQuestions = [
    { title: 'Termite treatment cost in Kochi', targetId: '04' },
    { title: 'How to prevent termites in home', targetId: '05' },
    { title: 'Best pest control for apartments', targetId: '08' },
    { title: 'Area coverage in Ernakulam', targetId: '01' },
    { title: 'Emergency pest control service', targetId: '06' }
  ];

  const handlePopularClick = (targetId) => {
    setSelectedCategory('All');
    setSearchQuery('');
    const targetIdx = faqList.findIndex(f => f.id === targetId);
    if (targetIdx !== -1) {
      setOpenIndex(targetIdx);
      const el = document.getElementById(`faq-item-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section 
      id="faq" 
      aria-label="Frequently Asked Questions - Eco Pest India Kochi"
      className="relative w-full overflow-hidden bg-cover bg-top bg-no-repeat py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: `url('/images/faq-houseboat-bg.jpg')` }}
    >
      {/* Light Clean Scrim matching user mockup media_1790731809953.jpg */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60 pointer-events-none" />

      {/* Decorative foliage blur on bottom left */}
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =================================================================== */}
        {/* HEADER SECTION (Matching media_1790731809953.jpg)                   */}
        {/* =================================================================== */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          {/* Eyebrow: Green bar + FREQUENTLY ASKED QUESTIONS */}
          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
            <span className="w-1 h-4 sm:h-5 rounded-full bg-[#15803d]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#15803d]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12]">
            <span className="block text-slate-900">Got Questions?</span>
            <span className="block text-[#16a34a] mt-0.5 sm:mt-1">We’ve Got Answers.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed mt-3 sm:mt-4 max-w-2xl">
            Find quick answers to the most common questions about pest control, termite treatment, safety, pricing and our services in Kochi &amp; Ernakulam.
          </p>
        </div>

        {/* =================================================================== */}
        {/* 3-COLUMN MAIN LAYOUT                                                */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* ----------------------------------------------------------------- */}
          {/* LEFT COLUMN: Featured Villa Card (3 Cols on Desktop)              */}
          {/* ----------------------------------------------------------------- */}
          <div className="lg:col-span-3 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-950/10 h-[380px] sm:h-[460px] lg:h-[580px] group flex flex-col justify-end">
              {/* Background Villa Image */}
              <img 
                src="/images/faq-villa-card.jpg" 
                alt="Pest-Free Homes in Kochi and Ernakulam" 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Gradient Scrim for readable white text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021f15]/95 via-[#021f15]/65 to-transparent" />

              {/* Card Content Overlay */}
              <div className="relative z-10 p-5 sm:p-6 text-left">
                {/* Shield Icon Badge */}
                <div className="w-11 h-11 rounded-2xl bg-emerald-700/80 border border-emerald-400/50 backdrop-blur-md flex items-center justify-center text-emerald-200 mb-3 shadow-md">
                  <ShieldCheck className="w-6 h-6 text-emerald-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-2">
                  Pest-Free Homes<br />in Kochi &amp; Ernakulam
                </h3>

                {/* Subtext */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                  Your safety and comfort matter to us. Get clear answers to all your pest control queries.
                </p>

                {/* Script Callout with Underline */}
                <div className="pt-2 border-t border-emerald-500/30">
                  <span className="font-serif italic text-base sm:text-lg text-emerald-200 font-semibold tracking-wide drop-shadow-sm block transform -rotate-1">
                    Healthy Homes<br />Happier Lives
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* CENTER COLUMN: Search + Filter Pills + Accordion (6 Cols on Desktop)*/}
          {/* ----------------------------------------------------------------- */}
          <div className="lg:col-span-6 w-full space-y-4">
            
            {/* Search Input Bar */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your question..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 focus:border-[#15803d] focus:ring-2 focus:ring-[#15803d]/20 outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills (Horizontal scroll on mobile) */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1.5 scrollbar-none text-xs">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-2xs ${
                      isActive 
                        ? 'bg-[#0f4c3a] text-white shadow-sm' 
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Accordion Questions List */}
            <div className="space-y-2.5 pt-1">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                  <p className="text-sm text-slate-500">No questions found matching your search.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="mt-3 text-xs font-bold text-[#15803d] hover:underline"
                  >
                    Reset Search &amp; Filters
                  </button>
                </div>
              ) : (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={faq.id}
                      id={`faq-item-${faq.id}`}
                      className="bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-emerald-200 transition-all overflow-hidden"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer group"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center space-x-3 text-left">
                          {/* Number Badge */}
                          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-[#15803d] font-mono font-black text-xs flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                            {faq.num}
                          </span>
                          
                          {/* Question Text */}
                          <span className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                            isOpen ? 'text-[#15803d]' : 'text-slate-900 group-hover:text-[#15803d]'
                          }`}>
                            {faq.question}
                          </span>
                        </div>

                        {/* Chevron Down Icon */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#15803d] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#15803d]' : ''
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Accordion Body */}
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 animate-in fade-in duration-200">
                          <p>{faq.answer}</p>
                          
                          {/* Quick inspection CTA inside accordion item */}
                          <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Need specific advice for your property?</span>
                            <button
                              onClick={() => onOpenInspectionModal && onOpenInspectionModal({ service: faq.question, location: 'Kochi' })}
                              className="font-bold text-[#15803d] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span>Book Free Inspection</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* ----------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Support Card & Quick Links (3 Cols on Desktop)      */}
          {/* ----------------------------------------------------------------- */}
          <div className="lg:col-span-3 w-full space-y-4">
            
            {/* Box 1: Still Have Questions? */}
            <div className="bg-[#eaf4ef] rounded-3xl p-5 sm:p-6 border border-emerald-950/10 text-left shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-[#0f4c3a] flex items-center justify-center mb-3">
                <Headphones className="w-5 h-5 text-[#0f4c3a]" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight mb-1.5">
                Still Have Questions?
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Our team is just a call or WhatsApp away. We’re happy to help you with any pest control concerns.
              </p>

              {/* Chat on WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('faq_sidebar', { location: 'Kochi', message: 'Hi Eco Pest India, I have questions regarding termite and pest control in Kochi.' })}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0f4c3a] hover:bg-[#0c3c2e] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer mb-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp →</span>
              </button>

              {/* Call Now Button */}
              <button
                onClick={() => handlePhoneClick('faq_sidebar')}
                className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-emerald-100/60 border border-[#0f4c3a]/40 text-[#0f4c3a] font-bold text-xs flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now →</span>
              </button>
            </div>

            {/* Box 2: Popular Questions */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] text-left">
              <div className="flex items-center space-x-1.5 mb-3 text-slate-900 font-bold text-xs sm:text-sm">
                <Zap className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Popular Questions</span>
              </div>

              <div className="space-y-2">
                {popularQuestions.map((pop, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePopularClick(pop.targetId)}
                    className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-[#15803d] text-xs font-medium flex items-center justify-between group transition cursor-pointer"
                  >
                    <span className="line-clamp-1">{pop.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#15803d] group-hover:translate-x-0.5 transition-transform shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Box 3: Serving Kochi & Ernakulam */}
            <div className="bg-[#eaf4ef] rounded-2xl p-4 border border-emerald-950/10 text-left flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Serving Kochi &amp; Ernakulam
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  All major areas and nearby locations covered.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* =================================================================== */}
        {/* BOTTOM TRUST BAR (4 PILLARS + SIGNATURE CALLOUT)                     */}
        {/* =================================================================== */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto text-left">
            
            {/* Pillar 1 */}
            <div className="flex items-start space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Experienced Team</p>
                <p className="text-[11px] text-slate-500">Trusted since years</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Safe &amp; Eco-Friendly</p>
                <p className="text-[11px] text-slate-500">For your family &amp; pets</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Residential &amp; Commercial</p>
                <p className="text-[11px] text-slate-500">Homes, offices, hotels &amp; more</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Kochi &amp; Ernakulam</p>
                <p className="text-[11px] text-slate-500">All local areas covered</p>
              </div>
            </div>

          </div>

          {/* Right Script Signature Callout */}
          <div className="shrink-0 text-center md:text-right">
            <span className="font-serif italic text-lg sm:text-xl font-bold text-[#15803d] tracking-wide transform -rotate-2 inline-block">
              Your Pest-Free Partner in Kochi
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
