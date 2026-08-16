import { ServicePageTemplate } from '../components/ui'
import { servicePages } from '../data/content'

export default function OverseasPakistanisPage() {
  const page = servicePages.overseasPakistanis
  return <ServicePageTemplate {...page} />
}
