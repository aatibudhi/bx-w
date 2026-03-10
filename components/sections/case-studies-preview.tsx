"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Bot, FileSearch, BarChart3 } from "lucide-react"

const caseStudies = [
  {
    icon: BarChart3,
    title: "AI Copilot for Finance Platform",
    category: "Fintech",
    description: "Built an intelligent AI assistant that helps financial analysts process data 10x faster.",
    metric: "10x faster analysis",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: TrendingUp,
    title: "Supply Chain Predictive Intelligence",
    category: "Logistics",
    description: "Deployed ML models that reduced inventory costs by 40% through demand forecasting.",
    metric: "40% cost reduction",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Bot,
    title: "Autonomous Customer Support Agent",
    category: "E-commerce",
    description: "Implemented agentic AI that handles 60% of customer inquiries autonomously.",
    metric: "60% automation rate",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: FileSearch,
    title: "AI Document Intelligence System",
    category: "Legal Tech",
    description: "Created LLM-powered document analysis that processes contracts in minutes.",
    metric: "95% accuracy rate",
    color: "from-orange-500/20 to-yellow-500/20",
  },
]

export function CaseStudiesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div>
            <span className="text-sm font-medium text-primary">Case Studies</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              AI Systems in Production
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href="/case-studies"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                <div className="relative p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {study.category}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <study.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{study.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{study.metric}</span>
                    <span className="flex items-center text-sm font-medium text-primary">
                      Read case study
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
