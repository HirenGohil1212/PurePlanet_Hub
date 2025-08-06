import { Twitter, Linkedin, Gitlab } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "Partners" },
  { href: "/careers", label: "Careers" },
  { href: "/infrastructure", label: "Infrastructure" },
];

const servicesLinks = [
    { href: "/services/e-waste-recycling", label: "E-waste Recycling" },
    { href: "/services/data-destruction", label: "Data Destruction" },
    { href: "/services/plastic-waste-management", label: "Plastic Waste Management" },
    { href: "/services/environmental-awareness-campaigns", label: "Awareness Campaigns" },
    { href: "/services/compliance-management", label: "Compliance Management" },
    { href: "/services/reverse-logistics", label: "Reverse Logistics" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start space-y-4">
                 <Link href="/">
                    <Image src="/logo1.png" alt="Pure Planet Recycling Logo" width={256} height={64} className="h-16 w-auto" />
                </Link>
                <p className="text-sm text-muted-foreground">
                    Leading the charge in responsible e-waste and plastic management for a sustainable future.
                </p>
                <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                        <Gitlab className="h-5 w-5" />
                        <span className="sr-only">Gitlab</span>
                    </Link>
                    </Button>
                </div>
            </div>

            <div>
                <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-headline font-semibold text-foreground">EPR Services</h3>
                <ul className="mt-4 space-y-2">
                    {servicesLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div>
                 <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
                 <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>123 Sustainability Ave,</li>
                    <li>Green City, PC 12345</li>
                    <li className="pt-2"><strong>Email:</strong> contact@pureplanetrecycling.com</li>
                    <li><strong>Phone:</strong> (123) 456-7890</li>
                 </ul>
            </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pure Planet Recycling. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
