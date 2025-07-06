"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface ProjectFiltersProps {
  categories: string[]
}

export default function ProjectFilters({ categories }: ProjectFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
  const activeCategory = searchParams.get("category")

  const handleCategoryFilter = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category === activeCategory) {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.push(`/projects?${params.toString()}`)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (searchTerm) {
      params.set("search", searchTerm)
    } else {
      params.delete("search")
    }
    router.push(`/projects?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearchTerm("")
    router.push("/projects")
  }

  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit">Search</Button>
      </form>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        <Button variant={!activeCategory ? "default" : "outline"} size="sm" onClick={() => handleCategoryFilter("")}>
          All Projects
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Active Filters */}
      {(activeCategory || searchParams.get("search")) && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeCategory && (
            <Badge variant="secondary" className="gap-1">
              Category: {activeCategory}
              <button
                onClick={() => handleCategoryFilter(activeCategory)}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                ×
              </button>
            </Badge>
          )}
          {searchParams.get("search") && (
            <Badge variant="secondary" className="gap-1">
              Search: {searchParams.get("search")}
              <button
                onClick={() => {
                  const params = new URLSearchParams(searchParams)
                  params.delete("search")
                  setSearchTerm("")
                  router.push(`/projects?${params.toString()}`)
                }}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                ×
              </button>
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}
