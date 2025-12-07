
'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { FirebaseProvider } from '@/firebase/provider';
import { Inter, Lexend } from 'next/font/google';
import { LoadingScreen } from '@/components/loading-screen';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Lexend({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  // Metadata needs to be defined outside the component for Next.js to pick it up statically.
  // We can't define it here anymore since this is a client component.
  // Let's ensure it's defined elsewhere or handle it appropriately.
  // For now, we focus on the loading screen. We will move metadata to a new file if needed.
  // For the purpose of this change, we will assume metadata is handled or can be omitted temporarily from this file.

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>WEBz Solutions | AI & Engineering for a Smarter Sri Lanka</title>
        <meta name="description" content="WEBz offers AI, machine learning, and custom software solutions to solve real-world engineering problems in Sri Lanka, focusing on key industries like construction, agriculture, and manufacturing." />
        <meta name="keywords" content="AI in Sri Lanka, Software Engineering Sri Lanka, Machine Learning, Custom Software, Tech in Sri Lanka" />
        <link rel="icon" href="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/593263272_122096027055155982_4510306994200071308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HjOJycLOsvAQ7kNvwGRgs18&_nc_oc=AdnYeXXDlXlf-Pznqc3ovAo-eT6xfeh3XuCNkbLHgxqjdAwljV5ADJ-QRok4hoT9iWFpTzDx44SCGna5_i1pOJNL&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=p5gBeuomHaHGQp8MX4ZoRQ&oh=00_AfkpkMdLujft_1G8EJbtNuwmPIIx_45UwLTig0HE_w8DiA&oe=693B152B" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased", fontBody.variable, fontHeadline.variable)}>
        {loading && <LoadingScreen />}
        <FirebaseProvider>
          <div className={cn("relative flex min-h-dvh flex-col transition-opacity duration-500", loading ? 'opacity-0' : 'opacity-100')}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseProvider>
      </body>
    </html>
  );
}
