import { Download, Mail, Phone, MapPin, ExternalLink, Calendar, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ResumePage() {
  const experience = [
    {
      title: "Summer Intern",
      company: "ITC Limited",
      period: "March 2024 – June 2024",
      description:
        "Conducted comprehensive market analysis and implemented distribution strategies to improve sales effectiveness.",
      achievements: [
        "Conducted comprehensive market gap analysis to identify growth opportunities",
        "Designed and executed optimized distribution strategies to improve sales effectiveness",
        "Expanded retail presence by onboarding new outlets across targeted regions",
        "Trained distributor sales personnel on VAJRA 2.0 WebDMS, enhancing operational productivity",
      ],
    },
  ]

  const education = [
    {
      degree: "MBA, PGPM – Marketing Management",
      school: "IQ City United World School of Business (Vidyasagar University)",
      period: "Expected 2025",
      location: "West Bengal",
    },
    {
      degree: "Bachelor of Business Administration (BBA)",
      school: "Netaji Subhash Engineering College (M.A.K.A.U.T.)",
      period: "2023",
      score: "86.11%",
      location: "West Bengal",
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      school: "Mukul Bose Memorial Institution (WBCHSE)",
      period: "2020",
      score: "80.40%",
      location: "West Bengal",
    },
    {
      degree: "Secondary Education (Class X)",
      school: "Panchasayar Siksha Niketan (WBBSE)",
      period: "2016",
      score: "72.85%",
      location: "West Bengal",
    },
  ]

  const skills = [
    "Digital Marketing Platforms",
    "Microsoft Excel & Data Analysis",
    "WebDMS (VAJRA 2.0)",
    "Market Research & Sales Strategy",
    "CRM Tools",
    "Google Analytics",
    "HubSpot Marketing",
    "Photography",
  ]

  const certifications = [
    "Digital Marketing – HubSpot Academy (2024)",
    "Responsible AI: Introduction Badge – Google (2023)",
    "Excel Skills for Business (Job Simulation) – Forage (2023)",
    "Fundamentals of Digital Marketing – Google Digital Garage (2021)",
  ]

  const projects = [
    {
      title: "Retail Expansion Strategy",
      description: "Increased retail coverage through the addition of new sales outlets",
    },
    {
      title: "Digital Enablement via WebDMS",
      description: "Improved distributor operations by training teams on the VAJRA 2.0 system",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sayantan Mondal</h1>
        <p className="text-xl text-muted-foreground mb-6">Marketing Professional & MBA Candidate</p>
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
            <Image src="/images/sayantan-profile.jpg" alt="Sayantan Mondal" fill className="object-cover" />
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-6">
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Online
          </Button>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sayantanmondal1999.15@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>7686882620</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kolkata, West Bengal - 700084</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>DOB: 15/09/1999</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Garagachha Khelaram Sarder Sarani, Behind Amulya Shova, P.O.- Garia, Kolkata - 700084
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sayantanmon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">LinkedIn</p>
                  <p className="text-sm text-blue-700">linkedin.com/in/sayantanmon</p>
                </div>
              </a>
              <a
                href="https://github.com/mastersayantanmondal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <p className="text-sm text-gray-700">github.com/mastersayantanmondal</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Highly driven MBA candidate specializing in Marketing Management, with strong academic credentials and
              practical internship experience at ITC Limited. Skilled in market research, distribution strategy, and
              digital tools with a passion for delivering data-driven marketing solutions. Adept at leveraging digital
              platforms and tools to increase business efficiency and engagement.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-primary font-medium mb-2">{job.company}</p>
                <p className="text-muted-foreground mb-3">{job.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-primary font-medium">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                {edu.score && <p className="text-sm font-medium mt-1">Score: {edu.score}</p>}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Key Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Extra-Curricular */}
        <Card>
          <CardHeader>
            <CardTitle>Extra-Curricular Activities & Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  Participated as a beta tester for software applications, offering usability and performance feedback
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Photography enthusiast with a creative eye for both urban and natural landscapes</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
