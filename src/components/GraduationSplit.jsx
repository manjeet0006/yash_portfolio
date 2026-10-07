/* Graduation Split — frame 02
   ─────────────────────────────────────────
   Left:  photo grid (staggered 5-photo layout)
   Right: dark #5c5c5c panel with nav + heading + description
   Responsive: stacks vertically on mobile
*/
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DarkNav, DarkHeading } from './Shared'

gsap.registerPlugin(ScrollTrigger)

export default function GraduationSplit() {
  const sectionRef = useRef(null)
  const asideRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    let ctx = gsap.context(() => {
      const images = section.querySelectorAll('.grad-img')
      const asideElements = asideRef.current.children

      // Set initial hidden states
      gsap.set(images, { opacity: 0, y: 60, scale: 0.95 })
      gsap.set(asideElements, { opacity: 0, x: 50 })

      // Create the scroll animation
      ScrollTrigger.create({
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
        animation: gsap.timeline({ defaults: { ease: 'power3.out' } })
          // Stagger the images popping in
          .to(images, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
          }, 0)
          // Stagger the text in the right panel sliding in
          .to(asideElements, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
          }, 0.2)
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full flex flex-col lg:flex-row min-h-screen overflow-hidden bg-white"
    >
      {/* ── LEFT: photo grid ── */}
      <div className="flex-1 relative overflow-hidden bg-white min-h-[50vh] lg:min-h-screen">
        
        {/* Decorative Background Thin Ring */}
        <div 
          className="hidden lg:block absolute top-[35%] left-0 -translate-x-[40%] -translate-y-1/2 w-[60vw] h-[120vh] rounded-[100%] border-[4px] border-black/15 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)'
          }}
        ></div>

        {/* Mobile: simple 2×2 + 1 grid */}
        <div className="relative z-10 grid grid-cols-2 grid-rows-3 gap-2 p-4 h-full lg:hidden">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={`relative overflow-hidden rounded-sm grad-img ${n === 1 ? 'row-span-2' : ''}`}
            >
              <img src="/frame08.jpg" alt={`Graduation ${n}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop: Exact 3-column staggered layout matching screenshot */}
        <div className="relative z-10 hidden lg:grid h-full w-full grid-cols-3 items-center justify-center gap-6 !p-5 lg:gap-10 xl:gap-16 p-8 lg:p-12 xl:p-20">
          {/* Column 1 (Single photo, centered) */}
          <div className="col-span-1">
            <img src="/frame08.jpg" alt="Graduation 1" className="grad-img w-full aspect-square object-cover border-[8px] xl:border-[12px] border-white shadow-[10px_15px_25px_rgba(0,0,0,0.6)]" />
          </div>
          {/* Column 2 (Two photos stacked) */}
          <div className="col-span-1 flex flex-col gap-6 lg:gap-10 xl:gap-16">
            <img src="/frame09.jpg" alt="Graduation 2" className="grad-img w-full aspect-square object-cover border-[8px] xl:border-[12px] border-white shadow-[10px_15px_25px_rgba(0,0,0,0.6)]" />
            <img src="/frame01.jpg" alt="Graduation 4" className="grad-img w-full aspect-square object-cover border-[8px] xl:border-[12px] border-white shadow-[10px_15px_25px_rgba(0,0,0,0.6)]" />
          </div>
          {/* Column 3 (Two photos stacked) */}
          <div className="col-span-1 flex flex-col gap-6 lg:gap-10 xl:gap-16">
            <img src="/frame08.jpg" alt="Graduation 3" className="grad-img w-full aspect-square object-cover border-[8px] xl:border-[12px] border-white shadow-[10px_15px_25px_rgba(0,0,0,0.6)]" />
            <img src="/frame02.jpg" alt="Graduation 5" className="grad-img w-full aspect-square object-cover border-[8px] xl:border-[12px] border-white shadow-[10px_15px_25px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
      </div>

      {/* ── RIGHT: dark panel ── */}
      <aside
        ref={asideRef}
        className="flex-shrink-0 w-full lg:w-[340px] xl:w-[400px] flex flex-col justify-center px-8 md:px-12 py-12 gap-6 bg-[#5c5c5c] z-10"
      >
        <DarkNav />
        <DarkHeading title="Graduation" subtitle="Photographer" />
        <p className="text-white/80 leading-relaxed text-[clamp(13px,1.4vw,16px)]">
          I focus on creating warm, timeless, and meaningful
          photos that people can look back on for years to come.
        </p>
      </aside>
    </section>
  )
}
