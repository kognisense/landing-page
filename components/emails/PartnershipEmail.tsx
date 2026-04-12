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
  Row,
  Column,
  Button,
  Hr,
  Link,
} from '@react-email/components'
import * as React from 'react'
import { BRAND } from '@/config/brand'

export type CollaborationPath = 'design_partner' | 'strategic_advisor' | 'capital_partner'

export interface PartnershipEmailProps {
  name: string
  email: string
  company: string
  role: string
  collaborationPath: CollaborationPath
  message: string
  ctaUrl?: string
  logoUrl?: string
}

const collaborationLabels: Record<CollaborationPath, string> = {
  design_partner: 'Design Partner',
  strategic_advisor: 'Strategic Advisor',
  capital_partner: 'Capital Partner',
}

const collaborationDescriptions: Record<CollaborationPath, string> = {
  design_partner: 'Food SME seeking early access and feedback',
  strategic_advisor: 'ESG Consultant/Auditor looking to collaborate',
  capital_partner: 'Investor interested in the Pre-Seed round',
}

export function PartnershipEmail({
  name,
  email,
  company,
  role,
  collaborationPath,
  message,
  logoUrl = BRAND.urls.logo,
}: PartnershipEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Partnership Application: {name} from {company}</Preview>
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
                New Partnership Application
              </Heading>
            </Section>

            <Section style={{ padding: '32px 40px' }}>
              <Section
                style={{
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #FECACA',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  marginBottom: '24px',
                }}
              >
                <Text style={{ fontSize: '12px', fontWeight: '600', color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>
                  Founding Partner Application
                </Text>
                <Text style={{ fontSize: '16px', fontWeight: '600', color: '#991B1B', margin: 0 }}>
                  {collaborationLabels[collaborationPath]}
                </Text>
                <Text style={{ fontSize: '14px', color: '#7F1D1D', margin: '4px 0 0 0' }}>
                  {collaborationDescriptions[collaborationPath]}
                </Text>
              </Section>

              <Row style={{ marginBottom: '16px' }}>
                <Column style={{ width: '50%', verticalAlign: 'top', paddingRight: '12px' }}>
                  <Text style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>
                    Name
                  </Text>
                  <Text style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
                    {name}
                  </Text>
                </Column>
                <Column style={{ width: '50%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>
                    Role
                  </Text>
                  <Text style={{ fontSize: '16px', color: '#111827', margin: 0 }}>
                    {role}
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginBottom: '24px' }}>
                <Column style={{ width: '50%', verticalAlign: 'top', paddingRight: '12px' }}>
                  <Text style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>
                    Company
                  </Text>
                  <Text style={{ fontSize: '16px', color: '#111827', margin: 0 }}>
                    {company}
                  </Text>
                </Column>
                <Column style={{ width: '50%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>
                    Email
                  </Text>
                  <Text style={{ fontSize: '16px', color: '#111827', margin: 0 }}>
                    {email}
                  </Text>
                </Column>
              </Row>

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

export function PartnershipConfirmationEmail({
  name,
  email,
  collaborationPath,
  ctaUrl = BRAND.urls.website,
  logoUrl = BRAND.urls.logo,
}: {
  name: string
  email: string
  collaborationPath: CollaborationPath
  ctaUrl?: string
  logoUrl?: string
}) {
  const greeting = name ? `Hi ${name},` : 'Hello,'

  return (
    <Html>
      <Head />
      <Preview>Your Partnership Application - Kognisense</Preview>
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
                Application Received
              </Heading>
            </Section>

            <Section style={{ padding: '40px' }}>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 16px 0' }}>
                {greeting}
              </Text>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 24px 0' }}>
                Thanks for applying to the Kognisense Founding Partner Program. Our founding team reviews every inquiry manually, and you can expect a response within 48 hours.
              </Text>

              <Section
                style={{
                  backgroundColor: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '24px',
                }}
              >
                <Text style={{ fontSize: '14px', color: '#16A34A', fontWeight: '600', margin: '0 0 4px 0' }}>
                  Your Interest
                </Text>
                <Text style={{ fontSize: '18px', fontWeight: '700', color: '#166534', margin: 0 }}>
                  {collaborationLabels[collaborationPath]}
                </Text>
              </Section>

              <Text style={{ fontSize: '15px', lineHeight: '24px', color: '#374151', margin: '0 0 24px 0' }}>
                As a founding partner, you'll work directly with our product team to shape the future of compliance automation for UK Food SMEs.
              </Text>

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
                  Learn More About Kognisense
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

export default PartnershipEmail
