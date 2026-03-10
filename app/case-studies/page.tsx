"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { TrendingUp, Bot, FileSearch, BarChart3, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const caseStudies = [
  {
    icon: Bot,
    title: "Autonomous Customer Support AI",
    client: "Leading E-commerce Platform",
    industry: "E-commerce",
    challenge: "Manual customer support was struggling to handle 100,000+ daily inquiries with long wait times and inconsistent quality.",
    solution: "We built an agentic AI system that handles customer inquiries autonomously, with seamless handoff to human agents for complex cases.",
    results: [
      { metric: "60%", label: "Automation rate" },
      { metric: "85%", label: "Customer satisfaction" },
      { metric: "40%", label: "Cost reduction" },
    ],
    technologies: ["LangChain", "GPT-4", "RAG", "Custom fine-tuning"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: TrendingUp,
    title: "AI Demand Forecasting Platform",
    client: "Global Supply Chain Company",
    industry: "Logistics",
    challenge: "Inaccurate demand forecasting led to $50M+ annual losses from overstocking and stockouts.",
    solution: "Deployed ensemble ML models combining time series, external data, and deep learning for highly accurate demand predictions.",
    results: [
      { metric: "40%", label: "Inventory cost reduction" },
      { metric: "95%", label: "Forecast accuracy" },
      { metric: "$30M", label: "Annual savings" },
    ],
    technologies: ["PyTorch", "Time series ML", "Feature engineering", "Real-time inference"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence System",
    client: "Enterprise Legal Tech Company",
    industry: "Legal Tech",
    challenge: "Lawyers spent 60% of their time reviewing contracts manually, slowing down deal velocity.",
    solution: "Built an LLM-powered document analysis system that extracts key clauses, identifies risks, and generates summaries.",
    results: [
      { metric: "95%", label: "Accuracy rate" },
      { metric: "10x", label: "Review speed" },
      { metric: "80%", label: "Time saved" },
    ],
    technologies: ["Claude", "RAG", "Vector databases", "Custom extraction"],
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: BarChart3,
    title: "AI Copilot for Finance",
    client: "Investment Management Firm",
    industry: "Fintech",
    challenge: "Analysts spent hours gathering data and creating reports, limiting their capacity for strategic analysis.",
    solution: "Developed an AI copilot that automates data gathering, analysis, and report generation with natural language queries.",
    results: [
      { metric: "10x", label: "Faster analysis" },
      { metric: "50%", label: "More coverage" },
      { metric: "90%", label: "User adoption" },
    ],
    technologies: ["OpenAI", "Data pipelines", "Custom UI", "Real-time analytics"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Predictive Maintenance System",
    client: "Industrial Manufacturing",
    industry: "Manufacturing",
    challenge: "Unplanned equipment downtime cost $2M+ annually with reactive maintenance approach.",
    solution: "Implemented IoT sensor analysis with ML models that predict equipment failures before they occur.",
    results: [
      { metric: "75%", label: "Downtime reduction" },
      { metric: "$1.5M", label: "Annual savings" },
      { metric: "99%", label: "Prediction accuracy" },
    ],
    technologies: ["Sensor data", "Anomaly detection", "Edge ML", "Real-time monitoring"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Shield,
    title: "Real-time Fraud Detection",
    client: "Digital Banking Platform",
    industry: "Fintech",
    challenge: "Legacy rule-based fraud detection missed sophisticated fraud patterns, resulting in $10M+ annual losses.",
    solution: "Built real-time ML fraud detection that analyzes transactions in milliseconds with continuous learning.",
    results: [
      { metric: "90%", label: "Fraud reduction" },
      { metric: "50ms", label: "Detection latency" },
      { metric: "0.1%", label: "False positive rate" },
    ],
    technologies: ["Real-time ML", "Graph neural networks", "Feature engineering", "Stream processing"],
    color: "from-indigo-500/20 to-purple-500/20",
  },
]

export default function CaseStudiesPage() {
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
            <span className="text-sm font-medium text-primary">Case Studies</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              AI Systems in Production
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Real-world examples of how we&apos;ve helped enterprises deploy AI systems that deliver measurable business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-30`} />
                <div className="relative p-8 md:p-12">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <study.icon className="h-6 w-6" />
                        </div>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {study.industry}
                        </span>
                      </div>
                      <h2 className="mt-6 text-2xl font-bold md:text-3xl">{study.title}</h2>
                      <p className="mt-2 text-muted-foreground">{study.client}</p>
                      
                      <div className="mt-6">
                        <h3 className="font-semibold">Challenge</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="font-semibold">Solution</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold mb-6">Results</h3>
                      <div className="grid gap-4 sm:grid-cols-3">
                        {study.results.map((result) => (
                          <div key={result.label} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                            <div className="text-3xl font-bold text-primary">{result.metric}</div>
                            <div className="mt-1 text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Button asChild>
                          <Link href="/contact">Discuss a Similar Project</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
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
