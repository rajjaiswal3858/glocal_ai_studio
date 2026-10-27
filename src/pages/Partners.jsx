import { motion } from 'framer-motion'
import { PARTNERS } from '../data/partners'
import usePageMeta from '../lib/usePageMeta'
import useIsMobile from '../lib/useIsMobile'
import FillImage from '../components/ui/FillImage'
import { EASE } from '../lib/motion'

function PartnerCard({ partner, index, isMobile }) {
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
      <div style={{ flex: 1, height: isMobile ? 'auto' : '100%', display: 'flex', flexDirection: isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse', overflow: 'hidden' }}>
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
          <span style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(59,42,18,0.5)', marginBottom: '12px' }}>{partner.label}</span>
          <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 56px)', fontWeight: 700, color: '#3B2A12', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '28px' }}>{partner.name}</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? '16px' : 'clamp(13px, 1.05vw, 16px)', fontWeight: 400, color: 'rgba(59,42,18,0.6)', lineHeight: 1.8, maxWidth: '400px' }}>{partner.description}</p>
        </div>
        <div style={{ flex: isMobile ? '0 0 58vw' : '0 0 50%', minHeight: isMobile ? '58vw' : undefined, position: 'relative', overflow: 'hidden', backgroundColor: partner.accent }}>
          <FillImage src={partner.image} alt={partner.name} style={{ objectFit: 'cover' }} sizes={isMobile ? '100vw' : '50vw'} />
          <span style={{ position: 'absolute', bottom: 'clamp(24px, 4vw, 48px)', right: 'clamp(24px, 4vw, 48px)', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(242,228,194,0.15)' }}>
            {partner.index} / 03
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Partners() {
  usePageMeta(
    'Partner with Glocal AI Studio | AI Content Collaborations',
    'Agencies, platforms and brands: collaborate with Glocal AI Studio on AI-powered film, series and campaign production.',
  )
  const isMobile = useIsMobile()

  return (
    <div className="bg-[#080808] text-white antialiased">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <FillImage src="/posters/experiential-visuals-hero.webp" alt="Our Partners" priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: EASE }} className="relative z-10 text-center px-6 mt-16 md:mt-24">
          <span style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(242,228,194,0.55)', marginBottom: '20px' }}>Our Ecosystem</span>
          <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 700, color: '#F2E4C2', letterSpacing: '-0.03em', lineHeight: 0.95, textTransform: 'uppercase', margin: 0 }}>Our Partners</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(14px, 1.2vw, 18px)', color: 'rgba(242,228,194,0.5)', fontWeight: 300, marginTop: '20px', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Built on shared vision. Powered by trust. Three ways agencies, platforms and brands plug Glocal AI Studio into what they are building.
          </p>
        </motion.div>
      </section>

      <div style={{ padding: 'clamp(60px, 8vw, 100px) clamp(32px, 6vw, 96px) clamp(40px, 5vw, 64px)', overflow: 'hidden' }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(242,228,194,0.4)', marginBottom: '20px' }}
        >
          Partnership Tracks
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.08, ease: EASE }}
          style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(28px, 3.2vw, 52px)', fontWeight: 700, color: '#F2E4C2', letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase', maxWidth: '600px' }}
        >
          Three Ways
          <br />
          To Build With Us.
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginTop: 'clamp(32px, 4vh, 56px)', transformOrigin: 'left' }}
        />
      </div>

      <div style={{ position: 'relative' }}>
        {PARTNERS.map((partner, i) => (
          <PartnerCard key={partner.index} partner={partner} index={i} isMobile={isMobile} />
        ))}
        <div style={{ height: '20vh', backgroundColor: '#080808' }} />
      </div>
    </div>
  )
}
