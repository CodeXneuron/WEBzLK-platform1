import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our services, including AI & ML Solutions, Predictive Analytics, Custom Web & Mobile Apps, Automation, and Data Dashboards.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive suite of AI and engineering software services designed to solve complex challenges and drive growth."
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.longDescription}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/contact?service=${service.slug}`}>
                    Request This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
