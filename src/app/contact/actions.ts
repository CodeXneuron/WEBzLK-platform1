"use server";

import { z } from 'zod';
import { intelligentInquiryRouting } from '@/ai/flows/intelligent-inquiry-routing';
// Note: To enable Firestore integration, you would uncomment the following lines
// and configure your Firebase project in a file like 'src/lib/firebase.ts'.
// import { db } from '@/lib/firebase';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  industry: z.string().min(1, { message: 'Please select an industry.' }),
  problemDescription: z.string().min(10, { message: 'Description must be at least 10 characters.' }).max(2000),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error';
  data?: z.infer<typeof contactFormSchema>;
} | null;

export async function submitInquiry(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    industry: formData.get('industry'),
    problemDescription: formData.get('problemDescription'),
  });

  if (!validatedFields.success) {
    // This is a server-side check. Client-side validation should prevent this.
    return {
      message: 'Invalid form data. Please check your entries.',
      status: 'error',
    };
  }
  
  const inquiryData = validatedFields.data;

  try {
    const routingResult = await intelligentInquiryRouting(inquiryData);

    // --- Firestore Integration Placeholder ---
    // Here you would save the inquiry and the AI's routing decision to Firestore.
    // This provides a structured backend for administrators to view and manage requests.
    //
    // try {
    //   await addDoc(collection(db, 'inquiries'), {
    //     ...inquiryData,
    //     routedTo: routingResult.team,
    //     routingReason: routingResult.reason,
    //     submittedAt: serverTimestamp(),
    //     status: 'New',
    //   });
    // } catch (firestoreError) {
    //   console.error("Failed to write to Firestore:", firestoreError);
    //   // Optionally, you could decide if this is a critical failure.
    //   // For now, we proceed even if Firestore write fails.
    // }
    
    console.log('AI Routing Result:', routingResult);

    return {
      message: `Thank you, ${inquiryData.name}! Your inquiry has been received and routed to our ${routingResult.team}. We will get back to you shortly.`,
      status: 'success',
      data: inquiryData,
    };
  } catch (error) {
    console.error('Error in AI routing or server action:', error);
    return {
      message: 'An unexpected error occurred on our end. Please try again later.',
      status: 'error',
    };
  }
}
