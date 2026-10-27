import { FAQ_ITEMS } from '../data/faqs'
import usePageMeta from '../lib/usePageMeta'
import { FadeInUp, TextReveal } from '../components/ui/Motion'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'

export default function FAQ() {
  usePageMeta(
    'AI Content Production FAQ | Glocal AI Studio',
    'Answers on AI brand films, micro dramas, timelines, pricing & how Glocal AI Studio delivers OTT-quality content in 5–7 days.',
  )
  return (
    <>
      <section className="bg-bg-primary pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <span className="accent-line" />
            <span className="section-label block mb-6">Frequently Asked</span>
          </FadeInUp>
          <h1 style={{ display: 'contents' }} aria-label="Questions we get asked a lot.">
            <TextReveal text="Questions we" className="font-display font-bold text-display text-white tracking-[-0.025em] leading-[0.95]" stagger={0.08} />
            <TextReveal text="get asked a lot." className="font-display font-bold text-display text-white/20 tracking-[-0.025em] leading-[0.95] italic" delay={0.2} stagger={0.08} />
          </h1>
        </div>
      </section>
      <section className="bg-bg-secondary py-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10 pb-24">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>
      <CTASection />
    </>
  )
}
