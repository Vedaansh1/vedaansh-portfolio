import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './AboutTeaser.module.css'

export default function AboutTeaser() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.left}>
          <span className={styles.label}>About</span>
          <p className={styles.text}>
            Started at 15 in a design studio before knowing what a design studio was.
            Five years and four projects later, still asking the same question:
            how far can this go?
          </p>
          <Link to="/about" className={styles.link}>
            Read more →
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Studios & agencies</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Case studies</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5</span>
            <span className={styles.statLabel}>Years in design</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
