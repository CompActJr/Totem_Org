# Estágio 1: Build (Compilação do TypeScript)
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio 2: Runner (Imagem final enxuta e segura)
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Cria usuário e grupo não-root por segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 fastifyuser

# Copia apenas o package.json e instala dependências de produção
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copia o código compilado do estágio anterior (builder)
COPY --from=builder --chown=fastifyuser:nodejs /app/build ./build

# Define o usuário não-root
USER fastifyuser

# Expõe a porta que a aplicação vai rodar
EXPOSE 9000

# Comando para iniciar a aplicação
CMD ["node", "build/server.js"]