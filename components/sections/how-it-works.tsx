import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'

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

export function HowItWorks({ children, ...props }: ComponentProps<typeof Section>) {
  return (
    <Section
      eyebrow="Your Data. Your Compliance. Our Intelligence."
      headline="Three Steps to Zero-Effort Compliance"
      subheadline="We turn document chaos into structured, audit-ready ESG data without your data ever leaving our secure UK regulated environment."
      {...props}
    >
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </Section>
  )
}
