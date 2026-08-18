import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/newsData';
import { Shield, Award, Globe, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us | Domain Name Media',
  description: 'Learn about Domain Name Media, our mission, editorial standards, and global reporting team.',
};

export default async function AboutPage() {
  const articles = await getAllArticles();

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-serif selection:bg-slate-200 selection:text-slate-900">
      <Navbar articles={articles} />

      {/* Header Banner - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2563eb]">
            COMPANY • ABOUT US
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Independent Journalism for a Changing World
          </h1>
          <p className="text-base sm:text-lg font-sans text-slate-300 max-w-3xl leading-relaxed">
            Domain Name is a premier global news network committed to rigorous investigative reporting, market intelligence, and objective contemporary dispatches.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-6xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 font-sans">
            <div className="p-6 bg-slate-50 border border-slate-100 space-y-2">
              <Shield className="w-6 h-6 text-[#2563eb]" />
              <h3 className="text-base font-bold text-slate-950 font-serif">Editorial Integrity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict independence from commercial, political, or institutional influence in every report.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 space-y-2">
              <Globe className="w-6 h-6 text-[#2563eb]" />
              <h3 className="text-base font-bold text-slate-950 font-serif">Global Correspondents</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Field correspondents based in over 40 financial capitals and diplomatic hubs worldwide.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 space-y-2">
              <Award className="w-6 h-6 text-[#2563eb]" />
              <h3 className="text-base font-bold text-slate-950 font-serif">Fact-Checked Precision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-source verification methodology applied to every statistical claim and breaking dispatch.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 space-y-2">
              <Users className="w-6 h-6 text-[#2563eb]" />
              <h3 className="text-base font-bold text-slate-950 font-serif">Public Accountability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent corrections policy and open channels for reader right-of-reply dispatches.
              </p>
            </div>
          </div>

          {/* Narrative Section */}
          <article className="space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed font-serif">
            <h2 className="text-2xl font-serif font-bold text-slate-950 tracking-tight">Our Story & Mission</h2>
            <p className="font-normal text-slate-700">
              Founded with the conviction that accurate, timely information is essential to free societies, Domain Name delivers deep-dive dispatches across technology, global affairs, enterprise markets, and contemporary culture.
            </p>
            <p className="font-normal text-slate-700">
              Our newsroom operates 24/7 across multiple time zones, combining traditional investigative rigor with cutting-edge analytical tools. Whether reporting on post-quantum encryption breakthroughs, macro-economic shifts, or marine conservation, our journalists prioritize primary source documentation.
            </p>

            <div className="bg-slate-900 text-white p-8 space-y-3 font-sans border-l-4 border-[#2563eb]">
              <h3 className="text-lg font-serif font-bold text-white">Our Editorial Promise</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                "We serve our readers first. We verify before we publish, acknowledge corrections transparently, and maintain zero tolerance for unsourced speculation."
              </p>
            </div>
          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}
