'use client'

import { useEffect, useState } from 'react'

const LINES = [
  { id: 0, pre: '> initializing portfolio.exe...',  hi: '',                      hiColor: '' },
  { id: 1, pre: '> loading identity: ',              hi: 'DHRUMIL PATEL',         hiColor: 'var(--color-white)' },
  { id: 2, pre: '> stack: full-stack × security',    hi: '',                      hiColor: '' },
  { id: 3, pre: '> location: ',                      hi: 'Gandhinagar, GJ, India',hiColor: 'var(--color-gold)' },
  { id: 4, pre: '> status: ',                        hi: 'ONLINE — ready',        hiColor: 'var(--color-green)' },
]

export function BootSequence() {
  const [visible, setVisible]   = useState<number[]>([])
  const [progress, setProgress] = useState(0)
  const [done, setDone]         = useState(false)
  const [mounted, setMounted]   = useState(false)

  useEffect(() => {
    setMounted(true)
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisible(prev => [...prev, line.id])
        setProgress(Math.round(((i + 1) / LINES.length) * 100))
        if (i === LINES.length - 1) setTimeout(() => setDone(true), 600)
      }, 380 * (i + 1))
    })
  }, [])

  if (!mounted || done) return null

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col justify-center items-start px-6 sm:px-[5vw]"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="font-mono text-[0.75rem] sm:text-sm leading-loose"
        style={{ color: 'var(--color-green)' }}
      >
        {LINES.map(line => (
          <div
            key={line.id}
            className="transition-opacity duration-150"
            style={{ opacity: visible.includes(line.id) ? 1 : 0 }}
          >
            {line.pre}
            {line.hi && (
              <span style={{ color: line.hiColor }}>{line.hi}</span>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="mt-8 h-[2px] w-[260px] max-w-[80vw]"
        style={{ background: 'var(--color-surface3)' }}
      >
        <div
          className="h-full transition-all duration-100"
          style={{ width: `${progress}%`, background: 'var(--color-green)' }}
        />
      </div>
    </div>
  )
}
