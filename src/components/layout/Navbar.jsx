import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { LOGO, MENU_LINKS, SITE_NAME, SOCIALS, WORDMARK } from '../../data/site'
import EmailLink from '../ui/EmailLink'

const EASE = [0.16, 1, 0.3, 1]

/** Fixed translucent top bar plus the full-height slide-in menu drawer. */
export default function Navbar() {
  const { pathname } = useLocation()
  // The drawer remembers the route it was opened on, so navigating closes it
  // without an effect-driven setState.
  const [openedOn, setOpenedOn] = useState(null)
  const open = openedOn === pathname
  const setOpen = (next) => setOpenedOn((typeof next === 'function' ? next(open) : next) ? pathname : null)

  useEffect(() => {
    if (!open) return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenedOn(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(12px)' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: EASE }}
      >
        <div className="px-4 md:px-8 lg:px-12 h-[58px] md:h-[72px] flex items-center justify-between">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2.5 group"
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ minWidth: '120px', minHeight: '44px' }}
          >
            <div className="flex flex-col gap-[5px]">
              <motion.span
                className="block h-px bg-white"
                style={{ width: '22px' }}
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              />
              <motion.span
                className="block h-px bg-white"
                style={{ width: '22px' }}
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px bg-white"
                style={{ width: '22px' }}
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              />
            </div>
            <span
              style={{
                fontFamily: "'DM Sans', 'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#F2E4C2',
              }}
            >
              Menu
            </span>
          </button>

          <Link to="/" aria-label={`${SITE_NAME} home`} className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[4px] md:gap-[5px]">
            <img src={WORDMARK} alt="" width={800} height={202} decoding="async" className="h-[26px] md:h-[34px] w-auto" style={{ objectFit: 'contain' }} />
            <span
              className="text-[8px] md:text-[10px]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.42em', paddingLeft: '0.42em', textTransform: 'uppercase', color: '#DCAB59', lineHeight: 1, whiteSpace: 'nowrap' }}
            >
              AI Studio
            </span>
          </Link>

          <div style={{ minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
            <EmailLink
              ctaLocation="navbar_top"
              className="hidden md:inline-block py-2"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(242,228,194,0.75)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#DCAB59')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,228,194,0.75)')}
            />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 bottom-0 z-50 flex flex-col"
              style={{ width: 'clamp(280px, 100vw, 680px)', backgroundColor: '#080808' }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <div
                style={{
                  height: 'clamp(64px, 10vw, 80px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 clamp(28px, 5vw, 56px)',
                  flexShrink: 0,
                }}
              >
                <Link to="/" onClick={() => setOpen(false)}>
                  <img src={LOGO} alt={SITE_NAME} width={600} height={298} decoding="async" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(242,228,194,0.5)',
                    fontSize: '20px',
                    lineHeight: 1,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F2E4C2')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,228,194,0.5)')}
                >
                  ✕
                </button>
              </div>

              <nav
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '0 clamp(28px, 5vw, 56px)',
                  gap: '4px',
                }}
              >
                {MENU_LINKS.map((item, i) => {
                  const active = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 + 0.07 * i, ease: EASE }}
                    >
                      <Link
                        to={item.href}
                        style={{
                          display: 'block',
                          fontFamily: "'EB Garamond', Georgia, serif",
                          fontSize: 'clamp(36px, 5vw, 64px)',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.15,
                          color: active ? '#DCAB59' : '#FFFFFF',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease, opacity 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          if (!active) e.currentTarget.style.opacity = '0.4'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '1'
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                style={{
                  padding: 'clamp(24px, 4vh, 40px) clamp(28px, 5vw, 56px)',
                  flexShrink: 0,
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'rgba(242,228,194,0.35)',
                        textDecoration: 'none',
                        letterSpacing: '0.04em',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#F2E4C2')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,228,194,0.35)')}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
                <EmailLink
                  ctaLocation="navbar"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: 'rgba(242,228,194,0.2)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(242,228,194,0.6)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,228,194,0.2)')}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
