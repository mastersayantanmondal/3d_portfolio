import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  imageUrl?: string
  publishedAt: Date
  readTime: number
  category: string
  author: string
}

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <Image
              src={post.imageUrl || `/placeholder.svg?height=300&width=400`}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Badge className="absolute top-3 left-3" variant="secondary">
              {post.category}
            </Badge>
          </div>

          <CardHeader className="pb-3">
            <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h3>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.publishedAt.toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} min read
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
