import React, { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  LayoutGrid, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, SUPPORT_EMAIL, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';

export default function KochiBlogSection({ onOpenInspectionModal }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const articles = [
    {
      id: 'termite-warning-signs',
      tag: 'TERMITES',
      tagColor: 'bg-[#047857]',
      date: 'Apr 28, 2025',
      title: 'Termite Warning Signs',
      excerpt: 'How to spot hidden termite activity before serious damage begins.',
      image: '/images/hero-slide-4-termite-macro.jpg',
      readTime: '4 min read',
      fullContent: {
        intro: 'In Kerala’s tropical coastal climate, subterranean termites are silent destroyers. Because they eat wood from the inside out, extensive structural damage often occurs before homeowners notice visible signs.',
        keyPoints: [
          {
            title: '1. Mud Tubes Along Skirting Boards and Walls',
            desc: 'Subterranean termites require continuous moisture to survive. They build pencil-thin mud tubes (shelter tubes) along foundation walls, baseboards, and door frames to travel without exposure to dry air.'
          },
          {
            title: '2. Hollow or Papery-Sounding Woodwork',
            desc: 'Tap gently on door frames, kitchen cabinets, or wooden paneling. If the wood sounds hollow or the veneer crushes easily under slight thumb pressure, termites have consumed the core.'
          },
          {
            title: '3. Discarded Swarmer Wings Near Light Fixtures',
            desc: 'During seasonal weather shifts in Kochi (pre-monsoon), reproductive termites (alates) swarm to form new colonies. Finding shed silvery wings on windowsills or tiled floors confirms an active colony nearby.'
          },
          {
            title: '4. Tight-Fitting Doors and Stiff Windows',
            desc: 'As termites feed and burrow, their moisture and excrement cause wooden frames to warp and swell, making doors and window shutters difficult to open or close smoothly.'
          },
          {
            title: '5. Fine Wood-Colored Droppings (Frass)',
            desc: 'Drywood termites push tiny, sand-like pellets out of small kick-out holes. Discovering piles of powdery granules under furniture or ceilings is a clear indicator of localized infestation.'
          }
        ],
        diyWarning: 'Critical Warning: Never spray household aerosol sprays or kerosene on termite mud tubes. This merely scatters the worker termites into deeper wall cavities and adjoining rooms without killing the queen subterranean nest.',
        recommendation: 'Schedule a certified acoustic & thermal scan. Eco Pest India provides odorless non-repellent chemical barrier treatments with an official 10-Year Govt. Warranty Bond across all Kochi localities.'
      }
    },
    {
      id: 'how-to-protect-home',
      tag: 'HOME CARE',
      tagColor: 'bg-[#16a34a]',
      date: 'Apr 25, 2025',
      title: 'How to Protect Your Home from Termites',
      excerpt: 'Simple, effective steps to keep your home safe and termite-free.',
      image: '/images/blog-family-home.jpg',
      readTime: '5 min read',
      fullContent: {
        intro: 'Protecting your family residence or luxury villa in Kochi requires a proactive barrier approach. Combining smart home maintenance with professional non-repellent defense ensures zero termite infestation.',
        keyPoints: [
          {
            title: '1. Eliminate Soil-to-Wood Contact',
            desc: 'Ensure no wooden door frames, stair bases, or outdoor deck timber directly touch untreated soil or garden mulch. Keep at least a 6-inch concrete buffer zone around the home foundation.'
          },
          {
            title: '2. Fix Plumbing Leaks and AC Condensation Runoff',
            desc: 'Termites are attracted to moisture. Inspect water supply lines, concealed bathroom plumbing, and air conditioning condensation drain lines to ensure zero water seeps into masonry walls.'
          },
          {
            title: '3. Store Firewood and Cellulose Away from Walls',
            desc: 'Never stack cardboard boxes, spare wooden planks, or firewood against exterior residential walls. Elevated metal racks keep cellulose materials dry and inspectable.'
          },
          {
            title: '4. Keep Foundation Weep Holes Clear',
            desc: 'Ensure ventilation vents and exterior perimeter weep holes remain unobstructed by garden soil, overgrown foliage, or decorative pavers.'
          },
          {
            title: '5. Annual Preventative Inspection',
            desc: 'Even if your home appears spotless, termite colonies operate underground. An annual moisture meter and acoustic checkup catches micro-infestations before visible damage occurs.'
          }
        ],
        diyWarning: 'Eco Pest India uses 100% odorless, eco-friendly green chemistry certified by the Central Insecticides Board (CIB&RC). Safe for infants, elderly residents, and pets.',
        recommendation: 'Get our comprehensive property barrier assessment. Call our 24/7 Kochi hotline at +91 90200 40009 for same-day inspection.'
      }
    },
    {
      id: 'pre-construction-protection',
      tag: 'CONSTRUCTION',
      tagColor: 'bg-[#15803d]',
      date: 'Apr 20, 2025',
      title: 'Why Pre-Construction Protection Matters',
      excerpt: 'Understand why termite protection before construction is different from treating it later.',
      image: '/images/blog-pre-construction.jpg',
      readTime: '6 min read',
      fullContent: {
        intro: 'Pre-construction anti-termite soil treatment is the single most durable, cost-effective defense a building can ever receive. Once a concrete foundation slab is cast, reaching subterranean soil becomes significantly more challenging and expensive.',
        keyPoints: [
          {
            title: '1. Seamless Chemical Barrier Under Slabs',
            desc: 'During construction, certified termiticides are saturated evenly across the plinth excavation, masonry trenches, and sub-slab gravel before flooring. This forms an unbroken underground barrier termites cannot cross.'
          },
          {
            title: '2. Over 70% Cost Savings Compared to Post-Construction',
            desc: 'Treating virgin soil during site grading requires no core drilling, no tile alteration, and zero disruption to interior woodwork, costing a fraction of post-infestation structural repair.'
          },
          {
            title: '3. Mandatory Bureau of Indian Standards (IS:6313) Compliance',
            desc: 'Eco Pest India follows strict IS:6313 Part 2 standards with calibrated pressure pumping. This is essential for structural engineering compliance and municipal building certifications across Kerala.'
          },
          {
            title: '4. Protection for Electrical Conduits and PVC Piping',
            desc: 'Subterranean termites frequently chew through PVC pipe wrappings and electrical cable insulation to navigate concrete cracks. Pre-treatment seals all service utility entry points.'
          },
          {
            title: '5. Official 10-Year Transferable Warranty Bond',
            desc: 'Builders, architects, and private home-owners receive an official stamped 10-year warranty certificate that enhances property resale value and guarantees complete peace of mind.'
          }
        ],
        diyWarning: 'Timing is critical: Pre-construction stages must align with your site civil engineer—excavation trench stage, plinth backfill stage, and prior to concrete slab pouring.',
        recommendation: 'Eco Pest India partners with leading architects, civil contractors, and home builders throughout Kochi and Ernakulam district. Contact our specialized construction engineering desk.'
      }
    }
  ];

  // Additional Insights shown when user clicks "Explore All Insights"
  const additionalArticles = [
    {
      id: 'cockroach-defense-kitchen',
      tag: 'COCKROACH #1',
      tagColor: 'bg-amber-600',
      date: 'Apr 15, 2025',
      title: 'Odorless Cockroach Defense for Kerala Kitchens',
      excerpt: 'How German cockroaches colonize modular kitchen hinges and how herbal gel eradicates the nest without fumes.',
      image: '/images/pest3.jpg',
      readTime: '3 min read',
      fullContent: {
        intro: 'German cockroaches thrive inside modular kitchen hinge pockets, under sink plumbing, and behind microwave circuits. Traditional chemical sprays contaminate kitchen utensils and food surfaces.',
        keyPoints: [
          {
            title: '1. Why Spraying Does Not Work',
            desc: 'Aerosol sprays cause cockroaches to scatter and lay egg capsules (oothecae) in deeper crevices, worsening infestation within weeks.'
          },
          {
            title: '2. The Domino Gel Attraction Method',
            desc: 'Eco Pest India uses odorless herbal attraction gel placed at precise micro-points. Worker roaches feed on the gel, return to the harbor nest, and spread the lethal active ingredient to eradicate the entire colony.'
          },
          {
            title: '3. Zero Kitchen Vacating Required',
            desc: 'Our kitchen treatments are 100% odorless. You do not need to empty kitchen jars, remove utensils, or leave the home during or after treatment.'
          }
        ],
        diyWarning: 'Kitchen hygiene tip: Keep sink drains covered at night and ensure dry countertops before retiring.',
        recommendation: 'Get our #1 specialized Cockroach Control treatment with free follow-up warranty in Kochi.'
      }
    },
    {
      id: 'wood-borer-vs-termite',
      tag: 'IDENTIFICATION',
      tagColor: 'bg-emerald-800',
      date: 'Apr 10, 2025',
      title: 'Wood Borer vs Termite: Spotting the Difference',
      excerpt: 'Learn the distinct signs of powder post beetle larvae versus subterranean termite attacks on valuable teak and rosewood furniture.',
      image: '/images/pest4.jpg',
      readTime: '4 min read',
      fullContent: {
        intro: 'Both wood borers and termites consume wooden structures, but their biological patterns and treatment methods are completely different.',
        keyPoints: [
          {
            title: '1. Visual Clue: Powder (Frass) vs Mud Tubes',
            desc: 'Wood borer larvae produce superfine yellowish flour-like powder falling from pinhead-sized circular exit holes. Termites, in contrast, build enclosed earthy mud tunnels.'
          },
          {
            title: '2. Targeted Syringe Pressure Injection',
            desc: 'Wood borers require specialized chemical formulation injected directly into each individual pinhole with high-pressure syringes to reach the deep larvae tunnels.'
          }
        ],
        diyWarning: 'Surface painting or varnishing will not kill borer larvae already living deep inside seasoned timber.',
        recommendation: 'Eco Pest India wood preservation specialists inspect furniture, heritage doors, and timber ceiling rafters.'
      }
    }
  ];

  const displayedArticles = showAllArticles ? [...articles, ...additionalArticles] : articles;

  return (
    <section 
      id="blog" 
      aria-label="Insights for a Pest-Free Space - Eco Pest India Kochi"
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: `url('/images/blog-section-bg.jpg')` }}
    >
      {/* Light Clean Scrim matching user mockup media_1790730574197.jpg */}
      {/* White to soft cream gradient overlay ensuring crystal-clear text readability & luxury tone */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70 pointer-events-none" />

      {/* Decorative organic leaf blur at bottom left (subtle CSS backdrop matching mockup) */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =================================================================== */}
        {/* HEADER SECTION (Exact layout matching media_1790730574197.jpg)     */}
        {/* =================================================================== */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          
          {/* Eyebrow: Green vertical pill + INSIGHTS FOR A PEST-FREE SPACE */}
          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
            <span className="w-1 h-4 sm:h-5 rounded-full bg-[#15803d]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#15803d]">
              INSIGHTS FOR A PEST-FREE SPACE
            </span>
          </div>

          {/* Headline: Know the Problem. Protect Your Space. */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12]">
            <span className="block text-slate-900">Know the Problem.</span>
            <span className="block text-[#16a34a] mt-0.5 sm:mt-1">Protect Your Space.</span>
          </h2>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed mt-3 sm:mt-4 max-w-2xl">
            Practical tips, termite insights and expert guidance to help you understand pest problems before they become bigger ones.
          </p>
        </div>

        {/* =================================================================== */}
        {/* 3 FEATURED ARTICLE CARDS (Exact design matching mockup)             */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {displayedArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-slate-100 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Tag & Date Row */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`${article.tagColor} text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md`}>
                      {article.tag}
                    </span>
                    <div className="flex items-center text-slate-400 text-xs font-medium space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#15803d] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Footer: Read Article -> + Circle Arrow */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs sm:text-sm font-bold text-[#15803d] group-hover:text-emerald-800 flex items-center gap-1 transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 group-hover:border-[#15803d] group-hover:text-[#15803d] group-hover:bg-emerald-50 flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =================================================================== */}
        {/* BOTTOM ACTION: Explore All Insights Button                          */}
        {/* =================================================================== */}
        <div className="mt-10 sm:mt-12 text-center flex flex-col items-center justify-center">
          <button
            onClick={() => setShowAllArticles(!showAllArticles)}
            className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-emerald-50 border border-emerald-600/40 hover:border-emerald-600 text-emerald-900 font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 cursor-pointer active:scale-95 group"
          >
            <LayoutGrid className="w-4 h-4 text-[#15803d] group-hover:scale-110 transition-transform" />
            <span>{showAllArticles ? 'Show Top 3 Insights' : 'Explore All Insights'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#15803d] group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-xs text-slate-500 font-medium mt-3">
            Have urgent pest or termite questions in Kochi? Call our 24/7 Hotline:{' '}
            <a 
              href="tel:9020040009" 
              onClick={(e) => { e.preventDefault(); handlePhoneClick('blog_footer'); }}
              className="text-[#15803d] font-bold hover:underline"
            >
              {PRIMARY_PHONE_DISPLAY}
            </a>
          </p>
        </div>

      </div>

      {/* =================================================================== */}
      {/* FULL ARTICLE MODAL (Informative, Clean & High-Converting)           */}
      {/* =================================================================== */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tag & Title in Header */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className={`${selectedArticle.tagColor} text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md`}>
                    {selectedArticle.tag}
                  </span>
                  <span className="text-slate-300 text-xs font-mono">
                    {selectedArticle.readTime}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed flex-grow">
              
              <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                {selectedArticle.fullContent.intro}
              </p>

              {/* Key Points */}
              <div className="space-y-3.5 pt-2">
                {selectedArticle.fullContent.keyPoints.map((point, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {point.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Alert / Warning Box */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start space-x-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-semibold">
                  {selectedArticle.fullContent.diyWarning}
                </p>
              </div>

              {/* Recommendation Box */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium">
                  {selectedArticle.fullContent.recommendation}
                </p>
              </div>

            </div>

            {/* Modal Fixed Footer CTA */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-left w-full sm:w-auto">
                <p className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">Official Hotline</p>
                <a 
                  href="tel:9020040009"
                  onClick={(e) => { e.preventDefault(); handlePhoneClick('blog_modal'); }}
                  className="text-sm font-black text-emerald-800 hover:text-emerald-700 flex items-center gap-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{PRIMARY_PHONE_DISPLAY}</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    if (onOpenInspectionModal) {
                      onOpenInspectionModal({ service: selectedArticle.title, location: 'Kochi' });
                    }
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs shadow-md transition cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Free Inspection</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
