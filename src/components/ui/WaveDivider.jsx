/** Curved colour transition between a dark and a light section. */
export default function WaveDivider({ from, to }) {
  return (
    <div style={{ background: from, lineHeight: 0, display: 'block' }}>
      <svg viewBox="0 0 1440 100" style={{ display: 'block', width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill={to} />
      </svg>
    </div>
  )
}
