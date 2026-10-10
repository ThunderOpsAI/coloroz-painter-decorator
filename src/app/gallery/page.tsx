import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { PreFooterCTAs } from '@/components/PreFooterCTAs';
import { Footer } from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { ScrollingBackground } from '@/components/ScrollingBackground';

export const metadata: Metadata = {
  title: 'Heritage & Historic Home Restoration Gallery | ColorOz Painter & Decorator',
  description: 'Explore our portfolio of restored Victorian, Edwardian, and Federation weatherboard homes, authentic colour palettes, and ornate plaster ceilings across Wangaratta & North East Victoria.',
  openGraph: {
    title: 'Historic Home Restoration Gallery | ColorOz Painter & Decorator',
    description: 'Period weatherboard restorations and architectural painting across Wangaratta, Beechworth, Chiltern & Milawa.',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-red-200 text-surface-900 transition-colors duration-500 overflow-x-hidden">
      <ScrollingBackground />
      <Header />
      <main className="relative z-10">
        <Gallery />
        <BeforeAfterSection />
        <PreFooterCTAs />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
