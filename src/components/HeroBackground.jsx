import { useEffect, useRef } from 'react'
import styles from './HeroBackground.module.css'

export default function HeroBackground() {
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const blob3Ref = useRef(null)

  useEffect(() => {
    let rafId
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth lerp toward mouse
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05

      const cx = currentX / window.innerWidth - 0.5
      const cy = currentY / window.innerHeight - 0.5

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${cx * -60}px, ${cy * -60}px) scale(1)`
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${cx * 80}px, ${cy * 80}px) scale(1)`
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate(${cx * -40}px, ${cy * -40}px) scale(1)`
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className={styles.bg} aria-hidden="true">
      <div ref={blob1Ref} className={styles.blob1} />
      <div ref={blob2Ref} className={styles.blob2} />
      <div ref={blob3Ref} className={styles.blob3} />
    </div>
  )
}
