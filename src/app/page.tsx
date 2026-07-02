import { Hero } from "@/components/hero"
import { ProductCarousel } from "@/components/product-carousel"
import { Features } from "@/components/features"
import { SocialProof } from "@/components/social-proof"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductCarousel />
      <Features />
      <SocialProof />
      <CtaSection />
      <Footer />
    </main>
  )
}
