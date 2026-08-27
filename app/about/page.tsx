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
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={articles} />

      {/* Header Banner - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-[#000000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            COMPANY • ABOUT US
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Independent Journalism for a Changing World
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-300 max-w-3xl leading-relaxed">
            Domain Name is a premier global news network committed to rigorous investigative reporting, market intelligence, and objective contemporary dispatches.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-100 space-y-2">
              <Shield className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Editorial Integrity</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Strict independence from commercial, political, or institutional influence in every report.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-100 space-y-2">
              <Globe className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Global Correspondents</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Field correspondents based in over 40 financial capitals and diplomatic hubs worldwide.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-100 space-y-2">
              <Award className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Fact-Checked Precision</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Multi-source verification methodology applied to every statistical claim and breaking dispatch.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-100 space-y-2">
              <Users className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Public Accountability</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Transparent corrections policy and open channels for reader right-of-reply dispatches.
              </p>
            </div>
          </div>

          {/* Narrative Section */}
          <article className="space-y-6 text-neutral-800 text-sm sm:text-base leading-relaxed font-serif">
            <h2 className="text-2xl font-serif font-bold text-black tracking-tight">Our Story & Mission</h2>
            <p className="font-normal text-neutral-700">
              Founded with the conviction that accurate, timely information is essential to free societies, Domain Name delivers deep-dive dispatches across technology, global affairs, enterprise markets, and contemporary culture.
            </p>
            <p className="font-normal text-neutral-700">
              Our newsroom operates 24/7 across multiple time zones, combining traditional investigative rigor with cutting-edge analytical tools. Whether reporting on post-quantum encryption breakthroughs, macro-economic shifts, or marine conservation, our journalists prioritize primary source documentation.
            </p>

            <div className="bg-[#000000] text-white p-8 space-y-3 font-sans border-l-4 border-[#c59b27]">
              <h3 className="text-lg font-serif font-bold text-white">Our Editorial Promise</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
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
