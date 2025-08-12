import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake } from "lucide-react";

const partners = [
  { name: "TechCorp", logo: "https://placehold.co/200x100.png", hint: "corporate logo", description: "A leading technology company committed to corporate social responsibility and sustainable practices." },
  { name: "GreenPlanet NGO", logo: "https://placehold.co/200x100.png", hint: "environmental logo", description: "Our primary non-profit partner for community awareness and environmental campaigns." },
  { name: "Innovate Solutions", logo: "https://placehold.co/200x100.png", hint: "tech logo", description: "Collaborating on R&D for next-generation recycling technologies." },
  { name: "City of Metropolis", logo: "https://placehold.co/200x100.png", hint: "city seal", description: "The official e-waste management partner for the city's municipal solid waste program." },
  { name: "Global Logistics Inc.", logo: "https://placehold.co/200x100.png", hint: "logistics logo", description: "Providing seamless and efficient reverse logistics and transportation services." },
  { name: "FuturePlast Co.", logo: "https://placehold.co/200x100.png", hint: "manufacturing logo", description: "A key partner in the circular economy, utilizing our recycled plastic pellets in their products." },
];

export default function PartnersPage() {
  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Handshake className="h-12 w-12 text-primary" />
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl fade-in-up">
              Our Valued Partners
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Collaboration is at the heart of what we do. We are proud to work with a diverse range of organizations to achieve our sustainability goals.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.name} className="flex flex-col items-center text-center card-lift">
                <CardHeader className="p-6">
                  <Image
                    src={partner.logo}
                    width={200}
                    height={100}
                    alt={`${partner.name} logo`}
                    className="h-20 w-auto object-contain"
                    data-ai-hint={partner.hint}
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <CardTitle className="font-headline text-xl">{partner.name}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
