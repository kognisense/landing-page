import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'

export function ValidationRow({
  stat,
  subheader,
  copy,
  className,
  ...props
}: {
  stat: ReactNode
  subheader: ReactNode
  copy: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-6 border-t border-olive-950/10 py-10 sm:py-16 md:grid-cols-[auto_1fr] md:gap-12 lg:gap-16 dark:border-white/10',
        className,
      )}
      {...props}
    >
      {/* Left Column: Large Stat */}
      <div className="flex items-start">
        <div className="font-display text-6xl/none tracking-tight text-olive-950 sm:text-7xl/none dark:text-white">
          {stat}
        </div>
      </div>

      {/* Right Column: Copy */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl/8 font-medium tracking-tight text-olive-950 dark:text-white">{subheader}</h3>
        <p className="text-base/7 text-olive-700 dark:text-olive-400">{copy}</p>
      </div>
    </div>
  )
}

export function FinancialRiskValidationGrid({
  eyebrow,
  headline,
  subheadline,
  children,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container>
        <div className="flex flex-col gap-10 sm:gap-16">
          {/* Section Header */}
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex flex-col gap-2">
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              <Subheading>{headline}</Subheading>
            </div>
            {subheadline && <div className="text-base/7 text-olive-700 dark:text-olive-400">{subheadline}</div>}
          </div>

          {/* Validation Grid */}
          <div className="flex flex-col">{children}</div>
        </div>
      </Container>
    </section>
  )
}
