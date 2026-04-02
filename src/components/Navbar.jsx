import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link to="/" className={styles.logo}>VA</Link>
      <ul className={styles.links}>
        <li>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}
