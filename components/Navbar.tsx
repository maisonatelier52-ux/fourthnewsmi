'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Bookmark } from 'lucide-react';
import SearchModal from './SearchModal';
import { Article } from '@/lib/newsData';

interface NavbarProps {
  articles?: Article[];
}

export default function Navbar({ articles = [] }: NavbarProps) {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      };
      setCurrentDate(now.toLocaleDateString('en-US', options));
    };
    updateDate();

    const updateBookmarks = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('aura_bookmarks') || '[]');
        setSavedCount(saved.length);
      } catch {
        setSavedCount(0);
      }
    };
    updateBookmarks();
    window.addEventListener('storage', updateBookmarks);
    return () => window.removeEventListener('storage', updateBookmarks);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/world', label: 'WORLD NEWS' },
    { href: '/business', label: 'BUSINESS' },
    { href: '/entertainment', label: 'ENTERTAINMENT' },
    { href: '/technology', label: 'TECHNOLOGY' },
    { href: '/us', label: 'SPORTS' },
  ];

  return (
    <>
      <header className="w-full bg-slate-950 font-sans text-white border-b border-slate-800">
        
        {/* Main Dark Brand Masthead */}
        <div className="bg-slate-950 border-b border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Top Left Date - Perfectly Aligned */}
            <div className="w-full md:w-1/4 text-center md:text-left text-slate-400 text-xs sm:text-sm font-serif italic">
              {currentDate || 'Tuesday, August 18, 2026'}
            </div>

            {/* Center Brand Title Logo */}
            <div className="w-full md:w-2/4 text-center">
              <Link href="/" className="inline-block group">
                <span className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-none text-white">
                  <span className="text-blue-500 group-hover:text-blue-400 transition-colors">Domain</span>
                  <span className="text-slate-200 font-serif italic group-hover:text-white transition-colors"> Name</span>
                </span>
              </Link>
            </div>

            {/* Right Spacer / Balance Div for Desktop */}
            <div className="w-full md:w-1/4 hidden md:block" />

          </div>
        </div>

        {/* Unified Dark Category Navigation Bar - Perfectly Aligned Left and Right */}
        <nav className="bg-slate-950 py-1.5 relative z-10 block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            
            {/* Left Category Nav Links (First item has 0 left margin for 100% exact vertical line alignment) */}
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto scrollbar-none py-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-1.5 text-xs font-sans uppercase tracking-widest transition-all shrink-0 font-bold border-b-2 ${
                      index === 0 ? 'pr-3.5 pl-0' : 'px-3.5'
                    } ${
                      isActive
                        ? 'text-white border-blue-500'
                        : 'text-slate-400 hover:text-white border-transparent hover:border-slate-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Search Input Box & Saved Bookmarks (Ends flush at the exact right margin line) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <div className="relative w-44">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-8 py-1 text-xs border border-slate-800 rounded bg-slate-900/90 text-slate-200 placeholder-slate-500 focus:bg-slate-900 focus:border-blue-500 focus:outline-none transition-all font-sans"
                />
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="absolute right-2.5 top-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Open search"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>

              {savedCount > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                  <Bookmark className="w-3 h-3 fill-current" /> {savedCount}
                </span>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white md:hidden ml-auto"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 text-white p-4 space-y-3">
            {/* Mobile Search Bar */}
            <div className="relative w-full mb-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-8 py-1.5 text-xs border border-slate-800 rounded bg-slate-950 text-slate-200 placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setIsSearchOpen(true)}
                className="absolute right-2.5 top-2 text-slate-400"
                aria-label="Open search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-xs font-bold uppercase transition-colors ${
                  pathname === link.href
                    ? 'text-blue-400 font-extrabold border-l-2 border-blue-500 pl-3'
                    : 'hover:bg-slate-800 text-slate-300 pl-3'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

      </header>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
      />
    </>
  );
}
