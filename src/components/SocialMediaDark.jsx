/* Social Media Dark — frame 06 */
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SocialMediaDark() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('.sm-item')
      gsap.set(items, { opacity: 0, y: 40 })
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        animation: gsap.to(items, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
        }),
        toggleActions: 'play none none reverse'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="social-dark" className="relative w-full bg-[#111] py-20 px-6 sm:px-10 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="sm-item mb-12">
          <h2 className="font-inter font-black text-white text-[clamp(36px,6vw,80px)] leading-none tracking-tight">
            Social<br /><span className="font-playfair-italic text-white/50">Media</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['/frame01.jpg', '/frame02.jpg', '/frame03.jpg', '/frame04.jpg'].map((src, i) => (
            <div key={i} className="sm-item aspect-square overflow-hidden rounded-sm">
              <img src={src} alt={`Social ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
