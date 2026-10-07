/* Wedding Grid — frame 04
   ─────────────────────────────────────────
   Dark panel left, photo grid right
*/
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DarkHeading } from './Shared'

gsap.registerPlugin(ScrollTrigger)

export default function WeddingGrid() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('.wedding-item')
      gsap.set(items, { opacity: 0, y: 40 })
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        animation: gsap.to(items, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out'
        }),
        toggleActions: 'play none none reverse'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="wedding" className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left dark panel */}
      <div className="wedding-item flex-shrink-0 w-full lg:w-[40%] bg-[#474747] flex flex-col justify-center px-10 lg:px-16 py-16">
        <DarkHeading title="Wedding" subtitle="Photographer" />
        <p className="text-white/65 text-sm leading-relaxed mt-6 max-w-xs">
          Timeless wedding photography that tells your unique love story with artistry and emotion.
        </p>
      </div>

      {/* Right: photo grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 bg-[#edecea]">
        {['/frame05.jpg', '/frame06.jpg', '/frame07.jpg', '/frame01.jpg'].map((src, i) => (
          <div key={i} className="wedding-item overflow-hidden">
            <img src={src} alt={`Wedding ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  )
}
