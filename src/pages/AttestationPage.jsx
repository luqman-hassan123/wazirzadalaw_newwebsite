import { ServicePageTemplate } from '../components/ui'
import { servicePages } from '../data/content'

export default function AttestationPage() {
  const page = servicePages.attestation
  return <ServicePageTemplate {...page} />
}
