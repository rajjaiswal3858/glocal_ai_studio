import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { PILLARS } from '../../data/services'
import useIsMobile from '../../lib/useIsMobile'
import LazyVideo from '../ui/LazyVideo'
import { posterSrc, videoSrc } from '../../lib/media'
import { EASE } from '../../lib/motion'

function PillarCard({ service, index, isMobile }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        minHeight: '100vh',
        height: isMobile ? 'auto' : '100vh',
        zIndex: index + 1,
        backgroundColor: '#080808',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '0' : '0 clamp(48px, 5vw, 96px)',
      }}
    >
      <div
        style={{
          flex: 1,
          height: isMobile ? 'auto' : '100%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            flex: isMobile ? '0 0 auto' : '0 0 50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: isMobile ? 'clamp(28px, 6vw, 48px) clamp(20px, 5vw, 40px)' : 'clamp(40px, 5vw, 80px)',
            backgroundColor: '#FFFFFF',
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(59,42,18,0.65)',
              marginBottom: '28px',
            }}
          >
            {service.label}
          </span>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: isMobile ? 'clamp(28px, 7vw, 48px)' : 'clamp(32px, 4vw, 64px)',
              fontWeight: 700,
              color: '#3B2A12',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            {/* EB Garamond's hyphen is slanted; draw it from Georgia so it sits level. */}
            {service.title.split('-').map((part, i) => (
              <span key={i}>
                {i > 0 && <span style={{ fontFamily: 'Georgia, serif' }}>-</span>}
                {part}
              </span>
            ))}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isMobile ? '17px' : 'clamp(14px, 1.1vw, 18px)',
              fontWeight: 400,
              color: 'rgba(59,42,18,0.55)',
              lineHeight: 1.7,
              maxWidth: '340px',
              marginBottom: '40px',
            }}
          >
            {service.desc}
          </p>
          <Link
            to={service.href}
            style={{
              display: 'inline-block',
              width: 'fit-content',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: '#3B2A12',
              textDecoration: 'none',
              border: '1px solid #080808',
              padding: '12px 48px',
              transition: 'background 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#080808'
              e.currentTarget.style.color = '#F2E4C2'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#3B2A12'
            }}
          >
            Explore
          </Link>
        </div>

        <div style={{ flex: isMobile ? '0 0 58vw' : '0 0 50%', minHeight: isMobile ? '58vw' : undefined, position: 'relative', overflow: 'hidden' }}>
          <LazyVideo
            src={videoSrc(service.video)}
            poster={posterSrc(service.video)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}

/** "Five Pillars. One Studio." — five sticky cards that stack as you scroll. */
export default function FourStudiosSection() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })
  const isMobile = useIsMobile()

  return (
    <section id="four-studios" style={{ backgroundColor: '#080808', position: 'relative' }}>
      <div ref={headRef} style={{ padding: 'clamp(48px, 8vh, 140px) clamp(24px, 6vw, 96px) clamp(36px, 5vh, 100px)' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            display: 'block',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(242,228,194,0.7)',
            marginBottom: '20px',
          }}
        >
          What We Build
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(48px, 6vw, 100px)',
            fontWeight: 700,
            color: '#F2E4C2',
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            textTransform: 'uppercase',
          }}
        >
          Five Pillars.
          <br />
          One Studio.
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
          style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.15)', marginTop: 'clamp(40px, 5vh, 72px)', transformOrigin: 'left' }}
        />
      </div>

      <div style={{ position: 'relative' }}>
        {PILLARS.map((service, i) => (
          <PillarCard key={service.id} service={service} index={i} isMobile={isMobile} />
        ))}
        <div style={{ height: '20vh', backgroundColor: '#080808' }} />
      </div>
    </section>
  )
}
