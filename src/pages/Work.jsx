import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, WORK_CATEGORIES } from '../data/projects'
import { WORK_PAGE_QA } from '../data/faqs'
import usePageMeta from '../lib/usePageMeta'
import { FadeInUp, TextReveal } from '../components/ui/Motion'
import { EASE } from '../lib/motion'
import FillImage from '../components/ui/FillImage'
import CTASection from '../components/ui/CTASection'

function AboutTheWork() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <span className="accent-line" />
        <span className="section-label block mb-12">About the Work</span>
        <div className="flex flex-col gap-14">
          {WORK_PAGE_QA.map(({ q, a }) => (
            <div key={q}>
              <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.02em] leading-[1.15] mb-5">{q}</h2>
              <p className="font-body text-white/60 text-base md:text-lg leading-relaxed max-w-3xl">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.02em] mb-10">All case studies</h2>
          <div className="flex flex-col gap-10">
            {WORK_CATEGORIES.map((category) => {
              const items = PROJECTS.filter((p) => p.category === category)
              if (items.length === 0) return null
              return (
                <div key={category}>
                  <h3 className="font-body text-white/40 text-[11px] uppercase tracking-[0.2em] mb-4">{category}</h3>
                  <ul className="flex flex-col divide-y divide-white/[0.06]">
                    {items.map((p) => (
                      <li key={p.slug}>
                        <Link to={`/work/${p.slug}`} className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3">
                          <span className="font-display text-white text-base group-hover:text-white/60 transition-colors duration-300">{p.title}</span>
                          <span className="font-body text-white/35 text-sm">{p.client}</span>
                          <span className="font-body text-white/20 text-xs ml-auto">{p.year}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Work() {
  usePageMeta(
    'AI Video & Brand Film Portfolio | Glocal AI Studio',
    'The Glocal AI Studio showreel and twelve AI-native films: brand films, product, fashion, animation, VFX and more. See the work.',
  )
  const [category, setCategory] = useState('Showreel')
  const filtered = PROJECTS.filter((p) => p.category === category)

  return (
    <>
      <section className="bg-[#F5F4F0] pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <span className="accent-line" style={{ background: 'rgba(8,8,8,0.3)' }} />
            <span className="section-label block mb-6" style={{ color: 'rgba(59,42,18,0.4)' }}>
              Selected Work
            </span>
          </FadeInUp>
          <h1 style={{ display: 'contents' }} aria-label="The proof is in the results.">
            <TextReveal text="The proof is" className="font-display font-bold text-display text-[#3B2A12] tracking-[-0.025em] leading-[0.95]" stagger={0.08} />
            <TextReveal text="in the results." className="font-display font-bold text-display text-[#3B2A12]/20 tracking-[-0.025em] leading-[0.95] italic" delay={0.2} stagger={0.08} />
          </h1>
          <FadeInUp delay={0.4} className="mt-8 max-w-xl">
            <p className="font-body text-[#3B2A12]/50 text-lg leading-relaxed">One showreel. Eleven categories. Twelve films, every frame AI-native.</p>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-[#F5F4F0] border-b border-[#080808]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-1 py-4 overflow-x-auto hide-scrollbar" style={{ justifyContent: 'safe center' }}>
            {WORK_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`shrink-0 font-body text-xs uppercase tracking-[0.18em] px-5 py-2.5 transition-all duration-300 ${
                  category === c ? 'bg-[#080808] text-[#F2E4C2]' : 'text-[#3B2A12]/40 hover:text-[#3B2A12] border border-transparent hover:border-[#080808]/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-primary py-20 md:py-28 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.07 * i, ease: EASE }} className="bg-bg-secondary">
                  <Link to={`/work/${p.slug}`} className="group block">
                    <div className={`relative overflow-hidden bg-white/[0.03] ${p.vertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
                      <FillImage src={p.poster} alt={p.title} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-9 h-9 bg-white flex items-center justify-center">
                          <ArrowUpRight size={14} strokeWidth={2} className="text-[#3B2A12]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-center border border-white/10">
                      <p className="font-body text-white/30 text-xs uppercase tracking-[0.18em] mb-1">{p.client}</p>
                      <div className="flex items-center justify-center mb-3">
                        <h3 className="font-display font-bold text-white text-xl group-hover:text-white/70 transition-colors duration-300">{p.title}</h3>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {p.tags.map((tag) => (
                          <span key={tag} className="font-body text-[10px] uppercase tracking-[0.15em] text-white/20 border border-white/[0.08] px-2.5 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-body text-white/20 text-base">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <AboutTheWork />
      <CTASection />
    </>
  )
}
