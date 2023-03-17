import { z } from "zod";

export const Categories = [
  "makeup",
  "skincare",
  "haircare",
  "perfume",
  "others",
] as const;

export const CategoriesSchema = z.enum(Categories);

export type CategoriesType = z.infer<typeof CategoriesSchema>;
