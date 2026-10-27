import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EASE } from '../../lib/motion'

/** Fades and lifts its children once they scroll into view. */
export function FadeInUp({ children, delay = 0, className = '', duration = 0.9 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Parent that staggers the `StaggerItem` children below it. */
export function StaggerContainer({ children, className = '', stagger = 0.12, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

/** Child of `StaggerContainer`; pass `variants` (see `staggerItemVariants` in lib/motion). */
export function StaggerItem(props) {
  return <motion.div {...props} />
}

/** Word-by-word headline reveal (each word slides up out of a clipped box). */
export function TextReveal({ text, className = '', delay = 0, stagger = 0.07, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const words = text.split(' ')
  return (
    <div ref={ref} className={className} style={style}>
      <motion.span
        className="flex flex-wrap gap-x-[0.22em]"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '115%', opacity: 0, rotateX: 8 },
                visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.9, ease: EASE } },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </div>
  )
}

/** Single-block clip reveal (used for paragraphs under headlines). */
export function RevealUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.85, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/** Button wrapper that drifts toward the cursor while hovered. */
export function Magnetic({ children, className = '', onClick }) {
  const ref = useRef(null)
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const dx = e.clientX - rect.left - rect.width / 2
        const dy = e.clientY - rect.top - rect.height / 2
        el.style.transform = `translate(${0.25 * dx}px, ${0.25 * dy}px)`
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = 'translate(0, 0)'
      }}
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      style={{ transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
    >
      {children}
    </div>
  )
}
