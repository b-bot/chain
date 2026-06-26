import { defineCollection, defineConfig } from "@content-collections/core";
import { transformMDX } from "@fumadocs/content-collections/configuration";
import { z } from "zod";

export const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
    title: z.string(),
    description: z.string().optional(),
  }),
  transform: transformMDX,
});

export const metas = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export default defineConfig({
  content: [docs, metas],
});
