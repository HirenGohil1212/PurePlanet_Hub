
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogPostsData = {
    "hidden-dangers-of-e-waste": {
        title: "The Hidden Dangers of E-Waste in Landfills",
        date: "October 26, 2023",
        image: "https://placehold.co/1200x600.png",
        hint: "landfill waste",
        tags: ["E-Waste", "Environment", "Health"],
        content: [
            "Electronic waste, or e-waste, is the fastest-growing stream of waste globally. When discarded in landfills, electronics containing toxic substances like lead, mercury, and cadmium can leach into the soil and water, posing significant risks to both environmental and human health.",
            "These toxins can contaminate groundwater, poisoning local ecosystems and entering the human food chain. Air quality is also affected when e-waste is informally burned to extract valuable metals, releasing harmful dioxins.",
            "Proper recycling by certified professionals like Pure Planet Recycling is essential. We ensure that hazardous materials are disposed of safely and valuable resources are recovered, minimizing the environmental footprint of your old electronics."
        ]
    },
    "how-data-destruction-protects-business": {
        title: "How Data Destruction Protects Your Business",
        date: "October 20, 2023",
        image: "https://placehold.co/1200x600.png",
        hint: "data security",
        tags: ["Data Security", "Business", "Compliance"],
        content: [
            "In today's digital age, data is one of your most valuable assets. Improper disposal of old hard drives, computers, and servers can lead to devastating data breaches, damaging your company's reputation and resulting in hefty fines.",
            "Simply deleting files is not enough. Data can often be recovered from discarded devices. Professional data destruction services use methods like physical shredding, degaussing, and certified software-based erasure to ensure that information is permanently irrecoverable.",
            "At Pure Planet Recycling, we provide a full chain of custody and a certificate of destruction, giving you the peace of mind that your confidential information is secure and your business is compliant with privacy regulations like GDPR and HIPAA."
        ]
    },
    "guide-to-corporate-ewaste-compliance": {
        title: "A Guide to Corporate E-Waste Compliance",
        date: "October 15, 2023",
        image: "https://placehold.co/1200x600.png",
        hint: "business compliance",
        tags: ["Compliance", "E-Waste", "Corporate"],
        content: [
            "Navigating the complex web of e-waste regulations is a major challenge for corporations. Laws like the Extended Producer Responsibility (EPR) mandate that manufacturers and importers take responsibility for the entire lifecycle of their products.",
            "Failure to comply can lead to legal penalties and reputational damage. Key steps to compliance include conducting regular e-waste audits, partnering with a certified recycling vendor, maintaining meticulous records, and staying informed about changing legislation.",
            "Pure Planet Recycling's compliance management services help businesses navigate these regulations, ensuring you meet all your legal obligations while contributing to a more sustainable planet."
        ]
    },
    "journey-of-recycled-plastic": {
        title: "The Journey of Recycled Plastic: From Bottle to Bench",
        date: "October 10, 2023",
        image: "https://placehold.co/1200x600.png",
        hint: "plastic recycling process",
        tags: ["Plastic Recycling", "Circular Economy", "Sustainability"],
        content: [
            "Ever wondered what happens to a plastic bottle after you toss it in the recycling bin? The journey is a fascinating example of the circular economy in action. First, collected plastics are taken to a Materials Recovery Facility (MRF) where they are sorted by type and color.",
            "Once sorted, the plastic is cleaned to remove impurities, then shredded into small flakes. These flakes are melted down and formed into small pellets, which serve as the raw material for new products.",
            "These recycled pellets can be used to manufacture a wide range of items, from new bottles and packaging to polyester fabric for clothing, and even durable outdoor furniture like park benches. This process reduces landfill waste, conserves energy, and saves natural resources."
        ]
    },
    "organizing-community-ewaste-drive": {
        title: "Organizing a Successful Community E-Waste Drive",
        date: "October 5, 2023",
        image: "https://placehold.co/1200x600.png",
        hint: "community event",
        tags: ["Community", "E-Waste", "Events"],
        content: [
            "A community e-waste drive is a fantastic way to promote sustainability and help your neighbors dispose of their old electronics responsibly. To get started, partner with a certified e-waste recycler like Pure Planet Recycling, who can handle the logistics and ensure proper processing.",
            "Choose a convenient date and location with ample space, like a school or community center parking lot. Promote your event well in advance through local newspapers, social media, and community bulletin boards. Be clear about what items you can and cannot accept.",
            "On the day of the event, have a team of volunteers to help direct traffic and unload items. It's a rewarding experience that makes a tangible positive impact on your local environment."
        ]
    },
    "role-of-reverse-logistics": {
        title: "The Role of Reverse Logistics in a Circular Economy",
        date: "September 28, 2023",
        image: "https://placehold.co/1200x600.png",
        hint: "logistics warehouse",
        tags: ["Logistics", "Circular Economy", "Supply Chain"],
        content: [
            "Reverse logistics is the backbone of the circular economy. While traditional logistics focuses on moving products from manufacturer to consumer, reverse logistics manages the return of products from the consumer back to the producer or a recycling facility.",
            "An efficient reverse logistics network is crucial for e-waste management. It involves scheduling pickups, secure transportation, and tracking of assets from the point of collection to the final processing facility. This ensures a secure and transparent chain of custody.",
            "By optimizing reverse logistics, we can increase collection rates, reduce transportation costs and emissions, and more effectively channel materials back into the production cycle, closing the loop and reducing our reliance on virgin resources."
        ]
    },
};

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug as keyof typeof blogPostsData];

  if (!post) {
    notFound();
  }

  return (
    <div className="fade-in">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl fade-in-up">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Tag className="h-5 w-5" />
                    {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
                 <Image
                    src={post.image}
                    width={1200}
                    height={600}
                    alt={post.title}
                    className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                    data-ai-hint={post.hint}
                />
                <div className="prose prose-lg max-w-none mt-12 text-muted-foreground space-y-6">
                    {post.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
