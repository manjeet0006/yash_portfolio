/* Logo Section — frame 07 */
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LogoSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('.logo-item')
      gsap.set(items, { opacity: 0, scale: 0.9 })
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        animation: gsap.to(items, {
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.4)'
        }),
        toggleActions: 'play none none reverse'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="logo" className="relative w-full bg-[#edecea] py-20 px-6 sm:px-10 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="logo-item mb-12 text-center">
          <h2 className="font-inter font-black text-[#111] text-[clamp(36px,6vw,80px)] leading-none">
            Logo
          </h2>
          <span className="font-playfair-italic text-[#111]/60 text-[clamp(22px,3.5vw,46px)]">
            Design
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="logo-item aspect-square bg-white rounded-sm shadow-sm flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#111]/10 flex items-center justify-center">
                <span className="text-2xl font-black text-[#111]/30">L</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
