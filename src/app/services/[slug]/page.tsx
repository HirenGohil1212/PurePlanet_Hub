import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Recycle, ShieldCheck, HardDrive, Leaf, Users, Truck } from "lucide-react";

const servicesData = {
  "e-waste-recycling": {
    title: "E-waste Recycling",
    icon: <Recycle className="h-12 w-12 text-primary" />,
    description: "Our comprehensive e-waste recycling service ensures that your discarded electronics are processed in an environmentally sound manner. We recover valuable materials and safely dispose of hazardous components, adhering to the highest industry standards.",
    image: "/image1.png",
    hint: "electronic waste recycling",
    features: [
      "Collection and transportation from your premises.",
      "Automated and manual dismantling.",
      "Segregation of materials like plastics, metals, and glass.",
      "Recovery of precious metals.",
      "Certified disposal of hazardous materials.",
    ],
  },
  "data-destruction": {
    title: "Data Destruction Service",
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    description: "Protect your sensitive information with our certified data destruction services. We provide secure and irreversible destruction of data from hard drives, SSDs, tapes, and other storage media, ensuring your company's compliance and peace of mind.",
    image: "https://placehold.co/1200x600.png",
    hint: "data security server",
    features: [
      "On-site and off-site destruction options.",
      "Physical shredding and degaussing.",
      "Certified software-based data erasure.",
      "Detailed reporting and certificates of destruction.",
      "Full chain-of-custody tracking.",
    ],
  },
  "plastic-waste-management": {
    title: "Plastic Waste Management",
    icon: <HardDrive className="h-12 w-12 text-primary" />,
    description: "We offer end-to-end plastic waste management solutions, helping businesses achieve their sustainability goals. From collection to processing, we transform plastic waste into valuable raw materials for new products.",
    image: "https://placehold.co/1200x600.png",
    hint: "plastic bottles recycling",
    features: [
      "Collection of various types of plastic waste.",
      "Sorting, cleaning, and processing.",
      "Production of high-quality recycled plastic pellets.",
      "Partnerships with manufacturers to create a circular economy.",
      "Consultancy on reducing plastic consumption.",
    ],
  },
  "environmental-awareness-campaigns": {
    title: "Environmental Awareness Campaigns",
    icon: <Users className="h-12 w-12 text-primary" />,
    description: "We believe that education is key to driving change. Our awareness campaigns are designed to educate communities, schools, and corporations about the importance of proper waste management and sustainable practices.",
    image: "/image2.png",
    hint: "community seminar",
    features: [
      "Customized workshops and seminars.",
      "Development of educational materials.",
      "Community collection drives and events.",
      "School programs and competitions.",
      "Corporate training on sustainability.",
    ],

  },
  "compliance-management": {
    title: "Compliance Management",
    icon: <Leaf className="h-12 w-12 text-primary" />,
    description: "Navigating the complex landscape of environmental regulations can be daunting. Our compliance management services help your business stay compliant with all national and international e-waste and plastic waste regulations.",
    image: "/image3.png",
    hint: "legal documents compliance",
    features: [
      "Extended Producer Responsibility (EPR) fulfillment.",
      "Regulatory reporting and documentation.",
      "Environmental audits and assessments.",
      "Guidance on policy changes.",
      "Certification assistance (e.g., ISO 14001).",
    ],
  },
  "reverse-logistics": {
    title: "Reverse Logistics",
    icon: <Truck className="h-12 w-12 text-primary" />,
    description: "Our efficient and secure reverse logistics network is the backbone of our operations. We manage the entire process of collecting and transporting waste from consumers back to our processing facilities, ensuring a seamless and reliable service.",
    image: "/image4.png",
    hint: "logistics truck fleet",
    features: [
      "Nationwide collection network.",
      "Secure, GPS-tracked transportation.",
      "Flexible pickup scheduling.",
      "Specialized handling for sensitive equipment.",
      "Real-time tracking and reporting portal.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="fade-in">
      <section className="w-full bg-primary/10 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {service.icon}
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              {service.title}
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={service.image}
                width={600}
                height={400}
                alt={service.title}
                className="overflow-hidden rounded-xl object-cover"
                data-ai-hint={service.hint}
              />
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
