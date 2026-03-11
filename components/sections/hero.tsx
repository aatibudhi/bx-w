"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-16">
      {/* Full-width banner image */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <Image
          src="/images/hero-banner.png"
          alt="BrightAxis AI - AI Solutions for the Next Generation of Businesses"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}
