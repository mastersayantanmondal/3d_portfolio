import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sayantan Mondal - Marketing Professional & MBA Candidate",
  description:
    "MBA candidate specializing in Marketing Management with proven experience in market research, distribution strategy, and digital marketing solutions.",
  keywords: ["marketing", "digital marketing", "market research", "distribution strategy", "MBA", "business strategy"],
  authors: [{ name: "Sayantan Mondal" }],
  creator: "Sayantan Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayantanmondal.com",
    title: "Sayantan Mondal - Marketing Professional & MBA Candidate",
    description:
      "MBA candidate specializing in Marketing Management with proven experience in market research, distribution strategy, and digital marketing solutions.",
    siteName: "Sayantan Mondal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayantan Mondal - Marketing Professional & MBA Candidate",
    description:
      "MBA candidate specializing in Marketing Management with proven experience in market research, distribution strategy, and digital marketing solutions.",
    creator: "@sayantanmondal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "linkedin:profile": "https://www.linkedin.com/in/sayantanmon/",
    "github:profile": "https://github.com/mastersayantanmondal",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
