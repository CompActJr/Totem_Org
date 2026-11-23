import {
  galleryItemSchema,
  uploadImageSchema,
  type GalleryItem,
} from '~~/shared/galeria'

export function useUpload() {
  const pending = ref(false)
  const error = ref<string | null>(null)

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (typeof reader.result !== 'string') {
          reject(new Error('Não foi possível ler o arquivo.'))
          return
        }

        resolve(reader.result.split(',')[1] ?? reader.result)
      }
      reader.onerror = () => reject(new Error('Não foi possível ler o arquivo.'))
      reader.readAsDataURL(file)
    })
  }

  async function uploadImage(file: File): Promise<GalleryItem | null> {
    pending.value = true
    error.value = null

    try {
      const body = uploadImageSchema.parse({
        nome: file.name,
        base64: await fileToBase64(file),
      })
      const response = await $fetch('/api/upload', { method: 'POST', body })
      return galleryItemSchema.parse(response)
    } catch (requestError: unknown) {
      error.value = requestError instanceof Error
        ? requestError.message
        : 'Falha ao enviar a imagem.'
      return null
    } finally {
      pending.value = false
    }
  }

  return { pending, error, fileToBase64, uploadImage }
}
