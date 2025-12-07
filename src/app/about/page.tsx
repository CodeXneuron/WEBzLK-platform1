import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companyValues } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about WEBz's mission to develop Sri Lanka through AI and engineering, our founder's story, and our core values.",
};

export default function AboutPage() {
  const founderImage = PlaceHolderImages.find((img) => img.id === 'founder-deshapriya');

  return (
    <>
      <PageHeader
        title="About WEBz"
        description="We are a team of engineers, developers, and visionaries dedicated to using technology to build a better, smarter Sri Lanka."
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Story of WEBz */}
        <section className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              WEBz was founded on a simple yet powerful idea: that the advanced engineering and AI technologies shaping the world could be harnessed to solve the unique, practical problems faced by industries right here in Sri Lanka.
            </p>
            <p className="text-muted-foreground">
              Tired of seeing generic, one-size-fits-all software fail to meet local needs, our founder, Deshapriya D.M.K.N, envisioned a company that would get its hands dirty. A company that would work alongside construction managers, farmers, and factory owners to build tools that make a real difference. We don't just write code; we engineer solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground">
              Our mission is to use AI, machine learning, and engineering software to solve real-world problems and help develop Sri Lanka together with our clients and local industries.
            </p>
            <p className="text-muted-foreground">
              We envision a Sri Lanka where technology is not just a consumer product, but a tool for creation and empowerment. A future where our industries are more efficient, our agriculture more sustainable, and our economy more resilient, all driven by locally-developed, intelligent technology.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section id="founder" className="mt-24 rounded-lg bg-card p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <div className="md:col-span-1">
              {founderImage && (
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  data-ai-hint={founderImage.imageHint}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover aspect-square"
                />
              )}
            </div>
            <div className="md:col-span-2">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Meet the Founder</h2>
              <h3 className="mt-2 text-xl font-semibold text-primary">Deshapriya D.M.K.N</h3>
              <p className="mt-4 text-muted-foreground">
                Deshapriya is an engineer and software architect with a passion for applying technology to practical challenges. With a background in civil engineering and over a decade of experience in the software industry, he witnessed firsthand the gap between the theoretical potential of AI and its on-the-ground application in Sri Lanka.
              </p>
              <p className="mt-4 text-muted-foreground">
                He started WEBz to bridge that gap, combining rigorous engineering discipline with the innovative power of machine learning. His goal is to build a company that is not just profitable, but pivotal in Sri Lanka's journey towards becoming a technology-driven nation.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide our work and our partnerships.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
