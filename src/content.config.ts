import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    kicker:      z.string(),
    title:       z.string(),
    publication: z.string(),
    year:        z.number(),
    length:      z.string(),
    topic:       z.enum(['mode', 'lifestyle', 'reisen', 'zeitgeist']),
    swatch:      z.string(),
    img:         z.string().optional(),
    imgPosition: z.string().optional().default('center'),
    url:         z.string().optional(),
    pdf:         z.string().optional(),
    featured:    z.boolean().optional().default(false),
    order:       z.number().optional().default(99),
  }),
});

export const collections = { articles };
