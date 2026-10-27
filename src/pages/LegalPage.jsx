import { CONTACT_EMAIL } from '../data/site'
import { FadeInUp } from '../components/ui/Motion'

/** Shared layout for the Privacy Policy and Terms of Service pages. */
export default function LegalPage({ title, updated, sections, footer }) {
  return (
    <section className="bg-bg-primary min-h-screen pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-16">
          <span className="section-label block mb-4">Legal</span>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl tracking-[-0.025em] leading-[1.05]">{title}</h1>
          <p className="font-body text-white/30 text-sm mt-4">Last updated: {updated}</p>
        </FadeInUp>
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {sections.map((s) => (
            <div key={s.heading} className="py-10">
              <h2 className="font-display font-bold text-white text-xl mb-4">{s.heading}</h2>
              <p className="font-body text-white/50 text-base leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-10 border-t border-white/[0.05]">
          <p className="font-body text-white/30 text-sm leading-relaxed">
            {footer}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 hover:text-white transition-colors duration-300">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
