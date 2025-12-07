import Link from "next/link";
import { Icons } from "@/components/icons";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">WEBz</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Engineering AI Solutions for a Smarter Sri Lanka
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WEBz Solutions. All Rights Reserved. Made in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
