import { ServicePageTemplate } from '../components/ui'
import { servicePages } from '../data/content'

export default function CorporateCommercialPage() {
  const page = servicePages.corporateCommercial
  return <ServicePageTemplate {...page} />
}
