import z from 'zod'
import { getBearerAuthHeaders } from '../../../utils/auth'
import {createPostSchema, Post} from '~~/shared/posts'

export default defineEventHandler(async (event) => {
  const body = (await readValidatedBody(event, createPostSchema.safeParse)).data
  if (!body) {
    throw createError({ statusCode: 400, statusMessage: 'Dados do post inválidos.' })
  }

  const headers = getBearerAuthHeaders(event)
  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')

  try {
    return await $fetch(`${baseURL}/posts`, {
      method: 'POST',
      headers,
      body,
    })
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const fetchError = error as { statusCode?: number; statusMessage?: string }
      throw createError({
        statusCode: fetchError.statusCode || 502,
        statusMessage: fetchError.statusMessage || 'Falha ao cadastrar o post.',
      })
    }

    throw createError({ statusCode: 503, statusMessage: 'Serviço de posts indisponível.' })
  }
})
