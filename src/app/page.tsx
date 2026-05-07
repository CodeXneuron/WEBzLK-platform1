import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { industries, howItWorksSteps, whyWEBzPoints } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { SetupForgeSection } from "@/components/setup-forge-section";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { FeaturedProjects } from "@/components/featured-projects";
import { TechnologyShowcase } from "@/components/technology-showcase";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] w-full flex items-center">
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/60 via-violet-600/60 to-purple-800/60" />
        <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-primary-foreground pt-20 pb-16 md:pb-24 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-forwards">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance drop-shadow-md leading-tight">
              Engineering AI Solutions for a Smarter World
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base text-white/90 sm:text-lg md:text-xl text-balance drop-shadow-sm px-2">
              We leverage AI, ML, and software to solve real-world engineering challenges and drive progress across industries worldwide.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-900/20 border-0 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-blue-900/40 w-full sm:w-auto sm:min-w-[200px] h-12 sm:h-14 text-base sm:text-lg font-medium rounded-full"
              >
                <Link href="/contact">
                  Get a Solution <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto sm:min-w-[200px] h-12 sm:h-14 text-base sm:text-lg font-medium rounded-full"
              >
                <Link href="/about#founder">Talk to the Founder</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-forwards">
              <Link
                href="https://www.facebook.com/profile.php?id=61584679469676"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-900/50"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/webz-lk2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-blue-700 hover:scale-110 hover:shadow-lg hover:shadow-blue-900/50"
                aria-label="Visit our LinkedIn profile"
              >
                <Linkedin className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-6" />
              </Link>
              <Link
                href="https://wa.link/4ggfk7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#25D366] hover:scale-110 hover:shadow-lg hover:shadow-green-900/50"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <AnnouncementBanner />

      {/* Setup Forge Section */}
      <SetupForgeSection downloadLink="https://github.com/kosalanayanajithdeshapriya/SetupForge/releases/download/v1.0.0/SetupForge.Setup.1.0.0.exe" />

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

      {/* Technology Showcase Section */}
      <TechnologyShowcase />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Key Industries Section */}
      <section className="py-16 md:py-24 bg-card/95">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Powering Key Industries Worldwide</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We deliver tailored AI and engineering solutions that address the unique challenges of each sector.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {industries.map((industry) => (
              <Card key={industry.title} className="group w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1.2rem)] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-grow md:flex-grow-0">
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
                <div key={step.step} className={cn("relative flex flex-col items-center md:flex-row md:items-stretch gap-6", index % 2 === 1 && "md:flex-row-reverse")}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card shadow-md">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background" style={{ left: 'calc(50% - 8px)' }} />
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

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
