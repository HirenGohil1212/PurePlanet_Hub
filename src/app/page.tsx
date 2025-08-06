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
import { ArrowRight, Recycle, ShieldCheck, HardDrive, Leaf, Users, Truck, Building, Newspaper, Handshake, Briefcase } from "lucide-react";

const carouselItems = [
  {
    title: "Revolutionizing E-Waste Management",
    description: "Join us in creating a sustainable future by responsibly recycling your electronic waste.",
    image: "https://placehold.co/1200x600.png",
    hint: "recycling plant",
    buttonText: "Our Services",
    href: "/services/e-waste-recycling",
  },
  {
    title: "Secure Data Destruction, Guaranteed",
    description: "Protect your sensitive information with our certified data destruction services.",
    image: "https://placehold.co/1200x600.png",
    hint: "data center security",
    buttonText: "Learn More",
    href: "/services/data-destruction",
  },
  {
    title: "Championing Plastic Neutrality",
    description: "From collection to recycling, we provide comprehensive plastic waste solutions.",
    image: "https://placehold.co/1200x600.png",
    hint: "plastic recycling",
    buttonText: "Explore Now",
    href: "/services/plastic-waste-management",
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
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Data Destruction",
      description: "Certified and secure destruction of data from all storage devices, ensuring complete privacy.",
      href: "/services/data-destruction"
    },
    {
      icon: <HardDrive className="h-10 w-10 text-primary" />,
      title: "Plastic Waste",
      description: "Innovative solutions for plastic waste management, promoting a circular economy.",
      href: "/services/plastic-waste-management"
    }
  ];

export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
  return (
    <div className="fade-in">
      <section className="w-full">
        <div className="relative">
          <Carousel 
            className="w-full" 
            opts={{ loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
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
                        <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
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

      <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Commitment</div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Your Partner in Sustainability</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        At EcoHub, we are dedicated to providing comprehensive and responsible solutions for e-waste and plastic management. We believe in creating a circular economy where waste is transformed into valuable resources.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
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
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About EcoHub</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Discover our mission to pioneer sustainable solutions for a cleaner planet. We are a team of passionate individuals committed to responsible e-waste management and environmental stewardship through innovative recycling programs.
            </p>
            <Button asChild size="lg">
                <Link href="/about">Meet the Team</Link>
            </Button>
          </div>
          <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="About EcoHub"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="sustainable technology"
            />
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
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">EcoHub Insights</h2>
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
              Are you passionate about sustainability and technology? Explore rewarding career opportunities at EcoHub and help us build a greener future. We're looking for innovative individuals to join our growing team.
            </p>
            <Button asChild size="lg">
                <Link href="/careers">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Make a Difference?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Partner with us to manage your e-waste responsibly. Let's work together for a cleaner, greener planet.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg">
                <Link href="/about">About Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
