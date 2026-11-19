import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getAllAuthors,
  getAllArticles,
  getArticlesByAuthor,
  Article,
  SITE_URL,
  SITE_NAME,
  PUBLISHER_NAME,
} from '@/lib/newsData';
import { Mail, ArrowLeft, Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';

/* ─────────────────────────────────────────────
   Static params for SSG
───────────────────────────────────────────── */
export async function generateStaticParams() {
  const authors = await getAllAuthors();
  return authors.map((a) => ({ slug: a.slug }));
}

/* ─────────────────────────────────────────────
   Metadata
───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const authors = await getAllAuthors();
  const author = authors.find((a) => a.slug === slug);
  if (!author) {
    return { title: 'Author Not Found' };
  }
  const authorUrl = `${SITE_URL}/author/${author.slug}`;
  const imageUrl = author.image.startsWith('http') ? author.image : `${SITE_URL}${author.image}`;

  return {
    title: `${author.name} — ${author.role}`,
    description: author.bio,
    alternates: {
      canonical: `/author/${author.slug}`,
    },
    openGraph: {
      type: 'profile',
      locale: 'en_US',
      url: authorUrl,
      siteName: SITE_NAME,
      title: `${author.name} | ${SITE_NAME}`,
      description: author.bio,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${author.name} | ${SITE_NAME}`,
      description: author.bio,
      images: [imageUrl],
      site: '@FiscalFusion',
    },
  };
}

/* ─────────────────────────────────────────────
   Category colour helpers
───────────────────────────────────────────── */
const CATEGORY_COLORS: Record<string, string> = {
  business: 'bg-blue-50 text-blue-700 border-blue-200',
  finance: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  us: 'bg-amber-50 text-amber-700 border-amber-200',
  world: 'bg-violet-50 text-violet-700 border-violet-200',
};

const CATEGORY_DOT: Record<string, string> = {
  business: 'bg-blue-500',
  finance: 'bg-emerald-500',
  us: 'bg-amber-500',
  world: 'bg-violet-500',
};

/* ─────────────────────────────────────────────
   Article card sub-component
───────────────────────────────────────────── */
function ArticleCard({ article }: { article: Article }) {
  const colorClass = CATEGORY_COLORS[article.category] ?? 'bg-neutral-50 text-neutral-600 border-neutral-200';
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group flex flex-col sm:flex-row gap-0 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
    >
      {/* Image */}
      <div className="relative sm:w-44 md:w-52 shrink-0 h-44 sm:h-auto overflow-hidden bg-neutral-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span
          className={`absolute top-2 left-2 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 border ${colorClass}`}
        >
          {article.category === 'us' ? 'U.S. News' : article.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="font-editorial-serif text-base sm:text-lg font-bold text-neutral-950 leading-snug transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed line-clamp-2">
            {article.shortdescription}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-sans text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            {article.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 font-bold text-neutral-950 transition-colors uppercase tracking-wider">
            Read
            <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [authors, allArticles, authorArticles] = await Promise.all([
    getAllAuthors(),
    getAllArticles(),
    getArticlesByAuthor(slug),
  ]);

  const author = authors.find((a) => a.slug === slug);
  if (!author) notFound();

  // Category breakdown
  const catCounts: Record<string, number> = {};
  for (const art of authorArticles) {
    catCounts[art.category] = (catCounts[art.category] ?? 0) + 1;
  }

  const featuredArticle = authorArticles[0] ?? null;
  const remainingArticles = authorArticles.slice(1);
  const authorUrl = `${SITE_URL}/author/${author.slug}`;
  const imageUrl = author.image.startsWith('http') ? author.image : `${SITE_URL}${author.image}`;

  const profileSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      image: imageUrl,
      url: authorUrl,
      sameAs: author.email ? [`mailto:${author.email}`] : [],
      worksFor: {
        '@type': 'NewsMediaOrganization',
        name: SITE_NAME,
        url: SITE_URL,
        legalName: PUBLISHER_NAME,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Our Team',
        item: `${SITE_URL}/team`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: author.name,
        item: authorUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar articles={allArticles} />

      {/* ─── AUTHOR HERO HEADER ─── */}
      <header className="w-full bg-white border-b border-neutral-200 pt-8 sm:pt-12 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-[11px] font-sans font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-950 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Our Team
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-10">
            {/* Left column: Photo + contact */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-neutral-200 bg-neutral-100">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-neutral-300 scale-[1.07] opacity-40 pointer-events-none" />
              </div>

              <a
                href={`mailto:${author.email}`}
                className="flex items-center gap-2 text-xs font-sans text-neutral-500 hover:text-neutral-950 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="break-all">{author.email}</span>
              </a>

              {/* Category breakdown */}
              <div className="w-full mt-2 space-y-2">
                <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400">
                  Coverage Areas
                </p>
                {Object.entries(catCounts).map(([cat]) => (
                  <div key={cat} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${CATEGORY_DOT[cat] ?? 'bg-neutral-400'}`} />
                    <span className="text-xs font-sans text-neutral-600 font-medium">
                      {cat === 'us' ? 'U.S. News' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: Name, role, bio + stats */}
            <div className="lg:col-span-9 space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#c59b27]">
                  Editorial Staff — FiscalFusion
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-black leading-[1.05] tracking-tight">
                  {author.name}
                </h1>
                <p className="text-sm sm:text-base font-sans font-semibold uppercase tracking-wider text-neutral-500 mt-1">
                  {author.role}
                </p>
              </div>

              {/* Bio */}
              <p className="text-base sm:text-lg font-sans text-neutral-700 leading-relaxed max-w-2xl">
                {author.bio}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ─── ARTICLES SECTION ─── */}
      <main className="flex-1 w-full py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-4 h-4 text-[#c59b27]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-neutral-400">
              All Stories by {author.name}
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-[11px] font-sans font-bold text-neutral-400">{authorArticles.length} articles</span>
          </div>

          {authorArticles.length === 0 && (
            <p className="text-neutral-500 font-sans text-sm py-10 text-center">
              No articles found for this author.
            </p>
          )}

          {/* Featured first article */}
          {featuredArticle && (
            <div className="mb-10">
              <Link
                href={`/${featuredArticle.category}/${featuredArticle.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white"
              >
                <div className="lg:col-span-7 h-60 sm:h-72 md:h-80 overflow-hidden bg-neutral-100 relative">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 border ${
                      CATEGORY_COLORS[featuredArticle.category] ?? 'bg-white text-neutral-700 border-neutral-300'
                    }`}
                  >
                    Featured • {featuredArticle.category === 'us' ? 'U.S. News' : featuredArticle.category}
                  </span>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block tracking-widest">
                      Latest Dispatch
                    </span>
                    <h2 className="font-editorial-serif text-xl sm:text-2xl font-bold text-neutral-950 leading-snug group-hover:underline">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed line-clamp-3">
                      {featuredArticle.shortdescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-sans text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredArticle.date}
                    </span>
                    <span className="font-bold text-neutral-950 uppercase tracking-wider flex items-center gap-1">
                      Read Report
                      <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Remaining articles grid */}
          {remainingArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remainingArticles.map((art) => (
                <ArticleCard key={art.slug} article={art} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
