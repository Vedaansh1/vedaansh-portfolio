import styles from './HeroBackground.module.css'

export default function HeroBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
      <div className={styles.blob4} />
    </div>
  )
}
