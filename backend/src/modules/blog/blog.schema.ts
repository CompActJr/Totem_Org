import { z } from "zod";

export const postResponseSchema = z.object({
  _id: z.number().int(),
  titulo: z.string().trim().min(1).max(200),
  resumo: z.string().trim().min(1).max(500),
  conteudo: z.string().trim().min(1).max(50_000),
  imagemUrl: z.string().trim().min(1).max(500).optional(),
  ativo: z.boolean(),
  destaque: z.boolean(),
  autor: z.string().trim().min(1).max(150),
  createdAt: z.string(),
  updatedAt: z.string(),
  categoria: z.string().trim().min(1).max(100),
  unidades: z.array(z.string().trim().min(1).max(100)).min(1),
});

export const createPostInput = postResponseSchema.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
});

export const updatePostInput = createPostInput
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Informe pelo menos um campo para atualizar.",
  });

export const blogFiltersSchema = z.object({
  categoria: z.string().trim().min(1).max(100).optional(),
  destaque: z.preprocess(
    (value) => value === "true" ? true : value === "false" ? false : undefined,
    z.boolean().optional(),
  ),
  ativo: z.preprocess(
    (value) => value === "true" ? true : value === "false" ? false : undefined,
    z.boolean().optional(),
  ),
  unidades: z.preprocess(
    (value) => Array.isArray(value)
      ? value
      : typeof value === "string"
        ? value.split(",").map((slug) => slug.trim()).filter(Boolean)
        : undefined,
    z.array(z.enum(["ijui", "cachoeira-do-sul", "cruz-alta", "santa-maria", "santa-rosa"])).min(1).optional(),
  ),
});

export type PostResponse = z.infer<typeof postResponseSchema>;
export type CreatePostInput = z.infer<typeof createPostInput>;
export type UpdatePostInput = z.infer<typeof updatePostInput>;
export type BlogFilters = z.infer<typeof blogFiltersSchema>;
