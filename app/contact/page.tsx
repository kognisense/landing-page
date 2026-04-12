'use client'

import { useState } from 'react'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { Button } from '@/components/elements/button'
import { BRAND } from '@/config/brand'
import { useFormSubmit } from '@/lib/use-form-submit'

const initialFormData = { name: '', email: '', company: '', message: '' }
const inputStyles = "mt-1 w-full rounded-md bg-olive-950/5 px-4 py-2.5 text-sm text-olive-950 placeholder-olive-500 focus:bg-olive-950/10 focus:outline-none dark:bg-white/5 dark:text-white dark:placeholder-olive-500 dark:focus:bg-white/10 disabled:opacity-50"

export default function Page() {
  const [formData, setFormData] = useState(initialFormData)
  const { status, errorMessage, submit, reset } = useFormSubmit({
    endpoint: '/api/contact',
    logLabel: 'Contact',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit(formData).then(() => setFormData(initialFormData))
  }

  return (
    <Main>
      <section className="py-16">
        <Container className="flex flex-col items-center gap-6">
          <Heading className="text-center">Contact</Heading>
          <Text size="lg" className="max-w-xl text-center">
            Have questions about {BRAND.name}? We&apos;d love to hear from you.
          </Text>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="mx-auto max-w-md">
            {status === 'success' ? (
              <div className="rounded-2xl border border-olive-950/10 bg-olive-50 p-8 text-center dark:border-white/10 dark:bg-white/5">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-olive-600/10 dark:bg-olive-400/10">
                  <svg className="size-7 text-olive-600 dark:text-olive-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Message Sent</h3>
                <p className="mt-2 text-sm text-olive-700 dark:text-olive-400">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button type="button" color="light" className="mt-6" onClick={reset}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Name
                  </label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={status === 'loading'} className={inputStyles} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Email
                  </label>
                  <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={status === 'loading'} className={inputStyles} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Company
                  </label>
                  <input type="text" id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} disabled={status === 'loading'} className={inputStyles} placeholder="Your company (optional)" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Message
                  </label>
                  <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} disabled={status === 'loading'} className={inputStyles} placeholder="How can we help you?" />
                </div>

                {status === 'error' && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400">
                    {errorMessage}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </Button>
              </form>
            )}

            <div className="mt-12 border-t border-olive-950/10 pt-8 text-center dark:border-white/10">
              <p className="text-sm text-olive-700 dark:text-olive-400">
                You can also reach us at{' '}
                <a href={`mailto:${BRAND.contact.email}`} className="font-medium text-olive-950 hover:underline dark:text-white">
                  {BRAND.contact.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-olive-600 dark:text-olive-500">
                {BRAND.location.city}, {BRAND.location.country}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Main>
  )
}
