/**
 * Analytics boundary.
 * The original site reports lead clicks, shares and scroll depth to Google
 * Analytics and Microsoft Clarity. Those are third-party services unrelated to
 * the visual replica, so they are intentionally not loaded here. The functions
 * keep the same call sites so wiring a provider later is a one-file change.
 */

export function trackLead(ctaLocation, method = 'calendly') {
  if (import.meta.env.DEV) console.debug('[analytics] lead', { ctaLocation, method })
}

export function trackShare(method, contentType, itemId) {
  if (import.meta.env.DEV) console.debug('[analytics] share', { method, contentType, itemId })
}
