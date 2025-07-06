"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = {
    "Digital Marketing": [
      { name: "Google Digital Garage", level: 90, years: 3 },
      { name: "HubSpot Marketing", level: 85, years: 1 },
      { name: "Social Media Marketing", level: 80, years: 2 },
      { name: "SEO/SEM", level: 75, years: 2 },
      { name: "Content Marketing", level: 80, years: 2 },
    ],
    "Analytics & Tools": [
      { name: "Microsoft Excel", level: 95, years: 4 },
      { name: "Google Analytics", level: 80, years: 2 },
      { name: "VAJRA 2.0 WebDMS", level: 85, years: 1 },
      { name: "CRM Tools", level: 70, years: 1 },
    ],
    "Business Strategy": [
      { name: "Market Research", level: 90, years: 2 },
      { name: "Distribution Strategy", level: 85, years: 1 },
      { name: "Sales Strategy", level: 80, years: 2 },
      { name: "Retail Management", level: 75, years: 1 },
    ],
    "Technical Skills": [
      { name: "Data Analysis", level: 85, years: 3 },
      { name: "Presentation Skills", level: 90, years: 4 },
      { name: "Project Management", level: 80, years: 2 },
      { name: "Photography", level: 75, years: 3 },
    ],
  }

  const certifications = [
    "Digital Marketing – HubSpot Academy (2024)",
    "Responsible AI: Introduction Badge – Google (2023)",
    "Excel Skills for Business – Forage (2023)",
    "Fundamentals of Digital Marketing – Google Digital Garage (2021)",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full 3D animation and development pipeline
          </p>
        </div>

        <Tabs defaultValue="Digital Marketing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {Object.keys(skillCategories).map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <Card key={skill.name}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{skill.years} years</span>
                          <Badge variant="secondary">{skill.level}%</Badge>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Certifications & Awards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
