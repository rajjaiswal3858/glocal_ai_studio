import { Link } from 'react-router-dom'
import { SHOWREEL_CATEGORIES } from '../../data/site'

/** One category word plus its gold separator. */
function Cell({ item, decorative, size }) {
  const text = (
    <span
      style={{
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: size,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        color: 'rgba(242,228,194,0.82)',
        transition: 'color 0.3s ease',
      }}
    >
      {item.label}
    </span>
  )
  return (
    <div aria-hidden={decorative || undefined} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.4vw, 40px)', marginRight: 'clamp(20px, 2.4vw, 40px)' }}>
      {!decorative ? (
        <Link
          to={item.href}
          aria-label={`${item.label} case study`}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          onMouseEnter={(e) => (e.currentTarget.firstChild.style.color = '#DCAB59')}
          onMouseLeave={(e) => (e.currentTarget.firstChild.style.color = 'rgba(242,228,194,0.82)')}
        >
          {text}
        </Link>
      ) : (
        text
      )}
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#DCAB59', opacity: 0.8, flexShrink: 0 }} />
    </div>
  )
}

/**
 * Infinite horizontal marquee of the eleven showreel categories. The list is
 * rendered twice so the -50% keyframe loops seamlessly.
 */
export default function CategoryMarquee({ size = 'clamp(26px, 3.6vw, 54px)', duration = 38 }) {
  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: 'max-content', animation: `logoScroll ${duration}s linear infinite` }}>
        {SHOWREEL_CATEGORIES.map((item) => (
          <Cell key={item.label} item={item} size={size} />
        ))}
        {SHOWREEL_CATEGORIES.map((item) => (
          <Cell key={`dup-${item.label}`} item={item} size={size} decorative />
        ))}
      </div>
    </div>
  )
}
