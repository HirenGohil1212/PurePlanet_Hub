
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pure Planet Recycling - E-Waste Management",
  description: "Leading the charge in responsible e-waste and plastic management for a sustainable future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <Button asChild size="lg" className="rounded-full shadow-lg">
            <Link href="tel:9210783697">
              <Phone className="mr-2 h-6 w-6" />
              Call Us
            </Link>
          </Button>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
