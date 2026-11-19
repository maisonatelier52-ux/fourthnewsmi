import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllAuthors, getAllArticles, Article, Author, SITE_URL, SITE_NAME } from '@/lib/newsData';
import { Mail, FileText, ArrowRight, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Editorial Team & Correspondents',
  description:
    'Meet the journalists, analysts, and financial correspondents behind FiscalFusion — committed to independent, rigorous reporting across global markets.',
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: `Our Editorial Team | ${SITE_NAME}`,
    description: 'Meet the journalists, analysts, and correspondents behind FiscalFusion.',
    url: `${SITE_URL}/team`,
    siteName: SITE_NAME,
  },
};

/* ─────────────────────────────────────────────
   Category badge colour map
───────────────────────────────────────────── */
const CATEGORY_COLORS: Record<string, string> = {
  business: 'bg-blue-50 text-blue-700 border border-blue-200',
  finance: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  us: 'bg-amber-50 text-amber-700 border border-amber-200',
  world: 'bg-violet-50 text-violet-700 border border-violet-200',
};

/* ─────────────────────────────────────────────
   AuthorCard sub-component
───────────────────────────────────────────── */
function AuthorCard({
  author,
  articleCount,
  categories,
  latestArticle,
}: {
  author: Author;
  articleCount: number;
  categories: string[];
  latestArticle: Article | null;
}) {
  return (
    <Link
      href={`/author/${author.slug}`}
      className="group relative bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
      aria-label={`View profile of ${author.name}`}
    >
      {/* Top section: Photo + name */}
      <div className="p-6 pb-4 flex items-start gap-5">
        <div className="relative shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-neutral-100 border-2 border-neutral-200 group-hover:border-neutral-400 transition-colors duration-300">
            <img
              src={author.image}
              alt={author.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Article count badge */}
          <span className="absolute -bottom-1 -right-1 w-7 h-7 bg-black text-white text-[10px] font-bold font-sans flex items-center justify-center rounded-full border-2 border-white">
            {articleCount}
          </span>
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <h2 className="font-editorial-serif text-xl sm:text-2xl font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">
            {author.name}
          </h2>
          <p className="text-xs font-sans font-semibold uppercase tracking-wider text-[#c59b27]">
            {author.role}
          </p>
          <div className="flex items-center gap-1.5 text-xs font-sans text-neutral-400 pt-1">
            <Mail className="w-3.5 h-3.5" />
            <span className="truncate">{author.email}</span>
          </div>
        </div>
      </div>

      {/* Middle section: Bio */}
      <div className="px-6 pb-4 flex-1">
        <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed line-clamp-3">
          {author.bio}
        </p>
      </div>

      {/* Categories covered */}
      <div className="px-6 pb-4 flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <span
            key={cat}
            className={`text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 ${
              CATEGORY_COLORS[cat] ?? 'bg-neutral-50 text-neutral-600 border border-neutral-200'
            }`}
          >
            {cat === 'us' ? 'U.S. News' : cat}
          </span>
        ))}
      </div>

      {/* Bottom section: Latest dispatch */}
      {latestArticle && (
        <div className="px-6 py-3 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs font-sans">
          <div className="flex-1 min-w-0 pr-3">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
              Latest Report
            </span>
            <span className="text-neutral-800 font-medium truncate block font-editorial-serif">
              {latestArticle.title}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-1 transition-all shrink-0" />
        </div>
      )}
    </Link>
  );
}

/* ─────────────────────────────────────────────
   Main Team Page Component
───────────────────────────────────────────── */
export default async function TeamPage() {
  const [authors, allArticles] = await Promise.all([
    getAllAuthors(),
    getAllArticles(),
  ]);

  const authorStats = authors.map((author) => {
    const authored = allArticles.filter(
      (a) => a.author?.slug?.toLowerCase() === author.slug.toLowerCase()
    );
    const categories = [...new Set(authored.map((a) => a.category))];
    return {
      author,
      articleCount: authored.length,
      categories,
      latestArticle: authored[0] ?? null,
    };
  });

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={allArticles} />

      {/* ─── PAGE HEADER ─── */}
      <header className="w-full bg-white border-b border-neutral-200 pt-10 sm:pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <Users className="w-3.5 h-3.5" />
            <span>FISCALFUSION</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">OUR TEAM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-black leading-[1.05]">
            Our Editorial Team
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            World-class journalists and analysts committed to independent, rigorous, and fearless reporting
            across finance, business, geopolitics, and U.S. economic affairs.
          </p>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 w-full py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-neutral-400">
              Editorial Staff &amp; Correspondents
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* Author cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
            {authorStats.map(({ author, articleCount, categories, latestArticle }) => (
              <AuthorCard
                key={author.slug}
                author={author}
                articleCount={articleCount}
                categories={categories}
                latestArticle={latestArticle}
              />
            ))}
          </div>

          {/* Editorial commitment note */}
          <div className="mt-14 bg-neutral-950 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0 w-12 h-12 border border-[#c59b27] flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#c59b27]" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-editorial-serif text-xl sm:text-2xl font-bold text-white">
                Our Editorial Commitment
              </h3>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-2xl">
                Every story published on FiscalFusion has been independently reported, fact-checked by at least
                two senior editors, and reviewed against our strict conflicts-of-interest policy. Our
                reporters operate free from commercial, political, or institutional influence.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
