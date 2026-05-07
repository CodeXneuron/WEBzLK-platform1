'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Don't just take our word for it. Here is what industry leaders in Sri Lanka are saying about WEBz.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="relative overflow-hidden border-none shadow-md bg-background">
                            <div className="absolute top-4 right-4 text-primary/10">
                                <Quote className="h-12 w-12" />
                            </div>
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback className="bg-primary/5 text-primary font-bold">
                                            {testimonial.name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold text-lg leading-tight">{testimonial.name}</h3>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        <p className="text-xs font-medium text-primary/80">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="italic text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
