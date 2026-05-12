'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EXPERIENCE, type DotColor } from '@/lib/data'

const DOT_COLOR: Record<DotColor, string> = {
  red:   'var(--color-red)',
  gold:  'var(--color-gold)',
  green: 'var(--color-green)',
  white: 'var(--color-white2)',
}
const DOT_SHADOW: Record<DotColor, string> = {
  red:   '0 0 10px rgba(255,59,48,0.6)',
  gold:  '0 0 10px rgba(212,175,55,0.6)',
  green: '0 0 10px rgba(0,255,156,0.6)',
  white: '0 0 6px rgba(255,255,255,0.3)',
}

function Item({ item, index }: { item: typeof EXPERIENCE[number]; index: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const col    = DOT_COLOR[item.dotColor]

  return (
    <motion.div
      ref={ref}
      className="relative mb-12 sm:mb-16"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
    >
      {/* Dot */}
      <div
        className="absolute top-[0.25rem] rounded-full"
        style={{ left: '-2.4rem', width: 10, height: 10, background: col, boxShadow: DOT_SHADOW[item.dotColor] }}
      />

      <div className="font-mono text-[0.58rem] tracking-[0.2em] uppercase mb-2" style={{ color: col }}>
        {item.period}
      </div>
      <div className="font-display leading-none mb-1" style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: 'var(--color-white)' }}>
        {item.org}
      </div>
      <div className="font-mono text-[0.65rem] tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
        {item.role}{item.location ? ` · ${item.location}` : ''}
      </div>
      <ul className="space-y-1 max-w-[680px]">
        {item.points.map((pt, i) => (
          <li key={i} className="text-[0.85rem] sm:text-[0.9rem] leading-[1.75] pl-5 relative" style={{ color: 'var(--color-white2)' }}>
            <span className="absolute left-0 top-[0.52rem] text-[0.4rem]" style={{ color: 'var(--color-green)' }}>▶</span>
            {pt}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-base" style={{ background: 'var(--color-surface)' }}>
      <SectionHeader
        label="Engineering Evolution"
        title={<>THE <span style={{ color: 'var(--color-red)' }}>TECHNICAL</span><br />JOURNEY</>}
      />
      <div className="relative pl-8 sm:pl-10">
        {/* Gradient vertical line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[1px]"
          style={{ background: 'linear-gradient(to bottom, var(--color-red) 0%, var(--color-gold) 40%, var(--color-green) 70%, transparent 100%)' }}
        />
        {EXPERIENCE.map((item, i) => (
          <Item key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
