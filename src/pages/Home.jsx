import usePageMeta from '../lib/usePageMeta'
import HeroSection from '../components/home/HeroSection'
import TrustedBySection from '../components/home/TrustedBySection'
import ManifestoSection from '../components/home/ManifestoSection'
import FourStudiosSection from '../components/home/FourStudiosSection'
import WorkSection from '../components/home/WorkSection'
import StudioFAQSection from '../components/home/StudioFAQSection'
import GetInTouchSection from '../components/home/GetInTouchSection'

export default function Home() {
  usePageMeta(
    'Glocal AI Studio | AI Content Studio for Global Brands — Ads, Brand Films and Micro Drama',
    'AI video production for global brands, startups & agencies. Brand films, performance ads, micro drama, animation & social content, every frame AI-native.',
  )
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ManifestoSection />
      <FourStudiosSection />
      <WorkSection />
      <StudioFAQSection />
      <GetInTouchSection />
    </>
  )
}
