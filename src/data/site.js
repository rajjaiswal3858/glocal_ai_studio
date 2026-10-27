/** Site-wide constants shared across pages and components. */

export const SITE_NAME = 'Glocal AI Studio'
export const SITE_TAGLINE = 'AI Content Studio for Global Brands'

/**
 * Absolute origin used for share links and structured data. Resolved from the
 * page the site is served on, so no hard-coded domain has to be kept in sync.
 */
export const SITE_URL = typeof window !== 'undefined' ? window.location.origin : ''

/** Public contact address for Glocal AI Studio (change here to update the whole site). */
export const CONTACT_EMAIL = 'info@glocalaistudio.com'

/**
 * Booking page for the "Schedule a Call" CTAs. Leave empty to have every CTA
 * open a pre-filled email instead; set it (e.g. a Calendly event URL) once one
 * exists and the popup flow switches on automatically.
 */
export const CALENDLY_BASE = ''

/** Where the studio is based (shown in the footer and on the contact page). */
export const LOCATION = 'Wilmington, Delaware · India'

/** Brand assets under /public. */
export const LOGO = '/glocal-logo.png'
export const WORDMARK = '/glocal-wordmark.png'

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export const MENU_LINKS = [...NAV_LINKS, { label: 'Contact', href: '/contact' }]

export const SOCIALS = [
  { label: 'Instagram', icon: 'IG', href: 'https://www.instagram.com/glocalrpo_us/' },
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/company/glocalrpo' },
]

export const FOOTER_NAVIGATE = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_SERVICES = [
  { label: 'AI Native Film', href: '/ott-production' },
  { label: 'AI Brand Films', href: '/ai-brand-films' },
  { label: 'Micro Drama', href: '/micro-drama-production' },
  { label: 'Ad Creatives', href: '/ai-ad-creatives' },
  { label: 'Social Content', href: '/social-media-content' },
]

/**
 * The eleven categories of the AI showreel, in reel order. Drives the homepage
 * marquee and the About page strip; each links to the matching case study.
 */
export const SHOWREEL_CATEGORIES = [
  { label: 'Automotive', href: '/work/automotive' },
  { label: 'Product Films', href: '/work/product-films' },
  { label: 'Fashion', href: '/work/fashion' },
  { label: 'Food & Beverage', href: '/work/food-and-beverage' },
  { label: 'Architecture', href: '/work/architecture' },
  { label: 'Cinematic Worlds', href: '/work/cinematic-worlds' },
  { label: 'Surreal VFX', href: '/work/surreal-vfx' },
  { label: 'Experiential Visuals', href: '/work/experiential-visuals' },
  { label: 'Brand Films', href: '/work/tata-tea' },
  { label: 'Storytelling', href: '/work/storytelling' },
  { label: 'Animation', href: '/work/animation' },
]
