import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Editorial Policy | Domain Name Media',
  description: 'Our journalistic principles, ethics code, conflict-of-interest guidelines, and correction protocols.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-serif selection:bg-slate-200 selection:text-slate-900">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2563eb]">
            POLICIES • EDITORIAL ETHICS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Editorial Policy & Code of Ethics
          </h1>
          <p className="text-base sm:text-lg font-sans text-slate-300 max-w-3xl leading-relaxed">
            The foundational journalistic standards governing every article, analysis, and dispatch published across our newsroom.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-slate-950">1. Verification & Fact-Checking</h2>
            <p>
              Accuracy is paramount. Correspondents must verify all claims against primary documents, official datasets, or at least two independent credible sources prior to publication.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">2. Conflicts of Interest & Financial Trading</h2>
            <p>
              Domain Name journalists and editors are prohibited from holding individual stocks or financial instruments in companies they directly cover. All personal investments must be held in broad index funds or managed blind trusts.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">3. Anonymous Sourcing Standard</h2>
            <p>
              Anonymity is granted solely when primary source information is vital to public interest and disclosure poses personal or professional risk. Unnamed sources must be approved by an executive editor and verified by secondary evidence.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-950 pt-4">4. Corrections & Updates Policy</h2>
            <p>
              When a factual error occurs, we correct it promptly and transparently with an explicit correction note detailing what was changed and when.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
