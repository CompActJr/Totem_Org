import z from 'zod'

export const authRequestSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
})

export const authBackendRequestSchema = z.object({
  user: z.string().trim().min(1),
  password: z.string().min(1),
})

export const authResponseSchema = z.object({
  jwt: z.string().min(1),
  created: z.string(),
  expiration: z.string(),
})

export const meResponseSchema = z.object({
  name: z.string(),
  email: z.email(),
})

export const logoutResponseSchema = z.object({
  success: z.boolean(),
})

export type AuthRequest = z.infer<typeof authRequestSchema>
export type AuthBackendRequest = z.infer<typeof authBackendRequestSchema>
export type AuthResponse = z.infer<typeof authResponseSchema>
export type MeResponse = z.infer<typeof meResponseSchema>
export type LogoutResponse = z.infer<typeof logoutResponseSchema>
