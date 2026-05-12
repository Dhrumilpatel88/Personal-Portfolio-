'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const STATS = [
  { num: '4', suffix: '+', label: 'Internships' },
  { num: '8', suffix: '.6', label: 'CGPA' },
  { num: '2', suffix: 'yr', label: 'Experience' },
  { num: '∞', suffix: '',  label: 'Curiosity' },
]

const CARDS = [
  {
    tag:   'Primary Role',
    title: 'Developer',
    desc:  'Full-stack engineering across Angular, Node.js, MySQL. Built real client modules. Applied clean architecture and Git workflows.',
  },
  {
    tag:   'Evolving Into',
    title: 'Security-Focused Builder',
    desc:  'Applying secure coding practices in active internships. Studying authentication, input validation, and web security fundamentals.',
  },
  {
    tag:   'Always',
    title: 'Technical Explorer',
    desc:  'Driven by curiosity. Every project is a lab. Every bug is a lesson. Building with awareness of what can go wrong.',
  },
]

export function AboutSection() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="section-base" style={{ background: 'var(--color-surface)' }}>
      <SectionHeader
        label="Identity"
        title={<>THE <span style={{ color: 'var(--color-green)' }}>HYBRID</span><br />ENGINEER</>}
      />

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

        {/* Text + Stats */}
        <div>
          {[
            <>I&apos;m <strong className="text-white font-semibold">software developer and aspiring cybersecurity professional</strong> from Gandhinagar, Gujarat — fresh off a <span style={{ color: 'var(--color-gold)' }}>B.E. in Information Technology</span> with a CGPA of <span style={{ color: 'var(--color-green)' }}>8.6</span>.</>,
            <>Four internships across different stacks shaped me into a developer who thinks about <strong className="text-white font-semibold">architecture, performance, and security</strong> from day one — never as an afterthought.</>,
            <>I build things that work. I study systems to understand how they break. Both perspectives come with me to every commit.</>,
            <>Currently exploring the intersection of <span style={{ color: 'var(--color-red)' }}>secure systems design</span>, web application security, and full-stack engineering.</>,
          ].map((t, i) => (
            <motion.p
              key={i}
              className="text-[0.9rem] sm:text-base leading-[1.85] mb-5"
              style={{ color: 'var(--color-white2)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {t}
            </motion.p>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-2 gap-[2px] mt-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="p-6 sm:p-8 relative overflow-hidden group transition-colors duration-300"
                style={{ background: 'var(--color-surface2)' }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                whileHover={{ backgroundColor: 'var(--color-surface3)' } as never}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: 'var(--color-red)' }}
                />
                <span className="font-display text-[2.8rem] sm:text-[3.5rem] leading-none block" style={{ color: 'var(--color-white)' }}>
                  {s.num}<span style={{ color: 'var(--color-red)' }}>{s.suffix}</span>
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase mt-1 block" style={{ color: 'var(--color-white2)' }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Identity cards */}
        <div className="flex flex-col gap-[2px]">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.tag}
              className="p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 border-l-2"
              style={{ background: 'var(--color-surface2)', borderLeftColor: 'transparent' }}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              onMouseEnter={e => (e.currentTarget.style.borderLeftColor = 'var(--color-green)')}
              onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(0,255,156,0.04), transparent)' }} />
              <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase mb-2 block relative z-10" style={{ color: 'var(--color-green)' }}>{card.tag}</span>
              <div className="font-display text-[1.6rem] sm:text-[1.8rem] tracking-[0.03em] mb-2 relative z-10" style={{ color: 'var(--color-white)' }}>{card.title}</div>
              <p className="text-[0.85rem] leading-relaxed relative z-10" style={{ color: 'var(--color-white2)' }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
