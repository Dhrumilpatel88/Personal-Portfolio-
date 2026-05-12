'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PROJECTS } from '@/lib/data'

type PType = 'dev' | 'cyber' | 'gold'

const TYPE: Record<PType, { border: string; tag: string }> = {
  dev:   { border: 'var(--color-red)',   tag: 'var(--color-red)'   },
  cyber: { border: 'var(--color-green)', tag: 'var(--color-green)' },
  gold:  { border: 'var(--color-gold)',  tag: 'var(--color-gold)'  },
}

function Card({ p, index }: { p: typeof PROJECTS[number]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hov, setHov]   = useState(false)

  const cfg = TYPE[p.type as PType]

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!
    const r  = el.getBoundingClientRect()
    setTilt({
      x: -((e.clientY - r.top  - r.height / 2) / r.height) * 10,
      y:  ((e.clientX - r.left - r.width  / 2) / r.width)  * 10,
    })
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-col min-h-[260px] sm:min-h-[280px] p-6 sm:p-9 relative overflow-hidden"
      style={{
        background:   hov ? 'var(--color-surface2)' : 'var(--color-surface)',
        borderTop:    `2px solid ${cfg.border}`,
        transformStyle: 'preserve-3d',
        transform: hov
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
          : 'perspective(800px) rotateX(0) rotateY(0) scale(1)',
        transition: hov
          ? 'transform .1s ease, background .25s'
          : 'transform .4s ease, background .25s',
        cursor: 'default',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.09 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setTilt({ x: 0, y: 0 }) }}
    >
      {/* Ghost number */}
      <div
        className="absolute top-4 right-4 font-display text-[3.5rem] sm:text-[4rem] leading-none pointer-events-none select-none transition-all duration-300"
        style={{ color: hov ? `${cfg.border}1a` : 'rgba(255,255,255,0.03)', transform: hov ? 'scale(1.1)' : 'scale(1)' }}
      >
        {p.num}
      </div>

      {/* Scan-line sweep on hover */}
      <div
        className="absolute left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${cfg.border}, transparent)`,
          top: hov ? '100%' : '-5%',
          opacity: 0.35,
          transition: 'top .45s ease',
        }}
      />

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-3 relative z-10">
        {p.tags.map(t => (
          <span key={t} className="font-mono text-[0.52rem] tracking-[0.18em] uppercase" style={{ color: cfg.tag }}>
            {t}
          </span>
        ))}
      </div>

      {/* Name */}
      <div
        className="font-display leading-[1.05] mb-3 relative z-10"
        style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)', color: 'var(--color-white)' }}
      >
        {p.name}
      </div>

      {/* Desc */}
      <p className="text-[0.82rem] sm:text-[0.85rem] leading-[1.7] flex-1 relative z-10" style={{ color: 'var(--color-white2)' }}>
        {p.desc}
      </p>

      {/* Stack pills */}
      <div className="flex gap-2 flex-wrap mt-5 relative z-10">
        {p.stack.map(s => (
          <span
            key={s}
            className="font-mono text-[0.5rem] tracking-[0.08em] uppercase px-2.5 py-1"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--color-white2)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-base" style={{ background: 'var(--color-bg)' }}>
      <SectionHeader
        label="Showreel"
        title={<>FEATURED <span style={{ color: 'var(--color-green)' }}>BUILDS</span></>}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[2px]">
        {PROJECTS.map((p, i) => <Card key={p.id} p={p} index={i} />)}
      </div>
    </section>
  )
}
