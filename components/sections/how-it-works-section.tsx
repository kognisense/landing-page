import { HowItWorks, Step } from './how-it-works'

export function HowItWorksSection() {
  return (
    <HowItWorks id="how-it-works">
      <Step
        number="01"
        title="Upload Documents"
        description="Drag and drop invoices, utility bills, and fleet logs. Our processing engine handles PDF, Excel, and images with high accuracy."
      />
      <Step
        number="02"
        title="AI Extraction"
        description="Secure pipelines and AI models (AWS Bedrock) categorize and validate data points against UK SDR standards. No manual entry. No human error."
      />
      <Step
        number="03"
        title="Generate Reports"
        description="Timely, audit-ready outputs for SECR, ESRS, or s172 statements. Export to Excel or PDF with a single click."
      />
    </HowItWorks>
  )
}
