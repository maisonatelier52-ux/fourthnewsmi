'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronLeft, ChevronRight, Mail, Zap, CloudSun } from 'lucide-react';
import SearchModal from './SearchModal';
import { Article } from '@/lib/newsData';

interface NavbarProps {
  articles?: Article[];
}

const DEFAULT_TRENDING = [
  {
    num: '01',
    category: 'world',
    text: 'The US Has Made Progress in Reopening the Strait of Hormuz, but the Iran War Is Far from Over',
    href: '/world/us-progress-reopening-strait-of-hormuz-iran-war-far-from-over',
  },
  {
    num: '02',
    category: 'business',
    text: 'US Diesel Prices Soar Past $6 a Gallon, Deepening Strain for Hauling Everyday Goods',
    href: '/business/us-diesel-prices-soar-past-6-dollar-gallon-hauling-everyday-goods',
  },
  {
    num: '03',
    category: 'finance',
    text: 'US Futures Up, Oil Prices Down Ahead of One of the More Crucial Reads on Inflation in Years',
    href: '/finance/us-futures-up-oil-prices-down-crucial-inflation-read-finance',
  },
  {
    num: '04',
    category: 'us',
    text: 'Trial Remains Elusive for Purported Mastermind Accused of Plotting 9/11 Attacks',
    href: '/us/trial-remains-elusive-911-mastermind-khalid-sheikh-mohammed',
  },
];

export default function Navbar({ articles = [] }: NavbarProps) {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [trendIndex, setTrendIndex] = useState(0);

  useEffect(() => {
    const fmt: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    setCurrentDate(new Date().toLocaleDateString('en-US', fmt));

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/world', label: 'WORLD' },
    { href: '/business', label: 'BUSINESS' },
    { href: '/finance', label: 'FINANCE' },
    { href: '/us', label: 'U.S. NEWS' },
  ];

  // Get the first article from each category: world, business, finance, us
  const categories = ['world', 'business', 'finance', 'us'];
  const trendingStories = categories.map((cat, idx) => {
    const art = articles.find((a) => a.category?.toLowerCase() === cat);
    if (art) {
      return {
        num: `0${idx + 1}`,
        category: art.category,
        text: art.title,
        href: `/${art.category}/${art.slug}`,
      };
    }
    return DEFAULT_TRENDING[idx];
  });

  const visibleStories = [0, 1, 2].map(
    (offset) => trendingStories[(trendIndex + offset) % trendingStories.length]
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP UTILITY BAR (Non-sticky: scrolls away naturally with page) */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-[11px] tracking-wide font-sans">
          
          {/* Left: Date · Weather */}
          <div className="flex items-center gap-3.5 text-neutral-300">
            <span className="font-normal">{currentDate || 'Wednesday, May 28, 2025'}</span>
            <span className="text-neutral-600 font-light hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-neutral-300">
              <CloudSun className="w-3.5 h-3.5 text-amber-400" />
              <span>22°C</span>
            </div>
          </div>

          {/* Right: Quick Links · Subscribe (Gold) · Social Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-neutral-300 font-medium">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/advertising-and-sponsored-policy" className="hover:text-white transition-colors">Advertise</Link>
              <a href="#footer-newsletter" className="text-[#c59b27] hover:text-[#e0b545] font-semibold transition-colors">
                Subscribe
              </a>
            </div>

            <span className="text-neutral-600 font-light hidden md:inline">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 text-neutral-300">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors font-bold text-[12px]">f</a>
              <a href="#" aria-label="Twitter / X" className="hover:text-white transition-colors font-bold text-[12px]">𝕏</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors font-bold text-[11px]">in</a>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2 & 3. STICKY HEADER (Masthead + Category Nav - Sticks for entire page!)   */}
      {/* ========================================================================= */}
      <header className="w-full sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-xs font-sans text-neutral-900">
        
        {/* Masthead */}
        <div className="w-full bg-white border-b border-neutral-100 py-3 sm:py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex items-center justify-between min-h-[44px]">
            
            {/* Left: Menu & Search Icon Controls (Flush Left) */}
            <div className="flex items-center gap-2 sm:gap-3 text-neutral-900 z-10">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1 text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer"
                aria-label="Open search"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
              </button>
            </div>

            {/* Center: GAZETTA Brand Masthead & Subtitle (Absolute Centered) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-auto">
              <Link href="/" className="inline-block group">
                <span className="font-editorial-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-[0.14em] uppercase text-black block leading-none transition-opacity group-hover:opacity-85">
                  GAZETTA
                </span>
              </Link>
              <p className="mt-0.5 sm:mt-1 text-[7.5px] sm:text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-[0.28em] sm:tracking-[0.32em] text-[#c59b27] whitespace-nowrap">
                NEWS. PERSPECTIVES. IMPACT.
              </p>
            </div>

            {/* Right Spacer for Layout Symmetry */}
            <div className="w-14 sm:w-20 z-10 pointer-events-none" />

          </div>
        </div>

        {/* Category Navigation Bar */}
        <nav className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            
            {/* Nav Links */}
            <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar py-0">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={`${link.label}-${idx}`}
                    href={link.href}
                    className={`py-2.5 sm:py-3 ${idx === 0 ? 'pl-0 pr-2 sm:pr-3' : 'px-2 sm:px-3'} text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.1em] transition-all relative shrink-0 ${
                      isActive
                        ? 'text-neutral-950'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#c59b27]" />
                    )}
                  </Link>
                );
              })}
            </div>

          </div>
        </nav>

        {/* Mobile Drawer inside sticky header */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-4 space-y-3 shadow-lg">
            <div className="divide-y divide-neutral-100">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-xs font-sans uppercase tracking-widest font-bold text-neutral-800 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-sans">
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black">About</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black">Contact</Link>
              <Link href="/editorial-policy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black">Ethics</Link>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black">FAQ</Link>
            </div>
          </div>
        )}

      </header>

      {/* ========================================================================= */}
      {/* 4. TRENDING NOW BAR (Non-sticky: scrolls away naturally with page body)   */}
      {/* ========================================================================= */}
      <div className="w-full bg-white border-b border-neutral-200 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-stretch">
          
          {/* Black Label Box with Gold Lightning Bolt & Text (Icon-only on mobile) */}
          <div className="bg-[#000000] text-[#c59b27] px-3 sm:px-6 py-2.5 flex items-center gap-2 shrink-0">
            <Zap className="w-3.5 h-3.5 fill-[#c59b27] text-[#c59b27]" />
            <span className="hidden sm:inline font-sans font-bold text-[11px] uppercase tracking-widest text-[#c59b27] whitespace-nowrap">
              TRENDING NOW
            </span>
          </div>

          {/* Stories List */}
          <div className="flex-1 flex items-center overflow-hidden px-4 sm:px-6">
            <div className="w-full flex items-center justify-between divide-x divide-neutral-200">
              {visibleStories.map((story, i) => (
                <Link
                  key={story.num + story.text}
                  href={story.href}
                  className={`flex items-center gap-3 px-4 flex-1 min-w-0 cursor-pointer group ${
                    i === 0 ? 'pl-0' : ''
                  } ${i > 0 ? 'hidden md:flex' : 'flex'}`}
                >
                  <span className="font-editorial-serif italic text-neutral-800 font-bold text-sm shrink-0">
                    {story.num}
                  </span>
                  <p className="font-sans text-[12px] text-neutral-800 group-hover:text-[#c59b27] font-medium truncate transition-colors">
                    {story.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Previous / Next Arrow Controls (Flush Right) */}
          <div className="flex items-center gap-1.5 pl-3 border-l border-neutral-200 shrink-0">
            <button
              onClick={() => setTrendIndex((prev) => (prev - 1 + trendingStories.length) % trendingStories.length)}
              className="w-7 h-7 border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTrendIndex((prev) => (prev + 1) % trendingStories.length)}
              className="w-7 h-7 border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
      />
    </>
  );
}
