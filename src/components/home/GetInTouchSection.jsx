import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CalendlyLink from '../ui/CalendlyLink'
import EmailLink from '../ui/EmailLink'
import { EASE } from '../../lib/motion'

/** Cream "Get in Touch." closing block on the homepage. */
export default function GetInTouchSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#F5F4F0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(48px, 6vh, 80px) clamp(32px, 6vw, 96px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
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
            color: 'rgba(59,42,18,0.65)',
            marginBottom: 'clamp(20px, 4vh, 40px)',
          }}
        >
          Ready to Create
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(40px, 8vw, 130px)', fontWeight: 700, color: '#3B2A12', letterSpacing: '-0.03em', lineHeight: 0.92, marginBottom: '16px' }}
        >
          Get in
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.18, ease: EASE }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(40px, 8vw, 130px)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'rgba(59,42,18,0.55)',
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            marginBottom: 'clamp(32px, 6vh, 60px)',
          }}
        >
          Touch.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.32, ease: EASE }}
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(14px, 2.5vw, 17px)', fontWeight: 300, color: 'rgba(59,42,18,0.75)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 56px' }}
        >
          Brief us on your project and we'll come back with ideas within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.44, ease: EASE }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
        >
          <CalendlyLink
            ctaLocation="get_in_touch"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#080808',
              color: '#F2E4C2',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: 'clamp(14px, 2vh, 18px) clamp(24px, 4vw, 40px)',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a Call
          </CalendlyLink>
          <EmailLink
            ctaLocation="get_in_touch"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(59,42,18,0.65)', textDecoration: 'none', transition: 'color 0.3s ease', letterSpacing: '0.02em' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(59,42,18,1)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(59,42,18,0.65)')}
          />
        </motion.div>
      </div>
    </section>
  )
}
