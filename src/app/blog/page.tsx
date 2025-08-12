import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Hidden Dangers of E-Waste in Landfills",
    date: "October 26, 2023",
    excerpt: "Discover the environmental impact of improperly disposed electronics and why recycling is crucial.",
    image: "https://placehold.co/600x400.png",
    hint: "landfill waste",
    slug: "hidden-dangers-of-e-waste",
  },
  {
    title: "How Data Destruction Protects Your Business",
    date: "October 20, 2023",
    excerpt: "Learn how professional data destruction services can prevent data breaches and protect your company's reputation.",
    image: "https://placehold.co/600x400.png",
    hint: "data security",
    slug: "how-data-destruction-protects-business",
  },
  {
    title: "A Guide to Corporate E-Waste Compliance",
    date: "October 15, 2023",
    excerpt: "Navigating the complex world of e-waste regulations can be challenging. Here's what you need to know.",
    image: "https://placehold.co/600x400.png",
    hint: "business compliance",
    slug: "guide-to-corporate-ewaste-compliance",
  },
   {
    title: "The Journey of Recycled Plastic: From Bottle to Bench",
    date: "October 10, 2023",
    excerpt: "Follow the fascinating journey of a plastic bottle as it gets transformed into a new, useful product.",
    image: "https://placehold.co/600x400.png",
    hint: "plastic recycling process",
    slug: "journey-of-recycled-plastic",
  },
   {
    title: "Organizing a Successful Community E-Waste Drive",
    date: "October 5, 2023",
    excerpt: "Want to make a difference in your community? Here are the steps to organize a successful e-waste collection event.",
    image: "https://placehold.co/600x400.png",
    hint: "community event",
    slug: "organizing-community-ewaste-drive",
  },
   {
    title: "The Role of Reverse Logistics in a Circular Economy",
    date: "September 28, 2023",
    excerpt: "Explore how efficient reverse logistics is key to closing the loop and building a truly circular economy.",
    image: "https://placehold.co/600x400.png",
    hint: "logistics warehouse",
    slug: "role-of-reverse-logistics",
  },
];


export default function BlogPage() {
  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Pure Planet Recycling Insights
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Stay updated with the latest news, articles, and insights on e-waste management and sustainability.
            </p>
          </div>
          <div className="grid gap-8 pt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  <Image
                    src={post.image}
                    width={600}
                    height={400}
                    alt={post.title}
                    className="aspect-video w-full object-cover"
                    data-ai-hint={post.hint}
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="mt-2 font-headline text-xl">{post.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
