import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Domain Name Media',
  description: 'Terms and conditions governing the use of Domain Name website, dispatches, and syndication services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-[#000000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            COMPANY • LEGAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-300 max-w-3xl leading-relaxed">
            Effective Date: January 1, 2026. Please read these terms carefully before accessing Domain Name dispatches and digital publications.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4 text-neutral-800 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-black">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any part of Domain Name ("Site", "Service", or "Publication"), you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you may not access our editorial services.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">2. Intellectual Property Rights</h2>
            <p>
              All original dispatches, investigative reports, photographic assets, charts, data visualizations, and software scripts published on Domain Name are protected under international copyright, trademark, and intellectual property laws.
            </p>
            <p>
              Unauthorized reproduction, scraping, automated text mining, or redistribution without express written syndication agreement is strictly prohibited.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">3. Permitted Personal Use</h2>
            <p>
              Readers are granted a limited, non-exclusive license to view, download for offline reading, and share permalinks for non-commercial personal use, provided all copyright notices remain intact.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">4. User Dispatches & Comments</h2>
            <p>
              Comments submitted to reader discussion forums must comply with community guidelines. Domain Name reserves the right to remove, edit, or decline publication of comments containing defamation, hate speech, or commercial spam.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">5. Disclaimer of Warranties</h2>
            <p>
              While Domain Name exercises rigorous fact-checking standards, all material is provided "as is". Market dispatches do not constitute financial, legal, or investment advice.
            </p>

            <div className="bg-neutral-50 p-6 border border-neutral-200 mt-8 font-sans text-xs space-y-2">
              <h4 className="font-bold text-black uppercase tracking-wider">Syndication & Licensing Inquiries</h4>
              <p className="text-neutral-600">
                For corporate republication rights or commercial news feed licensing, contact <span className="font-bold text-black">licensing@domainname.com</span>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
