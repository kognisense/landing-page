import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'
import { DocumentIcon } from '../icons/document-icon'
import { ArrowUpRightIcon } from '../icons/arrow-up-right-icon'

export function ResourceCard({
  title,
  description,
  source,
  url,
  status,
  statusVariant = 'default',
  className,
  ...props
}: {
  title: ReactNode
  description: ReactNode
  source: ReactNode
  url: string
  status?: ReactNode
  statusVariant?: 'mandatory' | 'warning' | 'info' | 'eu' | 'default'
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between gap-6 rounded-xl bg-olive-950/2.5 p-6 dark:bg-white/5',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        {/* Icon & Source */}
        <div className="flex items-center gap-3">
          <div className="flex size-3.25 h-lh items-center text-olive-600 dark:text-olive-500">
            <DocumentIcon />
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-olive-600 dark:text-olive-500">
            {source}
          </span>

          {/* Status Badge */}
          {status && (
            <span
              className={clsx(
                'ml-auto rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide',
                statusVariant === 'mandatory' &&
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
                statusVariant === 'warning' &&
                  'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
                statusVariant === 'info' && 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
                statusVariant === 'eu' &&
                  'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
              )}
            >
              {status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-olive-950 dark:text-white">{title}</h3>

        {/* Description */}
        <p className="text-sm/7 text-olive-700 dark:text-olive-400">{description}</p>
      </div>

      {/* CTA Link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm/7 font-medium text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
      >
        View Official Guidance
        <ArrowUpRightIcon className="h-3 w-3" />
      </a>
    </div>
  )
}

export function RegulatoryResourceCenter({ children, ...props }: ComponentProps<typeof Section>) {
  return (
    <Section
      eyebrow="Resource Library"
      headline="Regulatory Resources"
      subheadline="Direct access to the UK and EU government mandates governing your industry's compliance."
      {...props}
    >
      <div className="flex flex-col gap-10 sm:gap-16">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
      </div>
    </Section>
  )
}
