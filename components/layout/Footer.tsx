import { PROFILE } from '@/lib/data'

export function Footer() {
  return (
    <footer
      className="px-5 sm:px-[5vw] py-5 flex flex-col sm:flex-row justify-between items-center gap-2"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-center sm:text-left" style={{ color: 'var(--color-white3)' }}>
        © 2025–2026 {PROFILE.name}
      </p>
      <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-center" style={{ color: 'var(--color-white3)' }}>
        Developer × Cybersecurity Student
      </p>
      <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-center sm:text-right" style={{ color: 'var(--color-white3)' }}>
        {PROFILE.location}
      </p>
    </footer>
  )
}
