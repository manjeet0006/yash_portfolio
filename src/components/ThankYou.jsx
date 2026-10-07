/* ThankYou — final frame
   ─────────────────────────────────────────
   Dark background with a conic-gradient swirl shape,
   centred thank-you text, and a small CTA.
*/
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ThankYou() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('.ty-item')
      gsap.set(items, { opacity: 0, y: 40 })
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        animation: gsap.to(items, {
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out'
        }),
        toggleActions: 'play none none reverse'
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#111] flex flex-col items-center justify-center overflow-hidden px-8 text-center"
    >
      {/* Conic swirl */}
      <div className="swirl-shape" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="ty-item font-inter text-white/40 text-sm tracking-[0.3em] uppercase">
          Thank You
        </p>
        <h2 className="ty-item font-inter font-black text-white leading-[0.85] text-[clamp(56px,10vw,140px)] tracking-[-0.03em]">
          Let's Work<br />Together
        </h2>
        <p className="ty-item font-playfair-italic text-white/60 text-[clamp(18px,2.5vw,28px)] max-w-lg leading-relaxed">
          Reach out and let's create something beautiful together.
        </p>
        <a
          href="mailto:hello@portfoliyo.com"
          className="ty-item mt-4 px-8 py-4 bg-white text-[#111] font-inter font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors no-underline"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}
