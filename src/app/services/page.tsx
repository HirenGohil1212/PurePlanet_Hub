

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, Users, Leaf, Truck, ArrowRight } from "lucide-react";

const services = [
    {
      icon: <Recycle className="h-10 w-10 text-primary" />,
      title: "E-Waste Recycling",
      description: "Safe and efficient processing of all types of electronic waste in our state-of-the-art facilities.",
      href: "/services/e-waste-recycling",
      image: "/image1.png",
      hint: "electronic waste recycling",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Awareness Campaigns",
      description: "Educating communities and corporations on the importance of sustainable waste management practices.",
      href: "/services/environmental-awareness-campaigns",
      image: "/image2.png",
      hint: "community seminar",
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Compliance Management",
      description: "Helping businesses navigate complex environmental regulations and meet their EPR obligations.",
      href: "/services/compliance-management",
      image: "/image3.png",
      hint: "business compliance",
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Reverse Logistics",
      description: "Efficient and secure collection and transportation of waste from consumers back to our facilities.",
      href: "/services/reverse-logistics",
      image: "/image4.png",
      hint: "logistics truck",
    }
];

export default function ServicesPage() {
  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                 <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none fade-in-up">
                  Comprehensive EPR Services
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Extended Producer Responsibility (EPR) is a policy approach under which producers are given a significant responsibility – financial and/or physical – for the treatment or disposal of post-consumer products. At Pure Planet Recycling, we provide end-to-end solutions to help companies meet their EPR targets and contribute to a circular economy.
                </p>
              </div>
            </div>
            <Image
              src="/image5.png"
              width="600"
              height="400"
              alt="EPR Services"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="circular economy diagram"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl fade-in-up">Our Service Offerings</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg">
              We offer a full suite of services to manage your e-waste and plastic waste responsibly, ensuring compliance and promoting sustainability.
            </p>
          </div>
          <div className="grid gap-8 pt-12 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden sm:flex-row card-lift">
                <CardHeader className="p-0 sm:w-1/3">
                  <Image
                    src={service.image}
                    width={400}
                    height={400}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    data-ai-hint={service.hint}
                  />
                </CardHeader>
                <div className="flex flex-1 flex-col justify-between p-6">
                    <CardContent className="p-0">
                        <div className="mb-4">{service.icon}</div>
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                        <p className="mt-2 text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <div className="mt-4">
                      <Button asChild variant="outline">
                        <Link href={service.href}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
