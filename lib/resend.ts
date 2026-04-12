import { Resend } from 'resend'
import { BRAND } from '@/config/brand'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const EMAIL_FROM = process.env.EMAIL_FROM || BRAND.email.from
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || BRAND.email.admin
