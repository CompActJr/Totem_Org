
FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:24-alpine
WORKDIR /app

COPY --from=build /app/.output/ ./

EXPOSE 8000

CMD ["node", "/app/server/index.mjs"]
