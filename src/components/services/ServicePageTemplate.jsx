import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BarChart2,
  Calendar,
  Captions,
  Clapperboard,
  Download,
  Film,
  Globe,
  Image,
  Languages,
  LayoutGrid,
  Layers,
  MessageSquare,
  Music,
  RefreshCw,
  Scissors,
  Share2,
  Smartphone,
  Sparkles,
  Subtitles,
  Type,
  Video,
} from 'lucide-react'

/** Icons referenced by name in the service data. */
const Icons = {
  BarChart2,
  Calendar,
  Captions,
  Clapperboard,
  Download,
  Film,
  Globe,
  Image,
  Languages,
  LayoutGrid,
  Layers,
  MessageSquare,
  Music,
  RefreshCw,
  Scissors,
  Share2,
  Smartphone,
  Sparkles,
  Subtitles,
  Type,
  Video,
}
import { SERVICES, SERVICE_FEATURED_WORK } from '../../data/services'
import { PROJECTS } from '../../data/projects'
import { FadeInUp, StaggerContainer, StaggerItem, TextReveal, RevealUp, Magnetic } from '../ui/Motion'
import { staggerItemVariants } from '../../lib/motion'
import CalendlyLink from '../ui/CalendlyLink'
import FillImage from '../ui/FillImage'
import WaveDivider from '../ui/WaveDivider'
import FAQAccordion from '../ui/FAQAccordion'
import CTASection from '../ui/CTASection'

/** Resolves a lucide icon by its name from the service data. */
function DeliverableIcon({ name }) {
  const Icon = Icons[name] ?? Icons.Sparkles
  return <Icon size={18} strokeWidth={1.5} />
}

function Hero({ service }) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-bg-primary">
      <FillImage src={service.heroImage} alt={service.title} priority className="object-cover" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.3) 55%, rgba(8,8,8,0.08) 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }} />
      <div className="absolute bottom-8 right-8 md:right-12 z-20 hidden md:block">
        <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '28px', color: 'rgba(242,228,194,0.5)', fontStyle: 'italic', letterSpacing: '0.02em' }}>
          #{service.slug}
        </span>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <FadeInUp className="mb-8">
          <nav className="flex items-center gap-2 font-body text-xs text-white/25">
            <Link to="/" className="hover:text-white/50 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white/50 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/50">{service.title}</span>
          </nav>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <span className="section-label-light block mb-6">{service.label}</span>
        </FadeInUp>
        <h1 style={{ display: 'contents' }} aria-label={service.title}>
          <TextReveal text={service.title} className="font-display font-bold text-display text-white tracking-[-0.025em] leading-[0.95] mb-6" delay={0.2} stagger={0.07} />
        </h1>
        <RevealUp delay={0.6} className="mb-10">
          <p className="font-display italic text-white/40 text-xl md:text-2xl max-w-xl">{service.subtitle}</p>
        </RevealUp>
        <FadeInUp delay={0.8}>
          <Magnetic>
            <CalendlyLink
              ctaLocation="service_template"
              className="inline-flex items-center gap-3 bg-white text-[#3B2A12] font-body font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-white/90 transition-colors duration-300"
            >
              Schedule a Call <ArrowUpRight size={13} />
            </CalendlyLink>
          </Magnetic>
        </FadeInUp>
      </div>
    </section>
  )
}

function Stats({ service }) {
  const twoStats = service.stats.length >= 2
  return (
    <>
      <WaveDivider from="#080808" to="#F5F4F0" />
      <section className="bg-[#F5F4F0] py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-none select-none overflow-hidden">
          <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(200px, 30vw, 380px)', color: 'rgba(59,42,18,0.04)', lineHeight: 1, fontWeight: 700 }}>
            {service.stats[0]?.value}
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <FadeInUp>
              <div className="flex flex-col gap-8">
                <span className="font-body text-[#3B2A12]/30 text-xs uppercase tracking-[0.22em]">{service.statsHeadline}</span>
                <div className={twoStats ? 'grid grid-cols-2 gap-8' : 'flex flex-col gap-2'}>
                  {service.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="font-display font-bold text-[#3B2A12] leading-none tracking-[-0.03em] block" style={{ fontSize: twoStats ? 'clamp(52px, 7vw, 96px)' : 'clamp(72px, 10vw, 130px)' }}>
                        {stat.value}
                      </span>
                      <p className="font-body text-[#3B2A12]/40 text-xs uppercase tracking-[0.18em] mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-[#080808]/10 w-24" />
              </div>
            </FadeInUp>
            <div className="flex flex-col gap-6 lg:pt-16">
              {service.problemBody.map((text, i) => (
                <FadeInUp key={i} delay={0.1 + 0.1 * i}>
                  <p className={`font-body leading-[1.9] text-base md:text-lg ${i === 0 ? 'text-[#3B2A12]/70' : 'text-[#3B2A12]/40'}`}>{text}</p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FeaturedWork({ service }) {
  const slugs = SERVICE_FEATURED_WORK[service.slug] ?? []
  const items = PROJECTS.filter((p) => slugs.includes(p.slug))
  if (items.length === 0) return null
  const [lead, ...rest] = items
  const side = rest.slice(0, 2)

  return (
    <>
      <WaveDivider from="#F5F4F0" to="#080808" />
      <section className="bg-[#080808] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-baseline justify-between mb-8 pb-5 border-b border-white/[0.06]">
            <div className="flex items-baseline gap-4">
              <span className="font-display font-bold text-white/[0.05] select-none leading-none" style={{ fontSize: 'clamp(56px, 7vw, 88px)' }} aria-hidden>
                {String(items.length).padStart(2, '0')}
              </span>
              <span className="font-body text-white/25 text-xs uppercase tracking-[0.28em]">Selected Work</span>
            </div>
            <Link to="/work" className="font-body text-white/30 text-xs uppercase tracking-[0.18em] hover:text-white transition-colors duration-200 flex items-center gap-2 cursor-pointer">
              View All <ArrowUpRight size={11} />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-1 md:gap-[3px] md:h-[580px]">
            {lead && (
              <Link to={`/work/${lead.slug}`} className="group relative overflow-hidden cursor-pointer block aspect-video md:aspect-auto md:[flex:0_0_58%]">
                <FillImage src={lead.poster} alt={lead.title} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.25) 45%, transparent 70%)' }} />
                <div className="absolute top-5 left-5">
                  <span className="font-body text-white/55 text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 bg-black/50 backdrop-blur-sm">{lead.category}</span>
                </div>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-[#3B2A12]" />
                  </div>
                </div>
                <span className="absolute bottom-5 right-6 font-display font-bold text-white/[0.06] select-none leading-none" style={{ fontSize: '100px' }} aria-hidden>
                  01
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-7">
                  <p className="font-body text-white/40 text-[10px] uppercase tracking-[0.24em] mb-2">{lead.client}</p>
                  <p className="font-display font-bold text-white tracking-[-0.025em] leading-[1.05]" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
                    {lead.title}
                  </p>
                </div>
              </Link>
            )}
            {side.length > 0 && (
              <div className="flex flex-row md:flex-col gap-1 md:gap-[3px] md:flex-1">
                {side.map((p, i) => (
                  <Link key={p.slug} to={`/work/${p.slug}`} className="group relative overflow-hidden flex-1 cursor-pointer block aspect-video md:aspect-auto">
                    <FillImage src={p.poster} alt={p.title} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-black/55 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="touch-reveal absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88), transparent)' }} />
                    <div className="absolute top-4 left-4">
                      <span className="font-body text-white/45 text-[8px] uppercase tracking-[0.22em] px-2 py-0.5 bg-black/40 backdrop-blur-sm">{p.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-7 h-7 bg-white flex items-center justify-center">
                        <ArrowUpRight size={10} className="text-[#3B2A12]" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-4 font-display font-bold text-white/[0.06] select-none leading-none" style={{ fontSize: '68px' }} aria-hidden>
                      {String(i + 2).padStart(2, '0')}
                    </span>
                    <div className="touch-reveal absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-350">
                      <p className="font-body text-white/45 text-[9px] uppercase tracking-[0.2em] mb-1">{p.client}</p>
                      <p className="font-display font-bold text-white text-base tracking-[-0.015em]">{p.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Deliverables({ service }) {
  return (
    <>
      <WaveDivider from="#080808" to="#F5F4F0" />
      <section className="bg-[#F5F4F0] py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp className="mb-16">
            <span className="font-body text-[#3B2A12]/30 text-xs uppercase tracking-[0.22em] block mb-4">What You Get</span>
            <h2 className="font-display font-bold text-[#3B2A12] tracking-[-0.025em] leading-[0.95]" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
              Everything
              <br />
              <span className="text-[#3B2A12]/20 italic">included.</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#080808]/10">
            {service.deliverables.map((d, i) => (
              <StaggerItem key={i} variants={staggerItemVariants}>
                <div className="py-7 grid grid-cols-[48px_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start group cursor-default">
                  <span className="font-display font-bold text-[#3B2A12]/15 text-3xl md:text-4xl leading-none mt-1 group-hover:text-[#3B2A12]/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[#3B2A12] text-lg md:text-xl mb-1 tracking-[-0.01em]">{d.title}</h3>
                    <p className="font-body text-[#3B2A12]/50 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                  <div className="text-[#3B2A12]/20 group-hover:text-[#3B2A12]/50 transition-colors duration-300 mt-1">
                    <DeliverableIcon name={d.icon} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}

function Process({ service }) {
  return (
    <>
      <WaveDivider from="#F5F4F0" to="#080808" />
      <section className="bg-bg-primary py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <FadeInUp className="lg:sticky lg:top-32 lg:self-start">
              <span className="font-body text-white/20 text-xs uppercase tracking-[0.22em] block mb-6">How It Works</span>
              <h2 className="font-display font-bold text-white tracking-[-0.025em] leading-[1.05] mb-4" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Our process.
              </h2>
              <p className="font-body text-white/35 text-base leading-relaxed max-w-xs">No surprises. No runaway timelines. Just a clear path from brief to delivery.</p>
            </FadeInUp>
            <div className="flex flex-col">
              {service.process.map((step, i) => (
                <FadeInUp key={step.num} delay={0.1 * i}>
                  <div className="group flex gap-8 pb-12 border-b border-white/[0.06] mb-12 last:border-0 last:pb-0 last:mb-0">
                    <span className="font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300 flex-shrink-0" style={{ fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1 }}>
                      {step.num}
                    </span>
                    <div className="pt-2">
                      <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 tracking-[-0.01em]">{step.title}</h3>
                      <p className="font-body text-white/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Faqs({ service }) {
  if (!service.faqs?.length) return null
  return (
    <section className="bg-bg-primary py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <FadeInUp>
          <span className="font-body text-white/20 text-xs uppercase tracking-[0.22em] block mb-6">Frequently Asked</span>
          <h2 className="font-display font-bold text-white tracking-[-0.025em] leading-[1.05] mb-10" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            Questions, answered.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <FAQAccordion items={service.faqs} />
        </FadeInUp>
      </div>
    </section>
  )
}

function RelatedServices({ slugs }) {
  const related = slugs.map((s) => SERVICES.find((x) => x.slug === s)).filter(Boolean)
  return (
    <section className="bg-bg-primary py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-14">
          <span className="accent-line" />
          <span className="section-label block mb-5">Other Services</span>
          <h2 className="font-display font-bold text-white tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}>
            Explore the studio.
          </h2>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
          {related.map((s) => (
            <StaggerItem key={s.slug} variants={staggerItemVariants}>
              <Link
                to={`/${s.slug}`}
                className="group block bg-bg-secondary p-8 md:p-10 hover:bg-white/[0.03] transition-colors duration-300 min-h-[220px] flex flex-col justify-between border border-transparent hover:border-white/10"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="section-label">{s.label}</span>
                  <ArrowUpRight size={16} strokeWidth={1.5} className="text-white/20 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-[1.1] tracking-[-0.01em] mb-3 group-hover:text-white/80 transition-colors duration-300">{s.title}</h3>
                  <p className="font-body text-white/30 text-sm leading-relaxed line-clamp-2">{s.subtitle}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/** Page body for every service detail route. */
export default function ServicePageTemplate({ service }) {
  return (
    <>
      <Hero service={service} />
      <Stats service={service} />
      <FeaturedWork service={service} />
      <Deliverables service={service} />
      <Process service={service} />
      <Faqs service={service} />
      <RelatedServices slugs={service.relatedSlugs} />
      <WaveDivider from="#080808" to="#F5F4F0" />
      <CTASection />
    </>
  )
}
