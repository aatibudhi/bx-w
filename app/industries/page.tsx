"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { 
  Landmark, 
  HeartPulse, 
  ShoppingCart, 
  Factory, 
  Truck, 
  Building2,
  Rocket,
  CheckCircle2
} from "lucide-react"

const industries = [
  {
    icon: Landmark,
    name: "Fintech",
    description: "Transform financial services with AI-powered risk assessment, fraud detection, and automation.",
    useCases: [
      "AI risk models and credit scoring",
      "Real-time fraud detection systems",
      "Automated underwriting",
      "Algorithmic trading systems",
      "Regulatory compliance automation",
      "Customer service AI agents",
    ],
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Improve patient outcomes and operational efficiency with clinical AI solutions.",
    useCases: [
      "Clinical decision support",
      "Medical imaging analysis",
      "Drug discovery acceleration",
      "Patient data processing",
      "Diagnostic AI models",
      "Healthcare chatbots",
    ],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Drive growth with personalized experiences and intelligent automation.",
    useCases: [
      "Recommendation engines",
      "Demand forecasting",
      "Dynamic pricing",
      "Inventory optimization",
      "Customer service automation",
      "Visual search and discovery",
    ],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Optimize production and quality with industrial AI applications.",
    useCases: [
      "Predictive maintenance",
      "Quality control automation",
      "Computer vision inspection",
      "Supply chain optimization",
      "Production scheduling",
      "Energy optimization",
    ],
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Streamline operations with intelligent routing and predictive analytics.",
    useCases: [
      "Route optimization",
      "Demand prediction",
      "Warehouse automation",
      "Fleet management",
      "Last-mile delivery optimization",
      "Supply chain visibility",
    ],
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "Transform property management and valuation with AI-driven insights.",
    useCases: [
      "Automated valuation models",
      "Property analytics",
      "Market trend prediction",
      "Lead scoring and qualification",
      "Document processing",
      "Virtual property tours",
    ],
  },
  {
    icon: Rocket,
    name: "AI Startups",
    description: "Partner with us to accelerate your AI product development and go-to-market.",
    useCases: [
      "Technical co-development",
      "AI architecture design",
      "MVP development",
      "Scale engineering",
      "ML pipeline setup",
      "Production deployment",
    ],
  },
]

export default function IndustriesPage() {
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
            <span className="text-sm font-medium text-primary">Industries</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              AI Solutions Across Industries
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Deep domain expertise combined with cutting-edge AI to transform businesses across sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid gap-8 lg:grid-cols-2 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <industry.icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-3xl font-bold">{industry.name}</h2>
                  </div>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                <div className={`rounded-2xl border border-border bg-card p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-sm font-medium text-primary mb-4">Key Use Cases</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
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
