import { useEffect } from 'react'
import styles from './MobileBlocker.module.css'

export default function MobileBlocker() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.overscrollBehavior = ''
    }
  }, [])

  return (
    <div className={styles.blocker}>
      <div className={styles.inner}>
        <span className={styles.icon}>⌐■-■</span>
        <h1 className={styles.heading}>Built for desktop.</h1>
        <p className={styles.body}>
          This portfolio is designed to be experienced on a larger screen.
          Open it on a laptop or desktop for the full thing.
        </p>
        <span className={styles.url}>vedaansh.xyz</span>
      </div>
    </div>
  )
}
