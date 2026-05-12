export function LedStrip() {
  return (
    <div
      aria-hidden="true"
      className="h-[2px] w-full animate-led"
      style={{
        background: 'linear-gradient(90deg, transparent, var(--color-red), var(--color-gold), var(--color-green), var(--color-red), transparent)',
        backgroundSize: '300% 100%',
      }}
    />
  )
}
