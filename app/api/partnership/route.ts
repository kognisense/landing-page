import { NextRequest } from 'next/server'
import { resend, EMAIL_FROM, ADMIN_EMAIL } from '@/lib/resend'
import { apiSuccess, apiBadRequest, apiConfigError, apiError, handleApiError } from '@/lib/api-response'
import { PartnershipEmail, PartnershipConfirmationEmail, type CollaborationPath } from '@/components/emails/PartnershipEmail'

const VALID_PATHS: CollaborationPath[] = ['design_partner', 'strategic_advisor', 'capital_partner']

interface PartnershipBody {
  name: string
  email: string
  company: string
  role: string
  collaborationPath: CollaborationPath
  message: string
}

function validate(data: unknown): PartnershipBody | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  if (typeof obj.name !== 'string' || !obj.name) return null
  if (typeof obj.email !== 'string' || !obj.email.includes('@')) return null
  if (typeof obj.company !== 'string' || !obj.company) return null
  if (typeof obj.role !== 'string' || !obj.role) return null
  if (!VALID_PATHS.includes(obj.collaborationPath as CollaborationPath)) return null
  if (typeof obj.message !== 'string' || !obj.message) return null
  return obj as unknown as PartnershipBody
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = validate(body)

    if (!validated) return apiBadRequest('Invalid request body')
    if (!process.env.RESEND_API_KEY) return apiConfigError('Email service not configured')

    const { name, email, company, role, collaborationPath, message } = validated

    const [adminResult, userResult] = await Promise.all([
      resend.emails.send({
        from: EMAIL_FROM,
        to: [ADMIN_EMAIL],
        subject: `Partnership Application: ${name} from ${company}`,
        react: PartnershipEmail({ name, email, company, role, collaborationPath, message }),
      }),
      resend.emails.send({
        from: EMAIL_FROM,
        to: [email],
        subject: 'Your Partnership Application - Kognisense',
        react: PartnershipConfirmationEmail({ name, email, collaborationPath }),
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
