'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowUp, Rss, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="footer-newsletter" className="w-full bg-white mt-16 font-sans text-sm text-neutral-900">

      {/* ================================================================= */}
      {/* 1. NEWSLETTER SECTION ─ Bounded Strictly within Content Container */}
      {/* ================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Classic Editorial Double Rule Border */}
        <div className="border-t-2 border-black pt-1">
          <div className="border-t border-neutral-200" />
        </div>

        <div className="bg-neutral-50/60 border border-neutral-200/90 p-6 sm:p-10 lg:p-12 my-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Editorial Messaging */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-sans font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-[#c59b27]" />
                <span>DAILY BRIEFING</span>
              </div>
              
              <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-neutral-950 leading-[1.15] tracking-tight">
                Essential journalism, delivered daily.
              </h2>
              
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
                A curated morning digest of the day&apos;s most consequential reporting across world affairs, business, culture, and technology.
              </p>

              {/* Feature Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-neutral-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  Curated by Senior Editors
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  Delivered at 6:00 AM EST
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  Free &amp; Ad-Light
                </span>
              </div>
            </div>

            {/* Right: Refined Subscription Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-7 border border-neutral-200/90 shadow-sm space-y-4">
                <div className="space-y-1">
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-900">
                    Get Morning Dispatch
                  </h3>
                  <p className="font-sans text-xs text-neutral-500">
                    Join over 120,000+ decision makers and readers worldwide.
                  </p>
                </div>

                {subscribed ? (
                  <div className="flex items-start gap-3 bg-neutral-50 border border-neutral-200 p-4">
                    <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-editorial-serif text-sm font-bold text-neutral-950">You are subscribed!</p>
                      <p className="font-sans text-xs text-neutral-600 mt-0.5">Your first daily briefing will arrive tomorrow morning.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-300 font-sans text-xs text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-black text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Subscribe Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center justify-between text-[11px] font-sans text-neutral-400 pt-1">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-neutral-500" />
                        Zero spam. Unsubscribe anytime.
                      </span>
                      <Link href="/privacy-policy" className="hover:text-neutral-700 underline">
                        Privacy
                      </Link>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Double Rule Border */}
        <div className="border-t border-neutral-200 pt-1">
          <div className="border-t-2 border-black" />
        </div>

      </div>

      {/* ================================================================= */}
      {/* 2. DIRECTORY ─ Clean Minimal 4-Column Grid                         */}
      {/* ================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Logo Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-neutral-200">
          <div>
            <Link href="/" className="inline-block group">
              <span className="font-editorial-serif font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-none group-hover:opacity-75 transition">
                Domain Name
              </span>
            </Link>
            <p className="font-sans text-xs text-neutral-500 mt-1">
              Independent · Rigorous · Unbiased
            </p>
          </div>
          {/* Social Icons with Clean SVGs */}
          <div className="flex items-center gap-3 text-neutral-700">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black hover:text-black transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter / X" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black hover:text-black transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black hover:text-black transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black hover:text-black transition-colors">
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            {/* RSS */}
            <a href="#" aria-label="RSS Feed" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black hover:text-black transition-colors">
              <Rss className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Sections */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-neutral-950 mb-3">
              Sections
            </h4>
            <ul className="space-y-2 font-sans text-xs text-neutral-600">
              <li><Link href="/world" className="hover:text-neutral-950 transition-colors">World</Link></li>
              <li><Link href="/business" className="hover:text-neutral-950 transition-colors">Business</Link></li>
              <li><Link href="/technology" className="hover:text-neutral-950 transition-colors">Technology</Link></li>
              <li><Link href="/entertainment" className="hover:text-neutral-950 transition-colors">Entertainment</Link></li>
              <li><Link href="/us" className="hover:text-neutral-950 transition-colors">U.S. News</Link></li>
            </ul>
          </div>

          {/* The Journal */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-neutral-950 mb-3">
              The Journal
            </h4>
            <ul className="space-y-2 font-sans text-xs text-neutral-600">
              <li><Link href="/about" className="hover:text-neutral-950 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-950 transition-colors">Newsroom Contact</Link></li>
              <li><Link href="/ownership-and-funding" className="hover:text-neutral-950 transition-colors">Ownership &amp; Funding</Link></li>
              <li><Link href="/advertising-and-sponsored-policy" className="hover:text-neutral-950 transition-colors">Advertising</Link></li>
              <li><Link href="/legal" className="hover:text-neutral-950 transition-colors">Legal</Link></li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-neutral-950 mb-3">
              Standards
            </h4>
            <ul className="space-y-2 font-sans text-xs text-neutral-600">
              <li><Link href="/editorial-policy" className="hover:text-neutral-950 transition-colors">Editorial Ethics</Link></li>
              <li><Link href="/source-methodology" className="hover:text-neutral-950 transition-colors">Source Methodology</Link></li>
              <li><Link href="/right-of-reply-policy" className="hover:text-neutral-950 transition-colors">Right of Reply</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-neutral-950 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-neutral-950 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-neutral-950 mb-3">
              Services
            </h4>
            <ul className="space-y-2 font-sans text-xs text-neutral-600">
              <li><Link href="/faq" className="hover:text-neutral-950 transition-colors">Help &amp; FAQ</Link></li>
              <li><a href="#footer-newsletter" className="hover:text-neutral-950 transition-colors">Newsletters</a></li>
              <li><Link href="/about" className="hover:text-neutral-950 transition-colors">Archive</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-950 transition-colors">Press Inquiries</Link></li>
            </ul>
          </div>

        </div>

        {/* Colophon / Copyright */}
        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-xs">
          <p>
            © {new Date().getFullYear()} Domain Name Media Group. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-950 border border-neutral-300 hover:border-neutral-900 px-3 py-1.5 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </button>
        </div>

      </div>
    </footer>
  );
}
