import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    time: z.string(),
    position: z.string(),
    company: z.string(),
    companyPage: z.string().url(),
    description: z.string(),
    skills: z.array(z.string()),
  }),
});

export const collections = {
  experience: experienceCollection,
};
