'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { PROFILE, ROLES } from '@/lib/data'

/* ── Network canvas ─────────────────────────────────────── */
function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c   = ref.current!
    const ctx = c.getContext('2d')!
    let W = 0, H = 0, animId = 0
    interface N { x: number; y: number; vx: number; vy: number; r: number; col: string }
    let nodes: N[] = []

    const resize = () => {
      W = c.width  = c.offsetWidth
      H = c.height = c.offsetHeight
    }
    const init = () => {
      nodes = []
      // Fewer nodes on mobile for perf
      const count = Math.max(6, Math.floor(W / (W < 640 ? 120 : 80)))
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.8,
          col: Math.random() > 0.6 ? 'rgba(0,255,156,0.5)' : Math.random() > 0.5 ? 'rgba(255,59,48,0.35)' : 'rgba(212,175,55,0.25)',
        })
      }
    }

    resize(); init()
    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t++
      const connDist = W < 640 ? 100 : 150
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < connDist) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,255,156,${0.07 * (1 - d / connDist)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.col; ctx.fill()
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })
      // Scan line
      const sy = (t * 0.4) % H
      const g  = ctx.createLinearGradient(0, sy - 2, 0, sy + 2)
      g.addColorStop(0, 'transparent'); g.addColorStop(0.5, 'rgba(0,255,156,0.05)'); g.addColorStop(1, 'transparent')
      ctx.fillStyle = g; ctx.fillRect(0, sy - 2, W, 4)
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize, { passive: true })
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}

/* ── Typewriter ─────────────────────────────────────────── */
function useTypewriter(phrases: readonly string[], startDelay = 2200) {
  const [text, setText]       = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(t)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    let pi = 0, ci = 0, del = false
    let to: ReturnType<typeof setTimeout>
    const tick = () => {
      const w = phrases[pi]
      if (!del) {
        setText(w.slice(0, ++ci))
        if (ci === w.length) { del = true; to = setTimeout(tick, 1800); return }
      } else {
        setText(w.slice(0, --ci))
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; to = setTimeout(tick, 400); return }
      }
      to = setTimeout(tick, del ? 55 : 90)
    }
    tick()
    return () => clearTimeout(to)
  }, [started, phrases])

  return text
}

/* ── HeroSection ────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d } }),
}

export function HeroSection() {
  const typeText = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-5 sm:px-[5vw] pb-14 sm:pb-[10vh] relative overflow-hidden pt-24"
    >
      <HeroCanvas />

      {/* Spotlights — hidden on mobile for perf */}
      <div aria-hidden="true" className="hidden sm:block absolute pointer-events-none top-[-5%] w-[30%] h-[120%] animate-spotlight" style={{ left: '15%', background: 'conic-gradient(from 260deg at 50% 0%, transparent 60deg, rgba(255,59,48,0.06) 85deg, rgba(212,175,55,0.03) 110deg, transparent 130deg)' }} />
      <div aria-hidden="true" className="hidden sm:block absolute pointer-events-none top-[-5%] w-[30%] h-[120%]" style={{ left: '50%', opacity: 0.6, background: 'conic-gradient(from 260deg at 50% 0%, transparent 60deg, rgba(255,59,48,0.05) 85deg, transparent 130deg)', animation: 'spotlightSwing 12s ease-in-out infinite alternate-reverse' }} />

      {/* Fog layers — hidden on mobile */}
      {[
        { bottom: '20%', duration: '18s', delay: '0s',   h: '70px', op: 1 },
        { bottom: '35%', duration: '26s', delay: '-8s',  h: '40px', op: 0.5 },
      ].map((fl, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="hidden sm:block absolute left-[-10%] w-[120%] pointer-events-none animate-fog"
          style={{ bottom: fl.bottom, height: fl.h, opacity: fl.op, animationDuration: fl.duration, animationDelay: fl.delay, background: 'linear-gradient(90deg, transparent, rgba(0,255,156,0.012) 30%, rgba(255,59,48,0.008) 60%, transparent)' }}
        />
      ))}

      {/* HUD — only on large screens */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-1/2 right-[5vw] -translate-y-1/2 font-mono text-[0.52rem] leading-[2.2] z-[5]"
        style={{ color: 'rgba(0,255,156,0.35)' }}
      >
        {[
          ['SYS_INIT',     'OK'],
          ['STACK',        'ANGULAR·NODE·MYSQL'],
          ['CGPA',         `${PROFILE.cgpa} / 10`],
          ['INTERNSHIPS',  String(PROFILE.internships).padStart(2, '0')],
          ['SECURITY',     'LEARNING'],
          ['STATUS',       'READY'],
        ].map(([k, v]) => (
          <span key={k} className="block whitespace-nowrap">
            {k} <span style={{ color: 'var(--color-green)' }}>{v}</span>
          </span>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10">
        <motion.div
          className="font-mono text-[0.65rem] sm:text-[0.7rem] tracking-[0.25em] uppercase mb-4 sm:mb-6 flex items-center gap-3"
          style={{ color: 'var(--color-green)' }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
        >
          <span style={{ color: 'var(--color-red)' }}>&gt;</span>
          <span className="leading-tight">{PROFILE.tagline}</span>
        </motion.div>

        <motion.h1
          className="font-display leading-[0.88] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(3.8rem, 13vw, 12rem)', color: 'var(--color-white)' }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
        >
          <span className="glitch-text" data-text="DHRUMIL">DHRUMIL</span>
          <br />
          <span
            className="glitch-text" data-text="PATEL"
            style={{ WebkitTextStroke: '1px var(--color-red)', color: 'transparent' }}
          >PATEL</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          className="font-mono mt-4 sm:mt-6"
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)',
            color: 'var(--color-gold)',
            minHeight: '2em',
          }}
          variants={fadeUp} initial="hidden" animate="visible" custom={1.0}
        >
          {typeText}
          <span
            className="inline-block w-[2px] h-[1em] align-middle animate-blink ml-[1px]"
            style={{ background: 'var(--color-gold)', verticalAlign: 'middle' }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-4 sm:mt-5 text-[0.9rem] sm:text-base leading-[1.8] max-w-[560px]"
          style={{ color: 'var(--color-white2)' }}
          variants={fadeUp} initial="hidden" animate="visible" custom={1.2}
        >
          {PROFILE.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10"
          variants={fadeUp} initial="hidden" animate="visible" custom={1.4}
        >
          <a
            href="#projects"
            className="clip-angled font-mono text-[0.7rem] tracking-[0.12em] uppercase px-7 sm:px-10 py-3.5 sm:py-4 text-white inline-block transition-transform duration-200 active:scale-95 hover:scale-[1.03]"
            style={{ background: 'var(--color-red)' }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="clip-angled font-mono text-[0.7rem] tracking-[0.12em] uppercase px-7 sm:px-10 py-3.5 sm:py-4 inline-block border transition-transform duration-200 active:scale-95 hover:scale-[1.03]"
            style={{ borderColor: 'var(--color-green)', color: 'var(--color-green)', background: 'transparent' }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
