import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const features = [
  {
    icon: '🎮',
    title: 'Trade on Roblox',
    desc: 'Buy and sell tokens directly inside Roblox. Real Robux, real trades, real-time charts.',
  },
  {
    icon: '⛓️',
    title: 'On-Chain Backed',
    desc: 'Every trade is secured by Solana. Your assets are real tokens, not just game items.',
  },
  {
    icon: '⚡',
    title: 'Instant Swaps',
    desc: 'No waiting. No gas wars. Swap tokens with Robux in milliseconds.',
  },
  {
    icon: '📈',
    title: 'Live Markets',
    desc: 'Real-time order books, candlestick charts, and top gainers — just like the real thing.',
  },
  {
    icon: '🔗',
    title: 'Solana Bridge',
    desc: 'Soon: bridge your tokens out of Roblox to your Solana wallet. True ownership.',
  },
  {
    icon: '🛡️',
    title: 'Fair Launch',
    desc: 'No presale. No team allocation. Every token launches fairly on the bonding curve.',
  },
]

const steps = [
  { num: '01', title: 'Join the Game', desc: 'Open Blox.fun on Roblox. Connect your Roblox account to get started.' },
  { num: '02', title: 'Fund Your Wallet', desc: 'Deposit Robux into your in-game wallet. Ready to trade in seconds.' },
  { num: '03', title: 'Trade Tokens', desc: 'Buy and sell tokens launched by the community. Real bonding curves, real charts.' },
  { num: '04', title: 'Withdraw Anytime', desc: 'Cash out your Robux or bridge tokens to Solana. Full control of your assets.' },
]

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

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
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="header-cta">Play on Roblox</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="grid-bg" />
      <div className="grain" />
      <div className="hero-glow" />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Now live on Roblox
          </div>
        </motion.div>

        <motion.h1
          className="hero-h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The first <span className="gradient-text">on-chain</span><br />
          market on Roblox.
        </motion.h1>

        <motion.p
          className="hero-p"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trade memecoins with real Robux. Pump.fun mechanics, Solana rails,<br />
          all inside Roblox. The easiest way to onboard everyone.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Play Blox.fun →
          </a>
          <a href="#features" className="btn-secondary">
            Learn more
          </a>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-tabs">
                <span className="hero-card-tab active">Trade</span>
                <span className="hero-card-tab">Tokens</span>
                <span className="hero-card-tab">Portfolio</span>
              </div>
              <div className="hero-card-balance">
                <div className="hero-card-balance-label">Balance</div>
                <div className="hero-card-balance-value">1,420 R$</div>
              </div>
            </div>
            {[
              { name: 'BONK', ticker: '$BONK', price: '0.0000234', change: '+12.4%' },
              { name: 'WIF', ticker: '$WIF', price: '0.001245', change: '+8.2%' },
              { name: 'POPCAT', ticker: '$POPCAT', price: '0.000567', change: '+24.1%' },
            ].map((coin, i) => (
              <div className="hero-card-row" key={i}>
                <div className="hero-card-coin">
                  <div className="hero-card-coin-icon">{coin.name[0]}</div>
                  <div className="hero-card-coin-info">
                    <div className="hero-card-coin-name">{coin.name}</div>
                    <div className="hero-card-coin-ticker">{coin.ticker}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="hero-card-coin-price">{coin.price}</div>
                  <div className="hero-card-coin-change">{coin.change}</div>
                </div>
              </div>
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
        <FadeInSection>
          <div className="section-label">Features</div>
          <h2 className="section-h">Trade like it's<br />pump.fun, but on Roblox.</h2>
          <p className="section-p">Everything you love about on-chain memecoin trading — now inside Roblox with real Robux.</p>
        </FadeInSection>
        <div className="feature-grid">
          {features.map((f, i) => (
            <FadeInSection key={i} delay={i * 0.05}>
              <div className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </FadeInSection>
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
        <FadeInSection>
          <div className="section-label">How it Works</div>
          <h2 className="section-h">Get started in<br />4 simple steps.</h2>
          <p className="section-p">No crypto wallet needed. No seed phrases. Just Roblox.</p>
        </FadeInSection>
        <div className="steps">
          {steps.map((s, i) => (
            <FadeInSection key={i} delay={i * 0.08}>
              <div className="step-card">
                <div className="step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </FadeInSection>
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
        <FadeInSection>
          <div className="section-label">Token</div>
          <div className="token-card">
            <h2>Coming to Solana 🚀</h2>
            <p>
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
              Play now, trade later →
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-credit">
          © {new Date().getFullYear()} Blox.fun
        </div>
        <div className="footer-links">
          <a href="https://x.com/bloxfun" target="_blank" rel="noopener noreferrer">𝕏</a>
          <a href="https://www.roblox.com/games/121901103139963/Bloxfun" target="_blank" rel="noopener noreferrer">Roblox</a>
          <a href="#" onClick={(e) => { e.preventDefault(); }}>Terms</a>
        </div>
      </div>
    </footer>
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