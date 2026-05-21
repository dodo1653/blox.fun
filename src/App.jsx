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

const capabilities = [
  { cmd: 'Trade', desc: 'On Roblox, with real Robux', state: 'Live', stateType: 'active' },
  { cmd: 'Bridge', desc: 'To Solana, to your wallet', state: 'Live', stateType: 'active' },
  { cmd: 'Swap', desc: 'In milliseconds, no gas', state: 'Instant', stateType: 'neutral' },
  { cmd: 'Launch', desc: 'Fair, on a bonding curve', state: 'Open', stateType: 'neutral' },
]

const features = [
  { num: '01', title: 'Trade on Roblox', desc: 'Buy and sell tokens directly inside Roblox. Real Robux, real trades, real-time charts. Every transaction settled on Solana.' },
  { num: '02', title: 'On-Chain Backed', desc: 'Your assets are real SPL tokens, not game items. Bridge them out, sell them, hold them. True ownership from day one.' },
  { num: '03', title: 'Live Markets', desc: 'Real-time order books, candlestick charts, top gainers, and volume trackers. The full trading experience, inside a game.' },
  { num: '04', title: 'Instant Swaps', desc: 'No waiting, no gas wars, no failed transactions. Swap tokens with Robux in milliseconds on Solana rails.' },
  { num: '05', title: 'Solana Bridge', desc: 'Bridge tokens out of Roblox directly to your Phantom or Solflare wallet. Take your assets wherever you want.' },
  { num: '06', title: 'Fair Launch', desc: 'No presale, no team allocation, no insider deals. Every token launches on a bonding curve. The market decides.' },
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
          <div className="logo-ring">
            <img src="/logo.png" alt="Blox.fun" className="header-logo-img" />
          </div>
        </a>
        <nav className="header-nav">
          <a href="#features">Capabilities</a>
          <a href="#experience">Platform</a>
          <a href="#token">Token</a>
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="header-cta">Play</a>
        </nav>
      </div>
    </motion.header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="badge"><span className="badge-dot" />Now live on Roblox</div>
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

function Features() {
  return (
    <section className="section" id="features">
      <div className="section-wrap">
        <FadeSection>
          <div className="section-header">
            <div className="badge"><span className="badge-dot" />Capabilities</div>
            <h2 className="section-h">Everything you need.<br />Nothing you don&rsquo;t.</h2>
            <p className="section-p">Blox.fun brings the full on-chain trading stack into Roblox. No compromises, no shortcuts.</p>
          </div>
        </FadeSection>
        <div className="feature-list">
          {features.map((f, i) => (
            <FadeSection key={i} delay={i * 0.04}>
              <div className="feature-row glass">
                <div className="feature-num">{f.num}</div>
                <div className="feature-body">
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
                <div className="feature-accent" />
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
            <div className="badge"><span className="badge-dot" />Platform</div>
            <h2 className="section-h">Gaming and crypto.<br />Finally on the same page.</h2>
            <p className="section-p">No seed phrases, no browser extensions, no complexity. Just Roblox and Solana, stitched together so seamlessly it fades into the background.</p>
          </div>
        </FadeSection>
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
              <div className="badge"><span className="badge-dot" />Coming to Solana</div>
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
