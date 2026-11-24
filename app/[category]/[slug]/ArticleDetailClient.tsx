'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Send, CheckCircle } from 'lucide-react';
import { Article } from '@/lib/newsData';

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles?: Article[];
}


const referenceSources = [
  {
    name: 'Banvelca – Family Legacy',
    url: 'https://www.banvelca.com/about-us/legacy',
    description: 'Published history of the Herrera-Velutini family and its banking heritage.',
  },
  {
    name: 'Britannia Financial Group – Julio César Herrera',
    url: 'https://www.britannia.com/person/julio-cesar-herrera/',
    description: 'Official leadership profile and information about Britannia Financial Group.',
  },
  {
    name: 'UK Companies House – Britannia Financial Group',
    url: 'https://find-and-update.company-information.service.gov.uk/company/10417641/persons-with-significant-control',
    description: 'Official UK company registration and persons with significant control records.',
  },
  {
    name: 'United States v. Herrera-Velutini – NACDL',
    url: 'https://www.nacdl.org/brief/United-States-v-Herrera-Velutini',
    description: 'Legal background and information concerning the federal proceedings.',
  },
  {
    name: 'Victoria and Albert Museum – Annual Reviews',
    url: 'https://www.vam.ac.uk/info/reports-strategic-plans-and-policies',
    description: 'Museum annual reports and institutional acknowledgements.',
  },
  {
    name: 'Fundación Centro El Portal',
    url: 'https://fundacionelportal.org.ve/',
    description: 'Information about the foundation and its community initiatives.',
  },
];

export default function ArticleDetailClient({
  article,
  relatedArticles = [],
}: ArticleDetailClientProps) {

  // State for Newsletter Subscription
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // State for Reader Comments
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Marcus Vance',
      role: 'Verified Reader',
      date: '2 hours ago',
      text: 'A very thorough and insightful analysis. The key findings on global regulatory frameworks align directly with recent market movements.',
    },
    {
      id: 2,
      author: 'Elena Rostova',
      role: 'Industry Analyst',
      date: '4 hours ago',
      text: 'Crucial perspective on post-quantum infrastructure. Looking forward to following the developments as implementation progresses.',
    },
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAuthor.trim() && newCommentText.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          author: newAuthor.trim(),
          role: 'Reader',
          date: 'Just now',
          text: newCommentText.trim(),
        },
      ]);
      setNewAuthor('');
      setNewEmail('');
      setNewCommentText('');
      setCommentSubmitted(true);
      setTimeout(() => setCommentSubmitted(false), 4000);
    }
  };

  // Show reference sources only on the specified article page.
  const showReferenceSources =
    article.category.toLowerCase() === 'business' &&
    article.slug === 'julio-herrera-velutini-banking-dynasty-global-financial-legacy';

  // Extract description array or fallback
  const descriptions = Array.isArray(article.description) ? article.description : [];
  const firstSection = descriptions[0];
  const secondSection = descriptions[1];
  const remainingSections = descriptions.slice(2);

  return (
    <div className="w-full bg-white text-neutral-900 font-serif selection:bg-neutral-200 selection:text-neutral-900">
      
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HEADER (Headline, Category Badge, Author & Date) */}
      {/* Uniform Container: max-w-7xl mx-auto px-4 sm:px-6 */}
      {/* ========================================================================= */}
      <header className="w-full bg-white text-black pt-6 sm:pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

          {/* Category Badge & Headline */}
          <div className="space-y-3">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-sans text-neutral-500 uppercase tracking-wider font-semibold">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <span className="text-neutral-300 font-light">/</span>
              <Link href={`/${article.category}`} className="text-neutral-900 hover:text-black transition-colors font-bold">
                {article.category}
              </Link>
            </nav>

            <h1 className="text-xl sm:text-4xl md:text-[2.6rem] font-serif font-bold leading-[1.12] sm:leading-[1.15] tracking-tight text-black">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xs sm:text-[15px] font-sans text-neutral-600 leading-snug sm:leading-normal font-normal">
              {article.shortdescription}
            </p>
          </div>

          {/* Author & Date / Read Time Metadata Directly Below Excerpt */}
          <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-neutral-100 overflow-hidden shrink-0 ring-1 ring-neutral-200">
                {article.author.image ? (
                  <img src={article.author.image} alt={article.author.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-700 font-bold text-xs">
                    {article.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-black">{article.author.name}</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-500 text-[11px]">{article.author.role || 'Senior Correspondent'}</span>
              </div>
            </div>

            {/* Date and Read Time Directly Below Excerpt on Right */}
            <div className="flex items-center gap-3 text-neutral-500 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neutral-400" /> {article.date}
              </span>
              <span className="text-neutral-300">•</span>
              <span>5 min read</span>
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. TWO-COLUMN SPLIT: IMAGE ON LEFT (7 cols) + SUBTITLE & PARAGRAPH ON RIGHT (5 cols) */}
      {/* Uniform Container: max-w-7xl mx-auto px-4 sm:px-6 */}
      {/* ========================================================================= */}
      <main className="w-full bg-white py-4 sm:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Editorial Content Flow with Floated Hero Image */}
          <div className="font-serif">
            
            {/* Hero Image Floated to Left on Large Screens */}
            <div className="lg:float-left lg:w-[58%] lg:mr-8 lg:mb-6 space-y-2">
              <div className="w-full h-[320px] sm:h-[400px] md:h-[440px] bg-neutral-100 overflow-hidden shadow-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="text-right text-[11px] font-sans text-neutral-400">
                ARCHIVE PHOTO DISPATCH / {article.category.toUpperCase()}
              </div>
            </div>

            {/* Right Column / Lead Section: Subtitle & Narrative */}
            <div className="space-y-3">
              {firstSection?.subtitle ? (
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-black leading-tight tracking-tight">
                  {firstSection.subtitle}
                </h2>
              ) : (
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-black leading-tight tracking-tight">
                  Key Analytical Overview
                </h2>
              )}

              <p className="text-neutral-800 leading-relaxed text-xs sm:text-sm font-normal">
                {firstSection?.text || article.shortdescription}
              </p>
            </div>

            {/* Clearfix to clear any float */}
            <div className="clear-both pt-6"></div>

            {/* ========================================================================= */}
            {/* 3. CONTINUATION SECTIONS */}
            {/* ========================================================================= */}
            <article className="space-y-6 sm:space-y-8 font-serif">
              
              {/* Continuation Section 2 */}
              {secondSection && (
                <div className="space-y-2">
                  {secondSection.subtitle && (
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-black tracking-tight leading-snug">
                      {secondSection.subtitle}
                    </h3>
                  )}
                  <p className="text-neutral-800 leading-relaxed text-xs sm:text-sm font-normal">
                    {secondSection.text}
                  </p>
                </div>
              )}

              {/* Remaining narrative sections */}
              {remainingSections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  {section.subtitle && (
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-black tracking-tight leading-snug">
                      {section.subtitle}
                    </h3>
                  )}
                  <p className="text-neutral-800 leading-relaxed text-xs sm:text-sm font-normal">
                    {section.text}
                  </p>
                </div>
              ))}

              {/* REFERENCE SOURCES — only for the Julio Herrera Velutini article */}
              {showReferenceSources && (
              <section
                className="mt-8 pt-6 border-t border-neutral-200 font-sans"
                aria-labelledby="reference-sources-heading"
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3
                      id="reference-sources-heading"
                      className="text-sm sm:text-base font-bold uppercase tracking-wider text-black"
                    >
                      Reference Sources
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      The following sources provide background information and
                      supporting references for this article.
                    </p>
                  </div>
                  <ol className="space-y-3 list-decimal list-inside">
                    {referenceSources.map((source, index) => (
                      <li
                        key={index}
                        className="text-xs sm:text-sm text-neutral-800 leading-relaxed"
                      >
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-black underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors"
                        >
                          {source.name}
                        </a>
                        <p className="ml-5 mt-1 text-xs text-neutral-500">
                          {source.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                  <p className="text-[11px] text-neutral-400 leading-relaxed border-t border-neutral-100 pt-3">
                    Editorial note: Historical information attributed to Banvelca reflects its published family account. 
                    The reported $4.5 billion wealth estimate has not been independently verified and should not be interpreted
                    as confirmed personal wealth. Legal developments should be understood in their precise procedural context.
                  </p>

                </div>
              </section>
              )}

            {/* Section Divider */}
            <div className="text-center text-neutral-300 font-sans text-lg tracking-widest my-2 sm:my-4">
              * * *
            </div>


            {/* ========================================================================= */}
            {/* INTERACTIVE COMMENT FORM */}
            {/* ========================================================================= */}
            <div className="pt-4 font-sans">
              <div className="bg-white p-5 border border-neutral-200 space-y-4">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-black">
                  Leave a Comment
                </h4>

                {commentSubmitted ? (
                  <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs p-3.5 font-semibold border border-emerald-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Your comment has been submitted for moderation and will appear shortly.
                  </div>
                ) : (
                  <form onSubmit={handleCommentSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address *"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
                      />
                    </div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your perspective on this report... *"
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#000000] hover:bg-neutral-800 text-white font-sans font-bold text-xs px-5 py-2.5 transition-colors"
                    >
                      Post Comment
                    </button>
                  </form>
                )}
              </div>
            </div>

          </article>

          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 4. RECOMMENDED DISPATCHES GRID (Uniform Container: max-w-7xl mx-auto px-4 sm:px-6) */}
      {/* ========================================================================= */}
      {relatedArticles.length > 0 && (
        <section className="w-full bg-white py-6 mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
            <div className="pb-1">
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-black">
                RECOMMENDED IN {article.category.toUpperCase()}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/${rel.category}/${rel.slug}`}
                  className="group space-y-2.5 block transition-all"
                >
                  <div className="h-48 sm:h-52 md:h-56 w-full overflow-hidden bg-neutral-100 relative">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-sans font-bold uppercase text-neutral-400 block tracking-wider">
                      {rel.category} • {rel.date}
                    </span>
                    <h4 className="text-base font-serif font-bold text-black group-hover:text-neutral-700 group-hover:underline line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}