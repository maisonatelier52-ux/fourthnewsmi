import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllAuthors, getAllArticles, Article, Author } from '@/lib/newsData';
import { Mail, FileText, ArrowRight, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team | Gazetta',
  description:
    'Meet the journalists, analysts, and correspondents behind Gazetta — a world-class editorial team committed to independent, rigorous reporting.',
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
   AuthorCard sub-component (server component)
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

        <div className="flex-1 min-w-0">
          <h2 className="font-editorial-serif text-xl font-bold text-neutral-950 leading-tight transition-colors duration-200 truncate">
            {author.name}
          </h2>
          <p className="mt-1 text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-neutral-500 leading-snug">
            {author.role}
          </p>

          {/* Category tags */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 ${CATEGORY_COLORS[cat] ?? 'bg-neutral-100 text-neutral-600 border border-neutral-200'}`}
              >
                {cat === 'us' ? 'U.S. News' : cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-neutral-100" />

      {/* Bio */}
      <div className="px-6 py-4 flex-1">
        <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed line-clamp-3">
          {author.bio}
        </p>
      </div>

      {/* Latest article preview */}
      {latestArticle && (
        <div className="mx-6 mb-4 p-3 bg-neutral-50 border border-neutral-200 space-y-1">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400">
            Latest Story
          </span>
          <p className="text-xs font-sans font-semibold text-neutral-800 leading-snug line-clamp-2 group-hover:text-neutral-950 transition-colors">
            {latestArticle.title}
          </p>
        </div>
      )}

      {/* Footer row */}
      <div className="px-6 pb-5 flex items-center justify-between">
        <a
          href={`mailto:${author.email}`}
          className="flex items-center gap-1.5 text-[11px] font-sans text-neutral-400 hover:text-neutral-950 transition-colors"
          aria-label={`Email ${author.name}`}
        >
          <Mail className="w-3.5 h-3.5" />
          <span className="truncate max-w-[140px]">{author.email}</span>
        </a>

        <span className="flex items-center gap-1 text-[11px] font-sans font-bold text-neutral-950 transition-colors uppercase tracking-wider">
          Profile
          <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   Page component
───────────────────────────────────────────── */
export default async function TeamPage() {
  const [authors, allArticles] = await Promise.all([
    getAllAuthors(),
    getAllArticles(),
  ]);

  // Pre-compute article counts, categories, and latest article per author
  const authorStats = authors.map((author) => {
    const authored = allArticles.filter(
      (a) => a.author?.slug === author.slug
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
            <span>GAZETTA</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">OUR TEAM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-black leading-[1.05]">
            Our Editorial Team
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            World-class journalists and analysts committed to independent, rigorous, and fearless reporting
            across finance, business, geopolitics, and U.S. affairs.
          </p>


        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 w-full py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-neutral-400">
              Editorial Staff
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
                Every story published on Gazetta has been independently reported, fact-checked by at least
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
