'use client';

import { Mail, MapPin, Phone, ShieldCheck, Clock, Paintbrush } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const phoneNumber = '0429 691 397';
  const cleanPhone = '0429691397';
  const email = 'info@coloroz.com.au';

  const handlePhoneClick = () => {
    try {
      fetch('/api/leads/call-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'footer_call_link',
          referrer: typeof document !== 'undefined' ? document.referrer : '',
        }),
      }).catch((err) => console.error('Call click tracking error:', err));
    } catch {
      // Best-effort tracking
    }
  };

  const serviceAreas = [
    'Wangaratta',
    'Beechworth',
    'Chiltern Historic Precinct',
    'Milawa & Oxley',
    'Eldorado',
    'Rutherglen Wine Region',
    'Yackandandah',
    'Glenrowan',
    'Myrtleford',
    'North East Victoria',
  ];

  return (
    <footer className="bg-surface-950 text-surface-300 border-t border-surface-800 pt-16 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-700 text-white flex items-center justify-center font-black">
                  <Paintbrush className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-black text-white block leading-none">
                    Color<span className="text-red-500">Oz</span>
                  </span>
                  <span className="text-[10px] text-surface-400 uppercase tracking-widest font-semibold block mt-0.5">
                    Painter &amp; Decorator
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-xs text-surface-400 leading-relaxed font-normal">
              Specialist painting and decorating contractor dedicated to the restoration and preservation of historic Victorian, Edwardian, and Federation timber architecture across North East Victoria.
            </p>
            <div className="flex items-center gap-2 text-xs text-red-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Dulux Accredited • AS 4361.2 Lead-Safe Certified</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">
              Restoration Services
            </h4>
            <ul className="space-y-2.5 text-xs text-surface-400">
              <li>
                <Link href="/#services" className="hover:text-red-400 transition-colors">
                  Timber Weatherboard Preservation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-400 transition-colors">
                  Authentic Heritage Colour Schemes
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-400 transition-colors">
                  Ornate Plaster Cornices &amp; Ceilings
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-400 transition-colors">
                  Lead-Safe Paint Abatement (AS 4361.2)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-400 transition-colors">
                  Cast Iron Lace &amp; Verandah Fretwork
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-red-400 transition-colors">
                  Double-Hung Sash Window Easing
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Service Areas */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">
              Regional Areas
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-surface-400">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-surface-500 mt-3">
              Serving Wangaratta, Beechworth, Chiltern, and all rural historic properties across North East Victoria.
            </p>
          </div>

          {/* Direct Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">
              Contact &amp; Hours
            </h4>
            <a
              href={`tel:${cleanPhone}`}
              onClick={handlePhoneClick}
              className="flex items-center gap-2.5 text-sm font-bold text-white hover:text-red-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>{phoneNumber}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2.5 text-xs text-surface-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-red-500" />
              <span>{email}</span>
            </a>
            <div className="flex items-start gap-2.5 text-xs text-surface-400 pt-2">
              <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p>Monday - Friday: 7:00 AM – 5:00 PM</p>
                <p>Saturday: 8:00 AM – 1:00 PM</p>
                <p className="text-surface-500">Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-500">
          <div>
            &copy; {new Date().getFullYear()} ColorOz Painter &amp; Decorator. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-surface-400">
            <Link href="/quote" className="hover:text-red-400 transition-colors">
              Heritage Quote
            </Link>
            <span>•</span>
            <Link href="/gallery" className="hover:text-red-400 transition-colors">
              Restored Homes
            </Link>
            <span>•</span>
            <Link href="/reviews" className="hover:text-red-400 transition-colors">
              Reviews
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
