import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Background from './Background'

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

function ScaleIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

const features = [
  { title: 'Trade on Roblox', desc: 'Buy and sell tokens directly inside Roblox. Real Robux, real trades, real-time charts.' },
  { title: 'On-Chain Backed', desc: 'Every trade is secured by Solana. Your assets are real tokens, not just game items.' },
  { title: 'Instant Swaps', desc: 'No waiting. No gas wars. Swap tokens with Robux in milliseconds.' },
  { title: 'Live Markets', desc: 'Real-time order books, candlestick charts, and top gainers.' },
  { title: 'Solana Bridge', desc: 'Bridge your tokens out of Roblox to your Solana wallet. True ownership.' },
  { title: 'Fair Launch', desc: 'No presale. No team allocation. Every token launches fairly on a bonding curve.' },
]

const pillars = [
  {
    label: 'Connected',
    title: 'Roblox meets Solana',
    desc: 'The first bridge between the world\'s largest gaming platform and on-chain markets. No complexity, just connection.',
  },
  {
    label: 'Instant',
    title: 'Real-time by design',
    desc: 'Millisecond swaps, live order books, instant settlements. The speed of Solana, inside Roblox.',
  },
  {
    label: 'Open',
    title: 'True ownership',
    desc: 'Every token is yours. Bridge out to any Solana wallet. No walls, no gatekeepers.',
  },
]

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="header-wrap">
        <a href="#" className="header-logo">
          <img src="/logo.png" alt="Blox.fun" className="header-logo-img" />
        </a>
        <nav className="header-nav">
          <a href="#features">Features</a>
          <a href="#experience">Experience</a>
          <a href="#token">Token</a>
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="header-cta">Play</a>
        </nav>
      </div>
    </motion.header>
  )
}

function Hero() {
  const coins = [
    { name: 'BONK', ticker: 'BONK', price: '0.0000234', change: '+12.4%', up: true, color: '#FF6B6B' },
    { name: 'WIF', ticker: 'WIF', price: '0.001245', change: '+8.2%', up: true, color: '#FFB74D' },
    { name: 'POPCAT', ticker: 'POPCAT', price: '0.000567', change: '+24.1%', up: true, color: '#4CAF50' },
    { name: 'SAMO', ticker: 'SAMO', price: '0.000891', change: '-3.2%', up: false, color: '#4CA5FF' },
  ]

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="badge">Now live on Roblox</div>
          </motion.div>
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
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
            <a href="#features" className="btn-secondary">
              Learn more
            </a>
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
            <div className="hero-card-search">Search tokens...</div>
          </div>
          <div className="hero-card-body">
            {coins.map((c, i) => (
              <motion.div
                key={i}
                className="hero-card-row"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.06, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="hero-card-left">
                  <div className="hero-card-icon" style={{ background: c.color }}>
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="hero-card-name">{c.name}</div>
                    <div className="hero-card-sub">{c.ticker}</div>
                  </div>
                </div>
                <div className="hero-card-right">
                  <div className="hero-card-price">{c.price}</div>
                  <div className={`hero-card-change ${c.up ? 'up' : 'down'}`}>{c.change}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="section-wrap">
        <FadeSection>
          <div className="section-header">
            <div className="badge">Features</div>
            <h2 className="section-h">Trade like pump.fun,<br />built for Roblox.</h2>
            <p className="section-p">Everything you love about on-chain memecoin trading — now inside Roblox with real Robux.</p>
          </div>
        </FadeSection>
        <div className="feature-grid">
          {features.map((f, i) => (
            <FadeSection key={i} delay={i * 0.04}>
              <div className="feature-card glass">
                <div className="feature-card-title">{f.title}</div>
                <div className="feature-card-desc">{f.desc}</div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-wrap">
        <FadeSection>
          <div className="section-header">
            <div className="badge">Experience</div>
            <h2 className="section-h">Built different.<br />Feels different.</h2>
            <p className="section-p">Blox.fun reimagines what a gaming marketplace can be. No friction, no barriers — just pure connection between Roblox and Solana.</p>
          </div>
        </FadeSection>
        <div className="pillar-grid">
          {pillars.map((p, i) => (
            <FadeSection key={i} delay={i * 0.08}>
              <div className="pillar-card glass">
                <div className="pillar-label">{p.label}</div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-desc">{p.desc}</div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function TokenSection() {
  return (
    <section className="section" id="token">
      <div className="section-wrap">
        <FadeSection>
          <div className="token-hero glass">
            <div className="token-hero-bg" />
            <div className="token-hero-inner">
              <div className="badge">Coming to Solana</div>
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
        <div className="footer-links">
          <a href="https://x.com/bloxfun" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer">Roblox</a>
        </div>
      </div>
    </motion.footer>
  )
}

export default function App() {
  return (
    <>
      <Background />
      <div className="content">
        <Header />
        <Hero />
        <Features />
        <Experience />
        <TokenSection />
        <Footer />
      </div>
    </>
  )
}
