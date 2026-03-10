"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { 
  Users, 
  Code2, 
  Database, 
  Brain,
  Palette,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const roles = [
  {
    icon: Brain,
    title: "Machine Learning Engineers",
    description: "Expert ML engineers skilled in model development, training, and optimization.",
    skills: ["PyTorch", "TensorFlow", "Model optimization", "Feature engineering"],
  },
  {
    icon: Code2,
    title: "AI Software Engineers",
    description: "Full-stack engineers specialized in building AI-powered applications.",
    skills: ["Python", "TypeScript", "System design", "API development"],
  },
  {
    icon: Database,
    title: "Data Engineers",
    description: "Build robust data pipelines and infrastructure for AI systems.",
    skills: ["Data pipelines", "ETL", "Spark", "Data warehousing"],
  },
  {
    icon: Users,
    title: "AI Architects",
    description: "Senior engineers who design scalable AI system architectures.",
    skills: ["System architecture", "MLOps", "Cloud infrastructure", "Security"],
  },
  {
    icon: Palette,
    title: "Product Designers",
    description: "Design intuitive interfaces for AI-powered products.",
    skills: ["AI UX", "Interaction design", "Prototyping", "User research"],
  },
]

const engagementModels = [
  {
    title: "Staff Augmentation",
    description: "Embed our engineers directly into your team for flexible capacity.",
    features: [
      "Seamless integration with your processes",
      "Direct management by your team",
      "Flexible scaling up or down",
      "Knowledge transfer included",
    ],
  },
  {
    title: "Dedicated Teams",
    description: "A complete, self-managed team dedicated to your AI projects.",
    features: [
      "Full team with all required skills",
      "Dedicated project management",
      "Independent delivery capability",
      "Long-term partnership model",
    ],
  },
  {
    title: "Full Product Development",
    description: "End-to-end AI product development from concept to launch.",
    features: [
      "Complete product ownership",
      "Strategy to deployment",
      "Ongoing support and iteration",
      "Fixed-scope or retainer options",
    ],
  },
]

export default function TeamsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
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
            <span className="text-sm font-medium text-primary">Engineering Teams</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Dedicated AI Engineering Talent
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Access world-class AI engineers who integrate seamlessly with your team to accelerate your AI initiatives.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Build Your Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Engineering Roles</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Our talent pool includes specialists across the full AI engineering stack.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <role.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{role.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{role.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engagement Models</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Flexible ways to work with our engineering teams based on your needs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="text-xl font-semibold">{model.title}</h3>
                <p className="mt-2 text-muted-foreground">{model.description}</p>
                <ul className="mt-6 space-y-3">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "200+", label: "AI Engineers" },
              { value: "15+", label: "Countries" },
              { value: "8+", label: "Years Average Experience" },
              { value: "50+", label: "Active Teams" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
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
