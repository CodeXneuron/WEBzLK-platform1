import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "See how our AI and engineering solutions have made a real-world impact across various Sri Lankan industries.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects & Case Studies"
        description="We are proud of the partnerships we've built and the tangible results we've delivered for our clients in Sri Lanka."
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card key={project.name} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 w-full md:h-auto">
                  <Image
                    src={project.image.url}
                    alt={`Image for ${project.name}`}
                    data-ai-hint={project.image.hint}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <Badge variant="secondary">{project.industry}</Badge>
                  <h2 className="mt-4 font-headline text-2xl font-bold">
                    {project.name}
                  </h2>
                  <div className="mt-6 space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground">The Problem</h3>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Our AI/Engineering Solution</h3>
                      <p>{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Impact</h3>
                      <p>{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
