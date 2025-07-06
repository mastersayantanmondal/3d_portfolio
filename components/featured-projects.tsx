"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  category: string
  imageUrl: string
  videoUrl?: string
  liveUrl?: string
  githubUrl?: string
  technologies: string[]
  featured: boolean
}

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest and most impactful 3D animation work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl || `/placeholder.svg?height=300&width=400`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    {project.videoUrl && (
                      <Button size="sm" variant="secondary">
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
