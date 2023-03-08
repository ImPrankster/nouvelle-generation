import { z } from "zod";

export const healthCondition = [
  "Acne",
  "Eczema",
  "Psoriasis",
  "Rosacea",
  "Hives",
  "Skin cancer",
  "Vitiligo",
  "Dermatitis",
  "Cellulitis",
  "Boils and carbuncles",
  "Athlete's foot",
  "Ringworm",
  "Scabies",
  "Warts",
  "Herpes",
  "Impetigo",
  "Shingles",
  "Measles",
  "Chickenpox",
  "Lyme disease",
  "Sunburn",
  "Frostbite",
  "Keloids",
  "Melasma",
  "Hyperpigmentation",
  "Hypopigmentation",
  "Rashes",
  "Moles",
  "Cysts",
  "Skin tags",
] as const;

export const healtConditionSchema = z.enum(healthCondition);

export type healthConditionType = z.infer<typeof healtConditionSchema>;

export const skinColor = [
  "Fair or light skin",
  "Medium or olive skin",
  "Tan or brown skin",
  "Dark or black skin",
] as const;

export const skinColorSchema = z.enum(skinColor);

export type skinColorType = z.infer<typeof skinColorSchema>;

export const skinType = [
  "Normal",
  "Dry",
  "Oily",
  "Combination",
  "Sensitive",
  "Aging",
] as const;

export const skinTypeSchema = z.enum(skinType);

export type skinTypeType = z.infer<typeof skinTypeSchema>;

export const profileSchema = z.object({
  favourite_tags: z.array(z.string()).optional(),
  health_condition: z.array(healtConditionSchema).optional(),
  skin_color: skinColorSchema.optional(),
  skin_type: skinTypeSchema.optional(),
});

export type profileType = z.infer<typeof profileSchema>;
