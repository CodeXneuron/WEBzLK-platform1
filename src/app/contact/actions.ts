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
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    industry: formData.get('industry'),
    problemDescription: formData.get('problemDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your entries.',
      status: 'error',
    };
  }
  
  const inquiryData = validatedFields.data;

  try {
    const routingResult = await intelligentInquiryRouting(inquiryData);
    
    try {
      const { firestore } = initializeFirebase();
      if (!firestore) {
          throw new Error('Firestore is not initialized');
      }
      const db = getFirestore(firestore);
      await addDoc(collection(db, 'inquiries'), {
        ...inquiryData,
        routedTo: routingResult.team,
        routingReason: routingResult.reason,
        submittedAt: serverTimestamp(),
        status: 'New',
      });
    } catch (firestoreError) {
      console.error("Failed to write to Firestore:", firestoreError);
    }
    
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
