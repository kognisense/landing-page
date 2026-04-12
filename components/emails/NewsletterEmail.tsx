import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Button,
  Link,
} from '@react-email/components'
import * as React from 'react'
import { BRAND } from '@/config/brand'

export interface NewsletterEmailProps {
  email: string
  ctaUrl?: string
  logoUrl?: string
}

export function NewsletterEmail({
  email,
  ctaUrl = BRAND.urls.website,
  logoUrl = BRAND.urls.logo,
}: NewsletterEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for subscribing to Kognisense updates</Preview>
      <Body
        style={{
          backgroundColor: '#F3F4F6',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
          <Section style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Img src={logoUrl} alt="Kognisense" width="160" style={{ margin: '0 auto' }} />
          </Section>

          <Container
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            <Section style={{ backgroundColor: '#111827', padding: '32px 40px', textAlign: 'center' }}>
              <Heading as="h1" style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '600', margin: 0 }}>
                You're Subscribed
              </Heading>
            </Section>

            <Section style={{ padding: '40px' }}>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 16px 0' }}>
                Thanks for subscribing to the Kognisense newsletter.
              </Text>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 24px 0' }}>
                We'll keep you updated on product launches, regulatory changes, and compliance tips for UK Food SMEs.
              </Text>

              <Section
                style={{
                  backgroundColor: '#F9FAFB',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                <Text style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>
                  Key Dates
                </Text>
                <Text style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
                  Summer 2026: Product Launch
                </Text>
                <Text style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '4px 0 0 0' }}>
                  Jan 2027: SDR Compliance Deadline
                </Text>
              </Section>

              <Section style={{ textAlign: 'center' }}>
                <Button
                  href={ctaUrl}
                  style={{
                    backgroundColor: '#111827',
                    color: '#FFFFFF',
                    padding: '14px 32px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Visit Kognisense
                </Button>
              </Section>
            </Section>

            <Section style={{ backgroundColor: '#F9FAFB', padding: '24px 40px', borderTop: '1px solid #E5E7EB' }}>
              <Text style={{ fontSize: '12px', lineHeight: '18px', color: '#6B7280', textAlign: 'center', marginBottom: '8px' }}>
                Sent to {email}
              </Text>
              <Text style={{ fontSize: '12px', lineHeight: '18px', color: '#9CA3AF', textAlign: 'center' }}>
                © {new Date().getFullYear()} Kognisense. Built in Edinburgh, Scotland.
                <br />
                <Link href={BRAND.urls.privacyPolicy} style={{ color: '#6B7280' }}>Privacy Policy</Link>
                {' • '}
                <Link href={`${ctaUrl}/unsubscribe?email=${encodeURIComponent(email)}`} style={{ color: '#6B7280' }}>Unsubscribe</Link>
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}

export default NewsletterEmail
