import usePageMeta from '../lib/usePageMeta'
import CalendlyLink from '../components/ui/CalendlyLink'
import EmailLink from '../components/ui/EmailLink'
import { LOCATION } from '../data/site'

export default function Contact() {
  usePageMeta(
    'Contact Glocal AI Studio | Start an AI Content Project',
    'Brief Glocal AI Studio on your brand film, ad, series or social project. Book a 30-minute call — we come back with a perspective, not a pitch deck.',
  )
  return (
    <section className="bg-bg-primary min-h-screen flex flex-col items-center justify-center pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="block mb-6 text-[11px] tracking-[0.28em] uppercase" style={{ color: 'rgba(242,228,194,0.35)', fontFamily: "'DM Sans', sans-serif" }}>
          Let's Talk
        </span>
        <h1 className="font-display font-bold leading-[1.05] tracking-[-0.025em] mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: '#F2E4C2' }}>
          Schedule a <em style={{ fontStyle: 'italic', color: 'rgba(242,228,194,0.4)' }}>Meeting</em>
        </h1>
        <p className="text-base leading-relaxed mb-12 max-w-md mx-auto" style={{ color: 'rgba(242,228,194,0.45)', fontFamily: "'DM Sans', sans-serif" }}>
          Pick a time that works for you. We'll come prepared with a perspective on your brief, not a pitch deck.
        </p>
        <CalendlyLink
          ctaLocation="contact_page"
          className="inline-flex items-center gap-3 transition-all duration-300 hover:opacity-80"
          style={{ backgroundColor: '#F5F4F0', color: '#3B2A12', borderRadius: '9999px', padding: '16px 40px', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '14px', letterSpacing: '0.05em', textDecoration: 'none' }}
        >
          Book a 30-min Call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </CalendlyLink>
        <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col gap-4 items-center">
          <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: 'rgba(242,228,194,0.2)', fontFamily: "'DM Sans', sans-serif" }}>
            Or reach us directly
          </span>
          <EmailLink ctaLocation="contact_page" className="text-sm transition-colors duration-300 hover:text-white" style={{ color: 'rgba(242,228,194,0.45)', fontFamily: "'DM Sans', sans-serif" }} />
          <span className="text-sm" style={{ color: 'rgba(242,228,194,0.25)', fontFamily: "'DM Sans', sans-serif" }}>
            {LOCATION}
          </span>
        </div>
      </div>
    </section>
  )
}
