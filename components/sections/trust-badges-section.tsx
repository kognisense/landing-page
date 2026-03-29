import Image from 'next/image'
import { Container } from '../elements/container'

export function TrustBadge({ logo, title }: { logo: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-6 w-6 items-center justify-center">
        <Image
          src={logo}
          alt={title}
          width={24}
          height={24}
          className="object-contain opacity-50 grayscale dark:invert dark:opacity-40"
        />
      </div>
      <span className="text-sm text-olive-950/50 dark:text-white/50">{title}</span>
    </div>
  )
}

export function TrustBadgesSection() {
  return (
    <section className="py-12" id="trust-badges">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <TrustBadge logo="/img/aws-logo.svg" title="AWS Infrastructure" />
          <TrustBadge logo="/img/uk-flag.svg" title="UK Data Residency" />
          <TrustBadge logo="/img/gdpr-logo.svg" title="GDPR Compliant" />
        </div>
      </Container>
    </section>
  )
}
