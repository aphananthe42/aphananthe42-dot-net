import { z, defineCollection } from "astro:content";

const diaryCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

export const collections = {
	diary: diaryCollection,
};
