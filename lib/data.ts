// Mock data functions - replace with actual database queries

export interface Project {
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
  createdAt: Date
}

export interface BlogPost {
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

// Mock projects data
const mockProjects: Project[] = [
  {
    id: "1",
    title: "ITC Limited Market Expansion",
    description:
      "Comprehensive market gap analysis and distribution strategy implementation that resulted in expanded retail presence across targeted regions.",
    category: "Market Research",
    imageUrl: "/placeholder.svg?height=300&width=400",
    technologies: ["VAJRA 2.0 WebDMS", "Excel", "Market Analysis"],
    featured: true,
    createdAt: new Date("2024-06-15"),
  },
  {
    id: "2",
    title: "Digital Marketing Campaign Analysis",
    description: "Data-driven digital marketing campaign optimization using Google Analytics and HubSpot tools.",
    category: "Digital Marketing",
    imageUrl: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com/campaign",
    technologies: ["Google Analytics", "HubSpot", "SEO/SEM"],
    featured: true,
    createdAt: new Date("2024-05-20"),
  },
  {
    id: "3",
    title: "Retail Distribution Strategy",
    description: "Strategic retail expansion project focusing on outlet onboarding and sales team training.",
    category: "Retail Strategy",
    imageUrl: "/placeholder.svg?height=300&width=400",
    technologies: ["Distribution Planning", "Sales Training", "CRM"],
    featured: true,
    createdAt: new Date("2024-04-10"),
  },
  {
    id: "4",
    title: "Consumer Behavior Analysis",
    description: "In-depth consumer behavior study using advanced Excel analytics and market research techniques.",
    category: "Market Research",
    imageUrl: "/placeholder.svg?height=300&width=400",
    technologies: ["Excel", "Data Analysis", "Survey Design"],
    featured: false,
    createdAt: new Date("2024-03-15"),
  },
  {
    id: "5",
    title: "Social Media Marketing Strategy",
    description: "Comprehensive social media marketing strategy development for brand awareness and engagement.",
    category: "Digital Marketing",
    imageUrl: "/placeholder.svg?height=300&width=400",
    technologies: ["Social Media", "Content Strategy", "Analytics"],
    featured: false,
    createdAt: new Date("2024-02-20"),
  },
]

const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Digital Marketing in India",
    excerpt: "Exploring emerging trends and opportunities in India's rapidly evolving digital marketing landscape.",
    content: "Digital marketing in India is experiencing unprecedented growth...",
    imageUrl: "/placeholder.svg?height=300&width=400",
    publishedAt: new Date("2024-01-10"),
    readTime: 8,
    category: "Digital Marketing",
    author: "Sayantan Mondal",
  },
  {
    id: "2",
    title: "Market Research Best Practices for Retail Expansion",
    excerpt: "Essential techniques and methodologies for conducting effective market research in retail sectors.",
    content: "Effective market research is the foundation of successful retail expansion...",
    imageUrl: "/placeholder.svg?height=300&width=400",
    publishedAt: new Date("2024-02-15"),
    readTime: 12,
    category: "Market Research",
    author: "Sayantan Mondal",
  },
  {
    id: "3",
    title: "Leveraging Data Analytics in Marketing Decisions",
    excerpt: "How to use data analytics tools and techniques to make informed marketing decisions.",
    content: "In today's data-driven world, marketing decisions backed by analytics...",
    imageUrl: "/placeholder.svg?height=300&width=400",
    publishedAt: new Date("2024-03-20"),
    readTime: 10,
    category: "Analytics",
    author: "Sayantan Mondal",
  },
]

export async function getProjects(options?: {
  featured?: boolean
  category?: string
  search?: string
  limit?: number
}): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredProjects = [...mockProjects]

  if (options?.featured) {
    filteredProjects = filteredProjects.filter((p) => p.featured)
  }

  if (options?.category) {
    filteredProjects = filteredProjects.filter((p) => p.category === options.category)
  }

  if (options?.search) {
    const searchTerm = options.search.toLowerCase()
    filteredProjects = filteredProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.technologies.some((tech) => tech.toLowerCase().includes(searchTerm)),
    )
  }

  if (options?.limit) {
    filteredProjects = filteredProjects.slice(0, options.limit)
  }

  return filteredProjects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export async function getProject(id: string): Promise<Project | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProjects.find((p) => p.id === id) || null
}

export async function getProjectCategories(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  const categories = [...new Set(mockProjects.map((p) => p.category))]
  return categories.sort()
}

export async function getBlogPosts(options?: {
  category?: string
  limit?: number
}): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredPosts = [...mockBlogPosts]

  if (options?.category) {
    filteredPosts = filteredPosts.filter((p) => p.category === options.category)
  }

  if (options?.limit) {
    filteredPosts = filteredPosts.slice(0, options.limit)
  }

  return filteredPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockBlogPosts.find((p) => p.id === id) || null
}
