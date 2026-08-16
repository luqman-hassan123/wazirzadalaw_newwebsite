import { AlertCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function NoticeBox({ children }) {
  return (
    <AnimatedSection className="my-8 flex gap-4 rounded-xl border border-brand-gold/30 bg-brand-gold/10 p-6 md:p-8">
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" />
      <p className="text-sm leading-relaxed text-brand-navy md:text-base">{children}</p>
    </AnimatedSection>
  )
}
