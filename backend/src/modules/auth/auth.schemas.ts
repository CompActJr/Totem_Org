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

export type AuthResponse = z.infer<typeof authResponse>;
export type AuthRequest = z.infer<typeof authRequest>;