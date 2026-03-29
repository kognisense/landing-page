'use client'

import { useState } from 'react'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { Button } from '@/components/elements/button'
import { BRAND } from '@/config/brand'

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    })
  }

  const inputStyles = "mt-1 w-full rounded-md bg-olive-950/5 px-4 py-2.5 text-sm text-olive-950 placeholder-olive-500 focus:bg-olive-950/10 focus:outline-none dark:bg-white/5 dark:text-white dark:placeholder-olive-500 dark:focus:bg-white/10"

  return (
    <Main>
      <section className="py-16">
        <Container className="flex flex-col items-center gap-6">
          <Heading className="text-center">Contact</Heading>
          <Text size="lg" className="max-w-xl text-center">
            Have questions about {BRAND.name}? We'd love to hear from you.
          </Text>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="mx-auto max-w-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-olive-950 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputStyles}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-olive-950 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputStyles}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-olive-950 dark:text-white">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={inputStyles}
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-olive-950 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={inputStyles}
                  placeholder="How can we help you?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

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
