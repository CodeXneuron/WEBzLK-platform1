'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
    // Display only the first 3 projects
    const featured = projects.slice(0, 3);

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">What We Can Build For You</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Explore potential solutions we can engineer for your business to solve complex problems.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="shrink-0 hidden md:inline-flex group">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {featured.map((project) => (
                        <Card key={project.name} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={project.image.url}
                                    alt={project.name}
                                    data-ai-hint={project.image.hint}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="bg-background/80 hover:bg-background/90 backdrop-blur-sm text-foreground">
                                        {project.industry}
                                    </Badge>
                                </div>
                            </div>
                            <CardContent className="flex flex-col flex-1 p-6 relative">
                                <Link href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`} className="absolute top-6 right-6 p-2 rounded-full bg-primary/10 text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden lg:flex">
                                    <ArrowUpRight className="h-5 w-5" />
                                </Link>
                                <h3 className="text-xl font-bold line-clamp-2 md:text-2xl mb-3 group-hover:text-primary transition-colors">
                                    {project.name}
                                </h3>
                                <div className="space-y-4 flex-1">
                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Problem</h4>
                                        <p className="text-sm line-clamp-3">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Solution</h4>
                                        <p className="text-sm line-clamp-3">{project.solution}</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-border">
                                    <div className="flex items-start gap-2">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-primary line-clamp-2">
                                                <span className="font-bold mr-1">Potential Impact:</span>{project.impact}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Button asChild variant="outline" className="w-full group">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
