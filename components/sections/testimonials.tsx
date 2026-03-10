"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Our AI product went from concept to enterprise deployment in 4 months. BrightAxis delivered beyond our expectations.",
    author: "Sarah Chen",
    role: "CTO, Velocity AI",
    company: "Velocity AI",
  },
  {
    quote: "BrightAxis helped us move from AI experimentation to real business impact. Their engineering rigor is exceptional.",
    author: "Michael Torres",
    role: "VP of Engineering, DataFlow",
    company: "DataFlow",
  },
  {
    quote: "The team's deep expertise in LLMs and agentic systems was exactly what we needed to build our AI platform.",
    author: "Emily Rodriguez",
    role: "Head of Product, NexGen Tech",
    company: "NexGen Tech",
  },
]

export function TestimonialsSection() {
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
          <span className="text-sm font-medium text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              <Quote className="h-10 w-10 text-primary/20" />
              <blockquote className="mt-4 text-lg leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  {testimonial.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
