
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, ShieldCheck, HardDrive, Mail, Users, Leaf, Truck, Target, Eye, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const carouselItems = [
  {
    title: "E-Waste Recycling",
    description: "State-of-the-art facilities to process all types of electronic waste safely and efficiently.",
    image: "/image1.png",
    hint: "recycling plant",
    buttonText: "Learn More",
    href: "/services/e-waste-recycling",
  },
  {
    title: "Environmental Awareness Campaigns",
    description: "Educating communities and corporations on the importance of sustainable waste management.",
    image: "/image2.png",
    hint: "community seminar",
    buttonText: "Learn More",
    href: "/services/environmental-awareness-campaigns",
  },
  {
    title: "Compliance Management",
    description: "Helping businesses navigate environmental regulations and meet their EPR obligations.",
    image: "/image3.png",
    hint: "business compliance",
    buttonText: "Learn More",
    href: "/services/compliance-management",
  },
  {
    title: "Reverse Logistics",
    description: "Efficient and secure collection and transportation of waste from consumers back to our facilities.",
    image: "/image4.png",
    hint: "logistics truck",
    buttonText: "Learn More",
    href: "/services/reverse-logistics",
  },
];

const services = [
    {
      icon: <Recycle className="h-10 w-10 text-primary" />,
      title: "E-Waste Recycling",
      description: "Safe and efficient processing of all types of electronic waste in our state-of-the-art facilities.",
      href: "/services/e-waste-recycling"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Awareness Campaigns",
      description: "Educating communities on sustainable waste management. We help businesses with EPR compliance.",
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

const teamMembers = [
  { name: "Alex Johnson", role: "CEO & Founder", avatar: "AJ" },
  { name: "Maria Garcia", role: "Head of Operations", avatar: "MG" },
];

export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
    );

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const formattedMessage = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:contact@pureplanetrecycling.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedMessage)}`;
    const whatsappLink = `https://wa.me/11234567890?text=${encodeURIComponent(formattedMessage)}`;


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
             <div className="mx-auto grid max-w-md grid-cols-2 gap-8 py-12">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center space-y-2">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={`https://placehold.co/100x100.png?text=${member.avatar}`} />
                            <AvatarFallback>{member.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <p className="font-semibold">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="text-center">
                <Button asChild size="lg">
                    <Link href="/about">Meet the Full Team</Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive EPR Services</h2>
                     <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Extended Producer Responsibility (EPR) is a policy approach where producers are given significant responsibility for the treatment or disposal of post-consumer products. We provide end-to-end solutions to meet your compliance needs and sustainability goals.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader className="flex flex-col items-center text-center">
                            {service.icon}
                            <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow">
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
              src="/image6.png"
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

       <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <CardTitle>Our Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">123 Sustainability Ave,<br/>Green City, PC 12345</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <CardTitle>Email Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:contact@pureplanetrecycling.com" className="text-muted-foreground hover:text-primary">contact@pureplanetrecycling.com</a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <CardTitle>Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-headline">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                      <Facebook className="h-6 w-6 text-primary" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                      <Linkedin className="h-6 w-6 text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                      <Twitter className="h-6 w-6 text-primary" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                      <Instagram className="h-6 w-6 text-primary" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Input type="tel" placeholder="Your Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  <Input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                  <Textarea placeholder="Your Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="w-full">
                      <Link href={whatsappLink} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Send on WhatsApp
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" className="w-full">
                      <Link href={mailtoLink}>
                        <Mail className="mr-2 h-5 w-5" />
                        Send on Email
                      </Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
