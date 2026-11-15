'use client';

import Image from 'next/image';

export interface PageHeroProps {
  title: string;
  highlightedWord?: string;
  subtitle: string;
  backgroundImage: string;
  subjectImage?: string;
  subjectImageAlt?: string;
  subjectType?: 'minister' | 'book' | 'scenic';
}

export default function PageHero({
  title,
  highlightedWord,
  subtitle,
  backgroundImage,
  subjectImage,
  subjectImageAlt,
  subjectType = 'scenic',
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[320px] sm:h-[350px] md:h-[380px] max-h-[400px] bg-[#070B10] overflow-hidden flex flex-col justify-end">
      {/* 1. Background Image with Atmospheric Darkness */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center filter brightness-[0.38] contrast-110"
          sizes="100vw"
        />
        {/* Directional Gradients for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B10]/95 via-[#070B10]/80 to-[#070B10]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B10] via-transparent to-[#070B10]/50 z-10" />
      </div>

      {/* 2. Ambient Golden Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-6 left-10 w-60 h-60 bg-[#C59B27]/10 rounded-full blur-[90px] pointer-events-none z-10" />

      {/* 3. Golden Sweep Wave Curve at Bottom (Flows into #FAF9F6 page body) */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none overflow-hidden h-12 sm:h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-8 sm:h-12 text-[#D4AF37]/30"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute -bottom-0.5 w-full h-6 sm:h-9 text-[#FAF9F6]"
        >
          <path
            d="M0,40 C300,10 600,80 900,20 C1050,-10 1150,20 1200,30 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 4. Main Hero Typography & Subject */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-6 sm:px-8 h-full flex items-center justify-between pt-16 sm:pt-20 pb-6 sm:pb-8">
        
        {/* Left Column: Title & Subtitle */}
        <div className="flex flex-col items-start gap-2.5 sm:gap-3 max-w-2xl">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15]">
            {highlightedWord && title.includes(highlightedWord) ? (
              <>
                {title.split(highlightedWord)[0]}
                <span className="bg-gradient-to-r from-[#FFF0C2] via-[#E2B743] to-[#B3891E] bg-clip-text text-transparent">
                  {highlightedWord}
                </span>
                {title.split(highlightedWord)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
            {subtitle}
          </p>
        </div>

        {/* Right Column: Matching Subject Visual (Minister / Book) */}
        {subjectType === 'minister' && subjectImage && (
          <div className="hidden sm:flex relative h-[220px] sm:h-[260px] md:h-[300px] aspect-[1008/1080] shrink-0 self-end z-20">
            <Image
              src={subjectImage}
              alt={subjectImageAlt || 'Minister Ogbu Otola'}
              fill
              priority
              className="object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] contrast-105"
              sizes="(max-width: 768px) 240px, 300px"
            />
          </div>
        )}

        {subjectType === 'book' && subjectImage && (
          <div className="hidden sm:flex relative h-[180px] sm:h-[220px] md:h-[250px] aspect-[1/1.45] shrink-0 self-center z-20 rounded-r-lg rounded-l-xs overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-l-4 border-l-black/60 border-y border-r border-white/20">
            <Image
              src={subjectImage}
              alt={subjectImageAlt || 'The Bible and Alcohol'}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 160px, 180px"
            />
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 via-white/10 to-transparent pointer-events-none" />
          </div>
        )}

      </div>
    </section>
  );
}
