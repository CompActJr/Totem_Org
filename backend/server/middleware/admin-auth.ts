import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname

  if (!path.startsWith('/api/admin')) return
  if (event.method === 'OPTIONS') return

  const authHeader = getHeader(event, 'authorization')
  const token = authHeader?.replace('Bearer ', '')

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Token ausente' })
  }

  // token aqui é o access_token da sessão do usuário (JWT normal),
  // não a secret key — isso não muda mesmo com as chaves novas
  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) {
    throw createError({ statusCode: 401, statusMessage: 'Token inválido ou expirado' })
  }

  event.context.user = data.user
})