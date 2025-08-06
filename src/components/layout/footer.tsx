import { Twitter, Linkedin, Gitlab } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <Link href="/">
                <Image src="/logo1.png" alt="EcoHub Logo" width={256} height={64} className="h-16 w-auto" />
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EcoHub. All rights reserved.
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
      </div>
    </footer>
  );
}
