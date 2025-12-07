import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with WEBz to discuss your project idea or to learn more about our AI and engineering solutions for Sri Lanka.",
};

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@webz.lk", href: "mailto:hello@webz.lk" },
  { icon: Phone, label: "Phone", value: "+94 77 123 4567", href: "tel:+94771234567" },
  { icon: MapPin, label: "City", value: "Colombo, Sri Lanka", href: "#" },
];

export default function ContactPage({ searchParams }: { searchParams?: { service?: string } }) {
  return (
    <>
      <PageHeader
        title="Let's Build Together"
        description="Have a problem to solve or a project idea? We'd love to hear from you. Fill out the form below, and our team will get in touch."
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Send us a message
            </h2>
            <ContactForm selectedService={searchParams?.service} />
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-card p-8 shadow">
              <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">
                Our team is ready to answer your questions.
              </p>
              <div className="mt-6 space-y-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{detail.label}</h3>
                      <a
                        href={detail.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        target={detail.label === 'Email' || detail.label === 'Phone' ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        {detail.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 rounded-lg bg-accent/20 p-8">
              <p className="text-accent-foreground/80">
                WEBz is committed to working closely with our clients. We believe in collaborative partnerships to build AI and engineering solutions that are perfectly tailored to the needs of Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
