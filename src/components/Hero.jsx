import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const socials = [
  {
    label: 'Play on Roblox',
    sub: 'roblox.com',
    href: 'https://www.roblox.com/games/121901103139963/Bloxfun',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="24" height="24" rx="6" fill="#E2231A"/>
        <path d="M8.5 7.5h5.5c2.3 0 4.2 1.7 4.2 4 0 1.5-.8 2.8-2 3.5l3.2 5.5h-3.8l-2.7-4.5H11v4.5H8.5V7.5zm2.5 2.5v3h2.5c1 0 1.7-.7 1.7-1.5 0-.8-.7-1.5-1.7-1.5H11z" fill="white"/>
      </svg>
    ),
    primary: true,
  },
  {
    label: 'Twitter',
    sub: '@bloxfunn',
    href: 'https://x.com/bloxfunn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Discord',
    sub: 'Join server',
    href: 'https://discord.gg/sYWdhTZYNu',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.1776-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
      </svg>
    ),
  },
]

function Hero({ config }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="hero" ref={ref}>
      <div className="hero-grid" />

      <motion.div
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="eyebrow-dot" />
        <span>live on roblox · v0.1 alpha</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      >
        the corner<br/>
        to <em>1000x</em><br/>
        your life.
      </motion.h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        the first on-chain market running<br/>inside Roblox. trade memecoins<br/>with real robux. no bridge. no friction.
      </motion.p>

      <motion.div
        className="hero-socials"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card ${s.primary ? 'social-card--primary' : ''}`}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="social-icon">{s.icon}</div>
            <div className="social-text">
              <div className="social-label">{s.label}</div>
              <div className="social-sub">{s.sub}</div>
            </div>
            <svg className="social-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 13L13 3M13 3H6M13 3V10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="hero-marquee"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="marquee-track">
          <span>trade memecoins inside roblox</span>
          <span className="marquee-dot">·</span>
          <span>real robux · real solana</span>
          <span className="marquee-dot">·</span>
          <span>no bridge · no friction</span>
          <span className="marquee-dot">·</span>
          <span>pump.fun mechanics, onchain rails</span>
          <span className="marquee-dot">·</span>
          <span>trade memecoins inside roblox</span>
          <span className="marquee-dot">·</span>
          <span>real robux · real solana</span>
          <span className="marquee-dot">·</span>
          <span>no bridge · no friction</span>
          <span className="marquee-dot">·</span>
          <span>pump.fun mechanics, onchain rails</span>
          <span className="marquee-dot">·</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
