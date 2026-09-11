import React, { useRef, useState, useEffect } from 'react';
import { workshopsData, WorkshopItem } from '../../data/workshops';
import EventCard from '../common/EventCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkshopsProps {
  onSelectCard: (item: WorkshopItem) => void;
}

export default function Workshops({ onSelectCard }: WorkshopsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -350 : 350;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div id="workshops" className="relative w-full">
      {/* =========================================================
          SECTION HEADER WITH SLIDER CONTROLS
          ========================================================= */}
      <div className="relative mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          {/* Ghost Watermark Text */}
          <div
            aria-hidden="true"
            className="absolute -top-3 sm:-top-5 -left-2 sm:-left-3 pointer-events-none opacity-[0.045] z-0"
            style={{
              fontFamily: "'Anton', 'Archivo Black', sans-serif",
              letterSpacing: '0.05em',
            }}
          >
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase text-white leading-none whitespace-nowrap">
              WORKSHOPS
            </span>
          </div>

          {/* Section Subtag */}
          <div className="flex items-center gap-2 mb-2 font-tacticsans text-[10px] sm:text-xs tracking-[0.25em] text-slate-400 uppercase">
            <span className="text-slate-600">02 //</span> INTERACTIVE SESSIONS
          </div>

          {/* Main Heading */}
          <h2
            className="relative z-10 text-4xl sm:text-5xl md:text-[52px] font-bold uppercase tracking-[0.05em] text-[#f0f0f0] leading-none"
            style={{
              fontFamily: "'Anton', 'Archivo Black', sans-serif",
            }}
          >
            WORKSHOPS
          </h2>
        </div>

        {/* Desktop & Tablet Slider Controls */}
        <div className="flex items-center gap-3 self-end sm:self-auto z-10">
          <div className="hidden sm:flex items-center gap-2 font-tacticsans text-[10px] tracking-widest text-slate-400 mr-2 uppercase">
            <span>SLIDE TO EXPLORE</span>
            <span className="text-white/30">[{String(workshopsData.length).padStart(2, '0')} EVENTS]</span>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Slide Left"
            className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
              canScrollLeft
                ? 'bg-white/10 hover:bg-white text-white hover:text-black border-white/20 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.15)] cursor-pointer'
                : 'bg-white/[0.02] text-white/20 border-white/5 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Slide Right"
            className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
              canScrollRight
                ? 'bg-white/10 hover:bg-white text-white hover:text-black border-white/20 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.15)] cursor-pointer'
                : 'bg-white/[0.02] text-white/20 border-white/5 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* =========================================================
          SINGLE ROW HORIZONTAL SLIDER TRACK
          ========================================================= */}
      <div className="relative -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12">
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap overflow-x-auto gap-5 sm:gap-6 lg:gap-7 pb-6 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/[0.04] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25 hover:[&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:rounded-full"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.04)',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {workshopsData.map((ws, index) => (
            <div
              key={ws.id}
              className="flex-shrink-0 w-[270px] sm:w-[310px] lg:w-[335px] snap-start"
            >
              <EventCard
                id={ws.id}
                title={ws.title}
                subtitle={ws.subtitle}
                badge={ws.badge || 'NEW'}
                isCompleted={ws.isCompleted}
                image={ws.image}
                tag={ws.date}
                actionText="ENROLL NOW →"
                variant="poster"
                index={index}
                onClick={ws.registrationLink ? () => window.open(ws.registrationLink, '_blank', 'noopener,noreferrer') : () => onSelectCard(ws)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          MOBILE SWIPE HINT & PROGRESS BAR
          ========================================================= */}
      <div className="mt-4 flex sm:hidden items-center justify-between font-tacticsans text-[9px] tracking-widest text-slate-400">
        <span>← SWIPE TO VIEW ALL →</span>
        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/70 rounded-full transition-all duration-150"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
