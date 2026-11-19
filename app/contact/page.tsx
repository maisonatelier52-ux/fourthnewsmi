import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Shield, FileText, Megaphone, HelpCircle } from 'lucide-react';
import { getAllArticles, SITE_URL, SITE_NAME, PUBLISHER_NAME } from '@/lib/newsData';

export const metadata: Metadata = {
  title: 'Contact Us — Editorial Desk & General Inquiries',
  description: 'Direct email communication channels for news tips, editorial correspondence, press inquiries, and reader feedback at FiscalFusion.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/contact`,
    title: `Contact Us | ${SITE_NAME}`,
    description: 'Direct communication channels for news tips, editorial correspondence, and reader inquiries at FiscalFusion.',
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
    description: 'Direct communication channels for FiscalFusion editorial and publishing desks.',
    mainEntity: {
      '@type': 'NewsMediaOrganization',
      name: SITE_NAME,
      legalName: PUBLISHER_NAME,
      url: SITE_URL,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'editorial inquiries',
          email: 'editorial@fiscalfusion.org',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'confidential whistleblower tips',
          email: 'tips@fiscalfusion.org',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'general inquiries',
          email: 'contact@fiscalfusion.org',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'press and media',
          email: 'press@fiscalfusion.org',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'advertising and partnerships',
          email: 'advertising@fiscalfusion.org',
        },
      ],
    },
  };

  const contactChannels = [
    {
      title: 'Editorial & Story Inquiries',
      subtitle: 'Pitch stories, suggest coverage, share analytical research, or submit commentary to our newsroom desk.',
      email: 'editorial@fiscalfusion.org',
      icon: Mail,
      tag: 'Newsroom',
    },
    {
      title: 'Confidential Tips & Leaks',
      subtitle: 'Submit sensitive documents, corporate disclosures, or whistleblower tips. Source confidentiality is strictly protected.',
      email: 'tips@fiscalfusion.org',
      icon: Shield,
      tag: 'Investigations',
    },
    {
      title: 'General Inquiries & Reader Feedback',
      subtitle: 'Questions about our publications, reader letters, site feedback, or general correspondence with our team.',
      email: 'contact@fiscalfusion.org',
      icon: HelpCircle,
      tag: 'General Desk',
    },
    {
      title: 'Press & Media Relations',
      subtitle: 'Interview requests for our journalists, media commentary, quotes, and broadcast appearances.',
      email: 'press@fiscalfusion.org',
      icon: Megaphone,
      tag: 'Media',
    },
    {
      title: 'Advertising & Partnerships',
      subtitle: 'Inquiries regarding site sponsorships, newsletter placements, corporate partnerships, and syndication.',
      email: 'advertising@fiscalfusion.org',
      icon: FileText,
      tag: 'Commercial',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navbar articles={allArticles} />

      {/* Light Editorial Header */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">CONTACT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Get in touch with the FiscalFusion editorial newsroom, investigative desk, and corporate communications team.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Direct Email Inquiries • Monitored Daily by Our Editorial Staff
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Introductory Description */}
          <div className="max-w-4xl space-y-3 font-sans">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              How to Reach Our Team
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              FiscalFusion values correspondence from readers, researchers, industry professionals, and whistleblowers. 
              To ensure your message reaches the appropriate desk as quickly as possible, please contact the corresponding email address listed below.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.email}
                  className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col justify-between hover:border-neutral-400 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#c59b27]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 bg-neutral-200/60 px-2.5 py-0.5">
                        {channel.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-serif font-bold text-black">
                        {channel.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-1.5">
                        {channel.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-neutral-200">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${channel.email}`}
                      className="text-sm font-semibold text-[#c59b27] hover:text-[#9e7a1b] hover:underline break-all transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      {channel.email}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Editorial Standards Notice */}
          <div className="max-w-4xl bg-[#fbf9f4] border-l-4 border-[#c59b27] p-6 space-y-2 font-sans border border-neutral-200">
            <h3 className="text-base font-serif font-bold text-neutral-900">
              Editorial Response Guidelines
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Our editorial team reviews communications during active business and market reporting hours. 
              For formal factual correction requests regarding any published article, please include the specific article headline, URL, publication date, and relevant supporting documentation.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
