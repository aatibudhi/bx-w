"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { 
  Map, 
  Search, 
  Shield, 
  Layers,
  Building2,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const capabilities = [
  {
    icon: Map,
    title: "AI Roadmap Development",
    description: "Create a strategic plan for AI adoption that aligns with your business objectives and technical capabilities.",
  },
  {
    icon: Search,
    title: "AI Use Case Discovery",
    description: "Identify and prioritize high-impact AI opportunities across your organization.",
  },
  {
    icon: Shield,
    title: "AI Governance & Safety",
    description: "Establish frameworks for responsible AI development and deployment.",
  },
  {
    icon: Layers,
    title: "LLM Architecture Design",
    description: "Design scalable architectures for large language model applications.",
  },
  {
    icon: Building2,
    title: "AI System Architecture",
    description: "Create robust, scalable architectures for enterprise AI systems.",
  },
]

const outcomes = [
  "Clear AI strategy aligned with business goals",
  "Prioritized roadmap of AI initiatives",
  "Technical architecture recommendations",
  "Build vs buy analysis",
  "ROI projections and success metrics",
  "Risk assessment and mitigation plan",
  "Change management recommendations",
  "Governance framework design",
]

export default function AIConsultingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Services
            </Link>
            <span className="text-sm font-medium text-primary">AI Consulting</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Strategic AI Consulting
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We help organizations identify high-impact AI opportunities and design scalable architectures that drive real business value.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Consulting Capabilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Our AI consulting services cover the full spectrum of strategic and technical advisory.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <capability.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{capability.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Consulting Engagement Outcomes
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every consulting engagement delivers actionable insights and a clear path forward for your AI initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {outcomes.map((outcome, index) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engagement Process</h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "Week 1-2",
                title: "Discovery & Assessment",
                items: ["Stakeholder interviews", "Data & infrastructure audit", "Current state analysis"],
              },
              {
                step: "Week 3-4",
                title: "Strategy Development",
                items: ["Opportunity mapping", "Architecture design", "Roadmap creation"],
              },
              {
                step: "Week 5-6",
                title: "Recommendations & Planning",
                items: ["Executive presentation", "Implementation plan", "Success metrics"],
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <span className="text-sm font-medium text-primary">{phase.step}</span>
                <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
