import { Suspense } from "react"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import CTASection from "@/components/cta-section"
import { getProjects } from "@/lib/data"
import ProfessionalHeader from "@/components/professional-header"

export default async function HomePage() {
  const featuredProjects = await getProjects({ featured: true, limit: 3 })

  return (
    <main className="min-h-screen">
      <Hero />
      <ProfessionalHeader />
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <FeaturedProjects projects={featuredProjects} />
      </Suspense>
      <About />
      <Skills />
      <CTASection />
      <Contact />
    </main>
  )
}
