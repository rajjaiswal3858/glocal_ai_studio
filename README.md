# Glocal AI Studio — website

The Glocal AI Studio site: a client-side React application built with Vite, React Router, Tailwind CSS v4,
Framer Motion and GSAP. The layout and motion language follow the reference site (thezyra.studio); the
brand, videos, posters and copy are Glocal AI Studio's own.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production bundle in dist/
npm run preview    # serve the production bundle
npm run lint       # oxlint
```

## Project structure

```
public/
  video/           self-hosted H.264 renditions of every reference clip (see "Media" below)
  posters/         poster frames extracted from the clips: <id>.webp (1280px) and <id>-hero.webp (1920px)
  fonts/           EB Garamond + DM Sans (woff2)
  glocal-logo.png  full logo (wordmark + "AI Studio"); glocal-wordmark.png is the wordmark alone (navbar)
  favicon.*        the gold play-button mark, plus apple-touch-icon.png and og-image.jpg
src/
  main.jsx         entry: BrowserRouter + global styles
  App.jsx          layout shell (progress bar, cursor, navbar, routes, footer)
  styles/          index.css (Tailwind theme, base + component layers, keyframes), fonts.css (@font-face)
  data/            all page content as plain JS: projects, services, blog posts, timeline, partners, FAQs, site constants
  lib/             small hooks/utilities: media.js (video/poster URL builders), calendly.js, analytics.js (no-op),
                   motion.js (shared easing/variants), useIsMobile, usePageMeta
  components/
    layout/        Navbar (menu drawer), Footer, PageChrome (progress bar + page fade), ScrollToTop
    ui/            LazyVideo, CategoryMarquee, Motion helpers, FAQAccordion, CTASection, CalendlyLink,
                   ShareButtons, FillImage, WaveDivider, CustomCursor
    home/          Hero (showreel), category marquee, Manifesto (logo mask), Five Pillars sticky stack,
                   Work rail, Studio FAQ, Get in Touch
    services/      ServicePageTemplate (shared by the five service routes)
    about/         TimelineSection (GSAP ScrollTrigger pin)
  pages/           one file per route
```

## Media

Every clip from the reference folder is used. Sources were 10-bit HEVC (not playable in browsers), so each
one was transcoded to two H.264 renditions with ffmpeg:

| File | Use |
| --- | --- |
| `video/<id>-720.mp4` | muted background loops (pillar cards, work rail, manifesto mask) |
| `video/<id>-1080.mp4` | case-study player, with audio |
| `video/showreel-hero.mp4` | muted 1080p cut of the showreel for the homepage hero (phones get `showreel-720.mp4`) |

| Clip | id | Where it appears |
| --- | --- | --- |
| WhatsApp showreel | `showreel` | hero, `/work/showreel`, About, timeline |
| Final Shot 1 | `automotive` | Brand Films pillar, work rail, `/work/automotive` |
| Final Shot 2 | `product-films` | Ad Creatives hero, `/work/product-films` |
| Final Shot 3 | `fashion` | `/work/fashion` |
| Final Shot 4 | `food-and-beverage` | Performance pillar, `/work/food-and-beverage` |
| Final Shot 5 | `architecture` | `/work/architecture` |
| Final Shot 6 | `cinematic-worlds` | AI Native Film pillar, About, `/work/cinematic-worlds` |
| Final Shot 7 | `surreal-vfx` | About hero, `/work/surreal-vfx` |
| Final Shot 8 | `experiential-visuals` | Social pillar, Partners hero, `/work/experiential-visuals` |
| Final Shot 9 | `kinetic-sculpture` | Manifesto logo mask, `/work/kinetic-sculpture` |
| Tata Tea Commercial | `tata-tea` | Brand Films hero, Partners, `/work/tata-tea` |
| 11 | `storytelling` | Micro Drama pillar + hero, `/work/storytelling` |
| anime | `animation` | AI Native Film hero, Partners, `/work/animation` |

`LazyVideo` attaches a clip's `src` only when it is within 400px of the viewport, pauses background loops
while they are off-screen, and shows the poster only when the visitor prefers reduced motion.

## Site constants to confirm

Everything brand-specific lives in `src/data/site.js`:

- `CONTACT_EMAIL` — currently `info@glocalaistudio.com`. Confirm this mailbox exists before launch.
- `CALENDLY_BASE` — empty, so every "Schedule a Call" CTA opens a pre-filled email. Set a booking URL to
  switch the Calendly popup on.
- `SOCIALS` and `LOCATION` — the Glocal RPO LinkedIn/Instagram accounts and "Wilmington, Delaware · India".

## Production notes

- **Code splitting.** The homepage is in the main bundle; every other route is a `React.lazy` chunk
  loaded on first visit (GSAP, used only by the About timeline, ships in that page's chunk).
- **Images.** Everything under `public/` is served as-is. Posters are WebP at quality 80–82.
- **Custom cursor** renders only on devices with a fine pointer (`hover: hover` + `pointer: fine`);
  the layout breakpoint hook reads its media query synchronously, so phones never flash a desktop
  layout on first paint.
- **Touch devices.** Captions that only appear on hover (service-page work tiles) are shown outright
  under `@media (hover: none)` via the `.touch-reveal` class; the Work filter row uses
  `justify-content: safe center` so it stays centred on wide screens but scrolls from the first
  item on phones.
- **Deploying.** `npm run build` writes a static site to `dist/`. It is a single-page app, so the
  host must rewrite unknown paths to `index.html` (Netlify `_redirects`, Vercel `rewrites`, nginx
  `try_files`, etc.) for deep links like `/work/showreel` to work. Serve `public/video` with
  `Accept-Ranges: bytes` (any static host does) so the player can seek.
