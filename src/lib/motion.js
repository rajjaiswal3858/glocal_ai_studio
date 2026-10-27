/** Shared animation constants (kept out of component files so Fast Refresh works). */

/** Easing used by every reveal on the site. */
export const EASE = [0.16, 1, 0.3, 1]

/** Variants for `StaggerItem` children of a `StaggerContainer`. */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}
