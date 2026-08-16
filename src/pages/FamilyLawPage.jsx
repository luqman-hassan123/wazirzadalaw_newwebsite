import { ServicePageTemplate } from '../components/ui'
import { servicePages } from '../data/content'

export default function FamilyLawPage() {
  const page = servicePages.familyLaw
  return <ServicePageTemplate {...page} />
}
