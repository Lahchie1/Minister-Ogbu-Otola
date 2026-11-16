'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Church,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0D1B2E] text-slate-300 overflow-hidden border-t border-[#D4A017]/20 pt-16 pb-12">
      {/* 1. Ambient Golden Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1A365D]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1 (lg:col-span-4): Brand & Ministerial Calling */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo/logo-w.svg"
                alt="Ogbu Otola — Minister of the Gospel"
                width={150}
                height={72}
                className="h-11 w-auto transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>

            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-1">
              Minister of the Gospel serving the Church of Christ at Lawanson, Lagos. Committed to apostolic doctrine, expository biblical treatises, and the restoration of primitive New Testament Christianity.
            </p>

            {/* Assembly Base Info Card */}
            <div className="w-full max-w-sm p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2.5 text-xs text-white font-semibold">
                <Church className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>Church of Christ, Lawanson</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#D4A017]/80 shrink-0" />
                <span>Surulere, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-[#D4A017]/80 shrink-0" />
                <span>Sunday Worship: 9:00 AM • Midweek Bible Class: Wed 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2 (lg:col-span-2): Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D4A017] font-bold">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 font-sans text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  About Minister
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Published Books
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Study Resources
                </Link>
              </li>
              <li>
                <Link href="/teaching" className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Teaching Archives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Pastoral Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (lg:col-span-3): Featured Treatises & Outlets */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D4A017] font-bold">
              Featured Publication
            </span>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col gap-2.5">
              <span className="font-serif text-sm font-bold text-white leading-snug">
                The Bible and Alcohol: Truth Beyond Tradition
              </span>
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                256 Pages • Covenant Daystar Publishers. Exhaustive exegetical and historical examination.
              </p>
              <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                <a
                  href="https://selar.com/2179039tz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-semibold text-[#D4A017] hover:text-[#FFF3CC] transition-colors"
                >
                  <span>Order on Selar (₦3,500)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.lulu.com/shop/joshua-otola-ogbu/the-bible-and-alcohol/ebook/product-dyqym9k.html?q=The+Bible+and+Alcohol+Ogbu+Joshua+Otola&page=1&pageSize=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>Order on Lulu</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 (lg:col-span-3): Pastoral Correspondence Card */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D4A017] font-bold">
              Pastoral Inquiries
            </span>
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#1A365D]/80 to-[#091525]/90 border border-[#D4A017]/30 shadow-lg flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4A017]/15 flex items-center justify-center text-[#D4A017]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-serif text-sm font-bold text-white">
                  Direct Correspondence
                </span>
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Submit questions on biblical doctrine, book copies, interstate dispatches, or gospel meetings.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#D4A017] to-[#B8891A] hover:from-[#E8C547] hover:to-[#D4A017] text-[#091525] font-sans text-xs font-bold rounded-lg shadow transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <span>Submit Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Theological Landmark & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Minister Ogbu Joshua Otola. All rights reserved.</p>

          <p className="font-serif italic text-center text-slate-300 text-xs sm:text-sm">
            &ldquo;To speak where the Bible speaks, and to be silent where the Bible is silent.&rdquo;
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4A017]/40 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4A017]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
