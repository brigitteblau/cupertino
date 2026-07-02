import { Hero } from "@/components/hero"
import { ProductCarousel } from "@/components/product-carousel"
import { Features } from "@/components/features"
import { SocialProof } from "@/components/social-proof"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main>
      <div className="sticky top-0" style={{ zIndex: 1 }}>
        <Hero />
      </div>
      <div className="sticky top-0 stack-card" style={{ zIndex: 2 }}>
        <ProductCarousel />
      </div>
      <div className="sticky top-0 stack-card" style={{ zIndex: 3 }}>
        <Features />
      </div>
      <div className="sticky top-0 stack-card" style={{ zIndex: 4 }}>
        <SocialProof />
      </div>
      {/* CTA final — incluye footer, no sticky */}
      <div className="stack-card" style={{ position: "relative", zIndex: 5 }}>
        <CtaSection />
      </div>
    </main>
  )
}
