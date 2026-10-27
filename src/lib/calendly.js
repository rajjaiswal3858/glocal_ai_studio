/**
 * Calendly integration, isolated from the UI.
 * The original site opens Calendly in a popup widget and tags every link with
 * UTM parameters derived from the current page. The popup needs Calendly's
 * external widget script; if it fails to load we fall back to a new tab.
 */
import { CALENDLY_BASE } from '../data/site'

const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'
const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'

const SERVICE_PATHS = new Set([
  '/services',
  '/ai-brand-films',
  '/micro-drama-production',
  '/ott-production',
  '/social-media-content',
  '/ai-ad-creatives',
])

/** Campaign name used in UTM tags, keyed off the page the CTA sits on. */
export function leadCampaignFor(pathname) {
  if (pathname.startsWith('/blog')) return 'lead_blog'
  if (pathname === '/') return 'lead_home'
  if (pathname.startsWith('/contact')) return 'lead_contact'
  if (pathname.startsWith('/work')) return 'lead_work'
  if (pathname.startsWith('/solutions')) return 'lead_solutions'
  if (pathname.startsWith('/services') || SERVICE_PATHS.has(pathname)) return 'lead_services'
  return 'lead_other'
}

export function buildCalendlyUrl(pathname, ctaLocation) {
  const params = new URLSearchParams({
    utm_source: 'website',
    utm_medium: 'cta',
    utm_campaign: leadCampaignFor(pathname),
    utm_content: ctaLocation,
    utm_term: pathname,
  })
  return `${CALENDLY_BASE}?${params.toString()}`
}

let loader = null

function loadWidget() {
  if (window.Calendly) return Promise.resolve()
  if (loader) return loader
  loader = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = WIDGET_CSS
      document.head.appendChild(link)
    }
    const script = document.createElement('script')
    script.src = WIDGET_JS
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      loader = null
      reject(new Error('Calendly widget failed to load'))
    }
    document.body.appendChild(script)
  })
  return loader
}

/** Opens the Calendly popup. Resolves to false when the widget is unavailable. */
export async function openCalendlyPopup(url) {
  try {
    await loadWidget()
    if (!window.Calendly) return false
    window.Calendly.initPopupWidget({ url })
    return true
  } catch {
    return false
  }
}
