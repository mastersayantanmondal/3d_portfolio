import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Quick Links": [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/resume", label: "Resume" },
      { href: "/blog", label: "Blog" },
    ],
    Services: [
      { href: "/services/animation", label: "3D Animation" },
      { href: "/services/vfx", label: "Visual Effects" },
      { href: "/services/rigging", label: "Character Rigging" },
      { href: "/services/consulting", label: "Consulting" },
    ],
    Resources: [
      { href: "/tutorials", label: "Tutorials" },
      { href: "/downloads", label: "Downloads" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/sayantanmon/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mastersayantanmondal", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              Sayantan<span className="text-primary">M</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              MBA candidate specializing in Marketing Management with proven experience in market research, distribution
              strategy, and digital marketing solutions.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:sayantanmondal1999.15@gmail.com" className="hover:text-primary transition-colors">
                  sayantanmondal1999.15@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+917686882620" className="hover:text-primary transition-colors">
                  7686882620
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Sayantan Mondal. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow me:</span>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
