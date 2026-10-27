import { useEffect, useRef, useState } from 'react'

const REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * <video> whose `src` is only attached once it comes within `rootMargin` of
 * the viewport, so a page full of clips does not download them all at once.
 * Background loops (no `controls`) also pause while scrolled out of view and
 * stay on their poster when the visitor prefers reduced motion.
 * `persistent` loops never pause: they load early and are resumed if the
 * browser stops them, for clips that are transformed by scroll effects.
 */
export default function LazyVideo({ src, poster, controls = false, persistent = false, rootMargin = persistent ? '1200px' : '400px', style, className, title, ...rest }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const autoplay = !controls && !REDUCED_MOTION

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          loader.disconnect()
        }
      },
      { rootMargin },
    )
    loader.observe(el)
    return () => loader.disconnect()
  }, [rootMargin])

  useEffect(() => {
    const el = ref.current
    if (!el || !active || !autoplay) return undefined
    if (persistent) {
      const resume = () => {
        if (el.paused && !document.hidden) el.play().catch(() => {})
      }
      resume()
      el.addEventListener('pause', resume)
      el.addEventListener('canplay', resume)
      document.addEventListener('visibilitychange', resume)
      return () => {
        el.removeEventListener('pause', resume)
        el.removeEventListener('canplay', resume)
        document.removeEventListener('visibilitychange', resume)
      }
    }
    const player = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {})
      else el.pause()
    })
    player.observe(el)
    return () => player.disconnect()
  }, [active, autoplay, persistent])

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      poster={poster}
      muted={!controls}
      loop={!controls}
      playsInline
      autoPlay={autoplay}
      preload={active ? (controls ? 'metadata' : 'auto') : 'none'}
      controls={controls}
      controlsList={controls ? 'nodownload' : undefined}
      disablePictureInPicture={!controls}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      tabIndex={controls ? undefined : -1}
      className={className}
      style={style}
      {...rest}
    />
  )
}
