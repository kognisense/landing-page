'use client'

import { useEffect, useState } from 'react'

const messages = [
  'Cross-referencing with UK SDR 2026 Mandates...',
  'Checking Retailer Scope 3 Requirements...',
  'Evaluating EUDR Financial Exposure...',
  'Calculation complete.',
]

export function LoadingOverlay({ isVisible }: { isVisible: boolean }) {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setMessageIndex(0)
      return
    }

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 600) // Change message every 600ms

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm dark:bg-olive-950/95">
      <div className="text-center">
        {/* Pulsing AI Icons */}
        <div className="mb-8 flex items-center justify-center gap-8">
          {/* Document Icon */}
          <svg
            className="h-9 w-9 animate-pulse text-olive-950 dark:text-olive-200"
            style={{ animationDuration: '1.5s', animationDelay: '0s' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>

          {/* Chart Icon */}
          <svg
            className="h-9 w-9 animate-pulse text-olive-950 dark:text-olive-200"
            style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>

          {/* Checkmark Icon */}
          <svg
            className="h-9 w-9 animate-pulse text-olive-950 dark:text-olive-200"
            style={{ animationDuration: '1.5s', animationDelay: '0.6s' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Loading Bar */}
        <div className="mx-auto mb-8 h-2 w-64 overflow-hidden rounded-full bg-olive-950/10 dark:bg-white/10">
          <div
            className="h-full bg-olive-600 transition-all duration-300 ease-out dark:bg-olive-400"
            style={{ width: `${((messageIndex + 1) / messages.length) * 100}%` }}
          ></div>
        </div>

        {/* Cycling Text */}
        <p className="min-h-[3rem] text-sm font-medium text-olive-700 transition-opacity dark:text-olive-400">
          {messages[messageIndex]}
        </p>
      </div>
    </div>
  )
}
