
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Leaf, Target, Eye, Users } from "lucide-react";

const teamMembers = [
  { name: "Danish Malik", role: "Founder", avatar: "/Founder2.png", fallback: "DM" },
  { name: "Bilal Khan", role: "Founder", avatar: "/Founder1.png", fallback: "BK" },
];

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section className="w-full bg-primary/10 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none fade-in-up">
                  About Pure Planet Recycling
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Sustainable solutions for a cleaner planet. We are committed to responsible e-waste management and environmental stewardship.
                </p>
              </div>
            </div>
            <Image
              src="/image8.png"
              width="600"
              height="400"
              alt="Eco-friendly operations"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="sustainable technology"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            <Card className="card-lift">
              <CardHeader className="flex flex-row items-center gap-4">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To provide innovative and environmentally responsible solutions for managing electronic and plastic waste, contributing to a sustainable circular economy and a healthier planet for future generations.</p>
              </CardContent>
            </Card>
            <Card className="card-lift">
              <CardHeader className="flex flex-row items-center gap-4">
                <Eye className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be a global leader in the e-waste management industry, setting new standards for sustainability, efficiency, and data security, and inspiring a worldwide movement towards responsible consumption and disposal.</p>
              </CardContent>
            </Card>
            <Card className="card-lift">
              <CardHeader className="flex flex-row items-center gap-4">
                <Leaf className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li>Sustainability</li>
                    <li>Integrity</li>
                    <li>Innovation</li>
                    <li>Customer Centricity</li>
                    <li>Safety</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <Users className="mx-auto h-12 w-12 text-primary"/>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl fade-in-up">Meet Our Founders</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The passionate individuals driving our mission forward.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid grid-cols-2 gap-8 py-12 sm:grid-cols-2 md:grid-cols-2">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center space-y-2 card-lift">
                        <Avatar className="h-32 w-32">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.fallback}</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <p className="font-semibold">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
