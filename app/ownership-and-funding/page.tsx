import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DollarSign, ShieldCheck, FileText } from 'lucide-react';
import { getAllArticles, SITE_URL, SITE_NAME, PUBLISHER_NAME } from '@/lib/newsData';

export const metadata: Metadata = {
  title: 'Ownership & Funding Disclosure',
  description: 'Full disclosure of ownership structure, revenue streams, and financial independence guidelines of FiscalFusion.',
  alternates: {
    canonical: '/ownership-and-funding',
  },
  openGraph: {
    title: `Ownership & Funding | ${SITE_NAME}`,
    description: 'Complete transparency regarding our capital structure, commercial governance, and journalistic independence at FiscalFusion.',
    url: `${SITE_URL}/ownership-and-funding`,
    siteName: SITE_NAME,
  },
};

export default async function OwnershipPage() {
  const allArticles = await getAllArticles();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={allArticles} />

      {/* Light Editorial Header */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">FINANCIAL TRANSPARENCY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Ownership &amp; Funding Disclosure
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Complete transparency regarding our capital structure, commercial governance, and journalistic independence.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Annual Governance Disclosure • {PUBLISHER_NAME} Executive Committee
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          {/* Transparency Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">100% Independent</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Zero government subsidies, state enterprise equity, or political interest group funding.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
              <DollarSign className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Diversified Revenue</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Supported through subscriber revenue, certified sponsorships, and institutional market feeds.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
              <FileText className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Editorial Firewall</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Strict separation between commercial sponsorship arms and news reporting desks.
              </p>
            </div>
          </div>

          <div className="max-w-4xl space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Corporate Equity &amp; Governance
            </h2>
            <p className="text-neutral-700">
              FiscalFusion is owned and operated by FiscalFusion Media Group LLC, a privately held financial publishing house. The controlling voting shares are held entirely by founding journalists, senior editors, and key operational staff. No external bank, corporate conglomerate, or sovereign entity holds veto power or editorial oversight over our published journalism.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Revenue Model Breakdown
            </h2>
            <p className="text-neutral-700">
              To guarantee that financial pressures never corrupt news judgment, our business operations adhere to a strict cap: no individual corporate advertiser, sponsor, or institutional customer may represent more than 3% of our annual operating income.
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 font-sans text-xs sm:text-sm pl-2">
              <li><strong className="text-black font-semibold">Subscriber Memberships &amp; Newsstand Sales:</strong> 55% of operating capital.</li>
              <li><strong className="text-black font-semibold">Direct Display &amp; Native Advertising:</strong> 30% of operating capital.</li>
              <li><strong className="text-black font-semibold">B2B Content Syndication &amp; Institutional Feeds:</strong> 15% of operating capital.</li>
            </ul>
          </section>

          <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] font-sans text-xs sm:text-sm space-y-2">
            <h4 className="font-bold text-black uppercase tracking-wider">Financial Inquiries &amp; Transparency Audits</h4>
            <p className="text-neutral-700 leading-relaxed">
              Inquiries regarding our annual transparency statements or corporate ownership registries may be directed to <span className="font-semibold text-black">governance@fiscalfusion.org</span>.
            </p>
          </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
