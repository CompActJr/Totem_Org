import z from "zod";

export const createPostSchema = z.object({
  titulo: z.string().trim().min(1).max(200),
  resumo: z.string().trim().min(1).max(500),
  conteudo: z.string().trim().min(1).max(50_000),
  imagemUrl: z.string().trim().min(1).max(500).optional(),
  ativo: z.boolean(),
  destaque: z.boolean(),
  autor: z.string().trim().min(1).max(150),
  categoria: z.string().trim().min(1).max(100),
  unidades: z.array(z.string().trim().min(1).max(100)).min(1),
})

export type CreatePostSchema = z.infer<typeof createPostSchema>

export const updatePostSchema = createPostSchema.optional();

export type UpdatePostSchema = z.infer<typeof updatePostSchema>;

export const idSchema = z.coerce.number().int().positive();


export interface Post {
  _id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  imagemUrl?: string;
  ativo: boolean;
  destaque: boolean;
  autor: string;
  createdAt: string;
  updatedAt: string;
  categoria: string;
  unidades: string[];
}

export type BlogUnitSlug = 'ijui' | 'cachoeira-do-sul' | 'cruz-alta' | 'santa-maria' | 'santa-rosa'

export type BlogBooleanFilter = boolean | undefined

export interface BlogFilters {
  categoria: string
  destaque: BlogBooleanFilter
  ativo: BlogBooleanFilter
  unidades: BlogUnitSlug[]
}

export type BlogEditorMode = 'closed' | 'create' | 'edit'
