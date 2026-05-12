'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DEV_SKILLS, CYBER_SKILLS } from '@/lib/data'

interface Skill { name: string; pct: number }

function SkillRow({ name, pct, color, index, animate }: {
  name: string; pct: number; color: string; index: number; animate: boolean
}) {
  return (
    <motion.div
      className="flex items-center gap-3 py-3 border-b group"
      style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}
      initial={{ opacity: 0, x: -10 }}
      animate={animate ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.055 }}
    >
      <span
        className="font-mono text-[0.75rem] sm:text-[0.8rem] tracking-[0.04em] flex-1 transition-colors duration-200 group-hover:text-white leading-tight"
        style={{ color: 'var(--color-white2)' }}
      >
        {name}
      </span>
      <div className="w-[80px] sm:w-[110px] h-[2px] shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <motion.div
          className="h-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={animate ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.7, delay: 0.15 + index * 0.055, ease: 'easeOut' }}
        />
      </div>
      <span className="font-mono text-[0.5rem] w-7 text-right shrink-0" style={{ color: 'var(--color-white3)' }}>
        {pct}%
      </span>
    </motion.div>
  )
}

function Zone({ icon, name, skills, color }: {
  icon: string; name: string; skills: readonly Skill[]; color: string
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="p-6 sm:p-10" style={{ background: 'var(--color-surface)' }}>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg border shrink-0" style={{ color, borderColor: `${color}4d` }}>
          {icon}
        </div>
        <div className="font-display text-[1.4rem] sm:text-[1.6rem] tracking-[0.04em]" style={{ color }}>
          {name}
        </div>
      </div>
      {skills.map((s, i) => (
        <SkillRow key={s.name} name={s.name} pct={s.pct} color={color} index={i} animate={inView} />
      ))}
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-base" style={{ background: 'var(--color-bg)' }}>
      <SectionHeader
        label="Capabilities"
        title={<>DUAL <span style={{ color: 'var(--color-green)' }}>ZONE</span><br />SKILL STACK</>}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
        <Zone icon="⚡" name="Development Stack"  skills={DEV_SKILLS}   color="var(--color-red)"   />
        <Zone icon="🔐" name="Security & Systems" skills={CYBER_SKILLS} color="var(--color-green)" />
      </div>
    </section>
  )
}
