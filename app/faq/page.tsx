'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How often is Domain Name updated?',
      answer: 'Our global newsroom updates breaking dispatches, market telemetry, and investigative reports 24/7. Major daily briefings are refreshed every morning at 06:00 UTC.',
    },
    {
      question: 'Is Domain Name free to read?',
      answer: 'Our core daily news dispatches and category coverage are open to all readers. Premium deep-dive investigative archives and API data feeds require a reader subscription.',
    },
    {
      question: 'How can I submit a confidential news tip or whistleblower document?',
      answer: 'You can transmit encrypted tips via Signal or PGP email to our confidential investigative desk at tips@domainname.com. See our Contact page for security keys.',
    },
    {
      question: 'What is Domain Name’s policy on corrections?',
      answer: 'We correct factual errors promptly and transparently with an explicit correction timestamp at the top of the affected article. See our Editorial Policy for full details.',
    },
    {
      question: 'How do I request republication or syndication rights?',
      answer: 'Commercial republication, university licensing, and automated news feed API access are managed by our Syndication team at licensing@domainname.com.',
    },
    {
      question: 'How can I manage my newsletter subscription preferences?',
      answer: 'You can manage or unsubscribe from daily email dispatches at any time by clicking the "Unsubscribe" link included at the bottom of every briefing email.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-[#000000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            POLICIES • HELP CENTER
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-300 max-w-3xl leading-relaxed">
            Everything you need to know about Domain Name dispatches, subscriptions, editorial standards, and newsroom access.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-black text-sm sm:text-base hover:text-[#c59b27] transition-colors"
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
                    <div className="px-5 pb-5 pt-1 text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-neutral-50 p-6 border border-neutral-200 text-center space-y-2">
            <h4 className="font-serif font-bold text-black text-base">Have additional questions?</h4>
            <p className="text-xs text-neutral-600">
              Our reader support desk is available to assist you 24/7.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#000000] hover:bg-neutral-800 text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 mt-2 transition-colors"
            >
              Contact Reader Desk
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
