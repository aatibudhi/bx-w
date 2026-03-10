"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Zap, 
  Award, 
  Lock, 
  Rocket,
  CheckCircle2
} from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Enterprise-grade AI architectures",
    description: "Battle-tested systems designed for scale, reliability, and compliance.",
  },
  {
    icon: Zap,
    title: "Silicon Valley engineering talent",
    description: "Access to world-class AI engineers and researchers.",
  },
  {
    icon: CheckCircle2,
    title: "Proven AI product delivery",
    description: "Track record of shipping production AI systems for Fortune 500 companies.",
  },
  {
    icon: Lock,
    title: "Security-first AI systems",
    description: "Built-in security, privacy, and governance from day one.",
  },
  {
    icon: Rocket,
    title: "Rapid AI prototyping",
    description: "From concept to working prototype in weeks, not months.",
  },
]

export function WhyBrightAxisSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">Why BrightAxis</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              The AI Partner for
              <span className="block text-primary">Enterprise Innovation</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We combine deep technical expertise with pragmatic business understanding to deliver AI systems that create real value.
            </p>

            <div className="mt-8 grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">150+</div>
                <p className="mt-2 text-sm text-muted-foreground">AI Projects Delivered</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">50+</div>
                <p className="mt-2 text-sm text-muted-foreground">Enterprise Clients</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">200+</div>
                <p className="mt-2 text-sm text-muted-foreground">AI Engineers</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">98%</div>
                <p className="mt-2 text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -right-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
