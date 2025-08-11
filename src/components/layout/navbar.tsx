
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "EPR Services",
    subLinks: [
      { href: "/services/e-waste-recycling", label: "E-waste Recycling" },
      { href: "/services/environmental-awareness-campaigns", label: "Awareness Campaigns" },
      { href: "/services/compliance-management", label: "Compliance Management" },
      { href: "/services/reverse-logistics", label: "Reverse Logistics" },
    ],
  },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/contact", label: "Contact Us" },
  { href: "/careers", label: "Careers" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "transition-colors hover:text-primary text-lg",
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };

  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "block py-2 text-lg transition-colors hover:text-primary",
          isActive ? "text-primary font-bold" : "text-foreground"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };
  

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex h-full items-center">
          <Image src="/logo1.png?v=2" alt="Pure Planet Recycling Logo" width={160} height={40} className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-4 md:flex">
          <nav className="flex items-center space-x-4">
            {navLinks.map((link) =>
              link.subLinks ? (
                <DropdownMenu key={link.label}>
                  <div className="flex items-center">
                    <NavLink href={link.href}>
                      {link.label}
                    </NavLink>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-6">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent>
                    {link.subLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.label} asChild>
                        <Link href={subLink.href}>{subLink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              )
            )}
          </nav>
          <div className="flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 p-2">
            <Phone className="h-5 w-5 text-primary"/>
            <div className="flex flex-col text-sm">
                <a href="tel:+1234567890" className="font-semibold text-primary hover:underline">(123) 456-7890</a>
                <a href="tel:+11234567891" className="font-semibold text-primary hover:underline">(123) 456-7891</a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full max-w-xs flex-col p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Link href="/" className="flex h-20 items-center" onClick={() => setMobileMenuOpen(false)}>
                  <Image src="/logo1.png?v=2" alt="Pure Planet Recycling Logo" width={180} height={45} className="h-full w-auto" />
                </Link>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) =>
                    link.subLinks ? (
                      <div key={link.label}>
                        <MobileNavLink href={link.href}>{link.label}</MobileNavLink>
                        <div className="flex flex-col space-y-2 pl-4 border-l ml-2 mt-2">
                          {link.subLinks.map((subLink) => (
                            <MobileNavLink key={subLink.label} href={subLink.href}>
                              {subLink.label}
                            </MobileNavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <MobileNavLink key={link.label} href={link.href}>
                        {link.label}
                      </MobileNavLink>
                    )
                  )}
                </div>
                 <div className="mt-6 flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary"/>
                    <div className="flex flex-col text-sm">
                        <a href="tel:+1234567890" className="font-semibold text-primary hover:underline">(123) 456-7890</a>
                        <a href="tel:+11234567891" className="font-semibold text-primary hover:underline">(123) 456-7891</a>
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
