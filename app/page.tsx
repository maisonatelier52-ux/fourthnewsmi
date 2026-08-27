import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllArticles, Article } from '@/lib/newsData';

export default async function Home() {
  const allArticles: Article[] = await getAllArticles();

  // Helper filters by category
  const worldArticles = allArticles.filter((a) => a.category === 'world');
  const businessArticles = allArticles.filter((a) => a.category === 'business');
  const techArticles = allArticles.filter((a) => a.category === 'technology');
  const entertainmentArticles = allArticles.filter((a) => a.category === 'entertainment');
  const usArticles = allArticles.filter((a) => a.category === 'us');

  // NEW MAIN TOP HERO (Left Text Details + Right Large Image)
  const topMainHero = techArticles[0] || allArticles[0];

  // Section 2: Hero Split (Large Left Image + 3 Right Stacked Text Cards)
  const heroMain = worldArticles[0] || allArticles[0];
  const heroRightStack = [...techArticles, ...businessArticles, ...usArticles].slice(0, 3);

  // Section 2: Business
  const businessMain = businessArticles[0] || allArticles[1];
  const businessSubList = [...businessArticles.filter(a => a.slug !== businessMain.slug), ...worldArticles].slice(0, 4);
  const businessSideDigest = [...businessArticles, ...worldArticles, ...techArticles].slice(1, 4);

  // Section 3: Tech
  const techMain = techArticles[0] || allArticles[2];
  const techGrid = [...techArticles.filter(a => a.slug !== techMain.slug), ...allArticles.filter(a => a.category !== 'technology')].slice(0, 4);

  // Section 4: World 4-Column Grid
  const worldGrid = worldArticles.slice(0, 4);

  // Section 5: Entertainment Horizontal Magazine
  const entertainmentMain = entertainmentArticles[0] || allArticles[3];

  // Section 6: US Affairs
  const usMain = usArticles[0] || allArticles[4];

  // Section 7: Special Reports (2-Column Split Feature Grid)
  const section7Articles = [...allArticles.slice(1), ...allArticles].slice(0, 4);

  // Section 8: Executive Chronicles (Sticky Sidebar + Extended 9-Article Grid)
  const sec8Lead = allArticles[0];
  const sec8LeftGrid = [...allArticles, ...techArticles, ...businessArticles].slice(1, 5); // 4 stories on left
  const sec8DigestBox = [...allArticles, ...worldArticles, ...usArticles].slice(5, 9); // 4 stories on right

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      {/* Navigation Header with "Domain Name" logo */}
      <Navbar articles={allArticles} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-7 sm:pt-10 pb-6 sm:pb-8 w-full space-y-6 sm:space-y-10 lg:space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION 1: MAIN TOP HERO (Left Text Details + Right Large Image) */}
        {/* ========================================================================= */}
        {topMainHero && (
          <section className="pt-2 sm:pt-4 pb-1 sm:pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center">
              {/* Left Column (6 Cols) - Headline & Detailed Description */}
              <div className="lg:col-span-6 space-y-2.5 sm:space-y-4 flex flex-col justify-center">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500 block">
                  EXCLUSIVE COVERAGE • {topMainHero.date}
                </span>
                <Link
                  href={`/${topMainHero.category}/${topMainHero.slug}`}
                  className="text-neutral-950 hover:text-neutral-600 font-editorial-serif font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.15] block transition-colors"
                >
                  {topMainHero.title}
                </Link>
                <p className="text-sm sm:text-base text-neutral-600 font-sans leading-snug">
                  {topMainHero.shortdescription}
                </p>
                <div className="pt-1.5 sm:pt-2 flex items-center justify-between text-xs font-sans text-neutral-500">
                  <span className="font-semibold text-neutral-800">By {topMainHero.author.name}</span>
                  <span className="uppercase text-[10px] tracking-wider bg-neutral-100 px-2 py-1 font-bold text-neutral-700">
                    {topMainHero.category}
                  </span>
                </div>
              </div>

              {/* Right Column (6 Cols) - Large High-Res Image */}
              <div className="lg:col-span-6">
                <Link
                  href={`/${topMainHero.category}/${topMainHero.slug}`}
                  className="h-[240px] sm:h-[360px] md:h-[420px] w-full overflow-hidden bg-neutral-100 block group relative"
                >
                  <img
                    src={topMainHero.image}
                    alt={topMainHero.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
            </div>
          </section>
        )}


        {/* ========================================================================= */}
        {/* SECTION 2: HERO SHOWCASE (Large Left Image + 3 Right Stacked Text Cards) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-stretch">
            {/* Left Big Hero Image Showcase (8 Cols) */}
            {heroMain && (
              <div className="lg:col-span-8 flex flex-col h-full">
                <div className="relative h-full min-h-[280px] sm:min-h-[380px] md:min-h-[460px] w-full overflow-hidden bg-[#000000] group flex flex-col justify-end p-4 sm:p-8">
                  <img
                    src={heroMain.image}
                    alt={heroMain.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {/* Vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />

                  {/* Bottom Overlay Text */}
                  <div className="relative z-10 space-y-2.5">
                    <span className="px-3 py-1 bg-[#000000]/90 text-white text-[10px] font-sans font-bold uppercase tracking-widest inline-block border border-neutral-700">
                      FEATURED DISPATCH • {heroMain.date}
                    </span>
                    <Link
                      href={`/${heroMain.category}/${heroMain.slug}`}
                      className="text-white hover:text-neutral-200 font-serif font-bold text-2xl sm:text-4xl leading-tight block hover:underline"
                    >
                      {heroMain.title}
                    </Link>
                    <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed line-clamp-2 max-w-2xl">
                      {heroMain.shortdescription}
                    </p>
                    <div className="pt-2 border-t border-white/20 text-xs font-sans text-neutral-300 font-medium">
                      By {heroMain.author.name}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right Stacked 3 Text Cards (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              {heroRightStack.map((art, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 flex flex-col justify-between space-y-2.5 flex-1 group transition-colors ${
                    idx === 0
                      ? 'bg-[#000000] text-white'
                      : 'bg-neutral-100 text-black border border-neutral-200'
                  }`}
                >
                  <div className="space-y-1.5">
                    <span
                      className={`text-[10px] font-sans font-bold uppercase tracking-wider block ${
                        idx === 0 ? 'text-neutral-300' : 'text-neutral-500'
                      }`}
                    >
                      {art.category} • {art.date}
                    </span>
                    <Link
                      href={`/${art.category}/${art.slug}`}
                      className={`font-serif font-bold text-sm sm:text-base leading-snug line-clamp-2 block ${
                        idx === 0 ? 'text-white hover:text-neutral-200' : 'text-black hover:text-neutral-700'
                      }`}
                    >
                      {art.title}
                    </Link>
                    <p
                      className={`text-xs font-sans line-clamp-2 leading-relaxed ${
                        idx === 0 ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {art.shortdescription}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] font-sans block pt-2 border-t font-medium ${
                      idx === 0 ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-400'
                    }`}
                  >
                    By {art.author.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: BUSINESS & MACRO ECONOMY (No Subheader Icons) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-700">
              BUSINESS & MACRO ECONOMY
            </h2>
            <Link href="/business" className="font-sans text-xs text-neutral-500 font-semibold hover:underline">
              View All Business →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-3.5 sm:gap-6 items-start">
            {/* Col 1: Lead Story (4 Cols) */}
            {businessMain && (
              <div className="lg:col-span-4 space-y-3 group">
                <Link
                  href={`/${businessMain.category}/${businessMain.slug}`}
                  className="h-48 sm:h-44 w-full overflow-hidden bg-neutral-100 block relative"
                >
                  <img
                    src={businessMain.image}
                    alt={businessMain.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block tracking-wider">
                    MACRO DIGEST • {businessMain.date}
                  </span>
                  <Link
                    href={`/${businessMain.category}/${businessMain.slug}`}
                    className="text-black hover:text-neutral-700 font-serif font-bold text-base sm:text-lg leading-snug hover:underline block"
                  >
                    {businessMain.title}
                  </Link>
                  <p className="text-xs text-neutral-600 font-sans line-clamp-3 leading-relaxed">
                    {businessMain.shortdescription}
                  </p>
                  <span className="text-[10px] text-neutral-400 font-sans block pt-1 font-medium">
                    By {businessMain.author.name}
                  </span>
                </div>
              </div>
            )}

            {/* Col 2: Stacked Compact Stories without description (4 Cols) */}
            <div className="lg:col-span-4 space-y-3">
              {businessSubList.map((art, idx) => (
                <div key={idx} className="pb-2.5 border-b border-neutral-100 space-y-1">
                  <span className="text-[10px] font-sans font-bold uppercase text-neutral-400">
                    {art.category} • {art.date}
                  </span>
                  <Link
                    href={`/${art.category}/${art.slug}`}
                    className="text-black hover:text-neutral-700 font-serif font-bold text-sm sm:text-base leading-snug hover:underline block"
                  >
                    {art.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* Col 3: Market Intelligence & Insights Card (4 Cols) */}
            <div className="lg:col-span-4 bg-[#000000] text-white p-5 space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-700 pb-1 block">
                MARKET INTELLIGENCE & INSIGHTS
              </span>
              <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
                Key corporate shifts, venture flows, and monetary alignments updated daily.
              </p>
              {businessSideDigest.map((art, idx) => (
                <div key={idx} className="pt-2 border-t border-neutral-800 space-y-1">
                  <Link
                    href={`/${art.category}/${art.slug}`}
                    className="text-white hover:text-neutral-300 font-serif font-bold text-sm leading-snug block hover:underline"
                  >
                    {art.title}
                  </Link>
                  <span className="text-[10px] text-neutral-400 font-sans block">By {art.author.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: TECHNOLOGY & AI FRONTIERS (No Subheader Icons) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-700">
              TECHNOLOGY & AI FRONTIERS
            </h2>
            <Link href="/technology" className="font-sans text-xs text-neutral-500 font-semibold hover:underline">
              Explore Tech →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Tech Main Card (7 Cols) */}
            {techMain && (
              <div className="lg:col-span-7 flex flex-col h-full">
                <div className="relative h-full w-full overflow-hidden bg-[#000000] group flex flex-col justify-end p-5 sm:p-6 min-h-[380px] sm:min-h-[400px]">
                  <img
                    src={techMain.image}
                    alt={techMain.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <span className="px-3 py-1 bg-black/70 text-white text-[10px] font-sans font-bold uppercase inline-block">
                      FEATURED TECH REPORT
                    </span>
                    <Link
                      href={`/${techMain.category}/${techMain.slug}`}
                      className="text-white hover:text-neutral-200 font-serif font-bold text-xl sm:text-3xl leading-snug block hover:underline"
                    >
                      {techMain.title}
                    </Link>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed line-clamp-3">
                      {techMain.shortdescription}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tech 2x2 Sub-Grid (5 Cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {techGrid.map((art, idx) => (
                <div
                  key={idx}
                  className="relative h-full min-h-[180px] sm:min-h-[190px] w-full overflow-hidden group flex flex-col justify-end p-3.5 bg-[#000000]"
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" />

                  <div className="relative z-10 space-y-1">
                    <span className="px-2 py-0.5 text-[9px] font-sans font-bold uppercase tracking-wider bg-black/60 text-neutral-200 inline-block">
                      {art.category}
                    </span>
                    <Link
                      href={`/${art.category}/${art.slug}`}
                      className="text-white hover:text-neutral-200 font-serif font-bold text-xs sm:text-sm leading-snug line-clamp-3 block hover:underline"
                    >
                      {art.title}
                    </Link>
                    <span className="text-[9px] text-neutral-400 font-sans block pt-1 font-medium">
                      {art.readTime || '3 min read'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 4: WORLD NEWS & GLOBAL REPORTS (No Subheader Icons) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-700">
              WORLD DISPATCHES & GLOBAL REPORTS
            </h2>
            <Link href="/world" className="font-sans text-xs text-neutral-500 font-semibold hover:underline">
              View All World →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {worldGrid.map((art, idx) => (
              <div
                key={idx}
                className="bg-white flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-3">
                  <div className="h-36 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block">
                    GLOBAL REPORT
                  </span>
                  <Link
                    href={`/${art.category}/${art.slug}`}
                    className="text-black hover:text-neutral-700 font-serif font-bold text-base leading-snug line-clamp-3 hover:underline block"
                  >
                    {art.title}
                  </Link>
                  <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                    {art.shortdescription}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-100 text-[11px] font-sans text-neutral-500">
                  By {art.author.name}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 5: ENTERTAINMENT & CULTURE (NEW 3-Column Vertical Gallery Layout, No Subheader Icon) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-700">
              ENTERTAINMENT & CULTURE
            </h2>
            <Link href="/entertainment" className="font-sans text-xs text-neutral-500 font-semibold hover:underline">
              View All Culture →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {entertainmentArticles.slice(0, 3).map((art, idx) => (
              <div key={idx} className="space-y-3 group flex flex-col justify-between">
                <div className="space-y-2">
                  <Link
                    href={`/${art.category}/${art.slug}`}
                    className="h-48 w-full overflow-hidden bg-neutral-100 block"
                  >
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block">
                    ARTS & CULTURE • {art.date}
                  </span>
                  <Link
                    href={`/${art.category}/${art.slug}`}
                    className="text-black hover:text-neutral-700 font-serif font-bold text-lg leading-snug hover:underline block"
                  >
                    {art.title}
                  </Link>
                  <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                    {art.shortdescription}
                  </p>
                </div>
                <span className="text-[11px] text-neutral-400 font-sans block pt-2 border-t border-neutral-100">
                  By {art.author.name}
                </span>
              </div>
            ))}
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 6: U.S. AFFAIRS & NATIONAL POLICY (NEW Split Horizontal Showcase Layout, No Subheader Icon) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-700">
              U.S. AFFAIRS & NATIONAL POLICY
            </h2>
            <Link href="/us" className="font-sans text-xs text-neutral-500 font-semibold hover:underline">
              View All U.S. →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Policy Story with image on left and text on right */}
            {usMain && (
              <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4 items-start border-b sm:border-b-0 sm:border-r border-neutral-200 pb-4 sm:pb-0 sm:pr-6 group">
                <Link
                  href={`/${usMain.category}/${usMain.slug}`}
                  className="w-full sm:w-48 h-48 shrink-0 overflow-hidden bg-neutral-100 block"
                >
                  <img
                    src={usMain.image}
                    alt={usMain.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex-1 space-y-2">
                  <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block">
                    POLICY REPORT • WASHINGTON
                  </span>
                  <Link
                    href={`/${usMain.category}/${usMain.slug}`}
                    className="text-black hover:text-neutral-700 font-serif font-bold text-xl leading-snug hover:underline block"
                  >
                    {usMain.title}
                  </Link>
                  <p className="text-xs text-neutral-600 font-sans line-clamp-3 leading-relaxed">
                    {usMain.shortdescription}
                  </p>
                  <span className="text-[11px] text-neutral-400 font-sans block pt-1">
                    By {usMain.author.name}
                  </span>
                </div>
              </div>
            )}

            {/* Right Sub-List with 2 horizontal policy items */}
            <div className="lg:col-span-5 space-y-4">
              {usArticles.slice(1, 3).map((art, idx) => (
                <div key={idx} className="pb-3 border-b border-neutral-100 space-y-1.5 group">
                  <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block">
                    CAPITOL DISPATCH • {art.date}
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
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 7: SPECIAL REPORTS & INVESTIGATIVE COVERAGE (2-Column Split Feature Grid) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-700">
              SPECIAL REPORTS & INVESTIGATIVE COVERAGE
            </h2>
            <span className="font-sans text-xs text-neutral-400 font-semibold">In-Depth Journalism</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-start">
            {section7Articles.map((art, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4 items-start pb-5 border-b border-neutral-100 group"
              >
                <Link
                  href={`/${art.category}/${art.slug}`}
                  className="w-full sm:w-44 h-36 shrink-0 overflow-hidden bg-neutral-100 block"
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex-1 space-y-1.5 min-w-0">
                  <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block">
                    {art.category} • {art.date}
                  </span>
                  <Link
                    href={`/${art.category}/${art.slug}`}
                    className="text-black hover:text-neutral-700 font-serif font-bold text-base sm:text-lg leading-snug hover:underline block"
                  >
                    {art.title}
                  </Link>
                  <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                    {art.shortdescription}
                  </p>
                  <span className="text-[10px] text-neutral-400 font-sans block pt-1">
                    By {art.author.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 8: EXECUTIVE CHRONICLES & DEEP DIVE ARCHIVES (NEW 8-Col Hybrid + 4-Col Accent Digest Box) */}
        {/* ========================================================================= */}
        <section className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-700">
              EXECUTIVE CHRONICLES & DEEP DIVE ARCHIVES
            </h2>
            <span className="font-sans text-xs text-neutral-400 font-semibold">Special Investigations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 8-Col Hybrid (1 Top Wide Lead + 4 Bottom Split Cards) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Top Wide Lead Card */}
              {sec8Lead && (
                <div className="space-y-3 group pb-6 border-b border-neutral-200">
                  <Link
                    href={`/${sec8Lead.category}/${sec8Lead.slug}`}
                    className="h-56 sm:h-64 w-full overflow-hidden bg-neutral-100 block"
                  >
                    <img
                      src={sec8Lead.image}
                      alt={sec8Lead.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-400 block">
                    EXECUTIVE REPORT • {sec8Lead.date}
                  </span>
                  <Link
                    href={`/${sec8Lead.category}/${sec8Lead.slug}`}
                    className="text-black hover:text-neutral-700 font-serif font-bold text-xl sm:text-2xl leading-snug hover:underline block"
                  >
                    {sec8Lead.title}
                  </Link>
                  <p className="text-xs sm:text-sm text-neutral-600 font-sans line-clamp-3 leading-relaxed">
                    {sec8Lead.shortdescription}
                  </p>
                  <span className="text-[11px] text-neutral-400 font-sans block pt-1 font-medium">
                    By {sec8Lead.author.name} ({sec8Lead.author.role})
                  </span>
                </div>
              )}

              {/* Line-by-Line News Stream (Text Left, Image Right) */}
              <div className="space-y-6">
                {sec8LeftGrid.map((art, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-5 items-start justify-between pb-5 border-b border-neutral-200 group">
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <span className="text-[10px] font-sans font-bold uppercase text-neutral-400 block">
                        {art.category} • {art.date}
                      </span>
                      <Link
                        href={`/${art.category}/${art.slug}`}
                        className="text-black hover:text-neutral-700 font-serif font-bold text-base sm:text-lg leading-snug hover:underline block"
                      >
                        {art.title}
                      </Link>
                      <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                        {art.shortdescription}
                      </p>
                      <span className="text-[10px] text-neutral-400 font-sans block pt-1">
                        By {art.author.name}
                      </span>
                    </div>
                    <Link
                      href={`/${art.category}/${art.slug}`}
                      className="w-full sm:w-44 h-32 shrink-0 overflow-hidden bg-neutral-100 block"
                    >
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 4-Col Sticky Light Slate Accent Digest Box */}
            <div className="lg:col-span-4 sticky top-20 self-start bg-neutral-100 p-5 border-l-4 border-black flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-black border-b border-neutral-300 pb-1.5 block">
                  KEY INSIGHTS & ESSENTIAL READS
                </span>
                {sec8DigestBox.map((art, idx) => (
                  <div key={idx} className="pb-3.5 border-b border-neutral-200 last:border-0 space-y-1.5 group">
                    <span className="px-2 py-0.5 text-[9px] font-sans font-bold uppercase tracking-wider bg-[#000000] text-white inline-block">
                      {art.category}
                    </span>
                    <Link
                      href={`/${art.category}/${art.slug}`}
                      className="text-black hover:text-neutral-700 font-serif font-bold text-sm sm:text-base leading-snug hover:underline block"
                    >
                      {art.title}
                    </Link>
                    <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                      {art.shortdescription}
                    </p>
                    <span className="text-[10px] text-neutral-400 font-sans block pt-1">
                      By {art.author.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-neutral-300 text-xs font-sans text-neutral-600">
                <span className="font-bold text-black block text-[10px] uppercase">Editorial Archive</span>
                <p className="text-[11px] italic">Curated weekly by senior editors & policy analysts.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
