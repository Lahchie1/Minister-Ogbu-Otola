'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from 'framer-motion';
import {
  Shield,
  Church,
  Library,
  MessageSquareQuote,
  ArrowRight,
} from 'lucide-react';

/* ───────────────────────── Pillar Data with 4 Distinct Colors ─────────────────────────
  1. Red: Rich Deep Theological Crimson
  2. Green: Rich Deep Sacred Emerald / Forest
  3. Blue: Rich Deep Royal / Celestial Blue
  4. Primary: Brand Signature Charcoal Navy & Antique Gold
────────────────────────────────────────────────────────────────────────────────────────── */

const pillars = [
  {
    roman: 'I',
    number: 'Pillar 01',
    title: 'Uncompromised Truth',
    description:
      'Expository adherence to the apostolic pattern, guarding sound doctrine against theological revision and cultural pressure.',
    scripture: '2 Timothy 1:13',
    link: '/about#doctrine',
    icon: Shield,
    // Red Theme
    bgGradient: 'from-[#5A131B] via-[#3E0C12] to-[#25070A]',
    borderColor: 'border-[#E05263]/30',
    hoverBorder: 'group-hover:border-[#E05263]/60',
    badgeBg: 'bg-[#E05263]/20',
    badgeText: 'text-[#FF8090]',
    accentText: 'text-[#FF8090]',
    accentGlow: 'rgba(224, 82, 99, 0.25)',
    topLineGradient: 'from-[#FF8090] via-[#E05263] to-[#8A1826]',
    activeShadow: '0 25px 60px -12px rgba(90,19,27,0.7), 0 0 0 1px rgba(224,82,99,0.3)',
    dotColor: '#E05263',
  },
  {
    roman: 'II',
    number: 'Pillar 02',
    title: 'Restoration of the Church',
    description:
      'Upholding the simplicity and divine architecture of the New Testament Church in name, organization, worship, and mission.',
    scripture: 'Jeremiah 6:16',
    link: '/resources#restoration-history',
    icon: Church,
    // Green Theme
    bgGradient: 'from-[#0D3823] via-[#082618] to-[#04160E]',
    borderColor: 'border-[#2ECC71]/30',
    hoverBorder: 'group-hover:border-[#2ECC71]/60',
    badgeBg: 'bg-[#2ECC71]/20',
    badgeText: 'text-[#4EFA93]',
    accentText: 'text-[#4EFA93]',
    accentGlow: 'rgba(46, 204, 113, 0.25)',
    topLineGradient: 'from-[#4EFA93] via-[#2ECC71] to-[#125B36]',
    activeShadow: '0 25px 60px -12px rgba(13,56,35,0.7), 0 0 0 1px rgba(46,204,113,0.3)',
    dotColor: '#2ECC71',
  },
  {
    roman: 'III',
    number: 'Pillar 03',
    title: 'Sound Teaching for All Ages',
    description:
      'Accessible treatises, structured study guides, and Bible class curricula designed for robust spiritual discernment.',
    scripture: 'Titus 2:1',
    link: '/books',
    icon: Library,
    // Blue Theme
    bgGradient: 'from-[#0F2D54] via-[#091D38] to-[#051121]',
    borderColor: 'border-[#3894E6]/30',
    hoverBorder: 'group-hover:border-[#3894E6]/60',
    badgeBg: 'bg-[#3894E6]/20',
    badgeText: 'text-[#70B8FF]',
    accentText: 'text-[#70B8FF]',
    accentGlow: 'rgba(56, 148, 230, 0.25)',
    topLineGradient: 'from-[#70B8FF] via-[#3894E6] to-[#14477F]',
    activeShadow: '0 25px 60px -12px rgba(15,45,84,0.7), 0 0 0 1px rgba(56,148,230,0.3)',
    dotColor: '#3894E6',
  },
  {
    roman: 'IV',
    number: 'Pillar 04',
    title: 'Faithful Ministry & Outreach',
    description:
      'Serving the local brotherhood at Church of Christ, Lawanson, and proclaiming the unadulterated gospel across Nigeria.',
    scripture: 'Acts 17:11',
    link: '/about',
    icon: MessageSquareQuote,
    // Primary Navy & Gold Theme
    bgGradient: 'from-[#1A2332] via-[#121A26] to-[#0A0F17]',
    borderColor: 'border-[#D4AF37]/35',
    hoverBorder: 'group-hover:border-[#D4AF37]/70',
    badgeBg: 'bg-[#D4AF37]/20',
    badgeText: 'text-[#F3CE65]',
    accentText: 'text-[#F3CE65]',
    accentGlow: 'rgba(212, 175, 55, 0.25)',
    topLineGradient: 'from-[#F3CE65] via-[#D4AF37] to-[#8F7018]',
    activeShadow: '0 25px 60px -12px rgba(26,35,50,0.8), 0 0 0 1px rgba(212,175,55,0.4)',
    dotColor: '#D4AF37',
  },
];

/* ───────────────────────── Enhanced Pillar Card Component ───────────────────────── */

function PillarCard({
  pillar,
  isActive = false,
}: {
  pillar: (typeof pillars)[number];
  isActive?: boolean;
}) {
  const Icon = pillar.icon;

  return (
    <Link
      href={pillar.link}
      className={`group relative block w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b ${pillar.bgGradient} border ${pillar.borderColor} ${pillar.hoverBorder} shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300`}
      style={{
        boxShadow: isActive
          ? pillar.activeShadow
          : '0 10px 30px -8px rgba(0,0,0,0.4)',
      }}
    >
      {/* Top accent beam */}
      <div
        className={`absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r ${pillar.topLineGradient}`}
      />

      {/* Large watermark roman numeral */}
      <span className="absolute -right-3 -bottom-6 font-cinzel font-black text-[130px] md:text-[150px] leading-none text-white/[0.04] select-none pointer-events-none">
        {pillar.roman}
      </span>

      {/* Subtle radial ambient highlight */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-2xl pointer-events-none"
        style={{ background: pillar.accentGlow }}
      />

      <div className="relative z-10 p-6 sm:p-7 md:p-8 flex flex-col justify-between h-full">
        {/* Top Header Row */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-xl ${pillar.badgeBg} border ${pillar.borderColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
              >
                <Icon className={`w-5 h-5 ${pillar.accentText}`} />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-cinzel text-[11px] font-bold uppercase tracking-[0.2em] ${pillar.badgeText}`}
                >
                  {pillar.number}
                </span>
                <span className="font-sans text-[11px] text-white/50">
                  Scriptural Pillar
                </span>
              </div>
            </div>
            <span className={`font-cinzel text-3xl font-bold opacity-35 text-white`}>
              {pillar.roman}
            </span>
          </div>

          {/* Divider */}
          <div
            className={`w-12 h-[2px] bg-gradient-to-r ${pillar.topLineGradient} mt-4 mb-4 opacity-75`}
          />

          {/* Title & Description */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-white/95">
              {pillar.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.08]">
          <span
            className={`font-sans text-xs font-bold uppercase tracking-wider ${pillar.accentText}`}
          >
            {pillar.scripture}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white/60 group-hover:${pillar.accentText} transition-colors duration-200`}
          >
            Explore Pillar
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ───────── MOBILE VIEW: Scroll-Driven Tilt-and-Shuffle Deck ─────────
  Behavior:
  - Pins when Card 1 is in view, with Cards 2, 3, 4 stacked directly behind it.
  - To reveal Card 2: Card 1 tilts left (-12°, -75px) and dives behind,
    while Card 2 simultaneously tilts right (+10°, +65px) and comes forward to the front.
  - To reveal Card 3: Card 2 tilts left and dives behind, while Card 3 tilts right and comes forward.
  - To reveal Card 4: Card 3 tilts left and dives behind, while Card 4 tilts right and comes forward.
────────────────────────────────────────────────────────────────────────── */

function MobileAnimatedCard({
  pillar,
  index,
  scrollYProgress,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Define exact keyframe transforms for each card based on index
  let xRange: number[] = [0, 0];
  let rotateRange: number[] = [0, 0];
  let scaleRange: number[] = [1, 1];
  let yRange: number[] = [0, 0];
  let zIndexRange: number[] = [40, 40];
  let opacityRange: number[] = [1, 1];
  let pRange: number[] = [0, 1];

  if (index === 0) {
    // Card 0: Starts in front. Tilts left on transition 0->1, then moves behind.
    pRange = [0, 0.12, 0.26, 0.38, 1.0];
    xRange = [0, 0, -85, 0, 0];
    rotateRange = [0, 0, -12, 0, 0];
    scaleRange = [1.0, 1.0, 0.98, 0.85, 0.85];
    yRange = [0, 0, -5, 18, 18];
    zIndexRange = [40, 40, 36, 10, 10];
    opacityRange = [1.0, 1.0, 0.95, 0.45, 0.45];
  } else if (index === 1) {
    // Card 1: Starts behind Card 0. Tilts right on transition 0->1 and comes forward.
    // Then on transition 1->2 tilts left and moves behind.
    pRange = [0, 0.12, 0.26, 0.38, 0.46, 0.60, 0.72, 1.0];
    xRange = [0, 0, 75, 0, 0, -85, 0, 0];
    rotateRange = [0, 0, 10, 0, 0, -12, 0, 0];
    scaleRange = [0.94, 0.94, 0.97, 1.0, 1.0, 0.98, 0.85, 0.85];
    yRange = [10, 10, 4, 0, 0, -5, 18, 18];
    zIndexRange = [30, 30, 38, 40, 40, 36, 10, 10];
    opacityRange = [0.85, 0.85, 0.95, 1.0, 1.0, 0.95, 0.45, 0.45];
  } else if (index === 2) {
    // Card 2: Starts behind Card 1. Tilts right on transition 1->2 and comes forward.
    // Then on transition 2->3 tilts left and moves behind.
    pRange = [0, 0.46, 0.60, 0.72, 0.78, 0.90, 1.0];
    xRange = [0, 0, 75, 0, 0, -85, 0];
    rotateRange = [0, 0, 10, 0, 0, -12, 0];
    scaleRange = [0.88, 0.88, 0.97, 1.0, 1.0, 0.98, 0.85];
    yRange = [20, 20, 4, 0, 0, -5, 18];
    zIndexRange = [20, 20, 38, 40, 40, 36, 10];
    opacityRange = [0.70, 0.70, 0.95, 1.0, 1.0, 0.95, 0.45];
  } else {
    // Card 3: Starts behind Card 2. Tilts right on transition 2->3 and comes forward.
    pRange = [0, 0.78, 0.90, 1.0];
    xRange = [0, 0, 75, 0];
    rotateRange = [0, 0, 10, 0];
    scaleRange = [0.82, 0.82, 0.97, 1.0];
    yRange = [30, 30, 4, 0];
    zIndexRange = [10, 10, 38, 40];
    opacityRange = [0.55, 0.55, 0.95, 1.0];
  }

  const x = useTransform(scrollYProgress, pRange, xRange);
  const rotate = useTransform(scrollYProgress, pRange, rotateRange);
  const scale = useTransform(scrollYProgress, pRange, scaleRange);
  const y = useTransform(scrollYProgress, pRange, yRange);
  const zIndex = useTransform(scrollYProgress, pRange, zIndexRange);
  const opacity = useTransform(scrollYProgress, pRange, opacityRange);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{
        x,
        y,
        rotate,
        scale,
        zIndex,
        opacity,
        transformOrigin: 'center center',
      }}
    >
      <PillarCard pillar={pillar} isActive={true} />
    </motion.div>
  );
}

function MobileStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80px', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let step = 0;
    if (latest >= 0.85) step = 3;
    else if (latest >= 0.55) step = 2;
    else if (latest >= 0.25) step = 1;
    setActiveStep(step);
  });

  return (
    <div
      ref={containerRef}
      className="block md:hidden relative"
      style={{ height: '300vh' }}
    >
      {/* 
        Sticky frame pins at top-[80px] (directly under fixed navbar).
        Takes min-h-[calc(100vh-80px)] so it fills the screen comfortably 
        with zero awkward empty space below the cards.
      */}
      <div className="sticky top-[80px] min-h-[calc(100vh-80px)] w-full px-5 py-4 flex flex-col justify-between items-center overflow-hidden">
        
        {/* Section Header */}
        <div className="text-center pt-2 sm:pt-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#9A7516] font-bold">
            Foundational Convictions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2332] tracking-tight mt-1">
            Four Scriptural Pillars
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#9A7516] mx-auto mt-2" />
        </div>

        {/* 
          3D Card Stage:
          Card 1 starts in front, with Cards 2, 3, 4 stacked directly behind it.
          Transitions tilt outgoing card left and dive behind, while incoming card tilts right and comes forward.
        */}
        <div
          className="relative w-full max-w-sm mx-auto h-[360px] flex-shrink-0 my-auto"
          style={{ perspective: '1200px' }}
        >
          {pillars.map((pillar, i) => (
            <MobileAnimatedCard
              key={pillar.roman}
              pillar={pillar}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Bottom Card Navigation & Interactive Indicators */}
        <div className="flex flex-col items-center gap-2 pb-4 sm:pb-6">
          <div className="flex items-center gap-2">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="rounded-full transition-all duration-300"
                animate={{
                  width: i === activeStep ? 24 : 6,
                  height: 6,
                  backgroundColor:
                    i === activeStep ? pillar.dotColor : 'rgba(26,35,50,0.2)',
                }}
              />
            ))}
          </div>
          <span className="font-cinzel text-[11px] font-bold text-[#1A2332]/70 uppercase tracking-widest">
            {pillars[activeStep].number} • {pillars[activeStep].title}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────── DESKTOP VIEW: 3D Pseudo-Carousel with 4 Distinct Colors ───────── */

const SLOT_CONFIGS = [
  // 0: Center (active foreground)
  { x: '0%', scale: 1, rotateY: 0, opacity: 1, z: 30 },
  // 1: Right (+15° tilt)
  { x: '58%', scale: 0.78, rotateY: 15, opacity: 0.7, z: 20 },
  // 2: Behind center (hidden/minimal scale)
  { x: '0%', scale: 0.55, rotateY: 0, opacity: 0, z: 10 },
  // 3: Left (-15° tilt)
  { x: '-58%', scale: 0.78, rotateY: -15, opacity: 0.7, z: 20 },
];

function DesktopCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const s = Math.min(Math.floor(latest * 4), 3);
    setStep(s);
  });

  const getSlot = (cardIndex: number) => {
    const slotIndex = (cardIndex - step + 16) % 4;
    return SLOT_CONFIGS[slotIndex];
  };

  return (
    <div
      ref={containerRef}
      className="hidden md:block relative"
      style={{ height: '320vh' }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-8 px-6">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7516] font-bold">
            Foundational Convictions
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A2332] tracking-tight mt-1.5">
            Four Scriptural Pillars
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#9A7516] mx-auto mt-3" />
        </div>

        {/* 3D Carousel Stage */}
        <div
          className="relative w-full max-w-4xl mx-auto px-6"
          style={{ perspective: '1400px' }}
        >
          <div className="relative h-[340px] w-full flex items-center justify-center">
            {pillars.map((pillar, i) => {
              const slot = getSlot(i);
              return (
                <motion.div
                  key={pillar.roman}
                  className="absolute w-[390px] lg:w-[430px] h-[340px]"
                  initial={false}
                  animate={{
                    x: slot.x,
                    scale: slot.scale,
                    rotateY: slot.rotateY,
                    opacity: slot.opacity,
                    zIndex: slot.z,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 28,
                    mass: 0.9,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    left: '50%',
                    marginLeft: '-195px', // half width
                  }}
                >
                  <PillarCard pillar={pillar} isActive={slot.z === 30} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-4 mt-8">
          {pillars.map((pillar, i) => {
            const isCenter = getSlot(i).z === 30;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2 cursor-pointer"
                animate={{ opacity: isCenter ? 1 : 0.35 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isCenter
                      ? `${pillar.badgeBg} ring-4 ring-${pillar.dotColor}/20`
                      : 'bg-[#1A2332]/25'
                  }`}
                  style={{
                    backgroundColor: isCenter ? pillar.dotColor : undefined,
                  }}
                />
                {isCenter && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-cinzel text-xs font-bold text-[#1A2332] tracking-wide"
                  >
                    {pillar.number} • {pillar.roman}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Scroll Hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ opacity: step === 0 ? 0.6 : 0, y: step === 0 ? 0 : 8 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#555E6D]">
            Scroll to explore
          </span>
          <div className="w-4 h-7 rounded-full border border-[#555E6D]/30 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-1.5 bg-[#D4AF37] rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────── Main Section Export ───────── */

export default function StackedScrollSection() {
  return (
    <section className="relative z-30 mt-0 md:-mt-20">
      <MobileStack />
      <DesktopCarousel />
    </section>
  );
}
