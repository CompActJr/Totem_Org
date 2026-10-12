// src/modules/units/schemas/teacher.schemas.ts
import { z } from "zod";

export const teacherSchema = z.object({
    _id: z.number().int(),
    nome: z.string().trim().min(1).max(150),
    areaEnsino: z.string().trim().min(1).max(100),
    levels: z.array(z.string().trim().min(1)).min(1),
    imagemUrl: z.string().max(500).default(""),
    texto: z.string().trim().min(1).max(5000),
});

export const createTeacherInput = teacherSchema.omit({
  _id: true,
});

export const updateTeacherInput = createTeacherInput
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Informe pelo menos um campo para atualizar.",
  });

export type UpdateTeacherInput = z.infer<typeof updateTeacherInput>;
export type CreateTeacherInput = z.infer<typeof createTeacherInput>;