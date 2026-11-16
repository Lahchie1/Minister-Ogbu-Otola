'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ShieldCheck } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/books', label: 'Books' },
  { href: '/resources', label: 'Resources' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showDarkNav = scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showDarkNav ? 'bg-[#0D1B2E]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent'}`}>
      {/* Main Navigation Bar */}
        <div className="h-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group text-left">
            <Image
              src="/logo/logo-w.svg"
              alt="Ogbu Otola — Minister of the Gospel"
              width={140}
              height={67}
              priority
              className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-sans text-[15px]">
            <nav className="flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-150 ${
                      active
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4A017] via-[#E8C547] to-[#D4A017] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact?reason=scriptural"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4A017] to-[#A07615] hover:from-[#E8C547] hover:to-[#B8891A] text-[#091525] rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 border border-[#D4A017]/50"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#091525]" />
              <span>Berean Inquiry</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-[#D4A017] focus:outline-none focus:ring-2 focus:ring-[#D4A017] rounded-lg border border-white/15"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#091525]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2 font-sans text-base">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3.5 rounded-lg transition-colors ${
                      active
                        ? 'bg-white/10 text-[#D4A017] font-bold border-l-4 border-[#D4A017]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 px-4 bg-gradient-to-r from-[#D4A017] to-[#A07615] text-[#091525] font-bold rounded-lg block shadow-md text-sm uppercase tracking-wider"
                >
                  Book Orders &amp; Inquiries
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
  );
}
