import fs from 'fs';
import path from 'path';

export interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  slug: string;
  email: string;
}

export interface DescriptionSection {
  subtitle: string;
  text: string;
}

export interface Article {
  category: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  shortdescription: string;
  description: DescriptionSection[];
  author: Author;
  readTime?: string;
}

export const CATEGORIES = [
  { id: 'business', name: 'Business', description: 'Global markets, corporate ventures, economics & technology strategy' },
  { id: 'technology', name: 'Technology', description: 'Quantum computing, AI ethics, silicon advancements & cybersecurity' },
  { id: 'entertainment', name: 'Entertainment', description: 'High fashion, generative cinema, cultural galas & arts criticism' },
  { id: 'us', name: 'U.S. News', description: 'Domestic policy, infrastructure modernization & national enterprise shifts' },
  { id: 'world', name: 'World', description: 'Deep sea exploration, sovereign assets, climate resilience & diplomacy' },
];

/**
 * Calculates estimated read time based on text word count
 */
export function calculateReadTime(article: Article): string {
  let textLength = article.shortdescription ? article.shortdescription.split(' ').length : 0;
  if (article.description && Array.isArray(article.description)) {
    article.description.forEach(desc => {
      if (desc.text) textLength += desc.text.split(' ').length;
      if (desc.subtitle) textLength += desc.subtitle.split(' ').length;
    });
  }
  const minutes = Math.max(1, Math.ceil(textLength / 180));
  return `${minutes} min read`;
}

/**
 * Load articles for a specific category from public/data/[category].json
 */
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', `${category.toLowerCase()}.json`);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    const articles: Article[] = JSON.parse(fileData);
    return articles.map(art => ({
      ...art,
      readTime: calculateReadTime(art)
    }));
  } catch (error) {
    console.error(`Error reading ${category}.json:`, error);
    return [];
  }
}

/**
 * Load all articles across all categories
 */
export async function getAllArticles(): Promise<Article[]> {
  const categoryKeys = ['business', 'technology', 'entertainment', 'us', 'world'];
  const allArticlesArrays = await Promise.all(categoryKeys.map(cat => getArticlesByCategory(cat)));
  return allArticlesArrays.flat();
}

/**
 * Load a single article by category and slug
 */
export async function getArticleBySlug(category: string, slug: string): Promise<Article | null> {
  const articles = await getArticlesByCategory(category);
  const found = articles.find(art => art.slug.toLowerCase() === slug.toLowerCase());
  return found || null;
}
