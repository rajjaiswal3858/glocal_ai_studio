import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HOME_WORK } from '../../data/projects'
import useIsMobile from '../../lib/useIsMobile'
import LazyVideo from '../ui/LazyVideo'
import { posterSrc, videoSrc } from '../../lib/media'

function Heading() {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <span
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
        Selected Work
      </span>
      <h2
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
        Stories That Move.
      </h2>
    </div>
  )
}

/** Clip placement: every card is 16:9, so the video simply covers it. */
function frameStyle(opacity) {
  return { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity, transition: 'opacity 0.4s ease', pointerEvents: 'none' }
}

function WorkCard({ project }) {
  const [hover, setHover] = useState(false)
  return (
    <Link
      to={`/work/${project.id}`}
      className="relative flex-shrink-0 overflow-hidden block"
      style={{ width: 'clamp(220px, 23vw, 360px)', aspectRatio: '16/9', borderRadius: '4px', textDecoration: 'none' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <LazyVideo src={videoSrc(project.video)} poster={posterSrc(project.video)} style={frameStyle(hover ? 1 : 0.65)} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }} />
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: hover ? 1 : 0, transition: 'opacity 0.3s ease' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M1 1L13 8L1 15V1Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,228,194,0.45)', fontFamily: "'DM Sans', sans-serif" }}>
            {project.category}
          </span>
          <span style={{ color: 'rgba(242,228,194,0.3)', fontSize: '9px' }}>·</span>
          <span style={{ fontSize: '9px', color: 'rgba(242,228,194,0.55)', fontFamily: "'DM Sans', sans-serif" }}>{project.client}</span>
        </div>
        <h3 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(16px, 1.4vw, 22px)', fontWeight: 700, color: '#F2E4C2', lineHeight: 1.1 }}>
          {project.title}
        </h3>
      </div>
    </Link>
  )
}

function MobileWorkCard({ project }) {
  return (
    <Link to={`/work/${project.id}`} className="relative overflow-hidden block" style={{ aspectRatio: '16/9', borderRadius: '4px', textDecoration: 'none' }}>
      <LazyVideo src={videoSrc(project.video)} poster={posterSrc(project.video)} style={frameStyle(0.75)} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }} />
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <h3 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(11px, 3vw, 16px)', fontWeight: 700, color: '#F2E4C2', lineHeight: 1.1 }}>
          {project.title}
        </h3>
      </div>
    </Link>
  )
}

/** Desktop: a tall sticky section whose scroll drives a horizontal rail. */
function DesktopWorkSection() {
  const ref = useRef(null)
  const railRef = useRef(null)
  // How far the rail must travel so the last card ends flush with the viewport edge.
  const [distance, setDistance] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const measure = () => setDistance(Math.max(0, rail.scrollWidth - rail.clientWidth))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(rail)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ backgroundColor: '#080808', minHeight: '350vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col" style={{ justifyContent: 'center', gap: '32px' }}>
        <Heading />
        <div className="overflow-hidden">
          <motion.div ref={railRef} className="flex" style={{ x, gap: '16px', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: '80px' }}>
            {HOME_WORK.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MobileWorkSection() {
  return (
    <section style={{ backgroundColor: '#080808', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div style={{ padding: '0 clamp(16px, 5vw, 32px)', marginBottom: '40px' }}>
        <Heading />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', padding: '0 clamp(16px, 5vw, 32px)' }}>
        {HOME_WORK.map((project) => (
          <MobileWorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default function WorkSection() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileWorkSection /> : <DesktopWorkSection />
}
