import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function UserGroupIcon({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      strokeWidth={1}
      role="image"
      className={clsx('inline-block', className)}
      {...props}
    >
      <path
        d="M5 4C5 5.10457 4.10457 6 3 6C1.89543 6 1 5.10457 1 4C1 2.89543 1.89543 2 3 2C4.10457 2 5 2.89543 5 4Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4C12 5.10457 11.1046 6 10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11C7 9.34315 5.65685 8 4 8H2C0.34315 8 0 9.34315 0 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11C13 9.34315 11.6569 8 10 8H9C8.5 8 8 8.5 8 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
