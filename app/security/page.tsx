import type { Metadata } from 'next'
import { Main } from '@/components/elements/main'
import { Container } from '@/components/elements/container'
import { ButtonLink } from '@/components/elements/button'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { DocumentCentered } from '@/components/sections/document-centered'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { LockIcon } from '@/components/icons/lock-icon'
import { ShieldCheckIcon } from '@/components/icons/shield-check-icon'
import { CloudIcon } from '@/components/icons/cloud-icon'
import { KeyIcon } from '@/components/icons/key-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { BRAND } from '@/config/brand'

export const metadata: Metadata = {
  title: `Security & Compliance | ${BRAND.name}`,
  description: 'Enterprise-grade security with UK data residency, VPC isolation, and encryption for your compliance data.',
}

function SecurityFeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex size-12 items-center justify-center rounded-full bg-olive-950/10 dark:bg-white/10">
        <div className="flex size-6 items-center text-olive-600 dark:text-olive-500">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-olive-950 dark:text-white">{title}</h3>
      <p className="text-base/7 text-olive-700 dark:text-olive-400">{description}</p>
    </div>
  )
}

export default function Page() {
  return (
    <Main>
      <HeroSimpleCentered
        headline="Enterprise-Grade Security"
        subheadline={
          <p>
            Your compliance data deserves the highest level of protection. {BRAND.name} is built on a
            foundation of UK data residency, enterprise encryption, and zero-trust architecture.
          </p>
        }
      />

      {/* Security Features Grid */}
      <section className="py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <SecurityFeatureCard
              icon={<CloudIcon />}
              title="UK Data Residency"
              description="All data stored exclusively in AWS London regions. Your information never leaves the UK, ensuring compliance with UK and EU data protection standards."
            />
            <SecurityFeatureCard
              icon={<ShieldCheckIcon />}
              title="VPC Isolation"
              description="Each customer's data is completely siloed in isolated virtual private cloud environments. Your data never mingles with other customers."
            />
            <SecurityFeatureCard
              icon={<LockIcon />}
              title="End-to-End Encryption"
              description="AES-256 encryption at rest, TLS 1.3 in transit. All documents and extracted data are encrypted throughout the entire processing pipeline."
            />
            <SecurityFeatureCard
              icon={<KeyIcon />}
              title="No AI Training on Your Data"
              description="Your proprietary supplier information is never used to train public AI models. Your data stays yours—private, secure, and confidential."
            />
            <SecurityFeatureCard
              icon={<CheckmarkIcon />}
              title="SOC 2 Type II Alignment"
              description="Following industry-standard SOC 2 Type II controls for security, availability, processing integrity, confidentiality, and privacy."
            />
            <SecurityFeatureCard
              icon={<ShieldCheckIcon />}
              title="Regular Security Audits"
              description="Third-party penetration testing and security assessments to ensure our platform meets the highest security standards."
            />
          </div>
        </Container>
      </section>

      {/* Detailed Security Practices */}
      <DocumentCentered headline="Our Security Practices">
        <h2>Compliance Certifications</h2>
        <p>
          {BRAND.name} follows industry-leading security standards and is working toward formal
          certifications including:
        </p>
        <ul>
          <li>SOC 2 Type II compliance</li>
          <li>ISO 27001 alignment for information security management</li>
          <li>GDPR compliance for UK and EU data protection</li>
          <li>Cyber Essentials (UK government-backed cybersecurity certification)</li>
        </ul>

        <h2>Data Encryption</h2>
        <p>All data is encrypted using industry-standard protocols:</p>
        <ul>
          <li>
            <strong>At Rest:</strong> AES-256 encryption for all stored documents, databases, and
            backups
          </li>
          <li>
            <strong>In Transit:</strong> TLS 1.3 encryption for all data transmission between your
            browser and our servers
          </li>
          <li>
            <strong>Processing:</strong> Encrypted during AI processing using AWS Bedrock's secure
            infrastructure
          </li>
        </ul>

        <h2>Access Controls</h2>
        <p>We implement strict access controls to protect your data:</p>
        <ul>
          <li>Multi-factor authentication (MFA) for all user accounts</li>
          <li>Role-based access control (RBAC) to limit data access</li>
          <li>Just-in-time (JIT) access for administrative functions</li>
          <li>Comprehensive audit logging of all system access</li>
        </ul>

        <h2>Infrastructure Security</h2>
        <p>Built on AWS's secure, UK-based infrastructure:</p>
        <ul>
          <li>All resources deployed in AWS London (eu-west-2) region</li>
          <li>Virtual Private Cloud (VPC) isolation for each customer</li>
          <li>Network segmentation and firewall protection</li>
          <li>DDoS protection and intrusion detection systems</li>
          <li>Regular security patches and updates</li>
        </ul>

        <h2>Incident Response</h2>
        <p>
          We maintain a comprehensive incident response plan to handle security events:
        </p>
        <ul>
          <li>24/7 security monitoring and alerting</li>
          <li>Dedicated incident response team</li>
          <li>Documented procedures for breach notification</li>
          <li>Regular incident response drills and training</li>
        </ul>

        <h2>Data Backup & Recovery</h2>
        <p>Your data is protected with automated backup procedures:</p>
        <ul>
          <li>Daily automated backups with 30-day retention</li>
          <li>Encrypted backups stored in geographically separate AWS regions within the UK</li>
          <li>Regular disaster recovery testing</li>
          <li>Recovery Point Objective (RPO): 24 hours</li>
          <li>Recovery Time Objective (RTO): 4 hours for critical services</li>
        </ul>

        <h2>Employee Security</h2>
        <p>Our team follows strict security practices:</p>
        <ul>
          <li>Background checks for all employees</li>
          <li>Regular security awareness training</li>
          <li>Signed confidentiality and data protection agreements</li>
          <li>Principle of least privilege access</li>
        </ul>

        <h2>Vendor Management</h2>
        <p>
          We carefully vet all third-party vendors and ensure they meet our security standards:
        </p>
        <ul>
          <li>AWS (infrastructure) - SOC 2, ISO 27001 certified</li>
          <li>Payment processors - PCI DSS compliant</li>
          <li>All vendors sign data processing agreements (DPAs)</li>
        </ul>
      </DocumentCentered>

      <CallToActionSimpleCentered
        headline="Have security questions?"
        subheadline={
          <p>
            Our team is here to help you understand our security measures and answer any questions
            about data protection.
          </p>
        }
        cta={
          <ButtonLink href="/contact" size="lg">
            Contact Security Team
          </ButtonLink>
        }
      />
    </Main>
  )
}
