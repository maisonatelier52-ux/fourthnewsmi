import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Right of Reply Policy | Gazetta',
  description: 'Procedures, timelines, and criteria for individuals and entities seeking a formal right of reply to published journalism.',
};

export default function RightOfReplyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">EDITORIAL FAIRNESS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Right of Reply Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Ensuring fairness, accuracy, and equitable opportunity for response in investigative reportage and public affairs.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Standards &amp; Accountability • Gazetta Newsroom Directive
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Pre-Publication Opportunity to Respond
            </h2>
            <p className="text-neutral-700">
              When Gazetta conducts investigative journalism or publishes claims that could significantly affect the reputation or integrity of an individual, institution, or commercial enterprise, our reporters are required to provide reasonable notice and a fair window to respond before the story is published.
            </p>
            <p className="text-neutral-700">
              In breaking news situations where deadlines are immediate, our journalists will note that comment was sought, and we will update the dispatch promptly upon receiving a response.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Post-Publication Right of Reply Criteria
            </h2>
            <p className="text-neutral-700">
              If an affected party believes that an article omitted crucial context, misinterpreted facts, or portrayed events unfairly, they may submit a formal statement for consideration under our Right of Reply policy.
            </p>
            <p className="text-neutral-700">
              Approved replies are appended visibly to the original dispatch, published as an editor&apos;s note, or integrated directly into follow-up coverage as appropriate.
            </p>
          </section>

          <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] space-y-3 font-sans text-xs sm:text-sm">
            <h4 className="font-bold text-black uppercase tracking-wider">Formal Right of Reply Submission</h4>
            <p className="text-neutral-700 leading-relaxed">
              Formal reply submissions must be sent within 14 calendar days of publication to <span className="font-semibold text-black">standards@gazetta.com</span> containing:
            </p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              <li>The specific headline, author, and URL of the published article.</li>
              <li>Precise identification of the sentences or facts contested.</li>
              <li>Documentary proof, primary data, or corroborating records.</li>
              <li>A concise response statement (under 400 words) intended for publication.</li>
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
