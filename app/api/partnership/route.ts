import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { PartnershipEmail, PartnershipConfirmationEmail, type CollaborationPath } from '@/components/emails/PartnershipEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

interface PartnershipRequest {
  name: string
  email: string
  company: string
  role: string
  collaborationPath: CollaborationPath
  message: string
}

const validPaths: CollaborationPath[] = ['design_partner', 'strategic_advisor', 'capital_partner']

function validateRequest(data: unknown): data is PartnershipRequest {
  if (typeof data !== 'object' || data === null) return false
  const obj = data as Record<string, unknown>
  return (
    typeof obj.name === 'string' &&
    obj.name.length > 0 &&
    typeof obj.email === 'string' &&
    obj.email.includes('@') &&
    typeof obj.company === 'string' &&
    obj.company.length > 0 &&
    typeof obj.role === 'string' &&
    obj.role.length > 0 &&
    validPaths.includes(obj.collaborationPath as CollaborationPath) &&
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

    const { name, email, company, role, collaborationPath, message } = body

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev'
    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_FROM || 'hello@kognisense.com'

    const [adminResult, userResult] = await Promise.all([
      resend.emails.send({
        from: emailFrom,
        to: [adminEmail],
        subject: `Partnership Application: ${name} from ${company}`,
        react: PartnershipEmail({ name, email, company, role, collaborationPath, message }),
      }),
      resend.emails.send({
        from: emailFrom,
        to: [email],
        subject: 'Your Partnership Application - Kognisense',
        react: PartnershipConfirmationEmail({ name, email, collaborationPath }),
      }),
    ])

    if (adminResult.error || userResult.error) {
      console.error('Resend errors:', { admin: adminResult.error, user: userResult.error })
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
