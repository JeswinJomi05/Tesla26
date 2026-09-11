import React from 'react';
import { highlightsData, HighlightItem } from '../../data/highlights';
import { motion } from 'framer-motion';

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative w-full bg-[#0a0a0a] text-white pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"

      style={{
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* =========================================================
          LAYER 1: FILM GRAIN / NOISE OVERLAY (feTurbulence)
          ========================================================= */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.04] z-[1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter-highlights">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter-highlights)" />
      </svg>

      {/* =========================================================
          LAYER 2: FAINT BLUEPRINT / GRID LINES (~5-8% opacity)
          ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* =========================================================
          COOL GREY-WHITE AMBIENT GLOW (Left Edge)
          ========================================================= */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 w-[450px] h-[550px] rounded-full z-[2] opacity-35 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(160, 160, 160, 0.18) 0%, rgba(160, 160, 160, 0.04) 50%, transparent 80%)',
        }}
      />

      {/* =========================================================
          LAYER 3: CIRCULAR TARGETING / RADAR RETICLE (Bottom-Left)
          ========================================================= */}
      <div className="pointer-events-none absolute -bottom-36 -left-36 w-[520px] h-[520px] sm:w-[620px] sm:h-[620px] z-[2] opacity-[0.10]">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
          {/* Concentric rings */}
          <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="250" cy="250" r="175" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="250" r="115" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="250" cy="250" r="60" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="250" r="4" fill="currentColor" />

          {/* Full crosshair axes */}
          <line x1="20" y1="250" x2="480" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="250" y1="20" x2="250" y2="480" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

          {/* Diagonal ticks */}
          <line x1="100" y1="100" x2="115" y2="115" stroke="currentColor" strokeWidth="1.5" />
          <line x1="400" y1="100" x2="385" y2="115" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="400" x2="115" y2="385" stroke="currentColor" strokeWidth="1.5" />
          <line x1="400" y1="400" x2="385" y2="385" stroke="currentColor" strokeWidth="1.5" />

          {/* Target degrees text */}
          <text x="256" y="85" fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="2">090°</text>
          <text x="415" y="246" fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="2">180°</text>
          <text x="256" y="425" fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="2">270°</text>
          <text x="75" y="246" fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="2">360°</text>
        </svg>
      </div>

      {/* =========================================================
          TOP NOTCH / TRAPEZOID TAB (Centered on Top Edge)
          ========================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <svg width="96" height="10" viewBox="0 0 96 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 H18 L26 9 H70 L78 0 H96"
            fill="#0a0a0a"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
          />
          <line x1="38" y1="5" x2="58" y2="5" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
        </svg>
      </div>

      {/* =========================================================
          CORNER ACCENT MARKS
          ========================================================= */}
      {/* Top-Left Corner: Bracket + Circular Target Icon with Grey Accent */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2 pointer-events-none">
        <div className="w-3.5 h-3.5 border-t border-l border-white/30" />
        <div className="flex items-center gap-1.5 opacity-60">
          <div className="w-3 h-3 rounded-full border border-[#a0a0a0]/80 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#a0a0a0]" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#a0a0a0]/90">REC·01</span>
        </div>
      </div>

      {/* Top-Right Corner */}
      <div className="absolute top-6 right-6 z-10 pointer-events-none">
        <div className="w-3.5 h-3.5 border-t border-r border-white/30" />
      </div>

      {/* Bottom-Left Corner */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
        <div className="w-3.5 h-3.5 border-b border-l border-white/30" />
      </div>

      {/* Bottom-Right Corner */}
      <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
        <div className="w-3.5 h-3.5 border-b border-r border-white/30" />
      </div>

      {/* =========================================================
          MAIN CONTAINER & CONTENT
          ========================================================= */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* SECTION HEADING AREA */}
        <div className="relative mb-10 sm:mb-12">
          
          {/* LAYER 4: GHOST / WATERMARK ECHO TEXT BEHIND HEADING */}
          <div
            aria-hidden="true"
            className="absolute -top-3 sm:-top-5 -left-2 sm:-left-3 pointer-events-none opacity-[0.05] z-0"
            style={{
              fontFamily: "'Anton', 'Archivo Black', sans-serif",
              letterSpacing: '0.05em',
            }}
          >
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black uppercase text-white leading-none whitespace-nowrap">
              TESLA THROUGH THE YEARS
            </span>
          </div>

          {/* REAL HEADING */}
          <h2
            className="relative z-10 text-4xl sm:text-5xl md:text-[52px] font-bold uppercase tracking-[0.05em] text-[#f0f0f0] leading-none"
            style={{
              fontFamily: "'Anton', 'Archivo Black', sans-serif",
            }}
          >
            TESLA THROUGH THE YEARS
          </h2>
        </div>

        {/* =========================================================
            3-COLUMN VIDEO PREVIEW CARDS GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-9 items-start">
          {highlightsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer flex flex-col items-center relative w-full"
            >
              {/* Fake 3D Projection Glow Behind the Card */}
              <div className="absolute inset-0 bg-white/0 rounded-[12px] group-hover:bg-white/15 group-hover:blur-2xl transition-all duration-500 pointer-events-none translate-y-4 group-hover:translate-y-8 -z-10" />

              {/* VIDEO CARD THUMBNAIL CONTAINER */}
              <div
                className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#0d0d0d] border border-white/[0.08] transition-all duration-500 ease-out group-hover:border-white/40 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Use a video when supplied, keeping the image as the poster/fallback. */}
                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={item.title}
                    className="w-full h-full object-cover transition-all duration-300 ease-out"
                    style={{
                      filter: 'grayscale(40%) brightness(0.7) contrast(1.1)',
                    }}
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 ease-out"
                    style={{
                      filter: 'grayscale(40%) brightness(0.7) contrast(1.1)',
                    }}
                  />
                )}

                {/* Subtle dark vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                {/* CORNER BRACKET ACCENTS (L-shaped viewfinder ticks in bottom corners) */}
                {/* Top-Left Viewfinder Tick */}
                <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-white/40 pointer-events-none" />
                {/* Top-Right Viewfinder Tick */}
                <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-white/40 pointer-events-none" />
                {/* Bottom-Left Viewfinder Tick */}
                <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-white/60 pointer-events-none z-10" />
                {/* Bottom-Right Viewfinder Tick */}
                <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-white/60 pointer-events-none z-10" />

                {/* =======================================================
                    MINIMAL VIDEO PROGRESS / SCRUB BAR (Pinned near bottom)
                    ======================================================= */}
                <div className="absolute bottom-3 inset-x-0 px-5 flex items-center justify-between gap-3 pointer-events-none z-10">
                  {/* Left: Play/Pause indicator icon */}
                  <div className="text-white/60 group-hover:text-white/90 transition-colors flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>

                  {/* Center: Thin horizontal progress scrub track */}
                  <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-white/70 rounded-full transition-all duration-300 group-hover:bg-white"
                      style={{
                        width: `${35 + index * 20}%`,
                      }}
                    />
                  </div>

                  {/* Right: Fullscreen / Expand icon */}
                  <div className="text-white/60 group-hover:text-white/90 transition-colors flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CARD TITLE LABEL (Outside bordered box, centered below) */}
              <h3
                className="mt-5 text-center text-[21px] sm:text-[23px] font-bold uppercase tracking-[0.1em] text-[#e5e5e5] group-hover:text-white transition-colors duration-200"
                style={{
                  fontFamily: "'Anton', 'Archivo Black', sans-serif",
                }}
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

