import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Editorial Policy & Code of Ethics | Gazetta',
  description: 'The foundational journalistic standards governing every article, analysis, and dispatch published across our newsroom.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>POLICIES</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">EDITORIAL ETHICS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Editorial Policy &amp; Code of Ethics
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            The foundational journalistic standards governing every article, analysis, and dispatch published across our newsroom.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Last Updated: September 2026 • Published by Gazetta Standards Committee
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              1. Verification &amp; Fact-Checking Principles
            </h2>
            <p className="text-neutral-700">
              Accuracy is the bedrock of our journalism. Every factual assertion, statistical data point, quote, and chronological timeline published in Gazetta undergoes multi-tier verification before publication.
            </p>
            <p className="text-neutral-700">
              Correspondents are mandated to consult primary source documentation—such as official court records, legislative transcripts, regulatory filings, and academic datasets—rather than relying solely on secondary reportage. Any claim relying on interview testimony must be verified against at least two independent credible sources.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              2. Conflict of Interest &amp; Financial Independence
            </h2>
            <p className="text-neutral-700">
              Gazetta enforces strict ethical boundaries to eliminate conflicts of interest among its editorial staff, reporters, and leadership.
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 font-sans text-sm pl-2">
              <li>Reporters and editors covering financial and business markets are strictly barred from trading individual equities, corporate bonds, or private equity in sectors they actively report upon.</li>
              <li>Personal investment portfolios of financial journalists must be managed through blind trusts or broad index funds with public disclosure.</li>
              <li>Editorial decisions are never influenced by commercial sponsors, advertising relationships, investors, or political entities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              3. Anonymous Sourcing Standards
            </h2>
            <p className="text-neutral-700">
              We consider transparency essential to credible reporting. Anonymity is granted only in extraordinary circumstances where:
            </p>
            <div className="bg-neutral-50 p-5 border border-neutral-200 font-sans text-xs sm:text-sm space-y-2">
              <p className="font-semibold text-black">A. The information is of paramount public interest and cannot be verified through on-the-record sources.</p>
              <p className="font-semibold text-black">B. The source has a well-founded reason to fear retaliation, personal danger, or severe professional jeopardy.</p>
              <p className="font-semibold text-black">C. The reporter has disclosed the source&apos;s identity and verifiable motive to an executive editor prior to publication.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              4. Corrections, Retractions &amp; Updates
            </h2>
            <p className="text-neutral-700">
              When a factual inaccuracy is identified, Gazetta corrects it promptly, visibly, and without obfuscation. Every correction is documented with a timestamped note appended to the top or bottom of the published story, explicitly identifying what was incorrect, what the corrected facts are, and when the change occurred.
            </p>
            <p className="text-neutral-700">
              Readers who identify a potential error are encouraged to contact our standards desk directly at <span className="font-sans font-semibold text-black">corrections@gazetta.com</span>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              5. AI &amp; Emerging Technology Guidelines
            </h2>
            <p className="text-neutral-700">
              All editorial articles, investigation analyses, and headline texts are written and reviewed by professional human journalists. Generative AI tools are never used to author reporting, synthesize quotes, or fabricate photographic evidence. Where computational tools are employed for data extraction or transcription, they are subject to comprehensive human editorial supervision.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
