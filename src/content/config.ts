import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        draft: z.boolean(),
        abstract: z.string().optional(),
        categories: z.array(z.enum(['development', 'security', 'operations', 'about']))
    }),
});

export const collections = {
    'posts': postsCollection,
};