import z from "zod";

export const videoSchema = z.object({
    _id: z.number().positive(),
    name: z.string().trim().min(1).max(150),
    url: z.string().trim().min(8).max(255)
})

export const createVideoSchema = videoSchema.omit({
    _id: true
})

export const updateVideoSchema = createVideoSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
        message: 'Informe pelo menos um campo para atualizar.',
    })

export const idParam = () =>
        z.coerce.number({ error: "O ID precisa ser um número válido" }).int().positive();

export type CreateVideoSchema = z.infer<typeof createVideoSchema>
export type UpdateVideoSchema = z.infer<typeof updateVideoSchema>

export interface Video {
    _id: number,
    name: string,
    url: string
}

export type VideoEditorMode = 'closed' | 'create' | 'edit'
