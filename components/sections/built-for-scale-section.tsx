import { Stat as StatGraph, StatsWithGraph } from './stats-with-graph'

export function BuiltForScaleSection() {
  return (
    <StatsWithGraph
      eyebrow="Built for scale"
      headline="Compliance infrastructure that scales with your business"
      subheadline={
        <p>
          From small bakeries to multi-site manufacturers, Docuparse ESG is built for scale. Our document processing
          pipelines deliver consistent reports whether you&apos;re tracking 10 invoices or 10,000.
        </p>
      }
    >
      <StatGraph stat="Jan 2026" text="UK SDR mandatory compliance deadline for companies over £36m turnover." />
      <StatGraph
        stat="4+ Regulations"
        text="SECR, UK SDR, EUDR, and s172 reporting requirements automated in one platform."
      />
    </StatsWithGraph>
  )
}
