'use server';
/**
 * @fileOverview Summarizes an anime synopsis using AI.
 *
 * - summarizeAnimeSynopsis - A function that summarizes the synopsis of an anime.
 * - SummarizeAnimeSynopsisInput - The input type for the summarizeAnimeSynopsis function.
 * - SummarizeAnimeSynopsisOutput - The return type for the summarizeAnimeSynopsis function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeAnimeSynopsisInputSchema = z.object({
  animeTitle: z.string().describe('The title of the anime to summarize.'),
  synopsis: z.string().describe('The synopsis of the anime.'),
});
export type SummarizeAnimeSynopsisInput = z.infer<typeof SummarizeAnimeSynopsisInputSchema>;

const SummarizeAnimeSynopsisOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the anime synopsis.'),
});
export type SummarizeAnimeSynopsisOutput = z.infer<typeof SummarizeAnimeSynopsisOutputSchema>;

export async function summarizeAnimeSynopsis(
    input: SummarizeAnimeSynopsisInput
): Promise<SummarizeAnimeSynopsisOutput> {
  return summarizeAnimeSynopsisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAnimeSynopsisPrompt',
  input: {
    schema: z.object({
      animeTitle: z.string().describe('The title of the anime to summarize.'),
      synopsis: z.string().describe('The synopsis of the anime.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the anime synopsis.'),
    }),
  },
  prompt: `You are an AI expert in creating concise summaries of anime synopses.

  Given the anime title and synopsis, create a short summary that captures the essence of the story.

  Anime Title: {{{animeTitle}}}
  Synopsis: {{{synopsis}}}
  Summary: `,
});

const summarizeAnimeSynopsisFlow = ai.defineFlow<
  typeof SummarizeAnimeSynopsisInputSchema,
  typeof SummarizeAnimeSynopsisOutputSchema
>({
  name: 'summarizeAnimeSynopsisFlow',
  inputSchema: SummarizeAnimeSynopsisInputSchema,
  outputSchema: SummarizeAnimeSynopsisOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
