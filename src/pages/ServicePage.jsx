import { getService } from '../data/services'
import usePageMeta from '../lib/usePageMeta'
import ServicePageTemplate from '../components/services/ServicePageTemplate'
import NotFound from './NotFound'

export default function ServicePage({ slug }) {
  const service = getService(slug)
  usePageMeta(service?.metaTitle, service?.metaDesc)
  if (!service) return <NotFound />
  return <ServicePageTemplate service={service} />
}
