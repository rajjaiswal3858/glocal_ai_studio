import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { TextReveal, RevealUp, Magnetic } from './Motion'
import { EASE } from '../../lib/motion'
import CalendlyLink from './CalendlyLink'
import EmailLink from './EmailLink'

/** "Let's make something impossible." closing block used on most inner pages. */
export default function CTASection({ dark = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const bg = dark ? '#080808' : '#F5F4F0'
  const fg = dark ? '#F5F4F0' : '#080808'

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.span
          className="section-label block mb-10"
          style={{ color: dark ? 'rgba(245,244,240,0.4)' : 'rgba(8,8,8,0.4)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Ready to Create?
        </motion.span>
        <TextReveal
          text="Let's make something"
          className="font-display font-bold text-display leading-[0.92] tracking-[-0.03em]"
          style={{ color: fg }}
          stagger={0.07}
        />
        <TextReveal
          text="impossible."
          className="font-display italic font-bold text-display leading-[0.92] tracking-[-0.03em] mt-2"
          style={{ color: dark ? 'rgba(245,244,240,0.2)' : 'rgba(8,8,8,0.2)' }}
          delay={0.3}
          stagger={0.07}
        />
        <RevealUp delay={0.6} className="mt-10 mb-14 max-w-md">
          <p className="font-body text-lg leading-relaxed" style={{ color: dark ? 'rgba(245,244,240,0.5)' : 'rgba(8,8,8,0.5)' }}>
            Brief us on your project and we'll come back with ideas within 24 hours.
          </p>
        </RevealUp>
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        >
          <Magnetic>
            <CalendlyLink
              ctaLocation="cta_section"
              className="inline-flex items-center gap-3 font-body font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors duration-300"
              style={{ backgroundColor: fg, color: bg }}
            >
              Schedule a Call
              <ArrowUpRight size={13} />
            </CalendlyLink>
          </Magnetic>
          <EmailLink
            ctaLocation="cta_section"
            className="inline-block py-2 font-body text-sm transition-colors duration-300 self-center"
            style={{ color: dark ? 'rgba(245,244,240,0.3)' : 'rgba(8,8,8,0.3)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
