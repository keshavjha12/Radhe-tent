import React from 'react';

/**
 * Traditional Madhubani/Mithila patterns and SVG borders.
 * Mithila art values geometric boundaries, fish (machli - symbol of luck/fertility)
 * and lotus (kamal - symbol of celebration/purity).
 */

export function MithilaBorderDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center py-6 select-none ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-double border-gold-mid/40"></div>
      </div>
      <div className="relative flex justify-center bg-offwhite px-4">
        <svg
          width="160"
          height="32"
          viewBox="0 0 160 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-royal-red"
        >
          {/* Geometrical diamond patterns */}
          <path d="M10 16 L20 6 L30 16 L20 26 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M15 16 L20 11 L25 16 L20 21 Z" stroke="var(--color-gold-mid)" strokeWidth="1" fill="none" />
          
          {/* Lotus design in the center */}
          <path d="M80 6 C74 12, 70 24, 80 28 C90 24, 86 12, 80 6 Z" fill="currentColor" opacity="0.15" />
          <path d="M80 6 C76 10, 74 18, 80 28" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80 6 C84 10, 86 18, 80 28" stroke="currentColor" strokeWidth="1.5" />
          {/* Left petals */}
          <path d="M80 14 C68 12, 62 20, 74 27" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M80 19 C73 17, 69 23, 77 27" stroke="var(--color-gold-mid)" strokeWidth="1" fill="none" />
          {/* Right petals */}
          <path d="M80 14 C92 12, 98 20, 86 27" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M80 19 C87 17, 91 23, 83 27" stroke="var(--color-gold-mid)" strokeWidth="1" fill="none" />
          {/* Bottom base */}
          <path d="M70 28 L90 28 L80 30 Z" fill="var(--color-gold-mid)" />

          {/* Right Geometrical pattern */}
          <path d="M130 16 L140 6 L150 16 L140 26 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M135 16 L140 11 L145 16 L140 21 Z" stroke="var(--color-gold-mid)" strokeWidth="1" fill="none" />

          {/* Connecting fish scale zigzags */}
          <path d="M35 16 Q 42 10, 50 16 T 65 16" stroke="var(--color-gold-mid)" strokeWidth="1.5" fill="none" />
          <path d="M35 20 Q 42 14, 50 20 T 65 20" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M95 16 Q 102 10, 110 16 T 125 16" stroke="var(--color-gold-mid)" strokeWidth="1.5" fill="none" />
          <path d="M95 20 Q 102 14, 110 20 T 125 20" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export function MithilaLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex items-center justify-center p-2 rounded-lg bg-royal-red shadow-lg border border-gold-mid/30 ${className}`}>
        {/* Sacred Kalash + Light theme logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gold-mid"
        >
          {/* Rays of festival light and sound wave accents */}
          <path d="M20 2 L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 9 L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M31 9 L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 20 L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M35 20 L31 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

          {/* Golden Kalash profile */}
          <path 
            d="M13 32 C12 28, 14 22, 20 22 C26 22, 28 28, 27 32 C26 35, 14 35, 13 32 Z" 
            fill="var(--color-royal-red)" 
            stroke="currentColor" 
            strokeWidth="2" 
          />
          {/* Neck of Kalash */}
          <path d="M16 22 H24" stroke="currentColor" strokeWidth="2.5" />
          {/* Coconut of Kalash */}
          <path d="M20 12 L15 22 H25 L20 12 Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
          {/* Amrapallav (Mango leaves) emerging */}
          <path d="M15 21 C12 17, 10 18, 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M25 21 C28 17, 30 18, 28 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Sacred Swastika or Dot symbol inside the Kalash */}
          <circle cx="20" cy="28" r="2" fill="currentColor" />
          <circle cx="20" cy="28" r="4" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>
      <div>
        <div className="flex flex-col">
          <span className="font-display font-extrabold text-base tracking-widest text-gold-mid uppercase leading-none">
            RADHE
          </span>
          <span className="font-sans font-medium text-[10px] tracking-[0.25em] text-white/80 leading-tight">
            TENT HOUSE
          </span>
        </div>
      </div>
    </div>
  );
}

export function MithilaCardBorder({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative p-1 bg-gradient-to-br from-gold-mid via-royal-red/50 to-gold-dark rounded-xl shadow-md ${className}`}>
      {/* Decorative inner pattern */}
      <div className="absolute inset-1 border border-dashed border-gold-mid/30 rounded-lg pointer-events-none"></div>
      <div className="relative bg-offwhite p-5 rounded-lg z-10 h-full">
        {children}
      </div>
    </div>
  );
}

export function MithilaLantern({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      {/* Visual hanging lantern (Akash Kandil) rendering to elevate the festive theme */}
      <svg
        width="32"
        height="80"
        viewBox="0 0 32 80"
        fill="none"
        xmlns="http://www.w3.org/2005/svg"
        className="text-gold-mid filter drop-shadow-[0_4px_6px_rgba(212,175,55,0.4)]"
      >
        {/* Lantern Hanging Cable */}
        <line x1="16" y1="0" x2="16" y2="30" stroke="currentColor" strokeWidth="1" />
        {/* Lantern Dome */}
        <path d="M10 30 H22 L24 35 H8 Z" fill="var(--color-royal-red)" stroke="currentColor" strokeWidth="1" />
        {/* Body (Diamond/Lantern style) */}
        <path d="M8 35 L16 50 L24 35 M8 35 L16 26 L24 35" fill="currentColor" opacity="0.3" />
        <path d="M8 35 L16 50 L24 35 H8 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 35 L16 22 L24 35" stroke="currentColor" strokeWidth="1" />
        {/* Inner glow bulb */}
        <circle cx="16" cy="38" r="4" fill="#FFE082" />
        {/* Tassels/Frills at the bottom */}
        <path d="M12 50 V68 M16 50 V74 M20 50 V68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 50 V60 M22 50 V60" stroke="var(--color-royal-red)" strokeWidth="1" />
      </svg>
    </div>
  );
}
