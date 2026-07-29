
FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:24-alpine
WORKDIR /app

COPY --from=build /app/.output/ ./

EXPOSE 8001

ENV NODE_ENV=production


CMD ["node", "/app/server/index.mjs"]
