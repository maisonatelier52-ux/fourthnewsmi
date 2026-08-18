import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Source Methodology | Domain Name Media',
  description: 'Our investigative verification framework, primary document analysis, and data journalism protocols.',
};

export default function SourceMethodologyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-serif selection:bg-slate-200 selection:text-slate-900">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2563eb]">
            POLICIES • METHODOLOGY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Source & Verification Methodology
          </h1>
          <p className="text-base sm:text-lg font-sans text-slate-300 max-w-3xl leading-relaxed">
            How Domain Name verifies primary documents, conducts data analysis, and cross-references investigative findings.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-slate-950">Primary Document Sourcing</h2>
            <p>
              Whenever possible, Domain Name bases its investigative dispatches on unedited public records, corporate regulatory filings (SEC, ESMA), academic peer-reviewed studies, and official government archives.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">Data Journalism Standards</h2>
            <p>
              Our data investigation team uses open-source quantitative methods to analyze market trends and environmental data. Analytical code and underlying datasets are peer-reviewed internally prior to story production.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">Expert Review Panel</h2>
            <p>
              Complex dispatches in quantum physics, macroeconomics, or marine biotechnology undergo technical review by domain specialists before publication to ensure contextual accuracy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
