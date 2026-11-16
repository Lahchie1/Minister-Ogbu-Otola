import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { blogPosts } from '@/data/blog';
import { BookOpen, Clock, ArrowRight, ShieldCheck, ScrollText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Teaching & Expository Archives — Minister Ogbu Otola',
  description:
    'Biblical outlines, expository papers, and doctrinal studies on the apostolic pattern, New Testament worship, and church restoration by Minister Ogbu Otola.',
};

export default function BlogListingPage() {
  return (
    <div className="w-full pb-20">
      {/* 1. Page Hero */}
      <PageHero
        title="Teaching & Biblical Outlines"
        highlightedWord="Biblical Outlines"
        subtitle="Expository manuscripts, theological papers, and study treatises defending sound doctrine, clarifying apostolic worship, and contending earnestly for the faith once delivered."
        backgroundImage="/images/hero-teaching-bg.jpg"
        subjectType="scenic"
      />

      {/* 2. Main Page Content: Articles Directory */}
      <div id="articles" className="max-w-6xl mx-auto px-6 mt-8 sm:mt-12 flex flex-col gap-10">
        
        {/* Archival Directory Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E2DDD4]">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8B6512] font-bold">
              Doctrinal Expositions &amp; Manuscripts
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A365D] tracking-tight">
              Published Papers &amp; Study Outlines
            </h2>
          </div>
          <span className="font-sans text-xs text-[#4A5568]">
            Showing {blogPosts.length} Selected Manuscripts
          </span>
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-[#E2DDD4] p-7 sm:p-9 rounded-2xl flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(26,35,50,0.08)] transition-all duration-200 group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between font-sans text-xs text-[#4A5568]">
                  <span className="px-2.5 py-0.5 bg-[#F8F6F1] border border-[#E2DDD4] text-[#8B6512] font-bold uppercase tracking-wider rounded">
                    {post.category}
                  </span>
                  <span>{post.publishedAt}</span>
                </div>

                <Link href={`/teaching/${post.slug}`}>
                  <h2 className="font-serif text-2xl font-bold text-[#1A365D] group-hover:text-[#8B6512] transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="font-sans text-sm text-[#1A202C] leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-2 text-xs text-[#4A5568] font-sans">
                  <span className="font-semibold text-[#1A365D]">Key Scripture:</span>{' '}
                  <span className="text-[#8B6512] font-bold">{post.scriptureReference}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2DDD4] flex items-center justify-between font-sans text-xs">
                <span className="text-[#4A5568] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>{post.readTime}</span>
                </span>

                <Link
                  href={`/teaching/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-[#1A365D] group-hover:text-[#8B6512] transition-colors"
                >
                  <span>Read Treatise</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A017]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
