import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import styles from './Hero.module.css'

const greetings = [
  { text: 'Hey!', lang: 'English' },
  { text: 'नमस्ते!', lang: 'Hindi' },
  { text: 'Hola!', lang: 'Spanish' },
  { text: 'Bonjour!', lang: 'French' },
  { text: 'Ciao!', lang: 'Italian' },
  { text: 'こんにちは!', lang: 'Japanese' },
  { text: '안녕하세요!', lang: 'Korean' },
  { text: 'Hallo!', lang: 'German' },
  { text: 'Olá!', lang: 'Portuguese' },
  { text: 'مرحباً!', lang: 'Arabic' },
]

export default function Hero({ scrollContainer }) {
  const [index, setIndex] = useState(0)
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollContainer,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex(i => (i + 1) % greetings.length)
    }, 1800)
    return () => clearTimeout(timeout)
  }, [index])

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div style={{ opacity, y }} className={styles.inner}>
        <div className={styles.greetingWrapper}>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className={styles.greeting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {greetings[index].text}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.div
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.divider} />
          <h1>
            <span className={styles.nameBold}>Vedaansh Adesara</span>
          </h1>
          <p className={styles.sub}>Creative Designer</p>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.location}
        style={{ opacity, y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className={styles.locationDot} />
        <span className={styles.locationText}>Mumbai, India</span>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <span />
      </motion.div>
    </section>
  )
}
