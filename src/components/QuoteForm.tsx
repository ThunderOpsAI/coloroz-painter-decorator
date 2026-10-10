'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, ShieldCheck, MapPin, Paintbrush, Home, Calendar } from 'lucide-react';
import { HERITAGE_ERAS, HERITAGE_PALETTES, PREP_LEVELS } from './HeritageQuoteFunnel';

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const phoneNumber = '0429 691 397';
  const cleanPhone = '0429691397';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyEra: 'Victorian Era (1860 - 1901)',
    projectScope: 'Exterior Weatherboards & Timber Trims',
    timberCondition: 'Weathered & Flaking Timber (Oil Undercoat & Scrape)',
    colourScheme: 'Authentic Period Palette (Brunswick Green & Indian Red)',
    siteAddress: '',
    estimatedPrice: 7500,
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Prefill from search parameters if user arrived from HeritageQuoteFunnel
  useEffect(() => {
    if (!searchParams) return;
    const era = searchParams.get('era');
    const palette = searchParams.get('palette');
    const prep = searchParams.get('prep');
    const estimate = searchParams.get('estimate');
    const interior = searchParams.get('interior');

    setFormData((prev) => ({
      ...prev,
      propertyEra: era || prev.propertyEra,
      colourScheme: palette || prev.colourScheme,
      timberCondition: prep || prev.timberCondition,
      estimatedPrice: estimate ? Number(estimate) : prev.estimatedPrice,
      projectScope: interior === 'true'
        ? 'Full Period Restoration (Exterior Weatherboards + Interior High Ceilings & Cornices)'
        : prev.projectScope,
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please enter your First Name, Email, and Phone number.');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          propertyEra: formData.propertyEra,
          projectScope: formData.projectScope,
          timberCondition: formData.timberCondition,
          colourScheme: formData.colourScheme,
          siteAddress: formData.siteAddress,
          estimatedPrice: formData.estimatedPrice,
          message: formData.message,
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to submit quote request. Please try again.');
      }

      setStatus('success');
    } catch (err: any) {
      console.error('Quote submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please call 0429 691 397 directly.');
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-surface-50 text-surface-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-900 text-xs font-black uppercase tracking-wider mb-3">
            <Paintbrush className="w-3.5 h-3.5 text-red-700" />
            Complimentary On-Site Heritage Assessment
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-surface-900 tracking-tight">
            Heritage Restoration Quote Request
          </h1>
          <p className="mt-4 text-base text-surface-600 font-normal">
            Every period home in North East Victoria is unique. Fill out your property details below for an obligation-free timber inspection, scaffolding plan, and fixed-price quotation. Call <strong className="text-surface-900">{phoneNumber}</strong> for prompt advice.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-surface-900">
              Heritage Quote Request Received!
            </h2>
            <p className="text-surface-600 max-w-lg mx-auto">
              Thank you, <strong>{formData.firstName}</strong>. Our master painter will review your period home details and contact you within 24 hours to schedule an on-site timber and paint assessment.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl text-sm transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Master Painter: {phoneNumber}</span>
              </a>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-6 py-3.5 bg-surface-100 hover:bg-surface-200 text-surface-800 font-bold rounded-xl text-sm transition-all"
              >
                Submit Another Project
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-surface-200 shadow-xl space-y-8">
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Step 1: Architectural Era & Scope */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-4 flex items-center gap-2">
                <Home className="w-4 h-4" /> Step 1: Property Era &amp; Project Scope
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Architectural Era</label>
                  <select
                    name="propertyEra"
                    value={formData.propertyEra}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  >
                    {HERITAGE_ERAS.map((era) => (
                      <option key={era.id} value={era.name}>{era.name}</option>
                    ))}
                    <option value="Post-War / Mid-Century Home">Post-War / Mid-Century Home</option>
                    <option value="Modern Architectural Home">Modern Architectural Home</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Project Scope</label>
                  <select
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  >
                    <option value="Exterior Weatherboards & Timber Trims">Exterior Weatherboards &amp; Timber Trims</option>
                    <option value="Turned Verandah Posts, Lace & Fretwork">Turned Verandah Posts, Lace &amp; Fretwork</option>
                    <option value="Interior High Ceilings & Ornate Cornices">Interior High Ceilings &amp; Ornate Cornices</option>
                    <option value="Full Period Restoration (Interior & Exterior)">Full Period Restoration (Interior &amp; Exterior)</option>
                    <option value="Corrugated Iron Homestead Roof Repainting">Corrugated Iron Homestead Roof Repainting</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Timber Prep & Palette */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-4 flex items-center gap-2">
                <Paintbrush className="w-4 h-4" /> Step 2: Surface Prep &amp; Colour Palette
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Current Timber Condition</label>
                  <select
                    name="timberCondition"
                    value={formData.timberCondition}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  >
                    <option value="Sound Surfaces (Minor prep & 2 coats)">Sound Surfaces (Minor prep &amp; 2 coats)</option>
                    <option value="Weathered & Flaking Timber (Oil Undercoat & Scrape)">Weathered &amp; Flaking Timber (Oil Undercoat &amp; Scrape)</option>
                    <option value="Historic Lead Paint Abatement Required (AS 4361.2)">Historic Lead Paint Abatement Required (AS 4361.2)</option>
                    <option value="Unsure (Requires On-Site Paint Testing)">Unsure (Requires On-Site Paint Testing)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Colour Palette Preference</label>
                  <select
                    name="colourScheme"
                    value={formData.colourScheme}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  >
                    {HERITAGE_PALETTES.map((pal) => (
                      <option key={pal.id} value={pal.name}>{pal.name}</option>
                    ))}
                    <option value="Need Professional Heritage Colour Consultation">Need Professional Heritage Colour Consultation</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Location */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Step 3: Property Address &amp; Suburb
              </h2>
              <div>
                <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Site Address / Town</label>
                <input
                  type="text"
                  name="siteAddress"
                  value={formData.siteAddress}
                  onChange={handleChange}
                  placeholder="e.g. Ford St, Beechworth VIC 3747 / Wangaratta VIC"
                  className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-red-700 mb-4">
                Step 4: Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="04xx xxx xxx"
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-bold text-surface-700 uppercase mb-1">Specific Architectural Details or Damage</label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about weatherboard condition, rotten sections, ceiling heights, or preferred start dates..."
                  className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-surface-100">
              <div className="flex items-center gap-2 text-xs text-surface-500">
                <ShieldCheck className="w-4 h-4 text-red-700" />
                <span>Zero Obligation • Certified Master Painter On-Site Inspection</span>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black rounded-xl text-base shadow-lg shadow-red-900/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Request Free Heritage Quote</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}

export function QuoteForm() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading quote funnel...</div>}>
      <QuoteFormContent />
    </Suspense>
  );
}
