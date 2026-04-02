import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Vedaansh Adesara</span>
        <span className={styles.copy}>© 2025 — All rights reserved</span>
        <a href="mailto:adesara.vedaansh567@gmail.com" className={styles.email}>
          Let's work together
        </a>
      </div>
    </footer>
  )
}
