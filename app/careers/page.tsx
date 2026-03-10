"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Clock, 
  ArrowRight,
  Globe,
  Heart,
  Laptop,
  GraduationCap,
  Users,
  Sparkles
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs.",
  },
  {
    icon: Laptop,
    title: "Latest Equipment",
    description: "Top-of-the-line hardware and software tools.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and books.",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team meetups and company offsites.",
  },
  {
    icon: Sparkles,
    title: "Cutting-Edge AI",
    description: "Work on the most exciting AI projects in the industry.",
  },
]

const openings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build production-grade AI systems for enterprise clients.",
  },
  {
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Develop and deploy ML models at scale.",
  },
  {
    title: "AI Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Lead AI product strategy and roadmap.",
  },
  {
    title: "Data Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build data pipelines and infrastructure for AI systems.",
  },
  {
    title: "AI Solutions Architect",
    department: "Consulting",
    location: "Remote",
    type: "Full-time",
    description: "Design AI architectures for enterprise clients.",
  },
  {
    title: "AI Research Engineer",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Push the boundaries of AI capabilities.",
  },
]

export default function CareersPage() {
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
            <span className="text-sm font-medium text-primary">Careers</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Join BrightAxis AI
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We&apos;re building the future of intelligent systems. Join our team of world-class engineers and researchers.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#openings">View Open Positions</a>
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
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why BrightAxis</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We offer more than just a job. We offer the opportunity to work on impactful AI projects with talented people.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                Our Engineering Culture
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We believe in building a culture where engineers can do their best work. That means autonomy, ownership, and the freedom to innovate.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Work on cutting-edge AI projects with real impact",
                  "Collaborate with top engineers from around the world",
                  "Continuous learning and growth opportunities",
                  "Open and transparent communication",
                  "Results-oriented, not hours-oriented",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "200+", label: "Team Members" },
                { value: "15+", label: "Countries" },
                { value: "4.8/5", label: "Glassdoor Rating" },
                { value: "92%", label: "Retention Rate" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="openings" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Open Positions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find your next role at BrightAxis AI.
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href="/contact"
                  className="group flex flex-col md:flex-row md:items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                        {job.department}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{job.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center text-primary">
                    <span className="font-medium">Apply Now</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Don&apos;t see the right role?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future openings.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Send Your Resume</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
