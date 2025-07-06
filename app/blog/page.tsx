import { Suspense } from "react"
import BlogGrid from "@/components/blog-grid"
import { getBlogPosts } from "@/lib/data"

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts on 3D animation, industry trends, and creative processes
        </p>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-video bg-muted animate-pulse rounded-lg" />
                <div className="h-4 bg-muted animate-pulse rounded" />
                <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
              </div>
            ))}
          </div>
        }
      >
        <BlogGrid posts={posts} />
      </Suspense>
    </div>
  )
}
