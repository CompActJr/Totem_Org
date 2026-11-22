import z from 'zod'
import { getBearerAuthHeaders } from '../../../utils/auth'
import { updatePostSchema } from '~~/shared/posts'

const idSchema = z.coerce.number().int().positive()


export default defineEventHandler(async (event) => {
  const id = idSchema.safeParse(getRouterParam(event, 'id'))
  if (!id.success) {
    throw createError({ statusCode: 400, statusMessage: 'O ID precisa ser um número válido.' })
  }

  const body = (await readValidatedBody(event, updatePostSchema.safeParse)).data
  if (!body) {
    throw createError({ statusCode: 400, statusMessage: 'Dados do post inválidos.' })
  }

  const headers = getBearerAuthHeaders(event)
  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')

  try {
    return await $fetch(`${baseURL}/posts/${id.data}`, {
      method: 'PUT',
      headers,
      body,
    })
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const fetchError = error as { statusCode?: number; statusMessage?: string }
      throw createError({
        statusCode: fetchError.statusCode || 502,
        statusMessage: fetchError.statusMessage || 'Falha ao alterar o post.',
      })
    }

    throw createError({ statusCode: 503, statusMessage: 'Serviço de posts indisponível.' })
  }
})
