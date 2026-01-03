import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon'
import { Stat, StatsThreeColumnWithDescription } from './stats-three-column-with-description'

export function IndustryBenchmarksSection() {
  return (
    <StatsThreeColumnWithDescription
      heading="Proven Results From UK Food Leaders"
      description={
        <p>
          Leading UK food companies are already meeting the new ESG standards. Here&apos;s what the data shows—and
          how Docuparse ESG helps SMEs match this performance.
        </p>
      }
    >
      <Stat
        stat={<span className="font-bold">2x Data Points</span>}
        text={
          <>
            <span className="block font-medium text-olive-950 dark:text-white">The Compleat Food Group</span>
            <span className="mt-2 block">
              UK chilled food leaders are doubling ESG data granularity to meet M&S and Tesco requirements.
              Docuparse ESG automates this &apos;data doubling&apos; via AWS Textract.
            </span>
            <a
              href="https://www.compleatfood.com/wp-content/uploads/2024/07/The-Compleat-Food-Group-ESG-Report-2023-24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
            >
              Source <ArrowNarrowRightIcon className="h-3 w-3" />
            </a>
          </>
        }
      />
      <Stat
        stat={<span className="font-bold">44.2% Waste Reduction</span>}
        text={
          <>
            <span className="block font-medium text-olive-950 dark:text-white">Bakkavor Group</span>
            <span className="mt-2 block">
              Bakkavor saved 22,000 tonnes of waste through strategic data partnerships. Our platform provides
              the real-time visibility needed for this level of operational efficiency.
            </span>
            <a
              href="https://www.bakkavor.com/en/esg/esg-resources/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
            >
              Source <ArrowNarrowRightIcon className="h-3 w-3" />
            </a>
          </>
        }
      />
      <Stat
        stat={<span className="font-bold">4.8 Tonnes Saved</span>}
        text={
          <>
            <span className="block font-medium text-olive-950 dark:text-white">Cottage Delight</span>
            <span className="mt-2 block">
              SMEs are optimizing packaging in minutes, not weeks, to hit the BRC Retailer Plastic Pact targets.
            </span>
            <a
              href="https://www.brcgs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
            >
              Source <ArrowNarrowRightIcon className="h-3 w-3" />
            </a>
          </>
        }
      />
    </StatsThreeColumnWithDescription>
  )
}
