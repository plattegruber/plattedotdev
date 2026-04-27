import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    date: z.coerce.date(),
    readMin: z.number().int().positive(),
    tag: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
