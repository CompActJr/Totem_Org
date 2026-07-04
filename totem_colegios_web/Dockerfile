
FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:24-alpine
WORKDIR /app

COPY --from=build /app/.output/ ./

ENV PORT=8001
ENV HOST=0.0.0.0

EXPOSE 8001

CMD ["node", "/app/server/index.mjs"]
