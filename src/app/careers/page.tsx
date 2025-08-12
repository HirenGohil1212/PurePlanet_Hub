
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, Heart, TreePine, Users, Mail } from "lucide-react";

const jobOpenings = [
  {
    id: "logistics-manager",
    title: "Logistics Manager",
    location: "New York, NY",
    department: "Operations",
    experience: "4 to 5 Yrs. in logistics and supply chain management.",
    package: "Competitive, based on experience.",
    noticePeriod: "Immediate to 30 Days",
    jd: "We are seeking an experienced Logistics Manager to oversee our reverse logistics operations. The ideal candidate will have a strong background in supply chain management and a passion for sustainability.",
    education: "B.B.A or M.B.A in Supply Chain Management.",
  },
  {
    id: "data-security-specialist",
    title: "Data Security Specialist",
    location: "San Francisco, CA",
    department: "IT & Security",
    experience: "2 to 3 Yrs. in IT security and data management.",
    package: "Competitive, based on experience.",
    noticePeriod: "Immediate to 15 Days",
    jd: "Join our team as a Data Security Specialist to ensure the secure handling and destruction of sensitive data. Certifications like CISSP or CISM are a plus. Must have knowledge of data privacy regulations.",
    education: "B.S. in Cybersecurity or related field.",
  },
  {
    id: "environmental-educator",
    title: "Environmental Educator",
    location: "Remote",
    department: "Community Outreach",
    experience: "1 to 2 Yrs. in environmental science or education.",
    package: "Competitive, based on experience.",
    noticePeriod: "Immediate to 30 Days",
    jd: "We are looking for an enthusiastic Environmental Educator to lead our awareness campaigns. This role involves creating educational materials and conducting workshops for communities and corporations.",
    education: "B.S. in Environmental Science or Education.",
  },
    {
    id: "recycling-technician",
    title: "Recycling Technician",
    location: "Chicago, IL",
    department: "Plant Operations",
    experience: "0 to 1 Yr. in a plant or factory environment.",
    package: "Competitive, based on experience.",
    noticePeriod: "Immediate",
    jd: "Responsible for sorting, dismantling, and processing electronic waste in our state-of-the-art facility. Must be safety-conscious and detail-oriented. Ability to work in shifts.",
    education: "High School Diploma or equivalent.",
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

  const getMailtoLink = (jobTitle: string) => {
    const subject = `Application for the position of ${jobTitle}`;
    const body = `Dear Hiring Manager,\n\nPlease find my resume attached for the position of ${jobTitle}.\n\nThank you,\n[Your Name]`;
    return `mailto:careers@pureplanetrecycling.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getWhatsAppLink = (jobTitle: string) => {
    const message = `I would like to apply for the position of ${jobTitle}.`;
    return `https://wa.me/11234567890?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="fade-in">
      <section className="w-full bg-primary/10 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                  Join Our Mission
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Build a rewarding career at Pure Planet Recycling and help us create a more sustainable world. We're looking for passionate, innovative individuals to join our team.
                </p>
              </div>
            </div>
            <Image
              src="/image7.png"
              width="600"
              height="400"
              alt="Pure Planet Recycling Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="diverse team meeting"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why Work at Pure Planet Recycling?</h2>
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
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <span className="font-semibold text-foreground">Experience: </span>
                        {job.experience}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Package: </span>
                        {job.package}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Notice Period: </span>
                        {job.noticePeriod}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Job Description: </span>
                        {job.jd}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Education: </span>
                        {job.education}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 pt-4">
                           <Button asChild className="w-full">
                              <Link href={getWhatsAppLink(job.title)} target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                  Apply on WhatsApp
                              </Link>
                          </Button>
                          <Button asChild variant="secondary" className="w-full">
                              <Link href={getMailtoLink(job.title)}>
                                  <Mail className="mr-2 h-5 w-5" />
                                  Apply on Email
                              </Link>
                          </Button>
                      </div>
                    </div>
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
