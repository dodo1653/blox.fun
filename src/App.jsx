import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { config } from './config'
import Hero from './components/Hero'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={ready ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Hero config={config} />
      <Community config={config} />
      <Footer config={config} />
    </motion.div>
  )
}

export default App
