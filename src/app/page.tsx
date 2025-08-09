"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, ShieldCheck, HardDrive, Mail, Users, Leaf, Truck, Target, Eye } from "lucide-react";

const carouselItems = [
  {
    title: "E-Waste Recycling",
    description: "State-of-the-art facilities to process all types of electronic waste safely and efficiently.",
    image: "https://placehold.co/1200x600.png",
    hint: "recycling plant",
    buttonText: "Learn More",
    href: "/services/e-waste-recycling",
  },
  {
    title: "Environmental Awareness Campaigns",
    description: "Educating communities and corporations on the importance of sustainable waste management.",
    image: "https://placehold.co/1200x600.png",
    hint: "community seminar",
    buttonText: "Learn More",
    href: "/services/environmental-awareness-campaigns",
  },
  {
    title: "Compliance Management",
    description: "Helping businesses navigate environmental regulations and meet their EPR obligations.",
    image: "https://placehold.co/1200x600.png",
    hint: "business compliance",
    buttonText: "Learn More",
    href: "/services/compliance-management",
  },
  {
    title: "Reverse Logistics",
    description: "Efficient and secure collection and transportation of waste from consumers back to our facilities.",
    image: "https://placehold.co/1200x600.png",
    hint: "logistics truck",
    buttonText: "Learn More",
    href: "/services/reverse-logistics",
  },
];

const services = [
    {
      icon: <Recycle className="h-10 w-10 text-primary" />,
      title: "E-Waste Recycling",
      description: "State-of-the-art facilities to process all types of electronic waste safely and efficiently.",
      href: "/services/e-waste-recycling"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Awareness Campaigns",
      description: "Educating communities and corporations on the importance of sustainable waste management.",
      href: "/services/environmental-awareness-campaigns"
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Compliance Management",
      description: "Helping businesses navigate environmental regulations and meet their EPR obligations.",
      href: "/services/compliance-management"
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Reverse Logistics",
      description: "Efficient and secure collection and transportation of waste from consumers back to our facilities.",
      href: "/services/reverse-logistics"
    }
  ];

const aboutItems = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Our Mission",
      description: "To provide innovative and environmentally responsible solutions for managing electronic and plastic waste, contributing to a sustainable circular economy.",
    },
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: "Our Vision",
      description: "To be a global leader in the e-waste management industry, setting new standards for sustainability, efficiency, and data security.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Our Values",
      description: "Sustainability, Integrity, Innovation, Customer Centricity, and Safety are the core principles that guide every decision we make.",
    }
];

export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
    );
  return (
    <div className="fade-in">
      <section className="w-full">
        <div className="relative">
          <Carousel 
            className="w-full" 
            opts={{ loop: true }}
            plugins={[plugin.current]}
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-screen w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="brightness-50"
                      data-ai-hint={item.hint}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                      <div className="bg-black/30 p-8 rounded-lg">
                        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                          {item.title}
                        </h1>
                        <p className="mt-4 max-w-[600px] text-lg md:text-xl">
                          {item.description}
                        </p>
                        <div className="mt-6">
                          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href={item.href}>
                              {item.buttonText}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

       <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Pioneering Sustainable Solutions</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Discover our mission to pioneer sustainable solutions for a cleaner planet. We are a team of passionate individuals committed to responsible e-waste management and environmental stewardship through innovative recycling programs.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
                {aboutItems.map((item, index) => (
                    <Card key={index} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader className="flex flex-col items-center text-center">
                            {item.icon}
                            <CardTitle className="mt-4 font-headline">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow">
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="text-center">
                <Button asChild size="lg">
                    <Link href="/about">Meet the Team</Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Your Partner in Sustainability</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        At Pure Planet Recycling, we are dedicated to providing comprehensive and responsible solutions for e-waste and plastic management. We believe in creating a circular economy where waste is transformed into valuable resources.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
                {services.map((service, index) => (
                    <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader className="flex flex-col items-center text-center">
                            {service.icon}
                            <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <Button variant="outline" asChild>
                                <Link href={service.href}>Learn More</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="EPR Services"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover order-last lg:order-first"
              data-ai-hint="recycling process"
            />
          <div className="space-y-4 lg:text-right">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive EPR Services</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
             From e-waste recycling and secure data destruction to plastic waste management, we offer a full suite of Extended Producer Responsibility (EPR) services to meet your compliance needs and sustainability goals.
            </p>
            <Button asChild size="lg">
                <Link href="/services/e-waste-recycling">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* 
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pure Planet Recycling Insights</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
             Stay informed with our latest articles, news, and insights. Our blog covers everything from the dangers of e-waste to tips for organizing community recycling drives and understanding corporate compliance.
            </p>
            <Button asChild size="lg">
                <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
          <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Blog"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="person reading article"
            />
        </div>
      </section>
      */}

       <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
             <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Infrastructure"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover order-last lg:order-first"
              data-ai-hint="modern factory"
            />
          <div className="space-y-4 lg:text-right">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Advanced Infrastructure</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              We invest in the latest technology and state-of-the-art facilities. Explore our automated sorting centers, secure data destruction labs, and specialized plastics recycling plants that power our operations.
            </p>
            <Button asChild size="lg">
                <Link href="/infrastructure">See Our Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/*
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Valued Partners</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Collaboration is key to our success. We are proud to partner with leading technology corporations, non-profits, and city governments to amplify our impact and drive the circular economy forward.
            </p>
            <Button asChild size="lg">
                <Link href="/partners">Meet Our Partners</Link>
            </Button>
          </div>
          <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Partners"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="business handshake"
            />
        </div>
      </section>
      */}

      {/*
      <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
             <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Careers"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover order-last lg:order-first"
              data-ai-hint="diverse team working"
            />
          <div className="space-y-4 lg:text-right">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Are you passionate about sustainability and technology? Explore rewarding career opportunities at Pure Planet Recycling and help us build a greener future. We're looking for innovative individuals to join our growing team.
            </p>
            <Button asChild size="lg">
                <Link href="/careers">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </section>
      */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Have a question? Get in touch!
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team is here to help. Contact us for inquiries, partnership opportunities, or to schedule a pickup.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg">
                <Link href="https://wa.me/11234567890" target="_blank">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Send us on WhatsApp
                </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="mailto:contact@pureplanetrecycling.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

    