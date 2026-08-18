import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Advertising & Sponsored Policy | Domain Name Media',
  description: 'Guidelines governing advertising placement, sponsored content separation, and commercial integrity.',
};

export default function AdvertisingPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-serif selection:bg-slate-200 selection:text-slate-900">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2563eb]">
            POLICIES • COMMERCIAL STANDARDS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Advertising & Sponsored Content Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-slate-300 max-w-3xl leading-relaxed">
            Ensuring absolute clarity between editorial reporting and commercial advertising partnerships.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-slate-950">1. Strict Separation</h2>
            <p>
              Advertising sales and commercial sponsorships operate independently from the Domain Name newsroom. Advertisers exert zero influence over story selection, reporting angles, or publishing timelines.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">2. Clear Labeling</h2>
            <p>
              All commercial partnerships, sponsored features, or paid announcements are explicitly demarcated with prominent tags such as <strong className="text-slate-950 font-sans">"SPONSORED DISPATCH"</strong> or <strong className="text-slate-950 font-sans">"ADVERTISEMENT"</strong>.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">3. Prohibited Advertising Categories</h2>
            <p>
              Domain Name declines advertising promoting illegal products, deceptive financial schemes, unverified medical claims, or political attack ads.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
