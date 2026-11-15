import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Minister Ogbu Otola — Sound Scriptural Teaching, Books & Research',
  description:
    'Official digital platform of Minister Ogbu Otola (Church of Christ, Lawanson, Lagos, Nigeria). Published doctrinal books, New Testament restoration resources, and sound apostolic teaching.',
  keywords: [
    'Ogbu Otola',
    'Minister Ogbu Otola',
    'Church of Christ Lawanson',
    'Church of Christ Nigeria',
    'New Testament Pattern',
    'Apostolic Teaching',
    'Sound Doctrine Books',
    'Restoration Movement Nigeria',
  ],
  authors: [{ name: 'Minister Ogbu Otola' }],
  openGraph: {
    title: 'Minister Ogbu Otola — Sound Scriptural Teaching & Books',
    description:
      'A focused digital hub for accurate Church of Christ doctrine, published books, and vetted study resources in Nigeria and worldwide.',
    url: 'https://ogbuotola.org',
    siteName: 'Minister Ogbu Otola',
    locale: 'en_NG',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E232A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

