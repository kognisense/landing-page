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
  Hr,
  Link,
} from '@react-email/components'
import * as React from 'react'

export interface WaitlistEmailProps {
  name: string
  email: string
  ctaUrl?: string
  logoUrl?: string
}

export function WaitlistEmail({
  name,
  email,
  ctaUrl = 'https://kognisense.com',
  logoUrl = 'https://kognisense.com/logo.png',
}: WaitlistEmailProps) {
  const greeting = name ? `Hi ${name},` : 'Hello,'

  return (
    <Html>
      <Head />
      <Preview>You're on the Kognisense Early Access List</Preview>
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
                Welcome to Early Access
              </Heading>
            </Section>

            <Section style={{ padding: '40px' }}>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 16px 0' }}>
                {greeting}
              </Text>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 24px 0' }}>
                Thanks for joining the Kognisense waitlist. You're now on the list for early access to our automated compliance platform for UK Food SMEs.
              </Text>

              <Section
                style={{
                  backgroundColor: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  marginBottom: '24px',
                }}
              >
                <Text style={{ fontSize: '14px', color: '#16A34A', fontWeight: '600', margin: '0 0 8px 0' }}>
                  Expected Launch
                </Text>
                <Text style={{ fontSize: '24px', fontWeight: '700', color: '#16A34A', margin: 0 }}>
                  Summer 2026
                </Text>
              </Section>

              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 24px 0' }}>
                We'll notify you as soon as we're ready to onboard founding partners. In the meantime, here's what you can expect:
              </Text>

              <Section style={{ marginBottom: '24px' }}>
                <Text style={{ fontSize: '15px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>
                  What's Coming:
                </Text>
                {[
                  'AI-powered invoice extraction for Scope 1, 2 & 3 data',
                  'Automated SECR & SDR report generation',
                  'UK retailer compliance mapping (Tesco, M&S, Sainsbury\'s)',
                  'Audit-ready documentation in minutes, not weeks',
                ].map((item, i) => (
                  <Text key={i} style={{ fontSize: '14px', lineHeight: '22px', color: '#374151', margin: '0 0 8px 0', paddingLeft: '16px' }}>
                    • {item}
                  </Text>
                ))}
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
                  Take the Risk Assessment
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
                <Link href="https://kognisense.com/privacy-policy" style={{ color: '#6B7280' }}>Privacy Policy</Link>
                {' • '}
                <Link href="https://kognisense.com" style={{ color: '#6B7280' }}>kognisense.com</Link>
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}

export default WaitlistEmail
