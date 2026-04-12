import { NextResponse } from 'next/server'

export function apiSuccess(data: Record<string, unknown> = {}) {
  return NextResponse.json({ success: true, ...data })
}

export function apiError(message: string, status = 500, details?: string) {
  const body: Record<string, unknown> = { error: message }
  if (details) body.details = details
  return NextResponse.json(body, { status })
}

export function apiBadRequest(message: string) {
  return apiError(message, 400)
}

export function apiConfigError(message: string) {
  return apiError(message, 500)
}

export function handleApiError(error: unknown) {
  console.error('API error:', error)
  return apiError('Internal server error')
}
