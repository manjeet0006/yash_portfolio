/* Graduation Grid — frame 03
   ─────────────────────────────────────────
   Light canvas BG, centred heading, 3-column photo grid
   Decorative gradient rings top-right & bottom-left
*/
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export default function GraduationGrid() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    let ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.photo-card')
      const heading = section.querySelector('.section-heading')
      const decoTR = section.querySelector('.deco-tr')
      const decoBL = section.querySelectorAll('.deco-bl')

      // Set initial states
      gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 })
      gsap.set(heading, { opacity: 0, y: 30 })
      gsap.set(decoTR, { opacity: 0, scale: 0.8, x: 50, y: -50 })
      gsap.set(decoBL, { opacity: 0, scale: 0.8, x: -50, y: 50 })
      
      // Create scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      tl.to(decoTR, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, ease: 'power3.out' })
        .to(decoBL, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }, '<0.1')
        .to(heading, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4')

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="graduation-grid" ref={sectionRef} className="noise relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#f8f8f8] px-6 sm:px-10 md:px-16 py-24">
      
      {/* Decorative Rings */}
      {/* Top Right Light Gradient Ring */}
      <div 
        className="deco-tr absolute -top-[15%] -right-[10%] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom left, #ffffff 20%, #999999 100%)',
          maskImage: 'radial-gradient(circle, transparent 55%, black 55.5%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 55.5%)'
        }}
      />
      
      {/* Bottom Left Dark Ring */}
      <div 
        className="deco-bl absolute -bottom-[15%] -left-[10%] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom left, #444444 0%, #000000 80%)',
          maskImage: 'radial-gradient(circle, transparent 55%, black 55.5%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 55.5%)'
        }}
      />
      
      {/* Bottom Left Light Ring */}
      <div 
        className="deco-bl absolute -bottom-[5%] left-[8%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom left, #ffffff 20%, #999999 100%)',
          maskImage: 'radial-gradient(circle, transparent 55%, black 55.5%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 55.5%)',
          filter: 'drop-shadow(15px 20px 30px rgba(0,0,0,0.25))'
        }}
      />

      {/* Heading */}
      <div className="section-heading relative z-10 flex flex-col items-center text-center !mb-12 md:mb-16">
        <div className="flex flex-col gap-0 items-center text-center">
          <span className="font-inter font-black tracking-tight text-[#111] leading-none text-[clamp(40px,6vw,72px)]">
            Graduation
          </span>
          <span className="font-playfair-italic text-[#111]/90 leading-none text-[clamp(26px,4vw,50px)] mt-2">
            Photographer
          </span>
        </div>
      </div>

      {/* 3-col photo grid */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-12 w-full max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="photo-card flex-1 w-full max-w-[400px] aspect-square bg-white border-[12px] lg:border-[16px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <img src="/frame03.jpg" alt="Graduation 1" className="w-full h-full object-cover" />
        </div>
        <div className="photo-card flex-1 w-full max-w-[400px] aspect-square bg-white border-[12px] lg:border-[16px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <img src="/frame04.jpg" alt="Graduation 2" className="w-full h-full object-cover" />
        </div>
        <div className="photo-card flex-1 w-full max-w-[400px] aspect-square bg-white border-[12px] lg:border-[16px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <img src="/frame06.jpg" alt="Graduation 3" className="w-full h-full object-cover" />
        </div>
      </div>

    </section>
  )
}
