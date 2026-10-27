import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, FOOTER_NAVIGATE, FOOTER_SERVICES, LOCATION, LOGO, SITE_NAME, SITE_TAGLINE, SOCIALS } from '../../data/site'

// `py-1.5 -my-1.5` enlarges the tap target without moving anything visually.
const linkClass = 'inline-block py-1.5 -my-1.5 font-body text-white/75 hover:text-white text-sm transition-colors duration-300'

const YEAR = new Date().getFullYear()

/** Brand glyphs (lucide dropped its brand icons), drawn at 16px with a 1.5px stroke. */
const SOCIAL_ICONS = {
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  YouTube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
    </svg>
  ),
}

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex flex-col mb-6">
              <img src={LOGO} alt={SITE_NAME} width={600} height={298} decoding="async" loading="lazy" style={{ height: '64px', width: 'auto', alignSelf: 'flex-start', objectFit: 'contain' }} />
              <span className="font-body text-white/60 leading-none mt-3" style={{ fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                {SITE_TAGLINE}
              </span>
            </Link>
            <p className="font-body text-white/75 text-sm leading-relaxed max-w-[190px]">Empowering Global Brands with AI Content</p>
            {SOCIALS.length > 0 && (
              <div className="flex items-center gap-4 mt-6">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-white/60 hover:text-[#DCAB59] transition-colors duration-300">
                    {SOCIAL_ICONS[s.label] ?? <span className="font-body text-xs font-semibold">{s.icon}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="section-label mb-5">Navigate</h4>
            <ul className="space-y-3">
              {FOOTER_NAVIGATE.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-5">Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-5">Get in Touch</h4>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} block mb-2`}>
              {CONTACT_EMAIL}
            </a>
            <p className="font-body text-white/55 text-xs">{LOCATION}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/55 text-xs">
            © {YEAR} {SITE_NAME}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="inline-block py-2 -my-2 font-body text-white/55 hover:text-white text-xs transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="inline-block py-2 -my-2 font-body text-white/55 hover:text-white text-xs transition-colors duration-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
