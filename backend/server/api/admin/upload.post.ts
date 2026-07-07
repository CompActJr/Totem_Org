import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'node:crypto'
import { throwBadRequest } from '../../utils/errors'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
)

const TIPOS = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const TAMANHO_MAX = 5 * 1024 * 1024

export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)
  if (!files?.length) throwBadRequest('Nenhum arquivo enviado')

  const file = files[0]

  if (!TIPOS.includes(file.type!)) {
    throwBadRequest('Tipo de arquivo não permitido. Use JPEG, PNG, WebP ou GIF', [
      { field: 'file', message: 'Tipo de arquivo não permitido' },
    ])
  }

  if (file.data.length > TAMANHO_MAX) {
    throwBadRequest('Arquivo muito grande. Máximo 10MB', [
      { field: 'file', message: 'Arquivo muito grande. Máximo 10MB' },
    ])
  }

  const ext = file.filename?.split('.').pop() || 'jpg'
  const fileName = `uploads/${randomUUID()}.${ext}`

  const { error } = await supabase.storage
    .from('images')
    .upload(fileName, file.data, {
      contentType: file.type!,
      cacheControl: '3600',
      upsert: false,
    })

  if (error) {
    console.error('Erro Supabase Storage:', error)
    throw createError({ statusCode: 500, statusMessage: 'Erro ao salvar imagem' })
  }

  const { data: { publicUrl } } = supabase.storage
    .from('images')
    .getPublicUrl(fileName)

  return { url: publicUrl }
})
