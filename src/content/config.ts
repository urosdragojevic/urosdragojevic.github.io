// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const secCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
    }),
});

const textCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        author: z.string(),
        date: z.date(),
        cleartext: z.boolean()
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'sec': secCollection,
    'text': textCollection,
};