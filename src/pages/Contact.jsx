import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className={styles.label}>Contact</span>
        <h1 className={styles.heading}>Let's work<br />together.</h1>
        <p className={styles.sub}>
          Open to freelance, full-time, and contract work.<br />
          Drop a line and I'll get back to you.
        </p>
        <a
          href="mailto:adesara.vedaansh567@gmail.com"
          className={styles.email}
        >
          adesara.vedaansh567@gmail.com
        </a>
      </motion.div>
    </main>
  )
}
