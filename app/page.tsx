import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { WhyBrightAxisSection } from "@/components/sections/why-brightaxis"
import { IndustriesSection } from "@/components/sections/industries"
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyBrightAxisSection />
      <IndustriesSection />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
