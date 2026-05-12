'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROFILE } from '@/lib/data'

const LINKS = [
  { href: `mailto:${PROFILE.email}`, prefix: '✉', label: PROFILE.email },
  { href: `tel:${PROFILE.phone}`,    prefix: '☎', label: PROFILE.phone },
  { href: '#',                        prefix: '📍', label: PROFILE.location },
]

export function ContactSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      className="section-base min-h-[75vh] flex flex-col items-center justify-center text-center relative"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,156,0.022) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative z-10 w-full max-w-4xl mx-auto px-2">
        {/* Label */}
        <motion.div
          className="font-mono text-[0.6rem] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          style={{ color: 'var(--color-green)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span style={{ color: 'var(--color-red)' }}>{'//'}</span>
          Open Channel
        </motion.div>

        {/* Big headline */}
        <motion.div
          className="font-display leading-[0.88] mb-4"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div style={{ color: 'var(--color-white)' }}>
            LET&apos;S <span style={{ color: 'var(--color-green)' }}>BUILD</span>
          </div>
          <div
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.18)',
              color: 'transparent',
            }}
          >
            SOMETHING.
          </div>
        </motion.div>

        {/* Sub */}
        <motion.div
          className="font-mono text-[0.65rem] sm:text-[0.75rem] tracking-[0.2em] uppercase mb-10 sm:mb-12"
          style={{ color: 'var(--color-green)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Developer × Security Student — Available Now
        </motion.div>

        {/* Contact links — stack on mobile, row on desktop */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.42 }}
        >
          {LINKS.map(({ href, prefix, label }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-[0.68rem] sm:text-[0.75rem] tracking-[0.14em] uppercase no-underline pb-1 flex items-center gap-2 transition-all duration-200 active:scale-95"
              style={{
                color: 'var(--color-white2)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = 'var(--color-green)'
                el.style.borderBottomColor = 'var(--color-green)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = 'var(--color-white2)'
                el.style.borderBottomColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <span style={{ color: 'var(--color-red)', fontSize: '0.58rem' }}>{prefix}</span>
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
