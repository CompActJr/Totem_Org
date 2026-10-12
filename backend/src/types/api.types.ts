/**
 * src/types/api.types.ts
 * @author Jonas
 * @apiNote tipagem para respostas da api com schemas zod
*/
import z from "zod";

export const updateResponse = z.object({
  success: z.boolean(),
  id: z.number().optional(),
  updatedAt: z.string()
});

export type UpdateResponse = z.infer<typeof updateResponse>;

export const createResponse = z.object({
  success: z.boolean(),
  id: z.number(),
  createdAt: z.string()
});

export type CreateResponse = z.infer<typeof createResponse>;

export const deleteResponse = z.object({
  success: z.boolean(),
  id: z.number(),
  deletedAt: z.string()
});

export type DeleteResponse = z.infer<typeof deleteResponse>;