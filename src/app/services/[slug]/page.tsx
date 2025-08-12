
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
    content: [
      "Electronic waste, or e-waste, is the world's fastest-growing waste stream. When improperly disposed of, toxic substances like lead, mercury, and cadmium can seep into our soil and water, posing severe risks to our environment and health.",
      "At Pure Planet Recycling, we provide a responsible and certified solution for e-waste. Our advanced facilities ensure that hazardous materials are neutralized safely, while valuable resources are recovered and reintroduced into the circular economy, minimizing the environmental footprint of your old electronics."
    ],
    features: [
      "Collection and transportation from your premises.",
      "Automated and manual dismantling.",
      "Segregation of materials like plastics, metals, and glass.",
      "Recovery of precious metals.",
      "Certified disposal of hazardous materials.",
    ],
     whyChooseUs: {
      title: "Why Choose Our E-Waste Recycling?",
      points: [
        "State-of-the-art technology for maximum resource recovery.",
        "Strict adherence to all environmental and safety regulations.",
        "Transparent and traceable process with complete documentation.",
        "Customized solutions for both individual and corporate clients."
      ]
    }
  },
  "data-destruction": {
    title: "Data Destruction Service",
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    description: "Protect your sensitive information with our certified data destruction services. We provide secure and irreversible destruction of data from hard drives, SSDs, tapes, and other storage media, ensuring your company's compliance and peace of mind.",
    image: "https://placehold.co/1200x600.png",
    hint: "data security server",
     content: [
      "In the digital age, data is a critical asset. Improper disposal of storage devices can lead to severe data breaches, financial penalties, and reputational damage.",
      "We use industry-leading techniques like physical shredding and certified data erasure to guarantee that your information is permanently destroyed. Our secure chain-of-custody process and certificate of destruction provide you with the assurance you need to protect your business."
    ],
    features: [
      "On-site and off-site destruction options.",
      "Physical shredding and degaussing.",
      "Certified software-based data erasure.",
      "Detailed reporting and certificates of destruction.",
      "Full chain-of-custody tracking.",
    ],
     whyChooseUs: {
      title: "Why Trust Us With Your Data?",
      points: [
        "100% secure and irreversible data destruction methods.",
        "Compliance with international standards like GDPR, HIPAA, and more.",
        "Certified processes with a full audit trail.",
        "Peace of mind knowing your sensitive information is safe."
      ]
    }
  },
  "plastic-waste-management": {
    title: "Plastic Waste Management",
    icon: <HardDrive className="h-12 w-12 text-primary" />,
    description: "We offer end-to-end plastic waste management solutions, helping businesses achieve their sustainability goals. From collection to processing, we transform plastic waste into valuable raw materials for new products.",
    image: "https://placehold.co/1200x600.png",
    hint: "plastic bottles recycling",
     content: [
        "Plastic products are integral to our daily lives, but their harmful effects are a growing environmental concern. The Indian Government has implemented the Plastic Waste Management Rules, 2016, to curb the nuisance created by increasing plastic waste.",
        "The plastic waste processing is a task with merely 4 steps involved but it's a major responsibility for plastic product manufacturers. We are here to help. Pure Planet Recycling has perfect systems, resources and processes in place for plastic manufacturers to manage their waste production."
    ],
    features: [
      "Collection of various types of plastic waste.",
      "Sorting, cleaning, and processing.",
      "Production of high-quality recycled plastic pellets.",
      "Partnerships with manufacturers to create a circular economy.",
      "Consultancy on reducing plastic consumption.",
    ],
     whyChooseUs: {
      title: "Why Partner With Us for Plastic Waste?",
      points: [
        "Comprehensive solutions for all types of plastic waste.",
        "Contribution to a circular economy by turning waste into resources.",
        "Advanced technology for efficient and eco-friendly processing.",
        "Expertise in navigating plastic waste management regulations."
      ]
    }
  },
  "environmental-awareness-campaigns": {
    title: "Environmental Awareness Campaigns",
    icon: <Users className="h-12 w-12 text-primary" />,
    description: "We believe that education is key to driving change. Our awareness campaigns are designed to educate communities, schools, and corporations about the importance of proper waste management and sustainable practices.",
    image: "/image2.png",
    hint: "community seminar",
     content: [
        "Lasting change begins with knowledge. Our mission is to empower individuals and organizations with the understanding they need to make sustainable choices.",
        "Through engaging workshops, informative materials, and community events, we raise awareness about the environmental impact of waste and promote practical solutions. We believe that by working together, we can foster a culture of responsibility and create a cleaner future for all."
    ],
    features: [
      "Customized workshops and seminars.",
      "Development of educational materials.",
      "Community collection drives and events.",
      "School programs and competitions.",
      "Corporate training on sustainability.",
    ],
     whyChooseUs: {
      title: "Why Join Our Campaigns?",
      points: [
        "Engaging and impactful educational programs.",
        "Experienced educators with a passion for sustainability.",
        "Proven track record of successful community and corporate events.",
        "Empowering the next generation of environmental stewards."
      ]
    }

  },
  "compliance-management": {
    title: "Compliance Management",
    icon: <Leaf className="h-12 w-12 text-primary" />,
    description: "Navigating the complex landscape of environmental regulations can be daunting. Our compliance management services help your business stay compliant with all national and international e-waste and plastic waste regulations.",
    image: "/image3.png",
    hint: "legal documents compliance",
    content: [
        "Staying compliant with ever-evolving environmental laws is a major challenge for businesses. Failure to do so can result in significant fines and reputational damage.",
        "Our team of experts stays ahead of regulatory changes to provide you with proactive guidance. We help you fulfill your Extended Producer Responsibility (EPR) obligations, manage documentation, and implement best practices to ensure your operations are fully compliant and sustainable."
    ],
    features: [
      "Extended Producer Responsibility (EPR) fulfillment.",
      "Regulatory reporting and documentation.",
      "Environmental audits and assessments.",
      "Guidance on policy changes.",
      "Certification assistance (e.g., ISO 14001).",
    ],
     whyChooseUs: {
      title: "Why Choose Us for Compliance?",
      points: [
        "In-depth knowledge of local and international regulations.",
        "Proactive approach to ensure you're always ahead of changes.",
        "Reduced risk of fines and legal complications.",
        "Enhanced corporate reputation as an environmentally responsible organization."
      ]
    }
  },
  "reverse-logistics": {
    title: "Reverse Logistics",
    icon: <Truck className="h-12 w-12 text-primary" />,
    description: "Our efficient and secure reverse logistics network is the backbone of our operations. We manage the entire process of collecting and transporting waste from consumers back to our processing facilities, ensuring a seamless and reliable service.",
    image: "/image4.png",
    hint: "logistics truck fleet",
    content: [
        "An effective circular economy depends on a robust reverse logistics system. While traditional logistics moves products to consumers, reverse logistics brings them back for recycling or disposal.",
        "We have built a nationwide network for secure and efficient collection and transportation of waste. Our GPS-tracked fleet and real-time reporting portal provide complete transparency and peace of mind, ensuring your waste is handled responsibly from start to finish."
    ],
    features: [
      "Nationwide collection network.",
      "Secure, GPS-tracked transportation.",
      "Flexible pickup scheduling.",
      "Specialized handling for sensitive equipment.",
      "Real-time tracking and reporting portal.",
    ],
     whyChooseUs: {
      title: "Why Use Our Reverse Logistics?",
      points: [
        "Reliable and secure nationwide collection and transport.",
        "Real-time tracking for full transparency.",
        "Cost-effective and environmentally friendly logistics solutions.",
        "Seamless integration with your existing operations."
      ]
    }
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
            <div className="grid gap-12 lg:grid-cols-2 items-start">
                <div className="space-y-6 text-muted-foreground text-lg">
                    {service.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
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
            </div>
        </div>
      </section>

       <section className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
            <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
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
                 <div>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl text-primary">{service.whyChooseUs.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {service.whyChooseUs.points.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
          </div>
      </section>
    </div>
  );
}

