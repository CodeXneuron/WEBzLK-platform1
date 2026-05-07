

'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
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

interface AppContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

function AppProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initial loading screen
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AppContext.Provider value={{ loading, setLoading }}>
            {loading && <LoadingScreen />}
            <div className={cn("relative flex min-h-dvh flex-col transition-opacity duration-500", loading ? 'opacity-0' : 'opacity-100')}>
                {children}
            </div>
        </AppContext.Provider>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>WEBz Solutions | AI & Engineering for a Smarter World</title>
                <meta name="description" content="WEBz offers AI, machine learning, and custom software solutions to solve real-world engineering problems worldwide, focusing on key industries like construction, agriculture, and manufacturing." />
                <meta name="keywords" content="AI Solutions, Software Engineering, Machine Learning, Custom Software, Global Tech Solutions, Engineering AI" />
                <link rel="icon" href="https://i.ibb.co/PGRr8ktt/logo-yakawebz-trans.png" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                const theme = localStorage.getItem('theme') || 'system';
                                const root = document.documentElement;
                                if (theme === 'system') {
                                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                    root.classList.add(systemTheme);
                                } else {
                                    root.classList.add(theme);
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body className={cn("min-h-screen bg-background font-body antialiased", fontBody.variable, fontHeadline.variable)}>
                <FirebaseProvider>
                    <AppProvider>
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </AppProvider>
                    <Toaster />
                </FirebaseProvider>
            </body>
        </html>
    );
}
