'use client'

import { useState } from 'react'
import { LinkedInIcon } from '../icons/social/linkedin-icon'
import { XIcon } from '../icons/social/x-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from './footer-with-newsletter-form-categories-and-social-icons'
import { BRAND, getCopyrightText } from '@/config/brand'
import { useFormSubmit } from '@/lib/use-form-submit'

export function FooterSection() {
  const [email, setEmail] = useState('')
  const { status, errorMessage, submit, reset } = useFormSubmit<{ email: string }>({
    endpoint: '/api/newsletter',
    logLabel: 'Newsletter',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit({ email }).then(() => {
      if (status !== 'error') setEmail('')
    })
  }

  return (
    <FooterWithNewsletterFormCategoriesAndSocialIcons
      id="footer"
      cta={
        status === 'success' ? (
          <div className="flex max-w-sm flex-col gap-2">
            <p className="text-lg font-semibold text-olive-950 dark:text-white">
              Subscribed!
            </p>
            <p className="text-sm text-olive-700 dark:text-olive-400">
              Check your inbox for confirmation.
            </p>
          </div>
        ) : (
          <NewsletterForm
            headline={`Get Early Access - ${BRAND.product.launchQuarter} Launch`}
            subheadline={
              <p>
                Be first in line for {BRAND.name} Early Access. Join UK Food SMEs preparing for the {BRAND.product.complianceDeadline} SDR mandate.
              </p>
            }
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 text-olive-950 focus:outline-hidden dark:text-white disabled:opacity-50"
            />
          </NewsletterForm>
        )
      }
      links={
        <>
          <FooterCategory title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/partnerships">Partners</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCategory>
          <FooterCategory title="Legal">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/security">Security</FooterLink>
          </FooterCategory>
        </>
      }
      fineprint={getCopyrightText()}
      socialLinks={
        <>
          <SocialLink href={BRAND.social.linkedin} name="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href={BRAND.social.twitter} name="X">
            <XIcon />
          </SocialLink>
        </>
      }
      error={status === 'error' ? errorMessage : undefined}
    />
  )
}
