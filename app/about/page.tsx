"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { Brain, Lightbulb, Shield, Globe, Users, Target, Zap, Award } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Engineering Excellence",
    description: "We build systems that are not just innovative, but reliable, scalable, and maintainable.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatic Innovation",
    description: "We embrace cutting-edge technology while staying grounded in practical business outcomes.",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    description: "We prioritize safety, fairness, and transparency in every AI system we build.",
  },
  {
    icon: Globe,
    title: "Global Talent",
    description: "Our distributed team brings diverse perspectives and world-class expertise.",
  },
]

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a vision to democratize enterprise AI" },
  { year: "2020", title: "First 10 Clients", description: "Delivered production AI systems for Fortune 500" },
  { year: "2022", title: "100+ Team", description: "Expanded to a global team of AI specialists" },
  { year: "2024", title: "Agentic AI", description: "Pioneered enterprise agentic AI deployments" },
  { year: "2026", title: "Global Leader", description: "Recognized as a top AI consulting firm" },
]

export default function AboutPage() {
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
            <span className="text-sm font-medium text-primary">About Us</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Building the Infrastructure for the AI Economy
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              BrightAxis AI is a global AI consulting and engineering company helping organizations design intelligent systems that scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
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
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We help organizations move beyond AI experimentation and deploy production-grade intelligent systems that create real business value.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We combine AI research, product strategy, distributed engineering teams, and enterprise software architecture to deliver AI systems that work in the real world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl border border-border bg-card p-6">
                <Brain className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">AI Research</h3>
                <p className="mt-2 text-sm text-muted-foreground">Cutting-edge ML and LLM expertise</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">Product Strategy</h3>
                <p className="mt-2 text-sm text-muted-foreground">Business-aligned AI roadmaps</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">Global Teams</h3>
                <p className="mt-2 text-sm text-muted-foreground">Distributed engineering excellence</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">Enterprise Grade</h3>
                <p className="mt-2 text-sm text-muted-foreground">Production-ready systems</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
          </motion.div>

          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div className={`rounded-2xl border border-border bg-card p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <h3 className="mt-2 text-xl font-semibold">{milestone.title}</h3>
                      <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex h-4 w-4 rounded-full bg-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
