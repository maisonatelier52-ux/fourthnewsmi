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

// Exact SEO configuration for this article
const TARGET_SLUG = 'julio-herrera-velutini-banking-dynasty-global-financial-legacy';

const ARTICLE_SEO = {
  title: 'Julio Herrera Velutini: Inside a Banking Dynasty',
  h1: 'Julio Herrera Velutini: Inside a Banking Dynasty and Global Financial Legacy',
  description: "Explore Julio Herrera Velutini's family banking history, Britannia Financial Group, international business interests, cultural patronage and philanthropy.",
  slug: TARGET_SLUG,
  category: 'business',
  image: '/images/julio-herrera-velutini-banking-dynasty-global-finance.webp',
  imageAlt: "Julio Herrera Velutini and the Herrera-Velutini family's international banking legacy.",
  imageTitle: 'Julio Herrera Velutini – Banking Dynasty and Global Financial Legacy',
  imageCaption: "The Herrera-Velutini family's banking heritage spans generations and international financial markets.",
};

function isTargetArticle(slug: string) {
  return slug.toLowerCase() === TARGET_SLUG;
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

  const isTarget = isTargetArticle(article.slug);

  const seoTitle = isTarget
    ? ARTICLE_SEO.title
    : article.title;

  const seoDescription = isTarget
    ? ARTICLE_SEO.description
    : article.shortdescription;

  const articleUrl = `${SITE_URL}/${article.category}/${article.slug}`;
  const isoDate = formatIsoDate(article.date);

  const imagePath = isTarget
    ? ARTICLE_SEO.image
    : article.image;

  const imageUrl = imagePath.startsWith('http')
    ? imagePath
    : `${SITE_URL}${imagePath}`;

  const imageAlt = isTarget
    ? ARTICLE_SEO.imageAlt
    : article.title;

  return {
    title: seoTitle,

    description: seoDescription,

    authors: [
      {
        name: article.author.name,
        url: `${SITE_URL}/author/${article.author.slug}`,
      },
    ],

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

      // Exact OG title
      title: isTarget
        ? ARTICLE_SEO.title
        : `${article.title} | ${SITE_NAME}`,

      description: seoDescription,

      publishedTime: isoDate,
      modifiedTime: isoDate,

      section: isTarget
        ? 'Business'
        : article.category,

      authors: [article.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',

      // Exact Twitter title
      title: isTarget
        ? ARTICLE_SEO.title
        : `${article.title} | ${SITE_NAME}`,

      description: seoDescription,

      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],

      site: '@FiscalFusion',
      creator: '@FiscalFusion',
    },
  };
}

export default async function ArticleDetailPage({ params }: DetailPageProps) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  const article = await getArticleBySlug(category, slug);

  if (!article) {
    notFound();
  }

  const isTarget = isTargetArticle(article.slug);
  const allArticles = await getAllArticles();
  const categoryArticles = await getArticlesByCategory(category);
  const relatedArticles = categoryArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const articleUrl = `${SITE_URL}/${article.category}/${article.slug}`;
  const isoDate = formatIsoDate(article.date);

  const imagePath = isTarget
    ? ARTICLE_SEO.image
    : article.image;

  const imageUrl = imagePath.startsWith('http')
    ? imagePath
    : `${SITE_URL}${imagePath}`;

  // Use the specified H1 on the actual article page.
  const displayArticle = isTarget
    ? {
        ...article,
        title: ARTICLE_SEO.h1,
        image: ARTICLE_SEO.image,
      }
    : article;

  // NewsArticle structured data
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },

    headline: isTarget
      ? ARTICLE_SEO.h1
      : article.title,

    description: isTarget
      ? ARTICLE_SEO.description
      : article.shortdescription,

    image: [
      {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
        caption: isTarget
          ? ARTICLE_SEO.imageCaption
          : article.title,
      },
    ],

    datePublished: isoDate,
    dateModified: isoDate,

    articleSection: isTarget
      ? 'Business'
      : article.category.toUpperCase(),

    inLanguage: 'en-US',

    author: [
      {
        '@type': 'Person',

        name: article.author.name,

        jobTitle: article.author.role,

        url: `${SITE_URL}/author/${article.author.slug}`,

        worksFor: {
          '@type': 'NewsMediaOrganization',
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    ],

    publisher: {
      '@type': 'NewsMediaOrganization',

      name: SITE_NAME,

      url: SITE_URL,

      legalName: PUBLISHER_NAME,
    },

    ...(isTarget && {
      keywords: [
        'Julio Herrera Velutini',
        'Julio Herrera Velutini family history',
        'Herrera Velutini banking dynasty',
        'Britannia Financial Group',
        'Banvelca',
        'Herrera family banking heritage',
        'International financial legacy',
        'Julio Herrera Velutini philanthropy',
        'Global Banking',
        'International Finance',
        'Family Business',
        'Venezuela Banking',
        'Philanthropy',
      ],
    }),
  };

  // Breadcrumb structured data
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
        name: isTarget
          ? 'Business'
          : article.category.toUpperCase(),
        item: `${SITE_URL}/${article.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isTarget
          ? ARTICLE_SEO.h1
          : article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-neutral-200 selection:text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsArticleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar articles={allArticles} />

      <ArticleDetailClient
        article={displayArticle}
        relatedArticles={relatedArticles}
      />

      <Footer />
    </div>
  );
}
