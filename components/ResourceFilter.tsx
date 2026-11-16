'use client';

import { useState, useMemo } from 'react';
import { ResourceCategory } from '@/data/resources';
import { Search, ExternalLink, ShieldCheck, FileText, Headphones, BookOpen, CheckCircle2 } from 'lucide-react';

interface ResourceFilterProps {
  categories: ResourceCategory[];
}

export default function ResourceFilter({ categories }: ResourceFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return categories
      .map((cat) => {
        if (activeCategory !== 'all' && cat.id !== activeCategory) {
          return null;
        }

        const filteredItems = cat.items.filter((item) => {
          if (!q) return true;
          return (
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.scriptureReference.toLowerCase().includes(q) ||
            item.type.toLowerCase().includes(q)
          );
        });

        if (filteredItems.length === 0) return null;

        return {
          ...cat,
          items: filteredItems,
        };
      })
      .filter(Boolean) as ResourceCategory[];
  }, [categories, searchQuery, activeCategory]);

  const totalVisible = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  const getFormatIcon = (format?: string) => {
    switch (format) {
      case 'audio':
        return <Headphones className="w-3.5 h-3.5 text-[#B8891A]" />;
      case 'pdf':
        return <FileText className="w-3.5 h-3.5 text-[#B8891A]" />;
      case 'chart':
        return <CheckCircle2 className="w-3.5 h-3.5 text-[#B8891A]" />;
      default:
        return <BookOpen className="w-3.5 h-3.5 text-[#B8891A]" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Search and Category Filter Bar */}
      <div className="bg-white border border-[#E2DDD4] p-4 sm:p-5 rounded-xl shadow-sm flex flex-col gap-4">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4A5568]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources by keyword, doctrine, topic, or scripture..."
            className="w-full pl-11 pr-4 py-3 bg-[#F8F6F1] border border-[#E2DDD4] rounded text-sm text-[#1A365D] placeholder-[#4A5568] focus:outline-none focus:ring-2 focus:ring-[#B8891A]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#4A5568] hover:text-[#1A365D] px-2 py-1 bg-[#F0EDE6] rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills & Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#E2DDD4]/80">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#1A365D] text-white'
                  : 'bg-[#F0EDE6] text-[#1A365D] hover:bg-[#E2DDD4]'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#1A365D] text-white'
                    : 'bg-[#F0EDE6] text-[#1A365D] hover:bg-[#E2DDD4]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#4A5568] font-medium shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#B8891A]" />
            <span>{totalVisible} Vetted Scriptural Documents</span>
          </div>
        </div>
      </div>

      {/* Render Filtered Directory */}
      {filteredCategories.length > 0 ? (
        <div className="flex flex-col gap-12">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="flex flex-col bg-white border border-[#E2DDD4] rounded-xl p-6 sm:p-8 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex flex-col pb-4 mb-6 border-b border-[#E2DDD4]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B8891A]"></span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A365D]">
                      {category.name}
                    </h2>
                  </div>
                  <span className="font-sans text-xs font-semibold text-[#4A5568] uppercase tracking-wider">
                    {category.index}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
                  {category.subtitle}
                </p>
              </div>

              {/* Items List */}
              <div className="flex flex-col divide-y divide-[#E2DDD4]">
                {category.items.map((item) => (
                  <article
                    key={item.id}
                    className="py-5 sm:py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group hover:bg-[#F8F6F1] -mx-4 px-4 rounded-lg transition-colors"
                  >
                    <div className="flex flex-col max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F0EDE6] border border-[#E2DDD4] font-sans text-[11px] font-semibold uppercase tracking-wider text-[#1A365D] rounded">
                          {getFormatIcon(item.format)}
                          <span>{item.type}</span>
                        </span>
                        <span className="font-sans text-xs font-medium text-[#B8891A] bg-[#F8F6F1] px-2 py-0.5 rounded border border-[#E2DDD4]">
                          {item.scriptureReference}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A365D] group-hover:text-[#8B6512] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center pt-2 md:pt-0">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#1A365D] hover:text-[#B8891A] underline decoration-[#B8891A] underline-offset-4 group-hover:translate-x-1 transition-all"
                      >
                        <span>{item.linkLabel}</span>
                        <ExternalLink className="w-4 h-4 text-[#B8891A]" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white border border-[#E2DDD4] rounded-xl p-8">
          <BookOpen className="w-12 h-12 text-[#4A5568] mx-auto mb-3" />
          <h3 className="font-serif text-xl font-bold text-[#1A365D]">No matching resources found</h3>
          <p className="font-sans text-sm text-[#4A5568] mt-1 max-w-md mx-auto">
            Try adjusting your search terms or selecting &ldquo;All Categories&rdquo; to browse the full scriptorium repository.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-4 px-4 py-2 bg-[#1A365D] text-white text-xs font-semibold rounded hover:bg-[#2A384F] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

