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
  Sparkles,
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
      <section className="py-12 md:py-16 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E5E2DA]">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#9A7516] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Authoritative Biblical Publication</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2332] tracking-tight">
                Featured Book &amp; Treatise
              </h2>
            </div>
            <Link
              href="/books"
              className="group inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[#1A2332] hover:text-[#9A7516] transition-colors"
            >
              <span>Explore Publication Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D4AF37]" />
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
              className="group flex items-start gap-4 p-6 sm:p-7 bg-white border border-[#E5E2DA] hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-200 rounded-2xl"
            >
              <div className="w-13 h-13 rounded-xl bg-[#F8F7F4] group-hover:bg-[#1A2332] group-hover:text-white flex items-center justify-center shrink-0 text-[#9A7516] border border-[#E5E2DA] transition-colors duration-200">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#1A2332] group-hover:text-[#9A7516] transition-colors">
                    Bible Study &amp; Sound Doctrine
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#555E6D] group-hover:translate-x-1 group-hover:text-[#D4AF37] transition-all" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#555E6D] leading-relaxed">
                  Systematic study guides, sermon outlines, and topical textual breakdowns structured for personal discernment and Bible class curricula.
                </p>
              </div>
            </Link>

            <Link
              href="/resources#restoration-history"
              className="group flex items-start gap-4 p-6 sm:p-7 bg-white border border-[#E5E2DA] hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-200 rounded-2xl"
            >
              <div className="w-13 h-13 rounded-xl bg-[#F8F7F4] group-hover:bg-[#1A2332] group-hover:text-white flex items-center justify-center shrink-0 text-[#9A7516] border border-[#E5E2DA] transition-colors duration-200">
                <History className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#1A2332] group-hover:text-[#9A7516] transition-colors">
                    Restoration Movement &amp; History
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#555E6D] group-hover:translate-x-1 group-hover:text-[#D4AF37] transition-all" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#555E6D] leading-relaxed">
                  Historical monographs analyzing the non-denominational plea for simple New Testament Christianity and the Lord&apos;s church in Nigeria.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Recent Teaching Articles / Expository Papers */}
      <section className="py-14 md:py-20 bg-[#F1EFEA]/70 border-y border-[#E5E2DA]">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E5E2DA]">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-xs uppercase tracking-widest text-[#9A7516] font-bold">
                Expository Archives &amp; Papers
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2332] tracking-tight">
                Recent Expositions &amp; Manuscripts
              </h2>
            </div>
            <Link
              href="/teaching"
              className="group inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[#1A2332] hover:text-[#9A7516] transition-colors"
            >
              <span>View All Teaching</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D4AF37]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#E5E2DA] p-7 sm:p-9 rounded-2xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(26,35,50,0.08)] transition-all duration-200 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between font-sans text-xs text-[#555E6D]">
                    <span className="px-2.5 py-0.5 bg-[#FAF9F6] border border-[#E5E2DA] text-[#9A7516] font-bold uppercase tracking-wider rounded">
                      {post.category}
                    </span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <Link href={`/teaching/${post.slug}`}>
                    <h3 className="font-serif text-2xl font-bold text-[#1A2332] group-hover:text-[#9A7516] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="font-sans text-sm text-[#1E232A] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E2DA] flex items-center justify-between font-sans text-xs">
                  <span className="text-[#555E6D] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{post.readTime} • {post.scriptureReference}</span>
                  </span>

                  <Link
                    href={`/teaching/${post.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-[#1A2332] hover:text-[#9A7516] transition-colors"
                  >
                    <span>Read Treatise</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Berean Inquiry Callout Banner */}
      <section className="mt-14 px-6 max-w-6xl mx-auto w-full">
        <div className="p-8 sm:p-10 md:p-12 bg-gradient-to-r from-[#1A2332] to-[#0A0F14] text-white border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle gold emblem backdrop */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col gap-2 max-w-xl relative z-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
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
            className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B3891E] hover:from-[#E6C65A] hover:to-[#C59B27] text-[#0A0F14] font-sans text-sm font-bold rounded-xl shadow-lg transition-all duration-150 shrink-0 relative z-10 active:scale-95"
          >
            <span>Send Scriptural Inquiry</span>
            <Mail className="w-4 h-4 text-[#0A0F14]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
