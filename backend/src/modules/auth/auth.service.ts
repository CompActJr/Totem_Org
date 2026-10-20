// src/modules/auth/auth.service.ts

import { FastifyInstance } from "fastify";
import { AppError } from "../../config/errorHandler.js";
import { User } from "./auth.model.js";


export async function findUser(fastify: FastifyInstance, email: string) {
     const db = fastify.mongo.db;
    
      if (!db) {
        throw new AppError(503, "Banco de dados indisponível.", "Service Unavailable");
      }
    
      return db
        .collection<User>('users')
        .findOne({ email });
}