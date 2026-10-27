/**
 * Self-hosted media helpers. Every video ships in two H.264 renditions under
 * /public/video: `<id>-720.mp4` (muted, for background loops) and
 * `<id>-1080.mp4` (with audio, for the case-study player). Poster frames live
 * under /public/posters as `<id>.webp` (1280px) and `<id>-hero.webp` (1920px).
 */

export function videoSrc(id, rendition = '720') {
  return `/video/${id}-${rendition}.mp4`
}

export function posterSrc(id, variant) {
  return `/posters/${id}${variant ? `-${variant}` : ''}.webp`
}
