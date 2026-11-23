import type { FastifyInstance } from "fastify";
import { getDb, notFound } from "../../../utils/fastifyMongoService.js";
import type { GalleryItem, UploadImageInput } from "../schemas/uploader.schema.js";
import type { GalleryListQuery } from "../schemas/galeria.schema.js";
import { getStoredImagePath, removeStoredImage, storeUploadedImage } from "./uploader.service.js";

const galleryCollection = async (fastify: FastifyInstance) =>
  (await getDb(fastify)).collection<GalleryItem>("galeria");

export async function createGalleryItem(
  fastify: FastifyInstance,
  input: UploadImageInput,
): Promise<GalleryItem> {
  const { absolutePath, url } = await storeUploadedImage(input);

  const item: GalleryItem = {
    _id: new fastify.mongo.ObjectId().toHexString(),
    nome: input.nome,
    url,
  };

  try {
    await (await galleryCollection(fastify)).insertOne(item);
    return item;
  } catch (error) {
    try {
        removeStoredImage(absolutePath);
    } catch {
      // Cleanup is best-effort if database insertion fails.
    }
    throw error;
  }
}

export async function findAllGalleryItems(fastify: FastifyInstance, { page, limit }: GalleryListQuery,) {
  const collection = await galleryCollection(fastify);

  const [items, total] = await Promise.all([
    collection.find({}).sort({ _id: -1 }).skip((page - 1) * limit).limit(limit).toArray(),
    collection.countDocuments(),
  ]);

  return { items, page, limit, total, totalPages: Math.ceil(total / limit) };
}

export async function deleteGalleryItem(fastify: FastifyInstance, id: string) {
  const item = await (await galleryCollection(fastify)).findOneAndDelete({ _id: id });
  if (!item) notFound("Arquivo da galeria não encontrado.");

  const fileDeleted = await removeStoredImage(getStoredImagePath(item.url)).then(
    () => {},
    (error) => {
      fastify.log.error(error, "Não foi possível remover o arquivo da galeria.");
    },
  );

  return { success: true, id, deletedAt: new Date().toISOString(), fileDeleted };
}