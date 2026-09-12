'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How often is Gazetta updated with new journalism?',
      answer: 'Our global newsrooms operate around the clock across European, Asian, and American time zones. Breaking dispatches and financial market briefings are published continuously 24/7, with comprehensive morning editions published at 06:00 UTC.',
    },
    {
      question: 'Is Gazetta accessible without a paid subscription?',
      answer: 'Our general news dispatches, opinion analyses, and category reporting remain free to read. Deep-dive investigative series, data intelligence archives, and specialized industry briefs require a premium reader membership.',
    },
    {
      question: 'How do I securely transmit confidential news tips or whistleblower leaks?',
      answer: 'You can reach our encrypted investigative desk via Signal or secure PGP email at tips@gazetta.com. We strictly protect confidential source identities under our Right of Reply and Shield standards.',
    },
    {
      question: 'What is your procedure for reporting factual corrections?',
      answer: 'Gazetta values transparency above all. Readers who notice any factual or statistical error can submit a notice to corrections@gazetta.com. Verified corrections are updated promptly with clear editorial disclosures.',
    },
    {
      question: 'How can our institution license or syndicate Gazetta articles?',
      answer: 'Institutional feeds, university database access, and commercial republication rights are managed through our syndication department. Please inquire at licensing@gazetta.com.',
    },
    {
      question: 'How do I manage or unsubscribe from daily newsletters?',
      answer: 'You can update your topic interests or unsubscribe instantly at any time by clicking the unsubscribe link situated at the footer of every email dispatch.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>POLICIES</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">HELP &amp; INQUIRIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Everything you need to know about Gazetta dispatches, subscription memberships, editorial policies, and newsroom operations.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Reader Services • 24/7 Editorial Assistance
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-black text-sm sm:text-base hover:text-neutral-600 transition-colors"
                  >
                    <span className="flex items-center gap-3 font-serif">
                      <HelpCircle className="w-4 h-4 text-[#c59b27] shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-neutral-700 text-xs sm:text-sm font-sans leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] space-y-2 font-sans">
            <h4 className="font-serif font-bold text-black text-base">Have additional questions or need assistance?</h4>
            <p className="text-xs text-neutral-600">
              Our reader support and editorial communications team is on standby to assist you.
            </p>
            <div className="pt-1">
              <a
                href="/contact"
                className="inline-block bg-[#c59b27] hover:bg-[#b0881e] text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 transition-colors"
              >
                Contact Reader Desk
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
