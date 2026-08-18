'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/world', label: 'WORLD NEWS' },
    { href: '/business', label: 'BUSINESS' },
    { href: '/entertainment', label: 'ENTERTAINMENT' },
    { href: '/technology', label: 'TECHNOLOGY' },
    { href: '/us', label: 'SPORTS' },
  ];

  return (
    <footer className="w-full bg-slate-950 text-white border-t border-slate-800 mt-16 font-sans text-xs">
      
      {/* Top Footer Brand Masthead (Matching Header Section Design) */}
      <div className="bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
                <span className="text-blue-500 group-hover:text-blue-400 transition-colors">Domain</span>
                <span className="text-slate-200 font-serif italic group-hover:text-white transition-colors"> Name</span>
              </span>
            </Link>
            <p className="text-[11px] text-slate-400 font-serif italic mt-1.5">
              Independent Global News & Contemporary Editorial Dispatches
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <span className="text-emerald-400 font-semibold text-xs bg-slate-900 px-4 py-2 border border-slate-800 block text-center">
                ✓ Subscribed to Daily Briefings!
              </span>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email for daily news..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2 bg-slate-900 border border-slate-800 text-slate-200 text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500 min-w-[220px]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Directory Columns matching user requested structure using our site's exact font */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Column 1: CATEGORIES */}
          <div>
            <h4 className="font-sans font-bold text-slate-400 uppercase text-xs mb-4 tracking-widest border-b border-slate-800/80 pb-2">
              CATEGORIES
            </h4>
            <ul className="space-y-2.5 font-sans font-bold text-white text-xs">
              <li>
                <Link href="/world" className="hover:text-blue-400 transition-colors block">
                  World News
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-blue-400 transition-colors block">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-blue-400 transition-colors block">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/entertainment" className="hover:text-blue-400 transition-colors block">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link href="/us" className="hover:text-blue-400 transition-colors block">
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h4 className="font-sans font-bold text-slate-400 uppercase text-xs mb-4 tracking-widest border-b border-slate-800/80 pb-2">
              COMPANY
            </h4>
            <ul className="space-y-2.5 font-sans font-bold text-white text-xs">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-blue-400 transition-colors block">
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-blue-400 transition-colors block">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/ownership-and-funding" className="hover:text-blue-400 transition-colors block">
                  Ownership & Funding
                </Link>
              </li>
              <li>
                <Link href="/right-of-reply-policy" className="hover:text-blue-400 transition-colors block">
                  Right of Reply Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: POLICIES */}
          <div>
            <h4 className="font-sans font-bold text-slate-400 uppercase text-xs mb-4 tracking-widest border-b border-slate-800/80 pb-2">
              POLICIES
            </h4>
            <ul className="space-y-2.5 font-sans font-bold text-white text-xs">
              <li>
                <Link href="/editorial-policy" className="hover:text-blue-400 transition-colors block">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/source-methodology" className="hover:text-blue-400 transition-colors block">
                  Source Methodology
                </Link>
              </li>
              <li>
                <Link href="/advertising-and-sponsored-policy" className="hover:text-blue-400 transition-colors block">
                  Advertising & Sponsored Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors block">
                  Faq
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>© {new Date().getFullYear()} Domain Name Media Group. All rights reserved.</p>
          <div className="flex items-center gap-4 font-sans font-medium">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/editorial-policy" className="hover:text-slate-300 transition-colors">Editorial Ethics</Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
