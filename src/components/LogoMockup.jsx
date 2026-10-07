/* Logo Mockup — frame 08 */
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LogoMockup() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('.mockup-item')
      gsap.set(items, { opacity: 0, y: 50 })
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        animation: gsap.to(items, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out'
        }),
        toggleActions: 'play none none reverse'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="mockup" className="relative w-full bg-[#2a2a2a] py-24 px-6 sm:px-10 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="mockup-item flex-1">
          <h2 className="font-inter font-black text-white text-[clamp(36px,5vw,68px)] leading-none tracking-tight mb-4">
            Brand<br />Mockups
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Seeing your logo brought to life on real-world surfaces — stationery, packaging, merchandise and more.
          </p>
        </div>
        <div className="mockup-item flex-1 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="aspect-square bg-[#3a3a3a] rounded-sm flex items-center justify-center">
              <span className="text-white/20 text-4xl">◎</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
