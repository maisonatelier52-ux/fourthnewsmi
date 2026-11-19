import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleDetailClient from './ArticleDetailClient';
import {
  getArticleBySlug,
  getArticlesByCategory,
  getAllArticles,
  formatIsoDate,
  SITE_URL,
  SITE_NAME,
  PUBLISHER_NAME,
} from '@/lib/newsData';

interface DetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allArticles = await getAllArticles();
  return allArticles.map((art) => ({
    category: art.category.toLowerCase(),
    slug: art.slug.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested financial dispatch or news report could not be found.',
    };
  }

  const articleUrl = `${SITE_URL}/${article.category}/${article.slug}`;
  const isoDate = formatIsoDate(article.date);
  const imageUrl = article.image.startsWith('http')
    ? article.image
    : `${SITE_URL}${article.image}`;

  return {
    title: article.title,
    description: article.shortdescription,
    authors: [{ name: article.author.name, url: `${SITE_URL}/author/${article.author.slug}` }],
    creator: article.author.name,
    publisher: PUBLISHER_NAME,
    alternates: {
      canonical: `/${article.category}/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: articleUrl,
      siteName: SITE_NAME,
      title: `${article.title} | ${SITE_NAME}`,
      description: article.shortdescription,
      publishedTime: isoDate,
      modifiedTime: isoDate,
      section: article.category,
      authors: [article.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | ${SITE_NAME}`,
      description: article.shortdescription,
      images: [imageUrl],
      site: '@FiscalFusion',
      creator: '@FiscalFusion',
    },
  };
}

export default async function ArticleDetailPage({ params }: DetailPageProps) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  const article = await getArticleBySlug(category, slug);
  const allArticles = await getAllArticles();

  if (!article) {
    notFound();
  }

  const categoryArticles = await getArticlesByCategory(category);
  const relatedArticles = categoryArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const articleUrl = `${SITE_URL}/${article.category}/${article.slug}`;
  const isoDate = formatIsoDate(article.date);
  const imageUrl = article.image.startsWith('http')
    ? article.image
    : `${SITE_URL}${article.image}`;

  // Structured Data schemas
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    'headline': article.title,
    'description': article.shortdescription,
    'image': [imageUrl],
    'datePublished': isoDate,
    'dateModified': isoDate,
    'articleSection': article.category.toUpperCase(),
    'inLanguage': 'en-US',
    'author': [
      {
        '@type': 'Person',
        'name': article.author.name,
        'jobTitle': article.author.role,
        'url': `${SITE_URL}/author/${article.author.slug}`,
        'worksFor': {
          '@type': 'NewsMediaOrganization',
          'name': SITE_NAME,
          'url': SITE_URL,
        },
      },
    ],
    'publisher': {
      '@type': 'NewsMediaOrganization',
      'name': SITE_NAME,
      'url': SITE_URL,
      'legalName': PUBLISHER_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/images/us_futures_oil_prices_inflation.webp`,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': SITE_URL,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': article.category.toUpperCase(),
        'item': `${SITE_URL}/${article.category}`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.title,
        'item': articleUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-neutral-200 selection:text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar articles={allArticles} />
      <ArticleDetailClient article={article} relatedArticles={relatedArticles} />
      <Footer />
    </div>
  );
}
