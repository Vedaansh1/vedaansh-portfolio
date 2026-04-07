import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CaseStudySelector.module.css'

const projects = [
  {
    num: '01',
    title: 'TapStart Digital',
    category: 'UI / UX Designer',
    description: "India's startup networking platform, wireframed end-to-end. Design as the first act  -  before a single line of code was written.",
    accent: '#A8C4D4',
    bg: 'linear-gradient(135deg, #0A0A0A 0%, #071218 50%, #0A1820 100%)',
    tag: 'UX / Wireframe',
    images: [],
    videos: [],
    groups: [],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5nz1YL5KTx9AQRYQJxVBLt%2FVedaansh-s-TapStart-App-Wireframe%3Fnode-id%3D0-1%26t%3DwDKsBPtmxcU9yhqd-1',
    caseStudy: {
      client: 'TapstartX',
      role: 'Creative Designer',
      timeline: 'Apr 2023 – Jan 2024',
      tools: 'Figma, Photoshop, WordPress',
      brief: [
        "TapstartX needed a social platform concept for Indian entrepreneurs - one place where founders could build profiles, find advisors, join groups, and actually connect with a community. I came in to design the full screen architecture in Figma as a concept for what the product could be.",
        "On top of that, I worked on their website content too - writing SEO-aligned headlines and articles aimed specifically at Indian entrepreneurs to get some organic traction going before launch.",
      ],
      constraints: [
        "Being an early-stage startup, TapstartX didn't come in with a rigid brief or existing guidelines  -  which was both a gift and a challenge. I'd just finished my 12th and this was only my second internship, so the open canvas was exactly what I needed to find my feet.",
        "The real constraint was the absence of a plan. The brief I started with was essentially: build an app where startup founders can find community with each other. No information architecture, no feature list, no defined user flows  -  just an idea. Everything beyond that was mine to figure out.",
      ],
      approach: [
        "Rather than starting with onboarding, I began at the home page - the centre of the entire product. From there I could build outward in any direction, like a spider weaving a web from the middle. It kept the architecture balanced and meant every section stayed an equal distance from the core.",
        "For onboarding, the priority was speed. The fastest route to hooking someone into a product is getting them through the door with as little friction as possible. I designed around the path of least resistance, Google sign-in integrated on every onboarding screen, giving users a two-tap registration that bypassed the usual form-filling entirely.",
        "The separation of Business Profile from User Profile was directly inspired by LinkedIn's implementation. Entrepreneurs needed more than a bio: they needed a dedicated space to describe their startup, its stage, its focus, and what they were looking for. A standard profile field couldn't hold that without becoming cluttered.",
        "The Advisor Chat feature came from a real gap: in 2022, there was no clear \"how-to\" for startup founders in India. No structured guidance, no curated resource. The feature let users select from a dropdown of common guidance requests or input a custom query and receive a curated list of TapstartX-approved advisors, each with their own profile to browse before making contact. The dropdown was a deliberate UX call over a text box: it reduced the cognitive load of having to articulate a problem from scratch every time.",
        "Between early drafts and final screens, the biggest shift was path efficiency. I stripped back the number of steps required to reach the home page and standardised the action depth across the app - so no matter what a user was trying to do, the number of taps to get there stayed roughly consistent.",
      ],
      result: [
        "Delivered a complete wireframe architecture across 25+ screens  -  a full auth flow, dual profile system, community features, and a query-led advisor discovery experience, all designed in Figma from a single-line brief. The scope was always a concept, and the concept was delivered in full.",
        "Alongside the product work, SEO-aligned content was published on the TapstartX website to begin building an audience  -  content that contributed to the early traction of a company that has since gone on to establish itself as a recognised name in the Indian startup ecosystem.",
        "Given a blank canvas, no guidelines, and no predefined architecture, the work produced a coherent, navigable concept with considered UX decisions at every layer  -  and the company it was designed for proved the market was real.",
      ],
    },
  },
  {
    num: '02',
    title: 'Fourplus Media',
    category: 'Graphic Designer',
    description: 'Brand campaigns and social media creatives built to elevate clients above their price point. Where strict guidelines became a design direction.',
    accent: '#B8CACF',
    bg: 'linear-gradient(135deg, #0A0A0A 0%, #0D1214 50%, #101618 100%)',
    tag: 'Branding / Social',
    groups: [],
    images: [
      '/work/fourplus/Static_0.png',
      '/work/fourplus/Static_1.jpg',
      '/work/fourplus/Static_2.png',
      '/work/fourplus/Static_3.jpg',
      '/work/fourplus/Static_4.jpg',
      '/work/fourplus/Static_5.jpg',
      '/work/fourplus/Static_6.jpg',
      '/work/fourplus/Static_8.jpg',
      '/work/fourplus/Static_9.jpg',
      '/work/fourplus/Static_10.jpg',
      '/work/fourplus/Static_11.jpg',
    ],
    videos: [
      '/work/fourplus/AI_Creative_1.mp4',
      '/work/fourplus/AI_Creative_2.mp4',
      '/work/fourplus/AI_Creative_3.mp4',
      '/work/fourplus/AI_Creative_4.mp4',
      '/work/fourplus/AI_Creative_5.mp4',
      '/work/fourplus/AI_Creative_6.mp4',
    ],
    caseStudy: {
      client: 'Mercaze (via Fourplus Media)',
      role: 'Graphic Designer',
      timeline: 'Jan 2026 – Mar 2026',
      tools: 'Photoshop, Premiere Pro, KlingAI',
      brief: [
        "Mercaze is a Mumbai-based innerwear brand built around a specific gap in the market  -  the space between high-end luxury products like Calvin Klein and affordable everyday options like Jockey. The brief was to create social media ad creatives for Instagram, targeting men aged 25–40 who want premium quality without the premium price tag.",
        "Fourplus Media handled the full scope of the brand's digital presence  -  website design, packaging, and marketing  -  and I was brought in specifically to design the Instagram creatives: static ad posts that communicated Mercaze's positioning clearly and consistently across every format.",
      ],
      constraints: [
        "Unlike TapstartX, Mercaze came with a fully defined brand system  -  specific colour palettes, font families, font sizes, and a clear set of do's and don'ts. There was no room to explore freely from the start; the design language was already established and my job was to work within it.",
        "The client was extensively involved in the specifics of every design, which meant finding a constant balance between what was visually strong, what felt appropriately luxurious, and what the client actually signed off on. In agency work, those three things don't always align  -  and navigating that gap is as much a part of the job as the design itself.",
      ],
      approach: [
        "The client's direction was simple: keep it clean, direct, and luxurious. In practice, that brief took considerable iteration to land. Early posts that were minimal and direct kept getting rejected, which pushed me toward a more considered system  -  alternating between two distinct post types to keep the grid varied and the audience engaged.",
        "Typographic posts led with feeling. The headline carried the emotional weight of the creative, and I matched the text colour directly to the product being featured  -  creating a visual link between the copy and the product without needing to force them into the same frame.",
        "Product-focused posts took the opposite approach: text was minimal, and at least 70% of the frame was given to the product itself  -  zoomed in close enough to show fabric texture and detail. The texture did the communicating that the copy didn't. Filling the frame with the product was a deliberate choice to let the quality speak without needing to say it.",
        "The split-composition format  -  product on one side, headline on the other  -  consistently performed better with the client and resonated more with the audience. But I didn't use it exclusively. Repeating the same composition across every post would have made the Instagram grid monotonous and exhausted the format. Alternating between compositions kept the feed visually alive.",
        "Within the brand guidelines, Myriad Pro was the primary typeface and Minion Pro was reserved for emotional emphasis. By the end of the project I made the call to bring in Bebas Neue for certain split-composition formats  -  neither Myriad Pro nor Minion Pro produced a satisfying typographic weight when paired against the product in those specific layouts. It was a deliberate deviation from the guidelines with a clear reason behind it.",
        "The video content was built on AI-generated footage produced through prompt engineering in KlingAI, using existing product and model photography as reference. The prompts were written to retain fabric texture and product detail  -  keeping the visual quality consistent with the static creatives and aligned with what the client had already approved.",
      ],
      result: [
        "Over a 3-month engagement, produced a full campaign's worth of social media creatives  -  static posts, product spec sheets, and AI-generated video. The 16 pieces shown here are a curated selection from the broader body of work delivered across the campaign.",
        "Working within a 15-person team alongside performance marketing, account management, and the client, the scope of the design work extended beyond execution. Several posts that deviated from the brand guidelines were presented directly to the client and approved over the strictly compliant versions  -  a result of making a clear visual case for why the departure served the brand better than the rulebook did.",
        "By the end of the campaign, three things had been resolved that weren't clear at the start: what the client actually needed beneath the vague brief, how to balance product display and typography without either element working against the other, and how AI-generated video could be introduced into the creative set in a way that felt consistent with the static campaign rather than disconnected from it.",
      ],
    },
  },
  {
    num: '03',
    title: 'Punt Partners',
    category: 'Graphic Designer',
    description: '90 creatives built to teach a machine how to think in layouts. Style variety as a technical requirement.',
    accent: '#88AABE',
    bg: 'linear-gradient(135deg, #0A0A0A 0%, #080E14 50%, #0A1220 100%)',
    tag: 'Design / AI',
    images: [],
    videos: [],
    groups: Array.from({ length: 19 }, (_, i) => [
      `/work/punt/group${i + 1}/1.png`,
      `/work/punt/group${i + 1}/2.png`,
      `/work/punt/group${i + 1}/3.png`,
    ]),
    caseStudy: {
      client: 'Punt Partners',
      role: 'Graphic Designer Intern',
      timeline: 'Mar 2024 – Jun 2024',
      tools: 'Figma',
      brief: [
        "Punt Partners is a mar-tech and digital services company based in Bengaluru, operating at the intersection of creative advertising and technology. Unlike traditional agencies focused on acquisition, Punt Partners specialises in retention  -  helping brands leverage first-party data to drive deeper customer engagement and lifetime value.",
        "The project involved producing a library of ad creatives across three aspect ratios  -  square, portrait, and landscape  -  in multiple visual styles, to serve as training data for an internal AI model. The model's goal: take a single ad format as input and automatically generate accurate, style-consistent versions in the remaining aspect ratios, eliminating the manual resizing workload for future campaigns.",
      ],
      constraints: [
        "Unlike the Mercaze campaign, text could never touch the image. Every creative required a clear, deliberate separation between the logo, headline, subtext, and photography  -  not as a stylistic choice, but as a technical requirement. Overlapping elements would introduce ambiguity the model couldn't be trained on reliably. A professional design language also had to be maintained across most of the set, keeping the creative range broad but not experimental to the point of being unusable as training data.",
        "One intentional exception was made  -  a full-bleed editorial style where type sits within a defined frame border over the image. Included specifically as a style variation, it gave the model exposure to a layout system it would otherwise never see in the training data.",
      ],
      approach: [
        "90 creatives across 20 groups, each produced in square, portrait, and landscape  -  all designed in Figma with Pinterest as the primary reference source for style direction.",
        "The variety was the work. Each group needed to be visually distinct enough that the model could learn to recognise and adapt different layout systems  -  not just resize a single template. The styles ranged from split-panel compositions and geometric overlays to minimal editorial frames, bold illustration-led designs, and lifestyle-driven layouts. The constraint of keeping elements cleanly separated actually sharpened the compositional thinking, since every design decision had to work without the shortcut of overlaying type on imagery.",
      ],
      result: [
        "All 90 creatives across 20 groups and 3 aspect ratios were approved and handed over for model training, with minimal revision rounds  -  a reflection of how clearly the brief's technical requirements were understood from the start.",
        "The full scope of the engagement was this single deliverable. Getting it right meant producing a set broad enough to train on, consistent enough to be technically usable, and varied enough that the model could learn to adapt layout systems rather than just memorise a single template. That balance  -  between creative range and training reliability  -  was the real challenge of the project.",
      ],
    },
  },
  {
    num: '04',
    title: 'Dentsu FractalInk',
    category: 'UI / UX Designer Intern',
    description: "UX work inside one of India's most respected digital design studios. Where wireframes stopped being deliverables and started being craft.",
    accent: '#A4A8CC',
    bg: 'linear-gradient(135deg, #0A0A0A 0%, #0A0A14 50%, #0C0C1C 100%)',
    tag: 'UX / Concept',
    images: [],
    videos: [],
    groups: [],
    figmaEmbed: 'https://xd.adobe.com/embed/3075465a-481c-4d48-8680-fb18de2ed9ba-6526',
    caseStudy: {
      client: 'Dentsu FractalInk',
      role: 'UX/UI Designer Intern',
      timeline: 'Mar 2022 – May 2022',
      tools: 'Adobe XD',
      brief: [
        "A community and marketplace app for fashion enthusiasts  -  one platform where users could display their wardrobe, discover others', and buy or rent clothes without leaving the app. The project was conceived and wireframed during an internship at Dentsu FractalInk, the first internship, at age 15.",
      ],
      constraints: [
        "Only one: it was the very first design project. No accumulated design knowledge, no visual references to draw from, no sense yet of what good UX looked like or why. The constraint wasn't the brief  -  it was the designer.",
      ],
      approach: [
        "Nine screens. An onboarding flow that asked users about body type, shoe size, complexion, and personality before letting them in. An OTP registration screen. A feature hub. A home dashboard. It was incomplete, and visibly so  -  but somewhere in those nine screens was the first real attempt to solve a problem through design rather than just decoration.",
        "The gap between this wireframe and the work that came after it is the most honest measure of what five years in the field looks like.",
      ],
      result: [
        "Delivered 9 screens in Adobe XD  -  an onboarding flow, dual profile system, feature hub, and home dashboard  -  from a first internship at 15 with no prior design knowledge and no brief beyond the core idea.",
        "The gap between this wireframe and the work that came after it is the most honest measure of what five years in the field looks like. Every project since has been an answer to the question this one asked: how far can this go?",
      ],
    },
  },
]

const slideVariants = {
  enter: { clipPath: 'polygon(105% 0%, 105% 0%, 115% 100%, 115% 100%)' },
  center: {
    clipPath: 'polygon(-10% 0%, 105% 0%, 115% 100%, -20% 100%)',
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: 'polygon(-20% 0%, -10% 0%, 0% 100%, -30% 100%)',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
}

export default function CaseStudySelector() {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [groupIndex, setGroupIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [figmaLoaded, setFigmaLoaded] = useState(false)
  const contentRef = useRef(null)
  const sliderRef = useRef(null)
  const sectionRef = useRef(null)

  const scrollSlider = (dir) => {
    if (!sliderRef.current) return
    const itemWidth = sliderRef.current.querySelector('[class*="sliderItem"]')?.offsetWidth || 300
    sliderRef.current.scrollBy({ left: dir * (itemWidth + 12), behavior: 'smooth' })
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navigateGroup = (dir) => {
    const groups = projects[selected].groups
    setGroupIndex(i => Math.max(0, Math.min(groups.length - 1, i + dir)))
  }

  const handleSelect = (i) => {
    if (expanded) return
    if (i === selected) return
    setSelected(i)
    setFigmaLoaded(false)
  }

  const project = projects[selected]
  const cs = project.caseStudy

  return (
    <section className={styles.selector} ref={sectionRef}>

      {/* Left panel */}
      <div className={`${styles.panel} ${expanded ? styles.panelHidden : ''}`}>
        <span className={styles.panelLabel}>Selected Work</span>
        {projects.map((p, i) => (
          <button
            key={p.num}
            className={`${styles.item} ${selected === i ? styles.active : ''}`}
            onClick={() => handleSelect(i)}
            style={{ '--accent': p.accent }}
          >
            <span className={styles.itemNum}>{p.num}</span>
            <div className={styles.itemText}>
              <span className={styles.itemTitle}>{p.title}</span>
              <span className={styles.itemCat}>{p.category}</span>
            </div>
            <div className={styles.itemBar} />
          </button>
        ))}
      </div>

      {/* Main display */}
      <div className={`${styles.display} ${expanded ? styles.displayExpanded : ''}`} data-scrollable={expanded ? 'true' : undefined}>
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div
              key={`preview-${selected}`}
              className={styles.slide}
              style={{ background: project.bg }}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <span className={styles.bigNum}>{project.num}</span>
              <div className={styles.content}>
                <motion.span
                  className={styles.tag}
                  style={{ color: project.accent, borderColor: project.accent }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {project.tag}
                </motion.span>
                <motion.h2
                  className={styles.title}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  className={styles.description}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.38, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {project.description}
                </motion.p>
                <motion.button
                  className={styles.cta}
                  style={{ '--accent': project.accent }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => setExpanded(true)}
                >
                  View Case Study
                  <span className={styles.ctaArrow}>→</span>
                </motion.button>
              </div>
              <motion.div
                className={styles.accentLine}
                style={{ background: project.accent }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`expanded-${selected}`}
              className={styles.caseContent}
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Header row */}
              <div className={styles.caseHeader}>
                <button className={styles.back} onClick={() => setExpanded(false)}>
                  ← Back
                </button>
                <span className={styles.caseTag} style={{ color: project.accent, borderColor: project.accent }}>
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h2 className={styles.caseTitle}>{project.title}</h2>

              {/* Meta strip */}
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>{cs.role}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Timeline</span>
                  <span className={styles.metaValue}>{cs.timeline}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Tools</span>
                  <span className={styles.metaValue}>{cs.tools}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Client</span>
                  <span className={styles.metaValue}>{cs.client}</span>
                </div>
              </div>

              {/* Sections */}
              <div className={styles.caseSections}>
                {[
                  { label: 'The Brief', text: cs.brief },
                  { label: 'The Constraints', text: cs.constraints },
                  { label: 'The Approach', text: cs.approach },
                  { label: 'The Result', text: cs.result },
                ].map(({ label, text }) => (
                  <div key={label} className={styles.caseSection}>
                    <span className={styles.caseSectionLabel}>{label}</span>
                    <div className={styles.caseSectionText}>
                      {Array.isArray(text)
                        ? text.map((para, i) => <p key={i}>{para}</p>)
                        : <p>{text}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Work  -  trio card slider (Punt Partners) */}
              {project.groups.length > 0 && (
                <div className={styles.workSliderSection}>
                  <div className={styles.workSliderHeader}>
                    <span className={styles.caseSectionLabel}>The Work</span>
                    <div className={styles.sliderControls}>
                      <button className={styles.sliderArrow} onClick={() => navigateGroup(-1)} disabled={groupIndex === 0}>←</button>
                      <span className={styles.sliderCount}>{groupIndex + 1} / {project.groups.length}</span>
                      <button className={styles.sliderArrow} onClick={() => navigateGroup(1)} disabled={groupIndex === project.groups.length - 1}>→</button>
                    </div>
                  </div>
                  <div className={styles.trioViewport}>
                    <div
                      className={styles.trioTrack}
                      style={{ transform: `translateX(-${groupIndex * 100}%)` }}
                    >
                      {project.groups.map((group, gi) => (
                        <div key={gi} className={styles.trioCard}>
                          <img src={group[0]} alt="" className={styles.trioImg} loading="lazy" onClick={() => setLightbox(group[0])} />
                          <img src={group[1]} alt="" className={styles.trioImg} loading="lazy" onClick={() => setLightbox(group[1])} />
                          <img src={group[2]} alt="" className={styles.trioImg} loading="lazy" onClick={() => setLightbox(group[2])} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Work  -  Figma embed */}
              {project.figmaEmbed && (
                <div className={styles.workSliderSection}>
                  <div className={styles.workSliderHeader}>
                    <span className={styles.caseSectionLabel}>The Work</span>
                  </div>
                  <div className={styles.figmaWrapper}>
                    {!figmaLoaded && (
                      <div className={styles.figmaLoader}>
                        <span className={styles.figmaLoaderDot} />
                        <span className={styles.figmaLoaderDot} />
                        <span className={styles.figmaLoaderDot} />
                        <span className={styles.figmaLoaderText}>Loading wireframe</span>
                      </div>
                    )}
                    <iframe
                      src={project.figmaEmbed}
                      className={`${styles.figmaEmbed} ${figmaLoaded ? styles.figmaEmbedVisible : ''}`}
                      allowFullScreen
                      title={`${project.title} Wireframe`}
                      onLoad={() => setFigmaLoaded(true)}
                    />
                  </div>
                </div>
              )}

              {/* Work  -  flat slider (Fourplus etc) */}
              {(project.images.length > 0 || project.videos.length > 0) && (
                <div className={styles.workSliderSection}>
                  <div className={styles.workSliderHeader}>
                    <span className={styles.caseSectionLabel}>The Work</span>
                    <div className={styles.sliderControls}>
                      <button className={styles.sliderArrow} onClick={() => scrollSlider(-1)}>←</button>
                      <button className={styles.sliderArrow} onClick={() => scrollSlider(1)}>→</button>
                    </div>
                  </div>
                  <div className={styles.sliderTrack} ref={sliderRef}>
                    {project.images.map((src, i) => (
                      <img key={i} src={src} alt="" className={styles.sliderItem} loading="lazy" onClick={() => setLightbox(src)} />
                    ))}
                    {project.videos.map((src, i) => (
                      <video key={i} src={src} className={styles.sliderItem} muted loop playsInline preload="none"
                        onMouseEnter={e => e.target.play()}
                        onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Case study navigation */}
              <div className={styles.caseNav}>
                {selected > 0 ? (
                  <button
                    className={styles.caseNavBtn}
                    onClick={() => {
                      setSelected(selected - 1)
                      setGroupIndex(0)
                      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                  >
                    <span className={styles.caseNavArrow}>←</span>
                    <span className={styles.caseNavLabel}>{projects[selected - 1].title}</span>
                  </button>
                ) : <div />}

                {selected < projects.length - 1 ? (
                  <button
                    className={`${styles.caseNavBtn} ${styles.caseNavBtnRight}`}
                    onClick={() => {
                      setSelected(selected + 1)
                      setGroupIndex(0)
                      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                  >
                    <span className={styles.caseNavLabel}>{projects[selected + 1].title}</span>
                    <span className={styles.caseNavArrow}>→</span>
                  </button>
                ) : <div />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              className={styles.lightboxImg}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            />
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
