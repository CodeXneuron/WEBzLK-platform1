'use server';

/**
 * @fileOverview This file contains the Genkit flow for intelligent inquiry routing.
 *
 * It classifies problem descriptions from the contact form and routes them to the appropriate team or specialist.
 *
 * @exports intelligentInquiryRouting - The main function to route inquiries.
 * @exports IntelligentInquiryRoutingInput - The input type for the intelligentInquiryRouting function.
 * @exports IntelligentInquiryRoutingOutput - The output type for the intelligentInquiryRouting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentInquiryRoutingInputSchema = z.object({
  problemDescription: z.string().describe('The description of the problem or project idea submitted through the contact form.'),
  industry: z.string().describe('The industry specified in the contact form.'),
  name: z.string().describe('Name of the person submitting the form'),
  email: z.string().describe('Email of the person submitting the form'),
  company: z.string().describe('Company of the person submitting the form'),
});
export type IntelligentInquiryRoutingInput = z.infer<typeof IntelligentInquiryRoutingInputSchema>;

const IntelligentInquiryRoutingOutputSchema = z.object({
  team: z.string().describe('The team or specialist to which the inquiry should be routed.'),
  reason: z.string().describe('The reason for routing the inquiry to this team.'),
});
export type IntelligentInquiryRoutingOutput = z.infer<typeof IntelligentInquiryRoutingOutputSchema>;

export async function intelligentInquiryRouting(input: IntelligentInquiryRoutingInput): Promise<IntelligentInquiryRoutingOutput> {
  return intelligentInquiryRoutingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentInquiryRoutingPrompt',
  input: {schema: IntelligentInquiryRoutingInputSchema},
  output: {schema: IntelligentInquiryRoutingOutputSchema},
  prompt: `You are an AI assistant responsible for routing inquiries to the appropriate team within WEBz, a software and engineering solutions company in Sri Lanka. WEBz serves the construction, agriculture, manufacturing, education, and healthcare industries.

  Analyze the problem description and industry provided to determine the most suitable team or specialist to handle the inquiry. Provide a clear reason for your routing decision. The values for the "team" field should be one of "AI/ML Team", "Web/Mobile App Team", "Automation Team", or "Data Team".
  Name: {{{name}}}
  Email: {{{email}}}
  Company: {{{company}}}
  Industry: {{{industry}}}
  Problem Description: {{{problemDescription}}}

  Respond with JSON that contains the team and a reason field.
  `,
});

const intelligentInquiryRoutingFlow = ai.defineFlow(
  {
    name: 'intelligentInquiryRoutingFlow',
    inputSchema: IntelligentInquiryRoutingInputSchema,
    outputSchema: IntelligentInquiryRoutingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
