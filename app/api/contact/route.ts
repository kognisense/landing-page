import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmail, ContactConfirmationEmail } from '@/components/emails/ContactEmail'
import { BRAND } from '@/config/brand'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactRequest {
  name: string
  email: string
  company?: string
  message: string
}

function validateRequest(data: unknown): data is ContactRequest {
  if (typeof data !== 'object' || data === null) return false
  const obj = data as Record<string, unknown>
  return (
    typeof obj.name === 'string' &&
    obj.name.length > 0 &&
    typeof obj.email === 'string' &&
    obj.email.includes('@') &&
    typeof obj.message === 'string' &&
    obj.message.length > 0
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!validateRequest(body)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { name, email, company, message } = body

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const emailFrom = process.env.EMAIL_FROM || BRAND.email.from
    const adminEmail = process.env.ADMIN_EMAIL || BRAND.email.admin

    const [adminResult, userResult] = await Promise.all([
      resend.emails.send({
        from: emailFrom,
        to: [adminEmail],
        subject: `New Contact Form Submission from ${name}`,
        react: ContactEmail({ name, email, company: company || '', message }),
      }),
      resend.emails.send({
        from: emailFrom,
        to: [email],
        subject: 'We received your message - Kognisense',
        react: ContactConfirmationEmail({ name, email }),
      }),
    ])

    if (adminResult.error || userResult.error) {
      console.error('Resend errors:', { admin: adminResult.error, user: userResult.error })
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
