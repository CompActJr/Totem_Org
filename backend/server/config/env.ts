export const GLOBAL_CONFIG = {

    nodeEnv: process.env.NODE_ENV ?? "development",

    adminEmail: process.env.ADMIN_EMAIL ?? "",

    enableSwagger: process.env.ENABLE_SWAGGER === "true",

    corsOrigins: process.env.CORS_ORIGINS?.split(",") ?? []
}