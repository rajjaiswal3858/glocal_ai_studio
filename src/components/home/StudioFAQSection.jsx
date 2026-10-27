import { HOME_FAQS } from '../../data/faqs'
import FAQAccordion from '../ui/FAQAccordion'

/** "The Studio" accordion on the homepage. */
export default function StudioFAQSection() {
  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <span className="accent-line" />
        <span className="section-label block mb-12">The Studio</span>
        <FAQAccordion items={HOME_FAQS} headingTag="h2" />
      </div>
    </section>
  )
}
