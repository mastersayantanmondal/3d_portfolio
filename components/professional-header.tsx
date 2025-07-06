import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import SocialLinks from "@/components/social-links"

export default function ProfessionalHeader() {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl flex-shrink-0">
            <Image
              src="/images/sayantan-profile.jpg"
              alt="Sayantan Mondal - Marketing Professional"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Professional Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Sayantan Mondal</h1>
              <p className="text-xl text-muted-foreground mb-4">Marketing Professional & MBA Candidate</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <Badge variant="default" className="text-sm">
                Marketing Management
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Digital Marketing
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Market Research
              </Badge>
              <Badge variant="secondary" className="text-sm">
                ITC Limited
              </Badge>
            </div>

            <p className="text-muted-foreground max-w-2xl mb-6">
              Highly driven MBA candidate with proven experience in market research, distribution strategy, and digital
              marketing solutions. Skilled in leveraging data-driven approaches to deliver measurable business results.
            </p>

            <div className="flex justify-center md:justify-start">
              <SocialLinks variant="default" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
