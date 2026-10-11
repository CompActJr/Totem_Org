// src/modules/units/schemas/activity.schemas.ts

import { z } from "zod";


export const activityClassSchema = z.object({
  nome: z.string(),
  detalhes: z.string(),
});

export const activitySchema = z.object({
  _id: z.number().int(),
  name: z.string(),
  turmas: z.array(activityClassSchema),
  professorNome: z.string(),
  image: z.string(),
});

export const createActivityInput = activitySchema.omit({
    _id: true,
});

export const updateActivityInput = activitySchema
    .partial()
    .refine((data)=> Object.keys(data).length > 0, {
        message: "Informe ao menos um campo para atualizar"
    });

export type CreateActivityInput = z.infer<typeof createActivityInput>;
export type CreateActivityClassInput = z.infer<typeof activityClassSchema>;
export type UpdateActivitySchema = z.infer<typeof updateActivityInput>;