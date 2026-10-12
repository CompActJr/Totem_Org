// src/types/createResponse.ts

import z from "zod";

export const createResponse = z.object({
  success: z.boolean(),
  id: z.number(),
  createdAt: z.string()
});

export type CreateResponse = z.infer<typeof createResponse>;