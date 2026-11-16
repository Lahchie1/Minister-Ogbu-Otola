'use client';

import { useState } from 'react';
import { Play, Pause, Volume2, Radio, BookOpen, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AudioPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(32);

  return (
    <div className="bg-gradient-to-br from-[#1A365D] via-[#151D2A] to-[#0E1520] border border-white/10 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
      {/* Background ambient gold aura */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Play control & Sermon Info */}
        <div className="flex items-start gap-4">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause sermon excerpt' : 'Play sermon excerpt'}
            className="w-14 h-14 rounded-full bg-gradient-to-b from-[#D4A017] to-[#A07615] text-[#091525] flex items-center justify-center shrink-0 shadow-lg hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            )}
          </button>

          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#D4A017] font-semibold">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#D4A017]" />
              <span>Sunday Assembly Audio Exposition • Lawanson, Lagos</span>
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
              Holding Fast the Faithful Word in an Age of Compromise
            </h4>
            <p className="font-sans text-xs text-slate-300 flex items-center gap-2">
              <span className="text-[#D4A017]">Titus 1:9–11</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 38 mins (Expository Sermon)
              </span>
            </p>
          </div>
        </div>

        {/* Audio Scrubber & Link */}
        <div className="w-full md:w-72 flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px] font-sans text-slate-400">
            <span>{isPlaying ? '12:14' : '00:00'}</span>
            <div className="flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>Recorded Live</span>
            </div>
            <span>38:40</span>
          </div>

          <div
            className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.round((clickX / rect.width) * 100));
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-[#D4A017] to-[#E8C547] rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400 font-sans">
              Preached by Minister Ogbu Otola
            </span>
            <Link
              href="/resources#audio-video"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4A017] hover:text-white transition-colors"
            >
              <span>More Sermons</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

