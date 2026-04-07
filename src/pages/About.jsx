import { motion } from 'framer-motion'
import styles from './About.module.css'

const experience = [
  { company: 'Dentsu FractalInk', role: 'Design Intern', location: 'Mumbai', note: 'First project. First glimpse.' },
  { company: 'TapStart Digital', role: 'UI / UX Designer', location: 'Mumbai', note: 'Startup networking platform' },
  { company: 'Punt Partners', role: 'Graphic Designer', location: 'Remote', note: 'AI training dataset' },
  { company: 'Fourplus Media', role: 'Graphic Designer', location: 'Mumbai', note: 'Mercaze campaign' },
]

const tools = ['Photoshop', 'Illustrator', 'Figma', 'Premiere Pro', 'Adobe XD']

export default function About() {
  return (
    <main className={styles.main}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className={styles.label}>About</span>
        <h1 className={styles.name}>Hey, I'm Vedaansh.</h1>
        <p className={styles.tagline}>20. Based in Thane West, Mumbai. Graphic designer by practice, coder by origin.</p>
      </motion.section>

      <motion.section
        className={styles.story}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
      >
        <p>
          I started my journey in design in 2021, at 15. Pursuing Computer Science at the time,
          I was a little skeptical  -  coding is a very streamlined process. You have a goal, you
          have a path; all you have to do is find it.
        </p>
        <p>
          Entering design was a whole different box of surprises. No set path, no defined goal  - 
          just me having to carve a direction from nothing. Frustrating at first, coming from a
          background of "do what is asked." But what made me fall further into this rabbit hole was
          the fact that the only limitation to my work was my creativity. (And the client, duh.)
        </p>
        <p>
          Never having experienced that kind of freedom in development, I went all in on design.
          When my academics didn't go the way I planned, I stopped waiting for a classroom and
          started learning through the work itself  -  interning early, taking every brief seriously.
        </p>
        <p>
          My case studies shine a light on how I explored a path with no set end and no "right"
          direction. Enough yapping, let's move on.
        </p>
      </motion.section>

      <motion.section
        className={styles.experienceSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className={styles.label}>Experience</span>
        <div className={styles.experienceList}>
          {experience.map((item) => (
            <div key={item.company} className={styles.experienceItem}>
              <div className={styles.expLeft}>
                <span className={styles.expCompany}>{item.company}</span>
                <span className={styles.expNote}>{item.note}</span>
              </div>
              <div className={styles.expRight}>
                <span className={styles.expRole}>{item.role}</span>
                <span className={styles.expLocation}>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.toolsSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className={styles.label}>Tools</span>
        <div className={styles.toolsList}>
          {tools.map((tool) => (
            <span key={tool} className={styles.tool}>{tool}</span>
          ))}
        </div>
      </motion.section>

    </main>
  )
}
