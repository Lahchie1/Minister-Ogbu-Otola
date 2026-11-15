import { resourceCategories } from '@/data/resources';
import ResourceFilter from '@/components/ResourceFilter';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { ShieldCheck, Send, BookOpen, Sparkles, Library, FileSearch } from 'lucide-react';

export const metadata = {
  title: 'Curated Biblical Study Resources — Minister Ogbu Otola',
  description:
    'A vetted repository of New Testament Church of Christ study guides, doctrinal outlines, Restoration Movement history, and audio/video resources curated by Minister Ogbu Otola.',
};

export default function ResourcesPage() {
  return (
    <div className="w-full pb-20">
      {/* 1. Page Hero */}
      <PageHero
        title="Curated Biblical Study Resources"
        highlightedWord="Study Resources"
        subtitle="A vetted collection of New Testament Church of Christ research materials, doctrinal outlines, historical archives, and textual study tools to assist believers and seekers in examining the Scriptures with Berean diligence."
        backgroundImage="/images/hero-resources-bg.jpg"
        subjectType="scenic"
      />

      {/* 2. Main Page Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8 sm:mt-12 flex flex-col gap-10">
        
        {/* Doctrinal Standard Assurance Banner */}
        <section className="w-full">
          <div className="bg-[#FAF9F6] border-l-4 border-[#C59B27] p-5 sm:p-6 rounded-r-2xl border-y border-r border-[#E5E2DA] flex items-start gap-4 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="font-sans text-xs uppercase tracking-wider text-[#9A7516] font-bold">
                Scriptural Doctrinal Standard
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#1A2332] font-medium leading-relaxed">
                All external links, historical monographs, and study outlines indexed in this repository are vetted for doctrinal soundness and strict adherence to the apostolic pattern (<span className="font-bold text-[#1A2332]">Acts 17:11</span>).
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Search & Categorized Directory */}
        <div id="directory">
          <ResourceFilter categories={resourceCategories} />
        </div>

        {/* Suggestion & Research Submission Box */}
        <section className="w-full pt-8 border-t border-[#E5E2DA]">
          <div className="bg-white border border-[#E5E2DA] p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
            <div className="flex flex-col max-w-xl">
              <div className="flex items-center gap-2 mb-1 text-xs uppercase tracking-wider text-[#9A7516] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Collaborative Verification</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A2332]">
                Suggest Sound Research Links for Review
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#555E6D] mt-1.5 leading-relaxed">
                Have you encountered a dependable scholarly treatise, digital archive, or historical Restoration record that adheres to New Testament authority? Submit it to Minister Ogbu Otola for review and potential inclusion in this study index.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact?reason=scriptural"
                className="inline-flex items-center gap-2 bg-[#1A2332] hover:bg-[#253245] text-white px-6 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all shadow-md active:scale-95"
              >
                <span>Submit a Resource for Review</span>
                <Send className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
