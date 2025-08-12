
"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const formattedMessage = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:contact@pureplanetrecycling.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedMessage)}`;
    const whatsappLink = `https://wa.me/919210783697?text=${encodeURIComponent(formattedMessage)}`;

  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl fade-in-up">
              Get in Touch
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-8">
             <div className="space-y-2">
                <h2 className="text-2xl font-bold font-headline fade-in-up">Contact Information</h2>
                <p className="text-muted-foreground">Find us at our office or drop us a line via email or phone.</p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">PURE PLANET RECYCLING 75,83,84 Samrock Ceramic at kanavada taluka, Tarapur, Kheda, Gujarat 388180</p>
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
                <CardContent className="flex flex-col space-y-1">
                   <a href="tel:9210783697" className="text-muted-foreground hover:text-primary">9210783697</a>
                   <a href="tel:9099560017" className="text-muted-foreground hover:text-primary">9099560017</a>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold font-headline fade-in-up">Follow Us</h2>
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
          <div className="space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold font-headline fade-in-up">Send Us a Message</h2>
                <p className="text-muted-foreground">Have a specific question? Fill out the form below.</p>
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

       <section className="w-full">
        <iframe
            src="https://maps.google.com/maps?q=Gujarat&t=&z=7&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[480px]"
        ></iframe>
      </section>
    </div>
  );
}
