/** Narrative blocks shown on each /work/:slug page (Overview → Result). */
export const CASE_STUDIES = {
  showreel: {
    overview:
      'The studio reel: eleven categories of AI-native production cut into seventy-two seconds, from a hypercar on a mountain pass to a samurai at a village gate.',
    challenge:
      'Show range without losing a single standard. Each category had to look like it came from a specialist in that category, not from one generalist pipeline.',
    made: 'A 1080p, 24fps showreel with original sound design, captioned by category, closing on the Glocal AI Studio mark.',
    craft:
      'Every segment was generated, graded and finished in the studio. Camera language changes with the brief: tracking and drone work for automotive, macro and steam for product, hand-held for fashion, slow aerials for live events.',
    result: 'One film that answers the first question every client asks: can AI do this category? Press play.',
  },
  'tata-tea': {
    overview: 'A 40-second commercial for Tata Tea Agni set at a roadside tea stall at sunrise, built around the ritual of the morning cup.',
    challenge:
      'Warmth is the hardest thing to fake. Faces, hands and steam had to read as real people on a real morning, with the pack hero-lit without feeling like an insert.',
    made: 'A complete TVC: establishing wide, the pour from the kettle, the pack in hand, two friends laughing, two elders sharing a cup, and the glass filling in slow motion.',
    craft:
      'Consistent cast and location across fourteen shots, a single warm sunrise grade, and product shots generated from pack references so the branding stays exact in every frame.',
  },
  automotive: {
    overview: 'A launch-style automotive film: one hypercar, one canyon road, ten seconds of pure motion.',
    challenge:
      'Cars expose AI instantly. Panel lines, wheel rotation, reflections on the paint and the way dust lifts off the road all have to hold up at full frame.',
    made: 'Four camera setups cut to a beat: a frontal drive-by, a wheel-level tracking shot, a high aerial on the switchback and a low rear chase into the sun.',
    craft: 'Reference-locked vehicle geometry across every angle, motion-blurred spokes, lens flare and heat haze kept consistent through the sequence.',
  },
  fashion: {
    overview: 'An editorial fashion piece: a black gown moving through sunlit concrete arches.',
    challenge: 'Fabric physics and skin tone under hard sunlight are where generated footage usually breaks. The walk had to feel shot, not animated.',
    made: 'A wide approach down the colonnade, a hand-held detail on the hem, a rear tracking shot and a soft-focus close-up with a warm, slightly lifted grade.',
    craft: 'Hair, dress and shadow stay coherent across cuts; the camera language mirrors a real editorial crew with a gimbal and a long lens.',
  },
  architecture: {
    overview: 'A real-estate walk-through of a hillside residence, from living room to infinity pool.',
    challenge:
      'Architecture demands straight lines, consistent geometry and believable light through glass. Any drift in the room between shots reads as a mistake.',
    made: 'A slow dolly through the lounge, a pass over the timber tables, a reveal of the pool terrace and a return to the room as the sun drops.',
    craft: 'The same floor plan, furniture and mountain horizon held across every angle; sun position and interior reflections kept consistent for a single time of day.',
  },
  storytelling: {
    overview: 'A thirty-second dialogue scene on a rain-soaked railway platform: two people, one approaching train, one unspoken decision.',
    challenge:
      'Micro drama lives or dies on performance. Eyelines, breath, small changes in expression and the timing of a cut have to carry emotion without a word of exposition.',
    made: 'A wide two-shot, over-the-shoulders in both directions, a slow push on each face and the train lights growing in the background.',
    craft: 'Two consistent characters across nine shots, rain and sodium lighting matched throughout, and shallow-focus bokeh used to isolate performance.',
  },
  animation: {
    overview: 'An anime-style opening sequence: a young swordsman, his elder and a boy at a village gate at dusk.',
    challenge: 'Hand-drawn aesthetics need line stability, flat colour fields and deliberate frame timing. Smooth, photoreal motion would have broken the style.',
    made: 'An establishing shot of the lantern-lit street, group portraits, a push on the hero, a close-up on the elder and the katana drawn in the final beat.',
    craft: 'Character designs locked from a single model sheet, painted backgrounds with atmospheric mist, and animation paced on twos to match the reference genre.',
  },
  'cinematic-worlds': {
    overview: 'A world-building piece: an astronaut walking a flooded, abandoned city in the rain.',
    challenge: 'Atmosphere at scale. Fog, rain, wet reflections and crumbling towers all have to agree with each other from a wide shot down to a helmet close-up.',
    made: 'A wide walk-in, a mid shot of the suit against the ruins, a visor close-up with the city reflected in the glass and a rear tracking shot through the water.',
    craft: 'A single environment carried across every angle, volumetric light and rain kept physically consistent, suit details preserved at close range.',
  },
  'surreal-vfx': {
    overview: 'A surreal VFX moment: a humpback whale drifting between Manhattan towers above the traffic.',
    challenge: 'Scale and integration. The whale has to cast light and shadow on real-looking glass, and the camera has to behave like it was actually on the street.',
    made: 'A street-level look-up, a high angle along the avenue, an underside pass beneath the tail and a wide reveal with cabs below.',
    craft: 'Correct parallax between whale, towers and traffic, matched reflections in the glass facades and a consistent overcast key across the sequence.',
  },
  'product-films': {
    overview: 'A luxury product film for a chronograph: macro, steam, water and black stone.',
    challenge: 'Watch dials are unforgiving. Sub-dials, hands and engraved text must stay legible and identical across every pass, at macro distances.',
    made: 'Extreme close-ups sweeping across the dial, a mid shot in drifting steam and a slow pull-back to the full watch on wet stone.',
    craft: 'Dial geometry and brand marks locked from reference, realistic specular highlights on brushed steel, and a cold monochrome grade.',
  },
  'food-and-beverage': {
    overview: 'A beverage launch film: a chilled black can, condensation, ice and a slow-motion splash.',
    challenge: 'Liquid simulation is the hardest thing to generate convincingly. Droplets, splash shapes and refracted ice had to look like a high-speed camera shot.',
    made: 'A macro on beading condensation, a mid shot through ice, and two hero splashes with the can locked in the centre of frame.',
    craft: 'Can geometry and label kept rigid while water and ice move, a cool blue key light throughout, and splashes timed for a 15-second cut-down.',
  },
  'experiential-visuals': {
    overview: 'Event visuals for a festival mainstage: crowd, LED cathedral, pyro and a slow aerial reveal.',
    challenge:
      'Thousands of people, screens full of content and fireworks in one frame. Crowd motion and screen content both need to feel alive without turning to noise.',
    made: 'Crowd silhouettes with phones raised, the stage structure firing pyro, a sweeping aerial of the full arena and a rain of confetti over the audience.',
    craft: 'Screen content generated as its own layer, crowd density kept consistent across angles, and pyro and lighting matched to a single night-time look.',
  },
  'kinetic-sculpture': {
    overview: 'An abstract 3D ident: a brushed-steel Möbius form turning in a concrete gallery.',
    challenge: 'Idents and backgrounds need a perfect loop and clean reflections. Any seam or flicker shows on every screen it plays on.',
    made: 'A macro on the brushed surface, a mid shot of the form rotating in a shaft of light and a wide of the sculpture resting on polished concrete.',
    craft: 'Seamless rotation cycle, physically consistent metal shading and a monochrome palette so it sits behind any brand colour.',
  },
}

/** Which service each work category links to from the case-study page. */
export const CATEGORY_SERVICE = {
  Showreel: { href: '/services', label: 'five studios' },
  'AI Native Film': { href: '/ott-production', label: 'AI native film production' },
  'Brand Film': { href: '/ai-brand-films', label: 'AI brand film production' },
  'Micro Drama': { href: '/micro-drama-production', label: 'micro-drama production' },
  'Ad Creative': { href: '/ai-ad-creatives', label: 'AI ad creatives' },
  Social: { href: '/social-media-content', label: 'social content production' },
}

/** Per-project service overrides (none needed for the current catalogue). */
export const CATEGORY_OVERRIDE = {}
