import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Source Methodology | Gazetta',
  description: 'Our investigative verification framework, primary document analysis, and rigorous data journalism protocols.',
};

export default function SourceMethodologyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>POLICIES</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">INVESTIGATIVE METHODOLOGY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Source &amp; Verification Methodology
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            The rigorous empirical methods, primary documentation standards, and verification frameworks guiding Gazetta reporting.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Research &amp; Standards Desk • Gazetta Investigative Unit
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              1. Primacy of Primary Documents
            </h2>
            <p className="text-neutral-700">
              At Gazetta, investigative dispatches and breaking analyses are grounded in raw, unvarnished primary sources. We prioritize certified corporate filings (SEC, ESMA, Companies House), judicial court dockets, legislative transcripts, freedom-of-information disclosures, and peer-reviewed scientific studies over hearsay or secondary citations.
            </p>
            <p className="text-neutral-700">
              Whenever lawful and ethically responsible, we publish hyperlinked citations or embedded excerpts of the underlying source documentation directly within our articles so readers can inspect the evidence firsthand.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              2. Quantitative Data Journalism Standards
            </h2>
            <p className="text-neutral-700">
              Our data reporting unit evaluates numerical claims through reproducible computational methods. Before publishing any statistical finding, statistical models and datasets are subjected to an internal peer check by a secondary data analyst to test for sampling bias, statistical insignificance, or miscalculated variances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              3. Independent Technical Review Panel
            </h2>
            <p className="text-neutral-700">
              When reporting on cutting-edge disciplines—including artificial intelligence models, post-quantum cryptography, macroeconomic liquidity cycles, and climate science—drafts undergo review by independent subject-matter experts who possess no financial stake in the outcome of the reporting.
            </p>
          </section>

          <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] font-sans text-xs sm:text-sm space-y-2">
            <h4 className="font-bold text-black uppercase tracking-wider">Methodology Questions &amp; Data Audits</h4>
            <p className="text-neutral-700 leading-relaxed">
              If you have technical inquiries or wish to challenge the statistical methodology of any Gazetta dispatch, reach our investigative desk at <span className="font-semibold text-black">data@gazetta.com</span>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
