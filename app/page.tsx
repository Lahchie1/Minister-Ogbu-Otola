'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import StackedScrollSection from '@/components/StackedScrollSection';
import BookCard from '@/components/BookCard';
import { books } from '@/data/books';
import { blogPosts } from '@/data/blog';
import {
  ArrowRight,
  BookOpen,
  History,
  FileCheck2,
  Mail,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export default function HomePage() {
  const publishedBook = books[0];
  const recentArticles = blogPosts.slice(0, 2);

  return (
    <div className="flex flex-col w-full pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Four Scriptural Pillars — Scroll-driven stacked cards */}
      <StackedScrollSection />

      {/* 3. Featured Publications & Key Works */}
      <section className="py-12 md:py-16 bg-[#1A365D]">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/20">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#D4A017] font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Authoritative Biblical Publication</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Featured Book &amp; Treatise
              </h2>
            </div>
            <Link
              href="/books"
              className="group inline-flex items-center gap-1.5 font-sans text-sm font-bold text-white/80 hover:text-[#D4A017] transition-colors"
            >
              <span>Explore Publication Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D4A017]" />
            </Link>
          </div>

          {/* Featured Single Published Book */}
          <div className="w-full">
            <BookCard book={publishedBook} featured={true} />
          </div>

          {/* Featured Study Resources Preview Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
            <Link
              href="/resources#bible-doctrine"
              className="group flex items-start gap-4 p-6 sm:p-7 bg-white/10 border border-white/20 hover:border-[#D4A017] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-200 rounded-2xl"
            >
              <div className="w-13 h-13 rounded-xl bg-white/10 group-hover:bg-[#D4A017] group-hover:text-[#091525] flex items-center justify-center shrink-0 text-[#D4A017] border border-white/20 transition-colors duration-200">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#D4A017] transition-colors">
                    Bible Study &amp; Sound Doctrine
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 group-hover:text-[#D4A017] transition-all" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  Systematic study guides, sermon outlines, and topical textual breakdowns structured for personal discernment and Bible class curricula.
                </p>
              </div>
            </Link>

            <Link
              href="/resources#restoration-history"
              className="group flex items-start gap-4 p-6 sm:p-7 bg-white/10 border border-white/20 hover:border-[#D4A017] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-200 rounded-2xl"
            >
              <div className="w-13 h-13 rounded-xl bg-white/10 group-hover:bg-[#D4A017] group-hover:text-[#091525] flex items-center justify-center shrink-0 text-[#D4A017] border border-white/20 transition-colors duration-200">
                <History className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#D4A017] transition-colors">
                    Restoration Movement &amp; History
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 group-hover:text-[#D4A017] transition-all" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  Historical monographs analyzing the non-denominational plea for simple New Testament Christianity and the Lord&apos;s church in Nigeria.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Recent Teaching Articles / Expository Papers */}
      <section className="py-14 md:py-20 bg-[#D4A017]">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#091525]/20">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-xs uppercase tracking-widest text-[#091525]/70 font-bold">
                Expository Archives &amp; Papers
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#091525] tracking-tight">
                Recent Expositions &amp; Manuscripts
              </h2>
            </div>
            <Link
              href="/teaching"
              className="group inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[#091525] hover:text-[#1A365D] transition-colors"
            >
              <span>View All Teaching</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#1A365D]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#E2DDD4] p-7 sm:p-9 rounded-2xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(26,35,50,0.12)] transition-all duration-200 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between font-sans text-xs text-[#4A5568]">
                    <span className="px-2.5 py-0.5 bg-[#F8F6F1] border border-[#E2DDD4] text-[#8B6512] font-bold uppercase tracking-wider rounded">
                      {post.category}
                    </span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <Link href={`/teaching/${post.slug}`}>
                    <h3 className="font-serif text-2xl font-bold text-[#1A365D] group-hover:text-[#8B6512] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="font-sans text-sm text-[#1A202C] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2DDD4] flex items-center justify-between font-sans text-xs">
                  <span className="text-[#4A5568] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span>{post.readTime} • {post.scriptureReference}</span>
                  </span>

                  <Link
                    href={`/teaching/${post.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-[#1A365D] hover:text-[#8B6512] transition-colors"
                  >
                    <span>Read Treatise</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4A017]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Berean Inquiry Callout Banner */}
      <section className="mt-14 px-6 max-w-6xl mx-auto w-full">
        <div className="p-8 sm:p-10 md:p-12 bg-gradient-to-r from-[#1A365D] to-[#091525] text-white border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle gold emblem backdrop */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#D4A017]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col gap-2 max-w-xl relative z-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D4A017] font-bold">
              Scriptural Examination
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Have a scriptural question or need study guidance?
            </h3>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              Direct theological correspondence regarding biblical texts, church leadership, or published volumes is welcomed. Minister Otola reviews correspondence with pastoral diligence.
            </p>
          </div>

          <Link
            href="/contact?reason=scriptural"
            className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#D4A017] to-[#A07615] hover:from-[#E8C547] hover:to-[#B8891A] text-[#091525] font-sans text-sm font-bold rounded-xl shadow-lg transition-all duration-150 shrink-0 relative z-10 active:scale-95"
          >
            <span>Send Scriptural Inquiry</span>
            <Mail className="w-4 h-4 text-[#091525]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
