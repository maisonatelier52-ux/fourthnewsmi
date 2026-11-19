import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from './FAQAccordion';
import { getAllArticles, SITE_URL, SITE_NAME } from '@/lib/newsData';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Everything you need to know about FiscalFusion financial journalism, newsletters, data methodology, and editorial ethics.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: `FAQ | ${SITE_NAME}`,
    description: 'Frequently asked questions regarding FiscalFusion reporting, syndication, and subscriptions.',
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
  },
};

const faqs = [
  {
    question: 'How often is FiscalFusion updated with new financial journalism?',
    answer: 'Our global newsrooms operate around the clock across European, Asian, and American market sessions. Breaking financial dispatches and macroeconomic analyses are published continuously 24/7, with comprehensive morning briefings published at 06:00 EST.',
  },
  {
    question: 'Is FiscalFusion accessible without a paid subscription?',
    answer: 'Our core market dispatches, policy analyses, and category reporting remain free and open to read. Deep-dive investigative series, proprietary datasets, and specialized institutional intelligence briefs require a corporate or individual subscriber membership.',
  },
  {
    question: 'How do I securely transmit confidential news tips or whistleblower documents?',
    answer: 'You can reach our encrypted investigative desk via secure PGP email at tips@fiscalfusion.org. We strictly protect confidential source identities under our Right of Reply and Shield standards.',
  },
  {
    question: 'What is your procedure for reporting factual corrections?',
    answer: 'FiscalFusion values transparency above all. Readers who notice any factual or statistical error can submit a notice to corrections@fiscalfusion.org. Verified corrections are updated promptly with clear editorial disclosures.',
  },
  {
    question: 'How can our institution license or syndicate FiscalFusion articles?',
    answer: 'Institutional data feeds, terminal access, and commercial republication rights are managed through our syndication department. Please inquire at licensing@fiscalfusion.org.',
  },
  {
    question: 'How do I manage or unsubscribe from daily newsletters?',
    answer: 'You can update your topic interests or unsubscribe instantly at any time by clicking the unsubscribe link situated at the footer of every email dispatch.',
  },
];

export default async function FAQPage() {
  const allArticles = await getAllArticles();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar articles={allArticles} />

      {/* Light Editorial Header */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>POLICIES</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">HELP &amp; INQUIRIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Everything you need to know about FiscalFusion dispatches, subscription memberships, editorial policies, and newsroom operations.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Reader Services • 24/7 Editorial Assistance
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="max-w-4xl space-y-8">
            <FAQAccordion faqs={faqs} />

            <div className="bg-[#fbf9f4] p-6 border border-neutral-200 border-l-4 border-l-[#c59b27] space-y-2 font-sans">
              <h4 className="font-serif font-bold text-black text-base">Have additional questions or need assistance?</h4>
              <p className="text-xs text-neutral-600">
                Our reader support and editorial communications team is on standby to assist you.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-block bg-[#c59b27] hover:bg-[#b0881e] text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 transition-colors"
                >
                  Contact Reader Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
