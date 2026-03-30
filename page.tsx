import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { DestinationsSection } from "@/components/home/destinations-section"
import { ShipsSection } from "@/components/home/ships-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PricingPreviewSection } from "@/components/home/pricing-preview-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DestinationsSection />
      <ShipsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <CTASection />
      <Footer />
    </main>
  )
}
