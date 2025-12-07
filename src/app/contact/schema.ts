import { z } from 'zod';

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
