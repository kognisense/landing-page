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
        {/* Loading Bar */}
        <div className="mx-auto mb-8 h-2 w-64 overflow-hidden rounded-full bg-olive-950/10 dark:bg-white/10">
          <div
            className="h-full bg-olive-600 transition-all duration-300 ease-out"
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
