import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DollarSign, ShieldCheck, FileText } from 'lucide-react';

export const metadata = {
  title: 'Ownership & Funding | Domain Name Media',
  description: 'Full disclosure of ownership structure, revenue streams, and financial independence guidelines.',
};

export default function OwnershipPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-serif selection:bg-slate-200 selection:text-slate-900">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2563eb]">
            COMPANY • TRANSPARENCY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Ownership & Funding Disclosure
          </h1>
          <p className="text-base sm:text-lg font-sans text-slate-300 max-w-3xl leading-relaxed">
            Complete transparency regarding our financial structure, equity ownership, and commercial independence.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
            <div className="p-6 bg-slate-50 border border-slate-100 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#2563eb]" />
              <h3 className="text-base font-bold text-slate-950 font-serif">100% Independent</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No government funding, political action committee backing, or sovereign wealth fund stakes.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 space-y-2">
              <DollarSign className="w-6 h-6 text-[#2563eb]" />
              <h3 className="text-base font-bold text-slate-950 font-serif">Diversified Revenue</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Funded exclusively through reader subscriptions, direct advertising, and content licensing.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 space-y-2">
              <FileText className="w-6 h-6 text-[#2563eb]" />
              <h3 className="text-base font-bold text-slate-950 font-serif">Wall Firewall</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict firewall separating commercial advertising operations from editorial coverage decisions.
              </p>
            </div>
          </div>

          <article className="space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
            <h2 className="text-2xl font-serif font-bold text-slate-950">Ownership Structure</h2>
            <p>
              Domain Name is owned and operated by Domain Name Media Group, a privately held independent digital publishing organization. Controlling equity is held by the founding editorial partners and senior journalists.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">Revenue Breakdown</h2>
            <p>
              To safeguard editorial integrity, no single advertiser or subscriber accounts for more than 3% of total annual operating revenue. Revenue sources include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong className="text-slate-950">Reader Subscriptions & Premium Membership:</strong> 55% of operating budget.</li>
              <li><strong className="text-slate-950">Direct Programmatic & Display Advertising:</strong> 30% of operating budget.</li>
              <li><strong className="text-slate-950">Syndication & Corporate API Licensing:</strong> 15% of operating budget.</li>
            </ul>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
