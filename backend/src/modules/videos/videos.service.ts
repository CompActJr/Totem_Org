import { FastifyInstance } from "fastify";
import { getDb, getNextSequence, notFound } from "../../utils/fastifyMongoService.js";
import { Video } from "./video.model.js";
import { CreateVideoSchema, UpdateVideoSchema } from "./videos.schemas.js";
import { UpdateResponse } from "../../types/api.types.js";

const VIDEOS = "videos";

export async function findAllVideos(fastify: FastifyInstance)  {
    const db = await getDb(fastify);
    return db.collection<Video>(VIDEOS)
            .find({ })
            .toArray();
}

export async function deleteVideo(fastify: FastifyInstance, id: number) {
      const db = await getDb(fastify);
      const result = await db.collection<Video>(VIDEOS).deleteOne({ _id: id });
      if (result.deletedCount === 0) notFound("Vídeo não encontrado.");
      return { success: true, id, deletedAt: new Date().toISOString() };
}

export async function createVideo(fastify: FastifyInstance, body: CreateVideoSchema) {
     const db = await getDb(fastify);
      const id = await getNextSequence(fastify, VIDEOS);
      const createdAt = new Date().toISOString().slice(0, 10);
    
      await db.collection<Video>(VIDEOS).insertOne({
        _id: id,
        ...body,
      });
    
      return { success: true, id, createdAt };
}

export async function updateVideo(fastify: FastifyInstance, id: number, body: UpdateVideoSchema): Promise<UpdateResponse> {
      const db = await getDb(fastify);
      const result = await db.collection<Video>(VIDEOS).updateOne({ _id: id }, { $set: body });
      if (result.matchedCount === 0) notFound("Vídeo não encontrado.");
      return { success: true, id, updatedAt: new Date().toISOString() };
}
