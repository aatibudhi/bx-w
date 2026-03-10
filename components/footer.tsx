import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

const footerLinks = {
  services: [
    { name: "AI Consulting", href: "/services/ai-consulting" },
    { name: "AI Product Development", href: "/services/ai-product-development" },
    { name: "Agentic AI Systems", href: "/services" },
    { name: "Custom LLM Development", href: "/services" },
    { name: "ML Infrastructure", href: "/services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  industries: [
    { name: "Fintech", href: "/industries" },
    { name: "Healthcare", href: "/industries" },
    { name: "E-commerce", href: "/industries" },
    { name: "Manufacturing", href: "/industries" },
    { name: "AI Startups", href: "/industries" },
  ],
  resources: [
    { name: "Blog", href: "/insights" },
    { name: "Engineering Teams", href: "/teams" },
    { name: "Technology Stack", href: "/services/ai-product-development" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="BrightAxis AI"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold tracking-tight">
                Bright<span className="text-primary">Axis</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Engineering the next generation of AI systems. From strategy to production-grade platforms.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold">Industries</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BrightAxis AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
