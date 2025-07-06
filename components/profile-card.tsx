import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

export default function ProfileCard() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardContent className="p-0">
        {/* Profile Image Section */}
        <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image src="/images/sayantan-profile.jpg" alt="Sayantan Mondal" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="p-6 space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Sayantan Mondal</h2>
            <p className="text-muted-foreground mb-4">Marketing Professional & MBA Candidate</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary">Marketing Management</Badge>
              <Badge variant="secondary">Digital Marketing</Badge>
              <Badge variant="secondary">Market Research</Badge>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="truncate">sayantanmondal1999.15@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>7686882620</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Kolkata, West Bengal</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-primary" />
              <span>DOB: 15/09/1999</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
