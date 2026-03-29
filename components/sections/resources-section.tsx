import { RegulatoryResourceCenter, ResourceCard } from './regulatory-resource-center'

export function ResourcesSection() {
  return (
    <RegulatoryResourceCenter id="resources">
      <ResourceCard
        source="GOV.UK"
        title="SECR Reporting Guidelines"
        description="Official Streamlined Energy and Carbon Reporting guidance for UK businesses."
        url="https://www.gov.uk/government/publications/environmental-reporting-guidelines-including-mandatory-greenhouse-gas-emissions-reporting-guidance"
        status="MANDATORY"
        statusVariant="mandatory"
      />
      <ResourceCard
        source="FCA"
        title="Climate & Sustainable Finance"
        description="Financial Conduct Authority guidance on ESG disclosure and ratings."
        url="https://www.fca.org.uk/firms/climate-change-sustainable-finance"
        status="ACTIVE GUIDANCE"
        statusVariant="info"
      />
      <ResourceCard
        source="HM Treasury"
        title="UK SDR Roadmap"
        description="Sustainability Disclosure Requirements and green labeling framework."
        url="https://www.gov.uk/government/publications/sustainability-disclosure-requirements-implementation-update-2024"
        status="ENFORCEMENT 2027"
        statusVariant="warning"
      />
      <ResourceCard
        source="EU Commission"
        title="CSRD Directive"
        description="Corporate Sustainability Reporting Directive for EU market access."
        url="https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en"
        status="EU REQUIRED"
        statusVariant="eu"
      />
      <ResourceCard
        source="EU Commission"
        title="EUDR Regulation"
        description="EU Deforestation Regulation due diligence requirements."
        url="https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en"
        status="ENFORCEMENT ACTIVE"
        statusVariant="mandatory"
      />
      <ResourceCard
        source="Companies House"
        title="s172 Statement Guide"
        description="Section 172 strategic report requirements for UK companies."
        url="https://www.legislation.gov.uk/ukpga/2006/46/section/172"
        status="MANDATORY"
        statusVariant="mandatory"
      />
    </RegulatoryResourceCenter>
  )
}
