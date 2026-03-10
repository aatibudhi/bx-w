"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Brain, 
  Bot, 
  Code2, 
  Cpu, 
  Database, 
  Workflow,
  Sparkles,
  ArrowRight,
  Settings,
  Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Advisory",
    description: "Define your AI roadmap and identify high-impact opportunities aligned with business goals.",
    features: ["AI readiness assessment", "Use case prioritization", "ROI modeling", "Technology selection"],
    href: "/services/ai-consulting",
  },
  {
    icon: Code2,
    title: "AI Product Development",
    description: "Build production-grade AI applications from concept to deployment.",
    features: ["AI SaaS platforms", "LLM-powered apps", "AI APIs", "Custom models"],
    href: "/services/ai-product-development",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description: "Design and deploy autonomous AI agents with reasoning, planning, and tool-use capabilities.",
    features: ["Multi-agent systems", "Tool integration", "Memory & context", "Human-in-the-loop"],
    href: "/services/ai-consulting",
  },
  {
    icon: Cpu,
    title: "Machine Learning Engineering",
    description: "Build, train, and deploy custom ML models for your specific use cases.",
    features: ["Model development", "Feature engineering", "Model optimization", "Production deployment"],
    href: "/services/ai-product-development",
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Harness the power of LLMs, image generation, and multimodal AI for your business.",
    features: ["LLM integration", "RAG systems", "Content generation", "Multimodal AI"],
    href: "/services/ai-product-development",
  },
  {
    icon: Database,
    title: "AI Infrastructure",
    description: "Build scalable data pipelines and ML infrastructure for enterprise AI systems.",
    features: ["Data pipelines", "Vector databases", "MLOps", "Model serving"],
    href: "/services/ai-product-development",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description: "Automate complex business processes with intelligent AI-powered workflows.",
    features: ["Process automation", "Document processing", "Workflow AI", "Decision automation"],
    href: "/services/ai-consulting",
  },
  {
    icon: Settings,
    title: "Enterprise AI Integration",
    description: "Integrate AI capabilities into your existing enterprise systems and workflows.",
    features: ["System integration", "API development", "Legacy modernization", "Change management"],
    href: "/services/ai-consulting",
  },
]

export default function ServicesPage() {
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
            <span className="text-sm font-medium text-primary">Services</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              End-to-End AI Engineering Services
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              From strategy to deployment, we provide comprehensive AI services to help you build, scale, and maintain intelligent systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A proven methodology for delivering successful AI projects.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", description: "Understand your business goals and AI opportunities" },
              { step: "02", title: "Design", description: "Architect the solution and define success metrics" },
              { step: "03", title: "Build", description: "Develop, test, and iterate on the AI system" },
              { step: "04", title: "Scale", description: "Deploy to production and optimize performance" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10">{phase.step}</div>
                <h3 className="mt-4 text-xl font-semibold">{phase.title}</h3>
                <p className="mt-2 text-muted-foreground">{phase.description}</p>
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
