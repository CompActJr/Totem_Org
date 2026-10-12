// src/modules/units/schemas/testimonial.schemas.ts

import z from "zod";

export const testimonialSchema = z.object({
  _id: z.number().int(),
  nome: z.string(),
  imagem: z.string(),
  depoimento: z.string(),
});

export const createTestimonialInput = testimonialSchema.omit({
    _id: true
});

export const updateTestimonialInput = testimonialSchema
    .partial()
    .refine((data) => Object.keys(data).length >= 1, {
        message: "Informe pelo menos um campo para atualizar.",
    });

export type CreateTestimonialInput = z.infer<typeof createTestimonialInput>;
export type UpdateTestimonialInput = z.infer<typeof updateTestimonialInput>;