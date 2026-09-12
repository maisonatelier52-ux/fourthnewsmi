import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Award, Globe, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us | Gazetta',
  description: 'Learn about Gazetta, our journalistic mission, core standards, and global reporting network.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">ABOUT US</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            About Gazetta
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Independent journalism, deep-dive investigations, and authoritative dispatches for an interconnected world.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Founded 2018 • Independent International Publishing Desk
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
              <Shield className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Editorial Integrity</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Strict independence from commercial, political, or institutional influence in every report.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
              <Globe className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Global Correspondents</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Field correspondents based in over 40 financial capitals and diplomatic hubs worldwide.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
              <Award className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Fact-Checked Precision</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Multi-source verification methodology applied to every statistical claim and breaking dispatch.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
              <Users className="w-6 h-6 text-[#c59b27]" />
              <h3 className="text-base font-bold text-black font-serif">Public Accountability</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Transparent corrections policy and open channels for reader right-of-reply dispatches.
              </p>
            </div>
          </div>

          {/* Narrative Sections */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Our Mission &amp; Foundation
            </h2>
            <p className="text-neutral-700">
              Founded with the conviction that accurate, fearless reporting is vital to a free society, Gazetta delivers rigorous coverage across technology, geopolitics, economic trends, science, and global culture.
            </p>
            <p className="text-neutral-700">
              Our newsroom operates around the clock across major global hubs, blending classic investigative traditions with contemporary data-driven research. Whether uncovering sovereign monetary policy shifts or reporting on technological disruptions, we place empirical facts above partisan commentary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              Our Editorial Promise
            </h2>
            <div className="bg-[#fbf9f4] border-l-4 border-[#c59b27] p-6 space-y-2 font-sans">
              <h3 className="text-base font-serif font-bold text-neutral-900">Truth, Depth, and Accountability</h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                &ldquo;We serve our readership first. We verify before we publish, acknowledge corrections transparently, and maintain zero tolerance for unsourced speculation or sponsored manipulation.&rdquo;
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
