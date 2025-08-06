"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, Recycle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "EPR Services",
    subLinks: [
      { href: "/services/e-waste-recycling", label: "E-waste Recycling" },
      { href: "/services/data-destruction", label: "Data Destruction" },
      { href: "/services/plastic-waste-management", label: "Plastic Waste Management" },
      { href: "/services/environmental-awareness-campaigns", label: "Awareness Campaigns" },
      { href: "/services/compliance-management", label: "Compliance Management" },
      { href: "/services/reverse-logistics", label: "Reverse Logistics" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "Partners" },
  { href: "/careers", label: "Careers" },
  { href: "/infrastructure", label: "Infrastructure" },
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
          "transition-colors hover:text-primary",
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
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            EcoHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className={cn(
                    "text-muted-foreground transition-colors hover:text-primary hover:no-underline",
                    pathname.startsWith(link.href) ? "text-primary font-semibold" : ""
                  )}>
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="p-4">
              <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl font-bold text-primary">EcoHub</span>
              </Link>
              <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.label}>
                    <h4 className="mb-2 font-semibold text-muted-foreground">{link.label}</h4>
                    <div className="flex flex-col space-y-2 pl-4">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
