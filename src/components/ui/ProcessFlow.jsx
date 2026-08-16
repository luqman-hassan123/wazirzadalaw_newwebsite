import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function ProcessFlow({ steps, title = 'How it works' }) {
  return (
    <AnimatedSection className="my-8 rounded-2xl border border-brand-gold/20 bg-brand-navy p-8 text-brand-white shadow-card md:p-10">
      <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
        {title}
      </p>
      <div className="flex flex-col gap-5">
        {steps.map((step, index) => (
          <div key={step} className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-bold text-brand-navy-dark">
              {index + 1}
            </span>
            <div className="flex-1 pt-1">
              <span className="text-sm font-medium md:text-base">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="mt-2 hidden h-4 w-4 shrink-0 text-brand-gold/50 md:block" />
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
