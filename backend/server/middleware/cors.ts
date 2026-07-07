export default defineEventHandler((event) => {
  const allowedOrigins = [
    'https://admin.seudominio.com',
    'https://site1.seudominio.com',
    'https://site2.seudominio.com',
    // remova estes antes de subir pra produção:
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
  ]

  const origin = getHeader(event, 'origin')

  if (origin && allowedOrigins.includes(origin)) {
    setResponseHeader(event, 'Access-Control-Allow-Origin', origin)
    setResponseHeader(event, 'Vary', 'Origin')
  }

  setResponseHeader(event, 'Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  setResponseHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')
  setResponseHeader(event, 'Access-Control-Max-Age', 86400)

  if (event.method === 'OPTIONS') {
    event.node.res.statusCode = 204
    event.node.res.end()
  }
})
