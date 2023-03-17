import { z } from "zod";

export const EntryInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
  cover_image: z.string().nullable(),
  description: z.string().nullable(),
  tags: z.array(z.string()).nullable(),
  created_by: z.string(),
});

export type EntryInfoType = z.infer<typeof EntryInfoSchema>;
