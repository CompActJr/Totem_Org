// src/modules/units/schemas/activity.schemas.ts

import { z } from "zod";

export const activityClassSchema = z.object({
    _id: z.number().int(),
    nome: z.string(),
    detalhes: z.string(),
});

export const createActivityClassInput = activityClassSchema.omit({
    _id: true,
})

export const activitySchema = z.object({
    _id: z.number().int(),
    name: z.string(),
    turmas: z.array(activityClassSchema),
    professorNome: z.string(),
    image: z.string(),
});

export const createActivityInput = activitySchema.omit({
    _id: true,
    turmas: true,
});

export const updateActivityInput = activitySchema
    .omit({
        _id: true,
        turmas: true,
    })
    .partial();


export type CreateActivityInput = z.infer<typeof createActivityInput>;
export type CreateActivityClassInput = z.infer<typeof createActivityClassInput>;
export type UpdateActivitySchema = z.infer<typeof updateActivityInput>;