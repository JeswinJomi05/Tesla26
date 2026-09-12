import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MerchandiseProps {
  onOpenBuy?: () => void;
}

export default function Merchandise({ onOpenBuy }: MerchandiseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force video to play immediately on mount, regardless of scroll position
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video auto-play blocked by browser:", e));
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax on shirts
  const shirtsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="merchandise"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#050507',
        // tshirtbg.png as full-cover background
        backgroundImage: "url('/textures/tshirtbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100svh',
      }}
    >
      {/* =========================================================
          DARK OVERLAY to match screenshot depth
          ========================================================= */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none z-[1]" />

      {/* HUD top-center notch echo (matches bg texture notch) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <svg width="80" height="10" viewBox="0 0 80 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 H14 L22 9 H58 L66 0 H80" fill="black" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
        </svg>
      </div>

      {/* Corner HUD marks */}
      <div className="absolute top-4 right-5 z-10 pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M14 0 H8 V6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
        </svg>
      </div>
      <div className="absolute top-4 left-5 z-10 pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M0 0 H6 V6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}
      <div className="relative z-10 flex flex-col items-center w-full h-full">

        {/* ---- HEADING + TOP-RIGHT TEXT ---- */}
        <div className="pt-20 sm:pt-24 md:pt-32 text-center px-4 relative">
          

          <h2
            className="font-brother-hoops text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            style={{
              /* Clamp from mobile → desktop, capping at the spec'd 113px */
              fontSize: 'clamp(2.4rem, 10vw, 113px)',
              transform: 'rotate(-2deg)',
            }}
          >
            TESLA 26
          </h2>
          {/* Triple underline brush strokes */}
          <div className="flex flex-col items-center mt-1 gap-[2px] mx-auto" style={{ transform: 'rotate(-1deg)' }}>
            <div className="h-[3px] rounded-full bg-white/90" style={{ width: 'clamp(100px, 22vw, 260px)' }} />
            <div className="h-[2px] rounded-full bg-white/45" style={{ width: 'clamp(70px,  16vw, 180px)' }} />
          </div>
        </div>

        {/* ---- T-SHIRTS + PRICE ANNOTATIONS ---- */}
        <motion.div
          style={{ y: shirtsY }}
          className="relative w-full max-w-5xl mx-auto flex items-center justify-center px-4 mt-6 sm:mt-8 order-3 md:order-2"
        >
          {/* The single combined T shirt PNG: both shirts in one image */}
          <motion.div 
            className="relative w-full"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: 1200 }}
          >
            <motion.img
              src="/images/tshirtnew.png"
              alt="TESLA '26 Official T-Shirts — Front and Back"
              className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] cursor-pointer"
              style={{ maxHeight: '75vh' }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: 5, 
                y: -10,
                filter: 'drop-shadow(0 40px 80px rgba(255,255,255,0.1))'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Price annotation — LEFT (Regular 329/-) */}
            <div
              className="absolute pointer-events-none flex flex-col items-end"
              style={{ left: '2%', bottom: '25%' }}
            >
              <div className="flex flex-col items-end">
                <span className="text-white/70 font-tech uppercase" style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.9rem)', letterSpacing: '0.1em', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                  REGULAR
                </span>
                <span
                  className="text-white/90 leading-none"
                  style={{
                    fontFamily: "'Permanent Marker', cursive",
                    fontSize: 'clamp(1.2rem, 4.5vw, 2.4rem)',
                    textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                    fontWeight: 'bold'
                  }}
                >
                  329/-
                </span>
              </div>
            </div>

            {/* Price annotation — RIGHT (Oversized 349/-) */}
            <div
              className="absolute pointer-events-none flex flex-col items-end"
              style={{ right: '2%', bottom: '25%' }}
            >
              <div className="flex flex-col items-end">
                <span className="text-white/70 font-tech uppercase" style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.9rem)', letterSpacing: '0.1em', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                  OVERSIZED
                </span>
                <span
                  className="text-white/90 leading-none"
                  style={{
                    fontFamily: "'Permanent Marker', cursive",
                    fontSize: 'clamp(1.2rem, 4.5vw, 2.4rem)',
                    textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                    fontWeight: 'bold'
                  }}
                >
                  349/-
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── HAND IMAGE & CTA BUTTON ── */}
        <div className="relative w-full flex flex-col items-center pb-12 sm:pb-24 mt-16 sm:mt-28 md:mt-32 order-4 md:order-3">
          
          <div className="relative w-full flex justify-center items-center">
            {/* The single large hands image spanning the full width of the window */}
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 0.9, scale: 1.05, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.img 
                src="/images/hand.png" 
                alt="Hands" 
                className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] mix-blend-screen cursor-pointer" 
                style={{ width: '100vw', maxWidth: '100vw' }} 
                whileHover={{ 
                  scale: 1.03, 
                  filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.25)) brightness(1.2)'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </motion.div>

            {/* Absolute positioning to place the button directly in the center of the hand image */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => window.open('https://forms.gle/DbMvpYod2ro5hhXMA', '_blank')}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.97 }}
                className="font-tech text-white cursor-pointer rounded-full transition-colors"
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  // Shrunk font-size for mobile to fit perfectly between fingers
                  fontSize: 'clamp(0.45rem, 1.5vw, 1.1rem)',
                  border: 'clamp(1px, 0.2vw, 2px) solid rgba(255,255,255,0.7)',
                  background: 'rgba(0,0,0,0.5)',
                  // Drastically reduced padding for mobile
                  padding: 'clamp(4px, 1vw, 14px) clamp(10px, 2.5vw, 48px)',
                  letterSpacing: '0.1em',
                  backdropFilter: 'blur(8px)',
                  marginTop: '2%', // Slight nudge to align precisely with fingers
                }}
              >
                GET YOURS NOW!
              </motion.button>
            </motion.div>
          </div>
        </div>

    

        {/* ---- PROMOTIONAL VIDEO (HUD THEMED) ---- */}
        <motion.div 
          className="relative w-full max-w-5xl mx-auto mt-20 md:mt-32 mb-32 md:mb-40 px-4 z-20 order-2 md:order-4"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ perspective: 1500 }}
        >
          <motion.div 
            className="relative p-[1px] bg-gradient-to-b from-white/30 via-transparent to-white/10 rounded-lg cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              rotateX: 4, 
              rotateY: -4, 
              y: -10,
              filter: 'drop-shadow(0 20px 40px rgba(255,255,255,0.15))' 
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            
            {/* Cyberpunk corner brackets */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-white/60 pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-white/60 pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-white/60 pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-white/60 pointer-events-none" />

            <div className="relative rounded-lg overflow-hidden bg-[#0a0a0c] shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-[#222]">
              
              {/* Scanline overlay for that tech aesthetic */}
              <div className="absolute inset-0 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }} />
              
              <video 
                ref={videoRef}
                src="/videos/T%20Shirt.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
                className="w-full h-auto object-cover opacity-85 grayscale-[0.2] contrast-125 mix-blend-lighten"
              />
            </div>
            
            {/* Minimalist tech text above or below */}
            <div className="absolute -top-5 left-4 flex space-x-2 pointer-events-none">
              <span className="text-[10px] text-white/50 font-mono-tech tracking-widest bg-[#050507] px-2">VIDEO.FEED.01</span>
              <span className="text-[10px] text-emerald-500/70 font-mono-tech tracking-widest animate-pulse">REC</span>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
