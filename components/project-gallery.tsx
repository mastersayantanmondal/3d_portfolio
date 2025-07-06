"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  category: string
  imageUrl: string
  videoUrl?: string
  liveUrl?: string
  technologies: string[]
  featured: boolean
}

interface ProjectGalleryProps {
  projects: Project[]
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="group overflow-hidden hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.imageUrl || `/placeholder.svg?height=300&width=400`}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex gap-2">
                <Button size="sm" variant="secondary" asChild>
                  <Link href={`/projects/${project.id}`}>
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Link>
                </Button>
                {project.videoUrl && (
                  <Button size="sm" variant="secondary">
                    <Play className="w-4 h-4" />
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

            {/* Category badge */}
            <Badge className="absolute top-3 left-3" variant="secondary">
              {project.category}
            </Badge>

            {/* Featured badge */}
            {project.featured && <Badge className="absolute top-3 right-3 bg-primary">Featured</Badge>}
          </div>

          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 line-clamp-1">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
