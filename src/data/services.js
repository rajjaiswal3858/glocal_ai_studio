/** The five service pillars shown on the homepage sticky stack. */
export const PILLARS = [
  {
    id: 'ott-production',
    label: '01 — Originals',
    title: 'Cinematic Worlds',
    desc: 'Series, films and streaming originals imagined end to end with AI. Big-screen scale, without the big-studio wait.',
    href: '/ott-production',
    video: 'cinematic-worlds',
  },
  {
    id: 'brand-films',
    label: '02 — Brand',
    title: 'Signature Brand Films',
    desc: 'Hero films and commercials that move at the speed of culture. Human-directed, AI-crafted, delivered in 5–7 days.',
    href: '/ai-brand-films',
    video: 'automotive',
  },
  {
    id: 'micro-drama',
    label: '03 — Episodic',
    title: 'Snackable Stories',
    desc: 'Bite-sized, binge-worthy dramas built for the vertical screen. Every episode ends on a hook.',
    href: '/micro-drama-production',
    video: 'storytelling',
  },
  {
    id: 'ad-creatives',
    label: '04 — Performance',
    title: 'Scroll-Stopping Ads',
    desc: '50+ creative variants per campaign, each with its own hook. Built by AI, approved by people, tuned for ROAS.',
    href: '/ai-ad-creatives',
    video: 'food-and-beverage',
  },
  {
    id: 'social-content',
    label: '05 — Social',
    title: 'Always-On Social',
    desc: 'A content engine that never sleeps. 20+ fresh pieces every week across Reels, Shorts and LinkedIn.',
    href: '/social-media-content',
    video: 'experiential-visuals',
  },
]

/** Full content for each /<service> page, rendered by ServicePageTemplate. */
export const SERVICES = [
  {
    slug: 'ott-production',
    label: 'Service 01',
    title: 'AI Native Film Production',
    subtitle: 'Full-length series, films, and specials built for streaming platforms.',
    heroImage: '/posters/animation-hero.webp',
    metaTitle: 'AI Native Film Production — Series & Films | Glocal AI Studio',
    metaDesc:
      'Full-length AI-native series, films & specials for streaming platforms. Glocal AI Studio builds cinematic long-form for global brands.',
    statsHeadline: 'We deliver',
    stats: [
      { value: '4K', label: 'Cinematic Masters' },
      { value: '3–8', label: 'Episodes per Series' },
    ],
    problemStat: '₹2Cr+',
    problemStatLabel: 'Typical OTT series production cost',
    problemBody: [
      'Getting a series or film onto an OTT platform has always required studio-scale budgets - pre-production alone can run for months before a single frame is shot.',
      'Our AI-accelerated pipeline compresses development, production, and post into a single continuous workflow - without sacrificing the cinematic quality streaming audiences expect.',
      'The result: series-ready content at a fraction of traditional cost, delivered on timelines that actually match the pace of streaming culture.',
    ],
    deliverables: [
      { icon: 'Clapperboard', title: 'Feature / Series Production', desc: 'Full-length films or multi-episode series, streaming-spec ready.' },
      { icon: 'Film', title: '4K Cinematic Master', desc: 'Colour-graded, platform-compliant 4K delivery files.' },
      { icon: 'Music', title: 'Original Score & Sound', desc: 'Custom soundtrack composed and mixed for the project.' },
      { icon: 'Languages', title: 'Multilingual Audio & Subs', desc: 'Dubbed and subtitled versions for Hindi, English, Tamil, Telugu.' },
      { icon: 'Globe', title: 'Platform Submission Pack', desc: 'Spec-compliant exports for JioCinema, MX, Amazon, Netflix, YouTube.' },
      { icon: 'BarChart2', title: 'Trailer & Promo Package', desc: 'Theatrical trailer, teaser, and social promo cuts for launch.' },
    ],
    process: [
      { num: '01', title: 'Development & Greenlight', desc: 'Story, script, lookbook, and production plan. We go into production with a fully approved creative blueprint.' },
      { num: '02', title: 'Pre-Production', desc: 'AI-assisted visual development, storyboarding, casting brief, location design, and shoot schedule - compressed to days, not months.' },
      { num: '03', title: 'Production Sprint', desc: 'AI-accelerated principal production with human creative oversight at every stage.' },
      { num: '04', title: 'Post & Finishing', desc: 'Edit, VFX, colour grade, sound design, music, and delivery master - handled in a single integrated pipeline.' },
      { num: '05', title: 'Platform Delivery', desc: 'All platform-spec exports, trailers, stills, and metadata delivered with a launch-ready press package.' },
    ],
    faqs: [
      { q: 'What types of OTT content do you produce?', a: 'Feature films, limited series (3–8 episodes), docudramas, branded entertainment specials, and YouTube originals.' },
      { q: 'Which streaming platforms do you deliver to?', a: 'JioCinema, MX Player, Amazon Prime Video, Netflix, Disney+ Hotstar, YouTube Originals, and Sony LIV. We handle all platform-spec compliance.' },
      { q: 'How is AI used in OTT production?', a: 'AI accelerates visual development, scene generation, background compositing, and post-production - while human directors maintain creative control at every stage.' },
      { q: 'What is the typical production timeline for a series?', a: 'A 4-episode series typically runs 8–10 weeks from brief to delivery. A feature film runs 6–8 weeks.' },
      { q: 'Can branded content be produced for OTT platforms?', a: 'Yes. We specialise in branded entertainment where the commercial objective is woven into the narrative - not placed on top of it.' },
    ],
    relatedSlugs: ['ai-brand-films', 'micro-drama-production', 'social-media-content'],
  },
  {
    slug: 'ai-brand-films',
    label: 'Service 02',
    title: 'AI Brand Films & Commercials',
    subtitle: 'Cinematic brand stories at the speed of culture. Five to seven day delivery.',
    heroImage: '/posters/tata-tea-hero.webp',
    metaTitle: 'AI Brand Film Production — 5–7 Day Delivery | Glocal AI Studio',
    metaDesc:
      'OTT-quality brand films & commercials, AI-accelerated, delivered in 5–7 days. Glocal AI Studio, built for global brands.',
    statsHeadline: 'Brief to master in',
    stats: [{ value: '5–7', label: 'Days, Every Brand Film' }],
    problemStat: '3 Months',
    problemStatLabel: 'Traditional production timeline',
    problemBody: [
      'Most brands wait 3 months and spend ₹30–80L for a single brand film - before a single frame is approved. By the time it airs, the cultural moment has passed.',
      'AI production changes the equation entirely. We compress pre-production, concept visualisation, and post into a single, fast-moving pipeline.',
      'The result: cinematic storytelling at a fraction of the cost and a fraction of the time. Without the compromise.',
    ],
    deliverables: [
      { icon: 'Film', title: '60–90s Hero Film', desc: 'Full cinematic brand narrative, broadcast-ready.' },
      { icon: 'Scissors', title: 'Cut-downs (15s / 30s)', desc: 'Social and pre-roll edits from the hero film.' },
      { icon: 'Globe', title: 'Eye-Balls Ready Video', desc: 'Colour-graded 4K delivery for streaming platforms.' },
      { icon: 'Languages', title: 'Multilingual Versions', desc: 'Hindi, Tamil, Telugu, English - same quality, every version.' },
      { icon: 'Subtitles', title: 'Subtitle & Caption Pack', desc: 'Burnt-in and SRT for accessibility and social.' },
      { icon: 'BarChart2', title: 'A/B Creative Variants', desc: 'Two alternate cut approaches to test performance.' },
    ],
    process: [
      { num: '01', title: 'Brief & Discovery', desc: 'One structured session to extract brand truth, audience insight, and campaign objective. We leave with everything we need.' },
      { num: '02', title: 'Concept & Storyboard', desc: 'Three distinct creative directions. Full AI-visualised storyboard. You pick one, or we hybridise.' },
      { num: '03', title: 'Production', desc: 'AI-assisted generation, voiceover recording, music composition, and VFX in a single accelerated pipeline.' },
      { num: '04', title: 'Review & Refinement', desc: 'Two structured rounds of feedback. No runaway revisions. Clear, fast, decisive.' },
      { num: '05', title: 'Delivery', desc: 'All formats, all platforms, all resolutions. Delivered day 5-7.' },
    ],
    faqs: [
      { q: 'How is AI brand film production different from traditional production?', a: 'AI production compresses 3-month traditional timelines into 5-7 days by automating concept visualisation, scene generation, and post-production workflows - while maintaining cinematic quality.' },
      { q: 'Do the films look "AI-generated"?', a: 'No. Our pipeline combines AI generation with human creative direction, colour grading, voiceover, and music to produce films indistinguishable from traditional production.' },
      { q: 'What is included in the 5-7 day delivery?', a: 'Hero film (60–90s), 15s and 30s cut-downs, OTT-ready 4K master, two language versions, subtitle pack, and two A/B variants.' },
      { q: 'Can you match our existing brand guidelines?', a: 'Yes. We conduct a brand immersion session before production begins. Every frame is aligned to your visual identity, tone, and positioning.' },
      { q: 'What is the typical investment for an AI brand film?', a: 'Projects typically start at ₹2–8L - 80–90% less than traditional production - with the same output quality.' },
    ],
    relatedSlugs: ['ott-production', 'micro-drama-production', 'ai-ad-creatives'],
  },
  {
    slug: 'micro-drama-production',
    label: 'Service 03',
    title: 'AI Video Creation',
    subtitle: 'Cinematic video, crafted by AI. Directed by people.',
    heroImage: '/posters/storytelling-hero.webp',
    metaTitle: 'Micro-Drama Production — Vertical Series | Glocal AI Studio',
    metaDesc:
      'Mobile-first episodic micro-dramas for brands & OTT. 3–7 min episodes, serial storytelling, AI-accelerated. Built for global brands by Glocal AI Studio.',
    statsHeadline: 'We produce',
    stats: [{ value: '5', label: 'Episodes in About Five Days' }],
    problemStat: '$10B',
    problemStatLabel: 'India short-drama market by 2028',
    problemBody: [
      'Short-form serialised drama is the fastest-growing content format in India. Platforms like MX TakaTak, Josh, and Instagram are actively hungry for episodic content.',
      'But traditional drama production is prohibitively expensive for most brands and indie creators. A single 5-episode series can cost ₹1–2Cr.',
      'Our AI-accelerated pipeline makes episodic micro drama accessible - 5 episodes, 3–7 minutes each, cinematic quality, delivered in about five days.',
    ],
    deliverables: [
      { icon: 'Clapperboard', title: '5-Episode Series', desc: '3–7 minute episodes, complete narrative arc.' },
      { icon: 'Smartphone', title: 'Mobile-First Format', desc: '9:16 primary cut, optimised for Reels, Shorts, TakaTak.' },
      { icon: 'Music', title: 'Original Score', desc: 'Custom music per episode - theme + scene cues.' },
      { icon: 'Captions', title: 'Episodic Title Cards', desc: 'Branded chapter titles, recap cards, cliffhanger frames.' },
      { icon: 'Share2', title: 'Social Trailer Pack', desc: '15s and 30s episode teasers for pre-release distribution.' },
      { icon: 'Download', title: 'Platform-Ready Masters', desc: 'Spec-compliant exports for MX, JioCinema, YouTube, Instagram.' },
    ],
    process: [
      { num: '01', title: 'Story Development', desc: 'Character arcs, episode breakdowns, brand integration brief. The creative foundation everything else is built on.' },
      { num: '02', title: 'Script & Storyboard', desc: 'Full episode scripts with shot-by-shot AI storyboard. Approved before a single frame is rendered.' },
      { num: '03', title: 'Production Sprint', desc: 'All 5 episodes produced in parallel using our AI pipeline. Voiceover, music, and VFX in one continuous flow.' },
      { num: '04', title: 'Series Assembly', desc: 'Edit, colour grade, sound mix. Each episode reviewed and refined with one round of changes.' },
      { num: '05', title: 'Launch Package', desc: 'All platform masters, trailers, social assets, and a release calendar. Ready to publish.' },
    ],
    faqs: [
      { q: 'What is a micro drama?', a: 'A micro drama is a serialised fictional story in 3–7 minute episodes, designed for mobile-first consumption. Episodes end on cliffhangers to drive return viewing.' },
      { q: 'Can brands be integrated naturally into the story?', a: 'Yes - we specialise in branded entertainment where the product or message becomes part of the narrative, not an interruption to it.' },
      { q: 'How many episodes are produced in one engagement?', a: 'Our standard package is a 5-episode series. We also produce 3-episode pilots and 10-episode full seasons.' },
      { q: 'What languages do you produce in?', a: 'Hindi, English, Tamil, Telugu, Kannada, Bengali. Multilingual versions of the same series are available.' },
      { q: 'How long does a 5-episode series take to produce?', a: 'From brief to final delivery: about five days - roughly a day per episode. This includes story development, scripting, full production, and post.' },
    ],
    relatedSlugs: ['ott-production', 'ai-brand-films', 'ai-ad-creatives'],
  },
  {
    slug: 'ai-ad-creatives',
    label: 'Service 04',
    title: 'Performance Marketing Ads',
    subtitle: '50+ variants per campaign. AI-powered. Human-approved.',
    heroImage: '/posters/product-films-hero.webp',
    metaTitle: 'AI Performance Ad Creatives — Variants Weekly | Glocal AI Studio',
    metaDesc:
      'Scale paid-media creative: multiple video & static ad variants per week for Meta, Google & programmatic. Glocal AI Studio, built for global brands.',
    statsHeadline: 'We produce',
    stats: [
      { value: '50+', label: 'Variants per Campaign' },
      { value: '7', label: 'Days per Sprint' },
    ],
    problemStat: '40%',
    problemStatLabel: 'Average CPA reduction on month one',
    problemBody: [
      'Creative is the largest controllable variable in performance marketing. Yet most brands run 3–5 ad variants and wonder why CPA stays flat.',
      'The winning formula is creative volume combined with structured variation - different hooks, formats, aspect ratios, and copy treatments - tested simultaneously.',
      'Our AI pipeline produces 50+ variants in a week. Your media team gets more data, faster learnings, and a CPA that moves.',
    ],
    deliverables: [
      { icon: 'Video', title: 'Video Ads (6s / 15s / 30s)', desc: 'Hook-first video creatives with multiple format cuts.' },
      { icon: 'Image', title: 'Static Display Ads', desc: 'Full-bleed statics across all IAB standard sizes.' },
      { icon: 'LayoutGrid', title: 'Carousel Sequences', desc: 'Product-led carousel ads for Meta and Google.' },
      { icon: 'Type', title: 'UGC-Style Variations', desc: 'Lo-fi, authentic-feeling creatives designed to bypass ad fatigue.' },
      { icon: 'RefreshCw', title: 'Refresh Packs', desc: 'Monthly creative refresh to prevent audience fatigue.' },
      { icon: 'BarChart2', title: 'Naming & Taxonomy System', desc: 'Structured naming so your team knows exactly what to test.' },
    ],
    process: [
      { num: '01', title: 'Creative Brief Intake', desc: 'Audience, objective, platform, budget, and winning creative benchmarks. We go into production with full context.' },
      { num: '02', title: 'Hook Matrix', desc: 'We map 10+ hooks across pain/gain/fear/social proof. Every variant starts with a different hook.' },
      { num: '03', title: 'AI Production Sprint', desc: 'All 50+ variants produced across video, static, and carousel formats in parallel.' },
      { num: '04', title: 'Quality Pass', desc: 'Human review of every creative. Brand safety, messaging accuracy, and platform compliance checked.' },
      { num: '05', title: 'Delivery & Taxonomy', desc: 'Organised delivery with naming convention, platform specs, and recommended test structure.' },
    ],
    faqs: [
      { q: 'How do you ensure 50+ variants without sacrificing quality?', a: 'Our AI pipeline handles production at scale while human creative directors review every asset before delivery. Volume and quality are not in conflict here.' },
      { q: 'Which platforms do you optimise for?', a: 'Meta (Facebook + Instagram), Google (Display + YouTube), Programmatic (DV360), and Snapchat. Platform-specific specs applied to every creative.' },
      { q: 'How quickly will we see CPA improvement?', a: 'Most clients see measurable CPA reduction within 30 days of deploying the first batch - typically 25–45% improvement on their control creative.' },
      { q: 'Do you handle copy, or just visuals?', a: 'Both. Every creative includes headline, body copy, and CTA copy written for the specific hook and audience segment.' },
      { q: 'Can we get monthly creative refreshes?', a: 'Yes. We offer monthly retainer packages that deliver a fresh batch of 20–30 variants each month to prevent audience fatigue.' },
    ],
    relatedSlugs: ['ai-brand-films', 'social-media-content', 'micro-drama-production'],
  },
  {
    slug: 'social-media-content',
    label: 'Service 05',
    title: 'Social Media Content',
    subtitle: '20+ pieces per week. Always on. Always sharp.',
    heroImage: '/posters/experiential-visuals-hero.webp',
    metaTitle: 'Social Content Production — 20+ Pieces/Week | Glocal AI Studio',
    metaDesc:
      'An always-on social engine — 20+ pieces/week across Instagram, YouTube Shorts & LinkedIn. Reels, carousels & stories for global brands.',
    statsHeadline: 'We deliver',
    stats: [{ value: '20+', label: 'Pieces Every Week' }],
    problemStat: '20+',
    problemStatLabel: 'Content pieces delivered per week',
    problemBody: [
      'Social media rewards consistency above everything else. Brands that publish 15–20 pieces per week see 3× the organic reach of brands publishing 3–5.',
      'But producing that volume at quality is a full-time job. Most brand teams are under-resourced and end up with an inconsistent feed that loses algorithmic favour.',
      'We act as your always-on content engine - strategy, production, and delivery - so your team can focus on brand decisions, not content operations.',
    ],
    deliverables: [
      { icon: 'Film', title: 'Reels & Short-Form Video', desc: '6–60s vertical video for Instagram, YouTube Shorts, TakaTak.' },
      { icon: 'LayoutGrid', title: 'Carousels & EDU Posts', desc: 'Swipeable carousels for product, tips, and thought leadership.' },
      { icon: 'Image', title: 'Static Feed Posts', desc: 'On-brand static posts for feed curation and announcements.' },
      { icon: 'Layers', title: 'Story Templates', desc: '24-hour story sequences - polls, countdowns, product reveals.' },
      { icon: 'MessageSquare', title: 'Caption & Copy Library', desc: 'Hook-led captions, hashtag sets, and CTA copy for every post.' },
      { icon: 'Calendar', title: 'Weekly Content Calendar', desc: 'Structured posting schedule aligned to campaign moments.' },
    ],
    process: [
      { num: '01', title: 'Brand & Audience Audit', desc: 'We analyse your existing content performance, competitor benchmarks, and audience behaviour patterns before writing a single brief.' },
      { num: '02', title: 'Monthly Content Strategy', desc: 'Themes, campaigns, and a content mix mapped to your business calendar and platform algorithms.' },
      { num: '03', title: 'Weekly Production Sprint', desc: '20+ pieces produced each week - video, static, carousels - ahead of schedule so your team can review without pressure.' },
      { num: '04', title: 'Approval & Scheduling', desc: 'You approve via a shared review board. We handle scheduling and platform publishing.' },
      { num: '05', title: 'Monthly Performance Review', desc: "Data-led review of what worked. The next month's strategy adapts based on performance." },
    ],
    faqs: [
      { q: 'What does "20+ pieces per week" include?', a: 'A typical weekly delivery includes 4–6 Reels, 3–4 carousels, 3–4 static posts, and 5–7 story frames. The exact mix is aligned to your platform strategy.' },
      { q: 'Do you handle publishing, or just production?', a: 'Both options are available. We can deliver assets for your team to publish, or manage end-to-end scheduling and publishing via a shared content calendar tool.' },
      { q: 'Can you match our existing brand aesthetic?', a: 'Yes. We begin with a brand immersion - your guidelines, tone of voice, and content reference - before any production begins.' },
      { q: 'What platforms do you cover?', a: 'Instagram (Feed, Reels, Stories), YouTube Shorts, LinkedIn, and X (Twitter). Pinterest and Snapchat available on request.' },
      { q: 'Is there a minimum commitment period?', a: 'Our standard engagement is 3 months, which allows enough time to build a content rhythm and see measurable algorithm growth.' },
    ],
    relatedSlugs: ['ott-production', 'ai-brand-films', 'micro-drama-production'],
  },
]

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug)
}

/** Case studies featured in the "Selected Work" block of each service page. */
export const SERVICE_FEATURED_WORK = {
  'ott-production': ['animation', 'cinematic-worlds', 'surreal-vfx'],
  'ai-brand-films': ['tata-tea', 'automotive', 'fashion'],
  'micro-drama-production': ['storytelling', 'animation', 'cinematic-worlds'],
  'ai-ad-creatives': ['product-films', 'food-and-beverage', 'automotive'],
  'social-media-content': ['experiential-visuals', 'kinetic-sculpture', 'food-and-beverage'],
}

/** Copy for the /services overview page. */
export const SERVICES_PAGE_QA = [
  {
    q: 'Which Glocal AI Studio service fits your brief?',
    a: 'Start from the outcome. A single cinematic story for brand-level positioning is a brand film. A serialised story for mobile audiences is micro drama. High-volume creative for paid media is performance ads. An always-on channel presence is social content. Long-form work for streaming platforms is film production.',
  },
  {
    q: 'What is included in every engagement?',
    a: 'The full pipeline: brief intake, creative strategy, scripting, storyboard, visual development, production, sound design, colour grade, and delivery in the formats your channels need. You brief once. There is no separate creative agency, production house and post facility to coordinate between.',
  },
  {
    q: 'How fast can Glocal AI Studio deliver?',
    a: 'Vertical and social formats turn around in about a day. A full brand film ships in 5 to 7 days from approved brief to final master. A five-episode micro drama series takes roughly five days, about a day per episode. Long-form film and series work is scoped per project.',
  },
  {
    q: 'Can we combine more than one service?',
    a: 'Yes, and most clients do. A brand film usually ships alongside the cut-downs and vertical edits that feed paid media, and a micro drama series tends to come with a social rollout. Working across pillars in one engagement costs less than briefing them separately, because the production pass is shared.',
  },
]

export const SERVICES_PAGE_TABLE = [
  { service: 'AI Native Film Production', output: 'Feature or series, 4K cinematic master, original score', timeline: 'Scoped per project' },
  { service: 'AI Brand Films & Commercials', output: '60–90s hero film, 15s and 30s cut-downs, 4K master', timeline: '5–7 days' },
  { service: 'AI Micro Drama Production', output: '5-episode mobile-first series, original score', timeline: 'About 5 days' },
  { service: 'Performance Marketing Ads', output: '50+ video, static and carousel variants', timeline: 'About a week' },
  { service: 'Social Media Content', output: '20+ pieces per week — Reels, carousels, statics, stories', timeline: 'Weekly, ongoing' },
]
