import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const diaryCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/diary" }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

export const collections = {
	diary: diaryCollection,
};
