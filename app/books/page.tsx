'use client';

import Link from 'next/link';
import { books } from '@/data/books';
import BookCard from '@/components/BookCard';
import PageHero from '@/components/PageHero';
import {
  BookOpen,
  ShieldCheck,
  Package,
  ArrowRight,
  Truck,
  Sparkles,
  Download,
  GraduationCap,
  ListOrdered,
  ExternalLink,
} from 'lucide-react';

export default function BooksPage() {
  const publishedBook = books[0];

  return (
    <div className="w-full pb-20">
      {/* 1. Page Hero */}
      <PageHero
        title="The Bible and Alcohol: Truth Beyond Tradition"
        highlightedWord="Truth Beyond Tradition"
        subtitle="Drawing on the original Hebrew and Greek, two thousand years of church history, and modern medical science, Ogbu Joshua Otola delivers an exhaustive, balanced, and deeply biblical examination."
        backgroundImage="/images/hero-books-bg.jpg"
        subjectType="book"
        subjectImage="/images/the-bible-and-alcohol.png"
        subjectImageAlt="The Bible and Alcohol by Ogbu Joshua Otola"
      />

      {/* 2. Main Page Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8 sm:mt-12 flex flex-col gap-12">
        
        {/* Status / Availability Notice */}
        <div className="bg-white border border-[#E5E2DA] p-5 sm:p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3 text-[#555E6D] font-sans text-xs sm:text-sm">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Now officially available in eBook / PDF format. Direct download available on <strong>Selar</strong> via Naira card and instant bank transfer. Also listed on <strong>Lulu</strong> for international readers.
            </span>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0 font-sans text-xs">
            <a
              href="https://selar.com/2179039tz9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#1E6B42] hover:underline"
            >
              <span>Selar Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://www.lulu.com/shop/joshua-otola-ogbu/the-bible-and-alcohol/ebook/product-dyqym9k.html?q=The+Bible+and+Alcohol+Ogbu+Joshua+Otola&page=1&pageSize=4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#9A7516] hover:underline"
            >
              <span>Lulu Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Detailed Book Card Presentation */}
        <section className="w-full">
          <BookCard book={publishedBook} featured={true} />
        </section>

        {/* Extended Chapter Breakdown / Table of Contents */}
        {publishedBook.tableOfContents && (
          <section className="w-full bg-white border border-[#E5E2DA] rounded-2xl p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DA]">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9A7516] font-bold">
                    <ListOrdered className="w-4 h-4" />
                    <span>Comprehensive Structural Outline</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2332]">
                    Table of Contents &amp; Chapter Expositions
                  </h3>
                </div>
                <span className="hidden sm:inline-block font-sans text-xs text-[#555E6D]">
                  256 Pages • 10 Core Chapters
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {publishedBook.tableOfContents.map((chap, i) => (
                  <div
                    key={chap}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E2DA]/80"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#1A2332] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-medium text-[#1E232A] leading-relaxed">
                      {chap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Inquiries & Bulk Copies Banner */}
        <section
          id="bulk-inquiries"
          className="w-full bg-gradient-to-br from-[#1A2332] via-[#141C28] to-[#0A0F14] text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-[#D4AF37] font-sans text-xs uppercase tracking-wider font-bold">
                <Package className="w-4 h-4" />
                <span>Congregational &amp; Ministry Distribution</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Inquiries &amp; Bulk Copies for Nigerian Congregations
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                Need copies for your local congregation, youth fellowship, preacher training school, or personal evangelism? Contact Minister Ogbu Joshua Otola directly for discounted distribution within Nigeria.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/contact?reason=book-purchase&book=the-bible-and-alcohol"
                className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B3891E] hover:from-[#E6C65A] hover:to-[#C59B27] text-[#0A0F14] font-sans text-sm font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Truck className="w-4 h-4 text-[#0A0F14]" />
                <span>Submit a Bulk Order Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
