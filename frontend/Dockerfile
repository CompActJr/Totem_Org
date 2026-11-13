# Estágio 1: Build do Nuxt
FROM node:24-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Estágio 2: Runner (imagem final enxuta e segura)
FROM node:24-alpine AS runner

WORKDIR /app

# Cria usuário e grupo não-root por segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nuxtuser

# Copia apenas os arquivos necessários para produção
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copia o build gerado pelo estágio anterior
COPY --from=builder --chown=nuxtuser:nodejs /app/.output ./.output

# Define o usuário não-root
USER nuxtuser

EXPOSE 8000

CMD ["node", ".output/server/index.mjs"]
