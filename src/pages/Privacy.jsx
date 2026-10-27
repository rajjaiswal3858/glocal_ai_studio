import { CONTACT_EMAIL } from '../data/site'
import usePageMeta from '../lib/usePageMeta'
import LegalPage from './LegalPage'

const SECTIONS = [
  {
    heading: 'Who We Are',
    body: 'This website is operated by Glocal AI Studio, which is the data controller responsible for the personal information described in this policy. In this policy, "Glocal AI Studio", "we", "us", and "our" refer to Glocal AI Studio.',
  },
  {
    heading: 'Information We Collect',
    body: 'We collect information you provide directly, such as your name, email address, company name, and project details when you submit a brief or contact us. We may also collect usage data from our website including pages visited, time spent, and referral sources.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'We use your information to respond to project enquiries, deliver our services, and improve our website. We do not sell, rent, or share your personal data with third parties for marketing purposes. We may share data with service providers who assist us in operating our business under strict confidentiality agreements.',
  },
  {
    heading: 'Data Storage and Security',
    body: `Your data is stored on secure servers and protected by industry-standard encryption. We retain contact and brief information for up to 24 months to support ongoing project relationships. You may request deletion of your data at any time by contacting us at ${CONTACT_EMAIL}.`,
  },
  {
    heading: 'Cookies',
    body: 'Our website uses essential cookies to ensure basic functionality, and analytics cookies to understand how visitors interact with our site. You can disable non-essential cookies through your browser settings. We do not use advertising or tracking cookies.',
  },
  {
    heading: 'Your Rights',
    body: `You have the right to access, correct, or delete your personal data at any time. You may also object to processing or request data portability. To exercise these rights, contact us at ${CONTACT_EMAIL}. We will respond within 30 days.`,
  },
  {
    heading: 'Changes to This Policy',
    body: 'We may update this Privacy Policy periodically. Material changes will be communicated via email if we have your contact details. Continued use of our website constitutes acceptance of the updated policy.',
  },
]

export default function Privacy() {
  usePageMeta('Privacy Policy | Glocal AI Studio', 'How Glocal AI Studio collects, uses, and protects your personal information.')
  return <LegalPage title="Privacy Policy" updated="March 2026" sections={SECTIONS} footer="For any privacy-related questions, contact us at" />
}
