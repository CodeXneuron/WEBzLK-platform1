import Link from "next/link";
import { Icons } from "@/components/icons";
import { navItems } from "@/lib/data";
import { NewsletterForm } from "@/components/newsletter-form";

export function Footer() {
  return (
    <footer className="bg-card border-t text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">WEBz</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineering AI Solutions for a Smarter World. We build the future with code and data.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Monaragala, Sri Lanka</p>
              <p>Email: <a href="mailto:webzlkinfo@gmail.com" className="hover:text-primary">webzlkinfo@gmail.com</a></p>
              <p>Phone: <a href="tel:+94702573799" className="hover:text-primary">+94 70 257 3799</a></p>
            </address>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for the latest AI insights.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WEBz Solutions. All Rights Reserved. Made in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
