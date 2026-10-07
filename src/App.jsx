import { useEffect } from 'react'
import './index.css'

import Hero            from './components/Hero'
import GraduationSplit from './components/GraduationSplit'
import GraduationGrid  from './components/GraduationGrid'
import WeddingGrid     from './components/WeddingGrid'
import SocialMediaOverview from './components/SocialMediaOverview'
import SocialMediaDark from './components/SocialMediaDark'
import LogoSection     from './components/LogoSection'
import LogoMockup      from './components/LogoMockup'
import ThankYou        from './components/ThankYou'

export default function App() {
  /* Scroll-triggered fade-in for any element with class "fade-in" */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <GraduationSplit />
      <GraduationGrid />
      <WeddingGrid />
      <SocialMediaOverview />
      <SocialMediaDark />
      <LogoSection />
      <LogoMockup />
      <ThankYou />
    </main>
  )
}
