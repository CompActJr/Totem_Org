
import { z } from "zod";

const envSchema = z.object({
  MONGO_URL: z.url(),
  PORT: z.coerce.number().int().positive().default(9000),
  HOST: z.string().default("0.0.0.0"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export const env = envSchema.parse(process.env);