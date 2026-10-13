import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Heart,
} from 'lucide-react';
import VeeduXLogo from './VeeduXLogo';
import { useApp } from '../context/AppContext';
import { KERALA_DISTRICTS } from '../data/locations';

export default function Footer() {
  const { navigateTo, setSearchFilters } = useApp();

  const handleLocationClick = (districtName) => {
    setSearchFilters((prev) => ({ ...prev, district: districtName }));
    navigateTo('search');
  };

  const handleTypeClick = (typeId) => {
    setSearchFilters((prev) => ({ ...prev, propertyType: typeId }));
    navigateTo('search');
  };

  return (
    <footer className="bg-[#0C3423] text-white pt-14 pb-24 md:pb-12 border-t border-[#27865B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <VeeduXLogo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              VeeduX is Kerala's dedicated property marketplace built for buyers, NRI investors, families, and direct owners. Search residential plots in Cents, luxury waterfront villas, flats, and commercial properties with 100% verified titles.
            </p>

            <div className="space-y-2 text-xs text-emerald-100/90 pt-1">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#D6AD55] flex-shrink-0" />
                <span>VeeduX Tower, Infopark Expressway, Kakkanad, Kochi, Kerala 682030</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-[#D6AD55] flex-shrink-0" />
                <span>Direct Helpline: +91 98471 22345 / +91 94470 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-[#D6AD55] flex-shrink-0" />
                <span>General Enquiries: support@veedux.com</span>
              </div>
            </div>
          </div>

          {/* Quick Property Types */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6AD55]">
              Property Types
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <button
                  onClick={() => handleTypeClick('land-plots')}
                  className="hover:text-white transition-colors text-left"
                >
                  Land & Plots (സ്ഥലം & പ്ലോട്ടുകൾ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTypeClick('villas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Luxury Villas (വില്ലകൾ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTypeClick('houses')}
                  className="hover:text-white transition-colors text-left"
                >
                  Independent Houses (വീടുകൾ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTypeClick('apartments')}
                  className="hover:text-white transition-colors text-left"
                >
                  Apartments & Flats (ഫ്ലാറ്റുകൾ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTypeClick('commercial')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial Buildings (വാണിജ്യ കെട്ടിടങ്ങൾ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTypeClick('shops')}
                  className="hover:text-white transition-colors text-left"
                >
                  Shops & Retail Spaces (കടകൾ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTypeClick('rentals')}
                  className="hover:text-white transition-colors text-left"
                >
                  Rental Homes & PGs (വാടക വീടുകൾ)
                </button>
              </li>
            </ul>
          </div>

          {/* Kerala Districts & Hotspots */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6AD55]">
              Popular Locations
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              {['Ernakulam', 'Thiruvananthapuram', 'Thrissur', 'Kozhikode', 'Kottayam', 'Alappuzha', 'Kannur', 'Wayanad'].map(
                (dist) => (
                  <li key={dist}>
                    <button
                      onClick={() => handleLocationClick(dist)}
                      className="hover:text-white transition-colors text-left"
                    >
                      Properties in {dist}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Trust & Legal Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6AD55]">
              Kerala Land Trust
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#D6AD55]" />
                <span>RERA Kerala Verified</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#D6AD55]" />
                <span>Survey Map & Thandapper</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#D6AD55]" />
                <span>Zero Hidden Brokerage</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#D6AD55]" />
                <span>NRI Assisted Escrow</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('post')}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D6AD55] to-[#ECC876] text-[#0C3423] font-bold text-xs hover:opacity-95 transition-opacity"
              >
                Post Your Property Free
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-[#27865B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60 text-center sm:text-left">
          <p>© 2026 VeeduX Technologies India Pvt Ltd. All rights reserved.</p>
          <p className="text-[11px]">
            Designed with Kerala pride. Every Property. One Place.
          </p>
        </div>
      </div>
    </footer>
  );
}
