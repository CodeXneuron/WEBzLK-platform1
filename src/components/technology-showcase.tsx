'use client';

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { technologies } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TechnologyShowcase() {
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => new Set([...prev, index]));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) {
                observerRef.current?.observe(card);
            }
        });

        return () => {
            observerRef.current?.disconnect();
        };
    }, []);

    // Gradient background classes for each card
    const cardGradients = [
        "from-purple-600/90 via-violet-600/90 to-purple-700/90", // AI/ML
        "from-blue-600/90 via-cyan-600/90 to-blue-700/90", // Computer Vision
        "from-emerald-600/90 via-teal-600/90 to-emerald-700/90", // NLP
        "from-orange-600/90 via-red-600/90 to-orange-700/90", // Predictive Analytics
        "from-yellow-500/90 via-amber-500/90 to-yellow-600/90", // IoT
        "from-indigo-600/90 via-blue-600/90 to-indigo-700/90", // Cloud
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Animated 3D floating orbs background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute top-40 right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-40 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-block mb-4">
                        <Badge className="text-sm px-4 py-1.5 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                            Cutting-Edge Technology
                        </Badge>
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
                        Powered by Next-Generation Technology
                    </h2>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        We leverage the latest innovations in AI, cloud computing, and data science to build solutions that transform businesses and drive real results.
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((tech, index) => {
                        const isVisible = visibleCards.has(index);
                        const Icon = tech.icon;
                        const gradient = cardGradients[index % cardGradients.length];

                        return (
                            <div
                                key={tech.title}
                                ref={(el) => {
                                    cardRefs.current[index] = el;
                                }}
                                data-index={index}
                                className={cn(
                                    "transform transition-all duration-700 ease-out",
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                )}
                                style={{
                                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                                }}
                            >
                                {/* Glassmorphic card with gradient background */}
                                <div
                                    className={cn(
                                        "group relative h-full rounded-3xl p-6 backdrop-blur-xl border border-white/20",
                                        "bg-gradient-to-br shadow-2xl",
                                        "hover:scale-105 hover:shadow-3xl hover:border-white/30",
                                        "transition-all duration-500 ease-out",
                                        "hover:-translate-y-2",
                                        gradient
                                    )}
                                >
                                    {/* Glassmorphic overlay */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl" />

                                    {/* Shine effect on hover */}
                                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div className="relative inline-block">
                                                {/* Glow effect */}
                                                <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                                                {/* Icon container */}
                                                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                                    <Icon
                                                        className="h-8 w-8 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                                                        strokeWidth={2.5}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">
                                            {tech.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/90 text-sm leading-relaxed mb-4 drop-shadow">
                                            {tech.description}
                                        </p>

                                        {/* Features badges */}
                                        <div className="space-y-2">
                                            <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
                                                Key Capabilities
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {tech.features.map((feature, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        className="text-xs px-2.5 py-0.5 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-colors"
                                                    >
                                                        {feature}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative corner gradient */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-tr-3xl rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA section */}
                <div className="mt-12 md:mt-16 text-center">
                    <p className="text-white/80 text-lg">
                        Ready to leverage these technologies for your business?{" "}
                        <a
                            href="/contact"
                            className="text-white font-semibold hover:underline underline-offset-4 transition-all inline-flex items-center gap-1 group"
                        >
                            Let's talk
                            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </p>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-30px) translateX(-15px); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-15px) translateX(20px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 10s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 12s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
