import { NextResponse } from 'next/server';
import { getAllArticles, SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, formatRfc822Date } from '@/lib/newsData';

export const dynamic = 'force-static';
export const revalidate = 3600; // revalidate hourly

export async function GET() {
  const articles = await getAllArticles();

  // Escape special XML characters
  const escapeXml = (unsafe: string) => {
    return (unsafe || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const itemsXml = articles
    .map((article) => {
      const articleUrl = `${SITE_URL}/${article.category}/${article.slug}`;
      const pubDate = formatRfc822Date(article.date);
      const imageUrl = article.image.startsWith('http')
        ? article.image
        : `${SITE_URL}${article.image}`;

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(article.shortdescription)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${escapeXml(article.author.name)}</dc:creator>
      <enclosure url="${escapeXml(imageUrl)}" length="102400" type="image/webp" />
    </item>`;
    })
    .join('');

  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} | ${escapeXml(SITE_TAGLINE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/images/us_futures_oil_prices_inflation.webp</url>
      <title>${escapeXml(SITE_NAME)}</title>
      <link>${SITE_URL}</link>
    </image>${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(feedXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
