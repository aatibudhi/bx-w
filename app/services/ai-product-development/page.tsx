"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { 
  Cpu, 
  Bot, 
  Wrench, 
  Braces,
  Server,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Cpu,
    title: "AI SaaS Platforms",
    description: "End-to-end development of AI-powered software products designed for scale and reliability.",
  },
  {
    icon: Bot,
    title: "AI Copilots",
    description: "Build intelligent assistants that augment human capabilities in your workflows.",
  },
  {
    icon: Wrench,
    title: "AI Automation Tools",
    description: "Develop AI systems that automate complex business processes and decision-making.",
  },
  {
    icon: Braces,
    title: "LLM-powered Applications",
    description: "Create applications powered by large language models with RAG, agents, and more.",
  },
  {
    icon: Server,
    title: "AI APIs",
    description: "Build and deploy AI capabilities as scalable, secure APIs for your organization.",
  },
]

const techStack = [
  { category: "Languages", items: ["Python", "TypeScript", "Go", "Rust"] },
  { category: "ML Frameworks", items: ["PyTorch", "TensorFlow", "JAX", "Hugging Face"] },
  { category: "LLM Stack", items: ["LangChain", "LlamaIndex", "OpenAI", "Anthropic"] },
  { category: "Databases", items: ["PostgreSQL", "Pinecone", "Weaviate", "Redis"] },
  { category: "Cloud", items: ["AWS", "Azure", "GCP", "Vercel"] },
  { category: "MLOps", items: ["Kubernetes", "Docker", "MLflow", "Weights & Biases"] },
]

export default function AIProductDevelopmentPage() {
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
            <span className="text-sm font-medium text-primary">AI Product Development</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Build AI Products That Scale
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              From concept to production, we develop AI-native applications that deliver real business value.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Build</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              We specialize in building production-grade AI applications across a range of domains.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technology Stack</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We leverage the best tools and frameworks to build robust AI systems.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-sm font-medium text-primary">{stack.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Development Process</h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { phase: "1", title: "Ideation", description: "Define requirements, scope, and success criteria" },
              { phase: "2", title: "Prototype", description: "Rapid prototyping to validate core AI functionality" },
              { phase: "3", title: "Development", description: "Full development with iterative feedback loops" },
              { phase: "4", title: "Deployment", description: "Production deployment with monitoring and support" },
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {step.phase}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
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
