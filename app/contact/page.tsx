'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { Subheading } from '@/components/elements/subheading'
import { Button } from '@/components/elements/button'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { BRAND } from '@/config/brand'

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic (to be implemented with backend)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: 'general',
      message: '',
    })
  }

  return (
    <Main>
      <HeroSimpleCentered
        headline="Get in Touch"
        subheadline={<p>Have questions about {BRAND.name}? We're here to help.</p>}
      />

      <section className="py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Subheading className="mb-6">Send us a message</Subheading>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-olive-950/10 bg-white px-4 py-3 text-olive-950 placeholder-olive-500 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/10 dark:bg-olive-950 dark:text-white dark:placeholder-olive-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-olive-950/10 bg-white px-4 py-3 text-olive-950 placeholder-olive-500 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/10 dark:bg-olive-950 dark:text-white dark:placeholder-olive-400"
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
                    className="mt-2 w-full rounded-lg border border-olive-950/10 bg-white px-4 py-3 text-olive-950 placeholder-olive-500 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/10 dark:bg-olive-950 dark:text-white dark:placeholder-olive-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-2 w-full cursor-pointer rounded-lg border border-olive-950/10 bg-white px-4 py-3 text-olive-950 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/10 dark:bg-olive-950 dark:text-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="security">Security Question</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-olive-950 dark:text-white">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-olive-950/10 bg-white px-4 py-3 text-olive-950 placeholder-olive-500 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/10 dark:bg-olive-950 dark:text-white dark:placeholder-olive-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <Subheading className="mb-6">Contact Information</Subheading>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Email</h3>
                  <p className="mt-2 text-base text-olive-700 dark:text-olive-400">
                    <a href={`mailto:${BRAND.contact.email}`} className="hover:underline cursor-pointer">
                      {BRAND.contact.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Location</h3>
                  <p className="mt-2 text-base text-olive-700 dark:text-olive-400">
                    {BRAND.location.city}, {BRAND.location.country}<br />
                    {BRAND.location.region}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Response Time</h3>
                  <p className="mt-2 text-base text-olive-700 dark:text-olive-400">
                    We aim to respond within 24 hours during business days.
                  </p>
                </div>

                <div className="pt-8 border-t border-olive-950/10 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Other Resources</h3>
                  <ul className="mt-4 space-y-3 text-base text-olive-700 dark:text-olive-400">
                    <li>
                      <a href="/partnerships" className="hover:underline cursor-pointer">
                        Founding Partner Program →
                      </a>
                    </li>
                    <li>
                      <a href="/security" className="hover:underline cursor-pointer">
                        Security & Compliance →
                      </a>
                    </li>
                    <li>
                      <a href="/#faq" className="hover:underline cursor-pointer">
                        Frequently Asked Questions →
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Main>
  )
}
