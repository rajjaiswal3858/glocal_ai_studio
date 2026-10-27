import usePageMeta from '../lib/usePageMeta'
import LegalPage from './LegalPage'

const SECTIONS = [
  {
    heading: 'Who We Are',
    body: 'These services are provided by Glocal AI Studio. In these Terms, "Glocal AI Studio", "we", "us", and "our" refer to Glocal AI Studio, which is the contracting party for all services described below.',
  },
  {
    heading: 'Acceptance of Terms',
    body: 'By engaging Glocal AI Studio for services or using our website, you agree to these Terms of Service. If you do not agree to any part of these terms, please do not use our services.',
  },
  {
    heading: 'Services',
    body: 'Glocal AI Studio provides AI-assisted content production services including brand films, micro drama production, performance marketing creatives, and social media content. The specific deliverables, timelines, and pricing for each project are defined in individual project agreements or statements of work.',
  },
  {
    heading: 'Payment Terms',
    body: 'Projects require a 50% deposit before work begins and the remaining 50% upon delivery of final files. Late payments beyond 14 days of invoice date may incur a 2% monthly interest charge. Glocal AI Studio reserves the right to pause active projects where payment is overdue by more than 30 days.',
  },
  {
    heading: 'Intellectual Property',
    body: 'Upon receipt of full payment, all creative work produced by Glocal AI Studio for a client project transfers to the client. Glocal AI Studio retains the right to display the work in its portfolio and marketing materials unless a written portfolio exclusion is agreed upon. Glocal AI Studio retains ownership of all underlying tools, templates, workflows, and proprietary processes used in production.',
  },
  {
    heading: 'Confidentiality',
    body: 'Both parties agree to keep confidential any non-public information shared in connection with a project, including briefs, strategies, creative concepts, and business information. This obligation survives termination of the project relationship for a period of two years.',
  },
  {
    heading: 'Revisions and Approvals',
    body: 'Each project agreement specifies the number of revision rounds included. Additional revisions beyond the agreed scope will be billed at our standard hourly rate. Client approval at each milestone constitutes acceptance of that stage of work.',
  },
  {
    heading: 'Limitation of Liability',
    body: "Glocal AI Studio's liability for any claim arising from the services shall not exceed the total fees paid for the specific project in dispute. Glocal AI Studio is not liable for indirect, incidental, or consequential damages including loss of revenue or business opportunity.",
  },
  {
    heading: 'Governing Law',
    body: 'These terms are governed by the law named in the project agreement or statement of work for each engagement, and any dispute is subject to the courts of that jurisdiction.',
  },
]

export default function Terms() {
  usePageMeta('Terms of Service | Glocal AI Studio', 'Terms and conditions for working with Glocal AI Studio.')
  return <LegalPage title="Terms of Service" updated="March 2026" sections={SECTIONS} footer="For questions about these terms, contact us at" />
}
