"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import SocialLinks from "@/components/social-links"

export default function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about driving business growth through strategic marketing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I'm a highly driven MBA candidate specializing in Marketing Management with strong academic credentials
                and practical internship experience at ITC Limited. My journey began with a Bachelor of Business
                Administration where I achieved 86.11%, and has evolved into comprehensive expertise in market research,
                distribution strategy, and digital marketing solutions.
              </p>
              <p className="text-muted-foreground">
                I believe that great marketing is not just about promoting products, but about understanding consumer
                behavior, market dynamics, and creating data-driven strategies that deliver measurable results. Every
                project I work on is an opportunity to leverage digital platforms and tools to increase business
                efficiency and engagement.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {[
                  "MBA candidate in Marketing Management (Expected 2025)",
                  "Internship experience at ITC Limited with proven results",
                  "Strong academic performance with 86.11% in BBA",
                  "Multiple digital marketing certifications from Google and HubSpot",
                  "Expertise in market research and distribution strategy",
                ].map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Digital Marketing",
                  "Market Research",
                  "Distribution Strategy",
                  "Retail Expansion",
                  "Data Analytics",
                  "Photography",
                ].map((interest, index) => (
                  <Badge key={index} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
              <SocialLinks showLabels />
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <Image
                  src="/images/sayantan-profile.jpg"
                  alt="Sayantan Mondal - Marketing Professional"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Sayantan Mondal</h3>
                  <p className="text-lg opacity-90">Marketing Professional</p>
                  <div className="flex gap-2 mt-3">
                    <a
                      href="https://www.linkedin.com/in/sayantanmon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/mastersayantanmondal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="GitHub"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
