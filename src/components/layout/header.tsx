
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/app/layout";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { setLoading } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname !== href) {
      setLoading(true);
      setTimeout(() => {
        router.push(href);
        // The loading state will be set to false by the main layout's effect
      }, 2000);
    }
    setIsMobileMenuOpen(false);
  };
  
  const NavLink = ({ href, title, isMobile }: { href: string, title: string, isMobile?: boolean }) => (
    <Link
      href={href}
      onClick={(e) => handleLinkClick(e, href)}
      className={cn(
        "font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
        isMobile ? "text-lg" : "text-sm"
      )}
    >
      {title}
    </Link>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 text-primary" />
          <span className="hidden font-bold sm:inline-block">WEBz</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} title={item.title} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Get a Solution</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center gap-2">
                    <Icons.logo className="h-8 w-8 text-primary" />
                    <span className="font-bold">WEBz</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="mt-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} title={item.title} isMobile />
                  ))}
                </nav>
                <div className="mt-auto pt-6">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Get a Solution</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
