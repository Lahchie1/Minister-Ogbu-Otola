'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/data/books';
import {
  ShoppingBag,
  Truck,
  ExternalLink,
  ChevronDown,
  CheckCircle,
  Sparkles,
  BookOpen,
  ArrowRight,
  Download,
} from 'lucide-react';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export default function BookCard({ book, featured = false }: BookCardProps) {
  const [ebookDropdownOpen, setEbookDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setEbookDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setEbookDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <article
      id={book.id}
      className={`bg-white border border-[#E5E2DA] rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(26,35,50,0.08)] transition-all duration-300 flex flex-col ${
        featured ? 'lg:flex-row gap-8 lg:gap-12 items-start' : 'gap-6 justify-between'
      }`}
    >
      {/* 3D Realistic Book Presentation */}
      <div
        className={`relative ${
          featured ? 'w-full lg:w-80 shrink-0' : 'w-full'
        } flex flex-col items-center justify-center`}
      >
        <div className="relative group/book perspective-1000 py-3">
          {/* Ambient Book Floor Glow */}
          <div className="absolute -bottom-3 left-6 right-6 h-6 bg-[#0C1219]/30 blur-lg rounded-full transform scale-95 transition-transform group-hover/book:scale-105" />

          {/* Book Image Frame with 3D Depth */}
          <div className="relative w-56 sm:w-64 aspect-[1/1.45] rounded-r-xl rounded-l-sm overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.25),inset_4px_0_12px_rgba(0,0,0,0.3)] border-l-4 border-l-black/50 border-y border-r border-[#E5E2DA] transform transition-transform duration-300 group-hover/book:-translate-y-1.5">
            {/* Book Spine Texture Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 via-white/10 to-transparent z-20 pointer-events-none" />

            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              priority
              className="object-cover object-center z-10"
              sizes="(max-width: 640px) 224px, 256px"
            />
          </div>
        </div>

        {/* Pricing & Format Tag directly under cover */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="font-serif text-2xl font-bold text-[#1A2332]">
            {book.price}
          </span>
          {book.originalPrice && (
            <span className="font-sans text-sm text-[#555E6D] line-through">
              {book.originalPrice}
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EBF5EE] text-[#1E6B42] border border-[#1E6B42]/20">
            {book.format}
          </span>
        </div>
      </div>

      {/* Book Metadata and Editorial Information */}
      <div className="flex-1 flex flex-col justify-between self-stretch">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-sans text-xs uppercase tracking-wider text-[#9A7516] font-bold">
              {book.tagline}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF5EE] text-[#1E6B42] border border-[#1E6B42]/20">
              <span className="w-2 h-2 rounded-full bg-[#1E6B42]" />
              Only Published Work
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2332] leading-tight">
            {book.title}
          </h3>

          <p className="font-sans text-sm sm:text-base text-[#1E232A] leading-relaxed">
            {book.description}
          </p>

          {book.fullOverview && featured && (
            <p className="font-sans text-xs sm:text-sm text-[#555E6D] leading-relaxed">
              {book.fullOverview}
            </p>
          )}

          {/* Academic / Theological Endorsement Quote */}
          {book.endorsement && (
            <div className="my-2 p-5 bg-[#FAF9F6] border-l-4 border-[#D4AF37] rounded-r-xl border-y border-r border-[#E5E2DA]">
              <p className="font-serif italic text-sm sm:text-[15px] text-[#1A2332] leading-relaxed">
                &ldquo;{book.endorsement.quote}&rdquo;
              </p>
              <div className="mt-2 text-xs font-sans text-[#555E6D]">
                <strong className="text-[#1A2332] font-semibold">
                  {book.endorsement.scholar}
                </strong>{' '}
                — {book.endorsement.title}
              </div>
            </div>
          )}

          {/* Book Features Checklist */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="font-sans text-xs font-bold text-[#1A2332] uppercase tracking-wider">
              Inside This Publication:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {book.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2 text-xs text-[#555E6D]"
                >
                  <CheckCircle className="w-4 h-4 text-[#1E6B42] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-8 pt-6 border-t border-[#E5E2DA] flex flex-wrap items-center gap-3 relative">
          
          {/* Order Ebook Button with Popover Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setEbookDropdownOpen(!ebookDropdownOpen)}
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#1A2332] hover:bg-[#253245] active:scale-95 text-white font-sans text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer"
              aria-expanded={ebookDropdownOpen}
              aria-haspopup="true"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              <span>Order Ebook</span>
              <ChevronDown
                className={`w-4 h-4 text-[#D4AF37] transition-transform duration-200 ${
                  ebookDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Platform Selection Popover Menu */}
            {ebookDropdownOpen && (
              <div className="absolute left-0 bottom-full sm:bottom-auto sm:top-full mb-2 sm:mb-0 sm:mt-2 w-72 sm:w-80 bg-white border border-[#E5E2DA] rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-2 border-b border-[#E5E2DA]/60">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#9A7516]">
                    Select Your Preferred Platform
                  </span>
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  {book.ebookPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setEbookDropdownOpen(false)}
                      className={`group flex items-start justify-between p-3 rounded-xl transition-all ${
                        platform.isRecommended
                          ? 'bg-[#FAF9F6] border border-[#D4AF37]/40 hover:bg-[#F3EFE6]'
                          : 'hover:bg-[#F8F7F4]'
                      }`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="font-sans text-sm font-bold text-[#1A2332] group-hover:text-[#9A7516] transition-colors">
                            {platform.name}
                          </span>
                          {platform.isRecommended && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#D4AF37] text-[#0A0F14]">
                              Instant
                            </span>
                          )}
                        </div>
                        <span className="font-sans text-[11px] text-[#555E6D] leading-tight">
                          {platform.description}
                        </span>
                        <span className="font-sans text-xs font-semibold text-[#1E6B42] mt-1">
                          {platform.badge}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#555E6D] group-hover:text-[#D4AF37] transition-colors shrink-0 mt-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Local Dispatch / Inquiry */}
          <Link
            href={`/contact?reason=book-purchase&book=${book.slug}`}
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B3891E] hover:from-[#E6C65A] hover:to-[#C59B27] text-[#0A0F14] font-sans text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
          >
            <Truck className="w-4 h-4 text-[#0A0F14]" />
            <span>Order in Nigeria (Local Dispatch)</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
