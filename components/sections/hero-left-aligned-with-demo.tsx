import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Heading } from '../elements/heading'
import { Text } from '../elements/text'

export function HeroLeftAlignedWithDemo({
  eyebrow,
  headline,
  subheadline,
  cta,
  demo,
  footer,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
  demo?: ReactNode
  footer?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('relative min-h-screen flex items-center overflow-hidden -mt-[5.25rem] pt-[5.25rem]', className)} {...props}>
      {/* Minimalist ESG Pattern Background */}
      <div className="pointer-events-none absolute inset-0 -top-[5.25rem]">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#73734d0a_1px,transparent_1px),linear-gradient(to_bottom,#73734d0a_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#a3a3620a_1px,transparent_1px),linear-gradient(to_bottom,#a3a3620a_1px,transparent_1px)]" />

        {/* Abstract Gradient Shapes */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-olive-600/5 blur-3xl dark:bg-olive-400/5" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-olive-700/5 blur-3xl dark:bg-olive-300/5" />

        {/* ESG Data Visualization Hint - Abstract Chart Lines */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-5 dark:opacity-10" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path
            d="M0,250 L200,180 L400,200 L600,120 L800,140 L1000,80 L1200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-olive-700 dark:text-olive-400"
          />
          <path
            d="M0,280 L200,240 L400,260 L600,200 L800,220 L1000,160 L1200,180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-olive-600 dark:text-olive-500"
          />
        </svg>
      </div>

      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-24">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start gap-10">
            {eyebrow}
            <Heading className="max-w-6xl leading-[1.1]">{headline}</Heading>
            <Text size="lg" className="flex max-w-3xl flex-col gap-4 text-lg/8">
              {subheadline}
            </Text>
            {cta}
          </div>
          {demo}
        </div>
        {footer}
      </Container>
    </section>
  )
}
