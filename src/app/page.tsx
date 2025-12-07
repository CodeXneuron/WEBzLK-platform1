import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { industries, howItWorksSteps, whyWEBzPoints } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnnouncementBanner } from "@/components/announcement-banner";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-primary-foreground md:items-end md:pb-24">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Engineering AI Solutions for a Smarter Sri Lanka
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl text-balance">
              We leverage AI, ML, and software to solve real-world engineering challenges and drive progress across Sri Lankan industries.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Get a Solution <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/about#founder">Talk to the Founder</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <AnnouncementBanner />
      
      {/* Why WEBz Section */}
      <section className="py-16 md:py-24 bg-background/95">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Why WEBz?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are more than just a tech company. We are your partners in innovation and growth.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyWEBzPoints.map((point) => (
              <div key={point.title} className="flex flex-col items-center text-center p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Industries Section */}
      <section className="py-16 md:py-24 bg-card/95">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Powering Key Industries in Sri Lanka</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We deliver tailored AI and engineering solutions that address the unique challenges of each sector.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {industries.map((industry) => (
              <Card key={industry.title} className="group w-full sm:w-auto md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-grow md:flex-grow-0">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-background/95">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Our Collaborative Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              From idea to implementation, we work with you every step of the way to ensure success.
            </p>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-4 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
            <div className="grid gap-12 md:grid-cols-1">
              {howItWorksSteps.map((step, index) => (
                <div key={step.step} className={cn("relative flex flex-col md:flex-row items-center gap-6", index % 2 === 1 && "md:flex-row-reverse")}>
                   <div className="flex md:hidden h-12 w-12 items-center justify-center rounded-full bg-card shadow-md">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-md">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background" style={{ left: 'calc(50% - 8px)'}} />
                  <Card className="w-full md:w-1/2">
                    <CardHeader>
                      <CardDescription>Step {step.step}</CardDescription>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
