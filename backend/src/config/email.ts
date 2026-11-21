import nodemailer from 'nodemailer'
import { env } from './env.js'

const port = Number(env.SMTP_PORT ?? 587)

export const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port,
  secure: port === 465,
  ...(port === 587 ? { requireTLS: true } : {}),
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
  connectionTimeout: 10_000,
})