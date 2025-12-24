import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(), // Used for sorting
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        company: z.string().optional(),
        role: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'projects': projectCollection,
};
