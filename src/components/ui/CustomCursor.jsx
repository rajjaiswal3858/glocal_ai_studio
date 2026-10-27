import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

/** Only mouse-driven devices get the custom cursor; touch screens never see it. */
const FINE_POINTER = '(hover: hover) and (pointer: fine)'
const subscribePointer = (onChange) => {
  const mql = window.matchMedia(FINE_POINTER)
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}
const hasFinePointer = () => window.matchMedia(FINE_POINTER).matches

/** Ring + dot cursor shown on desktop; the ring grows over links and buttons. */
export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const enabled = useSyncExternalStore(subscribePointer, hasFinePointer, () => false)

  useEffect(() => {
    if (!enabled) return undefined
    const move = (e) => {
      if (ringRef.current) ringRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`
    }
    const isTarget = (el) => el instanceof Element && el.closest('a, button, [data-cursor]')
    const over = (e) => {
      if (isTarget(e.target)) setHovering(true)
    }
    const out = (e) => {
      if (isTarget(e.target) && !isTarget(e.relatedTarget)) setHovering(false)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-white/40 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: hovering ? '44px' : '28px',
          height: hovering ? '44px' : '28px',
          marginLeft: hovering ? '-6px' : '0',
          marginTop: hovering ? '-6px' : '0',
          opacity: hovering ? 0.9 : 0.5,
          transition: 'transform 0.1s ease-out, width 0.25s, height 0.25s, opacity 0.25s, margin 0.25s',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] hidden md:block"
        style={{ transition: 'transform 0.05s ease-out' }}
      />
    </>
  )
}
