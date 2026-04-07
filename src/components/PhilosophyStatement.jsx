import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './PhilosophyStatement.module.css'

export default function PhilosophyStatement() {
  return (
    <section className={styles.section}>

      {/* Top row: philosophy headline */}
      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.statement}>
            <motion.h2
              className={styles.line1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              EVERY CONSTRAINT
            </motion.h2>
            <motion.h2
              className={styles.line2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              IS A DIRECTION
            </motion.h2>

            <svg className={styles.arrow} viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M0 12 L184 12"
                stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.path
                d="M164 4 L184 12"
                stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.25, delay: 1.25, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.path
                d="M164 20 L184 12"
                stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.25, delay: 1.25, ease: [0.76, 0, 0.24, 1] }}
              />
            </svg>
          </div>


        </div>
      </div>

      {/* Bottom row: about teaser */}
      <div className={styles.bottom}>
        <motion.div
          className={styles.aboutInner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.aboutLeft}>
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
          <div className={styles.stats}>
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
      </div>

    </section>
  )
}
