import { z, defineCollection, reference } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        draft: z.boolean(),
        abstract: z.string().optional(),
        categories: z.array(z.enum(['development', 'security', 'operations', 'about'])),
        relatedPosts: z.array(reference('posts')).optional(),
        nextPost: reference('posts').optional(),
        previousPost: reference('posts').optional(),
        series: reference('series').optional()
    }),
});

const seriesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        draft: z.boolean(),
        abstract: z.string().optional(),
        categories: z.array(z.enum(['development', 'security', 'operations', 'about'])),
        posts: z.array(reference('posts')).optional(),
    }),
});

export const collections = {
    'posts': postsCollection,
    'series': seriesCollection
};