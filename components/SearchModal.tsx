'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, Sparkles, Clock, Tag } from 'lucide-react';
import { Article } from '@/lib/newsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
}

export default function SearchModal({ isOpen, onClose, articles }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = articles.filter((a) => {
    const q = query.toLowerCase();
    const match =
      a.title.toLowerCase().includes(q) ||
      a.shortdescription.toLowerCase().includes(q) ||
      a.author.name.toLowerCase().includes(q);
    return match && (selectedCategory === 'all' || a.category === selectedCategory);
  });

  const categories = ['all', 'world', 'business', 'technology', 'entertainment', 'us'];
  const catLabel = (c: string) =>
    c === 'all' ? 'All' : c === 'us' ? 'Sports' : c.charAt(0).toUpperCase() + c.slice(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/50 backdrop-blur-xs transition-opacity"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-2xl bg-white border border-neutral-200 shadow-2xl flex flex-col max-h-[80vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-200 bg-white">
          <Search className="w-4 h-4 text-neutral-600 shrink-0" />
          <input
            type="text"
            placeholder="Search articles, topics, authors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent font-editorial-serif text-lg text-neutral-950 placeholder:text-neutral-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 px-5 py-2.5 bg-neutral-50 border-b border-neutral-200 overflow-x-auto no-scrollbar">
          <span className="font-sans text-[11px] uppercase tracking-wider text-neutral-400 shrink-0 flex items-center gap-1 mr-1 font-semibold">
            <Tag className="w-3 h-3" /> Section:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider shrink-0 transition-colors border ${
                selectedCategory === cat
                  ? 'bg-neutral-950 text-white border-neutral-950'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-950'
              }`}
            >
              {catLabel(cat)}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1 divide-y divide-neutral-100">
          {filtered.length > 0 ? (
            filtered.map((art) => (
              <Link
                key={`${art.category}-${art.slug}`}
                href={`/${art.category}/${art.slug}`}
                onClick={onClose}
                className="group flex gap-4 px-5 py-4 hover:bg-neutral-50 transition-colors"
              >
                <div className="w-20 h-16 shrink-0 overflow-hidden bg-neutral-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 px-1.5 py-0.5 rounded-xs">
                      {catLabel(art.category)}
                    </span>
                    <span className="font-sans text-[10px] text-neutral-400 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> {art.date}
                    </span>
                  </div>
                  <h4 className="font-editorial-serif font-bold text-neutral-950 text-sm leading-snug group-hover:underline transition-colors line-clamp-2">
                    {art.title}
                  </h4>
                  <p className="font-sans text-xs text-neutral-500 mt-0.5 line-clamp-1">
                    {art.shortdescription}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all shrink-0 self-center" />
              </Link>
            ))
          ) : (
            <div className="py-14 text-center">
              <Sparkles className="w-7 h-7 mx-auto mb-2 text-neutral-300" />
              <p className="font-editorial-serif text-base font-bold text-neutral-800">
                No results for &quot;{query}&quot;
              </p>
              <p className="font-sans text-xs text-neutral-400 mt-1">
                Try searching for another section or keyword
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-neutral-200 bg-neutral-50 flex justify-between items-center font-sans text-[11px] text-neutral-400">
          <span>{filtered.length} matching {filtered.length === 1 ? 'story' : 'stories'}</span>
          <span>Press <kbd className="bg-white border border-neutral-200 px-1.5 py-0.5 text-[10px] rounded">ESC</kbd> to close</span>
        </div>

      </div>
    </div>
  );
}
