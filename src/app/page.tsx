"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, ShieldCheck, HardDrive, Leaf } from "lucide-react";

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
  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col justify-center p-8 md:p-12">
                                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                    {item.title}
                                </h1>
                                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                                    {item.description}
                                </p>
                                <div className="mt-6">
                                    <Button asChild size="lg">
                                        <Link href={item.href}>
                                            {item.buttonText}
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative h-64 md:h-auto">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    data-ai-hint={item.hint}
                                />
                            </div>
                        </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
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
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Make a Difference?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Partner with us to manage your e-waste responsibly. Let's work together for a cleaner, greener planet.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
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
