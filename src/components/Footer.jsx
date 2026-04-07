import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Vedaansh Adesara</span>
        <span className={styles.copy}>© 2025 — All rights reserved</span>
        <Link to="/contact" className={styles.email}>
          Let's work together
        </Link>
      </div>
    </footer>
  )
}
