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
