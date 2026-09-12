import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Advertising & Sponsored Policy | Gazetta',
  description: 'Guidelines governing advertising placement, native sponsorship separation, and commercial integrity across Gazetta.',
};

export default function AdvertisingPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>POLICIES</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">COMMERCIAL STANDARDS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Advertising &amp; Sponsored Content Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Ensuring unmistakable distinction between independent investigative reporting and paid commercial partnerships.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Commercial Standards Board • Gazetta Publishing Guidelines
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              1. Absolute Editorial Independence
            </h2>
            <p className="text-neutral-700">
              Commercial advertising arrangements and sponsorship contracts operate entirely isolated from newsroom leadership and reporting staff. Advertisers, underwriters, and commercial partners exercise zero influence or preview rights over article topics, investigative targets, reporting conclusions, or headlines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              2. Uncompromising Transparency &amp; Labeling
            </h2>
            <p className="text-neutral-700">
              Every paid promotional asset, native article, or brand collaboration is explicitly and conspicuously distinguished from editorial content. Commercial placements are clearly demarcated using high-visibility badges such as <strong className="text-black font-sans">&ldquo;PAID SPONSORSHIP&rdquo;</strong>, <strong className="text-black font-sans">&ldquo;ADVERTISEMENT&rdquo;</strong>, or <strong className="text-black font-sans">&ldquo;UNDERWRITTEN CONTENT&rdquo;</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              3. Strictly Prohibited Advertising Categories
            </h2>
            <p className="text-neutral-700">
              Gazetta maintains rigorous filters and rejects advertisements that compromise reader welfare or platform trust, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 font-sans text-xs sm:text-sm pl-2">
              <li>Predatory financial schemes, unregulated high-risk leverage, or deceptive crypto investments.</li>
              <li>Unverified pharmaceuticals, misleading medical claims, or anti-scientific health products.</li>
              <li>Malicious spyware, privacy-invasive surveillance tools, or predatory spyware links.</li>
              <li>Anonymous political attack advertisements without legally verified corporate disclosure.</li>
            </ul>
          </section>

          <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] font-sans text-xs sm:text-sm space-y-2">
            <h4 className="font-bold text-black uppercase tracking-wider">Advertising Inquiries &amp; Rate Cards</h4>
            <p className="text-neutral-700 leading-relaxed">
              For legitimate partnership inquiries or institutional advertising media kits, contact our commercial sales team at <span className="font-semibold text-black">advertising@gazetta.com</span>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
