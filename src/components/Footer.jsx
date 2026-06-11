import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Footer({ config }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer className="footer" ref={ref}>
      <motion.div
        className="footer-mega"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        blox.fun
      </motion.div>

      <motion.div
        className="footer-grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="footer-col">
          <div className="footer-h">play</div>
          <a href={config.gameLink} target="_blank" rel="noopener noreferrer">roblox</a>
        </div>
        <div className="footer-col">
          <div className="footer-h">community</div>
          <a href={config.discordLink} target="_blank" rel="noopener noreferrer">discord</a>
          <a href={config.twitterLink} target="_blank" rel="noopener noreferrer">twitter / x</a>
        </div>
        <div className="footer-col">
          <div className="footer-h">project</div>

        </div>
      </motion.div>

      <div className="footer-base">
        <div>© {new Date().getFullYear()} blox.fun · a roblox experience</div>
        <div>built onchain. played on roblox.</div>
      </div>
    </footer>
  )
}

export default Footer
