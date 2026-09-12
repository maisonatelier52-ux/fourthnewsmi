import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Gazetta',
  description: 'Terms and conditions governing the access, syndication, and use of Gazetta journalism and digital publications.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">LEGAL &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            The legal agreements and terms of service that govern your relationship with Gazetta dispatches, digital tools, and subscriptions.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Effective Date: January 1, 2026 • Gazetta Legal Operations
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-neutral-700">
              By accessing, browsing, or subscribing to Gazetta (&ldquo;Site&rdquo;, &ldquo;Service&rdquo;, or &ldquo;Publication&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree with any portion of these provisions, you must immediately discontinue your use of our publications and digital services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              2. Intellectual Property Rights &amp; Copyright
            </h2>
            <p className="text-neutral-700">
              All editorial articles, investigation dispatches, visual journalism, photographs, audio-visual recordings, data visualizations, and proprietary code featured on Gazetta are protected under international copyright, trade secret, and trademark conventions.
            </p>
            <p className="text-neutral-700">
              Reproduction, scraping, bulk automated ingestion, retraining of artificial intelligence models, or public redistribution without an express written syndication agreement is strictly prohibited and subject to legal enforcement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              3. Permitted Personal Use
            </h2>
            <p className="text-neutral-700">
              Readers are granted a revocable, non-exclusive, non-transferable license to view, save individual articles for offline reading, and share permalink citations for non-commercial personal reference, provided proper attribution and original link structures are preserved.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              4. Disclaimer of Financial &amp; Legal Guidance
            </h2>
            <p className="text-neutral-700">
              All market intelligence, macroeconomic overviews, and policy analyses provided by Gazetta are produced solely for informational and journalistic purposes. No content published across our platforms constitutes financial, investment, accounting, or legal advice.
            </p>
          </section>

          <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] font-sans text-xs sm:text-sm space-y-2">
            <h4 className="font-bold text-black uppercase tracking-wider">Syndication &amp; Licensing Rights</h4>
            <p className="text-neutral-700 leading-relaxed">
              For corporate subscriptions, educational republication rights, or commercial wire integration, contact our syndication legal bureau at <span className="font-semibold text-black">licensing@gazetta.com</span>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
