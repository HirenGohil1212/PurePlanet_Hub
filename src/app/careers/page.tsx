import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, Heart, TreePine, Users } from "lucide-react";

const jobOpenings = [
  {
    id: "logistics-manager",
    title: "Logistics Manager",
    location: "New York, NY",
    department: "Operations",
    description: "We are seeking an experienced Logistics Manager to oversee our reverse logistics operations. The ideal candidate will have a strong background in supply chain management and a passion for sustainability.",
  },
  {
    id: "data-security-specialist",
    title: "Data Security Specialist",
    location: "San Francisco, CA",
    department: "IT & Security",
    description: "Join our team as a Data Security Specialist to ensure the secure handling and destruction of sensitive data. Certifications like CISSP or CISM are a plus.",
  },
  {
    id: "environmental-educator",
    title: "Environmental Educator",
    location: "Remote",
    department: "Community Outreach",
    description: "We are looking for an enthusiastic Environmental Educator to lead our awareness campaigns. This role involves creating educational materials and conducting workshops for communities and corporations.",
  },
    {
    id: "recycling-technician",
    title: "Recycling Technician",
    location: "Chicago, IL",
    department: "Plant Operations",
    description: "Responsible for sorting, dismantling, and processing electronic waste in our state-of-the-art facility. Must be safety-conscious and detail-oriented.",
  },
];

const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family."
    },
    {
      icon: <TreePine className="h-8 w-8 text-primary" />,
      title: "Generous PTO",
      description: "We believe in work-life balance with a generous paid time off policy."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Diverse Culture",
      description: "Be a part of an inclusive and collaborative team making a real impact."
    }
]

export default function CareersPage() {
  return (
    <div className="fade-in">
      <section className="w-full bg-primary/10 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                  Join Our Mission
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Build a rewarding career at EcoHub and help us create a more sustainable world. We're looking for passionate, innovative individuals to join our team.
                </p>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="EcoHub Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="diverse team meeting"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why Work at EcoHub?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                    We're more than just a company; we're a community dedicated to making a positive impact.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
                {benefits.map((benefit, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-col items-center text-center">
                            {benefit.icon}
                            <CardTitle className="mt-4 font-headline">{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Briefcase className="h-12 w-12 text-primary" />
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Current Openings
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Find your next opportunity and grow with us.
            </p>
          </div>
          <div className="mx-auto max-w-3xl pt-12">
            <Accordion type="single" collapsible className="w-full">
              {jobOpenings.map((job) => (
                <AccordionItem key={job.id} value={job.id}>
                  <AccordionTrigger className="font-headline text-lg hover:no-underline">
                    <div className="flex w-full items-center justify-between pr-4">
                      <span>{job.title}</span>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{job.department}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <p className="mb-4 text-muted-foreground">{job.description}</p>
                    <Button>Apply Now</Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
