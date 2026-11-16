import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { books } from '@/data/books';
import { resourceCategories } from '@/data/resources';
import { ArrowLeft, Clock, BookOpen, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} — Minister Ogbu Otola`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedBook = post.relatedBookSlug
    ? books.find((b) => b.slug === post.relatedBookSlug)
    : null;

  const relatedResource = post.relatedResourceId
    ? resourceCategories
        .flatMap((cat) => cat.items)
        .find((item) => item.id === post.relatedResourceId)
    : null;

  const paragraphs = post.content.split('\n\n').filter((p) => p.trim());
  let hasRenderedFirstParagraph = false;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 sm:pt-32 pb-16">
      {/* Back button */}
      <Link
        href="/teaching"
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4A5568] hover:text-[#1A365D] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-[#D4A017]" />
        <span>Back to Expository Archives</span>
      </Link>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-[#E2DDD4]">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#4A5568] font-sans mb-3">
          <span className="px-3 py-1 bg-[#F8F6F1] border border-[#E2DDD4] text-[#8B6512] font-bold uppercase tracking-wider rounded-md">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#4A5568]">
            <Clock className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#4A5568] pt-3 border-t border-[#E2DDD4]/60">
          <div>
            By <strong className="text-[#1A365D]">{post.author}</strong> • Minister of the Gospel
          </div>
          <div className="inline-flex items-center gap-1.5 text-[#8B6512] font-semibold bg-[#F8F6F1] px-3 py-1 rounded-md border border-[#E2DDD4]">
            <BookOpen className="w-4 h-4 text-[#D4A017]" />
            <span>Scripture Anchor: {post.scriptureReference}</span>
          </div>
        </div>
      </header>

      {/* Article Body Content with Editorial Drop Cap */}
      <article className="prose prose-slate max-w-none font-sans text-base leading-relaxed text-[#1A202C] space-y-6">
        {paragraphs.map((paragraph, index) => {
          const trimmed = paragraph.trim();

          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={index} className="font-serif text-2xl font-bold text-[#1A365D] pt-6 pb-2 border-b border-[#E2DDD4]/60">
                {trimmed.replace('### ', '')}
              </h3>
            );
          }

          if (trimmed.startsWith('> ')) {
            return (
              <blockquote
                key={index}
                className="border-l-4 border-[#D4A017] pl-5 py-3 my-6 bg-[#F8F6F1] rounded-r-xl text-[#1A365D] italic font-serif text-base sm:text-lg leading-relaxed shadow-sm"
              >
                {trimmed.replace('> ', '')}
              </blockquote>
            );
          }

          if (trimmed.startsWith('- ')) {
            const listItems = trimmed.split('\n').map((li) => li.replace('- ', '').trim());
            return (
              <ul key={index} className="list-disc pl-6 space-y-2.5 text-[#1A202C]">
                {listItems.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            );
          }

          if (/^\d+\.\s/.test(trimmed)) {
            const listItems = trimmed.split('\n').map((li) => li.replace(/^\d+\.\s/, '').trim());
            return (
              <ol key={index} className="list-decimal pl-6 space-y-2.5 text-[#1A202C]">
                {listItems.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ol>
            );
          }

          // Apply editorial drop cap to first narrative paragraph
          if (!hasRenderedFirstParagraph) {
            hasRenderedFirstParagraph = true;
            return (
              <p
                key={index}
                className="text-base sm:text-lg text-[#1A202C] leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#1A365D] first-letter:float-left first-letter:mr-3 first-letter:leading-none"
              >
                {trimmed}
              </p>
            );
          }

          return (
            <p key={index} className="text-[#1A202C] leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </article>

      {/* Post-reading Signature & Berean Examination */}
      <div className="mt-14 pt-8 border-t border-[#E2DDD4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border border-[#E2DDD4] p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#1A365D] border border-[#D4A017]/50 text-[#D4A017] flex items-center justify-center font-serif font-bold text-base shadow-sm">
            OO
          </div>
          <div>
            <p className="font-serif font-bold text-[#1A365D] text-base">Minister Ogbu Otola</p>
            <p className="font-sans text-xs text-[#4A5568]">Church of Christ, Lawanson, Lagos, Nigeria</p>
          </div>
        </div>

        <Link
          href="/contact?reason=scriptural"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F8F6F1] hover:bg-[#E2DDD4] text-[#1A365D] rounded-lg border border-[#E2DDD4] text-xs font-bold transition-colors"
        >
          <span>Send Inquiry About This Study</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D4A017]" />
        </Link>
      </div>

      {/* Related Study Resources and Books Box */}
      {(relatedBook || relatedResource) && (
        <section className="mt-12 bg-white border border-[#E2DDD4] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8B6512] font-bold mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Further Study</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1A365D] mb-6">
            Related Literature &amp; Study Materials
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedBook && (
              <div className="p-5 bg-[#F8F6F1] border border-[#E2DDD4] rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#8B6512] uppercase tracking-wider">
                    Published Volume
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#1A365D] mt-1">
                    {relatedBook.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
                    {relatedBook.description}
                  </p>
                </div>
                <Link
                  href={`/books#${relatedBook.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#1A365D] hover:text-[#8B6512]"
                >
                  <span>Order or read excerpt</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A017]" />
                </Link>
              </div>
            )}

            {relatedResource && (
              <div className="p-5 bg-[#F8F6F1] border border-[#E2DDD4] rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#8B6512] uppercase tracking-wider">
                    Curated External Study
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#1A365D] mt-1">
                    {relatedResource.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
                    {relatedResource.description}
                  </p>
                </div>
                <a
                  href={relatedResource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#1A365D] hover:text-[#8B6512]"
                >
                  <span>{relatedResource.linkLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A017]" />
                </a>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}