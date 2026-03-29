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

export type RiskLevel = 'HIGH_RISK' | 'MEDIUM_RISK' | 'PREPARATORY'

export interface QuizEmailProps {
  name: string
  email: string
  riskLevel: RiskLevel
  ctaUrl?: string
  logoUrl?: string
}

const riskConfig = {
  HIGH_RISK: {
    label: 'High Risk',
    subtitle: 'SDR Mandatory',
    description: 'You face significant legal pressure as the 2027 reporting cycle begins.',
    color: '#DC2626',
    bgColor: '#FEF2F2',
    borderColor: '#FECACA',
    focus: 'Legal Compliance & Avoiding Fines',
  },
  MEDIUM_RISK: {
    label: 'Supply Chain Exposure',
    subtitle: 'Contract Risk',
    description: 'Your retail and export contracts depend on meeting supplier requirements.',
    color: '#EA580C',
    bgColor: '#FFF7ED',
    borderColor: '#FED7AA',
    focus: 'Market Access & Contract Retention',
  },
  PREPARATORY: {
    label: 'Preparatory',
    subtitle: 'Future-Proofing',
    description: 'Get ahead of the ripple effect and build competitive advantage.',
    color: '#16A34A',
    bgColor: '#F0FDF4',
    borderColor: '#BBF7D0',
    focus: 'Efficiency & Early-Mover Advantage',
  },
}

const foundationalSteps = [
  {
    title: 'Secure Data Residency',
    description: 'Ensure all ESG data is stored in a UK-based VPC (AWS London) to meet retailer privacy audits.',
  },
  {
    title: 'Centralize Invoices',
    description: 'Move from paper/email to a digital "Source of Truth" for all utility and waste bills.',
  },
  {
    title: 'Appoint an Owner',
    description: 'Assign reporting responsibility to a lead in Finance, Operations, or Sustainability.',
  },
  {
    title: 'Baseline GHG Inventory',
    description: 'Identify your primary Scope 1 (Gas/Fleet) and Scope 2 (Electricity) emission sources.',
  },
  {
    title: 'Stakeholder Mapping',
    description: 'List your top customers and identify which have the strictest 2026 reporting deadlines.',
  },
]

const profileSteps = {
  HIGH_RISK: [
    {
      title: 'SECR Audit Trail',
      description: 'Document the specific methodology used for carbon calculations (e.g., GHG Protocol).',
    },
    {
      title: 'Intensity Ratio Calculation',
      description: 'Define a metric that makes sense for food (e.g., per tonne of finished product).',
    },
    {
      title: 'Energy Efficiency Narrative',
      description: 'Draft a 12-month statement of energy-saving actions for the Directors\' Report.',
    },
    {
      title: 'Board-Level Oversight',
      description: 'Formalize ESG as a standing item on board agendas to meet UK Corporate Governance codes.',
    },
    {
      title: 'Scope 3 Deep Dive',
      description: 'Prioritize data for "Ingredients" and "Packaging"—the two highest impact areas in food.',
    },
    {
      title: 'SDR Gap Analysis',
      description: 'Benchmark current data against the IFRS S1 and S2 standards.',
    },
    {
      title: 'Assurance Readiness',
      description: 'Ensure data is "Third-Party Verifiable" to prevent greenwashing claims.',
    },
    {
      title: 'Climate Risk Registry',
      description: 'Identify physical risks (e.g., crop failure from extreme weather) in your supply chain.',
    },
    {
      title: 'Transition Plan',
      description: 'Outline how the business intends to reach Net Zero by 2050 (or earlier).',
    },
    {
      title: 'Automation Implementation',
      description: 'Replace manual spreadsheet tracking with AI extraction to reduce the risk of human error.',
    },
  ],
  MEDIUM_RISK: [
    {
      title: 'Retailer Pledge Alignment',
      description: 'Map your data specifically to Tesco\'s Net Zero Supplier Pledge or M&S Plan A.',
    },
    {
      title: 'EUDR Due Diligence',
      description: 'Create a geolocation-linked log for Soy, Palm Oil, or Cocoa ingredients.',
    },
    {
      title: 'ESRS Translation',
      description: 'Align UK data into European Sustainability Reporting Standards for EU trading partners.',
    },
    {
      title: 'Scope 3 Supplier Survey',
      description: 'Begin requesting baseline carbon data from your Tier-2 ingredient suppliers.',
    },
    {
      title: 'Product Footprinting',
      description: 'Focus on "LCA-Lite" (Life Cycle Assessment) for your top 20% highest-volume products.',
    },
    {
      title: 'Packaging Audit',
      description: 'Document plastic recyclability and recycled content for UK Plastic Packaging Tax requirements.',
    },
    {
      title: 'Logistics Optimization',
      description: 'Analyze freight data (miles/fuel) specifically for EU-bound shipments.',
    },
    {
      title: 'Deforestation-Free Verification',
      description: 'Secure "Chain of Custody" certificates for high-risk commodities.',
    },
    {
      title: 'Competitive Benchmarking',
      description: 'Use your ESG score as a USP in supermarket "Request for Proposals" (RFPs).',
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Provide retail buyers with "View-Only" access to your verified sustainability metrics.',
    },
  ],
  PREPARATORY: [
    {
      title: 'Low-Hanging Fruit',
      description: 'Focus on simple waste-reduction wins (e.g., LED lighting, food waste diversion).',
    },
    {
      title: 'Voluntary SECR Prep',
      description: 'Start tracking energy data now to avoid a scramble when turnover thresholds drop.',
    },
    {
      title: 'Digital Habit Building',
      description: 'Use AI to extract data from utility bills monthly rather than once a year.',
    },
    {
      title: 'Employee Engagement',
      description: 'Train staff on basic energy and waste "Best Practices."',
    },
    {
      title: 'Local Sourcing Audit',
      description: 'Evaluate if "Local Sourcing" can reduce your Scope 3 "Transport" footprint.',
    },
    {
      title: '"ESG-Lite" Reporting',
      description: 'Create a simple 1-page sustainability summary for your website.',
    },
    {
      title: 'Grant & Funding Scan',
      description: 'Identify UK/Scottish government grants for SME energy efficiency.',
    },
    {
      title: 'Packaging Simplification',
      description: 'Audit secondary packaging for easy-to-remove materials.',
    },
    {
      title: 'Water Stewardship',
      description: 'Start measuring water usage—a metric often overlooked in early ESG stages.',
    },
    {
      title: 'Software Integration',
      description: 'Connect energy and waste data directly to your financial accounting software.',
    },
  ],
}

function RoadmapItem({ number, title, description, isHighlight = false }: { 
  number: number
  title: string
  description: string
  isHighlight?: boolean 
}) {
  return (
    <Row style={{ marginBottom: '16px' }}>
      <Column style={{ width: '40px', verticalAlign: 'top' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: isHighlight ? '#111827' : '#F3F4F6',
            color: isHighlight ? '#FFFFFF' : '#374151',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            lineHeight: '32px',
          }}
        >
          {number}
        </div>
      </Column>
      <Column style={{ verticalAlign: 'top' }}>
        <Text style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
          {title}
        </Text>
        <Text style={{ margin: 0, fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
          {description}
        </Text>
      </Column>
    </Row>
  )
}

export function QuizEmail({
  name,
  email,
  riskLevel,
  ctaUrl = 'https://kognisense.com/#waitlist',
  logoUrl = 'https://kognisense.com/logo.png',
}: QuizEmailProps) {
  const config = riskConfig[riskLevel]
  const profileStepsList = profileSteps[riskLevel]
  const greeting = name ? `Hi ${name},` : 'Hello,'

  return (
    <Html>
      <Head />
      <Preview>Your {config.label} ESG Roadmap: 15 Steps to 2027 Compliance</Preview>
      <Body
        style={{
          backgroundColor: '#F3F4F6',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '40px 20px',
          }}
        >
          <Section style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Img
              src={logoUrl}
              alt="Kognisense"
              width="160"
              style={{ margin: '0 auto' }}
            />
          </Section>

          <Container
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              overflow: 'hidden',
            }}
          >
            <Section
              style={{
                backgroundColor: '#111827',
                padding: '32px 40px',
                textAlign: 'center',
              }}
            >
              <Heading
                as="h1"
                style={{
                  color: '#FFFFFF',
                  fontSize: '24px',
                  fontWeight: '600',
                  margin: '0 0 8px 0',
                }}
              >
                Your 15-Point Compliance Roadmap
              </Heading>
              <Text style={{ color: '#9CA3AF', fontSize: '14px', margin: 0 }}>
                Generated on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </Text>
            </Section>

            <Section style={{ padding: '32px 40px' }}>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 16px 0' }}>
                {greeting}
              </Text>
              <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#374151', margin: '0 0 24px 0' }}>
                Thanks for completing the Kognisense Risk Assessment. Based on your inputs, your company is currently categorized as:
              </Text>

              <Section
                style={{
                  backgroundColor: config.bgColor,
                  border: `1px solid ${config.borderColor}`,
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  marginBottom: '24px',
                }}
              >
                <Text
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: config.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: '0 0 4px 0',
                  }}
                >
                  {config.subtitle}
                </Text>
                <Heading
                  as="h2"
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: config.color,
                    margin: '0 0 8px 0',
                  }}
                >
                  {config.label}
                </Heading>
                <Text style={{ fontSize: '14px', lineHeight: '20px', color: '#374151', margin: 0 }}>
                  {config.description}
                </Text>
              </Section>

              <Text style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>
                <strong>Focus Area:</strong> {config.focus}
              </Text>

              <Hr style={{ borderColor: '#E5E7EB', margin: '32px 0' }} />

              <Section>
                <Heading
                  as="h3"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0 0 8px 0',
                  }}
                >
                  The Foundational 5
                </Heading>
                <Text style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 20px 0' }}>
                  Universal steps for baseline Audit-Readiness
                </Text>
                {foundationalSteps.map((step, index) => (
                  <RoadmapItem
                    key={index}
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </Section>

              <Hr style={{ borderColor: '#E5E7EB', margin: '32px 0' }} />

              <Section>
                <Heading
                  as="h3"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0 0 8px 0',
                  }}
                >
                  Your Personalized Action Plan
                </Heading>
                <Text style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 20px 0' }}>
                  Steps 6–15 tailored to your risk profile
                </Text>
                {profileStepsList.map((step, index) => (
                  <RoadmapItem
                    key={index}
                    number={index + 6}
                    title={step.title}
                    description={step.description}
                    isHighlight={index === profileStepsList.length - 1}
                  />
                ))}
              </Section>

              <Hr style={{ borderColor: '#E5E7EB', margin: '32px 0' }} />

              <Section
                style={{
                  backgroundColor: '#F9FAFB',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <Heading
                  as="h3"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0 0 12px 0',
                  }}
                >
                  Step 15: Automate the Audit Trail
                </Heading>
                <Text
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#6B7280',
                    margin: '0 0 20px 0',
                  }}
                >
                  The first 14 steps are manual, time-consuming, and prone to error. Step 15 is where we help.
                  <br />
                  <strong>Kognisense</strong> automates these exact steps for UK Food SMEs.
                </Text>
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
                  Secure Your Early Access Spot
                </Button>
              </Section>
            </Section>

            <Section
              style={{
                backgroundColor: '#F9FAFB',
                padding: '24px 40px',
                borderTop: '1px solid #E5E7EB',
              }}
            >
              <Text
                style={{
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#6B7280',
                  textAlign: 'center',
                  marginBottom: '12px',
                }}
              >
                This assessment was sent to {email}
              </Text>
              <Text
                style={{
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#9CA3AF',
                  textAlign: 'center',
                }}
              >
                © {new Date().getFullYear()} Kognisense. Built in Edinburgh, Scotland for UK regulatory standards.
                <br />
                <Link href="https://kognisense.com/privacy-policy" style={{ color: '#6B7280' }}>
                  Privacy Policy
                </Link>
                {' • '}
                <Link href="https://kognisense.com" style={{ color: '#6B7280' }}>
                  kognisense.com
                </Link>
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}

export default QuizEmail
