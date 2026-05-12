'use client'

import { useEffect, useState } from 'react'
import { PROFILE } from '@/lib/data'

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Journey' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact' },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route-style scroll
  const handleLink = (href: string) => {
    setMenuOpen(false)
    // Small timeout so menu closes before scroll kicks in
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
        style={{
          background: scrolled || menuOpen
            ? 'rgba(5,5,5,0.98)'
            : 'linear-gradient(to bottom, rgba(5,5,5,0.95) 0%, transparent 100%)',
          borderBottom: scrolled ? '1px solid rgba(0,255,156,0.06)' : 'none',
        }}
      >
        <div className="flex justify-between items-center px-5 sm:px-[5vw] py-4 sm:py-5">

          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); handleLink('#hero') }}
            className="font-display text-xl sm:text-[1.4rem] tracking-[0.1em] text-white no-underline flex items-center gap-1"
          >
            <span style={{ color: 'var(--color-red)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.9rem' }}>[</span>
            D
            <span style={{ color: 'var(--color-green)' }}>.</span>
            PATEL
            <span style={{ color: 'var(--color-red)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.9rem' }}>]</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={e => { e.preventDefault(); handleLink(href) }}
                  className="font-mono text-[0.65rem] tracking-[0.15em] uppercase no-underline transition-colors duration-200 relative group"
                  style={{ color: 'var(--color-white2)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-green)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-white2)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop status */}
          <div className="hidden md:flex font-mono text-[0.6rem] tracking-[0.1em] items-center gap-2" style={{ color: 'var(--color-green)' }}>
            <span className="w-[6px] h-[6px] rounded-full animate-pulse-dot" style={{ background: 'var(--color-green)' }} />
            {PROFILE.availableNote}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-[1px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--color-white)',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[1px] transition-all duration-300"
              style={{
                background: 'var(--color-white)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[1px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--color-white)',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? '400px' : '0' }}
        >
          <div
            className="px-5 pb-6 pt-2 flex flex-col gap-1"
            style={{ borderTop: '1px solid rgba(0,255,156,0.06)' }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); handleLink(href) }}
                className="font-mono text-[0.75rem] tracking-[0.15em] uppercase no-underline py-3 border-b"
                style={{
                  color: 'var(--color-white2)',
                  borderBottomColor: 'rgba(255,255,255,0.05)',
                }}
              >
                <span style={{ color: 'var(--color-red)', marginRight: '0.5rem' }}>&gt;</span>
                {label}
              </a>
            ))}
            {/* Status */}
            <div className="flex items-center gap-2 pt-4 font-mono text-[0.6rem] tracking-[0.1em]" style={{ color: 'var(--color-green)' }}>
              <span className="w-[6px] h-[6px] rounded-full animate-pulse-dot" style={{ background: 'var(--color-green)' }} />
              {PROFILE.availableNote}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
