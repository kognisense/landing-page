import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { NewsletterEmail } from '@/components/emails/NewsletterEmail'
import { BRAND } from '@/config/brand'

const resend = new Resend(process.env.RESEND_API_KEY)

interface NewsletterRequest {
  email: string
}

function validateRequest(data: unknown): data is NewsletterRequest {
  if (typeof data !== 'object' || data === null) return false
  const obj = data as Record<string, unknown>
  return typeof obj.email === 'string' && obj.email.includes('@')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!validateRequest(body)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const { email } = body

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || BRAND.email.from,
      to: [email],
      subject: "You're subscribed to Kognisense updates",
      react: NewsletterEmail({ email }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
