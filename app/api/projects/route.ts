import { type NextRequest, NextResponse } from "next/server"
import { getProjects } from "@/lib/data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get("featured") === "true"
    const category = searchParams.get("category") || undefined
    const search = searchParams.get("search") || undefined
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : undefined

    const projects = await getProjects({
      featured,
      category,
      search,
      limit,
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
