import type { MetadataRoute } from 'next';
import { getAllArticles, getAllAuthors, CATEGORIES, SITE_URL, formatIsoDate } from '@/lib/newsData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allArticles = await getAllArticles();
  const allAuthors = await getAllAuthors();

  const now = new Date();

  // 1. Static Core & Policy Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/team`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/editorial-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/ownership-and-funding`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/right-of-reply-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/source-methodology`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/advertising-and-sponsored-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // 2. Category Pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${SITE_URL}/${category.id}`,
    lastModified: now,
    changeFrequency: 'hourly',
    priority: 0.9,
  }));

  // 3. Author Pages
  const authorPages: MetadataRoute.Sitemap = allAuthors.map((author) => ({
    url: `${SITE_URL}/author/${author.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 4. Article Pages (Dynamic 33+ articles with actual publication dates)
  const articlePages: MetadataRoute.Sitemap = allArticles.map((article) => {
    const isoDate = formatIsoDate(article.date);
    return {
      url: `${SITE_URL}/${article.category}/${article.slug}`,
      lastModified: new Date(isoDate),
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  return [...staticPages, ...categoryPages, ...authorPages, ...articlePages];
}
