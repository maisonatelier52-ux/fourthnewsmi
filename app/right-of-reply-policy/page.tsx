import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Right of Reply Policy | Domain Name Media',
  description: 'Procedures and criteria for individuals and organizations seeking a right of reply to published dispatches.',
};

export default function RightOfReplyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-[#000000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            COMPANY • EDITORIAL FAIRNESS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Right of Reply Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-300 max-w-3xl leading-relaxed">
            Ensuring fairness, accuracy, and equal voice for individuals and entities referenced in investigative dispatches.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4 text-neutral-800 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-black">Pre-Publication Response Windows</h2>
            <p>
              Whenever a Domain Name investigative report makes factual allegations that reflect adversely on an individual or organization, our correspondents provide reasonable advance notice and an opportunity to respond prior to publication.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">Post-Publication Right of Reply Criteria</h2>
            <p>
              If an individual or corporate entity believes a published dispatch contains misleading assertions or omitted context, a formal Right of Reply statement may be submitted to the Standards Editor.
            </p>

            <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-3 font-sans text-xs">
              <h4 className="font-bold text-black uppercase tracking-wider">Submitting a Right of Reply Request</h4>
              <p className="text-neutral-600">
                Submit your formal statement within 14 calendar days of publication to <span className="font-bold text-black">standards@domainname.com</span> including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                <li>Exact URL and headline of the dispatch.</li>
                <li>Specific sentences or data points contested.</li>
                <li>Factual documentation or primary evidence supporting the reply.</li>
                <li>Formal statement (up to 400 words) intended for publication.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
