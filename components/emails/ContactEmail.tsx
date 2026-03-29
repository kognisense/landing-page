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

export interface ContactEmailProps {
  name: string
  email: string
  company: string
  message: string
  ctaUrl?: string
  logoUrl?: string
}

export function ContactEmail({
  name,
  email,
  company,
  message,
  ctaUrl = 'https://kognisense.com',
  logoUrl = 'https://kognisense.com/logo.png',
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
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
            <Section style={{ backgroundColor: '#111827', padding: '24px 40px', textAlign: 'center' }}>
              <Heading as="h1" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: '600', margin: 0 }}>
                New Contact Form Submission
              </Heading>
            </Section>

            <Section style={{ padding: '32px 40px' }}>
              <Section style={{ marginBottom: '24px' }}>
                <Text style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                  From
                </Text>
                <Text style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>
                  {name}
                </Text>
                <Text style={{ fontSize: '14px', color: '#374151', margin: '4px 0 0 0' }}>
                  {email}
                </Text>
              </Section>

              {company && (
                <Section style={{ marginBottom: '24px' }}>
                  <Text style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                    Company
                  </Text>
                  <Text style={{ fontSize: '16px', color: '#111827', margin: 0 }}>
                    {company}
                  </Text>
                </Section>
              )}

              <Section style={{ marginBottom: '24px' }}>
                <Text style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                  Message
                </Text>
                <Text style={{ fontSize: '15px', lineHeight: '24px', color: '#374151', margin: 0, whiteSpace: 'pre-wrap' }}>
                  {message}
                </Text>
              </Section>

              <Hr style={{ borderColor: '#E5E7EB', margin: '24px 0' }} />

              <Section style={{ textAlign: 'center' }}>
                <Button
                  href={`mailto:${email}`}
                  style={{
                    backgroundColor: '#111827',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Reply to {name.split(' ')[0]}
                </Button>
              </Section>
            </Section>

            <Section style={{ backgroundColor: '#F9FAFB', padding: '16px 40px', borderTop: '1px solid #E5E7EB' }}>
              <Text style={{ fontSize: '12px', lineHeight: '18px', color: '#9CA3AF', textAlign: 'center' }}>
                Received on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}

export function ContactConfirmationEmail({
  name,
  email,
  ctaUrl = 'https://kognisense.com',
  logoUrl = 'https://kognisense.com/logo.png',
}: {
  name: string
  email: string
  ctaUrl?: string
  logoUrl?: string
}) {
  const greeting = name ? `Hi ${name},` : 'Hello,'

  return (
    <Html>
      <Head />
      <Preview>We received your message - Kognisense</Preview>
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
                Message Received
              </Heading>
            </Section>

            <Section style={{ padding: '40px' }}>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 16px 0' }}>
                {greeting}
              </Text>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 24px 0' }}>
                Thanks for reaching out. We've received your message and will get back to you within 24 hours.
              </Text>

              <Section
                style={{
                  backgroundColor: '#F9FAFB',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px',
                }}
              >
                <Text style={{ fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>
                  In the Meantime
                </Text>
                <Text style={{ fontSize: '14px', lineHeight: '22px', color: '#374151', margin: 0 }}>
                  Take our free Risk Assessment to understand your compliance obligations ahead of the Jan 2027 deadline.
                </Text>
              </Section>

              <Section style={{ textAlign: 'center' }}>
                <Button
                  href={`${ctaUrl}/#quiz`}
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
                  Take the Assessment
                </Button>
              </Section>
            </Section>

            <Section style={{ backgroundColor: '#F9FAFB', padding: '24px 40px', borderTop: '1px solid #E5E7EB' }}>
              <Text style={{ fontSize: '12px', lineHeight: '18px', color: '#6B7280', textAlign: 'center', marginBottom: '8px' }}>
                Sent to {email}
              </Text>
              <Text style={{ fontSize: '12px', lineHeight: '18px', color: '#9CA3AF', textAlign: 'center' }}>
                © {new Date().getFullYear()} Kognisense. Built in Edinburgh, Scotland.
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactEmail
