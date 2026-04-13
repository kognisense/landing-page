import { NextRequest } from 'next/server'
import { resend, EMAIL_FROM, WAITLIST_SEGMENT_ID } from '@/lib/resend'
import { apiSuccess, apiBadRequest, apiConfigError, apiError, handleApiError } from '@/lib/api-response'
import { WaitlistEmail } from '@/components/emails/WaitlistEmail'

interface WaitlistBody {
  email: string
  name?: string
}

function validate(data: unknown): WaitlistBody | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  if (typeof obj.email !== 'string' || !obj.email.includes('@')) return null
  return { email: obj.email, name: typeof obj.name === 'string' ? obj.name : undefined }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = validate(body)

    if (!validated) return apiBadRequest('Invalid email address')
    if (!process.env.RESEND_API_KEY) return apiConfigError('Email service not configured')

    const { data: contactData, error: contactError } = await resend.contacts.create({
      email: validated.email,
      firstName: validated.name || undefined,
    })
    if (contactError) {
      console.error('Resend contacts.create error:', contactError)
    }

    if (WAITLIST_SEGMENT_ID) {
      const { error: segmentError } = await resend.contacts.segments.add({
        contactId: contactData?.id || validated.email,
        segmentId: WAITLIST_SEGMENT_ID,
      })
      if (segmentError) {
        console.error('Resend contacts.segments.add error:', segmentError)
      }
    } else {
      console.warn('RESEND_WAITLIST_SEGMENT_ID not set — contact will not be added to any segment')
    }

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [validated.email],
      subject: "You're on the Kognisense Early Access List",
      react: WaitlistEmail({ name: validated.name || '', email: validated.email }),
    })

    if (error) {
      console.error('Resend error:', error)
      return apiError('Failed to send email', 500, error.message)
    }

    return apiSuccess({ messageId: data?.id })
  } catch (error) {
    return handleApiError(error)
  }
}
