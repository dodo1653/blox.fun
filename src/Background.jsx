import { useEffect, useRef } from 'react'

function lerp(a, b, t) { return a + (b - a) * t }

class DustMote {
  constructor(w, h) {
    this.reset(w, h, true)
  }
  reset(w, h, init) {
    this.x = Math.random() * w
    this.y = init ? Math.random() * h : h + 10
    this.size = Math.random() * 2 + 0.5
    this.opacity = Math.random() * 0.04 + 0.01
    this.speedY = -(Math.random() * 0.15 + 0.03)
    this.drift = (Math.random() - 0.5) * 0.08
    this.driftPhase = Math.random() * Math.PI * 2
  }
  update(w, h, time) {
    this.y += this.speedY
    this.x += this.drift + Math.sin(time * 0.0003 + this.driftPhase) * 0.04
    if (this.y < -10 || this.x < -10 || this.x > w + 10) this.reset(w, h, false)
  }
  draw(ctx) {
    const alpha = this.opacity * (1 - Math.abs(this.y - ctx.canvas.height / 2) / (ctx.canvas.height / 2))
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${Math.max(0, alpha)})`
    ctx.fill()
  }
}

class GradientOrb {
  constructor(w, h) {
    this.radius = Math.random() * 200 + 150
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.dx = (Math.random() - 0.5) * 0.08
    this.dy = (Math.random() - 0.5) * 0.08
    this.color = ['rgba(108,99,255', 'rgba(76,165,255', 'rgba(60,60,80'][Math.floor(Math.random() * 3)]
  }
  update(w, h) {
    this.x += this.dx
    this.y += this.dy
    if (this.x < -this.radius || this.x > w + this.radius) this.dx *= -1
    if (this.y < -this.radius || this.y > h + this.radius) this.dy *= -1
  }
  draw(ctx) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
    gradient.addColorStop(0, `${this.color},0.04)`)
    gradient.addColorStop(0.5, `${this.color},0.025)`)
    gradient.addColorStop(1, `${this.color},0)`)
    ctx.fillStyle = gradient
    ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
  }
}

class LightRay {
  constructor(w, h) {
    this.reset(w, h)
  }
  reset(w, h) {
    this.x = Math.random() * w
    this.width = Math.random() * 60 + 20
    this.height = Math.random() * h * 0.4 + h * 0.1
    this.opacity = Math.random() * 0.015 + 0.005
    this.speed = Math.random() * 0.02 + 0.01
    this.angle = (Math.random() - 0.5) * 0.3
  }
  update() {
    this.x += Math.sin(Date.now() * this.speed * 0.001) * 0.15
    this.opacity = 0.01 + Math.sin(Date.now() * this.speed * 0.001) * 0.005
  }
  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, 0)
    ctx.rotate(this.angle)
    const gradient = ctx.createLinearGradient(0, 0, 0, this.height)
    gradient.addColorStop(0, `rgba(180,180,200,${this.opacity})`)
    gradient.addColorStop(0.5, `rgba(180,180,200,${this.opacity * 0.3})`)
    gradient.addColorStop(1, `rgba(180,180,200,0)`)
    ctx.fillStyle = gradient
    ctx.fillRect(-this.width / 2, 0, this.width, this.height)
    ctx.restore()
  }
}

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let motes = []
    let orbs = []
    let rays = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      motes = Array.from({ length: 60 }, () => new DustMote(canvas.width, canvas.height))
      orbs = Array.from({ length: 3 }, () => new GradientOrb(canvas.width, canvas.height))
      rays = Array.from({ length: 4 }, () => new LightRay(canvas.width, canvas.height))
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const o of orbs) { o.update(canvas.width, canvas.height); o.draw(ctx) }
      for (const r of rays) { r.update(); r.draw(ctx) }
      for (const m of motes) { m.update(canvas.width, canvas.height, time); m.draw(ctx) }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw(0)
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="bg-canvas" />
      <div className="bg-noise" />
      <div className="bg-vignette" />
      <div className="bg-glow" />
    </>
  )
}
