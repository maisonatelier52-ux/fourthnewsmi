import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactClient from './ContactClient';
import { getAllArticles, SITE_URL, SITE_NAME, PUBLISHER_NAME } from '@/lib/newsData';

export const metadata: Metadata = {
  title: 'Contact Newsroom & Editorial Bureau',
  description: 'Direct communication channels for news tips, editorial correspondence, syndication inquiries, corporate compliance, and press inquiries at FiscalFusion.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/contact`,
    title: `Contact Newsroom | ${SITE_NAME}`,
    description: 'Direct communication channels for news tips, editorial correspondence, and corporate inquiries at FiscalFusion.',
    siteName: SITE_NAME,
  },
};

export default async function ContactPage() {
  const allArticles = await getAllArticles();

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description: 'Direct communication channels for FiscalFusion editorial and legal bureaus.',
    mainEntity: {
      '@type': 'NewsMediaOrganization',
      name: SITE_NAME,
      legalName: PUBLISHER_NAME,
      url: SITE_URL,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'editorial newsroom',
          email: 'editorial@fiscalfusion.org',
          telephone: '+1-212-555-0199',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'confidential whistleblower tips',
          email: 'tips@fiscalfusion.org',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'corporate and media relations',
          email: 'contact@fiscalfusion.org',
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navbar articles={allArticles} />

      {/* Light Editorial Header */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">CONTACT DESK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Contact FiscalFusion
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Direct communication channels for news tips, editorial correspondence, syndication inquiries, and institutional feedback.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Newsroom Desk • 24/7 Monitored Dispatch Center
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <ContactClient />
        </div>
      </main>

      <Footer />
    </div>
  );
}
