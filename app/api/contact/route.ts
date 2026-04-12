import { NextRequest } from 'next/server'
import { resend, EMAIL_FROM, ADMIN_EMAIL } from '@/lib/resend'
import { apiSuccess, apiBadRequest, apiConfigError, apiError, handleApiError } from '@/lib/api-response'
import { ContactEmail, ContactConfirmationEmail } from '@/components/emails/ContactEmail'

interface ContactBody {
  name: string
  email: string
  company: string
  message: string
}

function validate(data: unknown): ContactBody | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  if (typeof obj.name !== 'string' || !obj.name) return null
  if (typeof obj.email !== 'string' || !obj.email.includes('@')) return null
  if (typeof obj.message !== 'string' || !obj.message) return null
  return { name: obj.name, email: obj.email, company: (obj.company as string) || '', message: obj.message }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = validate(body)

    if (!validated) return apiBadRequest('Invalid request body')
    if (!process.env.RESEND_API_KEY) return apiConfigError('Email service not configured')

    const { name, email, company, message } = validated

    const [adminResult, userResult] = await Promise.all([
      resend.emails.send({
        from: EMAIL_FROM,
        to: [ADMIN_EMAIL],
        subject: `New Contact Form Submission from ${name}`,
        react: ContactEmail({ name, email, company, message }),
      }),
      resend.emails.send({
        from: EMAIL_FROM,
        to: [email],
        subject: 'We received your message - Kognisense',
        react: ContactConfirmationEmail({ name, email }),
      }),
    ])

    if (adminResult.error || userResult.error) {
      console.error('Resend errors:', { admin: adminResult.error, user: userResult.error })
      return apiError('Failed to send email')
    }

    return apiSuccess()
  } catch (error) {
    return handleApiError(error)
  }
}
