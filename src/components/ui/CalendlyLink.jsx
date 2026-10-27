import { useLocation } from 'react-router-dom'
import { CALENDLY_BASE, CONTACT_EMAIL, SITE_NAME } from '../../data/site'
import { buildCalendlyUrl, openCalendlyPopup } from '../../lib/calendly'
import { trackLead } from '../../lib/analytics'

const MAIL_FALLBACK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Schedule a call with ${SITE_NAME}`)}`

/**
 * Anchor that opens the booking popup. Keeps a real href so middle-click,
 * ctrl-click and a failed widget load still reach the booking page in a new
 * tab. While no booking URL is configured it opens a pre-filled email instead.
 */
export default function CalendlyLink({ ctaLocation, children, ...rest }) {
  const { pathname } = useLocation()

  if (!CALENDLY_BASE) {
    return (
      <a {...rest} href={MAIL_FALLBACK} onClick={() => trackLead(ctaLocation, 'email')}>
        {children}
      </a>
    )
  }

  const href = buildCalendlyUrl(pathname, ctaLocation)
  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackLead(ctaLocation)
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        openCalendlyPopup(href).then((ok) => {
          if (!ok) window.open(href, '_blank', 'noopener,noreferrer')
        })
      }}
    >
      {children}
    </a>
  )
}
