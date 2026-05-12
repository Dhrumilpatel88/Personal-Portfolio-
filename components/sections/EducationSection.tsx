'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EDUCATION } from '@/lib/data'

function EduCard({ item, index }: { item: typeof EDUCATION[number]; index: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="relative p-8 sm:p-12 overflow-hidden group transition-colors duration-300 border-l-2"
      style={{ background: 'var(--color-surface2)', borderLeftColor: 'var(--color-gold)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ backgroundColor: 'var(--color-surface3)' } as never}
    >
      {/* subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 55%)' }}
      />

      <div
        className="font-display leading-none mb-2 relative z-10"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--color-white)' }}
      >
        {item.degree}
      </div>

      <div className="font-mono text-[0.68rem] tracking-[0.1em] uppercase mb-4 relative z-10" style={{ color: 'var(--color-gold)' }}>
        {item.school}
      </div>

      <div
        className="inline-block font-mono text-[0.58rem] tracking-[0.12em] uppercase px-4 py-1.5 relative z-10"
        style={{
          background: 'rgba(212,175,55,0.09)',
          border:     '1px solid rgba(212,175,55,0.22)',
          color:      'var(--color-gold)',
        }}
      >
        {item.badge}
      </div>

      {/* Ghost year */}
      <div
        className="absolute bottom-3 right-5 font-display leading-none pointer-events-none select-none"
        style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', color: 'rgba(212,175,55,0.06)' }}
      >
        {item.year}
      </div>
    </motion.div>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="section-base" style={{ background: 'var(--color-surface)' }}>
      <SectionHeader
        label="Academic Foundation"
        title={<>THE <span style={{ color: 'var(--color-green)' }}>TRAINING</span><br />GROUND</>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
        {EDUCATION.map((item, i) => <EduCard key={item.degree} item={item} index={i} />)}
      </div>
    </section>
  )
}
