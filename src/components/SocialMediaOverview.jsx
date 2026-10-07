/* Social Media Overview — frame 05
   ─────────────────────────────────────────
   Left:  big "Social Media" heading + small circle accent
   Right: phone mockup duo  +  2×2 design card grid
   Responsive: stacks on mobile
 */
export default function SocialMediaOverview() {
  return (
    <section id="creative" className="relative w-full overflow-hidden bg-[#f4f4f2]">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 sm:px-10 md:px-16 py-16 md:py-24">

        {/* ── LEFT: heading ── */}
        <div className="flex-shrink-0 flex flex-col gap-6 lg:w-[280px] xl:w-[320px]">
          <h2 className="font-inter font-black text-[#111] leading-[0.88] text-[clamp(52px,8vw,108px)] tracking-[-0.02em]">
            Social<br />Media
          </h2>

          {/* Small decorative circle */}
          <div className="rounded-full hidden lg:block w-[90px] h-[90px] bg-[conic-gradient(from_0deg,#1a1a1a_0deg,#999_180deg,#eee_180deg)] opacity-[0.18]" />
        </div>

        {/* ── RIGHT: phone mockups + design grid ── */}
        <div className="flex-1 flex flex-col sm:flex-row items-end gap-6 md:gap-10 w-full">

          {/* Phone mockups */}
          <div className="flex items-end gap-4 flex-shrink-0">
            {/* Phone 1 */}
            <div className="flex flex-col items-center justify-center rounded-[20px] border-[1.5px] border-neutral-600 text-neutral-500 text-[10px] tracking-wider uppercase w-[clamp(90px,10vw,128px)] h-[clamp(180px,20vw,256px)] bg-[linear-gradient(160deg,#1c1c1c,#3a3a3a)]">
              <span className="text-2xl">📱</span>
              <span className="mt-1">Screen</span>
            </div>
            {/* Phone 2 — taller */}
            <div className="flex flex-col items-center justify-center rounded-[20px] border-[1.5px] border-neutral-600 text-neutral-500 text-[10px] tracking-wider uppercase w-[clamp(90px,10vw,128px)] h-[clamp(220px,25vw,310px)] bg-[linear-gradient(160deg,#1c1c1c,#3a3a3a)]">
              <span className="text-2xl">📱</span>
              <span className="mt-1">Screen</span>
            </div>
          </div>

          {/* 2×2 design cards */}
          <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4">
            {['Brand Identity', 'Social Posts', 'Story Design', 'Reels Cover'].map((label) => (
              <div
                key={label}
                className="rounded-sm aspect-square bg-neutral-800 flex items-end p-3 overflow-hidden"
              >
                <span className="text-[10px] text-white/60 tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
