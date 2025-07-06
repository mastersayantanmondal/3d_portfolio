"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Marketing
            <br />
            <span className="text-4xl md:text-6xl">Professional</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            MBA candidate specializing in Marketing Management with proven experience in market research, distribution
            strategy, and digital marketing solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume">
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="/images/sayantan-profile.jpg"
                alt="Sayantan Mondal - Marketing Professional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary">86.11%</div>
              <div className="text-sm text-muted-foreground">BBA Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">ITC</div>
              <div className="text-sm text-muted-foreground">Internship</div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/mastersayantanmondal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sayantanmon/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
