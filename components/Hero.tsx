'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight, Quote } from 'lucide-react';

const characterTestimonies = [
  {
    id: 1,
    quote: '"A steadfast defender of apostolic truth and New Testament pattern."',
    author: '— Elder E. Okoro, Church of Christ, Lagos',
    angleClass: '-rotate-[10deg]',
  },
  {
    id: 2,
    quote: '"Three decades of uncompromised biblical exposition and pastoral care."',
    author: '— Evang. J. Adebayo, Gospel Preacher',
    angleClass: 'rotate-[10deg]',
  },
  {
    id: 3,
    quote: '"Clear doctrinal treatises establishing believers in sound doctrine."',
    author: '— Bro. M. Nwachukwu, Assembly Teacher',
    angleClass: '-rotate-[10deg]',
  },
];

// OGBU / OTOLA word style (desktop and mobile)
const wordStyle =
  'font-cinzel font-black text-6xl sm:text-7xl leading-[0.85] tracking-tight bg-gradient-to-b from-[#FFF3D1] via-[#E2B743] to-[#8A630A] bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] opacity-95 select-none pointer-events-none';

export default function Hero() {
  // Mobile: keep the minister cutout exactly 10px below the nav bar
  const [mobilePaddingTop, setMobilePaddingTop] = useState<string | null>(null);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    const update = () => setMobilePaddingTop(`${header.getBoundingClientRect().bottom + 10}px`);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className="relative w-full min-h-[900px] lg:min-h-[960px] xl:min-h-[1000px] bg-[#070B10] overflow-hidden flex flex-col justify-between pt-[120px] pb-16 md:pb-24 border-b border-[#D4AF37]/20"     style={{ paddingTop: mobilePaddingTop ?? undefined }}>
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-top opacity-60 mix-blend-luminosity filter contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B10]/60 via-transparent to-[#070B10]/95"></div>
        <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* 2. Minister Cutout Portrait: Centered, anchored to base of hero */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none hidden md:flex justify-center items-end h-[calc(100%-120px)] w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[760px]">
        <div className="absolute bottom-20 w-[360px] sm:w-[440px] md:w-[540px] h-[360px] sm:h-[440px] md:h-[540px] bg-radial from-[#D4AF37]/25 via-[#1A2332]/15 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="relative h-full w-full aspect-[1008/1080]">
          <Image
            src="/images/min-ogbu-otola.png"
            alt="Minister Ogbu Otola"
            fill
            priority
            className="object-contain object-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] contrast-105 brightness-100"
          />
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (hidden on mobile, shown md+) ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full hidden md:flex flex-col justify-start flex-1">
        <div className="w-full flex items-start justify-between gap-6 relative">
          
          {/* Left Column: Word 1 (OGBU) + h1, p, CTAs */}
          <div className="flex flex-col items-start z-30 w-full max-w-[280px] lg:max-w-[300px] xl:max-w-[320px]">
            {/* Word 1: OGBU */}
            <div className="w-full flex justify-start text-left select-none pointer-events-none z-10">
              <span className="font-cinzel font-black text-8xl lg:text-[115px] xl:text-[135px] 2xl:text-[150px] leading-[0.85] tracking-tight bg-gradient-to-b from-[#FFF3D1] via-[#E2B743] to-[#8A630A] bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] opacity-95">
                OGBU
              </span>
            </div>

            {/* h1, p, CTAs — 24px below Word 1 */}
            <div className="mt-[24px] flex flex-col items-start gap-4">
              <h1 className="font-serif text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-white tracking-tight leading-[1.14] drop-shadow-xl">
                Sound Scriptural Teaching, Published Works &amp; Curated Research
              </h1>

              <p className="font-sans text-slate-200 text-sm sm:text-[15px] leading-relaxed drop-shadow max-w-[220px] lg:max-w-[240px]">
                Equipping seekers and believers with uncompromised New Testament truth, authoritative doctrinal books, and apostolic exposition.
              </p>

              {/* CTAs stacked vertically so text stays on one line, 2nd CTA below 1st */}
              <div className="flex flex-col items-stretch gap-3 pt-1.5 w-full">
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B3891E] hover:from-[#E6C65A] hover:to-[#C59B27] text-[#0A0F14] font-sans text-sm font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all transform active:scale-95 whitespace-nowrap"
                >
                  <span>View Published Books</span>
                  <ArrowRight className="w-4 h-4 text-[#0A0F14]" />
                </Link>

                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-sans text-sm font-semibold rounded-lg transition-all whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>Explore Study Resources</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonies + Word 2 (OTOLA) — hidden on mobile */}
          <div className="flex flex-col items-end z-30 max-w-[280px] lg:max-w-[310px] pt-9 sm:pt-11">
            <div className="flex flex-col items-end gap-3.5 w-full">
              {characterTestimonies.map((item) => (
                <div
                  key={item.id}
                  className={`w-full bg-[#0A0F14]/90 backdrop-blur-md border border-[#D4AF37]/50 rounded-xl p-3 shadow-2xl transition-transform duration-300 hover:rotate-0 hover:scale-105 group ${item.angleClass}`}
                >
                  <div className="flex items-start gap-2">
                    <Quote className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5 opacity-80" />
                    <div className="flex flex-col">
                      <p className="font-serif text-xs text-slate-100 italic leading-snug">
                        {item.quote}
                      </p>
                      <p className="font-sans text-[10px] text-[#D4AF37] font-semibold tracking-wide uppercase mt-1">
                        {item.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Word 2: OTOLA — 200px vertical separation from OGBU */}
            <div className="w-full flex justify-end text-right select-none pointer-events-none z-10 mt-[29px]">
              <span className="font-cinzel font-black text-8xl lg:text-[115px] xl:text-[135px] 2xl:text-[150px] leading-[0.85] tracking-tight bg-gradient-to-b from-[#FFF3D1] via-[#E2B743] to-[#8A630A] bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] opacity-95">
                OTOLA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (shown on mobile, hidden md+) ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex md:hidden flex-col items-center justify-start">
        
        {/* Minister cutout: starts 10px below the nav bar, width fills the container */}
        <div className="relative w-full max-w-[360px] mx-auto aspect-[1008/1080]">
          {/* OGBU and OTOLA behind the portrait at vertical middle, 100px apart, flush to margins */}
          <div className="absolute left-0 z-0" style={{ top: 'calc(50% - 131px)' }}>
            <span className={wordStyle}>OGBU</span>
          </div>
          <div className="absolute right-0 z-0 text-right" style={{ top: 'calc(50% + 50px)' }}>
            <span className={wordStyle}>OTOLA</span>
          </div>
          {/* Rectangle below image to hide awkward base — matches OGBU gold text */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[296px] h-[8px] bg-[#D4AF37]"></div>
          <Image
            src="/images/min-ogbu-otola.png"
            alt="Minister Ogbu Otola"
            fill
            priority
            className="relative z-10 object-contain object-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] contrast-105 brightness-100"
          />
        </div>

        {/* h1, p, CTAs below the minister cutout — full container width, not blocked by the image */}
        <div className="mt-6 flex flex-col items-start gap-4 w-full z-30">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.14] drop-shadow-xl w-full">
            Sound Scriptural Teaching, Published Works &amp; Curated Research
          </h1>

          <p className="font-sans text-slate-200 text-sm sm:text-[15px] leading-relaxed drop-shadow w-full">
            Equipping seekers and believers with uncompromised New Testament truth, authoritative doctrinal books, and apostolic exposition.
          </p>

          {/* CTAs stacked, full width */}
          <div className="flex flex-col items-stretch gap-3 pt-1 w-full">
            <Link
              href="/books"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B3891E] hover:from-[#E6C65A] hover:to-[#C59B27] text-[#0A0F14] font-sans text-sm font-bold rounded-lg shadow-xl transition-all whitespace-nowrap"
            >
              <span>View Published Books</span>
              <ArrowRight className="w-4 h-4 text-[#0A0F14]" />
            </Link>

            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-sans text-sm font-semibold rounded-lg transition-all whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Study Resources</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
