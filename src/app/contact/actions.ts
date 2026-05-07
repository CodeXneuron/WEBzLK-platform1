"use server";

import { contactFormSchema, type ContactFormState } from "./schema";
import { intelligentInquiryRouting } from '@/ai/flows/intelligent-inquiry-routing';
import { initializeFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

export async function submitInquiry(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    industry: formData.get('industry'),
    problemDescription: formData.get('problemDescription'),
  };

  console.log('Received Form Data:', rawData);

  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    console.error('Validation Errors:', validatedFields.error.flatten());
    return {
      message: `Invalid form data: ${Object.entries(validatedFields.error.flatten().fieldErrors).map(([key, val]) => `${key}: ${val}`).join(', ')}`,
      status: 'error',
    };
  }

  const inquiryData = validatedFields.data;

  let routingResult = { team: 'General Support Team', reason: 'Automated routing unavailable' };

  try {
    try {
      routingResult = await intelligentInquiryRouting({
        ...inquiryData,
        company: inquiryData.company ?? "Not Provided"
      });
      console.log('AI Routing Result:', routingResult);
    } catch (aiError) {
      console.warn('AI Routing failed (using fallback):', aiError);
      // Fallback is already set
    }

    try {
      const { firestore } = initializeFirebase();
      if (!firestore) {
        throw new Error('Firestore is not initialized');
      }
      // firestore is already the instance
      await addDoc(collection(firestore, 'inquiries'), {
        ...inquiryData,
        routedTo: routingResult.team,
        routingReason: routingResult.reason,
        submittedAt: serverTimestamp(),
        status: 'New',
      });
    } catch (firestoreError) {
      console.error("Failed to write to Firestore:", firestoreError);
      throw new Error('Database write failed'); // Re-throw to trigger the outer catch
    }

    return {
      message: `Thank you, ${inquiryData.name}! Your inquiry has been received. We will get back to you shortly.`,
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
