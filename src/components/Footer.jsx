import React from 'react';
import { Shield, Phone, MessageCircle, MapPin, Heart, Database, ArrowUp } from 'lucide-react';
import { PRIMARY_PHONE_DISPLAY, handlePhoneClick, handleWhatsAppClick } from '../utils/analytics';
import { DISTRICTS } from '../data/districts';

export default function Footer({ currentPath = '/', onNavigate, onOpenCrmModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine local office address based on current page
  let officeAddress = "Offices: Kozhikode (Pavamani Rd) • Thrissur (Kuttoor) • Palakkad (Chandra Nagar) • Pathanamthitta (Mezhuveli) • Alappuzha District Hub";
  if (currentPath.includes('alappuzha') || currentPath.includes('alleppey') || currentPath.includes('cherthala') || currentPath.includes('chengannur') || currentPath.includes('kayamkulam') || currentPath.includes('mavelikara') || currentPath.includes('harippad')) {
    officeAddress = "Alappuzha District Office: Eco Pest India, Alappuzha Central Dispatch (Serving All 6 Municipalities & 72 Panchayats), Kerala - 688001";
  } else if (currentPath.includes('pathanamthitta') || currentPath.includes('pathanam-thitta')) {
    officeAddress = "Pathanamthitta Office: Eco Pest India, Mezhuveli P.O., Pathanamthitta District, Kerala - 689507";
  } else if (currentPath.includes('thrissur') || currentPath.includes('trissur')) {
    officeAddress = "Thrissur Office: Veluthath Building, Pamboor, Kuttoor P.O., Thrissur, Kerala - 680013";
  } else if (currentPath.includes('palakkad')) {
    officeAddress = "Palakkad Office: 13 A, 1st Floor, Safa Building, Pirivusala, Chandra Nagar, Palakkad - 678007";
  } else if (currentPath.includes('kozhikode')) {
    officeAddress = "Kozhikode Office: Pavamani Road, Near Malabar Gold & Diamonds, Kozhikode, Kerala - 673004";
  }

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand, Parent Company, Intro, Contact CTA */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-white font-display">
                Termite<span className="text-emerald-500">Control</span><span className="text-amber-500 font-bold">.me</span>
              </span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              A Unit of Eco Pest India
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Professional Termite Control & Wood Borer Treatment Across Kerala. Protecting homes, luxury villas, apartments, and commercial complexes with odorless, guaranteed chemistry.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2 text-slate-200">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-bold">Call / WhatsApp:</span>
                <button 
                  onClick={() => handlePhoneClick('footer')}
                  className="text-emerald-400 hover:text-emerald-300 font-bold text-sm underline"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </button>
              </div>

              <div className="flex items-start space-x-2 text-slate-300 text-[11px]">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{officeAddress}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => handlePhoneClick('footer_btn')}
                className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg transition"
              >
                Call {PRIMARY_PHONE_DISPLAY}
              </button>
              <button
                onClick={() => handleWhatsAppClick('footer_btn')}
                className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg transition flex items-center space-x-1"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-emerald-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-emerald-400 transition">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#wood-borer')} className="hover:text-emerald-400 transition">
                  Wood Borer Treatment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#signs')} className="hover:text-emerald-400 transition">
                  Signs of Termites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#how-it-works')} className="hover:text-emerald-400 transition">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#locations')} className="hover:text-emerald-400 transition">
                  Kerala Locations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#faq')} className="hover:text-emerald-400 transition">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#contact')} className="hover:text-emerald-400 transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Services
            </p>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-emerald-400 transition text-left">
                  Termite Control
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-emerald-400 transition text-left">
                  Anti-Termite Treatment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#wood-borer')} className="hover:text-emerald-400 transition text-left">
                  Wood Borer Treatment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-emerald-400 transition text-left">
                  Pre-Construction (IS:6313)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-emerald-400 transition text-left">
                  Post-Construction Drill-Seal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-emerald-400 transition text-left">
                  Residential Termite Control
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-emerald-400 transition text-left">
                  Commercial Termite Control
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Locations (All 14 Districts) */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-white uppercase tracking-wider font-display flex items-center justify-between">
              <span>Districts</span>
              <span className="text-[10px] text-emerald-400 font-normal">All 14 Covered</span>
            </p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {DISTRICTS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => onNavigate(`/${d.slug}`)}
                  className="text-slate-400 hover:text-emerald-400 transition text-left text-[11px]"
                >
                  {d.name}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 pt-2">
              Serving Kozhikode, Kochi, Thiruvananthapuram, Thrissur, Kannur, Kollam, Kottayam, Palakkad, Malappuram, Alappuzha, Pathanamthitta, Idukki, Wayanad, Kasaragod & all Kerala municipalities.
            </p>
          </div>

        </div>

        {/* Bottom Legal & CRM Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-bold text-slate-300">TermiteControl.me</span>
            <span>— A Unit of Eco Pest India. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onOpenCrmModal}
              className="text-slate-400 hover:text-emerald-400 transition flex items-center space-x-1 underline"
            >
              <Database className="w-3 h-3" />
              <span>CRM Database</span>
            </button>
            <span>•</span>
            <button onClick={scrollToTop} className="hover:text-white transition flex items-center space-x-1">
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
