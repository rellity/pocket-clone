import HeroSection from '@/components/user/hero-section'
import SubsectionTwo from '@/components/user/sub-section-two'
import SubsectionThree from '@/components/user/subsection-three-shorter'
import ScrollSection from '@/components/user/scroll-section'
import PricingSection from '@/components/user/pricing-section'
import FaqSection from '@/components/user/faq-section'
import FeatureSection from '@/components/user/feature-section'

export default function Home() {
  return (
    <div className="flex w-screen flex-1 flex-col gap-4 overflow-x-hidden scrollbar-hide">
      <HeroSection />
      <FeatureSection id="features" />
      <SubsectionTwo />
      <SubsectionThree />
      <ScrollSection id="reviews" />
      <PricingSection id="pricing" />
      <FaqSection id="faqs" />
    </div>
  )
}
