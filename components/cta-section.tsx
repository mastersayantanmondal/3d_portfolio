import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to drive your business growth with data-driven marketing strategies? Let's connect and discuss how I
              can help achieve your marketing goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sayantanmon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-700 hover:text-blue-800"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/mastersayantanmondal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-700 hover:text-gray-800"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="mailto:sayantanmondal1999.15@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-green-700 hover:text-green-800"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
