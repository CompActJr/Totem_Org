import { FastifyInstance } from "fastify";
import { CreateResponse, DeleteResponse, UpdateResponse } from "../../types/api.types.js";
import { getDb, getNextSequence, notFound } from "../../utils/fastifyMongoService.js";
import { Post } from "./blog.model.js";
import { CreatePostInput, PostResponse, UpdatePostInput } from "./blog.schema.js";

const POSTS = "posts";

export async function findAllPosts(fastify: FastifyInstance) {
  const db = await getDb(fastify);
  return db.collection<Post>(POSTS).find({}).sort({ _id: -1 }).toArray();
}

export async function findPostById(fastify: FastifyInstance, id: number) {
  const db = await getDb(fastify);
  const post = await db.collection<Post>(POSTS).findOne({ _id: id });
  if (!post) notFound("Post não encontrado.");
  return post;
}

export async function createPost(fastify: FastifyInstance, input: CreatePostInput): Promise<CreateResponse> {
  const db = await getDb(fastify);
  const id = await getNextSequence(fastify, POSTS);
  const createdAt = new Date().toISOString().slice(0, 10);

  await db.collection<Post>(POSTS).insertOne({
    _id: id,
    ...input,
    createdAt,
    updatedAt: createdAt,
  });

  return { success: true, id, createdAt };
}

export async function updatePost(fastify: FastifyInstance, id: number, input: UpdatePostInput): Promise<UpdateResponse> {
  const db = await getDb(fastify);
  const updatedAt = new Date().toISOString().slice(0, 10);
  const result = await db.collection<Post>(POSTS).updateOne({ _id: id }, { $set: { ...input, updatedAt } });
  if (result.matchedCount === 0) notFound("Post não encontrado.");
  return { success: true, id, updatedAt };
}

export async function deletePost(fastify: FastifyInstance, id: number): Promise<DeleteResponse> {
  const db = await getDb(fastify);
  const result = await db.collection<Post>(POSTS).deleteOne({ _id: id });
  if (result.deletedCount === 0) notFound("Post não encontrado.");
  return { success: true, id, deletedAt: new Date().toISOString() };
}
