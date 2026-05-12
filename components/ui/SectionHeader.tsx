interface Props {
  label: string
  title: React.ReactNode
}

export function SectionHeader({ label, title }: Props) {
  return (
    <div className="mb-12 sm:mb-16">
      <div
        className="font-mono text-[0.6rem] tracking-[0.3em] uppercase mb-3 flex items-center gap-3"
        style={{ color: 'var(--color-green)' }}
      >
        <span style={{ color: 'var(--color-red)' }}>//</span>
        {label}
      </div>
      <h2
        className="font-display tracking-[0.02em] leading-none"
        style={{
          fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
          color: 'var(--color-white)',
        }}
      >
        {title}
      </h2>
    </div>
  )
}
