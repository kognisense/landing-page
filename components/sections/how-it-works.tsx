import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'
import { ShieldCheckIcon } from '../icons/shield-check-icon'
import { AwsBedrockIcon } from '../icons/aws-bedrock-icon'
import { AwsTextractIcon } from '../icons/aws-textract-icon'
import { MapPinIcon } from '../icons/map-pin-icon'
import { LockIcon } from '../icons/lock-icon'
import { CloudIcon } from '../icons/cloud-icon'

export function Step({
  number,
  title,
  description,
  className,
  ...props
}: {
  number: string
  title: ReactNode
  description: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div className={clsx('flex flex-col gap-4', className)} {...props}>
      {/* Step Number */}
      <div className="font-display text-5xl/none font-light tracking-tight text-olive-950/20 dark:text-white/20">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-olive-950 dark:text-white">{title}</h3>

      {/* Description */}
      <p className="text-sm/7 text-olive-700 dark:text-olive-400">{description}</p>
    </div>
  )
}

export function TrustFeature({
  icon,
  title,
  description,
  className,
  ...props
}: {
  icon: ReactNode
  title: ReactNode
  description: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4 rounded-xl bg-olive-950/2.5 p-6 dark:bg-white/5',
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-olive-950/10 dark:bg-white/10">
          <div className="flex size-5 items-center text-olive-600 dark:text-olive-500">{icon}</div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-olive-950 dark:text-white">{title}</h4>
        </div>
      </div>
      <p className="text-sm/7 text-olive-700 dark:text-olive-400">{description}</p>
    </div>
  )
}

export function HowItWorks({ children, ...props }: ComponentProps<typeof Section>) {
  return (
    <Section
      eyebrow="Your Data. Your Compliance. Our Intelligence."
      headline="Three Steps to Zero-Effort Compliance"
      subheadline="We turn document chaos into structured, audit-ready ESG data without your data ever leaving our secure UK regulated environment."
      {...props}
    >
      <div className="flex flex-col gap-16">
        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">{children}</div>

        {/* Trust & Security Features - EXPANDED */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TrustFeature
            icon={<AwsBedrockIcon />}
            title="Built on AWS Bedrock"
            description="Enterprise-grade AI on private, secure models. Your data never trains public models."
          />
          <TrustFeature
            icon={<AwsTextractIcon />}
            title="Powered by AWS Textract"
            description="Advanced OCR extracts data from invoices, PDFs, and scanned documents with 99%+ accuracy."
          />
          <TrustFeature
            icon={<MapPinIcon />}
            title={<span>🇬🇧 UK Data Residency</span>}
            description="All data stays within AWS UK Regions (London) to meet post-Brexit GDPR requirements."
            className="ring-1 ring-olive-950/10 dark:ring-white/10"
          />
          <TrustFeature
            icon={<CloudIcon />}
            title="VPC Data Isolation"
            description="Each SME's data is completely siloed in isolated virtual private environments."
            className="ring-1 ring-olive-950/10 dark:ring-white/10"
          />
          <TrustFeature
            icon={<LockIcon />}
            title="GDPR Compliant"
            description="Full compliance with UK-GDPR and EU data protection regulations."
          />
        </div>
      </div>
    </Section>
  )
}
