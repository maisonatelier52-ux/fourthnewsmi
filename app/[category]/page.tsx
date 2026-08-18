import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getArticlesByCategory, getAllArticles, CATEGORIES, Article } from '@/lib/newsData';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category;

  const categoryInfo = CATEGORIES.find((c) => c.id.toLowerCase() === rawCategory.toLowerCase());
  const articles = await getArticlesByCategory(rawCategory);
  const allArticles = await getAllArticles();

  if (!categoryInfo && articles.length === 0) {
    notFound();
  }

  const categoryName = categoryInfo ? categoryInfo.name : rawCategory.toUpperCase();
  const categoryDesc = categoryInfo
    ? categoryInfo.description
    : `In-depth reporting on global affairs, international relations, climate, conflict, diplomacy and the stories that shape our planet.`;

  const featuredArticle = articles.length > 0 ? articles[0] : allArticles[0];

  // Fill moreStories to always have 6 full articles across 2 rows of 3 columns
  const rawMore = articles.filter(a => a.slug !== featuredArticle?.slug);
  const fallbackMore = allArticles.filter(a => a.slug !== featuredArticle?.slug && !rawMore.some(m => m.slug === a.slug));
  const moreStories = [...rawMore, ...fallbackMore].slice(0, 6);

  // Fill trendingArticles to always have 5 full items
  const rawTrending = articles.slice(0, 5);
  const fallbackTrending = allArticles.filter(a => !rawTrending.some(t => t.slug === a.slug));
  const trendingArticles = [...rawTrending, ...fallbackTrending].slice(0, 5);

  // Fill latestArticles to always have 6 full items
  const latestArticles = [...allArticles].reverse().slice(0, 6);

  const timeAgos = ['2h ago', '4h ago', '6h ago', '8h ago', '10h ago'];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-serif selection:bg-blue-100 selection:text-blue-900">
      <Navbar articles={allArticles} />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-6 w-full space-y-6">
        
        {/* ========================================================================= */}
        {/* CATEGORY HEADER BANNER (No Borders, No Icons, Clean Typography) */}
        {/* ========================================================================= */}
        <div className="pb-3 border-b border-slate-200 space-y-2">
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#2563eb] block">
            CATEGORY DESK • {categoryName.toUpperCase()}
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            {categoryName}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-3xl leading-relaxed">
            {categoryDesc}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TOP SECTION: LEFT FEATURED HERO (8 COLS) + RIGHT TRENDING (4 COLS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Main Hero Featured Report (8 Cols - Borderless) */}
          <div className="lg:col-span-8 bg-white space-y-4">
            {featuredArticle && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Photo Container (6 Cols) */}
                <div className="md:col-span-6 h-[260px] sm:h-[320px] w-full relative overflow-hidden bg-slate-100 group">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#2563eb] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1">
                    FEATURED REPORT
                  </span>
                </div>

                {/* Right Text Details Container (6 Cols) */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-3 h-full">
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block tracking-wider">
                      {categoryName.toUpperCase()} • {featuredArticle.date}
                    </span>
                    <Link
                      href={`/${featuredArticle.category}/${featuredArticle.slug}`}
                      className="text-slate-900 hover:text-slate-700 font-serif font-bold text-xl sm:text-2xl leading-snug hover:underline block"
                    >
                      {featuredArticle.title}
                    </Link>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3">
                      {featuredArticle.shortdescription}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                        {featuredArticle.author.image ? (
                          <img src={featuredArticle.author.image} alt={featuredArticle.author.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold text-xs">
                            {featuredArticle.author.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-sans font-semibold text-slate-900 block leading-none">
                          By {featuredArticle.author.name}
                        </span>
                        <span className="text-[10px] font-sans text-slate-400 block mt-0.5">
                          {featuredArticle.author.role || 'Senior Correspondent'}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/${featuredArticle.category}/${featuredArticle.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-sans font-bold text-xs px-5 py-2.5 transition-colors w-fit"
                    >
                      Read Full Story →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Trending List (4 Cols - Borderless & Iconless) */}
          <div className="lg:col-span-4 bg-white space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900">
                TRENDING {categoryName.toUpperCase()}
              </h3>
            </div>

            <div className="space-y-3.5">
              {trendingArticles.map((art, idx) => (
                <div key={idx} className="flex gap-3 items-start pb-3 border-b border-slate-100 last:border-0 group">
                  <span className="text-base font-sans font-extrabold text-[#2563eb] shrink-0 leading-none pt-0.5">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <Link
                      href={`/${art.category}/${art.slug}`}
                      className="text-slate-900 hover:text-slate-700 font-serif font-bold text-xs sm:text-sm leading-snug line-clamp-2 hover:underline block"
                    >
                      {art.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MIDDLE SECTION: MORE STORIES IN CATEGORY (8 COLS) + LATEST NEWS (4 COLS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-slate-200">
          
          {/* Left More Stories Cards Grid (8 Cols - Borderless & Iconless) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="border-b border-slate-200 pb-1.5">
              <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-900">
                MORE STORIES IN {categoryName.toUpperCase()}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {moreStories.map((art, idx) => (
                <div key={idx} className="bg-white flex flex-col justify-between group">
                  <div>
                    <Link href={`/${art.category}/${art.slug}`} className="h-36 w-full overflow-hidden bg-slate-100 block relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="pt-3 space-y-2">
                      <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block tracking-wider">
                        {art.category} • {art.date}
                      </span>
                      <Link
                        href={`/${art.category}/${art.slug}`}
                        className="text-slate-900 hover:text-slate-700 font-serif font-bold text-sm leading-snug line-clamp-2 hover:underline block"
                      >
                        {art.title}
                      </Link>
                      <p className="text-xs text-slate-600 font-sans line-clamp-2 leading-relaxed">
                        {art.shortdescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs font-sans">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden text-[9px] font-bold text-slate-600 flex items-center justify-center">
                        {art.author.name.charAt(0)}
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium truncate max-w-[120px]">
                        By {art.author.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Latest News Sidebar (4 Cols - Borderless & Iconless) */}
          <div className="lg:col-span-4 bg-white space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900">
                LATEST {categoryName.toUpperCase()} NEWS
              </h3>
            </div>

            <div className="space-y-4">
              {latestArticles.map((art, idx) => (
                <div key={idx} className="pb-3 border-b border-slate-100 last:border-0 group">
                  <span className="text-[10px] font-sans font-semibold text-slate-400 block mb-0.5">
                    {timeAgos[idx % timeAgos.length]}
                  </span>
                  <Link
                    href={`/${art.category}/${art.slug}`}
                    className="text-slate-900 hover:text-slate-700 font-serif font-bold text-xs sm:text-sm leading-snug line-clamp-2 hover:underline block"
                  >
                    {art.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM NEWSLETTER SUBSCRIPTION BANNER (Clean Borderless & Iconless) */}
        {/* ========================================================================= */}
        <div className="bg-slate-100 rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-0.5 max-w-xl">
            <h4 className="font-serif font-bold text-base sm:text-lg text-slate-900">
              Stay informed on {categoryName.toLowerCase()} stories that impact you.
            </h4>
            <p className="font-sans text-xs text-slate-600">
              Get the best of {categoryName} news delivered straight to your inbox.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white border border-slate-300 rounded px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            />
            <button className="bg-[#2563eb] hover:bg-blue-700 text-white font-sans font-bold text-xs px-6 py-2.5 rounded transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
