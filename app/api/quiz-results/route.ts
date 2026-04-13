import { NextRequest } from 'next/server'
import { resend, EMAIL_FROM, WAITLIST_SEGMENT_ID } from '@/lib/resend'
import { apiSuccess, apiBadRequest, apiConfigError, apiError, handleApiError } from '@/lib/api-response'
import { QuizEmail, type RiskLevel } from '@/components/emails/QuizEmail'

const VALID_RISK_LEVELS: RiskLevel[] = ['HIGH_RISK', 'MEDIUM_RISK', 'PREPARATORY']

const RISK_LABELS: Record<RiskLevel, string> = {
  HIGH_RISK: 'Action Required',
  MEDIUM_RISK: 'Review Recommended',
  PREPARATORY: 'Ready to Prepare',
}

interface QuizBody {
  email: string
  name: string
  riskLevel: RiskLevel
}

function validate(data: unknown): QuizBody | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  if (typeof obj.email !== 'string' || !obj.email.includes('@')) return null
  if (!VALID_RISK_LEVELS.includes(obj.riskLevel as RiskLevel)) return null
  return { email: obj.email, name: (obj.name as string) || '', riskLevel: obj.riskLevel as RiskLevel }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = validate(body)

    if (!validated) return apiBadRequest('Invalid request body')
    if (!process.env.RESEND_API_KEY) return apiConfigError('Email service not configured')

    const { email, name, riskLevel } = validated

    const { error: contactError } = await resend.contacts.create({
      email,
      firstName: name || undefined,
      unsubscribed: false,
      ...(WAITLIST_SEGMENT_ID && {
        segments: [{ id: WAITLIST_SEGMENT_ID }],
      }),
    })
    if (contactError) {
      const isDuplicate = contactError.message?.toLowerCase().includes('already exists')
      if (!isDuplicate) {
        console.error('Resend contacts.create error:', contactError)
        return apiError('Failed to add contact', 500, contactError.message)
      }
    }

    if (WAITLIST_SEGMENT_ID && contactError) {
      const { error: segmentError } = await resend.contacts.segments.add({
        email,
        segmentId: WAITLIST_SEGMENT_ID,
      })
      if (segmentError) {
        console.error('Resend contacts.segments.add error:', segmentError)
      }
    }

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [email],
      subject: `Your ${RISK_LABELS[riskLevel]} ESG Roadmap: 15 Steps to 2027 Compliance`,
      react: QuizEmail({ name, email, riskLevel }),
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
