import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    domain: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    result: z.string().optional(),
    category: z.enum(["ml-ai", "data", "systems", "web"]).default("ml-ai"),
    featured: z.boolean().default(true),
    repo: z.string().url().optional(),
  }),
});

export const collections = { projects };
