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
  icons: {
    icon: 'https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/593263272_122096027055155982_4510306994200071308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HjOJycLOsvAQ7kNvwGRgs18&_nc_oc=AdnYeXXDlXlf-Pznqc3ovAo-eT6xfeh3XuCNkbLHgxqjdAwljV5ADJ-QRok4hoT9iWFpTzDx44SCGna5_i1pOJNL&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=p5gBeuomHaHGQp8MX4ZoRQ&oh=00_AfkpkMdLujft_1G8EJbtNuwmPIIx_45UwLTig0HE_w8DiA&oe=693B152B',
  },
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
