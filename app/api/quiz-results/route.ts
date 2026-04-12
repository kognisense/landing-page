import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { QuizEmail, type RiskLevel } from '@/components/emails/QuizEmail'
import { BRAND } from '@/config/brand'

const resend = new Resend(process.env.RESEND_API_KEY)

interface QuizResultsRequest {
  email: string
  name?: string
  riskLevel: RiskLevel
}

function validateRequest(data: unknown): data is QuizResultsRequest {
  if (typeof data !== 'object' || data === null) return false
  const obj = data as Record<string, unknown>
  
  if (typeof obj.email !== 'string' || !obj.email.includes('@')) return false
  if (!['HIGH_RISK', 'MEDIUM_RISK', 'PREPARATORY'].includes(obj.riskLevel as string)) return false
  
  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!validateRequest(body)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    const { email, name, riskLevel } = body

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const riskLabels = {
      HIGH_RISK: 'Action Required',
      MEDIUM_RISK: 'Review Recommended',
      PREPARATORY: 'Ready to Prepare',
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || BRAND.email.from,
      to: [email],
      subject: `Your ${riskLabels[riskLevel]} ESG Roadmap: 15 Steps to 2027 Compliance`,
      react: QuizEmail({
        name: name || '',
        email,
        riskLevel,
      }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
