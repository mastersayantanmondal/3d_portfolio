import { Github, Linkedin, Mail } from "lucide-react"

interface SocialLinksProps {
  variant?: "default" | "compact" | "large"
  showLabels?: boolean
}

export default function SocialLinks({ variant = "default", showLabels = false }: SocialLinksProps) {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sayantanmon/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
      username: "@sayantanmon",
    },
    {
      icon: Github,
      href: "https://github.com/mastersayantanmondal",
      label: "GitHub",
      color: "hover:bg-gray-800",
      username: "@mastersayantanmondal",
    },
    {
      icon: Mail,
      href: "mailto:sayantanmondal1999.15@gmail.com",
      label: "Email",
      color: "hover:bg-red-600",
      username: "sayantanmondal1999.15@gmail.com",
    },
  ]

  const getSize = () => {
    switch (variant) {
      case "compact":
        return "w-8 h-8"
      case "large":
        return "w-14 h-14"
      default:
        return "w-10 h-10"
    }
  }

  const getIconSize = () => {
    switch (variant) {
      case "compact":
        return "w-4 h-4"
      case "large":
        return "w-7 h-7"
      default:
        return "w-5 h-5"
    }
  }

  if (showLabels) {
    return (
      <div className="space-y-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
          >
            <div
              className={`${getSize()} bg-primary/10 rounded-lg flex items-center justify-center ${social.color} group-hover:text-white transition-colors`}
            >
              <social.icon className={getIconSize()} />
            </div>
            <div>
              <p className="font-medium">{social.label}</p>
              <p className="text-sm text-muted-foreground">{social.username}</p>
            </div>
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${getSize()} bg-primary/10 rounded-lg flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
          aria-label={social.label}
        >
          <social.icon className={getIconSize()} />
        </a>
      ))}
    </div>
  )
}
