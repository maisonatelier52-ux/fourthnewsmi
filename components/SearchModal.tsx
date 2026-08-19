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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = articles.filter((art) => {
    const matchesQuery =
      art.title.toLowerCase().includes(query.toLowerCase()) ||
      art.shortdescription.toLowerCase().includes(query.toLowerCase()) ||
      art.author.name.toLowerCase().includes(query.toLowerCase());
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/40 backdrop-blur-md transition-opacity">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200 flex flex-col max-h-[85vh]">
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            type="text"
            placeholder="Search articles, authors, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 text-lg font-medium placeholder:text-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pill Filters */}
        <div className="px-6 py-3 bg-slate-50/70 border-b border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1 shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3" /> Filter:
          </span>
          {['all', 'business', 'technology', 'entertainment', 'us', 'world'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors capitalize shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200/60'
              }`}
            >
              {cat === 'all' ? 'All Topics' : cat}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((art) => (
              <Link
                key={`${art.category}-${art.slug}`}
                href={`/${art.category}/${art.slug}`}
                onClick={onClose}
                className="group flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
              >
                <div className="relative w-full sm:w-28 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-600 rounded-md">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.date}
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-semibold text-base group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {art.title}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1 line-clamp-2 leading-relaxed">
                    {art.shortdescription}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all shrink-0 self-center hidden sm:block" />
              </Link>
            ))
          ) : (
            <div className="py-12 text-center text-slate-400">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-medium text-slate-600">No articles found matching &quot;{query}&quot;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for keywords like AI, markets, quantum, or sports</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
          <span>Showing {filteredArticles.length} matching stories</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
