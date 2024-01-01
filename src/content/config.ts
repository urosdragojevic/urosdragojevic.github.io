import { z, defineCollection, reference } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: reference('authors'),
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

const authorsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        firstName: z.string(),
        lastName: z.string(),
        dateOfBirth: z.string(),
        cv: reference('cv').optional()
    }),
});

const cvCollection = defineCollection({
    type: 'content',
    schema: z.object({
        lastModified: z.date().optional(),
    }),
});


export const collections = {
    'posts': postsCollection,
    'series': seriesCollection,
    'authors': authorsCollection,
    'cv': cvCollection
};