import { NextRequest } from 'next/server'
import { resend, EMAIL_FROM } from '@/lib/resend'
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
