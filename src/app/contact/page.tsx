
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
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
                <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
                <p className="text-muted-foreground">Find us at our office or drop us a line via email or phone.</p>
            </div>
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
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold font-headline">Send Us a Message</h2>
                <p className="text-muted-foreground">Have a specific question? Fill out the form below.</p>
            </div>
            <Card>
                <CardContent className="p-6">
                    <form className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Input placeholder="Subject" />
                        <Textarea placeholder="Your Message" rows={5} />
                        <Button type="submit" className="w-full">
                            <Send className="mr-2 h-4 w-4"/>
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

       <section className="w-full">
        <Image
          src="https://placehold.co/1920x480.png"
          width={1920}
          height={480}
          alt="Office Location Map"
          className="w-full h-[480px] object-cover"
          data-ai-hint="office map location"
        />
      </section>
    </div>
  );
}
