"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
        
        {/* Overlay gradient for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
        
        {/* Content overlay - positioned to match the banner design */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              {/* CTA Button - styled to match the orange button in the banner */}
              <div className="mt-[280px] sm:mt-[320px] lg:mt-[380px]">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-lg shadow-orange-500/25 min-w-[200px]"
                >
                  <Link href="/contact">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust badges section below the banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-background py-12 border-b border-border/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center mb-6">Trusted by AI-first companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Acme Corp", "Velocity AI", "NexGen Tech", "DataFlow", "Quantum Labs"].map((company) => (
              <span
                key={company}
                className="text-lg font-semibold text-muted-foreground"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
