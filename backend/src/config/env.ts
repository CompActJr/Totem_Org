
import { z } from "zod";

const envSchema = z.object({
  MONGO_URL: z.url(),
  PORT: z.coerce.number().int().positive().default(9000),
  HOST: z.string().default("0.0.0.0"),
  NODE_PRODUCTION:  z.preprocess(
    (val) => val === 'true' || val === '1',
    z.boolean()
  ).default(false),
  ALLOWED_ORIGINS: z.string().default(""),
});

export const env = envSchema.parse(process.env);