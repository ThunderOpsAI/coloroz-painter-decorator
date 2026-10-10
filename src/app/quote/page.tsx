import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { QuoteForm } from '@/components/QuoteForm';
import { HeritageQuoteFunnel } from '@/components/HeritageQuoteFunnel';
import { Footer } from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { ScrollingBackground } from '@/components/ScrollingBackground';

export const metadata: Metadata = {
  title: 'Request a Free Heritage Restoration Quote | ColorOz Painter & Decorator',
  description: 'Request an on-site measure and timber audit for period homes in Wangaratta, Beechworth, Chiltern, and North East Victoria.',
  openGraph: {
    title: 'Free Heritage Restoration Quote | ColorOz Painter & Decorator',
    description: 'Period home restoration estimates and colour consultations across Wangaratta, Beechworth, Chiltern & Milawa.',
    type: 'website',
  },
};

export default function QuotePage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-red-200 text-surface-900 transition-colors duration-500 overflow-x-hidden">
      <ScrollingBackground />
      <Header />
      <main className="relative z-10 pt-4">
        <QuoteForm />
        <div className="border-t border-surface-200">
          <HeritageQuoteFunnel />
        </div>
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
