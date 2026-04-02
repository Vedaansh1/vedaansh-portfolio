import { motion } from 'framer-motion'
import styles from './CaseStudyCard.module.css'

export default function CaseStudyCard({ title, category, description, index, color }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.image} style={{ '--card-color': color || 'var(--accent-dim)' }}>
        <div className={styles.imagePlaceholder} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.cta}>View case study →</span>
      </div>
    </motion.article>
  )
}
