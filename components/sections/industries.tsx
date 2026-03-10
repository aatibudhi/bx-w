"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Landmark, 
  HeartPulse, 
  ShoppingCart, 
  Factory, 
  Truck, 
  Building2,
  Rocket
} from "lucide-react"

const industries = [
  {
    icon: Landmark,
    name: "Fintech",
    description: "AI risk models, fraud detection, and automated underwriting systems.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Clinical AI, medical data processing, and diagnostic models.",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Recommendation engines, demand forecasting, and personalization.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Predictive maintenance, computer vision, and quality control.",
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Route optimization, supply chain intelligence, and automation.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "AI property analytics and automated valuation models.",
  },
  {
    icon: Rocket,
    name: "AI Startups",
    description: "Technical co-development and AI product acceleration.",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-primary">Industries</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            AI Solutions for Every Sector
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Deep domain expertise across industries that are being transformed by AI.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href="/industries"
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <industry.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{industry.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
