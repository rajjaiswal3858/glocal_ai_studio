import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Jumps to the top on every route change (the `html` smooth-scroll is bypassed for the jump). */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
  }, [pathname])
  return null
}
