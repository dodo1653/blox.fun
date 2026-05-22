import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Lenis from 'lenis'
import Background from './Background'

function Typewriter({ text, className, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <span ref={ref} className={className}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: delay + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: 'inline-block' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  )
}

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

const capabilities = [
  { cmd: 'Trade', desc: 'On Roblox, with real Robux', state: 'Live', stateType: 'active' },
  { cmd: 'Bridge', desc: 'To Solana, to your wallet', state: 'Live', stateType: 'active' },
  { cmd: 'Swap', desc: 'In milliseconds, no gas', state: 'Instant', stateType: 'neutral' },
  { cmd: 'Launch', desc: 'Fair, on a bonding curve', state: 'Open', stateType: 'neutral' },
]

const socials = [
  {
    href: 'https://discord.gg/76SuV8hwf7',
    label: 'Discord',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.1776-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>,
  },
  {
    href: 'https://www.roblox.com/games/121901103139963/Bloxfun',
    label: 'Roblox',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 8h4l1.5 4L15 8h4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 16V8" strokeLinecap="round"/><path d="M20 16V8" strokeLinecap="round"/></svg>,
  },
  {
    href: 'https://x.com/bloxfunn',
    label: 'X',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]



function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <Typewriter text="blox.fun" className="hero-typewriter" delay={0.1} />
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The first on-chain<br />
            market on Roblox.
          </motion.h1>
          <motion.p
            className="hero-p"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Trade memecoins with real Robux. Pump.fun mechanics, Solana rails,
            all inside Roblox. The easiest way to onboard everyone.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Play Blox.fun
            </a>
            <a href="#token" className="btn-secondary">
              Token
            </a>
          </motion.div>
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="hero-socials-line" />
            <div className="hero-socials-icons">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="hero-socials-line" />
          </motion.div>
        </div>

        <motion.div
          className="hero-card glass"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-card-bar">
            <div className="hero-card-dots">
              <span className="hero-card-dot" />
              <span className="hero-card-dot" />
              <span className="hero-card-dot" />
            </div>
            <span className="hero-card-title">Blox.fun capabilities</span>
            <div className="hero-card-search">
              <span className="kbd">⌘K</span>
              <span className="hero-card-search-text">Run a command...</span>
            </div>
          </div>
          <div className="hero-card-body">
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                className="hero-card-row"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.06, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="cap-left">
                  <div className="cap-kbd">⌘{i + 1}</div>
                  <div>
                    <div className="cap-name">{c.cmd}</div>
                    <div className="cap-desc">{c.desc}</div>
                  </div>
                </div>
                <span className={`cap-state cap-state--${c.stateType}`}>{c.state}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TokenSection() {
  return (
    <section className="section" id="token">
      <div className="section-wrap">
        <FadeSection>
          <div className="token-hero">
            <div className="token-hero-bg" />
            <div className="token-hero-inner">
              <h2 className="token-hero-h">The bridge token<br />between two worlds.</h2>
              <p className="token-hero-p">
                Blox.fun will launch its own token on Solana. The native bridge currency connecting Roblox players to the open market.
              </p>

              <div className="bridge-visual">
                <div className="bridge-side">
                  <div className="bridge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M8 2v2M16 2v2M2 10h20" />
                    </svg>
                  </div>
                  <span className="bridge-label">Roblox</span>
                </div>

                <div className="bridge-connector">
                  <div className="bridge-line" />
                  <div className="bridge-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 8h12M10 4l4 4-4 4" />
                    </svg>
                  </div>
                  <div className="bridge-line" />
                </div>

                <div className="bridge-side">
                  <div className="bridge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v12M6 12h12" />
                    </svg>
                  </div>
                  <span className="bridge-label">Solana</span>
                </div>
              </div>

              <div className="token-stats">
                <div className="token-stat glass">
                  <div className="token-stat-value">TBA</div>
                  <div className="token-stat-label">Ticker</div>
                </div>
                <div className="token-stat glass">
                  <div className="token-stat-value">1B</div>
                  <div className="token-stat-label">Supply</div>
                </div>
                <div className="token-stat glass">
                  <div className="token-stat-value">0/0</div>
                  <div className="token-stat-label">Tax</div>
                </div>
              </div>

              <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Play Blox.fun
              </a>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-wrap">
        <div className="footer-credit">Blox.fun</div>
      </div>
    </motion.footer>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    setReady(true)
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Background />
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Hero />
        <TokenSection />
        <Footer />
      </motion.div>
    </>
  )
}
