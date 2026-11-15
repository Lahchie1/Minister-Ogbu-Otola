import Link from 'next/link';
import { useState } from 'react';
import { Shield, Church, Library, MessageSquareQuote, ArrowRight } from 'lucide-react';

const pillars = [
  {
    roman: 'I',
    number: 'Pillar 01',
    title: 'Uncompromised Truth',
    description: 'Expository adherence to the apostolic pattern, guarding sound doctrine against theological revision and cultural pressure.',
    scripture: '2 Timothy 1:13',
    link: '/about#doctrine',
    icon: Shield,
    theme: 'bg-[#16202C] text-white border-t-2 border-[#D4AF37] hover:bg-[#1A2635]',
    accentText: 'text-[#D4AF37]',
    badgeBg: 'text-[#D4AF37]',
  },
  {
    roman: 'II',
    number: 'Pillar 02',
    title: 'Restoration of the Church',
    description: 'Upholding the simplicity and divine architecture of the New Testament Church in name, organization, worship, and mission.',
    scripture: 'Jeremiah 6:16',
    link: '/resources#restoration-history',
    icon: Church,
    theme: 'bg-[#9C782B] text-[#0C1219] hover:bg-[#A88231]',
    accentText: 'text-[#0C1219]',
    badgeBg: 'text-[#0C1219]/80',
  },
  {
    roman: 'III',
    number: 'Pillar 03',
    title: 'Sound Teaching for All Ages',
    description: 'Accessible treatises, structured study guides, and Bible class curricula designed for robust spiritual discernment.',
    scripture: 'Titus 2:1',
    link: '/books',
    icon: Library,
    theme: 'bg-[#24303D] text-white border-t-2 border-[#BEC7DB] hover:bg-[#2B3A4A]',
    accentText: 'text-[#BEC7DB]',
    badgeBg: 'text-[#BEC7DB]',
  },
  {
    roman: 'IV',
    number: 'Pillar 04',
    title: 'Faithful Ministry & Outreach',
    description: 'Serving the local brotherhood at Church of Christ, Lawanson, and proclaiming the unadulterated gospel across Nigeria.',
    scripture: 'Acts 17:11',
    link: '/about',
    icon: MessageSquareQuote,
    theme: 'bg-[#1A2332] text-white hover:bg-[#212C3E] border-t-2 border-[#D4AF37]',
    accentText: 'text-[#D4AF37]',
    badgeBg: 'text-[#D4AF37]',
  },
];

function PillarCard({ pillar, active }: { pillar: (typeof pillars)[number]; active: boolean }) {
  const Icon = pillar.icon;
  return (
    <Link
      href={pillar.link}
      className={`p-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between group transition-all duration-200 transform hover:-translate-y-1 relative overflow-hidden ${pillar.theme} block h-full w-full`}
    >
      <span className="absolute -right-2 -bottom-3 font-cinzel font-black text-6xl opacity-10 select-none pointer-events-none">
        {pillar.roman}
      </span>

      <div className="flex items-center justify-between relative z-10">
        <span className={`font-cinzel text-xs font-bold uppercase tracking-widest ${pillar.badgeBg}`}>
          {pillar.number} • {pillar.roman}
        </span>
        <Icon className={`w-3 h-3 ${pillar.accentText}`} />
      </div>

      <div className="my-2 flex flex-col gap-1 relative z-10">
        <h3 className="font-serif text-base sm:text-sm font-bold leading-tight">
          {pillar.title}
        </h3>
        <p className="font-sans text-xs leading-relaxed opacity-90">
          {pillar.description}
        </p>
      </div>

      <div className={`flex items-center gap-0.5 text-xs font-bold uppercase tracking-wider relative z-10 ${pillar.accentText}`}>
        <span>{pillar.scripture}</span>
        <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function Pillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePillarScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight <= 0) return;
    const progress = scrollTop / Math.max(scrollHeight - clientHeight, 1);
    const index = Math.min(Math.floor(progress * pillars.length), pillars.length - 1);
    setActiveIndex(index);
  };

  return (
    <section className="relative z-30 -mt-16 md:-mt-24 mb-14 md:mb-20 px-6 max-w-6xl mx-auto w-full">
      {/* Desktop: four-column grid */}
      <div className="hidden md:block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Link
              key={pillar.title}
              href={pillar.link}
              className={`p-4 sm:p-5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between group transition-all duration-200 transform hover:-translate-y-1 relative overflow-hidden ${pillar.theme}`}
            >
              {/* Background faint watermark Roman numeral */}
              <span className="absolute -right-2 -bottom-3 font-cinzel font-black text-6xl opacity-10 select-none pointer-events-none">
                {pillar.roman}
              </span>

              <div className="flex items-center justify-between relative z-10">
                <span className={`font-cinzel text-xs font-bold uppercase tracking-widest ${pillar.badgeBg}`}>
                  {pillar.number} • {pillar.roman}
                </span>
                <Icon className={`w-3 h-3 ${pillar.accentText}`} />
              </div>

              <div className="my-2 flex flex-col gap-1 relative z-10">
                <h3 className="font-serif text-base sm:text-sm font-bold leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs leading-relaxed opacity-90">
                  {pillar.description}
                </p>
              </div>

              <div className={`flex items-center gap-0.5 text-xs font-bold uppercase tracking-wider relative z-10 ${pillar.accentText}`}>
                <span>{pillar.scripture}</span>
                <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile: numbered scroll stack — one card visible at a time, shuffle to next on scroll */}
      <div className="md:hidden relative h-[560px] w-full overflow-hidden">
        <div
          className="absolute inset-0 w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
          onScroll={handlePillarScroll}
        >
          <div className="h-[calc(100%_*_4)] w-full">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`snap-start snap-center h-[25%] w-full relative`}
              >
                <PillarCard pillar={pillar} active={activeIndex === i} />
              </div>
            ))}
          </div>
        </div>

        {/* Cards stacked — only active one fully visible, others behind */}
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
              i === activeIndex
                ? 'z-10 opacity-100 scale-100 pointer-events-auto'
                : i < activeIndex
                  ? 'z-0 opacity-30 scale-90 translate-y-[-8px] pointer-events-none'
                  : 'z-0 opacity-30 scale-90 translate-y-[8px] pointer-events-none'
            }`}
          >
            <PillarCard pillar={pillar} active={activeIndex === i} />
          </div>
        ))}
      </div>
    </section>
  );
}
