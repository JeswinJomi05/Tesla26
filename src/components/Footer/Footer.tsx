import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const IconInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 11a3 3 0 0 1 6 0v5" />
  </svg>
);

const IconFacebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const navGroups = [
  {
    label: 'EXPLORE',
    links: [
      { text: 'HOME', href: '#hero' },
      { text: 'ABOUT', href: '#about' },
      { text: 'THROUGH THE YEARS', href: '#highlights' },
      { text: 'COMPETITIONS', href: '#events' },
    ],
  },
  {
    label: 'SOCIALS',
    links: [
      { text: 'INSTAGRAM', href: 'https://www.instagram.com/teslacet/?hl=en', icon: <IconInstagram />, external: true },
      { text: 'LINKEDIN', href: 'https://in.linkedin.com/company/tesla-18', icon: <IconLinkedIn />, external: true },
      { text: 'FACEBOOK', href: 'https://www.facebook.com/teslacet/', icon: <IconFacebook />, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-[#050506] bg-grain text-white overflow-hidden flex flex-col items-center justify-center min-h-[450px]">
      
      {/* =========================================================
          TOP 3D NOTCHED HORIZONTAL DIVIDER LINE 
          ========================================================= */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center z-20">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/30" />
        <div className="relative px-4">
          <svg width="64" height="12" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/40">
            <path d="M0 0H16L24 10H40L48 0H64" stroke="currentColor" strokeWidth="1" fill="#050506" />
            <line x1="28" y1="5" x2="36" y2="5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-white/30" />
      </div>

      {/* Massive Background Watermark (Behind Contents) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 
          className="text-[22vw] sm:text-[18vw] font-black uppercase text-white/[0.02] leading-none whitespace-nowrap drop-shadow-md"
          style={{ fontFamily: "'Anton', 'Archivo Black', sans-serif" }}
        >
          TESLA '26
        </h1>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-[80rem] mx-auto px-6 sm:px-12 py-24 flex flex-col md:flex-row justify-between gap-16 md:gap-8 mt-4">
        
        {/* Outer HUD Corner Ticks for Left Box (Visual flair) */}
        <div className="flex flex-col items-start md:max-w-[380px] relative p-6 bg-black/10 backdrop-blur-sm border border-white/10 rounded-lg group transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.03)]">
          {/* Outer Calibration Crosshair Marks (+) */}
          <div className="absolute -top-2 left-0 font-mono-tech text-[10px] text-white/30">+</div>
          <div className="absolute -top-2 right-0 font-mono-tech text-[10px] text-white/30">+</div>
          <div className="absolute -bottom-2 left-0 font-mono-tech text-[10px] text-white/30">+</div>
          <div className="absolute -bottom-2 right-0 font-mono-tech text-[10px] text-white/30">+</div>
          
          <div className="absolute inset-1.5 border border-white/[0.05] rounded pointer-events-none" />

          <a href="#hero" className="inline-flex items-center gap-4 group mb-6 z-10">
            <img
              src="/images/Logo.png"
              alt="TESLA '26"
              className="relative h-12 sm:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-[0.1em] text-white uppercase drop-shadow-sm">TESLA '26</span>
          </a>
          <p className="font-tacticsans text-sm sm:text-[14px] leading-relaxed text-slate-400 tracking-wide uppercase z-10">
            The ultimate convergence of technology, innovation, and brutalist engineering. Designed and Curated by Rohan Kishore
          </p>
          <div className="mt-8 flex flex-col gap-3 z-10 w-full">
            <a href="https://tesla.cet.ac.in" target="_blank" rel="noreferrer" className="group flex w-full items-center justify-between font-tacticsans text-[11px] tracking-widest text-slate-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/40 px-4 py-2.5 rounded bg-[#0c0c10] hover:bg-white/[0.05]">
              TESLA.CET.AC.IN
              <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
            </a>
            <a href="tel:+919745473767" className="group flex w-full items-center justify-between font-tacticsans text-[11px] tracking-widest text-slate-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/40 px-4 py-2.5 rounded bg-[#0c0c10] hover:bg-white/[0.05]">
              CONVENER: ALWIN <span className="text-white/20">|</span> +91 97454 73767
              <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Side - Navigation & Sponsorship */}
        <div className="flex flex-col gap-10 relative z-10 py-6">
          <nav aria-label="Footer navigation" className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-24">
            {navGroups.map((group) => (
              <div key={group.label} className="min-w-[140px]">
                <div className="flex items-center gap-3 mb-6 border-b border-white/[0.08] pb-3">
                  <div className="w-1.5 h-1.5 bg-white/40" />
                  <h2 className="font-tech text-sm sm:text-base font-bold tracking-[0.2em] text-white/80">
                    {group.label}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-3 font-mono-tech text-xs sm:text-sm uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-all px-2 py-1 -ml-2 rounded"
                      >
                        <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300" />
                        {link.icon && <span className="text-slate-500 group-hover:text-white transition-colors [&>svg]:w-4 [&>svg]:h-4">{link.icon}</span>}
                        {link.text}
                        {link.external && <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-white transition-all duration-300" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Sponsorship Section */}
          <div className="min-w-[140px] pt-2">
            <div className="flex items-center gap-3 mb-6 border-b border-white/[0.08] pb-3">
              <div className="w-1.5 h-1.5 bg-white/40" />
              <h2 className="font-tech text-sm sm:text-base font-bold tracking-[0.2em] text-white/80">
                SPONSOR US
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919061860203" className="group flex flex-1 items-center justify-between font-tech text-[11px] tracking-widest text-slate-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/40 px-4 py-2.5 rounded bg-[#0c0c10] hover:bg-white/[0.05]">
                NITHIN <span className="text-white/20">|</span> +91 90618 60203
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
              </a>
              <a href="tel:+918075630822" className="group flex flex-1 items-center justify-between font-tech text-[11px] tracking-widest text-slate-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/40 px-4 py-2.5 rounded bg-[#0c0c10] hover:bg-white/[0.05]">
                ZAHIR <span className="text-white/20">|</span> +91 8075 630 822
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar (HUD Style) */}
      <div className="relative z-10 w-full mt-auto">
        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-[75rem] mx-auto px-6 sm:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-tacticsans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-500 bg-[#050506]">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="text-white/30">[</span>
              <span className="text-white/70">© TESLA 2026 · ALL RIGHTS RESERVED</span>
              <span className="text-white/30">]</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex flex-col items-center sm:items-start gap-y-1 text-slate-400 tracking-[0.15em]">
              <span>
                DESIGNED & CURATED BY{' '}
                <a href="https://www.instagram.com/_rohan.kishore/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white font-semibold tracking-[0.18em] hover:text-slate-300 hover:underline hover:underline-offset-2 transition-all">
                  ROHAN KISHORE
                </a>
              </span>
              <span>
                DEVELOPED BY{' '}
                <a href="https://www.instagram.com/jeswin_jomi/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white font-semibold tracking-[0.18em] hover:text-slate-300 hover:underline hover:underline-offset-2 transition-all">
                  JESWIN
                </a>
                <span className="text-white font-semibold tracking-[0.18em]"> & </span>
                <a href="https://www.instagram.com/abhi_sheiik_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white font-semibold tracking-[0.18em] hover:text-slate-300 hover:underline hover:underline-offset-2 transition-all">
                  ABHISHEK
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2">
            </span>
            <span className="text-white/20">|</span>
            <a 
              href="https://share.google/yCabwr6SmBZzGvgX1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors flex flex-col leading-tight hover:underline hover:underline-offset-2"
            >
              <span>09.5469° N</span>
              <span>76.0057° E</span>
            </a>
          </div>
        </div>
      </div>

      {/* Discreet bottom-left corner hyperlink for '.' */}
      <div className="absolute bottom-1 left-2 sm:bottom-1.5 sm:left-3 z-30 leading-none">
        <a
          href="https://asc.sficet.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-slate-300 transition-colors text-xs font-mono select-none"
        >
          .
        </a>
      </div>
    </footer>
  );
}
