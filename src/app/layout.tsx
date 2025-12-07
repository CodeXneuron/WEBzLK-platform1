import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { FirebaseProvider } from '@/firebase/provider';
import { Inter, Lexend } from 'next/font/google';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Lexend({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: {
    default: 'WEBz Solutions | AI & Engineering for a Smarter Sri Lanka',
    template: '%s | WEBz Solutions',
  },
  description: 'WEBz offers AI, machine learning, and custom software solutions to solve real-world engineering problems in Sri Lanka, focusing on key industries like construction, agriculture, and manufacturing.',
  keywords: ['AI in Sri Lanka', 'Software Engineering Sri Lanka', 'Machine Learning', 'Custom Software', 'Tech in Sri Lanka'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", fontBody.variable, fontHeadline.variable)}>
        <FirebaseProvider>
          <div className="relative flex min-h-dvh flex-col">
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
