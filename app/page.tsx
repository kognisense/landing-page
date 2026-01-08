import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { FadeIn } from '@/components/elements/fade-in'
import { BuiltForScaleSection } from '@/components/sections/built-for-scale-section'
import { FAQSection } from '@/components/sections/faq-section'
import { FinancialRiskCardsSection } from '@/components/sections/financial-risk-cards-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { IndustryBenchmarksSection } from '@/components/sections/industry-benchmarks-section'
import { RegulatoryTimelineSection } from '@/components/sections/regulatory-timeline-section'
import { ResourcesSection } from '@/components/sections/resources-section'
import { RiskAssessmentQuiz } from '@/components/sections/risk-assessment-quiz'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { TrustBadgesSection } from '@/components/sections/trust-badges-section'

export default function Page() {
  return (
    <Main>
        {/* Hero Section */}
        <HeroLeftAlignedWithDemo
          id="hero"
          eyebrow={
            <AnnouncementBadge href="#" text="SDR 2026 Compliance Mandatory for UK Food SMEs" cta="Learn more" />
          }
          headline="Turn Invoices Into Audit-Ready ESG Reports—Automatically"
          subheadline={
            <p>
              Secure your supplier contracts for 2026. Automate your ESG data extraction with audit-ready accuracy.
              Docuparse transforms your invoices into compliance-ready reports for UK Food SMEs.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="#quiz" size="lg">
                Check Your Compliance
              </ButtonLink>

              <PlainButtonLink href="#footer" size="lg">
                Join Waitlist <ArrowNarrowRightIcon />
              </PlainButtonLink>
            </div>
          }
        />

        {/* Trust Badges */}
        <FadeIn>
          <TrustBadgesSection />
        </FadeIn>

        {/* Financial Risk Cards */}
        <FadeIn>
          <FinancialRiskCardsSection />
        </FadeIn>

        {/* Regulatory Timeline */}
        <FadeIn>
          <RegulatoryTimelineSection />
        </FadeIn>

        {/* How It Works */}
        <FadeIn>
          <HowItWorksSection />
        </FadeIn>

        {/* Industry Benchmarks */}
        <FadeIn>
          <IndustryBenchmarksSection />
        </FadeIn>

        {/* Built for Scale */}
        <FadeIn>
          <BuiltForScaleSection />
        </FadeIn>

        {/* Risk Assessment Quiz */}
        <FadeIn>
          <RiskAssessmentQuiz />
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <FAQSection />
        </FadeIn>

        {/* Resources */}
        <FadeIn>
          <ResourcesSection />
        </FadeIn>

        {/* Strategic Partnerships CTA */}
        <FadeIn>
          <CallToActionSimpleCentered
            headline="Join Our Founding Partner Program"
            subheadline={
              <p>
                We're seeking 10 forward-thinking UK Food SMEs to shape the future of compliance automation.
                Secure exclusive lifetime benefits and direct access to our product roadmap.
              </p>
            }
            cta={
              <ButtonLink href="/partnerships" size="lg">
                Learn More About the Program
              </ButtonLink>
            }
          />
        </FadeIn>
      </Main>
  )
}
