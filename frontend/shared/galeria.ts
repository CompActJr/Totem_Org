import z from "zod";
export const uploadImageSchema = z.object({
  nome: z.string().trim().min(1).max(150),
  base64: z.string().trim().min(4),
});

export const galleryItemSchema = z.object({
  _id: z.string(),
  nome: z.string(),
  url: z.url(),
});

export type UploadImageInput = z.infer<typeof uploadImageSchema>;
export type GalleryItem = z.infer<typeof galleryItemSchema>;

export const galleryIdParamSchema = z.object({
  id: z.string().regex(/^[a-f\d]{24}$/i, "O ID precisa ser um ObjectId válido."),
});

export const galleryListQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(24),
});

export const galleryListResponseSchema = z.object({
  items: z.array(galleryItemSchema),
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
  total: z.number().int().nonnegative(),
  totalPages: z.number().int().nonnegative(),
});

export const galleryDeleteResponseSchema = z.object({
  success: z.literal(true),
  id: z.string(),
  deletedAt: z.string(),
  fileDeleted: z.boolean(),
});

export type GalleryListQuery = z.infer<typeof galleryListQuerySchema>;
export type GalleryListResponseSchema = z.infer<typeof galleryListResponseSchema>;
export type GalleryDeleteResponseSchema = z.infer<typeof galleryDeleteResponseSchema>