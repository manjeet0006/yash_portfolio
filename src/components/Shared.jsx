/* ─── Shared Tailwind helper components ───
   These tiny wrappers are reused across sections
   so we keep them in one place.
──────────────────────────────────────────── */

/** Nav links rendered inside a dark panel */
export function DarkNav() {
  return (
    <nav className="flex gap-8 md:gap-12 mb-8 md:mb-10">
      {['About', 'Creative', 'Portfolio'].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-white/90 text-sm tracking-wide hover:text-white/50 transition-colors no-underline"
        >
          {link}
        </a>
      ))}
    </nav>
  )
}

/** Photo placeholder box — swap for <img> when images are ready */
export function PhotoBox({ label = 'Your Photo Here', className = '' }) {
  return (
    <div className={`photo-placeholder rounded-sm ${className}`}>
      <span className="text-2xl">📷</span>
      <span className="text-[10px] text-center px-4 leading-relaxed">{label}</span>
    </div>
  )
}

/** Section heading used on dark panels */
export function DarkHeading({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-inter font-bold text-white leading-none text-[clamp(32px,5.5vw,68px)]">
        {title}
      </span>
      <span className="font-playfair-italic text-white/95 leading-none text-[clamp(22px,3.5vw,46px)]">
        {subtitle}
      </span>
    </div>
  )
}

/** Section heading used on light backgrounds */
export function LightHeading({ title, subtitle, center = false }) {
  return (
    <div className={`flex flex-col gap-1 ${center ? 'items-center text-center' : ''}`}>
      <span className="font-inter font-bold text-[#111] leading-none text-[clamp(36px,6vw,80px)]">
        {title}
      </span>
      <span className="font-playfair-italic text-[#111]/90 leading-none text-[clamp(22px,3.8vw,50px)]">
        {subtitle}
      </span>
    </div>
  )
}
