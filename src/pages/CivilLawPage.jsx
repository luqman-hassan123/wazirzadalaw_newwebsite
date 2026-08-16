import { ServicePageTemplate } from '../components/ui'
import { servicePages } from '../data/content'

export default function CivilLawPage() {
  const page = servicePages.civilLaw
  return <ServicePageTemplate {...page} />
}
