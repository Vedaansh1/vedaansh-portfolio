import { useRef, useEffect } from 'react'
import Hero from '../components/Hero'
import CaseStudySelector from '../components/CaseStudySelector'
import PhilosophyStatement from '../components/PhilosophyStatement'
import styles from './Home.module.css'

export default function Home() {
  const snapRef = useRef(null)
  const isScrolling = useRef(false)

  useEffect(() => {
    const getSnapPoints = () => {
      const sections = document.querySelectorAll('[class*="snapSection"]')
      return Array.from(sections).map(s => s.getBoundingClientRect().top + window.scrollY)
    }

    const handleWheel = (e) => {
      if (isScrolling.current) return
      if (e.target.closest('[data-scrollable="true"]')) return
      e.preventDefault()

      const points = getSnapPoints()
      const current = window.scrollY
      const direction = e.deltaY > 0 ? 1 : -1

      const target = direction > 0
        ? points.find(p => p > current + 10)
        : [...points].reverse().find(p => p < current - 10)

      if (target === undefined) return

      isScrolling.current = true
      window.scrollTo({ top: target, behavior: 'smooth' })
      setTimeout(() => { isScrolling.current = false }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <main>
      <div className={styles.snapContainer} ref={snapRef}>
        <div className={styles.snapSection}>
          <Hero scrollContainer={snapRef} />
        </div>
      </div>
      <div className={`${styles.snapSection} ${styles.snapSectionAuto}`}>
        <PhilosophyStatement />
      </div>
      <div className={styles.snapSection} style={{ height: 'calc(100vh - var(--nav-height))' }}>
        <CaseStudySelector />
      </div>
    </main>
  )
}
