import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Legal & Compliance | Domain Name Media',
  description: 'Legal notices, corporate entity disclosures, compliance framework, and copyright information.',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-serif selection:bg-slate-200 selection:text-slate-900">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2563eb]">
            COMPANY • LEGAL DISCLOSURES
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Legal Notices & Compliance
          </h1>
          <p className="text-base sm:text-lg font-sans text-slate-300 max-w-3xl leading-relaxed">
            Corporate registration details, regulatory compliance standards, and intellectual property notice.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-slate-950">Corporate Entity Information</h2>
            <p>
              Domain Name is published by Domain Name Publishing LLC, a registered media corporation headquartered in New York, NY, with international operations governed under United States federal media regulations and international copyright conventions.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">Regulatory & Editorial Compliance</h2>
            <p>
              Our publication adheres to the international standards established by the Society of Professional Journalists (SPJ) and the International Fact-Checking Network (IFCN).
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">Copyright Agent & DMCA Notices</h2>
            <p>
              In accordance with the Digital Millennium Copyright Act (DMCA), designated notices of copyright infringement must be transmitted to our official registered Agent:
            </p>

            <div className="bg-slate-950 text-white p-6 space-y-2 font-sans text-xs border-l-4 border-blue-500">
              <p className="font-bold text-white uppercase tracking-wider">Designated DMCA Agent</p>
              <p className="text-slate-300">Domain Name Legal Department</p>
              <p className="text-slate-300">750 Third Avenue, 18th Floor, New York, NY 10017</p>
              <p className="text-blue-400 font-bold">Email: legal@domainname.com</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
