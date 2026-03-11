"use client"

import Image from "next/image"
import { useEffect, useState, useCallback, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const bannerSlides = [
  {
    src: "/images/hero-banner.png",
    alt: "BrightAxis AI - AI Solutions for the Next Generation of Businesses",
  },
  {
    src: "/images/hero-banner-2.png",
    alt: "BrightAxis AI - Solutions for the Next Generation of Data Platform",
  },
  {
    src: "/images/hero-banner-3.png",
    alt: "BrightAxis AI - Intelligent Automation - Streamline Workflows",
  },
  {
    src: "/images/hero-banner-4.png",
    alt: "BrightAxis AI - AI Consulting - Expert Guidance for Your AI Strategy",
  },
]

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  // Auto-advance slides
  useEffect(() => {
    if (!api) return

    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  return (
    <section className="relative w-full overflow-hidden pt-16">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {bannerSlides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                current === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
