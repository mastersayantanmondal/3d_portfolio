import { Suspense } from "react"
import ProjectGallery from "@/components/project-gallery"
import ProjectFilters from "@/components/project-filters"
import { getProjects, getProjectCategories } from "@/lib/data"

interface ProjectsPageProps {
  searchParams: {
    category?: string
    search?: string
  }
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const projects = await getProjects({
    category: searchParams.category,
    search: searchParams.search,
  })
  const categories = await getProjectCategories()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore my collection of 3D animations, visual effects, and interactive experiences
        </p>
      </div>

      <ProjectFilters categories={categories} />

      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        }
      >
        <ProjectGallery projects={projects} />
      </Suspense>
    </div>
  )
}
