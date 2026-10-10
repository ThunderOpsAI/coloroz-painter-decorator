import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { ScrollingBackground } from '@/components/ScrollingBackground';
import { ApprovedReviews } from '@/components/ApprovedReviews';
import { ReviewSubmitForm } from '@/components/ReviewSubmitForm';
import { PreFooterCTAs } from '@/components/PreFooterCTAs';

export const metadata: Metadata = {
  title: 'Client Reviews & Historic Endorsements | ColorOz Painter & Decorator',
  description: 'Read reviews and testimonials from period home owners and heritage property stewards who trust ColorOz Painter & Decorator across North East Victoria.',
  openGraph: {
    title: 'Client Reviews & Historic Endorsements | ColorOz Painter & Decorator',
    description: 'Verified testimonials from historic home owners in Wangaratta, Beechworth, Chiltern, and Milawa.',
    type: 'website',
  },
};

export default function ReviewsPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-red-200 text-surface-900 transition-colors duration-500 overflow-x-hidden">
      <ScrollingBackground />
      <Header />
      <main className="relative z-10">
        <ApprovedReviews />
        <ReviewSubmitForm />
        <PreFooterCTAs />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
