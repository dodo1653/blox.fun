import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const colors = ['#6C63FF', '#4CA5FF', '#FF6B6B', '#4CAF50', '#FFB74D', '#FF80AB']

const features = [
  { title: 'Trade on Roblox', desc: 'Buy and sell tokens directly inside Roblox. Real Robux, real trades, real-time charts.' },
  { title: 'On-Chain Backed', desc: 'Every trade is secured by Solana. Your assets are real tokens, not just game items.' },
  { title: 'Instant Swaps', desc: 'No waiting. No gas wars. Swap tokens with Robux in milliseconds.' },
  { title: 'Live Markets', desc: 'Real-time order books, candlestick charts, and top gainers — like the real thing.' },
  { title: 'Solana Bridge', desc: 'Bridge your tokens out of Roblox to your Solana wallet. True ownership.' },
  { title: 'Fair Launch', desc: 'No presale. No team allocation. Every token launches fairly on a bonding curve.' },
]

const steps = [
  { num: '01', title: 'Join the Game', desc: 'Open Blox.fun on Roblox. Connect your Roblox account in one click.' },
  { num: '02', title: 'Fund Your Wallet', desc: 'Deposit Robux into your in-game wallet. Ready to trade in seconds.' },
  { num: '03', title: 'Trade Tokens', desc: 'Buy and sell tokens launched by the community. Real bonding curves.' },
  { num: '04', title: 'Withdraw Anytime', desc: 'Cash out Robux or bridge tokens to Solana. Full control.' },
]

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

const coins = [
  { name: 'BONK', ticker: 'BONK', price: '0.0000234', change: '+12.4%', up: true, color: '#FF6B6B' },
  { name: 'WIF', ticker: 'WIF', price: '0.001245', change: '+8.2%', up: true, color: '#FFB74D' },
  { name: 'POPCAT', ticker: 'POPCAT', price: '0.000567', change: '+24.1%', up: true, color: '#4CAF50' },
  { name: 'SAMO', ticker: 'SAMO', price: '0.000891', change: '-3.2%', up: false, color: '#4CA5FF' },
]

function Header() {
  return (
    <header className="header">
      <div className="header-wrap">
        <a href="#" className="header-logo">
          <div className="header-logo-mark">B</div>
          blox.fun
        </a>
        <nav className="header-nav">
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <a href="#token">Token</a>
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="header-cta">Play</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="grid-bg" />
      <div className="accent-stripe" />
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-label">Now live on Roblox</div>
          <h1 className="hero-h1">
            The first on-chain<br />
            market on Roblox.
          </h1>
          <p className="hero-p">
            Trade memecoins with real Robux. Pump.fun mechanics, Solana rails,
            all inside Roblox. The easiest way to onboard everyone.
          </p>
          <div className="hero-actions">
            <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Play Blox.fun
            </a>
            <a href="#features" className="btn-secondary">
              Learn more
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="hero-card">
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
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
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
            <div className="section-label">Features</div>
            <h2 className="section-h">Trade like pump.fun,<br />built for Roblox.</h2>
            <p className="section-p">Everything you love about on-chain memecoin trading — now inside Roblox with real Robux.</p>
          </div>
        </FadeSection>
        <div className="feature-grid">
          {features.map((f, i) => (
            <FadeSection key={i} delay={i * 0.04}>
              <div className="feature-card">
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

function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="section-wrap">
        <FadeSection>
          <div className="section-header">
            <div className="section-label">How it Works</div>
            <h2 className="section-h">Start in seconds.<br />No wallet needed.</h2>
            <p className="section-p">No seed phrases, no gas fees, no complexity. Just Roblox.</p>
          </div>
        </FadeSection>
        <div className="steps">
          {steps.map((s, i) => (
            <FadeSection key={i} delay={i * 0.06}>
              <div className="step-card">
                <div className="step-num">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
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
          <div className="token-card">
            <div className="token-h">Coming to Solana</div>
            <p className="token-p">
              Blox.fun will launch its own token on Solana. The bridge between Roblox and the open market.
              Onboard millions of Roblox players into crypto — starting with a single trade.
            </p>
            <div className="token-stats">
              <div>
                <div className="token-stat-value">TBA</div>
                <div className="token-stat-label">Ticker</div>
              </div>
              <div>
                <div className="token-stat-value">1B</div>
                <div className="token-stat-label">Supply</div>
              </div>
              <div>
                <div className="token-stat-value">0/0</div>
                <div className="token-stat-label">Tax</div>
              </div>
            </div>
            <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Play Blox.fun
            </a>
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-credit">Blox.fun</div>
        <div className="footer-links">
          <a href="https://x.com/bloxfun" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer">Roblox</a>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <TokenSection />
      <Footer />
    </>
  )
}

export default App