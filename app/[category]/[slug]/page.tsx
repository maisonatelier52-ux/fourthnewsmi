import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleDetailClient from './ArticleDetailClient';
import { getArticleBySlug, getArticlesByCategory, getAllArticles } from '@/lib/newsData';

interface DetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function ArticleDetailPage({ params }: DetailPageProps) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  const article = await getArticleBySlug(category, slug);
  const allArticles = await getAllArticles();

  if (!article) {
    notFound();
  }

  // Fetch related articles in same category with fallback to ensure 3 full stories
  const categoryArticles = await getArticlesByCategory(category);
  const rawRelated = categoryArticles.filter((a) => a.slug !== article.slug);
  const fallbackRelated = allArticles.filter((a) => a.slug !== article.slug && !rawRelated.some((r) => r.slug === a.slug));
  const relatedArticles = [...rawRelated, ...fallbackRelated].slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar articles={allArticles} />
      <ArticleDetailClient article={article} relatedArticles={relatedArticles} />
      <Footer />
    </div>
  );
}
