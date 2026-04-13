import { NextRequest } from 'next/server'
import { resend, EMAIL_FROM, WAITLIST_SEGMENT_ID } from '@/lib/resend'
import { apiSuccess, apiBadRequest, apiConfigError, apiError, handleApiError } from '@/lib/api-response'
import { NewsletterEmail } from '@/components/emails/NewsletterEmail'

function validate(data: unknown): string | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  return typeof obj.email === 'string' && obj.email.includes('@') ? obj.email : null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = validate(body)

    if (!email) return apiBadRequest('Invalid email address')
    if (!process.env.RESEND_API_KEY) return apiConfigError('Email service not configured')

    const { data: contactData, error: contactError } = await resend.contacts.create({
      email,
    })
    if (contactError) {
      console.error('Resend contacts.create error:', contactError)
    }

    if (WAITLIST_SEGMENT_ID) {
      const { error: segmentError } = await resend.contacts.segments.add({
        contactId: contactData?.id || email,
        segmentId: WAITLIST_SEGMENT_ID,
      })
      if (segmentError) {
        console.error('Resend contacts.segments.add error:', segmentError)
      }
    }

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [email],
      subject: "You're subscribed to Kognisense updates",
      react: NewsletterEmail({ email }),
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
