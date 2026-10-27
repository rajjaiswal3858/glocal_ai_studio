import CategoryMarquee from '../ui/CategoryMarquee'

/** "One studio. EVERY CATEGORY." + infinite marquee of the showreel categories. */
export default function TrustedBySection() {
  return (
    <section style={{ background: '#080808', paddingTop: 'clamp(48px, 8vw, 100px)', paddingBottom: 'clamp(48px, 8vw, 110px)', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#DCAB59',
            fontWeight: 800,
            marginBottom: '16px',
          }}
        >
          One studio, built for
        </p>
        <h2
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(48px, 8vw, 100px)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#F2E4C2',
            margin: 0,
          }}
        >
          Every Category
        </h2>
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #080808, transparent)', zIndex: 4, pointerEvents: 'none' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0,0,0,1) 100%)',
          background: '#080808',
        }}
      />

      <div style={{ position: 'relative', zIndex: 3, padding: 'clamp(16px, 3vh, 36px) 0' }}>
        <CategoryMarquee />
      </div>
    </section>
  )
}
