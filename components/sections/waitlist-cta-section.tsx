'use client'

import { useState } from 'react'
import { Container } from '../elements/container'
import { Button } from '../elements/button'
import { useFormSubmit } from '@/lib/use-form-submit'

export function WaitlistCtaSection() {
  const [email, setEmail] = useState('')
  const { status, errorMessage, submit, reset } = useFormSubmit<{ email: string }>({
    endpoint: '/api/waitlist',
    logLabel: 'Waitlist',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit({ email }).then(() => setEmail(''))
  }

  return (
    <section className="py-16">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-olive-950/5 px-6 py-24 shadow-2xl dark:bg-olive-900 sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold tracking-tight text-olive-950 dark:text-white sm:text-5xl">
            Get notified when we&apos;re launching
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-olive-700 dark:text-olive-300">
            Be first in line for Early Access. Join UK Food SMEs preparing for the Jan 2027 SDR mandate.
          </p>

          {status === 'success' ? (
            <div className="mx-auto mt-10 max-w-md text-center">
              <p className="text-lg font-medium text-olive-700 dark:text-olive-300">
                You&apos;re on the list! Check your inbox for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-olive-950/5 px-3.5 py-2 text-base text-olive-950 shadow-sm ring-1 ring-inset ring-olive-950/10 placeholder:text-olive-600 focus:ring-2 focus:ring-inset focus:ring-olive-500 disabled:opacity-50 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-olive-400 sm:text-sm/6"
              />
              <Button type="submit" size="lg" color="dark/light" disabled={status === 'loading'}>
                {status === 'loading' ? 'Joining...' : 'Notify me'}
              </Button>
            </form>
          )}

          {status === 'error' && (
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-red-600 dark:text-red-400">
              {errorMessage}
            </p>
          )}

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 opacity-30 dark:opacity-70"
          >
            <circle r="512" cx="512" cy="512" fill="url(#waitlist-gradient)" fillOpacity="1" />
            <defs>
              <radialGradient
                id="waitlist-gradient"
                r="1"
                cx="0"
                cy="0"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#56C0A7" />
                <stop offset="1" stopColor="#055F4E" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section>
  )
}
