import Image from 'next/image'
import { Container } from '../elements/container'

export function TrustBadge({ logo, title }: { logo: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-olive-950/10 bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md dark:border-white/10 dark:bg-olive-950/40">
      {/* Logo - Full color, no grayscale, larger size */}
      <div className="flex h-20 w-20 items-center justify-center">
        <Image src={logo} alt={title} width={80} height={80} className="object-contain" />
      </div>
      {/* Title - More prominent, darker text */}
      <p className="text-center text-sm font-semibold text-olive-950 dark:text-white">{title}</p>
    </div>
  )
}

export function TrustBadgesSection() {
  return (
    <section className="py-16" id="trust-badges">
      <Container>
        {/* Optional headline */}
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-wider text-olive-600 dark:text-olive-500">
          Enterprise-Grade Security & Compliance
        </p>

        {/* Badge grid */}
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8 lg:gap-12">
          <TrustBadge logo="/img/aws-logo.svg" title="AWS Infrastructure" />
          <TrustBadge logo="/img/uk-flag.svg" title="UK Data Residency" />
          <TrustBadge logo="/img/gdpr-logo.svg" title="GDPR Compliant" />
        </div>
      </Container>
    </section>
  )
}
