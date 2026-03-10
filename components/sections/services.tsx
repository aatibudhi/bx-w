"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  Bot, 
  Code2, 
  Cpu, 
  Database, 
  Users,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Define how AI creates competitive advantage for your organization.",
    href: "/services/ai-consulting",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description: "Autonomous AI systems with reasoning, tools, and memory capabilities.",
    href: "/services",
  },
  {
    icon: Code2,
    title: "Custom LLM Development",
    description: "Fine-tuned language models for enterprise workflows and use cases.",
    href: "/services/ai-product-development",
  },
  {
    icon: Cpu,
    title: "AI Product Engineering",
    description: "Build AI-native SaaS platforms that scale with your business.",
    href: "/services/ai-product-development",
  },
  {
    icon: Database,
    title: "Data Infrastructure & ML Ops",
    description: "Production pipelines for scalable AI systems and deployments.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Dedicated AI Engineering Teams",
    description: "Staff augmentation with top-tier AI and ML engineers.",
    href: "/teams",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
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
          <span className="text-sm font-medium text-primary">What We Do</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            End-to-End AI Engineering
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From strategy to deployment, we build intelligent systems that transform businesses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                href={service.href}
                className="group relative flex flex-col h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
