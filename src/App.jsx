import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import { PageProgressBar, PageTransition } from './components/layout/PageChrome'
import CustomCursor from './components/ui/CustomCursor'

// The homepage ships in the main bundle; every other route is split into its
// own chunk and fetched on first visit.
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const Work = lazy(() => import('./pages/Work'))
const WorkProject = lazy(() => import('./pages/WorkProject'))
const Partners = lazy(() => import('./pages/Partners'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

const SERVICE_SLUGS = ['ott-production', 'ai-brand-films', 'micro-drama-production', 'ai-ad-creatives', 'social-media-content']

/** Blank, page-coloured placeholder shown while a route chunk loads. */
function RouteFallback() {
  return <div style={{ minHeight: '100vh', backgroundColor: '#080808' }} aria-hidden="true" />
}

/**
 * Root layout. Mirrors the original site's app layout:
 * progress bar + custom cursor + fixed navbar, a <main> wrapped in a page
 * transition, and the global footer.
 */
export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <PageProgressBar />
      <CustomCursor />
      <Navbar />
      <main>
        <PageTransition key={pathname}>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {SERVICE_SLUGS.map((slug) => (
                <Route key={slug} path={`/${slug}`} element={<ServicePage slug={slug} />} />
              ))}
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<WorkProject />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
