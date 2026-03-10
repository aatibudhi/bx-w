"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const featuredPost = {
  title: "The Future of Agentic AI in Enterprise",
  excerpt: "Agentic AI systems represent the next evolution in enterprise automation. Learn how autonomous agents with reasoning capabilities are transforming business processes.",
  author: "Dr. Sarah Mitchell",
  role: "Head of AI Research",
  date: "March 5, 2026",
  readTime: "12 min read",
  category: "Agentic AI",
  slug: "#",
}

const posts = [
  {
    title: "Enterprise AI Architecture Patterns",
    excerpt: "Best practices for designing scalable, maintainable AI systems that meet enterprise requirements.",
    author: "James Chen",
    date: "March 1, 2026",
    readTime: "8 min read",
    category: "Architecture",
    slug: "#",
  },
  {
    title: "Building Production-Grade AI Copilots",
    excerpt: "A deep dive into the engineering challenges and solutions for deploying AI copilots at scale.",
    author: "Emily Rodriguez",
    date: "February 25, 2026",
    readTime: "10 min read",
    category: "Engineering",
    slug: "#",
  },
  {
    title: "Scaling LLM Systems: Lessons Learned",
    excerpt: "Key insights from deploying large language model applications serving millions of users.",
    author: "Michael Torres",
    date: "February 20, 2026",
    readTime: "15 min read",
    category: "LLMs",
    slug: "#",
  },
  {
    title: "AI Governance: A Practical Framework",
    excerpt: "How to implement responsible AI practices without slowing down innovation.",
    author: "Dr. Lisa Wang",
    date: "February 15, 2026",
    readTime: "9 min read",
    category: "Governance",
    slug: "#",
  },
  {
    title: "RAG Systems: Beyond Basic Retrieval",
    excerpt: "Advanced techniques for building retrieval-augmented generation systems that actually work.",
    author: "David Kim",
    date: "February 10, 2026",
    readTime: "11 min read",
    category: "Engineering",
    slug: "#",
  },
  {
    title: "The Economics of AI Transformation",
    excerpt: "Understanding the true cost and ROI of enterprise AI initiatives.",
    author: "Jennifer Adams",
    date: "February 5, 2026",
    readTime: "7 min read",
    category: "Strategy",
    slug: "#",
  },
]

const categories = ["All", "Agentic AI", "Architecture", "Engineering", "LLMs", "Governance", "Strategy"]

export default function InsightsPage() {
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
            <span className="text-sm font-medium text-primary">Insights</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              AI Engineering Insights
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Deep technical content on building, deploying, and scaling AI systems for the enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={featuredPost.slug}
              className="group block rounded-3xl border border-border bg-card p-8 md:p-12 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Featured
                  </span>
                  <h2 className="mt-4 text-2xl font-bold md:text-3xl lg:text-4xl group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-primary">
                  <span className="font-medium">Read Article</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={post.slug}
                  className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="inline-flex items-center self-start rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
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
