"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { subscribeToNewsletter } from "@/actions/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function NewsletterForm() {
    const { toast } = useToast();
    const [state, formAction] = useActionState(subscribeToNewsletter, null);

    useEffect(() => {
        if (state?.status === 'error') {
            toast({
                title: "Error",
                description: state.message,
                variant: "destructive",
            });
        }
    }, [state, toast]);

    if (state?.status === 'success') {
        return (
            <div className="flex w-full max-w-sm items-center gap-2 rounded-md border border-green-200 bg-green-50 p-3 text-green-800 animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-left">{state.message}</span>
            </div>
        );
    }

    return (
        <form action={formAction} className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
                <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-background"
                />
            </div>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending}>
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
        </Button>
    );
}
