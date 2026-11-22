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
  JWT_SECRET: z.string().min(32, "JWT_SECRET deve ter pelo menos 32 caracteres."),

   // SMTP
  SMTP_HOST: z.string().min(1).default('smtp.umbler.com'),

  SMTP_PORT: z.coerce.number()
    .int()
    .min(1)
    .max(65535)
    .default(587),

  SMTP_USER: z.email(),

  SMTP_PASS: z.string().min(1),

  SMTP_FROM: z.email(),

  SMTP_TO: z.email(),
});

export const env = envSchema.parse(process.env);