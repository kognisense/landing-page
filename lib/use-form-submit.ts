'use client'

import { useState, useCallback } from 'react'

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface UseFormSubmitOptions<T> {
  endpoint: string
  onSuccess?: (data: unknown) => void
  onError?: (error: string) => void
  logLabel?: string
  buildBody?: (formData: T) => unknown
}

interface UseFormSubmitReturn<T> {
  status: FormStatus
  errorMessage: string
  submit: (formData: T) => Promise<void>
  reset: () => void
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

export function useFormSubmit<T = Record<string, unknown>>(
  options: UseFormSubmitOptions<T>,
): UseFormSubmitReturn<T> {
  const { endpoint, onSuccess, onError, logLabel = 'Form', buildBody } = options

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const submit = useCallback(
    async (formData: T) => {
      setStatus('loading')
      setErrorMessage('')

      const body = buildBody ? buildBody(formData) : formData
      console.log(`[${logLabel}] Submitting:`, body)

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })

        const data = await res.json()
        console.log(`[${logLabel}] Response:`, res.status, data)

        if (!res.ok) {
          throw new Error(data.error || data.details || `Request failed (${res.status})`)
        }

        setStatus('success')
        onSuccess?.(data)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong'
        console.error(`[${logLabel}] Error:`, err)
        setStatus('error')
        setErrorMessage(message)
        onError?.(message)
      }
    },
    [endpoint, logLabel, buildBody, onSuccess, onError],
  )

  const reset = useCallback(() => {
    setStatus('idle')
    setErrorMessage('')
  }, [])

  return {
    status,
    errorMessage,
    submit,
    reset,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  }
}
