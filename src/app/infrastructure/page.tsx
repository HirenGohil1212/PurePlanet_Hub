import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Warehouse, Factory, TestTube } from "lucide-react";

const facilities = [
  {
    title: "Automated Sorting Facility",
    description: "Our main processing plant features advanced automated sorting technology to efficiently separate different types of e-waste, maximizing resource recovery.",
    image: "https://placehold.co/600x400.png",
    hint: "factory conveyor belt",
    icon: <Factory className="h-8 w-8 text-primary" />
  },
  {
    title: "Secure Data Destruction Center",
    description: "A state-of-the-art, access-controlled facility dedicated to the physical and digital destruction of data-bearing devices, ensuring 100% security.",
    image: "https://placehold.co/600x400.png",
    hint: "secure data room",
    icon: <Warehouse className="h-8 w-8 text-primary" />
  },
  {
    title: "Plastics Recycling Plant",
    description: "Equipped with modern machinery for shredding, washing, and pelletizing various types of plastic waste for re-entry into the manufacturing cycle.",
    image: "https://placehold.co/600x400.png",
    hint: "plastic recycling machine",
    icon: <Truck className="h-8 w-8 text-primary" />
  },
  {
    title: "Research & Development Lab",
    description: "Our in-house R&D lab focuses on developing new, more efficient recycling techniques and finding innovative uses for recovered materials.",
    image: "https://placehold.co/600x400.png",
    hint: "science laboratory",
    icon: <TestTube className="h-8 w-8 text-primary" />
  },
];

export default function InfrastructurePage() {
  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Our State-of-the-Art Infrastructure
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              We invest in the latest technology and facilities to ensure the most efficient, secure, and environmentally friendly processing of waste materials.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <div className="relative h-64 w-full">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={facility.hint}
                  />
                </div>
                <CardHeader className="flex flex-row items-start gap-4">
                  {facility.icon}
                  <div className="flex-grow">
                    <CardTitle className="font-headline text-2xl">{facility.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{facility.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
