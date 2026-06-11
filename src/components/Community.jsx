import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Community({ config }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="community" ref={ref} id="community">
      <div className="community-bg" />

      <motion.div
        className="community-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="section-tag">— where the players are</p>
        <h2 className="community-h">
          come hang.<br/>
          we don't bite.
        </h2>
        <p className="community-sub">
          all the updates, all the alpha, all the memes. follow the channels, don't miss the next launch.
        </p>

        <div className="community-grid">
          <motion.a
            href={config.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="comm-card comm-card--discord"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="comm-card-bg comm-card-bg--discord" />
            <div className="comm-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.1776-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
              </svg>
            </div>
            <div className="comm-text">
              <div className="comm-label">discord</div>
              <div className="comm-title">join the server</div>
              <div className="comm-meta">live chat · alpha · community</div>
            </div>
            <div className="comm-cta">
              open
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13L13 3M13 3H6M13 3V10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>

          <motion.a
            href={config.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="comm-card comm-card--twitter"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="comm-card-bg comm-card-bg--twitter" />
            <div className="comm-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div className="comm-text">
              <div className="comm-label">twitter / x</div>
              <div className="comm-title">@{config.twitterHandle}</div>
              <div className="comm-meta">announcements · memes · raids</div>
            </div>
            <div className="comm-cta">
              follow
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13L13 3M13 3H6M13 3V10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>

          <motion.a
            href={config.gameLink}
            target="_blank"
            rel="noopener noreferrer"
            className="comm-card comm-card--roblox"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="comm-card-bg comm-card-bg--roblox" />
            <div className="comm-icon">
              <svg width="30" height="30" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="24" height="24" rx="6" fill="#E2231A"/>
                <path d="M8.5 7.5h5.5c2.3 0 4.2 1.7 4.2 4 0 1.5-.8 2.8-2 3.5l3.2 5.5h-3.8l-2.7-4.5H11v4.5H8.5V7.5zm2.5 2.5v3h2.5c1 0 1.7-.7 1.7-1.5 0-.8-.7-1.5-1.7-1.5H11z" fill="white"/>
              </svg>
            </div>
            <div className="comm-text">
              <div className="comm-label">roblox</div>
              <div className="comm-title">play the game</div>
              <div className="comm-meta">live now · free to play</div>
            </div>
            <div className="comm-cta">
              play
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13L13 3M13 3H6M13 3V10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Community
