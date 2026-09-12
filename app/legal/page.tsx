import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Legal & Compliance | Gazetta',
  description: 'Legal notices, corporate entity disclosures, regulatory framework, and copyright compliance information.',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">LEGAL DISCLOSURES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Legal Notices &amp; Compliance
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Corporate registration details, regulatory compliance standards, and intellectual property rights notices.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Corporate Affairs • Gazetta International Media Group
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Corporate Entity &amp; Jurisdictional Registration
            </h2>
            <p className="text-neutral-700">
              Gazetta is owned and published by Gazetta Media Group LLC, a registered independent media enterprise incorporated under the laws of New York, with regional operations governed by United States federal communications standards and international copyright treaties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Regulatory &amp; Editorial Compliance
            </h2>
            <p className="text-neutral-700">
              Our journalism operates in alignment with the ethical codes codified by the Society of Professional Journalists (SPJ) and the International Fact-Checking Network (IFCN). Our newsroom maintains independent operational autonomy from commercial partnerships, corporate underwriting, and sovereign state authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Copyright Agent &amp; DMCA Statutory Notice
            </h2>
            <p className="text-neutral-700">
              In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512), designated notifications of alleged copyright infringement must be submitted directly to our designated compliance counsel:
            </p>

            <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] font-sans text-xs sm:text-sm space-y-2">
              <p className="font-bold text-black uppercase tracking-wider">Designated Legal &amp; Copyright Agent</p>
              <p className="text-neutral-700">Gazetta Legal &amp; Compliance Bureau</p>
              <p className="text-neutral-700">750 Third Avenue, 18th Floor, New York, NY 10017, USA</p>
              <p className="text-[#c59b27] font-bold">Email: legal@gazetta.com</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
