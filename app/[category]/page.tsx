import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getArticlesByCategory,
  getAllArticles,
  CATEGORIES,
  SITE_URL,
  SITE_NAME,
  PUBLISHER_NAME,
} from '@/lib/newsData';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    category: c.id.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: rawCategory } = await params;
  const categoryInfo = CATEGORIES.find((c) => c.id.toLowerCase() === rawCategory.toLowerCase());

  if (!categoryInfo) {
    return {
      title: 'Category Not Found',
      description: 'The requested news category could not be located.',
    };
  }

  const categoryName = categoryInfo.name;
  const categoryDesc = categoryInfo.description;
  const categoryUrl = `${SITE_URL}/${categoryInfo.id}`;

  return {
    title: `${categoryName} News & Analysis`,
    description: categoryDesc,
    alternates: {
      canonical: `/${categoryInfo.id}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: categoryUrl,
      siteName: SITE_NAME,
      title: `${categoryName} | ${SITE_NAME}`,
      description: categoryDesc,
      images: [
        {
          url: '/images/us_futures_oil_prices_inflation.webp',
          width: 1200,
          height: 630,
          alt: `${categoryName} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} | ${SITE_NAME}`,
      description: categoryDesc,
      site: '@FiscalFusion',
      creator: '@FiscalFusion',
    },
  };
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

  const featuredArticle = articles.length > 0 ? articles[0] : null;

  // Trending articles strictly from this category (items 2 to 4, no repetition of featured)
  const trendingArticles = articles.slice(1, 4);

  // All remaining articles strictly from this category (from item 5 onwards, no repetition)
  const moreStories = articles.slice(4);

  const categoryUrl = `${SITE_URL}/${rawCategory}`;

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
        name: categoryName,
        item: categoryUrl,
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} Coverage | ${SITE_NAME}`,
    url: categoryUrl,
    description: categoryDesc,
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasPart: articles.map((a) => ({
      '@type': 'NewsArticle',
      headline: a.title,
      url: `${SITE_URL}/${a.category}/${a.slug}`,
      datePublished: a.date,
    })),
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-serif selection:bg-neutral-200 selection:text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Navbar articles={allArticles} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full space-y-6">
        {/* ========================================================================= */}
        {/* CATEGORY HEADER BANNER */}
        {/* ========================================================================= */}
        <div className="pb-3 border-b border-neutral-200 space-y-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-sans text-neutral-500 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span className="text-neutral-300 font-light">/</span>
            <span className="text-neutral-900 font-bold">
              {categoryName}
            </span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-black tracking-tight">
            {categoryName}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-3xl leading-relaxed">
            {categoryDesc}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TOP SECTION: LEFT FEATURED HERO (8 COLS) + RIGHT TRENDING (4 COLS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Main Hero Featured Report (8 Cols) */}
          <div className="lg:col-span-8 bg-white space-y-4">
            {featuredArticle && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Photo Container (6 Cols) */}
                <div className="md:col-span-6 h-[260px] sm:h-[320px] w-full relative overflow-hidden bg-neutral-100 group">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#000000] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1">
                    FEATURED REPORT
                  </span>
                </div>

                {/* Right Text Details Container (6 Cols) */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-3 h-full">
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block tracking-wider">
                      {categoryName.toUpperCase()} • {featuredArticle.date}
                    </span>
                    <Link
                      href={`/${featuredArticle.category}/${featuredArticle.slug}`}
                      className="text-black hover:text-neutral-700 font-serif font-bold text-xl sm:text-2xl leading-snug hover:underline block"
                    >
                      {featuredArticle.title}
                    </Link>
                    <p className="text-xs text-neutral-600 font-sans leading-relaxed line-clamp-3">
                      {featuredArticle.shortdescription}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden shrink-0">
                        {featuredArticle.author.image ? (
                          <img
                            src={featuredArticle.author.image}
                            alt={featuredArticle.author.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-neutral-500 font-bold text-xs">
                            {featuredArticle.author.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-sans font-semibold text-black block leading-none">
                          By {featuredArticle.author.name}
                        </span>
                        <span className="text-[10px] font-sans text-neutral-400 block mt-0.5">
                          {featuredArticle.author.role || 'Senior Correspondent'}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/${featuredArticle.category}/${featuredArticle.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#000000] hover:bg-neutral-800 text-white font-sans font-bold text-xs px-5 py-2.5 transition-colors w-fit"
                    >
                      Read Full Story →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Trending List (4 Cols) */}
          <div className="lg:col-span-4 bg-white space-y-4">
            <div className="border-b border-neutral-200 pb-2">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-black">
                TRENDING {categoryName.toUpperCase()}
              </h3>
            </div>

            <div className="space-y-3.5">
              {trendingArticles.map((art, idx) => (
                <div key={idx} className="flex gap-3 items-start pb-3 border-b border-neutral-100 last:border-0 group">
                  <span className="text-base font-editorial-serif italic font-bold text-black shrink-0 leading-none pt-0.5">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <Link
                      href={`/${art.category}/${art.slug}`}
                      className="text-black hover:text-neutral-700 font-serif font-bold text-xs sm:text-sm leading-snug line-clamp-2 hover:underline block"
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
        {/* MIDDLE SECTION: MORE STORIES IN CATEGORY */}
        {/* ========================================================================= */}
        {moreStories.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            <div className="border-b border-neutral-200 pb-1.5">
              <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-black">
                MORE STORIES IN {categoryName.toUpperCase()}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {moreStories.map((art, idx) => (
                <div key={idx} className="bg-white flex flex-col justify-between group">
                  <div>
                    <Link
                      href={`/${art.category}/${art.slug}`}
                      className="h-44 w-full overflow-hidden bg-neutral-100 block relative"
                    >
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>
                    <div className="pt-3 space-y-2">
                      <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block tracking-wider">
                        {categoryName.toUpperCase()} • {art.date}
                      </span>
                      <Link
                        href={`/${art.category}/${art.slug}`}
                        className="text-black hover:text-neutral-700 font-serif font-bold text-base leading-snug hover:underline block"
                      >
                        {art.title}
                      </Link>
                      <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                        {art.shortdescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 mt-3 flex items-center justify-between text-xs font-sans">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-200 overflow-hidden text-[10px] font-bold text-neutral-600 flex items-center justify-center shrink-0">
                        {art.author?.image ? (
                          <img
                            src={art.author.image}
                            alt={art.author.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          art.author?.name?.charAt(0) || 'A'
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-600 font-medium truncate max-w-[150px]">
                        By {art.author.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium">
                      {art.readTime || '3 min read'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
