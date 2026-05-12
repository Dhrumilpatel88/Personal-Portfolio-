'use client'

import { useEffect, useRef, useState } from 'react'

export function CursorProvider() {
  const curRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  // Step 1 — check device capability (no DOM access yet)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (mq.matches) setShow(true)
  }, [])

  // Step 2 — start RAF loop only AFTER elements are in the DOM
  useEffect(() => {
    if (!show) return
    const cur  = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let animId = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'
      cur.style.top  = my + 'px'
    }
    const raf = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      animId = requestAnimationFrame(raf)
    }
    document.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(raf)

    const expand = () => {
      cur.style.width        = '16px'
      cur.style.height       = '16px'
      cur.style.background   = 'var(--color-red)'
      ring.style.width       = '48px'
      ring.style.height      = '48px'
      ring.style.borderColor = 'rgba(255,59,48,0.5)'
    }
    const shrink = () => {
      cur.style.width        = '8px'
      cur.style.height       = '8px'
      cur.style.background   = 'var(--color-green)'
      ring.style.width       = '32px'
      ring.style.height      = '32px'
      ring.style.borderColor = 'rgba(0,255,156,0.3)'
    }

    const targets = document.querySelectorAll('a, button, [data-cursor]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [show]) // reruns once `show` flips to true and elements are rendered

  if (!show) return null

  return (
    <>
      <div
        ref={curRef}
        aria-hidden="true"
        className="fixed pointer-events-none z-[99999] rounded-full"
        style={{
          width: 8, height: 8,
          background: 'var(--color-green)',
          transform: 'translate(-50%,-50%)',
          transition: 'width .1s, height .1s, background .1s',
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed pointer-events-none z-[99998] rounded-full"
        style={{
          width: 32, height: 32,
          border: '1px solid rgba(0,255,156,0.3)',
          transform: 'translate(-50%,-50%)',
          transition: 'width .08s linear, height .08s linear, border-color .1s',
        }}
      />
    </>
  )
}
