import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BrightAxis AI | Enterprise AI Consulting & Engineering',
  description: 'We help companies design, build, and scale intelligent systems — from AI strategy to production-grade agentic platforms.',
  keywords: 'AI consulting company, enterprise AI development, agentic AI systems, AI product development, custom LLM solutions',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
      },
    ],
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'BrightAxis AI | Enterprise AI Consulting & Engineering',
    description: 'We help companies design, build, and scale intelligent systems — from AI strategy to production-grade agentic platforms.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
