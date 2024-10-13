import { z, defineCollection } from 'astro:content';

const techBlogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
    }),
});

const diaryCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
    }),
});

export const collections = {
    techBlog: techBlogCollection,
    diary: diaryCollection,
};
