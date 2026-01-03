import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function ArrowUpRightIcon({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      strokeWidth={1.5}
      role="image"
      className={clsx('inline-block', className)}
      {...props}
    >
      <path d="M3.5 8.5L8.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 3.5H8.5V7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
