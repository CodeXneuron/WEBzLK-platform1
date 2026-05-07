"use server";

import { initializeFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

const subscribeSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
});

export type SubscribeState = {
    message: string;
    status: 'idle' | 'success' | 'error';
} | null;

export async function subscribeToNewsletter(prevState: SubscribeState, formData: FormData): Promise<SubscribeState> {
    const email = formData.get('email');

    const validatedFields = subscribeSchema.safeParse({ email });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid email',
            status: 'error',
        };
    }

    try {
        const { firestore } = initializeFirebase();
        if (!firestore) {
            throw new Error('Firestore is not initialized');
        }

        // Direct write without checking duplicates to avoid Read Permission errors
        await addDoc(collection(firestore, 'subscribers'), {
            email: validatedFields.data.email,
            subscribedAt: serverTimestamp(),
            active: true,
        });

        return {
            message: 'Successfully subscribed to our newsletter!',
            status: 'success',
        };
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return {
            message: 'Failed to subscribe. Please try again later.',
            status: 'error',
        };
    }
}
