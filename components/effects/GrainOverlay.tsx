export function GrainOverlay() {
  return (
    <>
      {/* Film grain — hidden on reduced-motion */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9990] opacity-40 animate-grain motion-reduce:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Scanlines */}
      <div aria-hidden="true" className="scanlines motion-reduce:hidden" />
    </>
  )
}
