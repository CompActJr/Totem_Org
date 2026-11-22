// src/modules/auth/auth.schemas.ts

import z from "zod";

export const authResponse = z.object({
  jwt: z.string(),
  expiration: z.date(),
  created: z.date()
})

export const authRequest = z.object({
  user: z.string(),
  password: z.string()
})

export const meResponse = z.object({
  name: z.string(),
  email: z.email()
})

export type AuthResponse = z.infer<typeof authResponse>;
export type AuthRequest = z.infer<typeof authRequest>;
export type MeResponse = z.infer<typeof meResponse>;