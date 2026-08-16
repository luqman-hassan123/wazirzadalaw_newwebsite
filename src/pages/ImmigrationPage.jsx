import { ServicePageTemplate } from '../components/ui'
import { servicePages } from '../data/content'

export default function ImmigrationPage() {
  const page = servicePages.immigration
  return <ServicePageTemplate {...page} />
}
