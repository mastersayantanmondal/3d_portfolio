import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function ContactCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center pb-4">
        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20 mb-4">
          <Image src="/images/sayantan-profile.jpg" alt="Sayantan Mondal" fill className="object-cover" />
        </div>
        <CardTitle className="text-xl">Sayantan Mondal</CardTitle>
        <p className="text-sm text-muted-foreground">Marketing Professional</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
            <a
              href="mailto:sayantanmondal1999.15@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors truncate"
            >
              sayantanmondal1999.15@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
            <a href="tel:+917686882620" className="text-muted-foreground hover:text-primary transition-colors">
              7686882620
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">Kolkata, West Bengal</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-3">Connect with me:</p>
          <div className="flex justify-center gap-2">
            <a
              href="https://www.linkedin.com/in/sayantanmon/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/mastersayantanmondal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-4 space-y-2">
          <Button asChild className="w-full">
            <Link href="/resume">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full bg-transparent">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
