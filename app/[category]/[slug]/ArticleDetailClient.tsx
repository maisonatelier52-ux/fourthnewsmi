'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Send, CheckCircle } from 'lucide-react';
import { Article } from '@/lib/newsData';

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles?: Article[];
}

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

  // Extract description array or fallback
  const descriptions = Array.isArray(article.description) ? article.description : [];
  const firstSection = descriptions[0];
  const secondSection = descriptions[1];
  const remainingSections = descriptions.slice(2);

  return (
    <div className="w-full bg-white text-slate-900 font-serif selection:bg-blue-100 selection:text-blue-900">
      
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HEADER (Headline, Category Badge, Author & Date) */}
      {/* Uniform Container: max-w-6xl mx-auto px-4 sm:px-6 */}
      {/* ========================================================================= */}
      <header className="w-full bg-white text-slate-900 pt-6 sm:pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">

          {/* Category Badge & Headline */}
          <div className="space-y-3">
            <div>
              <div className="inline-block bg-[#2563eb] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1">
                {article.category}
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-[1.05] tracking-tight text-slate-950">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-base sm:text-lg font-sans text-slate-600 leading-tight font-normal">
              {article.shortdescription}
            </p>
          </div>

          {/* Author & Date / Read Time Metadata Directly Below Excerpt */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 overflow-hidden shrink-0 ring-1 ring-slate-200">
                {article.author.image ? (
                  <img src={article.author.image} alt={article.author.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-700 font-bold text-xs">
                    {article.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">{article.author.name}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 text-[11px]">{article.author.role || 'Senior Correspondent'}</span>
              </div>
            </div>

            {/* Date and Read Time Directly Below Excerpt on Right */}
            <div className="flex items-center gap-3 text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.date}
              </span>
              <span className="text-slate-300">•</span>
              <span>5 min read</span>
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. TWO-COLUMN SPLIT: IMAGE ON LEFT (7 cols) + SUBTITLE & PARAGRAPH ON RIGHT (5 cols) */}
      {/* Uniform Container: max-w-6xl mx-auto px-4 sm:px-6 */}
      {/* ========================================================================= */}
      <main className="w-full bg-white py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 Cols): Hero Image */}
            <div className="lg:col-span-7 space-y-2">
              <div className="w-full h-[340px] sm:h-[420px] bg-slate-100 overflow-hidden shadow-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right text-[11px] font-sans text-slate-400">
                ARCHIVE PHOTO DISPATCH / {article.category.toUpperCase()}
              </div>
            </div>

            {/* Right Column (5 Cols): Subtitle & Narrative Paragraphs */}
            <div className="lg:col-span-5 space-y-4 font-serif">
              {firstSection?.subtitle ? (
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 leading-tight tracking-tight">
                  {firstSection.subtitle}
                </h2>
              ) : (
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 leading-tight tracking-tight">
                  Key Analytical Overview
                </h2>
              )}

              <p className="text-slate-800 leading-snug text-xs sm:text-sm font-normal">
                {firstSection?.text || article.shortdescription}
              </p>

              {secondSection && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {secondSection.subtitle && (
                    <h3 className="text-base font-serif font-bold text-slate-950">
                      {secondSection.subtitle}
                    </h3>
                  )}
                  <p className="text-slate-800 leading-snug text-xs sm:text-sm font-normal">
                    {secondSection.text}
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 3. CONTINUITY SECTION BELOW THE IMAGE SECTION */}
          {/* ========================================================================= */}
          <article className="space-y-6 max-w-6xl mx-auto pt-4 font-serif">
            
            {/* Remaining narrative sections */}
            {remainingSections.length > 0 ? (
              remainingSections.map((section, idx) => (
                <div key={idx} className="space-y-1.5">
                  {section.subtitle && (
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 pt-2 tracking-tight">
                      {section.subtitle}
                    </h3>
                  )}
                  <p className="text-slate-800 leading-snug text-xs sm:text-sm font-normal">
                    {section.text} {section.text.endsWith('.') ? '' : '.'} International correspondents and domain experts report that these advancements mark a pivotal shift in modern investigative journalism, providing comprehensive data and structural analysis for policy makers worldwide.
                  </p>
                </div>
              ))
            ) : (
              <div className="space-y-2">
                <p className="text-slate-800 leading-snug text-xs sm:text-sm font-normal">
                  Global analysts and field correspondents emphasize that these recent developments reflect broader macroeconomic and socio-political transformations across international markets.
                </p>
                <p className="text-slate-800 leading-snug text-xs sm:text-sm font-normal">
                  Key industry leaders and institutional stakeholders continue to evaluate the long-term strategic implications as new data emerges.
                </p>
              </div>
            )}

            {/* Section Divider */}
            <div className="text-center text-slate-300 font-sans text-lg tracking-widest my-4">
              * * *
            </div>

            {/* ========================================================================= */}
            {/* NEW NEWSLETTER SUBSCRIPTION BOX (Replaces Author Box) */}
            {/* ========================================================================= */}
            <div className="bg-slate-950 text-white p-6 sm:p-8 space-y-4 font-sans border-t-2 border-[#2563eb]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1 max-w-md">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2563eb] block">
                    DAILY EDITORIAL BRIEFING
                  </span>
                  <h4 className="text-xl font-serif font-bold text-white">Stay Ahead with Domain Name</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Get independent global reporting, morning dispatches, and contemporary analysis sent straight to your inbox daily.
                  </p>
                </div>

                {isSubscribed ? (
                  <div className="flex items-center gap-2 bg-blue-600/20 text-blue-300 border border-blue-500/40 px-4 py-3 text-xs font-bold font-sans shrink-0">
                    <CheckCircle className="w-4 h-4 text-blue-400" /> Thank you for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
                    <input
                      type="email"
                      required
                      placeholder="Enter email address..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="px-3.5 py-2.5 bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500 min-w-[220px]"
                    />
                    <button
                      type="submit"
                      className="bg-[#2563eb] hover:bg-blue-700 text-white font-sans font-bold text-xs px-5 py-2.5 transition-colors shrink-0 flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" /> Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ========================================================================= */}
            {/* INTERACTIVE COMMENT FORM */}
            {/* ========================================================================= */}
            <div className="pt-4 font-sans">
              <div className="bg-white p-5 border border-slate-200 space-y-4">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
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
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address *"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your perspective on this report... *"
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs px-5 py-2.5 transition-colors"
                    >
                      Post Comment
                    </button>
                  </form>
                )}
              </div>
            </div>

          </article>

        </div>
      </main>

      {/* ========================================================================= */}
      {/* 4. RECOMMENDED DISPATCHES GRID (Uniform Container: max-w-6xl mx-auto px-4 sm:px-6) */}
      {/* ========================================================================= */}
      {relatedArticles.length > 0 && (
        <section className="w-full bg-white py-6 mt-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
            <div className="pb-1">
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-900">
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
                  <div className="h-36 w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block tracking-wider">
                      {rel.category} • {rel.date}
                    </span>
                    <h4 className="text-base font-serif font-bold text-slate-900 group-hover:text-slate-700 group-hover:underline line-clamp-2 leading-snug">
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
