import { z } from "zod";

export const EntryInfoSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  tags: z.array(z.string()).nullable(),
  created_by: z.string(),
});

export type EntryInfoType = z.infer<typeof EntryInfoSchema>;
