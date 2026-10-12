// src/modules/units/units.schemas.ts
import { z } from "zod";
import { teacherSchema } from "./teacher.schemas.js";
import { activitySchema } from "./activity.schemas.js";
import { testimonialSchema } from "./testimonial.schema.js";
import { panoramaSchema } from "./panorama.schemas.js";

export const unitResponseSchema = z.object({
  _id: z.number().int(),
  "@type": z.enum(["colegios", "vestibulares"]),
  city: z.string(),
  slug: z.string(),
  image: z.string(),
  cep: z.string(),
  address: z.string(),
  phone: z.string(),
  whatsapp: z.string(),
  email: z.string(),
  facebook: z.string(),
  instagram: z.string(),
  maps: z.string(),
  levels: z.array(z.string()),
  banners: z.array(z.string()),
  panoramas: z.array(panoramaSchema),
  diferenciais: z.array(z.string()),
  depoimentos: z.array(testimonialSchema),
  infraestrutura: z.array(z.string()),
  professores: z.array(teacherSchema),
  atividades: z.array(activitySchema),
});

export const updateUnitInput = z.object({
    whatsapp: z.string(),
    email: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    maps: z.string(),
  })
  .partial();

export type UnitResponse = z.infer<typeof unitResponseSchema>;
export type UpdateUnitInput = z.infer<typeof updateUnitInput>;

