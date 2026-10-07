import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import heroImage from '../assests/hero/hero_Section.png'



/* Hero section — frame 01
   ─────────────────────────────────────────
   Light textured canvas BG
   "Creative" in Playfair italic (small)
   "PORTFOLIO" in Inter Black (giant)
   Person photo centred, overlapping the text
   Name + role positioned under PORTFOLIO on left & right
*/
export default function Hero() {
  const sectionRef = useRef(null)
  
  // Entrance Animation Setup
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  // Parallax Scroll Setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Professional parallax: text moves down slightly, scales down, fades out, blurs heavily, and tilts back dramatically
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const opacityText = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const filterText = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(32px)"])
  const rotateXText = useTransform(scrollYProgress, [0, 1], [0, 45])
  
  // Person moves UP slightly & scales up (breaks out of section & creates huge depth)
  const yPerson = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  const scalePerson = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  // From LEFT (Creative, Graphic Designer)
  const fromLeft = {
    hidden: { opacity: 0, x: -120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  }

  // From RIGHT (PORTFOLIO, Yash Partap Singh)
  const fromRight = {
    hidden: { opacity: 0, x: 120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  }

  // From BOTTOM (hero image)
  const fromBottom = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: 'easeOut', delay: 0.4 }
    }
  }

  // Stagger container
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="noise relative w-full h-[100svh] min-h-[600px] max-h-[1100px] flex items-center justify-center overflow-hidden bg-[#edecea]"
    >
      {/* ── Background Typography & Subtext (Locked in place behind subject) ── */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={container}
        style={{ 
          y: yText, 
          scale: scaleText, 
          opacity: opacityText,
          filter: filterText,
          rotateX: rotateXText,
          transformPerspective: 1200
        }}
        className="absolute inset-x-0 top-1/2 -translate-y-[86%] flex flex-col items-center justify-center z-[1] select-none pointer-events-none px-4 sm:px-8"
      >
        {/* "Creative" Header */}
        <div className="relative z-[1] -mb-[1.8vw] sm:-mb-[2.4vw] md:-mb-[3vw] flex items-baseline justify-center">
          <motion.span
            variants={fromLeft}
            className="font-playfair-italic text-[#111] text-[clamp(2.8rem,7.5vw,7.5rem)] leading-none tracking-normal"
          >
            Creative
          </motion.span>
        </div>

        {/* ── Portfolio Container (Width strictly bounded by PORTFOLIO) ── */}
        <div className="relative inline-flex flex-col items-center">
          {/* Giant "PORTFOLIO" Header */}
          <motion.h1
            variants={fromRight}
            className="font-inter font-bold text-[#0d0d0d] uppercase tracking-[-0.02em] text-[clamp(3.8rem,15vw,14rem)] leading-[0.86] text-center whitespace-nowrap"
          >
            PORTFOLIO
          </motion.h1>

          {/* ── Left & Right Meta Subtext (Strictly within PORTFOLIO width) ── */}
          <div className="w-full flex justify-between items-center px-1 sm:px-2 mt-3 sm:mt-4 md:mt-5 overflow-hidden">
            <motion.span
              variants={fromLeft}
              className="font-inter font-bold text-[#111] tracking-wide text-[clamp(12px,1.25vw,16px)]"
            >
              Graphic Designer &amp; Photography
            </motion.span>
            <motion.span
              variants={fromRight}
              className="font-inter font-bold text-[#111] tracking-wide text-[clamp(12px,1.25vw,16px)]"
            >
              Yash Partap Singh
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* ── Person photo cutout — sits in front of the text with rich 3D shadow ── */}
      {/* Scroll parallax container */}
      <motion.div
        style={{ y: yPerson, scale: scalePerson, transformOrigin: 'bottom center' }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] flex items-end justify-center pointer-events-none"
      >
        {/* Entrance animation container */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={fromBottom}
        >
          <img
            src={heroImage}
            alt="Yash Partap Singh"
            className="hero-person-shadow h-[68vh] sm:h-[76vh] md:h-[82vh] max-h-[850px] min-h-[440px] w-auto max-w-[92vw] object-contain object-bottom block"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
