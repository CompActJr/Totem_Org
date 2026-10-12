// src/types/updateResponse.ts

import z from "zod";

export const updateResponse = z.object({
  success: z.boolean(),
  id: z.number(),
  updatedAt: z.string()
})

export type UpdateResponse = z.infer<typeof updateResponse>;