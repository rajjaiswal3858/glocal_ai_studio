import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES, SERVICES_PAGE_QA, SERVICES_PAGE_TABLE } from '../data/services'
import usePageMeta from '../lib/usePageMeta'
import { FadeInUp, StaggerContainer, StaggerItem, TextReveal } from '../components/ui/Motion'
import { staggerItemVariants } from '../lib/motion'
import WaveDivider from '../components/ui/WaveDivider'
import CTASection from '../components/ui/CTASection'

export default function Services() {
  usePageMeta(
    'AI Content Production Services | Glocal AI Studio',
    'Five AI-powered studios under one roof — brand films, OTT, micro dramas, performance ads & social content. Built for global brands.',
  )

  return (
    <>
      <section className="bg-[#F5F4F0] pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <div className="w-8 h-px bg-[#080808]/25 mb-5" />
            <span className="section-label block mb-6">What We Do</span>
          </FadeInUp>
          <h1 style={{ display: 'contents' }} aria-label="Five pillars. One studio.">
            <TextReveal text="Five pillars." className="font-display font-bold text-display tracking-[-0.025em] leading-[0.95]" style={{ color: '#3B2A12' }} stagger={0.08} />
            <TextReveal text="One studio." className="font-display font-bold text-display tracking-[-0.025em] leading-[0.95] italic" style={{ color: 'rgba(59,42,18,0.18)' }} delay={0.2} stagger={0.08} />
          </h1>
          <FadeInUp delay={0.4} className="mt-8 max-w-xl">
            <p className="font-body text-[#3B2A12]/50 text-lg leading-relaxed">
              Each service is a complete production capability, strategy, creative direction, production, and delivery. You brief us once. We handle everything else.
            </p>
          </FadeInUp>
        </div>
      </section>

      <WaveDivider from="#F5F4F0" to="#080808" />

      <section className="bg-[#080808] py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <StaggerContainer className="divide-y divide-white/[0.07]">
            {SERVICES.map((s, i) => (
              <StaggerItem key={s.slug} variants={staggerItemVariants}>
                <Link to={`/${s.slug}`} className="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-12 md:py-16 cursor-pointer">
                  <div className="flex items-start gap-8 md:gap-12">
                    <span className="font-display font-bold text-white/[0.07] text-5xl md:text-6xl leading-none tracking-tight w-16 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.01em] mb-2 group-hover:text-white/55 transition-colors duration-300">{s.title}</h2>
                      <p className="font-body text-white/40 text-base leading-relaxed max-w-lg">{s.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 text-white/25 group-hover:text-white transition-colors duration-300">
                    <span className="font-body text-xs uppercase tracking-[0.2em]">Explore</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#080808] py-24 md:py-32 border-t border-white/[0.07]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <span className="accent-line" />
          <span className="section-label block mb-12">How It Works</span>
          <div className="flex flex-col gap-14">
            {SERVICES_PAGE_QA.map((item) => (
              <div key={item.q}>
                <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.02em] leading-[1.15] mb-5">{item.q}</h2>
                <p className="font-body text-white/60 text-base md:text-lg leading-relaxed max-w-3xl">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Glocal AI Studio service formats, typical deliverables and production timelines</caption>
              <thead>
                <tr className="border-b border-white/[0.12]">
                  <th scope="col" className="font-body text-white/50 text-[11px] uppercase tracking-[0.18em] font-medium pb-4 pr-6">Service</th>
                  <th scope="col" className="font-body text-white/50 text-[11px] uppercase tracking-[0.18em] font-medium pb-4 pr-6">Typical output</th>
                  <th scope="col" className="font-body text-white/50 text-[11px] uppercase tracking-[0.18em] font-medium pb-4">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES_PAGE_TABLE.map((row) => (
                  <tr key={row.service} className="border-b border-white/[0.06]">
                    <th scope="row" className="font-display text-white text-base font-bold py-5 pr-6 align-top">{row.service}</th>
                    <td className="font-body text-white/45 text-sm leading-relaxed py-5 pr-6 align-top">{row.output}</td>
                    <td className="font-body text-white/70 text-sm py-5 align-top whitespace-nowrap">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <WaveDivider from="#080808" to="#F5F4F0" />
      <CTASection />
    </>
  )
}
