'use client'

import { useState } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { Button, PlainButton } from '../elements/button'
import { ProgressBar } from '../elements/progress-bar'
import { LoadingOverlay } from '../elements/loading-overlay'
import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon'

// Types
type FormData = {
  turnover: number
  employees: number
  marketReach: string[]
  commodities: string[]
  processMaturity: string
}

type RiskProfile = 'HIGH_RISK' | 'MEDIUM_RISK' | 'PREPARATORY'

// Step 1: Company Scale
function Step1CompanyScale({
  formData,
  setFormData,
}: {
  formData: FormData
  setFormData: (data: FormData) => void
}) {
  const options = [
    { value: 0, label: 'Small (Under £10m, <50 employees)', turnover: 5000000, employees: 25 },
    { value: 1, label: 'Medium (£10m-£36m, 50-250 employees)', turnover: 20000000, employees: 150 },
    { value: 2, label: 'Large (Over £36m, 250+ employees)', turnover: 50000000, employees: 300 },
  ]

  const handleSelect = (option: typeof options[0]) => {
    setFormData({ ...formData, turnover: option.turnover, employees: option.employees })
  }

  const selectedOption = options.find((opt) => opt.turnover === formData.turnover && opt.employees === formData.employees)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl/8 font-semibold tracking-tight text-olive-950 dark:text-white">Company Scale</h3>
        <p className="mt-2 text-base/7 text-olive-700 dark:text-olive-400">Select your company size</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option)}
            className={`w-full cursor-pointer rounded-lg p-4 text-left transition-all ${
              selectedOption?.value === option.value
                ? 'bg-olive-950 text-white ring-2 ring-olive-600 dark:bg-white dark:text-olive-950'
                : 'bg-olive-950/5 text-olive-950 hover:bg-olive-950/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="font-semibold">{option.label}</div>
              {selectedOption?.value === option.value && (
                <svg className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// Step 2: Market Reach
function Step2MarketReach({
  formData,
  setFormData,
}: {
  formData: FormData
  setFormData: (data: FormData) => void
}) {
  const options = [
    { value: 'uk_retailers', label: 'Supplies UK Retailers', desc: "Tesco, M&S, Sainsbury's, Asda, etc." },
    { value: 'exports_eu', label: 'Exports to EU', desc: 'Trade with EU Single Market countries' },
    { value: 'domestic', label: 'Domestic Only', desc: 'UK market only, no exports' },
  ]

  const toggleOption = (value: string) => {
    let newReach: string[]

    if (formData.marketReach.includes(value)) {
      // Deselecting
      newReach = formData.marketReach.filter((v) => v !== value)
    } else {
      // Selecting
      if (value === 'domestic') {
        // If selecting "Domestic Only", clear all other options
        newReach = ['domestic']
      } else {
        // If selecting UK Retailers or Exports to EU, remove "Domestic Only"
        newReach = [...formData.marketReach.filter((v) => v !== 'domestic'), value]
      }
    }

    setFormData({ ...formData, marketReach: newReach })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl/8 font-semibold tracking-tight text-olive-950 dark:text-white">Market Reach</h3>
        <p className="mt-2 text-base/7 text-olive-700 dark:text-olive-400">Select all that apply to your business</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => toggleOption(option.value)}
            className={`w-full cursor-pointer rounded-lg p-4 text-left transition-all ${
              formData.marketReach.includes(option.value)
                ? 'bg-olive-950 text-white ring-2 ring-olive-600 dark:bg-white dark:text-olive-950'
                : 'bg-olive-950/5 text-olive-950 hover:bg-olive-950/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold">{option.label}</div>
                <div className="mt-1 text-sm opacity-80">{option.desc}</div>
              </div>
              {formData.marketReach.includes(option.value) && (
                <svg className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// Step 3: Commodity Exposure
function Step3CommodityExposure({
  formData,
  setFormData,
}: {
  formData: FormData
  setFormData: (data: FormData) => void
}) {
  const options = [
    { value: 'soy', label: 'Soy', desc: 'Products containing soy or soy derivatives' },
    { value: 'cocoa', label: 'Cocoa', desc: 'Chocolate products or cocoa derivatives' },
    { value: 'palm_oil', label: 'Palm Oil', desc: 'Products containing palm oil' },
    { value: 'coffee', label: 'Coffee', desc: 'Coffee beans or coffee products' },
    { value: 'beef', label: 'Beef', desc: 'Beef products or cattle-derived ingredients' },
    { value: 'none', label: 'None of the Above', desc: 'No EUDR-regulated commodities' },
  ]

  const toggleOption = (value: string) => {
    let newCommodities: string[]

    if (formData.commodities.includes(value)) {
      // Deselecting
      newCommodities = formData.commodities.filter((v) => v !== value)
    } else {
      // Selecting
      if (value === 'none') {
        // If selecting "None of the Above", clear all other options
        newCommodities = ['none']
      } else {
        // If selecting any commodity, remove "None of the Above"
        newCommodities = [...formData.commodities.filter((v) => v !== 'none'), value]
      }
    }

    setFormData({ ...formData, commodities: newCommodities })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl/8 font-semibold tracking-tight text-olive-950 dark:text-white">
          Commodity Exposure
        </h3>
        <p className="mt-2 text-base/7 text-olive-700 dark:text-olive-400">
          Select all EUDR-regulated commodities your business uses
        </p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => toggleOption(option.value)}
            className={`w-full cursor-pointer rounded-lg p-4 text-left transition-all ${
              formData.commodities.includes(option.value)
                ? 'bg-olive-950 text-white ring-2 ring-olive-600 dark:bg-white dark:text-olive-950'
                : 'bg-olive-950/5 text-olive-950 hover:bg-olive-950/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold">{option.label}</div>
                <div className="mt-1 text-sm opacity-80">{option.desc}</div>
              </div>
              {formData.commodities.includes(option.value) && (
                <svg className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// Step 4: Process Maturity
function Step4ProcessMaturity({
  formData,
  setFormData,
}: {
  formData: FormData
  setFormData: (data: FormData) => void
}) {
  const options = [
    { value: 'manual', label: 'Manual/Excel', desc: 'Tracking data manually or using spreadsheets' },
    { value: 'consultant', label: 'External Consultant', desc: 'Working with sustainability consultants' },
    { value: 'not_tracking', label: 'Not Tracking', desc: 'No formal ESG data tracking in place' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl/8 font-semibold tracking-tight text-olive-950 dark:text-white">Process Maturity</h3>
        <p className="mt-2 text-base/7 text-olive-700 dark:text-olive-400">
          How do you currently track ESG data?
        </p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setFormData({ ...formData, processMaturity: option.value })}
            className={`w-full cursor-pointer rounded-lg p-4 text-left transition-all ${
              formData.processMaturity === option.value
                ? 'bg-olive-950 text-white ring-2 ring-olive-600 dark:bg-white dark:text-olive-950'
                : 'bg-olive-950/5 text-olive-950 hover:bg-olive-950/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold">{option.label}</div>
                <div className="mt-1 text-sm opacity-80">{option.desc}</div>
              </div>
              {formData.processMaturity === option.value && (
                <svg className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// Results Display
function ResultsDisplay({
  riskProfile,
  formData,
  onReset,
}: {
  riskProfile: RiskProfile
  formData: FormData
  onReset: () => void
}) {
  const profiles = {
    HIGH_RISK: {
      status: 'IMMEDIATE COMPLIANCE REQUIRED',
      statusColor: 'text-red-700 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      regulations: [
        {
          name: 'UK SDR',
          deadline: 'Jan 2026',
          link: 'https://www.gov.uk/government/publications/sustainability-disclosure-requirements-sdr-and-investment-labels',
        },
        { name: 'SECR', deadline: 'Mandatory', link: 'https://www.gov.uk/guidance/environmental-reporting-guidelines' },
        {
          name: "Tesco/M&S Scope 3",
          deadline: 'Ongoing',
          link: 'https://www.tescoplc.com/sustainability/documents/',
        },
      ],
      impact: 'Risk of civil penalties (£40k+) and loss of Tier-1 Retailer contracts.',
      actions: [
        'Begin mandatory Scope 3 carbon emissions tracking immediately',
        'Implement audit-ready data collection systems',
        'Register with FRC for SECR compliance verification',
      ],
    },
    MEDIUM_RISK: {
      status: 'SUPPLY CHAIN EXPOSURE',
      statusColor: 'text-orange-700 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      regulations: [
        {
          name: 'EUDR',
          deadline: 'Dec 2025',
          link: 'https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en',
        },
        { name: 'CSRD', deadline: 'June 2026', link: 'https://www.efrag.org/lab3' },
      ],
      impact: '4% Turnover penalty risk for EUDR. Early data adoption reduces compliance costs by 40%.',
      actions: [
        'Verify commodity origins and maintain deforestation-free supply chain documentation',
        'Begin voluntary emissions tracking to prepare for CSRD ripple effects',
        'Establish data partnerships with upstream suppliers',
      ],
    },
    PREPARATORY: {
      status: 'VOLUNTARY / PREPARATORY',
      statusColor: 'text-olive-700 dark:text-olive-400',
      bgColor: 'bg-olive-50 dark:bg-olive-950/20',
      regulations: [
        { name: 'SECR', deadline: 'Voluntary', link: 'https://www.gov.uk/guidance/environmental-reporting-guidelines' },
        { name: 'Industry Benchmarking', deadline: 'Ongoing', link: 'https://www.brcgs.com/' },
      ],
      impact:
        'No immediate penalties. Building ESG habits now creates a competitive advantage for future supermarket bids.',
      actions: [
        'Begin voluntary emissions tracking to establish baseline data',
        'Explore BRCGS certification pathways for future market access',
        'Document current processes to streamline future compliance',
      ],
    },
  }

  const profile = profiles[riskProfile]

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <div
          className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${profile.bgColor} ${profile.statusColor}`}
        >
          {profile.status}
        </div>
        <Subheading className="mt-4">Your Compliance Profile</Subheading>
      </div>

      {/* Business Profile Echo */}
      <div className="mb-8 rounded-xl bg-olive-950/2.5 p-6 dark:bg-white/5">
        <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Your Business Profile</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-sm text-olive-600 dark:text-olive-500">Annual Turnover</div>
            <div className="mt-1 text-xl font-semibold text-olive-950 dark:text-white">
              £{(formData.turnover / 1_000_000).toFixed(1)}m
            </div>
          </div>
          <div>
            <div className="text-sm text-olive-600 dark:text-olive-500">Employees</div>
            <div className="mt-1 text-xl font-semibold text-olive-950 dark:text-white">{formData.employees}+</div>
          </div>
          <div>
            <div className="text-sm text-olive-600 dark:text-olive-500">Market Reach</div>
            <div className="mt-1 text-base font-medium text-olive-950 dark:text-white">
              {formData.marketReach.length > 0 ? formData.marketReach.join(', ') : 'Not specified'}
            </div>
          </div>
          <div>
            <div className="text-sm text-olive-600 dark:text-olive-500">Commodity Exposure</div>
            <div className="mt-1 text-base font-medium text-olive-950 dark:text-white">
              {formData.commodities.length > 0 ? `${formData.commodities.length} commodities` : 'None'}
            </div>
          </div>
        </div>
      </div>

      {/* Applicable Regulations */}
      <div className="mb-8 rounded-xl bg-olive-950/2.5 p-6 dark:bg-white/5">
        <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Applicable Regulations</h3>
        <div className="mt-4 space-y-3">
          {profile.regulations.map((reg) => (
            <div key={reg.name} className="flex items-center justify-between gap-4">
              <div>
                <div className="font-medium text-olive-950 dark:text-white">{reg.name}</div>
                <div className="text-sm text-olive-600 dark:text-olive-500">Deadline: {reg.deadline}</div>
              </div>
              <a
                href={reg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-olive-600 hover:text-olive-700 dark:text-olive-500 dark:hover:text-olive-400"
              >
                Official Source <ArrowNarrowRightIcon className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Statement */}
      <div className="mb-8 rounded-xl bg-olive-950/2.5 p-6 dark:bg-white/5">
        <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Impact Assessment</h3>
        <p className="mt-3 text-base/7 text-olive-700 dark:text-olive-400">{profile.impact}</p>
      </div>

      {/* Recommended Actions */}
      <div className="mb-8 rounded-xl bg-olive-950/2.5 p-6 dark:bg-white/5">
        <h3 className="text-lg font-semibold text-olive-950 dark:text-white">Recommended Actions</h3>
        <ul className="mt-4 space-y-3">
          {profile.actions.map((action, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="h-6 w-6 flex-shrink-0 text-olive-600 dark:text-olive-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base/7 text-olive-700 dark:text-olive-400">{action}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Lead Capture CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-olive-950 dark:text-white">
          Your 15-Point Regulatory Roadmap is Ready
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-base/7 text-olive-700 dark:text-olive-400">
          Enter your business email to download the full PDF, including specific mitigation strategies for your profile.
        </p>
        <form className="mx-auto mt-6 flex max-w-md gap-2 rounded-full bg-olive-950 p-2 dark:bg-white">
          <input
            type="email"
            placeholder="business@company.com"
            required
            className="flex-1 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:outline-hidden dark:text-olive-950 dark:placeholder:text-olive-950/50"
          />
          <Button type="submit" size="lg" color="light">
            Download PDF
          </Button>
        </form>
      </div>

      {/* Reset */}
      <div className="mt-6 text-center">
        <PlainButton onClick={onReset}>Take Assessment Again</PlainButton>
      </div>
    </div>
  )
}

// Main Quiz Component
export function RiskAssessmentQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    turnover: 0,
    employees: 0,
    marketReach: [],
    commodities: [],
    processMaturity: '',
  })
  const [riskProfile, setRiskProfile] = useState<RiskProfile | null>(null)

  // Calculate risk profile
  const calculateRiskProfile = (): RiskProfile => {
    const { turnover, employees, marketReach, commodities } = formData

    // HIGH RISK: Mandatory compliance required
    if (turnover > 36_000_000 || employees > 250 || marketReach.includes('uk_retailers')) {
      return 'HIGH_RISK'
    }

    // MEDIUM RISK: Supply chain exposure
    if (marketReach.includes('exports_eu') || (commodities.length > 0 && !commodities.includes('none'))) {
      return 'MEDIUM_RISK'
    }

    // PREPARATORY: Future-proofing
    return 'PREPARATORY'
  }

  // Handle form submission
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Final step - show loading then results
      setIsLoading(true)

      setTimeout(() => {
        const profile = calculateRiskProfile()
        setRiskProfile(profile)
        setIsLoading(false)
        setShowResults(true)
      }, 2500) // 2.5 second loading animation
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Reset quiz
  const handleReset = () => {
    setCurrentStep(0)
    setShowResults(false)
    setFormData({
      turnover: 0,
      employees: 0,
      marketReach: [],
      commodities: [],
      processMaturity: '',
    })
    setRiskProfile(null)
  }

  return (
    <>
      <LoadingOverlay isVisible={isLoading} />

      <section id="quiz" className="py-24">
        <Container>
          {!showResults ? (
            <>
              {/* Quiz Header */}
              <div className="mb-10 text-center">
                <Eyebrow>Compliance Assessment</Eyebrow>
                <Subheading className="mx-auto mt-2 max-w-2xl">
                  What&apos;s Your Regulatory Risk Profile?
                </Subheading>
                <p className="mx-auto mt-4 max-w-xl text-base/7 text-olive-700 dark:text-olive-400">
                  Answer 4 quick questions to receive your personalized compliance roadmap.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <ProgressBar currentStep={currentStep} totalSteps={4} />
                <p className="mt-3 text-center text-sm text-olive-600 dark:text-olive-500">
                  Step {currentStep + 1} of 4
                </p>
              </div>

              {/* Question Card */}
              <div className="mx-auto max-w-2xl rounded-xl bg-olive-950/2.5 p-8 dark:bg-white/5 sm:p-10">
                {/* STEP 1: Company Scale */}
                {currentStep === 0 && <Step1CompanyScale formData={formData} setFormData={setFormData} />}

                {/* STEP 2: Market Reach */}
                {currentStep === 1 && <Step2MarketReach formData={formData} setFormData={setFormData} />}

                {/* STEP 3: Commodity Exposure */}
                {currentStep === 2 && <Step3CommodityExposure formData={formData} setFormData={setFormData} />}

                {/* STEP 4: Process Maturity */}
                {currentStep === 3 && <Step4ProcessMaturity formData={formData} setFormData={setFormData} />}

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between border-t border-olive-950/10 pt-8 dark:border-white/10">
                  {currentStep > 0 ? (
                    <PlainButton onClick={handleBack}>Back</PlainButton>
                  ) : (
                    <div></div>
                  )}
                  <Button onClick={handleNext} size="lg">
                    {currentStep === 3 ? 'Get Results' : 'Next Step'}
                    <ArrowNarrowRightIcon />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <ResultsDisplay riskProfile={riskProfile!} formData={formData} onReset={handleReset} />
          )}
        </Container>
      </section>
    </>
  )
}
