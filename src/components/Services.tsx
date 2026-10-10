'use client';

import { Paintbrush, Home, ShieldCheck, Check, Palette, Sparkles, Building2, Sun } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    name: 'Timber Weatherboard & Exterior Restoration',
    category: 'Period Facade Preservation',
    description: 'Complete restorative preparation of historic Victorian and Federation weatherboard facades. Hand scraping, timber rot stabilising resins, slow-drying oil undercoats, and 3-coat high-build flexible acrylic finishes.',
    icon: Home,
    tag: '10-Year Weather Protection',
    specs: [
      'Linbide hand shaving of aged failing paint',
      'Timber rot excavation & epoxy wood consolidant',
      'Penetrating raw wood oil undercoats',
      'Flexible acrylic elastomeric gap sealants'
    ]
  },
  {
    name: 'Authentic Heritage Colour Schemes',
    category: 'Historical Colour Consultation',
    description: 'Expert matching and specification of authentic National Trust period colour palettes. We recreate genuine Victorian tri-colour accents (Brunswick Green, Indian Red, Hawthorn Cream) to showcase architectural fretwork.',
    icon: Palette,
    tag: 'National Trust Guidelines',
    specs: [
      'Historical era architectural colour audit',
      'Large-scale on-site timber colour swatches',
      'Accurate placement on fascias, soffits & gables',
      'Dulux & Porters Heritage certified palettes'
    ]
  },
  {
    name: 'Ornate Plaster Cornices & Ceiling Roses',
    category: 'Artisan Interior Plastering',
    description: 'Specialist restoration of 12-foot lathe and plaster ceilings, hand-cast ornamental cornices, picture rails, and ornate plaster ceiling roses. Bridging historic hairline cracking without obliterating fine cast details.',
    icon: Sparkles,
    tag: 'Artisan Detail Preservation',
    specs: [
      'Flexible micro-crack bridging compounds',
      'Delicate hand-brushing around plaster petals',
      'Ultra-flat heritage light-absorbing ceiling paints',
      'Optional traditional gold-leaf embellishments'
    ]
  },
  {
    name: 'Lead-Safe Environmental Paint Abatement',
    category: 'Certified Health & Soil Protection',
    description: 'Compliant with AS 4361.2 for the safe removal of pre-1970 lead-based paint coatings. We utilise infrared thermal stripping and negative-pressure HEPA filtration, ensuring zero toxic lead dust contamination.',
    icon: ShieldCheck,
    tag: 'AS 4361.2 Certified',
    specs: [
      'Chemical lead swab testing prior to works',
      'Infrared heat plates operating below toxic vaporisation',
      'Full drop sheet grounds containment',
      'HEPA H14 vacuum sanders and clean disposal'
    ]
  },
  {
    name: 'Cast Iron Lace & Verandah Fretwork',
    category: 'Period Metal & Timber Detailing',
    description: 'Restoration of delicate cast iron verandah lace, balustrades, turned timber posts, and timber bargeboards. Rust passivating primers and high-solids satin exterior enamels designed to resist harsh rural weather.',
    icon: Building2,
    tag: 'Rust & Sun Protection',
    specs: [
      'Wire brushing & rust conversion primers',
      'Zinc phosphate anti-corrosion barrier coats',
      'Turned timber post rot repair & sealing',
      'High-gloss or satin architectural metal enamels'
    ]
  },
  {
    name: 'Double-Hung Sash Windows & Woodwork',
    category: 'Fine Architectural Joinery',
    description: 'Restoration of sticky, painted-shut timber sash windows, French doors, and original Victorian architraves. Easing sash movement, reglazing putty repairs, and durable satin enamel finishes on all interior woodwork.',
    icon: Paintbrush,
    tag: 'Smooth Sash Operation',
    specs: [
      'Careful sash easing & balance check',
      'Old brittle linseed putty replacement',
      'Fine hand-sanded satin enamel application',
      'Razor-sharp cut-in lines along glass panes'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-surface-50 text-surface-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-900 text-xs font-black uppercase tracking-wider mb-3">
            <Paintbrush className="w-3.5 h-3.5 text-red-700" />
            Specialist Architectural Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-surface-900 tracking-tight">
            Master Painting &amp; Period Decorating
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-600 font-normal">
            Preserving North East Victoria’s architectural legacy. We blend traditional hand-brushing techniques with advanced flexible coating systems to protect timber weatherboards and ornate interior plaster for decades to come.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-surface-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-100 text-surface-700">
                      {service.tag}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-red-700 uppercase tracking-widest block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-black text-surface-900 mb-3 group-hover:text-red-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-surface-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-surface-100 mb-6">
                    {service.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-surface-700 font-medium">
                        <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#estimator"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-center bg-surface-100 hover:bg-red-700 hover:text-white text-surface-800 transition-colors block"
                >
                  Configure Estimate in Heritage Funnel
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
