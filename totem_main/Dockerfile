
FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app

COPY --from=build /app/.output/ ./

ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=8001
EXPOSE 8001

CMD ["node", "/app/server/index.mjs"]
