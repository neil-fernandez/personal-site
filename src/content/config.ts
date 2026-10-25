import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    domain: z.string().optional(),
    description: z.string(),
    tech: z.array(z.string()),
    result: z.string().optional(),
    hook: z.string().optional(),
    category: z.enum(["ml-ai", "data", "systems", "web", "fundamentals"]).default("ml-ai"),
    featured: z.boolean().default(true),
    interactive: z.boolean().default(false),
    order: z.number().optional(),
    topics: z.array(z.string()).optional(),
    repo: z.string().url().optional(),
  }),
});

export const collections = { projects };
