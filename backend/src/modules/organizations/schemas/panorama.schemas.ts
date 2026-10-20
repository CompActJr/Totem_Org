// src/modules/units/schemas/panorama.schemas.ts

import z from "zod";

export const panoramaSchema = z.object({
  _id: z.number().int(),
  name: z.string(),
  panorama: z.string(),
});

export const createPanoramaInput = panoramaSchema.omit({
    _id: true
})

export type CreatePanoramaInput = z.infer<typeof createPanoramaInput>;